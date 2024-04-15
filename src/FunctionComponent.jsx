import { useState } from "react"
// import { DisplayString } from "./DisplayString"

export function FunctionComponent({ favoriteNumber }) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)


    METHOD-1
    let jsx;
    if(favoriteNumber != null){
        jsx = `My favourite number is ${favoriteNumber}`
    }

    return (
        <div>
        <input value={name} onChange={e => setName(e.target.value)} />
        <br />
        <br />
        <button onClick={() => setAge(currentAge => currentAge - 1)}> -</button>
        {age}
        <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>
        <br />
        <br />
        <br/>
        My name is {name} and I am {age} years old.
        </div>
    )
}