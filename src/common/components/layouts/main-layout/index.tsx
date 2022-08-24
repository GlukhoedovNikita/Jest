import { FC } from 'react'

import Header from '@common/components/containers/header'
import { MainLayoutProps } from './interafces'

const MainLayout: FC<MainLayoutProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div className={className} {...props}>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}

export default MainLayout
