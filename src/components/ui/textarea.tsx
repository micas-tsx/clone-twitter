type Props = {
    placeholder: string
    rows: number
    value?: string
}

export const TextArea = ({ placeholder, rows, value }:Props) => {
    return(
        <div className="hax-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700">
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <textarea
                className="flex-1 outilne-none bg-transparent h-full p-5 resize-none"
                placeholder={placeholder}
                rows={rows}
                value={value}
            ></textarea>
        </div>
    )
}