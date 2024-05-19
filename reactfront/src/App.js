import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShowProducts } from './components/ShowProducts';
import { CreateProducts } from './components/CreateProducts';
import { EditProducts } from './components/EditProducts';
import { DeleteProducts } from './components/DeleteProducts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={ <ShowProducts/> }/>
            <Route path='/create' element={ <CreateProducts/> }/>
            <Route path='/edit/:id' element={ <EditProducts/> }/>
            <Route path="/delete/:id" element={<DeleteProducts />} />
          </Route>         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
