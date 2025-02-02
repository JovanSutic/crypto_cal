import { cities, City } from "~/const/cities";
import CityButton from "./CityButton";
import CoinButton from "./CoinButton";
import { useState } from "react";
import { coins } from "~/const/coins";

function HeaderSelector() {
  const [coin, setCoin] = useState<string>("BTC");
  const [city, setCity] = useState<string>("Belgrade");
  return (
    <>
      <div className="w-full flex flex-row gap-1 md:gap-2 mb-3 bg-zinc-100 py-2 px-1 md:px-3 lg:px-4 rounded-lg">
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
    </>
  );
}

export default HeaderSelector;
