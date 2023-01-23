import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'

///////////////////////////////////////////////////////////////////
// '/signup' route
// creates Users and alerts if trying to use an existing username
///////////////////////////////////////////////////////////////////

const SignUpPage = props => {
  let history = useHistory()
  const [users, setUsers] = useState(null)

  // sign up form initially set to empty values
  const [signUp, setSignUp] = useState({
    username: '',
    password: '',
    posts: [],
    image: ''
  })

  // where User data is stored
  const URL = 'https://konnectuz-production.up.railway.app/user/'

  // grab User data from MongoDB
  const getUsers = async () => {
    const response = await fetch(URL)
    const data = await response.json()

    setUsers(data)
  }

  // create a user using information from sign up form
  const createUser = async formData => {
    // by default fetch GETs, change to POST to create
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(formData)
    })
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  // handleChanges made to form when user types
  const handleChange = event => {
    // spread signUp object
    // reassign [key]:value pairs from 'input'
    setSignUp({ ...signUp, [event.target.name]: event.target.value })
  }

  // creates the new user, resets state of signUp to empty, redirects to '/'
  const handleSubmit = event => {
    // stop page from refreshing
    event.preventDefault()

    // search database if username exists, returns undefined if there is no match
    const taken = users.find(user => user.username === signUp.username)
    // console.log('taken', taken)
    // console.log('signUp', signUp)

    // if 'taken' is 'undefined' createUser
    if (taken === undefined) {
      createUser(signUp)
      // reset signUp
      setSignUp({
        username: '',
        password: '',
        posts: [],
        image: ''
      })

      // redirect to '/login'
      history.push('/login')
    }
    // username does exist
    else {
      alert('Username already exists! Try a different one.')
    }
  }

  return (
    <main>
      <Header />
      <div id='sign-up-content'>
        <h1>Sign Up</h1>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='row justify-content-md-center'>
              <div className='col col-lg-4'>
                <div>
                  <label className='form-label'>Username</label>
                  <input
                    type='text'
                    value={signUp.username}
                    name='username'
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div>
                  <label className='form-label'>Password</label>
                  <input
                    type='password'
                    value={signUp.password}
                    name='password'
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div>
                  <label className='form-label' style={{ marginBottom: 0 }}>
                    Profile Picture
                  </label>
                  <p
                    id='pfp-example'
                    style={{ marginTop: 0, fontSize: '0.75rem' }}
                  >
                    (ex. https://imgur.com/FV8FVeW.jpg)
                  </p>
                  <input
                    type='text'
                    value={signUp.image}
                    name='image'
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <input
                  className='submit-btn'
                  type='submit'
                  value='Sign Up'
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default SignUpPage
