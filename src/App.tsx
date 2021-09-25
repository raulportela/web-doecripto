import './global.scss'
import { AuthProvider } from './Context/AuthContext';
import Routes from './pages/Routes'

function App() {

  return (
    <AuthProvider>
      <Routes></Routes>
    </AuthProvider>
  );
}

export default App;
