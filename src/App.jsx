import TapInteraction from "./TapInteraction";

function App() {
  return (
    <>
      <div className="w-full min-w-[300px] px-3 relative z-10">
        <div className="flex justify-between items-center mb-4 pt-2.5 mx-2">
          <div className="text-left flex items-center">
            <img
              src="/public/avatar.png"
              className="mr-[11px] max-w-[29px] h-auto"
            />
            <p className="text-[11px]">Jesika Smith</p>
          </div>
          <div className="text-right flex items-center">
            <img
              src="/public/Icon_wallet.png"
              className="mr-2 max-w-[13px] h-auto"
            />
            <p className="text-[11px]">Wallet</p>
          </div>
        </div>

        <div className="community shadow-xl/10 mb-[21px]">
          <div className="backdrop-blur-[12.65px] rounded-[10.46px] ">
            <div className=" flex justify-between items-center">
              <div className="flex justify-start items-center ml-4 mt-1.5 mb-[7px]">
                <div className="mr-4">
                  <img src="/public/stars.png" className="max-h-[47px] w-auto" />
                </div>
                <div>
                  <h2 className="text-[15px] font-semibold">Join squad</h2>
                  <p className="text-[10px] opacity-30 font-medium">Join or create your own</p>
                </div>
              </div>
              <div className="text-right mr-[22px]">
                <img src="/public/Icon.png" className="max-w-[15px] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TapInteraction />

      <div className="w-full min-w-[300px] px-3 z-10 font-[Sofia_Sans] text-[10px]">
        <div className="grid grid-cols-4">
            <div className="grid grid-rows-2">
              <div className="flex justify-center items-center">
                <img src="/public/Icon_main.png" className="max-h-[35px] w-auto" />
              </div>
              <p className="text-center font-bold text-[#945EFF]">MAIN</p>
            </div>
            <div className="grid grid-rows-2">
              <div className="flex justify-center items-center">
                <img src="/public/Icon_earn.png" className="max-h-[39px] w-auto" />
              </div>
              <p className="text-center opacity-40">EARN</p>
            </div>
            <div className="grid grid-rows-2">
              <div className="flex justify-center items-center">
                <img src="/public/Icon_friends.png" className="max-w-[29.92px] h-auto" />
              </div>
              <p className="text-center opacity-40">FRIENDS</p>
            </div>
            <div className="grid grid-rows-2">
              <div className="flex justify-center items-center">
                <img src="/public/Icon_star.png" className="max-w-[25.94px] h-auto" />
              </div>
              <p className="text-center opacity-40">AIRDROP</p>
            </div>
        </div>
      </div>

      <div className="isolate">
        <div className="absolute w-[75%] h-[33vh] bg-[#F64F14] opacity-70 filter blur-3xl top-0 left-0"></div>
        <div className="absolute w-[50%] h-[35vh] bg-[#F64F14] opacity-45 rounded-full filter blur-3xl top-[25%] left-[29%] mix-blend-overlay"></div>
        <div className="absolute w-43 h-85 bg-[#945EFF] opacity-65  filter blur-3xl top-50 right-0 mix-blend-overlay"></div>
        <div className="absolute w-50 h-20 bg-[#945EFF] opacity-55  filter blur-3xl top-120 right-33"></div>
      </div>
    </>
  );
}

export default App;
