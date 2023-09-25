import React, { useState } from "react";
import styles from '../styling/FormModal.module.css';
import axios from "axios";

const apiKey = "QCT27CMCTVSS9H5T0MTCZUOAF";
const apiUrl = "https://forms.maakeetoo.com/formapi/823";
const headers = {
    'Authorization':`Bearer ${apiKey}`,
    'Content-Type':'application/json'
}

const FormModal = ({ setisOpen }) => {

    const [formData, setFormData] = useState({
        firstname: '',
        email: '',
        message: ''
    });

    const [user, setUser] = useState({});
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(apiUrl, formData, { headers })
            .then((res) => {
                setUser(res.data);
                console.log(res.data);
                setisOpen(false);
            }).catch((err) => {
                setError(err);
                console.log(err);
                setisOpen(false);
            })
    }


    return (
        <>
            <div className={styles.darkBG} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Form Details</h5>
                    </div>
                    <div className={styles.modalContent}>
                        Please check all required fields before submit?

                        {/* Form Input Fields */}
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input type="text" id="firstName" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Enter Your Full Name" />
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Comments"></textarea>
                            <div className="button-group">
                                <button type="submit" className={styles.submitBtn}>
                                    Submit
                                </button>
                                <button className={styles.cancelBtn} onClick={() => setisOpen(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormModal