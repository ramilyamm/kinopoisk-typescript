import React, { FC } from 'react';
import './Spinner.scss'

const Spinner: FC = () => {
    return (
        // <div className='spiner'>
        //     <div className="page">
        //         <div className="container">
        //             <div className="ring"></div>
        //             <div className="ring"></div>
        //             <div className="ring"></div>
        //             <div className="ring"></div>
        //             <div className="h3">loading</div>
        //         </div>
        //     </div>
        // </div>
        <div className='wp'>
            <div className="loader">
                <div className="loader_cube loader_cube--color"></div>
                <div className="loader_cube loader_cube--glowing"></div>
            </div>
        </div>
    );
};

export default Spinner;