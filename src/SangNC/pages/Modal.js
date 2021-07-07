import React from 'react'
import MultipleServices from './MultipleServices';

const Modal = () => {
    const [showModal, setShowModal] = React.useState(true);
    return (
        <div>
              {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className=" w-auto my-6 mx-auto max-w-xl">
                            <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                                <ul className=" space-y-2 items-center justify-between p-2 border-b border-solid border-blueGray-200 rounded-t">
                               <MultipleServices />
                                </ul>
                                <button
                                    className="text-3xl text-white absolute right-0 top-0 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}>
                                    ×
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed bg-gray-900 inset-0 z-40"></div>
                </>
            ) : null}
        </div>
    )
}

export default Modal
