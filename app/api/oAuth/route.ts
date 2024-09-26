import { createClient } from '../../../utils/supabase/client';
const supabase = createClient();

export async function loginWithGoogle(){
  supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

export async function logout(){
  const { error } = await supabase.auth.signOut();
}