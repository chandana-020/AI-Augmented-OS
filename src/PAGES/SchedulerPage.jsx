import { useState } from 'react'

import Navbar from '../components/Navbar'
import ProcessTable from '../components/ProcessTable'
import GanttChart from '../components/GanttChart'
import AIInsights from '../components/AIInsights'
import WaitingTimeChart from '../charts/WaitingTimeChart'

import API from '../services/api'

function SchedulerPage() {
  const [result, setResult] = useState(null)

  const sampleProcesses = [
    {
      pid: 'P1',
      arrival: 0,
      burst: 5
    },
    {
      pid: 'P2',
      arrival: 1,
      burst: 3
    },
    {
      pid: 'P3',
      arrival: 2,
      burst: 8
    }
  ]

   const insights = [
    'AI recommends SJF for lower waiting time',
    'CPU load is currently stable',
    'Round Robin suitable for multitasking'
  ]

  const chartData = [
    {
      algorithm: 'FCFS',
      waiting_time: 10
    },
    {
      algorithm: 'SJF',
      waiting_time: 6
    },
    {
      algorithm: 'RR',
      waiting_time: 8
    }
  ]

  const runSimulation = async () => {
    const response = await API.post('/schedule', {
      processes: sampleProcesses
    })

    setResult(response.data)
  }

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            AI-Augmented Operating System
          </h1>

          <button
            onClick={runSimulation}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Run Simulation
          </button>
        </div>

        <ProcessTable processes={sampleProcesses} />

        <GanttChart processes={sampleProcesses} />

        <WaitingTimeChart data={chartData} />

         <AIInsights insights={insights} />

        <div className="bg-white rounded-xl shadow-md p-5 mt-5">
          <h2 className="text-xl font-bold mb-4">
            Backend Output
          </h2>

          <pre>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default SchedulerPage
