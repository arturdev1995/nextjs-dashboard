import React from 'react'

import Breadcrumb from 'antd/lib/breadcrumb/Breadcrumb'

import { Page } from '@/components/page/page'
import {UserDetailedPage} from "@/components/userDetailedPage/userDetailedPage";


const UserDetailed = async ({ params }: { params: { id: string } }) => {

    const { id } = await params

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
                <UserDetailedPage id={id} />
            </Page>
        </div>
    )
}

export default UserDetailed
