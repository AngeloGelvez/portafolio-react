import { Home } from "./Home"
import { Nav } from "./Nav"
import { About } from "./About"
import { Technology } from "./Technology"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import { NavSecond } from "./NavSecond"

function App() {

  return (
    <>
      <Nav/>
      <NavSecond />
      <Home/>
      <About/>
      <Technology/>
      <Projects />
      <Contact/>
    </>
  )
}

export default App
