import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Contatos from './components/Contatos';
import Blog from './components/Blog';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Blog></Blog>
    <Contatos></Contatos>
    </>
    
  );
}

export default App;
