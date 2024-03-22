import { useState } from "react";
import "./App.scss";
import { ProgressControl } from "./Components/ProgressControl/ProgressControl";
import { StepProgress } from "./Components/StepProgress/StepProgress";
import { Step1 } from "./Components/Step1/Step1";
import { Step2 } from "./Components/Step2/Step2";
import { Step3 } from "./Components/Step3/Step3";
import { Navbar } from "./Components/Navbar/Navbar";
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart";
import { Footer } from "./Components/Footer/Footer";

export function App() {
  const [step, setStep] = useState(0);

  function getPage() {
    if (step === 0) {
      return <Step1 />;
    } else if (step === 1) {
      return <Step2 />;
    } else return <Step3 />;
  }

  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="left">
          <StepProgress step={step} />
          {getPage()}
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
