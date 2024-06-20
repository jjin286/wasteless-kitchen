'use client';

import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";

export default function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

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
                        <Link href={''}>
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                Recipe
                            </li>
                        </Link>
                        <Link href={''}>
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                Ingredient
                            </li>
                        </Link>
                        <Link href={''}>
                            <li className="ml-10 uppercase hover:border-b text-xl">
                                Search
                            </li>
                        </Link>
                        <Link href={''}>
                            <li className="ml-10 uppercase hover:border-b text-xl">

                            </li>
                        </Link>
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}