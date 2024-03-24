/* eslint-disable react/prop-types */
import ProgressControlScss from "./ProgressControl.module.scss";

export function ProgressControl({ setStep, step }) {
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
        <button className={ProgressControlScss.orderButton}>確認下單</button>
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
