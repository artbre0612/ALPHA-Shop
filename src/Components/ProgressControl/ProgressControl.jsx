/* eslint-disable react/prop-types */
import ProgressControlScss from "./ProgressControl.module.scss";
import { UserContext } from "../Contexts/CardProvider";
import { useContext } from "react";
import { PriceContext } from "../Contexts/PriceProvider";

export function ProgressControl({ setStep, step }) {
  const { price } = useContext(PriceContext);
  const { cardholder, cardNumber, cardValidThru, cardCCV } =
    useContext(UserContext);

  return (
    <div className={ProgressControlScss.progressControl}>
      {step === 0 ? (
        <button style={{ opacity: "0" }}></button>
      ) : (
        <button
          onClick={() => {
            setStep((p) => p - 1);
          }}
          className={ProgressControlScss.preButton}
        >
          <i className="fa-solid fa-arrow-left"></i> 上一步
        </button>
      )}

      {step === 2 ? (
        <button
          className={ProgressControlScss.orderButton}
          onClick={() => {
            console.log(
              `持卡人: ${cardholder}, 
卡號: ${cardNumber}, 
有效日期: ${cardValidThru}, 
安全碼: ${cardCCV},
小計: $${price}`
            );
          }}
        >
          確認下單
        </button>
      ) : (
        <button
          className={ProgressControlScss.nextButton}
          onClick={() => {
            setStep((p) => p + 1);
          }}
        >
          下一步 <i className="fa-solid fa-arrow-right"></i>
        </button>
      )}
    </div>
  );
}
