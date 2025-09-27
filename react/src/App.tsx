import { useState } from 'react'
import { lazy, Suspense } from 'react';
import './App.css'
import React from 'react'
const RandomItem = lazy(() => import("./components/random"))
interface Param {
  value: number
}


function App() {
  const [count, setCount] = useState(0);
  const today = React.useMemo(() => new Date(), []);
  const inital: Param = { value: 100 }


  function reducerji(value: Param) {
    return { ...value, value: value.value + 100 };

  }



  const [token, setToken] = React.useReducer(reducerji, inital)

  return (
    <>
      <div>
        <p>{today.toString()}</p>
        <p>{token.value}</p>
        <button onClick={setToken}>

        </button>

        <Suspense fallback={<div><h1>naamskar there </h1></div>}>
          <RandomItem />
        </Suspense>
      </div>
    </>
  )
}

export default App
