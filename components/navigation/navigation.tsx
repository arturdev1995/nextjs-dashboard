'use client'
import { useCallback } from 'react'

import { Menu } from 'antd'
import { MenuProps } from 'antd/lib'
import { useRouter } from 'next/navigation'

export const menuItems: MenuProps['items'] = [
    { key: '/', label: `main`, type: 'item' },
    { key: '/users', label: `user`, type: 'item' }
]

type NavigationArg = Parameters<Required<MenuProps>['onClick']>

export const Navigation = () => {
    const router = useRouter()

    const navigate = useCallback(
        (...args: NavigationArg) => {
            const [{ key }] = args
            router.push(key)
        },
        [router]
    )

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            style={{ flex: 1, minWidth: 0 }}
            onClick={navigate}
        />
    )
}
