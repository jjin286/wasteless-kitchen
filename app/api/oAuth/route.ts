import { createClient } from '@/utils/supabase/client';

export async function loginWithGoogle(){
  const supabase = await createClient();

  supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    }
  })
}

export async function logout(){
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();


}

export async function loginWithFacebook() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
  })
}
