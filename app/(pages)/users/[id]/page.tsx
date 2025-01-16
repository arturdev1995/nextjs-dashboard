import React from 'react'

import Breadcrumb from 'antd/lib/breadcrumb/Breadcrumb'

import { Page } from '@/components/page/page'
import {UserDetailedPage} from "@/components/userDetailedPage/userDetailedPage";


const UserDetailed = ({ params }: { params: { id: string } }) => {


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
                <UserDetailedPage id={params.id} />
            </Page>
        </div>
    )
}

export default UserDetailed
