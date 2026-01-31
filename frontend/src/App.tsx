import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Legend } from './components/Legend';
import { ParkingSlot } from './components/ParkingSlot';

export interface ParkingSlotData {
  id: number;
  isEVSlot: boolean;
  status: 'available' | 'occupied' | 'ev-charging' | 'ice-to-vacate';
  vehicleType?: 'EV' | 'ICE';
}

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Mock parking data - 15 regular slots (1-15) and 5 EV slots (16-20)
  const [parkingSlots] = useState<ParkingSlotData[]>([
    { id: 1, isEVSlot: false, status: 'occupied', vehicleType: 'ICE' },
    { id: 2, isEVSlot: false, status: 'available' },
    { id: 3, isEVSlot: false, status: 'occupied', vehicleType: 'ICE' },
    { id: 4, isEVSlot: false, status: 'available' },
    { id: 5, isEVSlot: false, status: 'occupied', vehicleType: 'ICE' },
    { id: 6, isEVSlot: false, status: 'available' },
    { id: 7, isEVSlot: false, status: 'occupied', vehicleType: 'ICE' },
    { id: 8, isEVSlot: false, status: 'available' },
    { id: 9, isEVSlot: false, status: 'occupied', vehicleType: 'ICE' },
    { id: 10, isEVSlot: false, status: 'available' },
    { id: 11, isEVSlot: false, status: 'occupied', vehicleType: 'ICE' },
    { id: 12, isEVSlot: false, status: 'available' },
    { id: 13, isEVSlot: false, status: 'occupied', vehicleType: 'EV' },
    { id: 14, isEVSlot: false, status: 'available' },
    { id: 15, isEVSlot: false, status: 'occupied', vehicleType: 'ICE' },
    { id: 16, isEVSlot: true, status: 'ev-charging', vehicleType: 'EV' },
    { id: 17, isEVSlot: true, status: 'ev-charging', vehicleType: 'EV' },
    { id: 18, isEVSlot: true, status: 'ev-charging', vehicleType: 'EV' },
    { id: 19, isEVSlot: true, status: 'ice-to-vacate', vehicleType: 'ICE' },
    { id: 20, isEVSlot: true, status: 'ev-charging', vehicleType: 'EV' },
  ]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate metrics
  const totalCapacity = parkingSlots.length;
  const occupiedSlots = parkingSlots.filter(s => s.status !== 'available').length;
  const occupancyPercentage = Math.round((occupiedSlots / totalCapacity) * 100);
  const evSlots = parkingSlots.filter(s => s.isEVSlot);
  const availableEVSlots = evSlots.filter(s => s.status === 'available').length;
  const occupiedEVSlots = evSlots.filter(s => s.status !== 'available').length;
  const iceInEVZones = parkingSlots.filter(s => s.isEVSlot && s.vehicleType === 'ICE').length;

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar
        totalCapacity={totalCapacity}
        occupiedSlots={occupiedSlots}
        occupancyPercentage={occupancyPercentage}
        totalEVSlots={evSlots.length}
        availableEVSlots={availableEVSlots}
        occupiedEVSlots={occupiedEVSlots}
        iceInEVZones={iceInEVZones}
        lastUpdated={currentTime}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header occupiedSlots={occupiedSlots} totalCapacity={totalCapacity} />

        {/* Legend */}
        <Legend />

        {/* Parking Grid */}
        <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3">
            {parkingSlots.map((slot) => (
              <ParkingSlot key={slot.id} slot={slot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}