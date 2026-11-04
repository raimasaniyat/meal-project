import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <>
    <section className='header'><Nav></Nav></section>
    <section className="about">
      Best Recipes are all in one place!
    </section>
    <section className='footer'><Nav></Nav></section>
    </>
  )
}

export default App
