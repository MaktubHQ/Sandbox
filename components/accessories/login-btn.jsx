import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"


// Working on this function to store user info in DB on initial sign-in//

const handler = async () => {
  // Stop the form from submitting and refreshing the page.

// eslint-disable-next-line react-hooks/rules-of-hooks
const { data: session } = useSession()
console.log(session.user.email)

  // Get data from the form.
  const data = {
    email: session.user.email,
  }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/../../../pages/api/profile'

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  }

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json()
  console.log(result)
  console.log(data)
}

const test = () =>{
  signIn()
  handler()
}

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="navAvatar">
        <div>
          Welcome {session.user.email}!<Image src={session.user.image} alt="Logo" className="avatar" width='50px' height='50px'/>
        </div>
       
      <div>
      <button className="redbutton" onClick={() => signOut()}>Sign out</button>
      </div>
      
      </div>
    )
  }
  else{
    return (
      <>
        <br />
        <button className="button" onClick={() => test()}>Sign in</button>
      </>
    )
  }
  
}

export default Login