import { Routes, Route } from 'react-router-dom'
import { AuthProvider, RequireAuth } from './context/auth-context'
import Login from './routes/Login'
import { SignupRoute } from './routes/SignupRoute'
import Layout from './components/Layout'
import PublicPage from './routes/PublicPage'
import ProtectedPage from './routes/ProtectedPage'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupRoute />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
