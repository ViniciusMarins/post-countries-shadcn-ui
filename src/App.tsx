import { useEffect, useState } from "react";
import { Earth, Flag } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./components/ui/select";
import { regions } from "./lib/regions";
import CountryCard from "./components/CountryCard";
import Article from "./components/Article";
import { ModeToggle } from "./components/ui/modeToggle";

export type Country = {
  translations: {
    por: {
      common: string;
      official: string;
    };
  };
  capital: [];
  flags: {
    png: string;
  };
  population: number;
};

const BASE_URL = "https://restcountries.com/v3.1";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [region, setRegion] = useState<String>("");

  useEffect(() => {
    const url = region ? `${BASE_URL}/region/${region}` : `${BASE_URL}/all`;

    const fetchData = async () => {
      const data = await fetch(url);
      const formatData = await data.json();

      setCountries(formatData);
    };

    fetchData();
  }, [region]);

  return (
    <div className="w-full flex justify-center p-6 dark:bg-zinc-900">
      <div className="max-w-[1240px] w-full">
        <span className="fixed left-7 top-10 z-10">
          <ModeToggle />
        </span>

        <Article />

        <div className="flex items-center justify-center gap-5 mt-10">
          <hr className="flex-1" />
          <Flag />
          <hr className="flex-1" />
        </div>

        <div className="prose my-5 dark:prose-headings:text-zinc-50 flex items-center gap-4 mt-10">
          <Earth className="text-green-500" />
          <h2 className="mt-0">Confira os países de cada região</h2>
        </div>

        <Select
          onValueChange={(value) =>
            value === "all" ? setRegion("") : setRegion(value)
          }
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione uma região" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Regiões</SelectLabel>
              <SelectItem value="all" className="text-zinc-600">
                Todas
              </SelectItem>
              {regions.map((region) => (
                <SelectItem
                  key={region}
                  value={region
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()}
                >
                  {region}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <main className="w-full my-8 flex flex-col items-center justify-center md:flex-row flex-wrap gap-3">
          {countries.map((country) => {
            return (
              <CountryCard
                country={country}
                key={country.translations.por.official}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
