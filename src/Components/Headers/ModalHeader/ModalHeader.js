import React from 'react';
import "./modalHeader.scss";
import {MdAdd} from "react-icons/md";


const ModalHeader = () => {
    return <div className={"modal-top-header"}>
        <button>
            Click and&nbsp;Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over
            HK$400

        </button>
        <MdAdd/>
    </div>
};

export default ModalHeader;