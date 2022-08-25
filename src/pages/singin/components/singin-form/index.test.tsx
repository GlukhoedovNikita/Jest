import renderWithRedux from '@common/utils/tests/renderWithRedux'
import { fireEvent, waitFor } from '@testing-library/react'
import SingInForm from './index'

describe('Sing in form', () => {
    it('render', () => {
        const component = renderWithRedux(<SingInForm />)

        expect(component.getByTestId(/title/i)).toBeInTheDocument()
        expect(component.getByTestId(/email/i)).toBeInTheDocument()
        expect(component.getByTestId(/password/i)).toBeInTheDocument()
        expect(component.getByTestId(/button/i)).toBeInTheDocument()
    })

    it('snapshot', () => {
        const component = renderWithRedux(<SingInForm />)

        expect(component).toMatchSnapshot()
    })

    it('change input', () => {
        const component = renderWithRedux(<SingInForm />)
        const email = component.getByTestId(/email/i)
        const password = component.getByTestId(/password/i)

        expect(email).toHaveValue('')
        expect(password).toHaveValue('')

        fireEvent.change(email, { target: { value: 'email' } })
        fireEvent.change(password, { target: { value: 'password' } })

        expect(email).toHaveValue('email')
        expect(password).toHaveValue('password')
    })

    it('incorrect email', async () => {
        const component = renderWithRedux(<SingInForm />)
        const email = component.getByTestId(/email/i)
        const form = component.getByTestId(/singin-form/i)

        fireEvent.change(email, { target: { value: 'email' } })
        fireEvent.submit(form)

        expect(await component.findByText(/this field is required/i)).toBeInTheDocument()
        expect(await component.findByText(/incorrect mail/i)).toBeInTheDocument()
    })

    it('incorrect password', async () => {
        const component = renderWithRedux(<SingInForm />)
        const form = component.getByTestId(/singin-form/i)
        const password = component.getByTestId(/password/i)

        fireEvent.change(password, { target: { value: '1' } })
        fireEvent.submit(form)

        expect(await component.findByText(/this field is required/i)).toBeInTheDocument()
        expect(await component.findByText(/minimum field length - 3/i)).toBeInTheDocument()

        fireEvent.change(password, { target: { value: '1111122222333335' } })
        fireEvent.submit(form)

        expect(await component.findByText(/this field is required/i)).toBeInTheDocument()
        expect(await component.findByText(/maximum field length - 15/i)).toBeInTheDocument()
    })

    it('valid password and email', async () => {
        const component = renderWithRedux(<SingInForm />)
        const form = component.getByTestId(/form/i)
        const password = component.getByTestId(/password/i)
        const email = component.getByTestId(/email/i)

        fireEvent.change(email, { target: { value: 'test@email.ru' } })
        fireEvent.change(password, { target: { value: '12371' } })
        fireEvent.submit(form)

        await waitFor(() => {
            expect(component.queryByTestId(/incorrect mail/i)).toBeNull()
            expect(component.queryByTestId(/this field is required/i)).toBeNull()
            expect(component.queryByTestId(/minimum field length - 3/i)).toBeNull()
            expect(component.queryByTestId(/maximum field length - 15/i)).toBeNull()
        })
    })
})
