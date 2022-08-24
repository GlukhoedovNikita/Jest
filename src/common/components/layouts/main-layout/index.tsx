import { FC } from 'react'
import cn from 'classnames'

import { MainLayoutProps } from './interfaces'

import styles from './styles.module.scss'

const MainLayout: FC<MainLayoutProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div className={cn(className, styles.layout)} {...props}>
            {children}
        </div>
    )
}

export default MainLayout
