import {PostDTO} from "@/interfaces/users.interface";

export async function getUserData(id : string): Promise<PostDTO> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            },
            cache: 'force-cache'
        })
        if (!response.ok) {
            if (response.status === 400) {
                throw new Error(`Указан неверный ID`)
            }
            if (response.status === 404) {
                throw new Error(`Не найден заказ с указанным ID`)
            }
            throw new Error(`Неккоретный статус ответа ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        throw error
    }
}
