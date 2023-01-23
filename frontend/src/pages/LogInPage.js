import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header.js'

//////////////////////////
// '/login' route
// Checks if user is valid
//////////////////////////

const LogInPage = props => {
  localStorage.clear()
  // useHistory is useNavigate in React 6
  // used to redirect
  let history = useHistory()

  // where User data is stored
  const URL = 'https://konnectuz-production.up.railway.app/sessions/'

  // grab User data from MongoDB
  const getSession = async formData => {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    localStorage.setItem('currentUser', JSON.stringify(data))
  }

  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  // update login to what was inputted from the form
  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }

  // create the session if the user is valid
  const handleSubmit = async event => {
    event.preventDefault()
    await getSession(login)
    let current = JSON.parse(localStorage.getItem('currentUser'))
    if (current === null) {
      alert('Username and password do not match!')
    } else {
      history.push('/')
    }
  }

  return (
    <main>
      <Header />
      <div id='login-content'>
        <h1>Login Page</h1>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='row justify-content-md-center'>
              <div className='col col-lg-4'>
                <div>
                  <label className='form-label'>Username</label>
                  <input
                    type='text'
                    name='username'
                    value={login.username}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <div>
                  <label className='form-label'>Password</label>
                  <input
                    type='password'
                    name='password'
                    value={login.password}
                    onChange={handleChange}
                    className='form-control'
                  />
                </div>
                <input className='submit-btn' type='submit' value='Login' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default LogInPage
