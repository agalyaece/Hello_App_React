import { MdPostAdd, MdMessage } from 'react-icons/md';



export default function Header({ onCreatePost }) {
  return (

    <header >
      <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div className="flex flex-auto  pt-6 md:p-8 text-right md:text-left space-y-4 text-xl font-medium text-black">
        <h1 >
          <MdMessage size={28} />
          React
        </h1>
        </div>
        <div className=" flex shrink-0  pt-6 md:p-8 text-right md:text-left space-y-4 text-xl font-medium text-black">
        <p >
          <button onClick={onCreatePost}>
            <MdPostAdd size={28} />
            Menu
          </button>
        </p>
        </div>
      </div>
    </header>
  );
}

