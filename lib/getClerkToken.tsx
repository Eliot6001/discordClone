'use client'

import { useAuth } from "@clerk/nextjs";

export const useClerkAuth = () => {
  const { getToken, isLoaded, isSignedIn, userId } = useAuth();
  console.log(userId, "user id is figured???")

  const fetchToken = async () => {
    console.log("Loading...")
    try {
      // Getting clerk token
      const clerkToken = await getToken({ template: 'supabase' });
      return clerkToken;
    } catch (e) {
      console.log(e, "Error found")
      return null;
    }
  };
  return {
    getToken,
    isLoaded,
    isSignedIn,
    fetchToken
  };
};
export default useClerkAuth;