import { useState } from "react";
import { currencies } from "./data/currency";

const App = () => {
  const [convertedValue, setConvertedValue] = useState("");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col bg-white shadow-md rounded w-max h-max h-96 h-max px-6 pt-10 pb-8">
            <div className="text-center w-full mb-10">
              <p className="text-6xl font-thin">Currency Convertor</p>
            </div>

            {/* Input Blocks */}
            <div className="flex space-x-2 mb-10">
              <div className="flex flex-col">
                <label
                  for="amount"
                  class="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  placeholder="0.00"
                  id="amount"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="currency-from"
                  class="block text-sm font-medium text-gray-700"
                >
                  From
                </label>
                <select
                  name="currency-from"
                  id="currency-from"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={fromCurrency}
                >
                  {currencies &&
                    currencies.map((currency) => (
                      <option
                        value={currency.value}
                      >{`${currency.value} - ${currency.label}`}</option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="currency-to"
                  class="block text-sm font-medium text-gray-700"
                >
                  To
                </label>
                <select
                  name="currency-to"
                  id="currency-to"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={toCurrency}
                >
                  {currencies &&
                    currencies.map((currency) => (
                      <option
                        value={currency.value}
                      >{`${currency.value} - ${currency.label}`}</option>
                    ))}
                </select>
              </div>
            </div>
            {/* Result Block */}
            <div className="flex items-end justify-between">
              {amount ? (
                <div>
                  <div>100 Canadian Dollar =</div>
                  <div className="text-5xl font-bold">80.84 USD</div>
                </div>
              ) : (
                <div className="text-5xl">No Amount Given.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
