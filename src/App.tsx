import { useEffect, useState } from "react";
import { Earth, Flag, Linkedin, Github } from "lucide-react";
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
import Article from "./components/Article";
import { ModeToggle } from "./components/ui/modeToggle";
import Countries from "./components/Countries";
import { Button } from "./components/ui/button";

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
const BASE_PAGINATION_VALUE = 25;

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [paginationCountries, setPaginationCountries] = useState<Country[]>([]);
  const [region, setRegion] = useState<String>("");
  const [numPages, setNumPages] = useState(0);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const url = region ? `${BASE_URL}/region/${region}` : `${BASE_URL}/all`;

    const fetchData = async () => {
      const data = await fetch(url);
      const formatData = await data.json();

      setCountries(formatData);
      setPaginationCountries(formatData.slice(0, BASE_PAGINATION_VALUE));
      setNumPages(Math.ceil(formatData.length / BASE_PAGINATION_VALUE));
    };

    fetchData();

    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, [region]);

  console.log();

  return (
    <div className="w-full flex justify-center p-6 sm:p-0 dark:bg-zinc-900 flex-col">
      <main className="max-w-[1240px] w-full mx-auto">
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
              <SelectItem value="all">Todas</SelectItem>
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

        <Countries
          BASE_PAGINATION_VALUE={BASE_PAGINATION_VALUE}
          countries={countries}
          numPages={numPages}
          paginationCountries={paginationCountries}
          setPaginationCountries={setPaginationCountries}
          isLoading={isLoading}
        />
      </main>

      <footer className="h-36 flex flex-col justify-center items-center gap-4 dark:bg-zinc-800 bg-zinc-100 rounded-sm mt-5">
        <p>Acompanhe minhas redes sociais!</p>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/vinicius-assuncao-marins/"
            target="_blank"
          >
            <Button
              variant="outline"
              className="py-5 bg-transparent hover:bg-primary-foreground rounded-md"
            >
              <Linkedin />
            </Button>
          </a>

          <a href="https://github.com/ViniciusMarins" target="_blank">
            <Button
              variant="outline"
              className="py-5 bg-transparent hover:bg-primary-foreground rounded-md"
            >
              <Github />
            </Button>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
