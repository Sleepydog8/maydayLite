import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import ProfileBuyer from './views/ProfileBuyer'
import SearchProduct from './views/SearchProduct'
import ProfileSeller from './views/ProfileSeller'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { product } from './lib/api'
function App() {
  product.get('All').then((item) => {
    console.log(item)
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<ProfileBuyer />}></Route>
          <Route
            exact
            path="/search-product"
            element={<SearchProduct />}
          ></Route>
          <Route
            exact
            path="/ProfileSeller"
            element={<ProfileSeller />}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
