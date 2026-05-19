function GanttChart({ processes }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-5">
      <h2 className="text-xl font-bold mb-4">
        Gantt Chart
      </h2>

      <div className="flex gap-2 overflow-x-auto">
        {processes.map((p, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-6 rounded-lg min-w-[100px] text-center"
          >
            {p.pid}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GanttChart