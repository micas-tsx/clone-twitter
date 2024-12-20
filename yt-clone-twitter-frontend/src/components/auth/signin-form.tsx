'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "../ui/input"

export const SigninForm = () => {
    const router = useRouter()
    const [emailField, setemailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleEnterButton = () => {
        router.replace('/home')
    }

    return(
        <>
            <Input 
                placeholder="Digite seu email"
                value={emailField}
                onChange={t => setemailField(t)}
            />

            <Input 
                
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
            />

            <button onClick={handleEnterButton}>
                Entrar
            </button>
        </>
    )
}