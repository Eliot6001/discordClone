import supabaseClient from "./supabase";

/**
 * Initiation of a profile,

* if exists, gets it from

 * else creates new one
 * @returns  user data object!
 */

export const initialProfile = async (user:any , token:any) => {
  const supabase= supabaseClient;
  const supabaseAccessToken = token as string;
  const supabaseInstance = await supabase(supabaseAccessToken as string);
  console.log("data : ", user, token); 
  console.log("\n")

  try {
    const { data, error } = await supabaseInstance.from("user_profile").select("*").eq("user_id", user?.id);

    if (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }

    if (data && data.length > 0) {
      console.log("User profile found:", data[0]);
      return data[0];
    }

    const newProfile = await supabaseInstance
      .from("user_profile")
      .insert({
        user_id: user.id,
        username: `${user.firstName} ${user.lastName}`,
        pfp_url: user.imageUrl,
        'email': user.emailAddresses[0].emailAddress,
      })
      .select("*");

    console.log("New profile created:", newProfile.data);
    //@ts-ignore
    return newProfile?.data[0];
  } catch (error) {
    console.error("Error in initialProfile:", error);
    return null;
  }
};
