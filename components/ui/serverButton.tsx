"use client"
import {Button} from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {useState, type MouseEvent, useEffect} from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";
interface ServerButtonProps {
  imageSrc: string | undefined,
  serverName: string,
  className?: string,
  serverId?: string
}

const ServerButton= ({imageSrc,serverId, serverName, className}:ServerButtonProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [serverAlt, setServerAlt] = useState<string>('');
  const router = useRouter()


  const changeHovered = (e: MouseEvent) => {
    e.preventDefault();
    setHovered(!hovered)
    router.push(`/servers/${serverId}`);
  }
  const setClicked = (e: MouseEvent) => {
    e.preventDefault();
    setActive(!active);
  }
  useEffect(() => {
    serverName.split(' ').map(word => 
      setServerAlt(serverAlt => serverAlt += word[0])
      )
    
  }, [])
  return (
    <span className={cn("flex items-center justify-center align-center w-full relative", className)}>
          <span className={cn("absolute left-0 top-0 transform -translate-y-[-200%] block h-[20%] bg-white w-1 rounded-r transition-all duration-150" , active? 'h-[60%] top-1/4 -translate-y-0.5' : hovered ? 'top-0 translate-y-5 h-[15%] ' : 'h-0 ')}/>
          <Button
            className="relative overflow-hidden rounded-[3rem]
             hover:rounded-xl w-12 h-12 dark:bg-white bg-[#313338]
             hover:duration-150 transition-all ease-out flex
            focus-visible:border-0.5 focus-visible:outline-1 focus-visible:dark:border-stone-100 focus-visible:border-stone-700"
            onMouseEnter={changeHovered} onMouseLeave={changeHovered} onClick={setClicked}
          >
              <Avatar className="w-full h-full object-contain absolute rounded-none">
                <AvatarImage src={imageSrc} className='rounded-none'/>
                <AvatarFallback>{serverAlt}</AvatarFallback>
              </Avatar>
          </Button>
        </span>
  )
}

export default ServerButton