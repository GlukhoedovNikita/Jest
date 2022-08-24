import { FC } from 'react'

import MainLayout from '@common/components/layouts/main-layout'
import CounterContainer from './components/counter-container'

const CounterPage: FC = () => {
    return (
        <MainLayout>
            <CounterContainer />
        </MainLayout>
    )
}

export default CounterPage
