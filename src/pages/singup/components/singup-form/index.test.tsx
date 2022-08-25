import renderWithRedux from '@common/utils/tests/renderWithRedux'
import { fireEvent, waitFor } from '@testing-library/dom'

import SingUpForm from './index'

describe('Sing up form', () => {
    it('render', () => {
        const component = renderWithRedux(<SingUpForm />)

        expect(component.getByTestId('singup-form')).toBeInTheDocument()
        expect(component.getByTestId('title')).toBeInTheDocument()
        expect(component.getByTestId('name')).toBeInTheDocument()
        expect(component.getByTestId('email')).toBeInTheDocument()
        expect(component.getByTestId('password')).toBeInTheDocument()
        expect(component.getByTestId('repeatPassword')).toBeInTheDocument()
        expect(component.getByTestId('button')).toBeInTheDocument()
    })

    it('snapshot', () => {
        const component = renderWithRedux(<SingUpForm />)

        expect(component).toMatchSnapshot()
    })

    it('change input', () => {
        const component = renderWithRedux(<SingUpForm />)
        const name = component.getByTestId('name')
        const email = component.getByTestId('email')
        const password = component.getByTestId('password')
        const repeatPassword = component.getByTestId('repeatPassword')

        const target = { target: { value: '1' } }
        fireEvent.change(name, target)
        fireEvent.change(email, target)
        fireEvent.change(password, target)
        fireEvent.change(repeatPassword, target)

        expect(name).toHaveValue('1')
        expect(email).toHaveValue('1')
        expect(password).toHaveValue('1')
        expect(repeatPassword).toHaveValue('1')
    })

    it('incorrect required', async () => {
        const component = renderWithRedux(<SingUpForm />)
        const form = component.getByTestId('singup-form')

        fireEvent.submit(form)

        expect(await component.findAllByText(/this field is required/i)).toHaveLength(4)
    })

    it('incorrect email', async () => {
        const component = renderWithRedux(<SingUpForm />)
        const form = component.getByTestId('singup-form')
        const email = component.getByTestId('email')

        const target = { target: { value: '123' } }
        fireEvent.change(email, target)
        fireEvent.submit(form)

        expect(await component.findAllByText(/incorrect mail/i)).toHaveLength(1)
    })

    it('password dont match', async () => {
        const component = renderWithRedux(<SingUpForm />)
        const form = component.getByTestId('singup-form')
        const password = component.getByTestId('password')
        const repeatPassword = component.getByTestId('repeatPassword')

        const tagretPassword = { target: { value: '34534' } }
        const tagretRepeatPassword = { target: { value: '345343' } }

        fireEvent.change(password, tagretPassword)
        fireEvent.change(repeatPassword, tagretRepeatPassword)
        fireEvent.submit(form)

        expect(await component.findByText(/passwords do not match/i)).toBeInTheDocument()
    })

    it('password min 3, max 15', async () => {
        const component = renderWithRedux(<SingUpForm />)
        const form = component.getByTestId('singup-form')
        const password = component.getByTestId('password')

        const targetMin = { target: { value: '4' } }

        fireEvent.change(password, targetMin)
        fireEvent.submit(form)

        expect(await component.findByText(/minimum field length - 3/i)).toBeInTheDocument()

        const targetMax = { target: { value: '1111122222333334' } }

        fireEvent.change(password, targetMax)
        fireEvent.submit(form)

        expect(await component.findByText(/maximum field length - 15/i)).toBeInTheDocument()
    })

    it('correct all input', async () => {
        const component = renderWithRedux(<SingUpForm />)
        const form = component.getByTestId('singup-form')
        const name = component.getByTestId('name')
        const email = component.getByTestId('email')
        const password = component.getByTestId('password')
        const repeatPassword = component.getByTestId('repeatPassword')

        const targetName = { tagret: { value: 'name' } }
        const targetEmail = { tagret: { value: 'test@gmail.ru' } }
        const targetPassword = { tagret: { value: '1234' } }
        const targetRepeatPassword = { tagret: { value: '1234' } }

        fireEvent.change(name, targetName)
        fireEvent.change(email, targetEmail)
        fireEvent.change(password, targetPassword)
        fireEvent.change(repeatPassword, targetRepeatPassword)
        fireEvent.submit(form)

        await waitFor(() => {
            expect(component.queryByText(/this field is required/i)).toBeNull()
            expect(component.queryByText(/incorrect mail/i)).toBeNull()
            expect(component.queryByText(/passwords do not match/i)).toBeNull()
            expect(component.queryByText(/minumum field length - 3/i)).toBeNull()
            expect(component.queryByText(/maximum field length - 15/i)).toBeNull()
        })
    })
})
