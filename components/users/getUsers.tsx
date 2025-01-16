import {UserDTO} from "@/interfaces/users.interface";

export async function getUsersData(id: string): Promise<UserDTO[]> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
            headers: {
                'Content-Type': 'application/json',
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
