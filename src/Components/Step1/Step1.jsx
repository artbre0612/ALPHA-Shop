import './Step1.scss'

export function Step1 () {
  return ( 
    <div className="step1">
      <h3>付款資訊</h3>
      <div className="card-info">
        <div className="card-name">
          <label htmlFor="">持卡人姓名</label>
          <input type="text" placeholder='John Doe' required/>
        </div>
        <div className="card-number">
          <label htmlFor="">卡號</label>
          <input type="text" placeholder='1111 2222 3333 4444' maxLength={19} required/>
        </div>
        <div className="step1-bottom">
          <div className="card-valid-thru">
            <label htmlFor="">有效期限</label>
            <input type="text" placeholder='MM/YY' maxLength={5} required/>
          </div>
          <div className="CCV">
            <label htmlFor="">CVC / CCV</label>
            <input type="text" placeholder='123' required/>
          </div>
        </div>  
      </div>
    </div>
   );
}