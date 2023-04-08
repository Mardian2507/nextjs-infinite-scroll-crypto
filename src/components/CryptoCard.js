import Image from "next/image";

export default function CryptoCard({ image, name, price }) {
  return (
    <>
      <div className="overflow-hidden shadow-md shadow-black bg-slate-400 rounded-lg">
        <div className="flex justify-center p-2">
          <Image src={image} width="100" height="100" alt={name} priority />
        </div>
        <div className="bg-slate-300 text-center">
          <h2>{name}</h2>
          <h3>Rp {price.toLocaleString()}</h3>
        </div>
      </div>
    </>
  );
}
