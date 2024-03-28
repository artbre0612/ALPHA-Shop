/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import ShoppingCartScss from "./ShoppingCart.module.scss";
import { ShopListContext } from "../Contexts/CartContext";
import { PriceContext } from "../Contexts/PriceProvider";

export function ShoppingCart() {
  const { shopList } = useContext(ShopListContext);
  const { price, setPrice } = useContext(PriceContext);
  const [quantities, setQuantities] = useState(
    shopList.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  function handlePrice() {
    let ans = 0;
    shopList.map((item) => (ans += quantities[item.id] * item.price));
    setPrice(ans);
  }

  function handleClick(item, increment) {
    if (increment || quantities[item.id] > 1) {
      setQuantities((prevQ) => ({
        ...prevQ,
        [item.id]: prevQ[item.id] + (increment ? 1 : -1),
      }));
    }
  }

  useEffect(() => {
    handlePrice();
  }, [quantities]);

  return (
    <>
      <div className={ShoppingCartScss.ShoppingCart}>
        <h4>購物籃</h4>
        {shopList.length === 0 ? (
          <div id="noProduct" style={{ height: "240px" }}>
            尚未加入商品
          </div>
        ) : (
          shopList.map((item) => (
            <div key={item.id} className={ShoppingCartScss.shopListItem}>
              <img
                className={ShoppingCartScss.itemImg}
                src={item.img}
                alt={item.name}
              />
              <div className={ShoppingCartScss.itemInfo}>
                <p className={ShoppingCartScss.itemName}>{item.name}</p>
                <div className={ShoppingCartScss.amountControlPanel}>
                  <button
                    className={ShoppingCartScss.minus}
                    onClick={() => handleClick(item, false)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span className={ShoppingCartScss.amount}>
                    {quantities[item.id]}
                  </span>
                  <button
                    className={ShoppingCartScss.plus}
                    onClick={() => handleClick(item, true)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <p className={ShoppingCartScss.price}>
                ${item.price * quantities[item.id]}
              </p>
            </div>
          ))
        )}
        <div className={ShoppingCartScss.delivery}>
          <span>運費</span>
          <span className={ShoppingCartScss.deliveryCharge}>免費</span>
        </div>
        <div className={ShoppingCartScss.total}>
          <span>小計</span>
          <span className={ShoppingCartScss.totalPrice}>${price}</span>
        </div>
      </div>
    </>
  );
}
