import CryptoCard from "./CryptoCard";

export default function CryptoList({ coinsData }) {
  return (
    <>
      <div className="flex items-center justify-evenly flex-wrap">
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
