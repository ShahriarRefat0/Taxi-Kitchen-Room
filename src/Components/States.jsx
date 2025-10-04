import { CookingPot, ScrollText, SquareCheckBig } from 'lucide-react';


const States = ({ orderTotal, cookingTotal, readyTotal }) => {
  return (
    <div className="max-w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* //Current */}
      <div className="border-4 border-dotted rounded-2xl border-amber-400 border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{orderTotal}</h2>
          </div>
        </div>
      </div>
      {/* //total cooking */}
      <div className="border-4 border-dotted rounded-2xl border-amber-400 border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Cooking
            <h2 className="text-6xl font-bold">{cookingTotal}</h2>
          </div>
        </div>
      </div>
      {/* //total ready */}
      <div className="border-4 border-dotted rounded-2xl border-amber-400 border-primary p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <SquareCheckBig
            className="animate-pulse"
            color="#fcb700"
            size={100}
          />
          <div className="text-xl text-center">
            Ready to Serve <h2 className="text-6xl font-bold">{readyTotal}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;