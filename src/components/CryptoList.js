import CryptoCard from "./CryptoCard";

export default function CryptoList({ coinsData }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-4 p-2">
        {coinsData.map((coin, index) => {
          return (
            <CryptoCard
              key={index}
              image={coin.image}
              name={coin.name}
              price={coin.current_price}
            />
          );
        })}
      </div>
    </>
  );
}
