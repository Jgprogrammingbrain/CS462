import { AlertTriangle } from 'lucide-react';

export function MetricsPanel() {
  const totalCapacity = 20;
  const currentOccupancy = 13;
  const occupancyPercentage = (currentOccupancy / totalCapacity) * 100;
  
  const evSlotsTotal = 5;
  const evSlotsAvailable = 2;
  
  const iceInEvZones = 1;

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-gray-900">Statistics</h2>
      
      {/* Total Capacity */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 mb-1">Total Capacity</p>
        <p className="text-2xl font-semibold text-gray-900">{totalCapacity}</p>
      </div>

      {/* Current Occupancy */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 mb-2">Current Occupancy</p>
        <div className="flex items-baseline gap-2 mb-2">
          <p className="text-2xl font-semibold text-gray-900">{currentOccupancy}</p>
          <p className="text-sm text-gray-600">/ {totalCapacity}</p>
        </div>
        {/* Percentage Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${occupancyPercentage}%` }}
          />
        </div>
        <p className="text-xs text-gray-500">{occupancyPercentage.toFixed(0)}% occupied</p>
      </div>

      {/* EV Slots Status */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 mb-2">EV Slots Status</p>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-semibold text-blue-600">{evSlotsAvailable}</p>
          <p className="text-sm text-gray-600">available / {evSlotsTotal} total</p>
        </div>
      </div>

      {/* ICE in EV Zones */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">ICE in EV Zones</p>
          {iceInEvZones > 0 && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Warning
            </span>
          )}
        </div>
        <p className={`text-2xl font-semibold ${iceInEvZones > 0 ? 'text-yellow-600' : 'text-green-600'}`}>
          {iceInEvZones}
        </p>
      </div>
    </div>
  );
}
