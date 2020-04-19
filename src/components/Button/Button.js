import React from 'react';
import Flexbox from 'flexbox-react';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import { motion } from 'framer-motion';

import './Button.scss';

export default function Button(props) {
    const { buttonText } = props;
    return (
        <div className="button-container">
            <motion.div
                whileTap={{ scale: 0.9 }}
                className="p-0"
            >
                <Flexbox
                    className="button px-md"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <span className="font-size--sm font-weight--bold">{buttonText}</span>
                    <Arrow />
                </Flexbox>
            </motion.div>
        </div>
    )
}
