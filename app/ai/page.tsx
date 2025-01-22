import { Note } from "@/components/Note";

export default function AIHomePage(){
    return(
        <div className="space-y-6 max-w-7xl mx-auto justify-center mt-12">
            <h1 className="text-3xl font-bold">AI Notes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Note title="What is AI?" content="Definition, Types, Examples. Strong AI, Weak AI"/>
            </div>
        </div>
    )
}