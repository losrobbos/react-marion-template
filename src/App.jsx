import { NavLink, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import TodosPage from "./pages/TodosPage"

function App() {

  return (
    <div className="App">
      <header>
        <h1>Our wonderful App</h1>
        <p>Kein Plan. Aber kommt!</p>
        <nav>
          <NavLink to="home">Home</NavLink>
          <NavLink to="todos" >Todos</NavLink>
          <NavLink to="about"> About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="home"  element={<HomePage />} ></Route>
          <Route path="todos"  element={<TodosPage />} ></Route>
          <Route path="about" index  element={<AboutPage />} ></Route>
        </Routes>
      </main>
      <footer>Copyright Unlimited Rob</footer>
    </div>
  )
}

export default App
