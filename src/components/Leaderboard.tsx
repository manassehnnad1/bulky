type Trader = {
  rank: number;
  address: string;
}

const Leaderboard = ({traders}: {traders: Trader[]}) => {
  return (
    <div className="w-full flex justify-center p-8 bg-[#fffeef] mt-20">
      
      {/* Empty state */}
      {traders.length === 0 && (
        <div className="text-center">
          <p className="text-xl text-gray-600">No traders yet</p>
        </div>
      )}
      
      {/* Traders list */}
      {traders.length > 0 && (
        <div className="w-full max-w-2xl space-y-6">
          {traders.map((trader) => (
            <div 
              key={trader.rank}
              className="
                bg-[#fffeef]
                border-2 
                border-[#1b1a14] 
                shadow-[8px_8px_0px_0px_rgba(27,26,20,1)]
                p-6
                flex
                items-center
                gap-4
                mx-auto
              "
            >
              <span className="text-2xl font-bold text-[#1b1a14] min-w-12">
                {trader.rank}.
              </span>
              <span className="text-xl font-semibold">
                {trader.address}
              </span>
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}

export default Leaderboard