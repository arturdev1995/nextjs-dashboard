'use client'
import React from 'react'

import { Layout } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'

import { HasChildren } from '@/interfaces/props'


const PagesLayout = ({ children }: HasChildren) => {
    return (
            <Layout  >
                <Content  >{children}</Content>
                <Footer  >Footer</Footer>
            </Layout>
    )
}

export default PagesLayout
