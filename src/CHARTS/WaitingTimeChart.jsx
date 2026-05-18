import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'

function WaitingTimeChart({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-5">
      <h2 className="text-xl font-bold mb-4">
        Waiting Time Comparison
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="algorithm" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="waiting_time" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WaitingTimeChart