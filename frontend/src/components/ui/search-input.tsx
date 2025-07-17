"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

type Props = { 
    defaultValue?: string
    hideOnSearch?: boolean
}

export const SearchIpunt = ({ defaultValue, hideOnSearch }: Props) => {
    const router = useRouter()
    
    const pathName = usePathname()

    const [searchInput, setSearchInput] = useState(defaultValue ?? '')

    const handleSearchEnter = () => {
        if(searchInput) {
            // biome-ignore lint/style/useTemplate: <explanation>
            router.push('/search?q=' + encodeURIComponent(searchInput))
        }
    }

    if(hideOnSearch && pathName === '/search') return null

    return (
        <Input
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange = {t => setSearchInput(t)}
            onEnter={handleSearchEnter}
        />
        
    )
}