import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Loading from './components/General/Loading/Loading';

const Sedan = React.lazy(() => import("./pages/Sedan"))
const FAQ = React.lazy(() => import("./pages/FAQ"))
const Contact = React.lazy(() => import("./pages/Contact"))

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='sedan'
          element={<React.Suspense fallback={<Loading />}>
                      <Sedan />
                    </React.Suspense>} 
        />
        <Route 
          path='faq' 
          element={<React.Suspense fallback={<Loading />}>
            <FAQ />
          </React.Suspense>} 
        />
        <Route 
          path='contact' 
          element={<React.Suspense fallback={<Loading />}>
            <Contact />
          </React.Suspense>} 
        />
      </Routes>
    </>
  );
}

export default App;
