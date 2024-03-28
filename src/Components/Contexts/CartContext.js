import { createContext } from "react";


const shopList = [
  {
    id: "0",
    name: "破壞補丁修身牛仔褲",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQri080seAgVDTO681KouYhdz_iQ74acwNlQw&usqp=CAU",
    price: 3999,
    quantity: 1,
  },
  {
    id: "1",
    name: "刷色直筒牛仔褲",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXb1fVc0136CREwBKT75-PfgSHoQ-MxrbMVGtVADyR1Qo5JecDrDJqstWPERpgiMAQCiA&usqp=CAU",
    price: 1299,
    quantity: 1,
  },
];

export const ShopListContext = createContext(shopList);
