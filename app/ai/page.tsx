import { Note } from "@/components/Note";
import Link from "next/link";

export default function AIHomePage(){
    return(
        <div className="space-y-6 max-w-7xl mx-auto justify-center my-12 px-4 md:px-0">
            <h1 className="text-3xl font-bold">AI Notes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/ai/what-is-ai">
                    <Note title="What is AI?" content="Definition, Types, Examples. Strong AI, Weak AI"/>
                </Link>
            </div>
        </div>
    )
}