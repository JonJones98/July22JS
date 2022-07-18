import React, {useState} from 'react'
const Form =(props)=>{
    const[firstName, setFirstname]= useState("");
    const[lastName, setLastname]= useState("");
    const[email, setEmail]= useState("")
    const[password, setPassword]=useState("")
    const[confirmPassword, setCPassword]=useState("")
    const [FNError, setFNError] = useState("");
    const [LNError, setLNError] = useState("");
    const [EMError, setEMError] = useState("");
    const [PWError, setPWError] = useState("");
    const [CPError, setCPError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [isValid, setisValid] = useState(true);

    const createUser = (e) => {
        e.preventDefault();
        const newUser={
            firstName,lastName, email,password,confirmPassword
        };
        setHasBeenSubmitted( true );
        
        
    };
    
    const handleFirst =(e)=>{
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFNError("Field is required!");
            setisValid(false);
        } else if(e.target.value.length < 2) {
            setFNError("Field must be 2 characters or longer!");
            setisValid(false);
        } else {
            setFNError("");
            setisValid(true);
        }
    }
    const handleLast =(e)=>{
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLNError("Field is required!");
            setisValid(false);
        } else if(e.target.value.length < 2) {
            setLNError("Field must be 2 characters or longer!");
            setisValid(false);
        } else {
            setLNError("");
            setisValid(true);
        }
    }
    const handleEmail =(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEMError("Field is required!");
            setisValid(false);
        } else if(e.target.value.length < 5) {
            setEMError("Field must be 5 characters or longer!");
            setisValid(false);
        } else {
            setEMError("");
            setisValid(true);
        }
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPWError("Field is required!");
            setisValid(false);
        } else if(e.target.value.length < 8) {
            setPWError("Field must be 8 characters or longer!");
            setisValid(false);
        } else {
            setPWError("");
            setisValid(true);
        }
    }
    const handleConfirmPW =(e,password)=>{
        setCPassword(e.target.value);
        
        if(e.target.value.length < 8) {
            setCPError("Field is required!");
            setisValid(false);
        } else if(e.target.value.length < 8) {
            setCPError("Field must be 2 characters or longer!");
            setisValid(false);
        } else {
            e.target.value != password?
                setCPError("")
                &&setisValid(true)
                :setCPError("Must match Password!")
                && setisValid(false)
                
        }

    }
    return(
        <div>
            <h3>{hasBeenSubmitted?"Thank you for submitting the form!":"Welcome, please submit the form"}</h3> 
        <form onSubmit={createUser}>
            <div>
                <label>First name:</label>
                <input type={"text"} onChange={handleFirst}/>
                {
                FNError?<p>{FNError}</p>:''
                }
            </div>
            <div>
                <label>Last name:</label>
                <input type={"text"} onChange={handleLast}/>
                {
                LNError?<p>{LNError}</p>:''
                }
            </div>
            <div>
                <label>Email:</label>
                <input type={"email"} onChange={handleEmail}/>
                {
                EMError?<p>{EMError}</p>:''
                }
            </div>
            <div>
                <label>Password:</label>
                <input type={"password"} onChange={handlePassword}/>
                {
                PWError?<p>{PWError}</p>:''
                }
            </div>
            <div>
                <label>Confirm password:</label>
                <input type={"password"} onChange={handleConfirmPW}/>
                {
                CPError?<p>{CPError}</p>:''
                }
            </div>
            <div>
                {
                    isValid
                    ?<input type={"submit"} value="Create User"/>
                    :<input type={"submit"} value="Create User" disabled/>
                }
                
            </div>
        </form>
        
        {hasBeenSubmitted?
            <div>
                <h2>
                Form Data
            </h2>
            <p>First name:{firstName}</p>
            <p>Last name:{lastName}</p>
            <p>Email:{email}</p>
            </div>
            :""
            }
        </div>
    );
};
export default Form;