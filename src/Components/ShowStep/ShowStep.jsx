import { Step1 } from "../Step1/Step1";
import { Step2 } from "../Step2/Step2";
import { Step3 } from "../Step3/Step3";
export function ShowStep({ step }) {
  if (step === 0) {
    return <Step1 />;
  } else if (step === 1) {
    return <Step2 />;
  } else return <Step3 />;
}
