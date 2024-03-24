import { useState } from "react";
import "./App.scss";
import { ProgressControl } from "./Components/ProgressControl/ProgressControl";
import { StepProgress } from "./Components/StepProgress/StepProgress";
import { Navbar } from "./Components/Navbar/Navbar";
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart";
import { Footer } from "./Components/Footer/Footer";
import { ShowStep } from "./Components/ShowStep/ShowStep";

export function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="left">
          <StepProgress step={step} />
          <ShowStep step={step} />
          <ProgressControl setStep={setStep} step={step} />
        </section>
        <section className="right">
          <ShoppingCart />
        </section>
      </main>

      <Footer />
    </div>
  );
}
