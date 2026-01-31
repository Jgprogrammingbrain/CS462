import React from 'react';

export function Legend() {
  const legendItems = [
    { color: '#22c55e', label: 'Available', icon: '🟢' },
    { color: '#ef4444', label: 'Occupied', icon: '🔴' },
    { color: '#3b82f6', label: 'EV Charging', icon: '🔵' },
    { color: '#eab308', label: 'ICE to Vacate', icon: '🟡' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-4 md:px-6 lg:px-8 py-3 md:py-4 flex-shrink-0">
      <div className="flex items-center gap-3 md:gap-4 lg:gap-6 flex-wrap">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 md:w-4 md:h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}