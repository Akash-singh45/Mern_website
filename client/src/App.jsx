import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Internships from './pages/Internships';
import AddInternship from './pages/AddInternship';
import PartnerForm from './pages/PartnerForm';

export default function App() {
  return (
    <BrowserRouter>
      {/* Common header shown on all pages */}
      <Header />

      {/* Route definitions for different pages */}
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/internships' element={<Internships />} />
        <Route path='/add-internship' element={<AddInternship />} />

        {/* Protected route group */}
        {/* Only accessible when currentUser is authenticated */}
        <Route element={<PrivateRoute />}>
          {/* ✅ Profile is now a private route only */}
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path="/partner" element={<PartnerForm />} />
      </Routes>
    </BrowserRouter>
  );
}




