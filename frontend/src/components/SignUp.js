import React, { useEffect } from 'react'
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import SignUpPage from '../pages/SignUpPage.js'

// ###############
// IGNORE FOR NOW
// ###############

const SignUpForm = props => {
  const [user, setUser] = useState(null)

  // where User data is stored
  const URL = 'https://konnectuz-production.up.railway.app/user/'

  // grab and display data from MongoDB
  const getUsers = async () => {
    const response = await fetch(URL)
    const data = await response.json()

    setUser(data)
  }

  // this method is going to be passed into SignUpPage
  const createUser = async user => {
    // by default fetch GETs, change to POST to create
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(user)
    })
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <Switch>
        <Route path='/signup'>
          <SignUpPage user={user} createUser={createUser} />
        </Route>
      </Switch>
    </div>
  )
}

export default SignUpForm
