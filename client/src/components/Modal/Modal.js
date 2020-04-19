import React from 'react';
import Flexbox from 'flexbox-react';
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';

import './Modal.scss';

export default function Modal(props) {
    return (
        <Flexbox
            className="modal"
            justifyContent="center"
            alignItems="center"
        >
            <Flexbox className="modal-content p-lg">
                <Cross className="cross" onClick={() => props.toggleDisplay()} />
                {props.children}
            </Flexbox>
        </Flexbox >
    )
}
