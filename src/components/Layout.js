import { Link, Outlet } from 'react-router-dom'
import { Mobile } from '../components/Mobile'

import AuthStatus from './AuthStatus'

function Layout() {
  return (
    <div>
      <Mobile>
        <AuthStatus />
        <ul>
          <li>
            <Link to="/">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Outlet />
      </Mobile>
    </div>
  )
}

export default Layout
