import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
     <div className="container">
         <div className="row">
            
             <div className="col-md-3 col-sm-3">
                <h3 className='pb-5'>KONTAKT</h3>
                <p className='address-style pb-5'>HB Handels GmbH Lärchenstr. 9965933 Frankfurt Germany</p>
                <p className="pt-5">E-Mail: <a href="hbhandelsonline@gmail.com">hbhandelsonline@gmail.com</a></p>
             </div>

             <div className="col-md-9 col-sm-9 contact-form-style text-center">
                 <div>
                     <form action="" className="form-style">
                     <div className="form-group row">
                <label className='col-md-6 text-left'>KONTAKT</label>
            </div>
            <div className="form-group row">
                <label className="col-md-3 col-sm-3">Betreff</label>
                <select className='col-md-9 col-sm-9'>
                    <option value="">option 1</option>
                    <option value="">option 2</option>
                </select>
            </div>
            <div className="form-group row">
                <label className='col-md-3 col-sm-3'>E-Mail Adresse</label>
                <input type="email" placeholder='E-Mail Adresse' className='col-md-9 col-sm-9' />
            </div>
            <div className="form-group row">
                <label className='col-md-3 col-sm-3'>Anhang</label>
                <input type="file" placeholder='HB Handels GmbH' className='col-md-9 col-sm-9 form-button' />
            </div>
            <div className="form-group row">
                <label className='col-md-3 col-sm-3'>Nachricht</label>
                <textarea type="text" placeholder='HB Handels GmbH' className='col-md-9 col-sm-9' />
            </div>
            <div className="form-group text-sm-right">
                <input type="submit" value="SENDEN" className='form-button' />
            </div>
                     </form>
                 </div>
             </div>
         </div>
     </div>
    );
};

export default Contact;

