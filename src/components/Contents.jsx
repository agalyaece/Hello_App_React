export default function Contents({menuItem}){
    return(
        <div >
            <p className=" flex flex-auto mt-5 mb-5 p-6 bg-white border border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-sm mx-auto rounded-md shadow-md overflow-hidden">{menuItem}</p>
        </div>
    );
}