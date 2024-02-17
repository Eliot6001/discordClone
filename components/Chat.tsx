import { cn } from '@/lib/utils'
import React from 'react'
     
import ChatHeader from './ChatHeader'
import ChatBox from './ChatBox'
     
const Chat = ({className}: {className?: string}) => {
  return (
    <div className={cn(className, 'w-full overflow-y h-screen flex flex-col ')}>
     <ChatHeader className=" "/> 
     <hr className='h-1.5' />
     <div className=" flex-1 h-full overflow-y-auto"></div>
     <ChatBox className=""/> 
    </div>
  )
}

export default Chat
