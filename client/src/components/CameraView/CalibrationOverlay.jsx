import React from 'react';
import { Target, Activity } from 'lucide-react';

const CalibrationOverlay = ({ progress }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm rounded-xl border-2 border-cyan-500/50">
      <div className="max-w-md w-full p-8 text-center bg-slate-800/90 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.2)] border border-cyan-400/30">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Target className="w-16 h-16 text-cyan-400 animate-pulse" />
            <Activity className="w-8 h-8 text-sky-500 absolute -bottom-1 -right-1" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">Initializing Analyzers</h3>
        <p className="text-slate-300 mb-8">
          Please look directly at the center of the screen and try to blink naturally. 
          Establishing your unique behavioral baseline...
        </p>
        
        <div className="relative h-4 w-full bg-slate-700 rounded-full overflow-hidden mb-3">
          <div 
            className="absolute top-0 left-0 h-full bg-linear-to-r from-cyan-500 to-sky-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
          {/* Animated glass effect on progress bar */}
          <div 
            className="absolute top-0 left-0 h-full w-20 bg-white/20 -skew-x-12 animate-[shimmer_1.5s_infinite]"
            style={{ left: `${progress - 20}%` }}
          />
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-cyan-400 font-medium">Calibrating...</span>
          <span className="text-slate-400 font-bold">{Math.round(progress)}%</span>
        </div>
      </div>
      
      {/* Target points for user to focus on */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-cyan-400 animate-ping" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
    </div>
  );
};

export default CalibrationOverlay;
