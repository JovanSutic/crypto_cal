import { cities, City } from "~/const/cities";
import CityButton from "./CityButton";
import CoinButton from "./CoinButton";
import { useState } from "react";
import { coins } from "~/const/coins";

function HeaderSelector() {
  const [coin, setCoin] = useState<string>("BTC");
  const [city, setCity] = useState<string>("Belgrade");
  return (
    <div>
      <div className="grid grid-cols-1 mb:grid-cols-5 gap-3 md:gap-4 mb-3 md:mb-6 border-box">
        <div className="col-span-1 md:col-span-2">
          <div className="w-full flex flex-row justify-center">
            <div className="flex flex-col items-center px-4 py-1 rounded-lg bg-slate-100 overflow-hidden">
              <p className="font-bold text-slate-600 text-[12px]">
                {`${coin} CURRENT PRICE`}
              </p>
              <div className="text-3xl md:text-2xl text-slate-800 font-bold">
                $99,123.00
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 md:col-start-3 flex-col">
          <div className="w-full flex flex-row gap-1 md:gap-2 mb-3 bg-slate-50 py-2 px-1 md:px-3 lg:px-4 rounded-lg">
            {coins.map((item) => (
              <CoinButton
                key={item.name}
                name={item.name}
                img={item.path}
                onClick={() => setCoin(item.name)}
                active={item.name === coin}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row gap-2  pb-2 overflow-x-scroll scrollbar-custom">
        {cities
          .sort(function (a, b) {
            if (a.city < b.city) {
              return -1;
            }
            if (a.city > b.city) {
              return 1;
            }
            return 0;
          })
          .map((item: City) => (
            <CityButton
              key={item.city}
              name={item.city}
              onClick={() => setCity(item.city)}
              active={city === item.city}
            />
          ))}
      </div>
    </div>
  );
}

export default HeaderSelector;
