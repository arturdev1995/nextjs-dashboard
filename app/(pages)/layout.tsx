'use client'
import React from 'react'

import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Navigation} from "@/components/navigation/navigation";
import { HasChildren } from '@/interfaces/props'

const queryClient = new QueryClient()

import styles from './styles.module.css'

const PagesLayout = ({ children }: HasChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <Navigation />
                </Header>
                <Content className={styles.content}>{children}</Content>
                <Footer className={styles.footer}>Footer</Footer>
            </Layout>
        </QueryClientProvider>

    )
}

export default PagesLayout
