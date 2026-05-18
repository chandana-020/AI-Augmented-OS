import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import SchedulerPage from './pages/SchedulerPage'
import MemoryPage from './pages/MemoryPage'
import ComparisonPage from './pages/ComparisonPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scheduler" element={<SchedulerPage />} />
        <Route path="/memory" element={<MemoryPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App