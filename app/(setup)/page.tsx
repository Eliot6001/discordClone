"use client"
import { redirect } from 'next/navigation';

import { initialProfile } from '@/lib/initialProfile'
import React from 'react'

import InitialModal from '@/components/modals/initialModal'
import useClerkToken  from "@/lib/getClerkToken"
import supabase from '@/lib/supabase';
import { currentUser, useSession } from '@clerk/nextjs';
/**
 * Setup is meant to handle the case of user not having joined any server yet

  * Opens the modal if user dont have any servers joined 
 */
const SetupPage =  () => {  
  // const user = await currentUser(); 
  // console.log(user.id," user is figured from setup page??")
  const [jwtToken, setJwtToken] = React.useState<string | null>(null);
  const [profileData, setProfileData] = React.useState<object>({});
  //should use context api in order to render data from this to UI//
  const { fetchToken } = useClerkToken();
  const { session } = useSession();
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await fetchToken();
        setJwtToken(token);

        if (token && session) {
          const user = session.user as object;
          const data = await initialProfile(user, jwtToken);
          setProfileData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [jwtToken]);
//LGTM
  
 console.log(profileData, "<<< Profile data || from (setup)>Page.tsx ||")
  return (
    <InitialModal token={jwtToken}/>
  )
}

export default SetupPage

//members: [id, id, id, id]
