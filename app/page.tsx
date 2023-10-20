'use client';

import styles from './page.module.css'

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from './redux/counterSlice';

export default function Home() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <main className={styles.main}>
            <button
                className={styles.button}
                onClick={() => dispatch(increment())}
            >Increment
            </button>
            <span>{count}</span>
            <button
                className={styles.button}
                onClick={() => dispatch(decrement())}
            >Decrement
            </button>
            <button
                className={styles.button}
                onClick={() => dispatch(incrementByAmount(2))}
            >Increment by 2
            </button>
        </main>
    )
}