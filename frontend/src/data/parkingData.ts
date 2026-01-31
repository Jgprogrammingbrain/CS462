export type SlotStatus = 'available' | 'occupied' | 'ev-charging' | 'ice-to-vacate';

export interface ParkingSlotData {
  id: number;
  number: string;
  isEvSlot: boolean;
  status: SlotStatus;
}

// 20 slots total: 15 regular (1-15), 5 EV (16-20)
export const parkingData: ParkingSlotData[] = [
  // Regular slots (1-15)
  { id: 1, number: '001', isEvSlot: false, status: 'occupied' },
  { id: 2, number: '002', isEvSlot: false, status: 'available' },
  { id: 3, number: '003', isEvSlot: false, status: 'occupied' },
  { id: 4, number: '004', isEvSlot: false, status: 'available' },
  { id: 5, number: '005', isEvSlot: false, status: 'occupied' },
  { id: 6, number: '006', isEvSlot: false, status: 'occupied' },
  { id: 7, number: '007', isEvSlot: false, status: 'available' },
  { id: 8, number: '008', isEvSlot: false, status: 'occupied' },
  { id: 9, number: '009', isEvSlot: false, status: 'available' },
  { id: 10, number: '010', isEvSlot: false, status: 'occupied' },
  { id: 11, number: '011', isEvSlot: false, status: 'available' },
  { id: 12, number: '012', isEvSlot: false, status: 'occupied' },
  { id: 13, number: '013', isEvSlot: false, status: 'available' },
  { id: 14, number: '014', isEvSlot: false, status: 'occupied' },
  { id: 15, number: '015', isEvSlot: false, status: 'available' },
  
  // EV slots (16-20)
  { id: 16, number: 'EV-01', isEvSlot: true, status: 'ev-charging' },
  { id: 17, number: 'EV-02', isEvSlot: true, status: 'available' },
  { id: 18, number: 'EV-03', isEvSlot: true, status: 'ev-charging' },
  { id: 19, number: 'EV-04', isEvSlot: true, status: 'ice-to-vacate' },
  { id: 20, number: 'EV-05', isEvSlot: true, status: 'available' },
];
