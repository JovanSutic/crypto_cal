const slateButton = ({ name, onClick, active }: { name: string; onClick: () => void; active: boolean; }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-1 text-[14px] leading-[13px]  ${active ? "bg-slate-300 hover:bg-slate-300" : "bg-slate-100 hover:bg-slate-200"} text-slate-800 rounded-xl transition duration-300 ease-in-out`}
      >
        {name}
      </button>
    );
  };
  
  export default slateButton;