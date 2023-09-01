import React from 'react';
import "./modalHeader.scss";
import {MdAdd} from "react-icons/md";


const ModalHeader = () => {
    return <div className={"modal-header"}>
        <button>
            Click and&nbsp;Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over
            HK$400
            <MdAdd/>
        </button>

    </div>
};

export default ModalHeader;