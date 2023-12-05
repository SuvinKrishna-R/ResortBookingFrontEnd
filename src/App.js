import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import SignUpForm from './pages/SignUpForm';
import LoginForm from './pages/LogInForm';
import Add from './pages/Add';
import SingleView from './pages/SingleView';
import AdminEnquiry from './pages/AdminEnquiry';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LoginForm></LoginForm>}></Route>
        
        <Route path='/signup' element={<SignUpForm></SignUpForm>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/single/:id' element={ <SingleView></SingleView>}></Route>
        <Route path='/enquiry' element={<AdminEnquiry></AdminEnquiry>}></Route>


      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
