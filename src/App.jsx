import TapInteraction from "./TapInteraction";

function App() {
  return (
    <>
      <div className="relative min-h-screen ">
        <TapInteraction />
        <div className="isolate">
          <div className="absolute w-[75%] h-[33vh] bg-[#F64F14] opacity-70 filter blur-3xl top-0 left-0"></div>
          <div className="absolute w-[50%] h-[35vh] bg-[#F64F14] opacity-45 rounded-full filter blur-3xl top-[25%] left-[29%] mix-blend-overlay"></div>
          <div className="absolute w-43 h-85 bg-[#945EFF] opacity-65  filter blur-3xl top-50 right-0 mix-blend-overlay"></div>
          <div className="absolute w-50 h-20 bg-[#945EFF] opacity-55  filter blur-3xl top-120 right-33"></div>
        </div>
      </div>
    </>
  );
}

export default App;
