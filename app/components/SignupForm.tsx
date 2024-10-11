'use client';

import { createClient } from "@/utils/supabase/client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { loginWithTwitter, loginWithGoogle, loginWithFacebook} from "@/app/api/oAuth/route";

export default function SignupForm(){
    const router = useRouter();


    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const supabase = await createClient();

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
            <div className="m-5 w-full flex mx-auto text-black">
                    <hr className="self-center w-3/5 border-black"/>
                        <p className="mx-3">or</p>
                    <hr className="self-center w-3/5 border-black"/>
                </div>
                <div className="oauth-login">

                    <div onClick={loginWithTwitter} className="twitter flex justify-center bg-white rounded p-3 my-3 border border-black hover:bg-gray-50">
                        <Image
                            src={'/x-logo-black.png'}
                            alt="Some picture of mine"
                            width={24}
                            height={24}
                        />
                        <p> Sign up with Twitter </p>
                    </div>
                    <div onClick={loginWithGoogle} className="google flex justify-center bg-white rounded p-3 my-3 border border-black hover:bg-gray-50">
                        <Image
                            src={'/google-logo.png'}
                            alt="Some picture of mine"
                            width={24}
                            height={24}
                        />
                        <p> Sign up with Google</p>
                    </div>
                    <div onClick={loginWithFacebook} className="apple flex justify-center bg-white rounded p-3 my-3 border border-black hover:bg-gray-50">
                        <Image
                            src={'/Facebook_Logo_Primary.png'}
                            alt="Some picture of mine"
                            width={24}
                            height={24}
                        />
                        <p> Sign up with Facebook</p>
                    </div>
                </div>
        </div>

    );
}