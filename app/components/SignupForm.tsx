'use client';

// import { createClient } from '@supabase/supabase-js';
import { createClient } from "@/utils/supabase/client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm(){
    const router = useRouter();

    const supabase = createClient();

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        const { data, error } = await supabase.auth.signUp({
            email: `${email}`,
            password: `${password}`,
        })

        if (error) {
            console.log("Error: ", error)
        } else {
            // Handle error
            router.push('/');
        }
    }

    return(
        <div className="signup-form">
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
                        Sign Up
                    </button>
                </div>
            </form>
        </div>

    );
}