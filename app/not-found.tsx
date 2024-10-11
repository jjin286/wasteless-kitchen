import Link from "next/link";
import React from "react"

export default function NotFound() {
    return(
        <div className="text-center">
            <h2 className="text-3xl">There was a problem.</h2>
            <p>We could find the page you were looking for.</p>
            <p>Go back to the <Link href="/">Home</Link> page</p>
        </div>
    )
}