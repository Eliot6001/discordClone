import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import DiscordIcon from "@/components/discord-icon";
const Nav = () => {
  
  return (
    <div className="p-3 dark:bg-[#1e1f2200]">
   
        <Button className=" rounded-[3rem] hover:rounded-xl w-12 h-12 p-2 dark:bg-white bg-[#313338] hover:dark:bg-[#5865f2] hover:duration-150 transition-all ease-linear ">
          <DiscordIcon dk={true} />
        </Button>
    
    </div>
  );
};
// will make the first button into its seperate component, finished implementing it, needs only some tampering around
export default Nav;
