import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface NoteProps {
    title: string
    content: string
}

export function Note({ title, content }: NoteProps) {
    return (
        <Card className="hover:shadow-lg hover:dark:shadow-primary/25 hover:shadow-primary/50">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
        </Card>
    )
}