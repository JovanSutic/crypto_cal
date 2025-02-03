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
      className={`flex items-center ${active ? "bg-slate-300 hover:bg-slate-300" : "bg-slate-50 hover:bg-slate-200"} justify-start py-2 px-2 md:px-4 text-zinc-900 rounded-xl transition duration-300 ease-in-out`}
    >
      <img src={img} alt={`${name} logo`} className="w-6 h-6 mr-1 md:mr-3" />
      <span className="font-bold text-md md:text-lg">{name}</span>
    </button>
  );
}

export default CoinButton;
