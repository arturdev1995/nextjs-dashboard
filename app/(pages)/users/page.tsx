'use client'
import  Breadcrumb  from 'antd/lib/breadcrumb/Breadcrumb'

import { Page } from '@/components/page/page'

const OrdersPage = () => {
    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        href: '/users',
                        title: 'users'
                    }
                ]}
            />
            <Page>
               123
            </Page>
        </div>
    )
}

export default OrdersPage
