import React from 'react'
import './ImageCompressorCss.css';
 import { Card, Spinner, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { compress } from 'image-conversion';
 import { faImage, faDownload, faUpload, faImage as faImagePlaceholder, faQuestionCircle, faHistory } from '@fortawesome/free-solid-svg-icons';

 export const ImageCompressor = ()=> {

        return (
        <div className="mainContainer">
            <div className="row mt-5">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                    
                    <div className="d-flex justify-content-center 
                    upload-btn-wrapper">
                        <label htmlFor="uploadBtn"
                            className="btn btn-primary">
                            <FontAwesomeIcon icon={faUpload}
                                className="icon" />
                            Upload a file
                        </label>
                        <input
                            type="file"
                            id="uploadBtn"
                            accept="image/*"
                            className="mt-2 btn btn-primary w-75"
                            />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
