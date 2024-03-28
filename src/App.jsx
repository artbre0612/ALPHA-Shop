import { useContext, useState } from "react";
import "./App.scss";
import { ProgressControl } from "./Components/ProgressControl/ProgressControl";
import { StepProgress } from "./Components/StepProgress/StepProgress";
import { Navbar } from "./Components/Navbar/Navbar";
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart";
import { Footer } from "./Components/Footer/Footer";
import { ShowStep } from "./Components/ShowStep/ShowStep";
import { ShopListContext } from "./Components/Contexts/CartContext";
import { CardProvider } from "./Components/Contexts/CardProvider";
import { PriceProvider } from "./Components/Contexts/PriceProvider";

export function App() {
  const shopList = useContext(ShopListContext);
  const [step, setStep] = useState(0);

  return (
    <CardProvider>
      <div className="app">
        <Navbar />

        <main>
          <PriceProvider>
            <section className="left">
              <StepProgress step={step} />
              <ShowStep step={step} />
              <ProgressControl setStep={setStep} step={step} />
            </section>
            <section className="right">
              <ShopListContext.Provider value={{ shopList }}>
                <ShoppingCart />
              </ShopListContext.Provider>
            </section>
          </PriceProvider>
        </main>

        <Footer />
      </div>
    </CardProvider>
  );
}
