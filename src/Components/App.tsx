
import { Outlet, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Organization } from './Organization/Organization';
import { Admin } from './Admin/Admin';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { Volunteer } from './Volunteer/Volunteer';
import { Layout } from './Layout';
import { NotFound } from './NotFound';
import { LoginVolunteer } from './Login/LoginVolunteer';
import RequireAuth from './RequireAuth';
import { LoginAdmin } from './Login/LoginAdmin';
import { LoginOrganization } from './Login/LoginOrganization';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { SubmitOrganization } from './Register/SubmitOrganization';
import RegisterVolunteer from './Volunteer/RegisterVolunteer';
import { CssBaseline } from '@mui/material';

function App() {
  const { setAuth }: any = useAuth();
  useEffect(() => {
    setAuth({ token: localStorage.getItem("token") });
  }, []);

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login-volunteer" element={<LoginVolunteer />} />
            <Route path="/login-organization" element={<LoginOrganization />} />
            <Route path="/login-admin" element={<LoginAdmin />} />

            <Route path="/submit-organization" element={<SubmitOrganization />} />
            <Route path="/register-volunteer" element={<RegisterVolunteer />} />


            {/* <Route element={<RequireAuth />}> */}
            <Route path="/organization/*" element={<Organization />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/volunteer/*" element={<Volunteer />} />
            {/* </Route> */}

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
