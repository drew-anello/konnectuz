import './style.css'
// import route and components
import { Route, Switch } from 'react-router-dom'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import About from './pages/AboutUz'
import Feed from './pages/Feed'
import UserPage from './pages/UserPage'
import CommentsPage from './pages/CommentsPage'
import Settings from './pages/Settings'
import { useEffect, useState } from 'react'

function App () {
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

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Feed />
        </Route>
        {/* <Route exact path="/feed">
          <Feed /> */}
        {/* </Route> */}
        <Route exact path='/login'>
          <LogInPage />
        </Route>
        <Route exact path='/signup'>
          <SignUpPage />
        </Route>
        <Route
          path='/user/:userid'
          render={routerProps => <UserPage {...routerProps} users={user} />}
        />
        <Route
          path='/post/:userid/:postid'
          render={routerProps => <CommentsPage {...routerProps} />}
        />
        {/* </Route> */}
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
      </Switch>
    </div>
  )
}

export default App
