import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-slate-900 text-white p-4 flex gap-6">
      <Link to="/">Dashboard</Link>
      <Link to="/scheduler">Scheduler</Link>
      <Link to="/memory">Memory</Link>
      <Link to="/comparison">Comparison</Link>
    </div>
  )
}

export default Navbar