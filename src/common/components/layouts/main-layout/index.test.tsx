import { render } from '@testing-library/react'

import MainLayout from './index'
import styles from './styles.module.scss'

describe('Main Layout', () => {
    it('render', () => {
        const component = render(
            <MainLayout>
                <p>Test</p>
            </MainLayout>
        )

        expect(component.getByTestId(/main-layout/i)).toBeInTheDocument()
        expect(component.getByText(/test/i)).toBeInTheDocument()
    })

    it('classname', () => {
        const component = render(
            <MainLayout className={styles.testClass}>
                <p>Test</p>
            </MainLayout>
        )

        expect(component.getByTestId(/main-layout/i).classList).toHaveLength(2)
        expect(component.getByTestId(/main-layout/i)).toHaveClass('layout')
        expect(component.getByTestId(/main-layout/i)).toHaveClass('testClass')
    })
})
