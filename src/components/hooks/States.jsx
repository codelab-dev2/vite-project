import { useState } from 'react'

export const State = () => {
  // let value = 0
  // const handleButtonClick = () => {
  //   value++
  //   console.log(value)
  // };
  // let array = useState();
  // console.log(array)

  const [ count, setCount ] = useState(0)
  console.log('parent component rendered')
  const handleButtonClick = () => {
    setCount(() => count + 1)
  }
  return (
      <>
        <div className="main-div">
          <h1>{count}</h1>
          <button onClick={handleButtonClick}>Increments</button>
        </div>
        <ChildComponent count={count}/>
      </>

  )
}

function ChildComponent({ count }) {
  console.log('child component rendered')
  return (
      <div className="main-div">
        <h2>child component - {count}</h2>
      </div>
  )
}
