'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export const SigninForm = () => {
    const router = useRouter()
    const [emailField, setemailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleEnterButton = () => {
        router.replace('/home')
    }

    return(
        <>
            <input 
                placeholder="Digite seu email"
                value={emailField}
                onChange={e => setemailField(e.target.value)}
            />

            <input 
                type="password"
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={e => setPasswordField(e.target.value)}
            />

            <button onClick={handleEnterButton}>
                Entrar
            </button>
        </>
    )
}