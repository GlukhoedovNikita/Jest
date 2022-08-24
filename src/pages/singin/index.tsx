import { FC } from 'react'

import CenterLayout from '@common/components/layouts/center-layout'
import SingInForm from './components/singin-form'

const SingInPage: FC = () => {
    return (
        <CenterLayout>
            <SingInForm />
        </CenterLayout>
    )
}

export default SingInPage
