import './App.css'
import Home from './pages/home'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <div>
            <Routes>
                <Route path ='/' element ={<Home />}> </Route>
            </Routes>
          </div>
        <Footer />
      </BrowserRouter> 
    </>
  );
};

export default App
