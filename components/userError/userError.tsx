'use client'

import { useCallback } from 'react'

import { Button, Card, Divider, Flex, Typography } from 'antd'

const { Title, Text } = Typography

interface OrderErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export const UserError = (props: OrderErrorProps) => {
    const { error, reset } = props

    const handleResetButtonClick = useCallback(() => {
        reset()
    }, [reset])

    return (
        <div  >
            <Card  >
                <Flex vertical>
                    <Title level={4}>Запрос не удался :(</Title>
                    <Text>Попробуйте обновить страницу</Text>
                    <Text>Ошибка: {error.message}</Text>
                    <Divider />
                    <Button onClick={handleResetButtonClick}>Обновить страницу</Button>
                </Flex>
            </Card>
        </div>
    )
}
