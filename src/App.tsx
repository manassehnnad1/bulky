import { useState } from "react"

const App = () => {
  const [isToggled, setIsToggled] = useState<'Stats' | 'Leaderboard'>('Stats');

  return (
    <div className="flex" >
      <div className="flex bg-[#fffeef] border-2 border-[#1b1a14] w-80 h-20 mx-auto mt-16">
        <button 
          onClick={() => setIsToggled('Stats')} 
          className={` px-4 w-48 md:px-8 py-2 overflow-hidden font-semibold transition-all text-lg md:text-lg cursor-pointer ${
            isToggled === 'Stats' ? 'bg-[#1b1a14] w-24 md:w-32 text-white' : 'bg-transparent text-[#1b1a14]'
          }`}
        >
          Stats
        </button>
        <button 
          onClick={() => setIsToggled('Leaderboard')} 
          className={`px-4 md:px-8 py-2 font-semibold transition-all text-lg md:text-lg cursor-pointer ${
            isToggled === 'Leaderboard' ? 'bg-[#1b1a14] w-full text-white' : 'bg-transparent text-[#1b1a14]'
          }`}
        >
          Leaderboard
        </button>
      </div>
    </div>
  )
}

export default App