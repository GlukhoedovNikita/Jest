import { FC } from 'react'

import useTypedDispatch from '@common/hooks/useTypedDispatch'
import useTypedSelector from '@common/hooks/useTypedSelector'

import { decrement, increment } from '@store/slice/counter'
import counterSelector from '@store/slice/counter/selectors'

const CounterContainer: FC = () => {
    const dispatch = useTypedDispatch()
    const { counter } = useTypedSelector(counterSelector)

    const incrementHandler = () => dispatch(increment())
    const decrementHandler = () => dispatch(decrement())

    return (
        <div data-testid="counter-container">
            <h2 data-testid="title-counter">
                Counter -&nbsp;
                {counter}
            </h2>
            <button
                data-testid="button-decrement"
                onClick={() => decrementHandler()}
            >
                Decrement
            </button>
            <button
                data-testid="button-increment"
                onClick={() => incrementHandler()}
            >
                Increment
            </button>
        </div>
    )
}

export default CounterContainer
