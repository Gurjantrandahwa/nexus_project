import React, {useState} from 'react';
import "./modalHeader.scss";
import {MdAdd} from "react-icons/md";
import Drawer from "../../Drawer/Drawer";


const ModalHeader = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return <div className={"modal-top-header"}>
        <button onClick={openDrawer}>
            Click and&nbsp;Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over
            HK$400

        </button>
        <MdAdd/>


        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>

            <p>Drawer content goes here.</p>
        </Drawer>
    </div>
};

export default ModalHeader;