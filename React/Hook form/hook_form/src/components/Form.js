import React, {useState} from 'react'
const Form =(props)=>{
    const[firstName, setFirstname]= useState("");
    const[lastName, setLastname]= useState("");
    const[email, setEmail]= useState("")
    const[password, setPassword]=useState("")
    const[confirmPassword, setCPassword]=useState("")
    const createUser = (e) => {
        e.preventDefault();
        const newUser={
            firstName,lastName, email,password,confirmPassword
        };
    };
    return(
        <div>
        <form onSubmit={createUser}>
            <div>
                <label>First name:</label>
                <input type={"text"} onChange={(e)=>setFirstname(e.target.value)}/>
            </div>
            <div>
                <label>Last name:</label>
                <input type={"text"} onChange={(e)=>setLastname(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type={"email"} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type={"password"} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm password:</label>
                <input type={"password"} onChange={(e)=>setCPassword(e.target.value)}/>
            </div>
            <div>
                <input type={"submit"} value="Create User"/>
            </div>
        </form>
        <div>
            <h2>
                Form Data
            </h2>
            <p>First name:{firstName}</p>
            <p>Last name:{lastName}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>Confirm password:{confirmPassword}</p>

        </div>
        </div>
    );
};
export default Form;