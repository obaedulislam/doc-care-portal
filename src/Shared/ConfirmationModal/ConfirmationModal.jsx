import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, confirmDelete, modalData, confirmButtonName }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="py-2 text-lg">{message}</p>
                    <div className="flex justify-end ">
                        <label onClick={() => { confirmDelete(modalData) }}
                            htmlFor="confirmation-modal"
                            className="btn btn-sm mr-3">{confirmButtonName}!</label>
                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-sm btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;