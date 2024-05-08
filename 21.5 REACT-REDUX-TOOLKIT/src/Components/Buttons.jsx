import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { customadd, customsub, decrement, increment } from '../Store/store';
import { privacytoggle } from '../Store/Privacy';

const Buttons = () => {

    const numberref = useRef();
    const dispatch = useDispatch();

    const handleadd = () => {

        dispatch(increment())
    }
    const handleminus = () => {
        dispatch(decrement())
    }
    const handleCustomadd = () => {

        const num = Number(numberref.current.value);
        console.log("custom log called", num)
        dispatch(customadd({ value: num }));

    }
    const handleCustomsub = () => {
        const num = Number(numberref.current.value);
        dispatch(customsub({ value: num }));
    }
    const handletoggle = () => {
        dispatch(privacytoggle())
    }
    return (
        <div className='flex flex-col items-center gap-4 font-medium'>
            <div className='flex gap-2'>
                <button onClick={handleadd} className='py-1 px-2 bg-green-700 '>Increment</button>
                <button onClick={handleminus} className='py-1 px-2 bg-red-700'>Decrement</button>
                <button onClick={handletoggle} className='py-1 px-2 bg-orange-400'>Privacy Toggle</button>
            </div>
            <div className='flex gap-2'>
                <input ref={numberref} type="number" className='border text-[15px]' placeholder='enter a number' />
                <button onClick={handleCustomadd} className='bg-green-600 py-1 px-2' type='submit'>add</button>
                <button onClick={handleCustomsub} className='bg-red-600 py-1 px-2' type='submit'>sub</button>
            </div>
        </div>
    )
}

export default Buttons