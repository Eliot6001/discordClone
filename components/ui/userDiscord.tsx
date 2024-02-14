import React from 'react'
import { UserButton, auth } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { User } from '@clerk/nextjs/server'
import ModeToggle from '../themeSwitcher'
import { useUser } from '@clerk/nextjs'

const UserDiscord =  ({className}: {className?: string}) => {
  const { user } = auth();
  console.log(user?.firstName);
  
  return (
    <div className={cn(className, "pb-3 pl-3 mt-auto flex flex-col gap-y-4")}>
      <ModeToggle/>
      <span className="flex flex-row ">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
              userButtonBox: 'flex flex-row-reverse items-start',
              userButtonOuterIdentifier: ' text-white pt-2 after:content-["active"] after:block after:text-white/80',
            }   }}
            showName
          />
          </span>
    </div>
  )
}

export default UserDiscord