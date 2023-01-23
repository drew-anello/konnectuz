import React from 'react'
import Header from '../components/Header'
import CreatePost from '../components/CreatePost'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/////////////////////////////////////////
// '/user/:id' route
// SHOW currently logged in user's posts
/////////////////////////////////////////

const UserPage = props => {
  let editAndDelete = ''
  let createPostDiv = ''
  // check to see if the person's id who logged in matches the
  if (localStorage.getItem('currentUser')) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser._id === props.match.params.userid) {
      editAndDelete = (
        <div className='buttons'>
          <div className='edit'>
            <i class='bi bi-pencil-square'></i>
          </div>
          <div className='delete'>
            <i class='bi bi-trash'></i>
          </div>
        </div>
      )
      createPostDiv = <CreatePost getUser={getUser} />
    }
  }

  const [user, setUser] = useState(null)

  // fetch data for current logged in user
  const URL = `https://konnectuz-production.up.railway.app/user/${props.match.params.userid}/`
  async function getUser () {
    const response = await fetch(URL)
    const data = await response.json()
    // both data and user is showing in console
    setUser(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  let loaded = () => {
    let allPosts = (
      <div className='row justify-content-md-center'>
        <div className='col col-lg-7' style={{ padding: 0 }}>
          {user.posts.map(post => {
            //date in ms at which post was made
            let postDate = new Date(post.createdAt)
            //date is now date is seconds
            postDate /= 1000
            //current time in seconds
            let currentDate = Date.now() / 1000
            //time in minutes since post
            const timeSincePost = Math.floor((currentDate - postDate) / 60)
            //var that holds time since post after condition
            let dateSincePost

            if (timeSincePost < 1) {
              dateSincePost = `<1 min ago`
              return (
                <div className='ind-post' key={user.id}>
                  <div className='post-header'>
                    {editAndDelete}
                    <div className='user-info'>
                      <img className='pfp' src={user.pfp} alt=''></img>
                      <h5 style={{ fontWeight: 700 }}>{user.username}</h5>
                    </div>
                    <div className='timestamp'>{dateSincePost}</div>
                  </div>
                  <div className='post-content' key={post.content}>
                    <p className='post-text' style={{ margin: 0 }}>
                      {post.content}
                    </p>
                    <img className='post-img' src={post.image} alt='' />
                  </div>

                  <div id='comments'>
                    <h5
                      id='comment-header'
                      style={{
                        fontWeight: 700,
                        display: 'flex',
                        justifyContent: 'center',
                        padding: 5
                      }}
                    >
                      <Link to={`/post/${user.id}/${post._id}`}>COMMENTS</Link>
                    </h5>

                    {post.comments.map(comment => {
                      //date in ms at which comment was made
                      let commentDate = new Date(comment.createdAt)
                      //date is now date is seconds
                      commentDate /= 1000
                      //current time in seconds
                      let currentDate = Date.now() / 1000
                      //time in minutes since post
                      const timeSincePost = Math.floor(
                        (currentDate - commentDate) / 60
                      )
                      //var that holds time since post after condition
                      let dateSinceComment
                      if (timeSincePost > 60) {
                        dateSinceComment = `${Math.floor(
                          timeSincePost / 60
                        )} hrs ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                      if (timeSincePost > 1 && timeSincePost <= 60) {
                        dateSinceComment = `${timeSincePost} minutes ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                      if (timeSincePost < 1) {
                        dateSinceComment = `<1 min ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              )
            }
            if (timeSincePost > 1 && timeSincePost <= 60) {
              dateSincePost = `${timeSincePost} min ago`
              return (
                <div className='ind-post' key={user.id}>
                  <div className='post-header'>
                    {editAndDelete}
                    <div className='user-info'>
                      <img className='pfp' src={user.pfp} alt=''></img>
                      <h5 style={{ fontWeight: 700 }}>{user.username}</h5>
                    </div>
                    <div className='timestamp'>{dateSincePost}</div>
                  </div>
                  <div className='post-content' key={post.content}>
                    <p className='post-text' style={{ margin: 0 }}>
                      {post.content}
                    </p>
                    <img className='post-img' src={post.image} alt='' />
                  </div>

                  <div id='comments'>
                    <h5
                      id='comment-header'
                      style={{
                        fontWeight: 700,
                        display: 'flex',
                        justifyContent: 'center',
                        padding: 5
                      }}
                    >
                      <Link to={`/post/${user.id}/${post._id}`}>COMMENTS</Link>
                    </h5>

                    {post.comments.map(comment => {
                      //date in ms at which comment was made
                      let commentDate = new Date(comment.createdAt)
                      //date is now date is seconds
                      commentDate /= 1000
                      //current time in seconds
                      let currentDate = Date.now() / 1000
                      //time in minutes since post
                      const timeSincePost = Math.floor(
                        (currentDate - commentDate) / 60
                      )
                      //var that holds time since post after condition
                      let dateSinceComment
                      if (timeSincePost > 60) {
                        dateSinceComment = `${Math.floor(
                          timeSincePost / 60
                        )} hrs ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                      if (timeSincePost > 1 && timeSincePost <= 60) {
                        dateSinceComment = `${timeSincePost} minutes ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                      if (timeSincePost < 1) {
                        dateSinceComment = `<1 min ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              )
            }
            if (timeSincePost > 60 && timeSincePost <= 1440) {
              dateSincePost = `${Math.floor(timeSincePost / 60)} hrs ago`
              return (
                <div className='ind-post' key={user.id}>
                  <div className='post-header'>
                    {editAndDelete}
                    <div className='user-info'>
                      <img className='pfp' src={user.pfp} alt=''></img>
                      <h5 style={{ fontWeight: 700 }}>{user.username}</h5>
                    </div>
                    <div className='timestamp'>{dateSincePost}</div>
                  </div>
                  <div className='post-content' key={post.content}>
                    <p className='post-text' style={{ margin: 0 }}>
                      {post.content}
                    </p>
                    <img className='post-img' src={post.image} alt='' />
                  </div>

                  <div id='comments'>
                    <h5
                      id='comment-header'
                      style={{
                        fontWeight: 700,
                        display: 'flex',
                        justifyContent: 'center',
                        padding: 5
                      }}
                    >
                      <Link to={`/post/${user.id}/${post._id}`}>COMMENTS</Link>
                    </h5>

                    {post.comments.map(comment => {
                      //date in ms at which comment was made
                      let commentDate = new Date(comment.createdAt)
                      //date is now date is seconds
                      commentDate /= 1000
                      //current time in seconds
                      let currentDate = Date.now() / 1000
                      //time in minutes since post
                      const timeSincePost = Math.floor(
                        (currentDate - commentDate) / 60
                      )
                      //var that holds time since post after condition
                      let dateSinceComment
                      if (timeSincePost > 60) {
                        dateSinceComment = `${Math.floor(
                          timeSincePost / 60
                        )} hrs ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                      if (timeSincePost > 1 && timeSincePost <= 60) {
                        dateSinceComment = `${timeSincePost} minutes ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                      if (timeSincePost < 1) {
                        dateSinceComment = `<1 min ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              )
            }
            if (timeSincePost > 1440) {
              dateSincePost = `${Math.floor(timeSincePost / 1440)} days ago`
              return (
                <div className='ind-post' key={user.id}>
                  <div className='post-header'>
                    {editAndDelete}
                    <div className='user-info'>
                      <img className='pfp' src={user.pfp} alt=''></img>
                      <h5 style={{ fontWeight: 700 }}>{user.username}</h5>
                    </div>
                    <div className='timestamp'>{dateSincePost}</div>
                  </div>
                  <div className='post-content' key={post.content}>
                    <p className='post-text' style={{ margin: 0 }}>
                      {post.content}
                    </p>
                    <img className='post-img' src={post.image} alt='' />
                  </div>

                  <div id='comments'>
                    <h5
                      id='comment-header'
                      style={{
                        fontWeight: 700,
                        display: 'flex',
                        justifyContent: 'center',
                        padding: 5
                      }}
                    >
                      <Link to={`/post/${user.id}/${post._id}`}>COMMENTS</Link>
                    </h5>

                    {post.comments.map(comment => {
                      //date in ms at which comment was made
                      let commentDate = new Date(comment.createdAt)
                      //date is now date is seconds
                      commentDate /= 1000
                      //current time in seconds
                      let currentDate = Date.now() / 1000
                      //time in minutes since post
                      const timeSincePost = Math.floor(
                        (currentDate - commentDate) / 60
                      )
                      //var that holds time since post after condition
                      let dateSinceComment
                      if (timeSincePost > 60) {
                        dateSinceComment = `${Math.floor(
                          timeSincePost / 60
                        )} hrs ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                      if (timeSincePost > 1 && timeSincePost <= 60) {
                        dateSinceComment = `${timeSincePost} minutes ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                      if (timeSincePost < 1) {
                        dateSinceComment = `<1 min ago`
                        return (
                          <div className='comment-container'>
                            <div className='comment' key={comment.content}>
                              {comment.content}
                            </div>
                            <div className='createdAt'>{dateSinceComment}</div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
    return (
      <div>
        <Header />
        {createPostDiv}
        {allPosts}
      </div>
    )
  }
  let loading = () => {
    return (
      <div>
        <h1>Loading...</h1>
        <Header />
        {createPostDiv}
      </div>
    )
  }
  return user ? loaded() : loading()
}

export default UserPage
