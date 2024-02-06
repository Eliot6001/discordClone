import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import DiscordLogoButton from "@/components/ui/discordLogoButton";

import ServerButton from "@/components/ui/serverButton";
/* add selected to discordLogoButton and add useEffect here useclient too. */
/*the spans responsible for basically the animated line, gotta have bunch of toggle modes where it switched both their 
translate and height */
const Nav = () => {
  return (
    <div className=" w-[4.5rem] flex flex-col align-center items-center dark:bg-[#1e1f22] h-full relative">
      <DiscordLogoButton className="pt-3" />
      <div className="p-0 m-0 py-2 w-full space-y-2 flex flex-col items-center justify-center">
      <ServerButton imageSrc={"https://utfs.io/f/d635c863-82df-4ce1-b0e3-fda1f535c552-kh0fle.png"} serverName={"TheStong"}/>
      <ServerButton imageSrc={"https://utfs.io/f/d635c863-82df-4ce1-b0e3-fda1f535c552-kh0fle.png"} serverName={"TheStong"}/>
      <ServerButton imageSrc="https://utfs.io/f/af1558f8-031e-42ec-9455-ff18bdb83ef0-d0952e.png" serverName="Server9" />
      <ServerButton imageSrc="https://utfs.io/f/8ea926b3-d0be-4e63-8c8c-2c70d1b190bf-1f.jpg" serverName="Server10" />
      <ServerButton imageSrc="https://utfs.io/f/8ea926b3-d0be-4e63-8c8c-2c70d1b190bf-1f.jpg" serverName="Server11" />
      <ServerButton imageSrc="https://utfs.io/f/8ea926b3-d0be-4e63-8c8c-2c70d1b190bf-1f.jpg" serverName="Server12" />
      <ServerButton imageSrc="https://utfs.io/f/8ea926b3-d0be-4e63-8c8c-2c70d1b190bf-1f.jpg" serverName="Server13" />
      <ServerButton imageSrc="https://utfs.io/f/8ea926b3-d0be-4e63-8c8c-2c70d1b190bf-1f.jpg" serverName="Server14" />
      {/* Add more ServerButton components as needed */}

      </div>
    </div>
  );
};
// will make the first button into its seperate component, finished implementing it, needs only some tampering around
export default Nav;
