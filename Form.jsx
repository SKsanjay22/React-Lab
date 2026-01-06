import React , {useState} from 'react'

function Form() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [submittedDate,setsubmittedDate]=useState("")
    
    const handleSubmit=()=>{
    e.preventDefault();
    const formdata={name,email,password}
    setsubmittedDate(formdata);
    setName("")
    setEmail("")
    setPassword("")
    }
  return (  
    <div>
    <h2>Form</h2>
    <form action="">
        <lable> name:</lable>
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <label> email: </label>
        <input type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <label> password:</label>
        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">submit</button>
        
        
        </form>
        {submittedDate && (
            <div>
                <h2>submitted Date</h2>
                <p><strong>name:</strong>{submittedDate.name}</p>
                <p><strong>email:</strong>{submittedDate.email}</p>
                <p><strong>password:</strong>{submittedDate.password}</p>
    </div>
     
  )}
  </div>
  )
}

export default Form
