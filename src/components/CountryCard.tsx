import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Country } from "@/App";

type CountryCardProps = {
  country: Country;
};

function CountryCard({ country }: CountryCardProps) {
  return (
    <Card className="max-w-[300px] w-full dark:bg-zinc-900 dark:shadow-2xl">
      <CardHeader>
        <CardTitle>{country.translations.por.common}</CardTitle>
        <CardDescription>{country.translations.por.official}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          className="bg-cover w-[250px] h-[200px] drop-shadow-lg"
          src={country.flags.png}
          alt={`${country.translations.por.common} flag`}
        />
        <div className="mt-4">
          <p>
            <span className="font-bold">Capital:</span> {country.capital}
          </p>
          <p>
            <span className="font-bold">População:</span> {country.population}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
