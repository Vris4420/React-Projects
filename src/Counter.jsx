import { useState } from "react"

function Counter(){
    const [person, setPerson] = useState({name: "Rohon", age: 55});
    function clicked(){
        setPerson((currPerson) => {
            return {
                ...currPerson, name:"Raman"
            }
        })
    }

    return (
        <div className="container" onClick={clicked}>
            <h1>hello, {person.name}</h1>
            <h1> and your age is {person.age}</h1>
        </div>
    )
}

export default Counter;