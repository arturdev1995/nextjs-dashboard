'use client'

import { Card, Flex, Space, Typography } from 'antd'

import {UserDTO} from "@/interfaces/users.interface";

const { Title, Text } = Typography

interface UserProps {
    data: UserDTO[]
}

export const User = (props: UserProps) => {
    const { data } = props

    return (
        <div>
            <Card>
                <Flex vertical>
                    <Title level={4}>id: {data[0].id}</Title>
                    <Space>
                        <Text strong>name</Text>
                        <Text>{data[0].name}</Text>
                    </Space>
                </Flex>
            </Card>
        </div>
    )
}
