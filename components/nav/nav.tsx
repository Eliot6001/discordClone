import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import DiscordLogoButton from "@/components/ui/discordLogoButton";

import ServerButton from "@/components/ui/serverButton";
import { currentProfile } from "@/lib/currentProfile";
/* add selected to discordLogoButton and add useEffect here useclient too. */
/*the spans responsible for basically the animated line, gotta have bunch of toggle modes where it switched both their 
translate and height */
interface NavProps {
  data: {
    imageSrc: string;
    name: string;
  };
}
[];
const Nav = (data: NavProps) => {
  console.log("nav data>> ", data)
  return (
    <div className=" w-[4.5rem] flex flex-col align-center items-center dark:bg-[#1e1f22] h-screen relative">
      <DiscordLogoButton className="pt-3" />
      <div className="p-0 m-0 py-2 w-full space-y-2 flex flex-col items-center justify-center serverList ">
        {/* Add more ServerButton components as needed */}
        {data.data &&
          data.data?.map((elem : {imageUrl:string, name:string, id: string}) => (
            <ServerButton imageSrc={elem.imageUrl} serverName={elem.name} serverId={elem.id}
            key={elem.id}
            />
          ))}
      </div>
    </div>
  );
};
// will make the first button into its seperate component, finished implementing it, needs only some tampering around
export default Nav;
