export function LegendBar() {
  const legendItems = [
    { color: 'bg-green-500', label: '🟢 Available' },
    { color: 'bg-red-500', label: '🔴 Occupied' },
    { color: 'bg-blue-500', label: '🔵 EV Charging' },
    { color: 'bg-yellow-500', label: '🟡 ICE to Vacate' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="inline-flex items-center gap-6">
        <span className="text-sm font-medium text-gray-700">Status Legend:</span>
        {legendItems.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full ${item.color}`} />
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
