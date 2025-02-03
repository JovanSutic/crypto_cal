import { useState } from "react";
import BarChart from "./Chart";

const chartData = [
  {
    year: "2024",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2023",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2022",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2021",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2020",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2019",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2018",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2018",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2017",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2016",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2015",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
  {
    year: "2014",
    product: 84,
    productColor: "hsl(233, 70%, 50%)",
    dollar: 79,
    dollarColor: "hsl(188, 70%, 50%)",
  },
];

interface Product {
  name: string;
  text: string;
}

const products: Product[] = [
  { name: "cappuccino", text: "Cappuccino in a bar" },
  { name: "jeans", text: "Pair of jeans" },
  { name: "shoes", text: "Pair of tennis shoes" },
];

function DataDisplay() {
  const [product, setProduct] = useState<string>("cappuccino");
  const [activeTab, setActiveTab] = useState<string>("list");

  return (
    <div className="grid grid-cols-6 gap-2 mt-6">
      <div className="col-span-2 hidden lg:block">
        <div className="flex flex-col gap-2 bg-slate-50 text-slate-800 rounded-xl p-2">
          {products.map((item) => (
            <button
              key={item.name}
              onClick={() => setProduct(item.name)}
              className={`text-left text-lg font-semibold py-2 px-4 rounded-lg ${
                product === item.name
                  ? "bg-slate-300 hover:bg-slate-300"
                  : "hover:bg-slate-200"
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-6 lg:col-span-4 lg:col-start-3 bg-teal-50 rounded-xl py-1 px-1">
        <div className="flex flex-col h-[550px] overflow-y-auto scrollbar-custom px-1">
          <div className="lg:hidden mb-4 mt-2">
            <label
              htmlFor="collateral"
              className="w-full text-center block mb-2 text-sm font-medium text-teal-900"
            >
              Select product
            </label>
            <select
              id="collateral"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-full"
              value={product}
              onChange={(event: any) => setProduct(event.target.value)}
            >
              {products.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className="w-full flex justify-center p-4">
              <div className="flex items-center mb-4">
                <button
                  className={`${
                    activeTab === "list"
                      ? "bg-teal-500 text-white hover:bg-teal-600"
                      : "bg-teal-200 text-teal-900 hover:bg-teal-300"
                  } px-4 py-2 text-md font-semibold w-[140px] rounded-l-lg transition-all duration-300`}
                  onClick={() => setActiveTab("list")}
                >
                  List
                </button>
                <button
                  className={`${
                    activeTab === "chart"
                      ? "bg-teal-500 text-white hover:bg-teal-600"
                      : "bg-teal-200 text-teal-900 hover:bg-teal-300"
                  } px-4 py-2 text-md font-semibold w-[140px] rounded-r-lg transition-all duration-300`}
                  onClick={() => setActiveTab("chart")}
                >
                  Chart
                </button>
              </div>
            </div>
          </div>
          {activeTab === "list" ? (
            <div className="mb-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div
                  key={item}
                  className="grid grid-cols-1 md:grid-cols-7 rounded-xl border-[1px] bg-teal-200 text-teal-900 px-4 py-2 mb-2"
                >
                  <div className="flex font-bold text-xl items-center justify-center">
                    {2024 - item}
                  </div>
                  <div className="md:col-span-3 flex flex-row gap-2 justify-around md:justify-between md:border-r-[1px] border-teal-900 px-3 mb-3 md:mb-0">
                    <div className="font-bold flex flex-col items-center">
                      <p className="text-md md:text-sm">Low price</p>
                      <p className="font-semibold">$75,000.00</p>
                    </div>
                    <div className="font-bold flex flex-col items-center">
                      <p className="text-md md:text-sm">High price</p>
                      <p className="font-semibold">$105,000.00</p>
                    </div>
                  </div>
                  <div className="md:col-span-3 md:col-start-5 flex flex-row gap-2 justify-around md:justify-between px-3">
                    <div className="font-bold flex flex-col items-center">
                      <p className="text-md md:text-sm">Serving/low</p>
                      <p className="font-semibold">10,000</p>
                    </div>
                    <div className="font-bold flex flex-col items-center">
                      <p className="text-md md:text-sm">Serving/high</p>
                      <p className="font-semibold">15,000</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-2 min-h-[300px] h-[300px]">
              <BarChart data={chartData} keys={["product", "dollar"]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataDisplay;
