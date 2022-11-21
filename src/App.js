import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Nav/>
  );
}

function Nav(){
  return (
    <header className='App-Header'>
      <div class='Navbar'>
        <div class='Logo'>
          <img src='../public/logo512.png' className='logo' alt='Logo' />
        </div>
        <div class='Links'>
          <ul class='Itemlist'>
            <li class='Listitem'><a href='https://www.pornhub.com'>Friends</a></li>
            <li class='Listitem'><a href='https://www.fuq.com'>Recomended</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default App;
