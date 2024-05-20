import CartComponent from "Components/CartComponent/CartComponent";
import React from "react";
import classes from './Cart.module.scss'
import { Typography } from "antd";
interface CartProps {

}

const Cart: React.FC<CartProps> = () => {
    return (
        <div className={classes.main}>
            <div className={classes.main_baner} style={{ background: 'url("https://mnogosushi.kg/static/assets/images/banner/Footers-bg.png")bottom/cover' }}>
                <div className={classes.main_baner_tools}>
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <br /><br />

                    <Typography>
                        <h1 color="#ffff">Корзина</h1>
                    </Typography>
                </div>
            </div>
            <div style={{ height: '37vh' }}></div>
            <CartComponent />
        </div>
    );
}

export default Cart;