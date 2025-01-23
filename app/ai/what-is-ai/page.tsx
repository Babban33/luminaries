import type { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "What is AI? | Luminaries",
  description: "Learn about Artificial Intelligence, its types, and real-world examples.",
}

export default function WhatIsAIPage() {
    return (
        <div className="space-y-6 max-w-7xl mx-auto justify-center my-12 px-4 md:px-0">
            <h1 className="text-4xl font-bold">What is AI?</h1>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Definition</h2>
                <p className="text-lg">
                Artificial Intelligence (AI) is a subfiled of Computer Science that enables us to create systems that mimic human actions.
                </p>
                <p>For example, when we are travelling and talking on phone. The cellphone towers use AI to switch between towers. Another example might be </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Types of AI</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                    <CardTitle>Narrow AI (Weak AI)</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>Systems that require human intervention.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                    <CardTitle>General AI (Strong AI)</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>Systems that do not require human intervention </p>
                    </CardContent>
                </Card>
                </div>
            </section>
        </div>
    )
}