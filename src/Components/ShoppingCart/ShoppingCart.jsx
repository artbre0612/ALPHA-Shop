import './ShoppingCart.scss'

export function ShoppingCart () {

  const shopList = [
    {
      id: '1',
      name: '破壞補丁修身牛仔褲',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQri080seAgVDTO681KouYhdz_iQ74acwNlQw&usqp=CAU',
      price: 3999,
      quantity: 1,
    },
    {
      id: '3',
      name: '刷色直筒牛仔褲',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXb1fVc0136CREwBKT75-PfgSHoQ-MxrbMVGtVADyR1Qo5JecDrDJqstWPERpgiMAQCiA&usqp=CAU',
      price: 1299,
      quantity: 1,
    },
    {
      id: '3',
      name: '刷色直筒牛仔褲',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXb1fVc0136CREwBKT75-PfgSHoQ-MxrbMVGtVADyR1Qo5JecDrDJqstWPERpgiMAQCiA&usqp=CAU',
      price: 1299,
      quantity: 1,
    },
    {
      id: '3',
      name: '刷色直筒牛仔褲',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXb1fVc0136CREwBKT75-PfgSHoQ-MxrbMVGtVADyR1Qo5JecDrDJqstWPERpgiMAQCiA&usqp=CAU',
      price: 1299,
      quantity: 1,
    },
  ]

  const shopItem = shopList.map((item) => 
    <div key={item.id} className="shop-list-item">
      <img className='item-img' src={item.img} alt={item.name} />
      <div className="item-info">
        <p className='item-name'>{item.name}</p>
        <div className="amount-control-panel">
          <button className='minus'><i className="fa-solid fa-minus"></i></button>
          <span className='amount'>{item.quantity}</span>
          <button className='plus'><i className="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <p className='price'>${item.price}</p>
  </div>
  );


  return ( 
    <div className="Shopping-cart">
      <h4>購物籃</h4>
      <div className="shopping-list">

        {shopItem}

      </div>
      <div className="delivery">
        <span>運費</span>
        <span className='delivery-charge'>免費</span>
      </div>
      <div className="total">
        <span>小計</span>
        <span className='total-price'>$3,999</span>
      </div>
    </div>
   );
}
