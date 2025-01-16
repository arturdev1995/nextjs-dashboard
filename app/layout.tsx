import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd'
import ru_RU from 'antd/lib/locale/ru_RU'

const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en">
        <body>
        <AntdRegistry>
            <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
        </AntdRegistry>
        </body>
    </html>
);

export default RootLayout;
