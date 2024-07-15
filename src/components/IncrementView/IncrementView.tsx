'use client'

import { useEffect } from "react"

import { getIpAdress, incrementViews } from "@/utils/datoCMS"

export const IncrementView = () => {

    useEffect(() => {
        const setView = async () => {
            const ip = await getIpAdress()
            console.log(ip)
            await incrementViews(ip)
        }

        try {
            setView()
        } catch (error: any) {
            throw new Error(error.message || 'Ocorreu um erro inesperado')
        }
    },[])

    return (
        <></>
    )
}