import { createContext, useState } from "react";

export const UserContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardValidThru, setCardValidThru] = useState("");
  const [cardCCV, setCardCCV] = useState("");

  return (
    <UserContext.Provider
      value={{
        cardholder,
        setCardholder,
        cardNumber,
        setCardNumber,
        cardValidThru,
        setCardValidThru,
        cardCCV,
        setCardCCV,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
