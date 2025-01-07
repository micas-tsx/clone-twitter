import { user } from "@/data/user"
import { redirect } from "next/navigation"


export default function Page() {
    // biome-ignore lint/style/useTemplate: <explanation>
    redirect ('/' + user.slug)

    return null
}