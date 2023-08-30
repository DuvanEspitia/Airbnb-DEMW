import React, { useState } from 'react';
import './form.css';
import InformacionBasica from "./informacionBasica"
import Tipoespacio from "./tipoespacio"
import Ubicacion from "./Ubicacion"
function Form() {

    const [page, setPage] = useState(0);

    const FormTitles = ["1-4", "2-4", "3-4", "4-4"];

    const PageDisplay = () => {
        if (page === 0) {
            return <InformacionBasica />;
        } else if (page === 1) {
            return <Tipoespacio />
        }
        else if (page === 2) {
            return <Ubicacion />
        }
    }
    return (

        <div className='form' >

            <div className='progressbar'>
                <div
                    style={{
                        width:
                            page === 0 ? "0%" :
                                page === 1 ? "20%" :
                                    page === 2 ? "30%" :
                                        page === 3 ? "40%" :
                                            page === 4 ? "50%" :
                                                page === 5 ? "60%" :
                                                    page === 6 ? "70%" :
                                                        page === 7 ? "90%" : "100%"
                    }}
                ></div>
            </div>
            <div className='form-container'>
                <div className='header'>
                    <h6>{FormTitles[page]}</h6>
                </div>
                <div className='body'>{PageDisplay()}</div>

                <div className="footer">

                    <button
                        className="button"
                        disabled={page === 0}
                        onClick={() => { setPage((currPage) => currPage - 1); }}
                    >Atrás
                    </button>

                    <button
                        className="button"
                        disabled={page === FormTitles.length - 1}
                        onClick={() => { setPage((currPage) => currPage + 1); }}
                    >Siguiente
                    </button>

                </div>

            </div>

        </div>
    );

}
export default Form;