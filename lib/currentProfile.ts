import {auth} from '@clerk/nextjs';


/**
 * Function to check current signed user
 * @returns currentUser @typedef{object}
 */
export const currentProfile = async () => {
  const { userId } = auth();
  if(!userId) return null;



}