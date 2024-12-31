import Link from "next/link"

type Props = {
    label: string
    count: number
}

export const TrendingItem = ({ label, count }:Props) => {
    return(
        <Link
            href={`/search?q=${encodeURIComponent(label)}`}
            className="group/item"
        >
            <div className="group-hover/item:underline font-bold">{label}</div>
            <div className="text-sm text-grey-400">{count}</div>
        </Link>
    )
}

export const TrendingItemSkeleton = () => {
    return(
        <div className="flex animate-pulse flex-col gap-1">
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <div className="bg-gray-600 w-3/4 h-4"></div>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <div className="bg-gray-600 w-1/4 h-4"></div>
        </div>
    )
}