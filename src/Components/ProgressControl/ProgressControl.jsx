/* eslint-disable react/prop-types */
import "./ProgressControl.scss";

export function ProgressControl({ setStep, step }) {
  return (
    <div className="progress-control">
      {step === 0 ? (
        <button style={{ opacity: "0" }}></button>
      ) : (
        <button
          onClick={() => {
            setStep((p) => p - 1);
          }}
          className="pre-button"
        >
          <i className="fa-solid fa-arrow-left"></i> 上一步
        </button>
      )}

      {step === 2 ? (
        <button className="order-button">確認下單</button>
      ) : (
        <button
          className="next-button"
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
