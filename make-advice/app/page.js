"use client"

import { useState } from "react"

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

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  )
}
