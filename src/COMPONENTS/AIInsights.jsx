function AIInsights({ insights }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-5">
      <h2 className="text-xl font-bold mb-4">
        AI Insights
      </h2>

      {insights.map((item, index) => (
        <div
          key={index}
          className="bg-blue-100 p-3 rounded-lg mb-3"
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default AIInsights