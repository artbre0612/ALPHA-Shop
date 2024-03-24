import Step2Scss from "./Step2.module.scss";

export function Step2() {
  return (
    <div className={Step2Scss.step2}>
      <h3>運送方式</h3>
      <div className={Step2Scss.selectSection}>
        <div className={Step2Scss.select}>
          <div className={Step2Scss.radio}>
            <input name="shipment" type="radio" id="standard" />
            <div className={Step2Scss.text}>
              <label htmlFor="standard">標準運送</label>
              <span>約3~7個工作天</span>
            </div>
          </div>
          <p>免費</p>
        </div>
        <div className={Step2Scss.select}>
          <div className={Step2Scss.radio}>
            <input name="shipment" type="radio" id="dhl" />
            <div className={Step2Scss.text}>
              <label htmlFor="dhl">DHL 貨運</label>
              <span>48小時內送達</span>
            </div>
          </div>
          <p>$500</p>
        </div>
      </div>
      <p id={Step2Scss.borderBottom}></p>
    </div>
  );
}
