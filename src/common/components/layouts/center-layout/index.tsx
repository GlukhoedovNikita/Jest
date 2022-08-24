import { FC } from 'react'
import cn from 'classnames'

import { CenterLayoutProps } from './interfaces'

import styles from './styles.module.scss'
import Header from '@common/components/containers/header'

const CenterLayout: FC<CenterLayoutProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div className={cn(className, styles.layout)} {...props}>
            <Header />
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export default CenterLayout
