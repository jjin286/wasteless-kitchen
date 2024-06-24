'use client';

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
// import { createClient } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";


export default function LoginForm(){
    const router = useRouter();

    const supabase = createClient(
        // process.env.NEXT_PUBLIC_SUPABASE_URL!,
        // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        const { data, error } = await supabase.auth.signInWithPassword({
            email: `${email}`,
            password: `${password}`,
        })

        console.log('Data: ', data)
        console.log("Error: ", error)

        if (error) {
            console.log("Error: ", error)
        } else {
            // Handle error
            console.log('Data: ', data)
            console.log("Logged in")
            router.push('/');
        }
    }
// Route url inclues password!
    return(
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="flex-col flex-wrap">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="p-2 w-full my-5"
                    />
                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="p-2 w-full my-5"
                    />
                    <button type="submit" className="bg-green-400 mt-5 rounded w-full p-3 font-bold">
                        Sign in
                    </button>
                </div>
            </form>
        </div>

    );
}