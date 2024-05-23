import { useState } from "react";

export default function NewContent({ onCancel, onAddMenu }) {
    const [addMenu, setAddMenu] = useState();

    function handleMenuChange(event) {
        setAddMenu(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const postData = {
            body: addMenu
        }
        onAddMenu(postData);
        onCancel();
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600" >
            <div >
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    <label htmlFor="body" className="text-xl font-semibold text-gray-900 dark:text-white mb-9">Menu</label>
                    <input type="text" id="body" required onChange={handleMenuChange} className="mt-2  mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                </p>
                <p>
                    <button type="button" onClick={onCancel} className="mt-2 mb-5 mr-4 py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200
             hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700
              dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                    <button className="mt-2 mb-5 mr-4 ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
             dark:focus:ring-blue-800">Submit</button>
                </p>
            </div>
        </form>
    );
}