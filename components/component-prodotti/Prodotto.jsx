import * as React from 'react';
import './style.css';
const Prodotto = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Cibo"className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Titolo</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam eos, quo cumque sint dolores
                </p>
                <a href="#" className="btn btn-outline-success">Vai </a>
            </div>
        </div>
    );
}
export default Prodotto;