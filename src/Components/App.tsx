
import { Outlet, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Organization } from './Organization/Organization';
import { Admin } from './Admin/Admin';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';

function App() {

  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organization/*" element={<Organization />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>

        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
