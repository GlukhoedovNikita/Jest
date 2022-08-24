import { FC } from 'react'

import CenterLayout from '@common/components/layouts/center-layout'
import SingUpForm from './components/singup-form'

const SingUpPage: FC = () => {
    return (
        <CenterLayout>
            <SingUpForm />
        </CenterLayout>
    )
}

export default SingUpPage
