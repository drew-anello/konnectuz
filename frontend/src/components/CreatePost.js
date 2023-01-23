import React from 'react'
import { useState } from 'react'

////////////////////////////////////
// CREATE a post
// logged in user can create a post
////////////////////////////////////

const CreatePost = ({ getUser }) => {
  // current user
  let current = JSON.parse(localStorage.getItem('currentUser'))

  const [post, setPost] = useState({
    content: '',
    image: '',
    likes: [],
    comments: []
  })

  // it a user is logged in
  if (current) {
    // get data for a User's post
    const postURL = `https://konnectuz-production.up.railway.app/post/${current._id}`

    const createPost = async post => {
      await fetch(postURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(post)
      })
      getUser()
    }

    // handle changes made to form; updates current state of 'post'
    const handleChange = event => {
      console.log(current)
      setPost({ ...post, [event.target.name]: event.target.value })
    }

    // handle form submission (create 'post' which will display in 'Feed')
    const handleSubmit = event => {
      // event.preventDefault()
      createPost(post)

      // reset 'post' state
      setPost({
        content: '',
        image: '',
        likes: [],
        comments: []
      })
    }

    // form to CREATE post
    return (
      <div className='create-post'>
        <form onSubmit={handleSubmit}>
          <div className='row justify-content-md-center'>
            <div className='col col-lg-5 create-post-form'>
              <div>
                <div className='create-post-header'>
                  <img className='logged-in-pfp' src={current.image} alt='' />
                  <h3 style={{ fontWeight: 700 }}>What's New?</h3>
                  <div></div>
                </div>
                <div>
                  <label className='form-label create-post-labels'>
                    Message
                  </label>
                  <input
                    type='text'
                    name='content'
                    placeholder="What's Happening?"
                    maxLength={500}
                    value={post.content}
                    onChange={handleChange}
                    className='form-control'
                    style={{ margin: 0 }}
                  />
                </div>
              </div>
              <div>
                <label
                  className='form-label create-post-labels'
                  style={{ marginTop: 5 }}
                >
                  Image
                </label>
                <p
                  id='pfp-example'
                  style={{ marginBottom: 10, fontSize: '0.75rem' }}
                >
                  (ex. https://imgur.com/FV8FVeW.jpg)
                </p>
                <input
                  type='text'
                  name='image'
                  // placeholder="https://imgur.com/FV8FVeW.jpg)"
                  value={post.image}
                  onChange={handleChange}
                  className='form-control'
                  style={{ margin: 0 }}
                />
              </div>
              <input
                className='submit-btn'
                type='submit'
                value='Konnect!'
                style={{ marginTop: 15, marginBottom: 0 }}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CreatePost
