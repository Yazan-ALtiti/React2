import logo from './logo.svg';
import './App.css';
import MyFooter from './componentes/footer';
import MyHeadr from './componentes/header';
import MyMain from './componentes/main';
import YazanComponent from './componentes/yazan';
import Messi from './componentes/messi';
function App() {
  return (
    <div className="App">
      <h3>yazan</h3>

      <MyFooter/>
      <MyHeadr/>
      <MyMain/>
      <YazanComponent/>
      <YazanComponent/>
      <Messi/>
      
    </div>
  );
}

export default App;
