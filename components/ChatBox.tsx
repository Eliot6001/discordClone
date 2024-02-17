import React from 'react'

import ChatHeader from './ChatHeader'
import { cn } from '@/lib/utils';
import TextBox from './ui/textBox';

interface ChatBoxProps {
  className?: string,
}

const ChatBox = ({className}: ChatBoxProps) => {
  return (
    <div className={cn(className, '')}> 
        <TextBox className="mt-auto"/>
    </div>
  )
}


export default ChatBox;
