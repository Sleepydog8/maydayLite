import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Profile from './views/profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<Profile />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
