"use client"

import { useEffect, useState } from "react"

export default function Page() {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)

  async function getAdvice() {
    let res = await fetch("https://api.adviceslip.com/advice")
    let data = await res.json()
    console.log(data.slip.advice)
    setAdvice(data.slip.advice)
    setCount((c) => c + 1)
  }

  useEffect(function () {
    getAdvice()
  }, [])

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  )
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  )
}