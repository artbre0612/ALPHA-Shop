import "./Step2.scss";

export function Step2() {
  return (
    <div className="step2">
      <h3>運送方式</h3>
      <div className="select-section">
        <div className="select">
          <div className="radio">
            <input name="shipment" type="radio" id="standard" />
            <div className="text">
              <label htmlFor="standard">標準運送</label>
              <span>約3~7個工作天</span>
            </div>
          </div>
          <p>免費</p>
        </div>
        <div className="select">
          <div className="radio">
            <input name="shipment" type="radio" id="dhl" />
            <div className="text">
              <label htmlFor="dhl">DHL 貨運</label>
              <span>48小時內送達</span>
            </div>
          </div>
          <p>$500</p>
        </div>
      </div>
      <p id="border-bottom"></p>
    </div>
  );
}
