import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import DiscordLogoButton from "../ui/discordLogoButton";
/* add selected to discordLogoButton and add useEffect here useclient too. */
/*the spans responsible for basically the animated line, gotta have bunch of toggle modes where it switched both their 
translate and height */
const Nav = () => {
  return (
    <div className=" w-[4.5rem] flex flex-col align-center items-center dark:bg-[#1e1f22] h-full relative">
      <DiscordLogoButton className="pt-3" />
      <div className="p-0 m-0 py-2 w-full space-y-2 flex flex-col items-center justify-center">
        <span className="flex items-center justify-center align-center w-full relative">
        <span className="absolute left-0 top-0 transform -translate-y-[-200%] block h-[20%] bg-white w-1 rounded-r" />

          <Button
            className="relative overflow-hidden rounded-[3rem] hover:rounded-xl w-12 h-12 dark:bg-white bg-[#313338] hover:dark:bg-[#5865f2] hover:duration-150 transition-all ease-out flex
           "
          >
            <span className="absolute left-0 top-0 before:block height-full before:content-[' ttt '] before:bg-white before:w-1">
              {" "}
              t
            </span>
            <div className="w-full h-full object-contain absolute">
              <img
                src="https://utfs.io/f/8ea926b3-d0be-4e63-8c8c-2c70d1b190bf-1f.jpg"
                alt="serverimage should be replaced with serverName"
              />
            </div>
          </Button>
        </span>
        <span className="flex items-center justify-center align-center w-full relative">
        <span className="absolute left-0 top-0 transform -translate-y-[-200%] block h-[20%] bg-white w-1 rounded-r" />

          <Button className="relative overflow-hidden rounded-[3rem] hover:rounded-xl w-12 h-12 dark:bg-white bg-[#313338] hover:dark:bg-[#5865f2] hover:duration-150 transition-all ease-linear flex ">
            <div className="w-full h-full object-contain absolute">
              <img
                src="https://utfs.io/f/d635c863-82df-4ce1-b0e3-fda1f535c552-kh0fle.png"
                alt="serverimage should be replaced with serverName"
              />
            </div>
          </Button>
        </span>
        <span className="flex items-center justify-center align-center w-full relative">
        <span className="absolute left-0 top-0 transform -translate-y-[-200%] block h-[20%] bg-white w-1 rounded-r" />

          <Button className="relative overflow-hidden rounded-[3rem] hover:rounded-xl w-12 h-12 dark:bg-white bg-[#313338] hover:dark:bg-[#5865f2] hover:duration-150 transition-all ease-linear flex ">
            <div className="w-full h-full object-contain absolute">
              <img
                src="https://utfs.io/f/af1558f8-031e-42ec-9455-ff18bdb83ef0-d0952e.png"
                alt="serverimage should be replaced with serverName"
              />
            </div>
          </Button>
        </span>
        <span className="flex items-center justify-center align-center w-full relative">
        <span className="absolute left-0 top-0 transform -translate-y-[-200%] block h-[20%] bg-white w-1 rounded-r" />

          <Button className="relative overflow-hidden rounded-[3rem] hover:rounded-xl w-12 h-12 dark:bg-white bg-[#313338] hover:dark:bg-[#5865f2] hover:duration-150 transition-all ease-linear flex ">
            <div className="w-full h-full object-contain absolute">
              <img
                src="https://utfs.io/f/8ea926b3-d0be-4e63-8c8c-2c70d1b190bf-1f.jpg"
                alt="serverimage should be replaced with serverName"
              />
            </div>
          </Button>
        </span>
        <span className="flex items-center justify-center align-center w-full relative">
        <span className="absolute left-0 top-0 transform -translate-y-[-200%] block h-[20%] bg-white w-1 rounded-r" />

          <Button className="relative overflow-hidden rounded-[3rem] hover:rounded-xl w-12 h-12 dark:bg-white bg-[#313338] hover:dark:bg-[#5865f2] hover:duration-150 transition-all ease-linear flex ">
            <div className="w-full h-full object-contain absolute">
              <img
                src="https://utfs.io/f/8ea926b3-d0be-4e63-8c8c-2c70d1b190bf-1f.jpg"
                alt="serverimage should be replaced with serverName"
              />
            </div>
          </Button>
        </span>
        <span className="flex items-center justify-center align-center w-full relative">
        <span className="absolute left-0 top-0 transform -translate-y-[-200%] block h-[20%] bg-white w-1 rounded-r" />

          <Button className="relative overflow-hidden rounded-[3rem] hover:rounded-xl w-12 h-12 dark:bg-white bg-[#313338] hover:dark:bg-[#5865f2] hover:duration-150 transition-all ease-linear flex ">
            <div className="w-full h-full object-contain absolute">
              <img
                src="https://utfs.io/f/8ea926b3-d0be-4e63-8c8c-2c70d1b190bf-1f.jpg"
                alt="serverimage should be replaced with serverName"
              />
            </div>
          </Button>
        </span>
      </div>
    </div>
  );
};
// will make the first button into its seperate component, finished implementing it, needs only some tampering around
export default Nav;
