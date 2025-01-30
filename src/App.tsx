import { Provider } from 'react-redux'
import {store} from "./redux/store"
import Product from './components/Product'
import ProductList from './components/ProductList'
import { productData } from './data/items'
import Navbar from './components/Navbar'


function App() {
 

  return (
    <Provider store={store}>
      <Navbar/>
      <ProductList>
        {productData .map ((item)=>(
          <div key={item.id}>
          <Product {...item}/>
          </div>
        ))}
      </ProductList>
    </Provider>
  )
}

export default App
