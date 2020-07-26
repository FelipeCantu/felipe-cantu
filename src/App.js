import React from 'react';
import NavBar from './components/NavBar';
import LanchPage from './components/LanchPage';

function App() {
  return (

   <div className="app">
     {/* responsive transparent navgation bar */}
    <NavBar />
    {/* LunchPage Section */}
    <LanchPage />
   </div>

  );
}

export default App;
