import React from 'react'
import "./Modal.css"
import "../../utils/generalStyles.css"
import { AiOutlineClose } from "react-icons/ai";


const Modal = ({ isModalOpen, onCloseModal, movieURL }) => {
    console.log("movie URL: ", movieURL)
    console.log("isModalOpen: ", { isModalOpen });
    if (!isModalOpen) return null;

    return (
        <div className='modal-container'>
            <div className="modal-inner-container mt-5">
                <div className="modal-header">
                    <button
                        className='mx-1'
                        onClick={() => onCloseModal(!isModalOpen)}>
                            <AiOutlineClose 
                            className='btn-close'/>
                            </button>
                </div>

                <iframe
                    width="100%"
                    height="100%"
                    src={`${movieURL}?controls=0&autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>

            </div>
        </div >

    )
}

export default Modal
