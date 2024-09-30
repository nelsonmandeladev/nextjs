"use client";

import React from 'react'
import {Loader2} from "lucide-react";

export default function Loading() {
    return (
        <div className='h-dvh flex justify-center items-center'>
            <Loader2 size={70} className={"animate-spin"} />
        </div>
    )
}
