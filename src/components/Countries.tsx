import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import CountryCard from "./CountryCard";
import { Country } from "@/App";
import SkeletonCard from "./SkeletonCard";

type CountriesProps = {
  countries: Country[];
  setPaginationCountries: any;
  BASE_PAGINATION_VALUE: number;
  numPages: number;
  paginationCountries: Country[];
  isLoading: boolean;
};

function Countries({
  BASE_PAGINATION_VALUE,
  setPaginationCountries,
  countries,
  paginationCountries,
  numPages,
  isLoading,
}: CountriesProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (index: number) => {
    setPaginationCountries(
      countries.slice(
        BASE_PAGINATION_VALUE * (index - 1),
        index * BASE_PAGINATION_VALUE
      )
    );
    setCurrentPage(index);
  };

  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage((prev) => {
        handlePagination(prev + 1);
        return prev + 1;
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => {
        handlePagination(prev - 1);
        return prev - 1;
      });
    }
  };

  return (
    <main className="w-full my-8 flex flex-col items-center justify-center md:flex-row flex-wrap gap-3">
      {paginationCountries.map((country) => {
        return isLoading ? (
          <SkeletonCard key={country.translations.por.official} />
        ) : (
          <CountryCard
            country={country}
            key={country.translations.por.official}
          />
        );
      })}

      <Pagination className="mt-5">
        <PaginationContent className="cursor-pointer">
          <PaginationItem>
            <PaginationPrevious onClick={handlePreviousPage} />
          </PaginationItem>

          {Array.from({ length: numPages }, (_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                onClick={() => handlePagination(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}

export default Countries;
