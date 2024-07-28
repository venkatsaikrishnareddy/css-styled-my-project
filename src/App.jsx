import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">coffie shop</h1>
          <h2 className="title">Coffee is Available for 24 Hours</h2>
          <p>Enjoy our freshly brewed coffee any time, day or night.</p>
          <button className="primary-button">Touch button</button>
        </header>
        <main className="app-main">
          <img
            className="app-image"
            src="https://th.bing.com/th/id/OIP.sORUCLQs6IFavbrcEWRPgAHaE8?rs=1&pid=ImgDetMain"
            alt="Placeholder"
          />
          <p className="app-description">
          Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The two most common sources of coffee beans are the highly regarded Coffea arabica and the "robust" Coffea canephora.</p>
          <a className="app-link" href="#"></a>
        </main>
        <footer className="app-footer">
          <p className="footer-text">2024 My App</p>
        </footer>
      </div>
  )
  }

export default App
