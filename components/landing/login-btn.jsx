import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"

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
        <button className="button" onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
  
}

export default Login