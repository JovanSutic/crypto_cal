import { useState } from "react";

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
      <div className="col-span-2">
        <div className="flex flex-col gap-2 bg-zinc-100 rounded-xl p-2">
          {products.map((item) => (
            <button
              key={item.name}
              onClick={() => setProduct(item.name)}
              className={`text-left text-lg font-semibold py-2 px-4 rounded-lg ${
                product === item.name
                  ? "bg-cyan-200 hover:bg-cyan-300"
                  : "hover:bg-zinc-200"
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-4 col-start-3">
        <div className="flex flex-col bg-zinc-100 rounded-xl px-2">
          <div>
            <div className="w-full flex justify-center p-4">
              <div className="flex items-center mb-4">
                <button
                  className={`${
                    activeTab === "list"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-zinc-300 text-gray-700 hover:bg-blue-200"
                  } px-4 py-2 text-md font-semibold w-[140px] rounded-l-lg transition-all duration-300`}
                  onClick={() => setActiveTab("list")}
                >
                  List
                </button>
                <button
                  className={`${
                    activeTab === "chart"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-zinc-300 text-gray-700 hover:bg-blue-200"
                  } px-4 py-2 text-md font-semibold w-[140px] rounded-r-lg transition-all duration-300`}
                  onClick={() => setActiveTab("chart")}
                >
                  Chart
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DataDisplay;
