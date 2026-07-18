/**
 * Audio and Haptic feedback utilities for real-time alerts
 */

// We use a singleton AudioContext to avoid multiple instances
let audioCtx = null;

/**
 * Initialize AudioContext (must be called after user interaction)
 */
const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
};

/**
 * Play a clean notification "Ping" sound using Web Audio API
 */
export const playAlertSound = (frequency = 600, duration = 0.2) => {
  try {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    
    // Frequency sweep for a more professional "ping" sound
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.5, audioCtx.currentTime + duration);

    // Fade out to prevent clicks
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  } catch (err) {
    console.warn('⚠️ Audio feedback failed:', err);
  }
};

/**
 * Trigger haptic feedback (vibration)
 */
export const triggerVibration = (pattern = [100, 50, 100]) => {
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch (err) {
      console.warn('⚠️ Haptic feedback failed:', err);
    }
  }
};

/**
 * Main entry point for alert feedback
 */
export const triggerFeedback = (type) => {
  // Only trigger for DANGER level alerts (Stressed, Critical, Lost Face)
  if (type === 'danger') {
    playAlertSound(500, 0.3);
    triggerVibration([150, 50, 150]);
  } else if (type === 'warning') {
    // Subtle warning for low/high blink rate
    playAlertSound(400, 0.1);
  }
};
