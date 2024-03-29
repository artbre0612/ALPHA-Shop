/* eslint-disable react/prop-types */
import StepProgressScss from "./StepProgress.module.scss";

export function StepProgress({ step }) {
  function styleCircle1() {
    if (step === 0) {
      return (
        <div
          className={`${StepProgressScss.circle} ${StepProgressScss.active}`}
        >
          1
        </div>
      );
    } else if (step === 1) {
      return (
        <div
          className={`${StepProgressScss.circle} ${StepProgressScss.active} ${StepProgressScss.done}`}
        >
          ✓
        </div>
      );
    } else
      return (
        <div
          className={`${StepProgressScss.circle} ${StepProgressScss.active} ${StepProgressScss.done}`}
        >
          ✓
        </div>
      );
  }
  function styleCircle2() {
    if (step === 0) {
      return <div className={`${StepProgressScss.circle}`}>2</div>;
    } else if (step === 1) {
      return (
        <div
          className={`${StepProgressScss.circle} ${StepProgressScss.active}`}
        >
          2
        </div>
      );
    } else
      return (
        <div
          className={`${StepProgressScss.circle} ${StepProgressScss.active} ${StepProgressScss.done}`}
        >
          ✓
        </div>
      );
  }
  function styleCircle3() {
    if (step === 0) {
      return <div className={`${StepProgressScss.circle}`}>3</div>;
    } else if (step === 1) {
      return <div className={`${StepProgressScss.circle}`}>3</div>;
    } else
      return (
        <div
          className={`${StepProgressScss.circle} ${StepProgressScss.active}`}
        >
          3
        </div>
      );
  }

  return (
    <div className={StepProgressScss.stepProgress}>
      <h2>結帳</h2>
      <div className={StepProgressScss.stepProgressBar}>
        <div className={StepProgressScss.stepProgressBarItem}>
          {styleCircle1()}
          <span>寄送地址</span>
        </div>

        <span className={StepProgressScss.line}></span>
        <div className={StepProgressScss.stepProgressBarItem}>
          {styleCircle2()}
          <span>運送方式</span>
        </div>

        <span className={StepProgressScss.line}></span>
        <div className={StepProgressScss.stepProgressBarItem}>
          {styleCircle3()}
          <span>付款資訊</span>
        </div>
      </div>
    </div>
  );
}
