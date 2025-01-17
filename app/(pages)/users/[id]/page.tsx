import React from 'react'

import Breadcrumb from 'antd/lib/breadcrumb/Breadcrumb'

import { Page } from '@/components/page/page'
import {UserDetailedPage} from "@/components/userDetailedPage/userDetailedPage";
import styles from './styles.module.css'

const UserDetailed = ({ params }: { params: { id: string } }) => {

    return (
        <div className={styles.wrapper}>
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
                    },
                    {
                        href: params.id,
                        title: params.id
                    }
                ]}
            />
            <Page>
                <UserDetailedPage id={params.id} />
            </Page>
        </div>
    )
}

export default UserDetailed
