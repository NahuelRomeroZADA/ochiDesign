import {FaArrowUpLong} from "react-icons/fa6"

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-52 px-20">
          {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
            return ( 
              <div  key={index} className="masker">
                <div className="w-fit flex items-center overflow-hidden">
                  {index === 1 && (
                  <div className="w-[9vw] h-[5.3vw] relative rounded top-[0.4vw] bg-red-500"></div>
                  )}
                <h1 className="uppercase text-[7.5vw] leading-[6.8vw] tracking-tighter font-['Founders Grotesk'] 
                font-semibold">
                    {item}
                </h1>
              </div>
            </div>
            )
          })}
            
        </div>
        <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>))}
          <div className="start flex items-center gap-5">
            <div className="px-4 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">Start the project</div>
            <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
              <span className="rotate-[45deg]">
              <FaArrowUpLong/>
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage

