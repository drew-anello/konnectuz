import { Link } from 'react-router-dom'
function Header () {
  let current = JSON.parse(localStorage.getItem('currentUser'))

  if (current) {
    let URL = `https://konnectuz-production.up.railway.app/sessions/${current._id}`
    async function handleLogout () {
      await fetch(URL, {
        method: 'DELETE'
      })
      window.location.reload()
      localStorage.clear()
    }

    return (
      <nav className='navbar' style={{ padding: 0 }}>
        <div className='container-fluid' style={{ display: 'flex' }}>
          <Link to='/' className='nav-link navbar-brand'>
            <img
              src='https://i.imgur.com/QCHhrSB.png'
              alt='KonnectuZ logo'
              className='logo'
            />
          </Link>
          <ul className='ms-auto text-link'>
            <li>
              <Link to={`/`} className='nav-link navbar-brand'>
                <div>Feed</div>
              </Link>
            </li>
            <li>
              <Link
                to={`/user/${current._id}`}
                className='nav-link navbar-brand'
              >
                <div>My Posts</div>
              </Link>
            </li>
            <li>
              <Link to='/about' className='about nav-link navbar-brand'>
                <div>About uZ</div>
              </Link>
            </li>
            <li>
              <Link to='/settings' className='settings nav-link navbar-brand'>
                <div>Settings</div>
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='logout nav-link navbar-brand'
                onClick={handleLogout}
              >
                <div>Log Out</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className='navbar' style={{ padding: 0 }}>
        <div className='container-fluid' style={{ display: 'flex' }}>
          <Link to='/' className='nav-link'>
            <img
              src='https://i.imgur.com/QCHhrSB.png'
              alt='KonnectuZ logo'
              className='logo'
            />
          </Link>
          <ul className='ms-auto text-link'>
            <li>
              <Link to={`/`} className='nav-link navbar-brand'>
                <div>Feed</div>
              </Link>
            </li>
            <li>
              <Link to='/about' className='about nav-link navbar-brand'>
                <div>About uZ</div>
              </Link>
            </li>
            <li>
              <Link to='/login' className='login nav-link navbar-brand'>
                <div>Log In</div>
              </Link>
            </li>
            <li>
              <Link to='/signup' className='signup nav-link navbar-brand'>
                <div>Sign Up</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
