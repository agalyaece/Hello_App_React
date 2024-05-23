import { useState } from "react";

import Contents from "./Contents";
import NewContent from "./NewContent";
import Modal from "./Modal";

export default function ContentsList({ isShowing, onStopPosting }) {

    const [menus, setMenus] = useState([]);

    function handleAddMenu(postData) {
        setMenus((existingPost) => [postData, ...existingPost])

    }
    return <>
        {isShowing &&
            (<Modal onClose={onStopPosting}>
                <NewContent
                    onCancel={onStopPosting}
                    onAddMenu={handleAddMenu}
                />
            </Modal>)}

        {menus.length > 0 && (
            <ul >
                {menus.map((menu) => <Contents key={menu.body} menuItem={menu.body} />)}
            </ul>
        )}

        {menus.length === 0 && 
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h2>Oops No Menu Here</h2>
            <p>Start Adding!</p>
            </div>}

    </>
}