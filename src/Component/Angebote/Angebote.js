import React from 'react';
import './angebote.css';

const Angebote = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 angebote-left-style d-none d-md-block">
                        <ul>
                            <a className="left-text-style" href="">Taschen / Schlösser</a>
                            <li><a className="left-text-style" href="">Bauchtasche</a></li>
                            <li><a className="left-text-style" href="">Börse</a></li>
                            <li><a className="left-text-style" href="">Umhängetasche</a></li>
                            <li><a className="left-text-style" href="">Rucksack</a></li>
                            <li><a className="left-text-style" href="">Ketten &amp; Schlösser</a></li>
                        </ul>
                    </div>
                    <div className="col-md-9 angebote-right-style">
                        <h3 className="text-left">Sonderangebot</h3>
                        <br/>
                        <div className="angebote-right-box">
                            <div className="box-inside-style">
                            <h4>Entschuldigen Sie die Unannehmlichkeiten.</h4>
                            <p>Suchen Sie erneut</p>
                            <input type="search" placeholder="Katalog durchsuchen" name="" id=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Angebote;