'use client';
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
// import { createClient } from "@/utils/supabase/client";
import { createClient } from "@/app/utils/supabase/client";


export default function Profile(){
    const [profile, setProfile] = useState({});

    useEffect(() => {

        async function checkUser(){
            const supabase = await createClient();

            const { data: { user } } = await supabase.auth.getUser();
            let userId = user.id;
            console.log(userId)
            const { data, error } = await supabase
                .from('profiles')
                .select()
                .eq('id', userId)
            setProfile(data[0]);
            console.log(userId, data, error)
        }

        checkUser();
    },[])

    return(
        <div>
            <Nav />
            <div className="pt-24">
                Name: {profile.name}
            </div>
        </div>
    );
}