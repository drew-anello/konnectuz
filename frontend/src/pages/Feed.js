import React from 'react'
import Header from '../components/Header'
import CreatePost from '../components/CreatePost'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/////////////////////////
// '/feed' route
// SHOW all users' posts
/////////////////////////
const Feed = () => {
  const [user, setUser] = useState(null)

  // get all user data from MongoDB
  const URL = 'https://konnectuz-production.up.railway.app/user/'
  const getUser = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setUser(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  // if there is data at the 'URL'
  let loaded = () => {
    // map through all the users and show all of their posts
    let allPosts = user.map(u => {
      return (
        <div className='row justify-content-md-center'>
          <div className='col col-lg-7' style={{ padding: 0 }} key={u._id}>
            {/* map through individual user's 'posts' array */}
            {u.posts.map(post => {
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
                  <div className='ind-post'>
                    {/* clicking on profile picture or username links to user's page */}
                    <Link to={`/user/${u.id}`}>
                      {/* user's 'pfp' and 'username' */}
                      <div className='post-header'>
                        <div className='user-info'>
                          <img className='pfp' src={u.pfp} alt='' />
                          <h5 style={{ fontWeight: 700 }}>{u.username}</h5>
                        </div>
                        <div className='timestamp'>{dateSincePost}</div>
                      </div>
                    </Link>

                    {/* whatever user inputted to the form is shown here */}
                    {/* <div key={post.content}> */}
                    <div className='post-content'>
                      <p className='post-text' style={{ margin: 0 }}>
                        {post.content}
                      </p>
                      <img className='post-img' src={post.image} alt='' />
                    </div>
                    <div id='comments'>
                      {/* clicking on comments leads to page of comments of that post */}
                      <h5
                        id='comment-header'
                        style={{
                          fontWeight: 700,
                          display: 'flex',
                          justifyContent: 'center',
                          padding: 5
                        }}
                      >
                        <Link to={`/post/${u.id}/${post._id}`}>COMMENTS</Link>
                      </h5>

                      {/* map through each post's 'comments' array */}
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
                            </div>
                          )
                        }
                      })}
                    </div>
                    {/* </div> */}
                  </div>
                )
              }
              if (timeSincePost > 1 && timeSincePost <= 60) {
                dateSincePost = `${timeSincePost} min ago`
                return (
                  <div className='ind-post'>
                    {/* clicking on profile picture or username links to user's page */}
                    <Link to={`/user/${u.id}`}>
                      {/* user's 'pfp' and 'username' */}
                      <div className='post-header'>
                        <div className='user-info'>
                          <img className='pfp' src={u.pfp} alt='' />
                          <h5 style={{ fontWeight: 700 }}>{u.username}</h5>
                        </div>
                        <div className='timestamp'>{dateSincePost}</div>
                      </div>
                    </Link>

                    {/* whatever user inputted to the form is shown here */}
                    {/* <div key={post.content}> */}
                    <div className='post-content'>
                      <p className='post-text' style={{ margin: 0 }}>
                        {post.content}
                      </p>
                      <img className='post-img' src={post.image} alt='' />
                    </div>
                    <div id='comments'>
                      {/* clicking on comments leads to page of comments of that post */}
                      <h5
                        id='comment-header'
                        style={{
                          fontWeight: 700,
                          display: 'flex',
                          justifyContent: 'center',
                          padding: 5
                        }}
                      >
                        <Link to={`/post/${u.id}/${post._id}`}>COMMENTS</Link>
                      </h5>

                      {/* map through each post's 'comments' array */}
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
                            </div>
                          )
                        }
                      })}
                    </div>
                    {/* </div> */}
                  </div>
                )
              }
              if (timeSincePost > 60 && timeSincePost <= 1440) {
                dateSincePost = `${Math.floor(timeSincePost / 60)} hrs ago`
                return (
                  <div className='ind-post'>
                    {/* clicking on profile picture or username links to user's page */}
                    <Link to={`/user/${u.id}`}>
                      {/* user's 'pfp' and 'username' */}
                      <div className='post-header'>
                        <div className='user-info'>
                          <img className='pfp' src={u.pfp} alt='' />
                          <h5 style={{ fontWeight: 700 }}>{u.username}</h5>
                        </div>
                        <div className='timestamp'>{dateSincePost}</div>
                      </div>
                    </Link>

                    {/* whatever user inputted to the form is shown here */}
                    {/* <div key={post.content}> */}
                    <div className='post-content'>
                      <p className='post-text' style={{ margin: 0 }}>
                        {post.content}
                      </p>
                      <img className='post-img' src={post.image} alt='' />
                    </div>
                    <div id='comments'>
                      {/* clicking on comments leads to page of comments of that post */}
                      <h5
                        id='comment-header'
                        style={{
                          fontWeight: 700,
                          display: 'flex',
                          justifyContent: 'center',
                          padding: 5
                        }}
                      >
                        <Link to={`/post/${u.id}/${post._id}`}>COMMENTS</Link>
                      </h5>

                      {/* map through each post's 'comments' array */}
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
                            </div>
                          )
                        }
                      })}
                    </div>
                    {/* </div> */}
                  </div>
                )
              }
              if (timeSincePost > 1440) {
                dateSincePost = `${Math.floor(timeSincePost / 1440)} days ago`
                return (
                  <div className='ind-post'>
                    {/* clicking on profile picture or username links to user's page */}
                    <Link to={`/user/${u.id}`}>
                      {/* user's 'pfp' and 'username' */}
                      <div className='post-header'>
                        <div className='user-info'>
                          <img className='pfp' src={u.pfp} alt='' />
                          <h5 style={{ fontWeight: 700 }}>{u.username}</h5>
                        </div>
                        <div className='timestamp'>{dateSincePost}</div>
                      </div>
                    </Link>

                    {/* whatever user inputted to the form is shown here */}
                    {/* <div key={post.content}> */}
                    <div className='post-content'>
                      <p className='post-text' style={{ margin: 0 }}>
                        {post.content}
                      </p>
                      <img className='post-img' src={post.image} alt='' />
                    </div>
                    <div id='comments'>
                      {/* clicking on comments leads to page of comments of that post */}
                      <h5
                        id='comment-header'
                        style={{
                          fontWeight: 700,
                          display: 'flex',
                          justifyContent: 'center',
                          padding: 5
                        }}
                      >
                        <Link to={`/post/${u.id}/${post._id}`}>COMMENTS</Link>
                      </h5>

                      {/* map through each post's 'comments' array */}
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
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
                              <div className='createdAt'>
                                {dateSinceComment}
                              </div>
                            </div>
                          )
                        }
                      })}
                    </div>
                    {/* </div> */}
                  </div>
                )
              }
            })}
          </div>
        </div>
      )
    })

    return (
      <main id='feed-main'>
        <Header />
        <CreatePost getUser={getUser} />
        {allPosts}
      </main>
    )
  }

  // if there are no posts yet show option to create a post
  let loading = () => {
    return (
      <div>
        <Header />
        <CreatePost getUser={getUser} />
      </div>
    )
  }
  return user ? loaded() : loading()
}

export default Feed
