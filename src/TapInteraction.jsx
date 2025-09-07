import { useEffect, useState } from "react";

function TapInteraction() {
  const [taps, setTaps] = useState(() => {
    const storedTaps = localStorage.getItem("taps");
    return storedTaps ? parseInt(storedTaps, 10) : 0;
  });
  const [trackValue, setTrackValue] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    localStorage.setItem("taps", taps);
  }, [taps]);

  const handleTap = () => {
    setTaps((prev) => prev + 1);
    setTrackValue((prev) => Math.min(prev + 1, 1000));

    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      startDecay();
    }, 500);
    setTimeoutId(newTimeoutId);
  };

  const startDecay = () => {
    if (intervalId) clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setTrackValue((prev) => {
        if (prev <= 0) {
          clearInterval(newIntervalId);
          setIntervalId(null);
          return 0;
        }
        const decrement = Math.max(prev * 0.2, 1);
        const newVal = prev - decrement;
        return Math.max(newVal, 0);
      });
    }, 50);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [timeoutId, intervalId]);

  return (
    <div>
      <div className="w-full min-w-[300px] px-3 relative z-10">
        <div className="text-center mb-1">
          <p className="mb-1 text-[12px] opacity-50 font-medium">
            Total balance
          </p>
          <div className="flex justify-center items-center">
            <img
              src="/public/coin.png"
              className="max-w-[24px] h-auto mr-[15px]"
            />
            <h1 className="font-[Work_Sans] font-bold text-[35px]">{taps}</h1>
          </div>
        </div>

        <div className="mb-[15px]">
          <div className="flex justify-center items-center">
            <img
              src="/public/bronze.png"
              className="max-h-[28px] w-auto mr-1.5"
            />
            <p className="mr-[30px] font-bold text-[12.73px]">bronze</p>
            <p className="font-bold text-[12.73px] opacity-40 mr-1">Pl.</p>
            <p className="font-bold text-[12.73px]">672 918</p>
          </div>
        </div>

        <div className="flex justify-center mb-[17px]">
          <div
            onClick={handleTap}
            className="transition-transform duration-200"
            style={{ transform: isTouching ? "scale(0.95)" : "scale(1)" }}
            onTouchStart={() => setIsTouching(true)}
            onTouchEnd={() => setIsTouching(false)}
            onTouchCancel={() => setIsTouching(false)}
          >
            <img
              src="/public/bronzeStar.png"
              className="max-w-[289px] h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between ml-[21px] mb-[21px]">
        <div className="text-left flex items-center  ml-[9px]">
          <img
            src="/public/Icon_lightning.png"
            className="max-h-[16px] w-auto  mr-[7px]"
          />
          <p className="text-[12px]">{Math.round(trackValue)}</p>
        </div>
        <div className="rounded-l-[100px] shadow-[0_0_50px_7px_rgba(231,81,55,1)]">
          <div className="text-right flex items-center bg-gradient-to-r from-[#915EFF] from-30% to-[#F64F14] to-100% rounded-l-[100px] shadow-[0_0_10px_3px_rgba(231,81,55,1)]">
            <img
              src="/public/Icon_star.png"
              className="max-h-[22px] w-auto ml-[9px] mt-[7px] mb-1.5"
            />
            <p className="mr-3.5 ml-2 font-bold text-[15px] mix-blend-overlay">
              X100
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-w-[300px] px-5 z-10 mb-12">
        <div
          className="w-full h-2.5 rounded overflow-hidden"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <div
            className="h-full bg-gradient-to-r from-[#915EFF] from-9% to-[#F64F14] to-92% transition-all duration-100 ease-linear"
            style={{ width: `${Math.min(trackValue, 1000) / 10}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default TapInteraction;
