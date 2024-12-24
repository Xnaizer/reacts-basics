import './App.css'
import Rumah from './pages'
import { GlobalContext } from './context'

function App() {
  // const value = true;
  const user = {
    username: 'Xnaizer'
  };

  return (
    <>
      {/* conditional rendering digunakan untuk state yang dinamis */}
      {/* {value ? 'benar' : 'salah'}  */}

      <GlobalContext.Provider value={user}>

      <Rumah />
      </GlobalContext.Provider>
     
         
    </>
  );
}

export default App


