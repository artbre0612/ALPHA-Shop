import Step3Scss from "./Step3.module.scss";

export function Step3() {
  return (
    <div className={Step3Scss.step3}>
      <h3>付款資訊</h3>
      <div className={Step3Scss.cardInfo}>
        <div className={Step3Scss.cardName}>
          <label htmlFor="">持卡人姓名</label>
          <input type="text" placeholder="John Doe" required />
        </div>
        <div className={Step3Scss.cardNumber}>
          <label htmlFor="">卡號</label>
          <input
            type="text"
            placeholder="1111 2222 3333 4444"
            maxLength={19}
            required
          />
        </div>
        <div className={Step3Scss.step1Bottom}>
          <div className={Step3Scss.cardValidThru}>
            <label htmlFor="">有效期限</label>
            <input type="text" placeholder="MM/YY" maxLength={5} required />
          </div>
          <div className={Step3Scss.CCV}>
            <label htmlFor="">CVC / CCV</label>
            <input type="text" placeholder="123" required />
          </div>
        </div>
      </div>
    </div>
  );
}
