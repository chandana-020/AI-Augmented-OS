import Navbar from '../components/Navbar'

function MemoryPage() {
  const blocks = [100, 50, 200, 120]

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-5">
          Memory Management
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="bg-green-500 text-white p-10 rounded-xl text-center"
            >
              {block} MB
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MemoryPage