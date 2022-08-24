import { FC } from 'react'

import MainLayout from '@common/components/layouts/main-layout'
import MainContainer from './components/main-container'

const MainPage: FC = () => {
    return (
        <MainLayout>
            <MainContainer />
        </MainLayout>
    )
}

export default MainPage
