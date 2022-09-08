import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"


const handleSubmit = async (event) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault()

  
console.log(session.user.email)

  // Get data from the form.
  const data = {
    email: session.user.email,
    username: event.target.username.value,
    wallet: event.target.wallet.value,
    discord: event.target.discord.value,
    twitter: event.target.twitter.value,
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

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const test = () =>{
  signIn()
handleSubmit()
  
}

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="redbutton" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  else{
    return (
      <>
        Not signed in <br />
        <button className="button" onClick={() => test()}>Sign in</button>
      </>
    )
  }
  
}

export default Login