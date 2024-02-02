import { auth } from '@clerk/nextjs';
import { supabase } from '@/lib/supabase'

/**
 * Function to check current signed user
 * @returns currentUser @typedef{object}
 */
export const currentProfile = async () => {
  const { userId } = auth();
  if(!userId) return null;
  const profile 


}
