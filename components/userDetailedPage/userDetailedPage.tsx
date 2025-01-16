import React from 'react'

import {UserDTO} from "@/interfaces/users.interface";
import {User} from "@/components/user/user";
import {getUserData} from "@/api/getUser/getUser";

interface OrderDetailedPageProps {
    id: string
}

export async function UserDetailedPage(props: OrderDetailedPageProps) {
    const { id } = props

    const data: UserDTO[] | undefined = await getUserData()

    return <User data={data} />
}
