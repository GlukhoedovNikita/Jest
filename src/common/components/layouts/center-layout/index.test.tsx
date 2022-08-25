import renderWithRouter from '@common/utils/tests/renderWithRouter'

import CenterLayout from './index'
import styles from './styles.module.scss'

describe('Center Layout', () => {
    it('render', () => {
        const component = renderWithRouter(
            <CenterLayout>
                <p>Test</p>
            </CenterLayout>
        )

        expect(component.getByText(/test/i)).toBeInTheDocument()
    })

    it('classname', () => {
        const component = renderWithRouter(
            <CenterLayout className={styles.testClass}>
                <p>Test</p>
            </CenterLayout>
        )

        expect(component.getByTestId(/center-layout/i).classList).toHaveLength(2)
        expect(component.getByTestId(/center-layout/i)).toHaveClass('layout')
        expect(component.getByTestId(/center-layout/i)).toHaveClass('testClass')
    })
})
