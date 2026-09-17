import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[40vh] flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
          Welcome to Get-me-chai <span><Image src="/chai.gif" width={60} height={60} alt="" /></span>
        </h1>
        <p className="text-lg mb-5">
          Get-me-chai is a platform that allows creators to receive funding from their supporters. Join us!
        </p>

        <div className="flex flex-row gap-4 m-2">
          <button className="cursor-pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent dark:bg-gray-900 leading-5">
              Start Here
            </span>
          </button>
          <button className="relative cursor-pointer inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-purple-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent dark:bg-gray-900 leading-5">
              Read More
            </span>
          </button>
        </div>
      </div>

      <div className="h-1 opacity-10 bg-white"></div>

      <div className=" mx-auto flex flex-col items-center justify-center text-white my-12">
        <h1 className=" text-3xl font-bold">Your Fans can buy u a Chai</h1>
        <div className="items-center flex flex-row gap-14 py-10">
          <div className="flex flex-col items-center justify-center gap-3">
            <Image className="bg-slate-300 rounded-full p-3 mb-4" src="/gift.gif" width={75} height={75} alt="" />
            <p className="font-bold">Your Fan's want to help</p>
            <p className="text-center">
              Show your support and help your favorite creators!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <Image className="bg-slate-300 rounded-full p-3 mb-4" src="/coin.gif" width={75} height={75} alt="" />
            <p className="font-bold">Your Fan's want to help</p>
            <p className="text-center">
              Show your support and help your favorite creators!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 ">
            <Image className="bg-slate-300 rounded-full p-3 mb-4" src="/people.gif" width={75} height={75} alt="" />
            <p className="font-bold">Your Fan's want to help</p>
            <p className="text-center">
              Show your support and help your favorite creators!
            </p>
          </div>
        </div>
      </div>

      <div className="h-1 opacity-10 bg-white"></div>
      
    </>
  );
}