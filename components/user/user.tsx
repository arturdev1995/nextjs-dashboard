'use client'

import { Card, Flex, Space, Typography } from 'antd'

import {PostDTO} from "@/interfaces/users.interface";

const { Title, Text } = Typography

interface UserProps {
    data: PostDTO
}

export const User = (props: UserProps) => {
    const { data } = props

    return (
        <div>
            <Card>
                <Flex vertical>
                    <Title level={4}>id: {data.id}</Title>
                    <Space>
                        <Text strong>name</Text>
                        <Text>{data.title}</Text>
                    </Space>
                </Flex>
            </Card>
        </div>
    )
}
