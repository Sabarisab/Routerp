import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [count ,setCount]=useState(0);
    const [Count ,SetCount]=useState(0);

  return (
    <div>
        <p>{count} {Count}</p>
        <button onClick={ () =>
        setCount(count + 25)
        } >Plus</button>
        <button
            onClick={ ()=>
            SetCount(Count-25)}>Minus
        </button>
    </div>
  )
}
