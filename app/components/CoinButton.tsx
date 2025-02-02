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
      className={`flex items-center ${active ? "bg-zinc-200 border-zinc-300 hover:shadow-md hover:shadow-zinc-400/50 hover:border-zinc-400" : "bg-zinc-100 border-zinc-200 hover:shadow-md hover:shadow-zinc-300/50 hover:border-zinc-300"} justify-start p-4  border-[1px] text-zinc-900 rounded-lg transition duration-300 ease-in-out`}
    >
      <img src={img} alt={`${name} logo`} className="w-6 h-6 mr-3" />
      <span className="font-bold text-lg">{name}</span>
    </button>
  );
}

export default CoinButton;
