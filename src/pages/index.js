import CryptoList from "@/components/CryptoList";
import LoaderComp from "@/components/LoaderComp";
import axios from "axios";
import { useEffect, useState } from "react";

const PAGE_NUMBER = 1;

export default function Home() {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`
      );
      console.log(response);

      setCoinsData((prev) => {
        return [...prev, ...response.data];
      });
      setLoading(false);
    }, 1500);
  }, [page]);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <div className="bg-slate-500">
        <h1 className="flex justify-center bg-slate-400 text-2xl uppercase font-bold py-5">
          Crypto Gallery
        </h1>
        <CryptoList coinsData={coinsData} />
        {loading && <LoaderComp />}
      </div>
    </main>
  );
}
