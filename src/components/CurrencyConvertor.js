import { currencies } from "../data/currency";

const CurrencyConvertor = ({
  amount,
  fromCurrency,
  toCurrency,
  setAmount,
  setFromCurrency,
  setToCurrency,
}) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:space-x-2 mb-10">
        <div className="flex flex-col">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-white"
          >
            Amount
          </label>
          <input
            type="text"
            name="amount"
            placeholder="0.00"
            autoComplete="off"
            id="amount"
            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="currency-from"
            className="block text-sm font-medium text-white"
          >
            From
          </label>
          <select
            name="currency-from"
            id="currency-from"
            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies &&
              currencies.map((currency, index) => (
                <option
                  key={index}
                  value={currency.value}
                >{`${currency.value} - ${currency.label}`}</option>
              ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="currency-to"
            className="block text-sm font-medium text-white"
          >
            To
          </label>
          <select
            name="currency-to"
            id="currency-to"
            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies &&
              currencies.map((currency, index) => (
                <option
                  key={index}
                  value={currency.value}
                >{`${currency.value} - ${currency.label}`}</option>
              ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default CurrencyConvertor;
