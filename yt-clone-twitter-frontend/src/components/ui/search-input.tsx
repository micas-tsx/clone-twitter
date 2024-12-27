"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"
import { useState } from "react"

type Props = { 
    defaultValue?: string
}

export const SearchIpunt = ({ defaultValue }: Props) => {
    const [searchInput, setSearchInput] = useState(defaultValue)


    return (
        <Input
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange = {t => setSearchInput}
            
        />
        
    )
}