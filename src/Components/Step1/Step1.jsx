import './Step1.scss'

export function Step1 () {
  return ( 
    <div className="step1">
      <h3>寄送地址</h3>
      <div className="input-section">
        <div className="input1">
          <label htmlFor="">稱謂</label><br />
          <select>
            <option>先生</option>
            <option>小姐</option>
          </select>
        </div>
        <div className="input2">  
          <label htmlFor="">姓名</label><br />
          <input type="text" placeholder='請輸入姓名' required/>
        </div>
        <div className="input3">  
          <label htmlFor="">電話</label><br />
          <input type="text" placeholder='請輸入行動電話' required/>
        </div>
        <div className="input4">  
          <label htmlFor="">Email</label><br />
          <input type="email" placeholder='請輸入電子郵件' required/>
        </div>
        <div className="input5">  
          <label htmlFor="">縣市</label><br />
          <select>
            <option>請選擇縣市</option>
          </select>
        </div>
        <div className="input6">  
          <label htmlFor="">地址</label><br />
          <input type="text" placeholder='請輸入地址' required/>
        </div>
      </div>
    </div>
   );
}