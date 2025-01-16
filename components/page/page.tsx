import { ReactNode } from 'react'

export interface HasChildren {
    children: ReactNode
}

export const Page = ({ children }: HasChildren) => {
    return <div className="page">{children}</div>
}
