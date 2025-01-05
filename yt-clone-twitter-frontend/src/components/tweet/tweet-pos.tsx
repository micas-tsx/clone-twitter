"use client"

import { user } from "@/data/user"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../ui/button"

export const TweetPost = () => {
    
    const handleImageUpload = () => {

    }

    const handlePostClick = () => {

    }
    
    return (
        <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-900">
            <div>
                <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="size-12 rounded-full"
                />
            </div>
            <div className="flex-1">
                {/* biome-ignore lint/a11y/useFocusableInteractive: <explanation> */}
                {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                <div 
                    className="min-h-14 outiline-none text-lg text-white empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
                    contentEditable
                    // biome-ignore lint/a11y/useSemanticElements: <explanation>
                    role="textbox"
                    data-placeholder="O que está acontendo?"
                ></div>
                <div className="flex justify-between items-center mt-2">
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <div onClick={handleImageUpload} className="cursor-pointer">
                        <FontAwesomeIcon icon={faImage} className="size-6" />
                    </div>
                    <div className="w-28">
                        <Button
                            label="Postar"
                            size={2}
                            onClick={handlePostClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}