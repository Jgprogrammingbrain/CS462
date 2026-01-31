import React from 'react';
import { Activity } from 'lucide-react';

interface HeaderProps {
  occupiedSlots: number;
  totalCapacity: number;
}

export function Header({ occupiedSlots, totalCapacity }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 lg:px-8 py-3 md:py-4 flex-shrink-0">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
            <span className="text-sm md:text-base text-green-500 font-medium">System Online</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="text-right">
            <div className="text-gray-500 text-xs md:text-sm">Real-Time Occupancy</div>
            <div className="text-xl md:text-2xl font-semibold">
              {occupiedSlots} / {totalCapacity}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}