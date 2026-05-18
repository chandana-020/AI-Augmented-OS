function ProcessTable({ processes }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-5">
      <h2 className="text-xl font-bold mb-4">
        Process Table
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">PID</th>
            <th className="p-2">Arrival</th>
            <th className="p-2">Burst</th>
          </tr>
        </thead>

        <tbody>
          {processes.map((p, index) => (
            <tr key={index} className="text-center border-b">
              <td className="p-2">{p.pid}</td>
              <td className="p-2">{p.arrival}</td>
              <td className="p-2">{p.burst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   )
}

export default ProcessTable   