'use client'
import  Breadcrumb  from 'antd/lib/breadcrumb/Breadcrumb'

import { Page } from '@/components/page/page'
import styles from './styles.module.css'

const OrdersPage = () => {
    return (
        <div>
            <Breadcrumb
                className={styles.breadcrumb}
                items={[
                    {
                        href: '/',
                        title: 'main'
                    },
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
