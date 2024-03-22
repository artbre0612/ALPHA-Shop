/* eslint-disable react/prop-types */
import "./StepProgress.scss";

export function StepProgress({ step }) {
  function styleCircle1() {
    if (step === 0) {
      return <div className={"circle active"}>1</div>;
    } else if (step === 1) {
      return <div className="circle active done">✓</div>;
    } else return <div className="circle active done">✓</div>;
  }
  function styleCircle2() {
    if (step === 0) {
      return <div className={"circle"}>2</div>;
    } else if (step === 1) {
      return <div className="circle active">2</div>;
    } else return <div className="circle active done">✓</div>;
  }
  function styleCircle3() {
    if (step === 0) {
      return <div className={"circle"}>3</div>;
    } else if (step === 1) {
      return <div className="circle">3</div>;
    } else return <div className="circle active">3</div>;
  }

  return (
    <div className="step-progress">
      <h2>結帳</h2>
      <div className="step-progress-bar">
        <div className="step-progress-bar-item">
          {styleCircle1()}
          <span>寄送地址</span>
        </div>

        <span className="line"></span>
        <div className="step-progress-bar-item">
          {styleCircle2()}
          <span>運送方式</span>
        </div>

        <span className="line"></span>
        <div className="step-progress-bar-item">
          {styleCircle3()}
          <span>付款資訊</span>
        </div>
      </div>
    </div>
  );
}
