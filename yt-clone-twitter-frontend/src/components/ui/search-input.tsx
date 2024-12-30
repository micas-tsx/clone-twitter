"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"
import { useState } from "react"

type Props = { 
    defaultValue?: string
    hideOnSearch?: boolean
}

export const SearchIpunt = ({ defaultValue, hideOnSearch }: Props) => {
    const router = useRouter()
    
    const pathName = usePathName()

    const [searchInput, setSearchInput] = useState(defaultValue ?? '')

    const handleSearchEnter = () => {
        if(searchInput) {
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