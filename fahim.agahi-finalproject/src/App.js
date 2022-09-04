// import Home from "./components/Home";
import { HomePage } from "./pages/Home";

import React, { Component }  from 'react';
import EditPage from "./pages/Edit";

function App() {
  return (
    <>
      <div className="App">
        <div>
          {/* <HomePage/> */}
          <EditPage/>
        </div>
      </div>
    </>
  
  );
}

export default App;
