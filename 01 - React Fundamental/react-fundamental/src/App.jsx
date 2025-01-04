import './App.css'

import { GlobalContext } from './context'
import { router} from "./routers"
import { RouterProvider } from 'react-router-dom'

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
        <RouterProvider router={router} />
      
      </GlobalContext.Provider>
     
         
    </>
  );
}

export default App


