import Navbar from '../components/Navbar'
import MetricsCard from '../components/MetricsCard'

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricsCard
          title="CPU Utilization"
          value="85%"
        />

        <MetricsCard
          title="Processes"
          value="12"
        />

        <MetricsCard
          title="AI Efficiency"
          value="92%"
        />
      </div>
    </div>
  )
}

export default Dashboard