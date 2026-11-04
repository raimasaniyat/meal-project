import { Suspense } from 'react'
import './App.css'
import Nav from './components/Nav'
import FoodSection from './components/FoodSection'

const foodDataRes = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a") .then(res => res.json())

function App() {

  return (
    <>
    <section className='header'><Nav></Nav></section>
    <section className="about">
      Best Recipes are all in one place!
    </section>
    <Suspense>
      <FoodSection foodDataRes = {foodDataRes}></FoodSection>
    </Suspense>

    </>
  )
}

export default App
