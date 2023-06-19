import "./App.css"
import Header from "./Components/Header"

function Footer() {
  return <footer className="footer"> 2021. All rights reserved</footer>
}

function Body() {
  return (
    <body>
      <h1>Reasons I'm excited to learn React</h1>
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
