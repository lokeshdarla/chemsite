import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Button, createTheme, MantineProvider } from '@mantine/core';

import 'animate.css';
import '@mantine/core/styles.css';
import './index.css';


//Importing Pages
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import ResearchPage from './pages/ResearchPage.jsx';
import PublicationPage from './pages/PublicationPage.jsx'
import TeamPage from './pages/TeamPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LinksSection from './pages/UseFullinksPage.jsx';


const theme = createTheme({
  primaryColor: 'indigo',
  fontFamily: 'Inter, sans-serif',
  components: {
    Button: Button.extend({
      defaultProps: {
        fw: 500,
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="research" element={<ResearchPage />} />
            <Route path="publications" element={<PublicationPage />} />
            <Route path="team" element={<TeamPage/>} />
            <Route path="contact" element={<ContactPage/>} />
            <Route path="useful-links" element={<LinksSection/>} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
