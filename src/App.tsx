import { useState } from "react"
import Leaderboard from "./components/Leaderboard";

type Trader = {
  rank: number;
  address: string;
}

const App = () => {
  const [isToggled, setIsToggled] = useState<'Stats' | 'Leaderboard'>('Stats');

  const [traders, setTraders] = useState<Trader[]>([
    { rank: 1, address: '7a3bF2mK9x8K9pL3vN2qR5sT8uV1wX4yZ6' },
    { rank: 2, address: '9f2cD1pL4y3L4mN6oP8qR9sT1uV2wX5yZ7' },
    { rank: 3, address: '4d8aE3qM5z7M2nO7pP9qR1sT2uV3wX6yZ8' },
     { rank: 1, address: '7a3bF2mK9x8K9pL3vN2qR5sT8uV1wX4yZ6' },
    { rank: 2, address: '9f2cD1pL4y3L4mN6oP8qR9sT1uV2wX5yZ7' },
    { rank: 3, address: '4d8aE3qM5z7M2nO7pP9qR1sT2uV3wX6yZ8' },
     { rank: 1, address: '7a3bF2mK9x8K9pL3vN2qR5sT8uV1wX4yZ6' },
    { rank: 2, address: '9f2cD1pL4y3L4mN6oP8qR9sT1uV2wX5yZ7' },
    { rank: 3, address: '4d8aE3qM5z7M2nO7pP9qR1sT2uV3wX6yZ8' },
     { rank: 1, address: '7a3bF2mK9x8K9pL3vN2qR5sT8uV1wX4yZ6' },
    { rank: 2, address: '9f2cD1pL4y3L4mN6oP8qR9sT1uV2wX5yZ7' },
    { rank: 3, address: '4d8aE3qM5z7M2nO7pP9qR1sT2uV3wX6yZ8' },
     { rank: 1, address: '7a3bF2mK9x8K9pL3vN2qR5sT8uV1wX4yZ6' },
    { rank: 2, address: '9f2cD1pL4y3L4mN6oP8qR9sT1uV2wX5yZ7' },
    { rank: 3, address: '4d8aE3qM5z7M2nO7pP9qR1sT2uV3wX6yZ8' },
  ]);

  return (
    <div className="" >
      
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
        
      {isToggled === 'Leaderboard' && <Leaderboard traders={traders} />}
    </div>
  )
}

export default App