import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'

function AuthStatus() {
  let auth = useAuth()
  let navigate = useNavigate()

  if (!auth.user) {
    return <p>Por favor realize o seu Login.</p>
  }

  return (
    <p>
      Bem vindo(a) {auth.user?.name}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'))
        }}
      >
        Sair
      </button>
    </p>
  )
}

export default AuthStatus
