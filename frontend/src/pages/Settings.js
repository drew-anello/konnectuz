import React from 'react'
import Header from '../components/Header'
import { useHistory } from 'react-router-dom'

function Settings (props) {
  let current = JSON.parse(localStorage.getItem('currentUser'))
  let history = useHistory()

  const URL = `https://konnectuz-production.up.railway.app/user/${current._id}`
  async function deleteUser () {
    await fetch(URL, { method: 'DELETE' })
  }
  function confirmDelete () {
    if (window.confirm('are you sure you want to delete your account')) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    localStorage.clear()
    deleteUser()
    history.push('/')
  }
  return (
    <div className='settings'>
      <Header />
      <div className='delete-account'>
        <div className='row justify-content-md-center'>
          <div className='col col-lg-5 create-post-form'>
            <h2 style={{ marginBottom: 20, borderBottom: '2px solid black' }}>
              {' '}
              Delete Account
            </h2>
            <img className='pfp' src={current.image} alt='' />
            <p style={{ display: 'inline-block', fontSize: '1.2rem' }}>
              <strong>id: {current._id}</strong>
            </p>
            <br />
            <button onClick={confirmDelete} style={{ textAlign: 'center' }}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
