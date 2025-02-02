function CoinButton({
  img,
  name,
  onClick,
  active,
}: {
  img: string;
  name: string;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${active ? "bg-amber-200 hover:bg-amber-300" : "bg-zinc-100 hover:bg-zinc-200"} justify-start py-2 px-2 md:px-4 text-zinc-900 rounded-xl transition duration-300 ease-in-out`}
    >
      <img src={img} alt={`${name} logo`} className="w-6 h-6 mr-1 md:mr-3" />
      <span className="font-bold text-md md:text-lg">{name}</span>
    </button>
  );
}

export default CoinButton;
