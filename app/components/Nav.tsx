'use client';

import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";


export default function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [logInStatus, setLogInStatus] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    const supabase = createClient();

    async function logOut(){
        let { error } = await supabase.auth.signOut();
        setLogInStatus(false);
    }


    useEffect(() => {
        async function checkUser(){
            const { data: { user } } = await supabase.auth.getUser()
            if(user === null){
                setLogInStatus(false);
            } else {
                setLogInStatus(true);
            }
        }

        checkUser();
    }, [])



    return(
        <nav className="fixed w-full h-24 shadow-xl bg-white z-20 absolute">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href={'/'}>
                    <Image
                        src={'next.svg'}
                        alt=""
                        width="200"
                        height="75"
                        className=""
                        priority
                    />
                </Link>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        {logInStatus
                        ?
                        <>
                        <Link href={'/recipes'}>
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                Recipe
                            </li>
                        </Link>
                        <Link href={'/ingredients'}>
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                Ingredient
                            </li>
                        </Link>
                        <Link href={''}>
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                Search
                            </li>
                        </Link>
                        <Link href={''} onClick={() => logOut()}>
                                <li className="ml-10 uppercase hover:border-b text-xl">
                                    Log Out
                                </li>
                        </Link>
                        </>
                        : <>
                        <Link href={'/signup'} >
                                <li className="ml-10 uppercase hover:border-b text-xl">
                                    Sign up
                                </li>
                        </Link>
                        <Link href={'/login'} >
                                <li className="ml-10 uppercase hover:border-b text-xl">
                                    Log in
                                </li>
                        </Link>
                        </>
                        }

                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex-col py-4 cursor-pointer">
                    <ul>
                        <Link href={"/"}>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Recipe
                            </li>
                        </Link>
                        <Link href={"/"}>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Ingredient
                            </li>
                        </Link>
                        <Link href={"/"}>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Search
                            </li>
                        </Link>
                        <Link href={"/"}>
                            <li
                                onClick={() => {setMenuOpen(false); logOut();}}
                                className="py-4 cursor-pointer"
                            >
                                Log Out
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}