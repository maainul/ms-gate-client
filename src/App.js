
import axios from 'axios';
import './App.css';
import MyRoutes from './Routes/MyRoutes';

axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <MyRoutes />
    </>
  );
}

export default App;
