import React from 'react';
import { LayoutDashboard, AlertTriangle } from 'lucide-react';

interface SidebarProps {
  totalCapacity: number;
  occupiedSlots: number;
  occupancyPercentage: number;
  totalEVSlots: number;
  availableEVSlots: number;
  occupiedEVSlots: number;
  iceInEVZones: number;
  lastUpdated: Date;
}

export function Sidebar({
  totalCapacity,
  occupiedSlots,
  occupancyPercentage,
  totalEVSlots,
  availableEVSlots,
  occupiedEVSlots,
  iceInEVZones,
  lastUpdated,
}: SidebarProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });
  };

  return (
    <aside className="hidden lg:flex lg:flex-col w-60 bg-white border-r border-gray-200 flex-shrink-0">
      {/* Logo/Title */}
      <div className="p-4 border-b border-gray-200">
        <div className="font-semibold text-lg">Smart Parking</div>
        <div className="text-sm text-gray-500">Management System</div>
      </div>

      {/* Navigation */}
      <nav className="p-4 border-b border-gray-200">
        <ul className="space-y-2">
          <li>
            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Metrics Panel */}
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        <div className="text-sm font-semibold text-gray-700 mb-3">System Metrics</div>
        
        {/* Total Capacity */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-sm text-gray-500 mb-1">Total Capacity</div>
          <div className="text-2xl font-semibold">{totalCapacity}</div>
        </div>

        {/* Current Occupancy */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-sm text-gray-500 mb-2">Current Occupancy</div>
          <div className="text-2xl font-semibold mb-2">
            {occupiedSlots} <span className="text-lg text-gray-400">({occupancyPercentage}%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${occupancyPercentage}%` }}
            />
          </div>
        </div>

        {/* EV Slots Status */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-sm text-gray-500 mb-2">EV Slots Status</div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-semibold">{occupiedEVSlots}</span>
            <span className="text-gray-500">/ {totalEVSlots} occupied</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {availableEVSlots} available
          </div>
        </div>

        {/* ICE in EV Zones */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-500">ICE in EV Zones</div>
            {iceInEVZones > 0 && (
              <span className="flex items-center justify-center w-5 h-5 bg-yellow-400 text-white text-xs font-bold rounded-full">
                !
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">{iceInEVZones}</span>
            {iceInEVZones > 0 && (
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
            )}
          </div>
        </div>
      </div>

      {/* Last Updated Timestamp */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Last Updated: {formatTime(lastUpdated)}
        </div>
      </div>
    </aside>
  );
}