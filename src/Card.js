import React from 'react';
import './Card.css';


function Card() {
   let  price = [
    5, 10, 15, 25, 50
   ]
    return (
        <div className="container">
            <div className="left">
                <div className="bill">
                    <form action="#">
                        <label htmlFor="#">Bill</label>
                        <i className="fa fa-usd icon"></i>
                        <input type="text" />
                    </form>
                </div>
                <div className="select-tip">
                    <div>

                        <label htmlFor="#">Select Tip %</label>
                    </div> {
                        
                    }
                    <div className="buttons">
                        <button>5%</button>
                        <button>10%</button>
                        <button>15%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <input type="text" />
                    </div>
                </div>
                <div className="people">
                    <form action="#">
                        <label htmlFor="#">Number of People</label>
                        <i class="fa fa-user"></i>
                        <input type="text" />
                    </form></div>
            </div>

            <div className="right">
                <div className="top">
                    <div className="t-amount">
                        <div className="amount-text">
                            <p>Tip Amount <span> / person</span></p>
                        </div>
                        <div className="amount">
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="t-amount">
                        <div className="amount-text">
                            <p>Total <span> / person</span></p>
                        </div>
                        <div className="amount">
                            <p>$0.00</p>
                        </div>
                    </div>
                </div>
                <div className="reset-button">
                    <button>RESET</button>
                </div>
            </div>
        </div>
    );
}

export default Card;