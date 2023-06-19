import "./App.css"

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./logo192.png" width="40px" alt="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li> 
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer></footer>
  )
}

function Body() {
  return (
    <body>
      <h1>My awesome website in React</h1>
      <h3>Reasons I love React</h3>
      <ul>
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's hirable skills</li>
        <li>It's actively maintained by skilled people</li>
      </ul>
    </body>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
