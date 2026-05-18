import { useState } from 'react'

import Navbar from '../components/Navbar'
import ProcessTable from '../components/ProcessTable'
import GanttChart from '../components/GanttChart'
import AIInsights from '../components/AIInsights'
import WaitingTimeChart from '../charts/WaitingTimeChart'

import API from '../services/api'

function SchedulerPage() {

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  // ✅ NEW: algorithm state
  const [algorithm, setAlgorithm] = useState('FCFS')

  const sampleProcesses = [
    { pid: 'P1', arrival: 0, burst: 5 },
    { pid: 'P2', arrival: 1, burst: 3 },
    { pid: 'P3', arrival: 2, burst: 8 }
  ]

  const insights = [
    'AI recommends SJF for lower waiting time',
    'CPU load is currently stable',
    'Round Robin suitable for multitasking'
  ]

  const chartData = [
    { algorithm: 'FCFS', waiting_time: 10 },
    { algorithm: 'SJF', waiting_time: 6 },
    { algorithm: 'RR', waiting_time: 8 }
  ]

  // ✅ BACKEND CALL
  const runSimulation = async () => {
    try {
      setLoading(true)

      const response = await API.post('/schedule', {
        algorithm: algorithm,   // ✅ dynamic now
        processes: sampleProcesses
      })

      console.log("Backend Response:", response.data)
      setResult(response.data)

    } catch (error) {
      console.log("Error:", error)

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            AI-Augmented Operating System Scheduler
          </h1>

          <div className="flex items-center gap-3">

            {/* ✅ DROPDOWN ADDED */}
            <select
              value={algorithm}
              onChange={(e) => setAlgorithm(e.target.value)}
              className="border p-2 rounded-lg"
            >
              <option value="FCFS">FCFS</option>
              <option value="SJF">SJF</option>
              <option value="RR">Round Robin</option>
            </select>

            <button
              onClick={runSimulation}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              {loading ? "Running..." : "Run Simulation"}
            </button>

          </div>

        </div>

        {/* PROCESS TABLE */}
        <ProcessTable processes={sampleProcesses} />

        {/* GANTT CHART */}
        <div className="mt-6">
          <GanttChart processes={sampleProcesses} />
        </div>

        {/* WAITING TIME CHART */}
        <div className="mt-6">
          <WaitingTimeChart data={chartData} />
        </div>

        {/* AI INSIGHTS */}
        <div className="mt-6">
          <AIInsights insights={insights} />
        </div>

        {/* BACKEND OUTPUT */}
        <div className="bg-white rounded-xl shadow-md p-5 mt-6">

          <h2 className="text-xl font-bold mb-4">
            Backend Output
          </h2>

          <pre className="bg-gray-100 p-3 rounded-lg overflow-auto">
            {result ? JSON.stringify(result, null, 2) : "No data yet"}
          </pre>

        </div>

      </div>
    </div>
  )
}

export default SchedulerPage