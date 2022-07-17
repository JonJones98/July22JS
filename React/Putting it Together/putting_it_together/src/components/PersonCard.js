import React, {useState} from 'react'

const PersonCard =(props)=>{
    const{ firstName, lastName, hairColor,age}=props
    const[getage, setlike]=useState(age)
    const birthday =()=>{
        setlike(Number(getage)+1)
    }
   return(
        <div>
            <h1>
                {firstName} {lastName}
            </h1>
            <p>Age: {getage}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={birthday}>Birthday Biutton for {firstName} {lastName}</button>
        </div>
    )
}
export default PersonCard