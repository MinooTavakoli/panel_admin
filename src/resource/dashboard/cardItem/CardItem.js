import React from 'react';
import Card from '../../components/gridSystem/Card';
import './CardItem.css';

function CardItem({ title = "", value = "", titleFooter = "", icon = "", footerIcon = "", theme }) {
    return (
        <>
            <Card dir="ltr">
                <div className="card-item-wrapper">
                    <div className={`card-item-icon-wrapper-${theme}`}>
                        {icon &&
                            <img className="card-item-icon" src={icon} alt="bubble_chat" />
                        }
                    </div>
                    <div>
                        {title && <div className="card-item-title">{title}</div>}
                        {value && <div className="card-item-value">{value}</div>}
                    </div>
                </div>
                <br />
                <br />
                <div className="line-footer" />
                <div className="card-item-footer-wrapper">
                    {footerIcon && <img className="card-item-footer-icon" src={footerIcon} alt="refresh_icon" />}
                    {titleFooter && <div>{titleFooter}</div>}
                </div>

            </Card >

        </>
    )
}

export default CardItem;