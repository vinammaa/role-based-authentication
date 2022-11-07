import React, {useState} from 'react';

const data = [
  {
    id: 1,
    name: "vineela",
    isAdmin: true,
    password: "realname"
  },
   {
    id: 2,
    name: "vinamma",
    isAdmin: false,
    password: "petname"
  },
   {
    id: 1,
    name: "viny",
    isAdmin: false,
    password: "nickname"
  }
];


const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  
  const authenicateUser =  (e) => {
  e.preventDefault();
    data.map(item => {
      
      if (name === item.name && password === item.password) {
        if (item.isAdmin) {
          setAdmin(item.isAdmin);
        }
      }
    })
  }
  
  
  return (
  < >
  {
    !admin ?
  <form onSubmit={authenicateUser}>
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" />
      <button type="submit">Login</button>
    </form> :
    <h1>Welcome, {name}</h1>
  } 
  </>
  )

}
export default SignIn;