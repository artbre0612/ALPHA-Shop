import './StepProgress.scss'

export function StepProgress () {
  return ( 
    <div className='step-progress'>
      <h2>結帳</h2>
      <div className="step-progress-bar">

        <div className="step-progress-bar-item">
          <div className="circle done"></div>
          <span>寄送地址</span>
        </div>

        <span className='line'></span>
        <div className="step-progress-bar-item">
          <div className="circle done" ></div>
          <span>運送方式</span>
        </div>

        <span className='line'></span>
        <div className="step-progress-bar-item">
          <div className="circle">3</div>
          <span>付款資訊</span>
        </div>
      </div>
    </div>
   );
}
