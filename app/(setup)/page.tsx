import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initialProfile'
import React from 'react'

const SetupPage =  async () => {
  const profile = await initialProfile();
  const server = await db.db.Server.filter(
    { Members: {
      $any:[
        
      ]
    } }
  ) // i may edit the schema to have a json that
  // contains bunch of userIds and just search inside 
  // it or an array 
  return (
    <div>
        SetupPage
    </div>
  )
}

export default SetupPage