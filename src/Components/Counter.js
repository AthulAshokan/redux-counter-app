import React from 'react'
import './Counter.css'
import { increment,decrement } from '../Redux/Reducer/Reducer'

import { useDispatch, useSelector } from 'react-redux'
function Counter() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='counter-container'>
      <h1 className='counter-head'>react js redux example </h1>
      <p className='sample'>{count}</p>
      <div className='counter-buttons'>
        <button className='counter-button' onClick={()=>dispatch(increment())}>
          increment
          </button>
        <button className='counter-button' onClick={()=>dispatch(decrement())}>
          decrement
          </button>

      </div>
    </div>
  )
}

export default Counter