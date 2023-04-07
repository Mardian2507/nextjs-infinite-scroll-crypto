import Image from "next/image";

export default function CryptoCard({ image, name, price }) {
  return (
    <>
      <div className="overflow-hidden shadow-md w-60 bg-slate-400 rounded-lg mb-5">
        <div className="flex justify-center w-56 h-56 p-4">
          <Image src={image} width="200" height="200" alt={name} priority />
        </div>
        <div className="bg-slate-300 text-center">
          <h2>{name}</h2>
          <h3>Rp {price.toLocaleString()}</h3>
        </div>
      </div>
    </>
  );
}
