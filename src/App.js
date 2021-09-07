import { useState, useEffect } from "react";
import axios from "axios";
import CurrencyConvertor from "./components/CurrencyConvertor";

const API_URL = "https://open.er-api.com/v6/latest";

const App = () => {
  const [exchangeData, setExchangeData] = useState([]);
  const [amount, setAmount] = useState("");
  const [convertAmount, setConvertedAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  useEffect(() => {
    const fetchExchangeData = async () => {
      const { data } = await axios.get(`${API_URL}/${fromCurrency}`);
      setExchangeData(data.rates);
    };

    fetchExchangeData();
  }, [fromCurrency]);

  useEffect(() => {
    if (amount) {
      // const fromCurrencyRate = exchangeData[fromCurrency];
      const toCurrencyRate = exchangeData[toCurrency];

      setConvertedAmount(amount * toCurrencyRate);
    }
  }, [amount, toCurrency, exchangeData]);

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto">
        <div className="flex pt-10 sm:pt-0 sm:items-center justify-center h-screen">
          <div className="flex flex-col sm:bg-black sm:bg-opacity-20 shadow-md rounded w-full sm:w-max sm:h-max sm:h-96 h-max px-6 pt-10 pb-8">
            <div className="text-center w-full mb-10">
              <p className="text-6xl font-thin text-white">
                Currency Convertor
              </p>
            </div>
            <CurrencyConvertor
              amount={amount}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              setAmount={(value) => setAmount(value)}
              setFromCurrency={(value) => setFromCurrency(value)}
              setToCurrency={(value) => setToCurrency(value)}
            />

            {/* Result Block */}
            <div className="flex items-end justify-between text-white">
              {amount ? (
                <div>
                  <div>
                    {parseInt(amount).toFixed(2)} {fromCurrency} =
                  </div>
                  <div className="text-5xl font-bold">
                    {parseInt(convertAmount).toFixed(2)} {toCurrency}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
