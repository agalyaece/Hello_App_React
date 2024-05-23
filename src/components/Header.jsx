import { MdPostAdd, MdMessage } from 'react-icons/md';



export default function Header({ onCreatePost }) {
  return (

    <header className="grid grid-cols-2 gap-4  md:place-items-center h-30 bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800" >
      
        <div className="flex flex-auto place-self-start  pt-6 md:p-8 text-right md:text-left space-y-4 text-xl font-medium text-black">
        <h1 >
          <MdMessage size={28} />
          React
        </h1>
        </div>
        <div className=" flex shrink-0 place-self-end  pt-6 md:p-8 text-right md:text-left space-y-4 text-xl font-medium text-black">
        <p >
          <button onClick={onCreatePost} 
          className="mt-2 mb-5 mr-4 ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
          font-medium rounded-lg  px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
           dark:focus:ring-blue-800">
            <MdPostAdd size={28} />
            Menu
          </button>
        </p>
        </div>
      
    </header>
  );
}

