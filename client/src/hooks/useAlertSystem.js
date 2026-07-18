import { useState, useEffect, useCallback, useRef } from 'react';
import { COGNITIVE_LOAD_LEVELS, ALERT_TYPES, ALERT_THRESHOLDS } from '../utils/constants';
import { triggerFeedback } from '../utils/feedback';

/**
 * Custom hook to manage alert system with spam protection and grace periods
 */
export const useAlertSystem = (currentData, faceDetected) => {
  const [alerts, setAlerts] = useState([]);
  const [highLoadStartTime, setHighLoadStartTime] = useState(null);
  const [faceLostStartTime, setFaceLostStartTime] = useState(null);
  
  // Registry to track the last time each specific message was alerted (persistent cooldown)
  const lastAlertTimes = useRef({});
  const ALERT_COOLDOWN_MS = 30000; // 30 seconds before repeating the same message

  // Add new alert with duplicate/spam prevention
  const addAlert = useCallback((newAlert) => {
    const messageKey = newAlert.message;
    const now = Date.now();
    
    // 1. Permanent Cooldown Check (Last reported vs Now)
    const lastTime = lastAlertTimes.current[messageKey] || 0;
    if (now - lastTime < ALERT_COOLDOWN_MS) {
      return; // Still in cooldown, skip adding
    }

    // 2. State Check (Is it already in the list?)
    setAlerts(prev => {
      const exists = prev.find(a => a.message === messageKey);
      if (exists) return prev; // Already visible, skip

      // 3. Register the new alert
      lastAlertTimes.current[messageKey] = now;
      const alertId = now;
      
      // 4. Trigger Haptic/Audio Feedback for DANGER alerts
      triggerFeedback(newAlert.type);
      
      // 5. Auto-dismissal for THIS specific alert
      setTimeout(() => {
        setAlerts(current => current.filter(a => a.id !== alertId));
      }, 5000); // Individual 5-second timer

      return [...prev, { ...newAlert, id: alertId }];
    });
  }, []);

  // Dismiss alert manually
  const dismissAlert = useCallback((alertId) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  }, []);

  // Clear all alerts
  const clearAllAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  // Monitor cognitive load, blink rate, and face detection
  useEffect(() => {
    const now = Date.now();

    // 1. Face Detection Grace Period (2 seconds)
    if (!faceDetected) {
      if (!faceLostStartTime) {
        setFaceLostStartTime(now);
      } else if (now - faceLostStartTime > 2000) { // Condition must persist for 2s
        addAlert({
          type: ALERT_TYPES.DANGER,
          message: 'No face detected! Please position yourself for tracking.',
          timestamp: now
        });
      }
      return; 
    } else {
      setFaceLostStartTime(null);
    }

    if (!currentData) return;

    const { cognitiveLoad, blinkRate } = currentData;

    // 2. Track high cognitive load duration
    if (cognitiveLoad === COGNITIVE_LOAD_LEVELS.HIGH || cognitiveLoad === COGNITIVE_LOAD_LEVELS.CRITICAL) {
      if (!highLoadStartTime) {
        setHighLoadStartTime(now);
      } else {
        const duration = now - highLoadStartTime;
        if (duration >= ALERT_THRESHOLDS.HIGH_COGNITIVE_LOAD_DURATION) {
          addAlert({
            type: ALERT_TYPES.DANGER,
            message: `High cognitive load (${cognitiveLoad}) detected! Consider taking a short break.`,
            timestamp: now
          });
          setHighLoadStartTime(now);
        }
      }
    } else {
      setHighLoadStartTime(null);
    }

    // 3. Alert for abnormal blink rate
    if (blinkRate < ALERT_THRESHOLDS.LOW_BLINK_RATE) {
      addAlert({
        type: ALERT_TYPES.WARNING,
        message: 'Low blink rate detected. Remember to blink to avoid eye strain.',
        timestamp: now
      });
    } else if (blinkRate > ALERT_THRESHOLDS.HIGH_BLINK_RATE) {
      addAlert({
        type: ALERT_TYPES.WARNING,
        message: 'High blink rate detected. You might be experiencing fatigue.',
        timestamp: now
      });
    }

    // 4. Alert for moderate cognitive load
    if (cognitiveLoad === COGNITIVE_LOAD_LEVELS.MEDIUM) {
      addAlert({
        type: ALERT_TYPES.INFO,
        message: 'Moderate cognitive load detected. Stay focused!',
        timestamp: now
      });
    }
  }, [currentData, faceDetected, highLoadStartTime, faceLostStartTime, addAlert]);

  return {
    alerts,
    dismissAlert,
    clearAllAlerts
  };
};
