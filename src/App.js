import React from 'react';

// Layout Partials
import { Sidebar, Header, Footer } from './layout';
import Routes from "./Routes";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <React.Fragment>
        <Header></Header>
        <Sidebar></Sidebar>
        <Routes></Routes>
        <Footer></Footer>
      </React.Fragment>
    </main>
  );
}

export default App;
