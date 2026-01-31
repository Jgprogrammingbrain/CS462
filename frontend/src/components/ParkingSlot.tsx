import React, { useState } from 'react';
import { Car, Zap, Info, Battery, BatteryCharging } from 'lucide-react';
import type { ParkingSlotData } from '../App';

interface ParkingSlotProps {
  slot: ParkingSlotData;
}

export function ParkingSlot({ slot }: ParkingSlotProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getLEDColor = (status: string) => {
    switch (status) {
      case 'available':
        return '#22c55e'; // green
      case 'occupied':
        return '#ef4444'; // red
      case 'ev-charging':
        return '#3b82f6'; // blue
      case 'ice-to-vacate':
        return '#eab308'; // yellow
      default:
        return '#9ca3af'; // gray
    }
  };

  const getVehicleIcon = () => {
    if (slot.status === 'available') return null;
    
    if (slot.vehicleType === 'EV' || slot.status === 'ev-charging') {
      return (
        <div className="flex flex-col items-center gap-0.5 md:gap-1">
          <div className="relative">
            <Car className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-blue-700 bg-blue-100 px-1.5 md:px-2 py-0.5 rounded">EV</span>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center gap-0.5 md:gap-1">
        <Car className="w-8 h-8 md:w-10 md:h-10 text-gray-700" />
        <span className="text-[10px] md:text-xs font-bold text-gray-700 bg-gray-200 px-1.5 md:px-2 py-0.5 rounded">ICE</span>
      </div>
    );
  };

  // Enhanced styling for EV charging slots
  const isCharging = slot.status === 'ev-charging';
  const cardStyle = {
    backgroundColor: slot.isEVSlot ? '#F0F8FF' : '#ffffff',
    border: slot.isEVSlot ? '2px solid #4A90E2' : '1px solid #e5e7eb',
    boxShadow: isCharging 
      ? '0 0 16px rgba(59, 130, 246, 0.4), 0 2px 4px rgba(0,0,0,0.1)' 
      : '0 2px 4px rgba(0,0,0,0.1)',
  };

  return (
    <div 
      className={`relative rounded-lg p-3 md:p-4 transition-all hover:shadow-md w-full aspect-[6/5] ${isCharging ? 'animate-pulse-subtle' : ''}`}
      style={cardStyle}
    >
      {/* Charging Animation Overlay */}
      {isCharging && (
        <div 
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.2) 100%)',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
      )}

      {/* LED Indicator with enhanced glow */}
      <div 
        className="absolute rounded-full z-10 w-3 h-3 md:w-4 md:h-4"
        style={{
          top: '8px',
          right: '8px',
          backgroundColor: getLEDColor(slot.status),
          boxShadow: isCharging 
            ? `0 0 12px ${getLEDColor(slot.status)}, 0 0 24px ${getLEDColor(slot.status)}`
            : `0 0 8px ${getLEDColor(slot.status)}`,
        }}
      />

      {/* Slot Number with enhanced styling */}
      <div className={`text-xs md:text-sm font-semibold mb-1 md:mb-2 ${slot.isEVSlot ? 'text-blue-700' : 'text-gray-700'}`}>
        #{slot.id.toString().padStart(2, '0')}
      </div>

      {/* Vehicle Icon with enhanced distinction */}
      <div className="flex items-center justify-center h-8 md:h-10 relative z-10">
        {getVehicleIcon()}
      </div>

      {/* EV Icon and Info for EV slots with enhanced styling */}
      {slot.isEVSlot && (
        <div className="absolute bottom-2 left-2 flex items-center gap-1 z-10">
          <div className={`rounded p-0.5 ${isCharging ? 'bg-blue-500' : 'bg-blue-400'}`}>
            <Zap className={`w-4 h-4 md:w-5 md:h-5 ${isCharging ? 'text-white' : 'text-white'}`} />
          </div>
          <div 
            className="relative hidden md:block"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Info className="w-3 h-3 md:w-4 md:h-4 text-gray-400 cursor-help" />
            
            {/* Tooltip */}
            {showTooltip && (
              <div 
                className="absolute left-0 bottom-full mb-2 w-48 bg-gray-900 text-white text-xs rounded-lg p-2 z-10"
                style={{ fontSize: '11px' }}
              >
                EV priority - ICE vehicles allowed during low occupancy only.
                <div 
                  className="absolute top-full left-4 w-0 h-0"
                  style={{
                    borderLeft: '4px solid transparent',
                    borderRight: '4px solid transparent',
                    borderTop: '4px solid #111827',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Warning indicator for ICE in EV zone */}
      {slot.isEVSlot && slot.vehicleType === 'ICE' && (
        <div 
          className="absolute top-2 left-2 bg-yellow-400 text-white text-[9px] md:text-xs font-bold px-1 md:px-1.5 py-0.5 rounded z-10"
        >
          WARN
        </div>
      )}
    </div>
  );
}