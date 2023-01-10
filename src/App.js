import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import NewNote from './pages/NewNote';
import NotePage from './pages/NotePage';
import NotesPage from './pages/NotesPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/' index element={<NotesPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/note/:id' element={<NotePage />} />
          <Route path='/note' element={<NewNote />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
