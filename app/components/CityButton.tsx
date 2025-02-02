const CityButton = ({ name, onClick, active }: { name: string; onClick: () => void; active: boolean; }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-1 text-[14px] leading-[13px]  ${active ? "bg-amber-200 hover:bg-amber-300" : "bg-zinc-100 hover:bg-zinc-200"} text-zinc-800 rounded-xl transition duration-300 ease-in-out`}
      >
        {name}
      </button>
    );
  };
  
  export default CityButton;