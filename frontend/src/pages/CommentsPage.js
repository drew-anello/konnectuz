import React, { useState, useEffect } from 'react'
import Header from '../components/Header'

/////////////////////////////////////////
// '/comments/:userid/:postid' route
// CREATE comment for the respective post
/////////////////////////////////////////

const CommentsPage = props => {
  // const [post, setPost] = useState(null);

  // // fetch data for current logged in user
  // const URL = `http://localhost:4000/post/${props.match.params.userid}/${props.match.params.postid}`;
  // const getPost = async () => {
  //     const response = await fetch(URL);
  //     const data = await response.json();
  //     // both data and user is showing in console
  //     setPost(data);
  //     // console.log('post', post)
  //     // console.log('data', data)
  // }

  // useEffect(() => { getPost() }, []);

  const [comment, setComment] = useState({
    content: ''
  })

  // this is the post that we want to add the comment to
  const commentURL = `https://konnectuz-production.up.railway.app/comments/${props.match.params.userid}/${props.match.params.postid}`

  const createComment = async comment => {
    await fetch(commentURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(comment)
    })
  }

  // set new state of 'comment' based on input from form
  const handleChange = event => {
    setComment({ ...comment, [event.target.name]: event.target.value })
    console.log(props)
  }

  // using the updated state, create the comment
  const handleSubmit = event => {
    event.preventDefault()

    createComment(comment)
    setComment({
      content: ''
    })
  }
  return (
    <div>
      <Header />
      {/* {post.content } */}
      <div className='create-comment'>
        <form onSubmit={handleSubmit}>
          <div className='row justify-content-md-center'>
            <div className='col col-lg-5 create-post-form'>
              <h4>Comment on this post: {props.match.params.postid}</h4>
              <input
                type='text'
                name='content'
                value={comment.content}
                onChange={handleChange}
              />
              <input type='submit' value='Submit' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CommentsPage
