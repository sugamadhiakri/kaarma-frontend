
import '../App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Organization } from './Organization/Organization';
import { Admin } from './Admin/Admin';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme();
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <p>fyp</p>
        </div>
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
