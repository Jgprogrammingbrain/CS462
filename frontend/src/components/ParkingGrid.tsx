import { ParkingSlot } from './ParkingSlot';
import { parkingData } from '../data/parkingData';

export function ParkingGrid() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Parking Grid</h2>
      <div className="grid grid-cols-5 gap-3">
        {parkingData.map((slot) => (
          <ParkingSlot key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
}
