import Navbar from '../components/Navbar'
import WaitingTimeChart from '../charts/WaitingTimeChart'

function ComparisonPage() {
  const chartData = [
    {
      algorithm: 'FCFS',
      waiting_time: 12
    },
    {
      algorithm: 'SJF',
      waiting_time: 5
    },
    {
      algorithm: 'AI Scheduler',
      waiting_time: 4
    }
  ]

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-5">Algorithm Comparison
        </h1>

        <WaitingTimeChart data={chartData} />
      </div>
    </div>
  )
}

export default ComparisonPage