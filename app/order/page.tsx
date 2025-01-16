import {Card} from "antd";

export default async function Page() {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    const data = await res.json()

    return (
        <main className="flex min-h-screen flex-col p-6">
            page order
            {data[0].id}
            <Card>12</Card>
        </main>
    );
}
