import './ProgressControl.scss'

export function ProgressControl () {
  return ( 
    <div className="progress-control">
      <button className='pre-button'><i className="fa-solid fa-arrow-left"></i> 上一步</button>
      <button className='next-button'>下一步 <i className="fa-solid fa-arrow-right"></i></button>
      <button className='order-button'>確認下單</button>  
    </div>
   );
}
