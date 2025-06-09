import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[phone, setPhone] = useState("")
  const[password, setPassword] = useState("")
  console.log('myName',name);
  console.log('mhyEmail',email);
  console.log('myPhone',phone);
  console.log('myPassword',password);
  
  return (
    <div>
      <h1>Registration form</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' /><br /><br />
      <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' /><br /><br />
      <input type="number" onChange={(e)=>setPhone(e.target.value)} placeholder='Enter your number' /><br /><br />
      <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' /><br /><br />
    </div>
  )
}

export default App
