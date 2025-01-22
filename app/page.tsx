import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Luminaries, tech stack notes repository.",
}

export default function Home() {
    return (
        <div className="space-y-6 max-w-7xl mx-auto justify-center">
            <h1 className="text-3xl font-bold">Welcome to Luminaries</h1>
            <p className="text-xl">Your personal tech stack notes repository</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {["AI", "FastAPI"].map((tech) => (
                <Card key={tech}>
                    <CardHeader>
                        <CardTitle>{tech}</CardTitle>
                        <CardDescription>Notes on {tech}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href={`/${tech.toLowerCase()}`} className="text-primary hover:underline">
                            View Notes
                        </Link>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
    )
}