import  {useState} from "react";
import {initMercadoPago } from "@mercadopago/sdk-react";
import Payment from "./components/Payment";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import InternalProvider from "./components/ContextProvider";
import { SpinnerCircular } from 'spinners-react';

// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
initMercadoPago("TEST-5fe51784-83ee-4dd4-b6d8-24c054cb9966");

export const App = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState({ quantity: "1", price: "10", amount: 10, description: "Some book" });
  
  const handleClick = () => {
    setIsLoading(true);
    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      })
  };

  const renderSpinner = () => {
     if (isLoading) {
      return (
        <div className="spinner-wrapper">
          <SpinnerCircular сolor='#009EE3' />
        </div>
      )
     }
  }

  return (
    <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
      <main>
        {renderSpinner()}
        <Checkout onClick={handleClick} description/>
        <Payment />
      </main>
      <Footer />
    </InternalProvider>
  );
};

export default App;