
import './App.scss'
import { ProgressControl } from './Components/ProgressControl/ProgressControl'
import { StepProgress } from './Components/StepProgress/StepProgress'
import { Step1 } from './Components/Step1/Step1'
import { Step2 } from './Components/Step2/Step2'
import { Step3 } from './Components/Step3/Step3'
import { Navbar } from './Components/Navbar/Navbar'
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart'

export function App() {
  return (
    <div className='app'>
      <Navbar/>

      <main>
        <section className='left'>
          <StepProgress/>
          <Step1/>
          <Step2/>
          <Step3/>
          <ProgressControl/>
        </section>
        <section className='right'>
          <ShoppingCart/>
        </section>
      </main>

    </div>
  );
}

