import { createClient } from '@/app/utils/supabase/client';

export async function loginWithGoogle(){
const supabase = await createClient();

  supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

export async function logout(){
const supabase = await createClient();

  const { error } = await supabase.auth.signOut();
}