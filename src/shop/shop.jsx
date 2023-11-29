import React, { useRef, useState, useEffect } from 'react';
import '../css/style.css'
import acsia from "../img/acsia.png"
import radar from "../img/radar.jpg"
import printer from "../img/printer.png"
import rooter from "../img/rooter.png"
import prektor from "../img/prektor.png"
import komp from "../img/komp.jpg"
import iphone from "../img/iphone.jpeg"
import redmi from "../img/redmi.jpg"
import samsun from "../img/samsun.jpg"
import komp_2 from "../img/kompiyuter_2.jpeg"
import m2ssd from "../img/m2ssd.jpeg"
import redmi_2 from "../img/redmi_note12.jpg"
import plesteshn5 from "../img/plesteshn5.jpeg"
import irpotes from "../img/irpotes.jpeg"
import hours_1 from "../img/hours/hours_1.jpg"
import hours_2 from "../img/hours/hours_2.jpg"
import hours_3 from "../img/hours/hours_3.jpg"
import hours_4 from "../img/hours/hours_4.jpg"
import hours_5 from "../img/hours/hours_5.jpg"
import hours_6 from "../img/hours/hours_6.jpg"
import hours_7 from "../img/hours/hours_7.jpg"
import hours_8 from "../img/hours/hours_8.jpg"
import hours_9 from "../img/hours/hours_9.jpg"
import hours_10 from "../img/hours/hours_10.jpg"
import hours_11 from "../img/hours/hours_11.jpg"
import hours_12 from "../img/hours/hours_12.jpg"
import hours_13 from "../img/hours/hours_13.jpg"
import hours_14 from "../img/hours/hours_14.jpg"
import hours_15 from "../img/hours/hours_15.jpg"

const shop = () => {

    function Indicator(e) {
        console.log(e.offsetWidth)
        marker.current.style.left = e.offsetLeft + 'px';
        marker.current.style.width = e.offsetWidth + 'px';
    }
    const handleClick = (e) => {
        Indicator(e.target)
    }

    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 2000)
    })



    return (
        <React.Fragment>
            {load ? (
                <div className="loading-box">
                    <span className="loader">Loading</span>

                </div>
            ) : (
                <div className="container">
                {/* header__section--------------------------------------------------------------------------------------------------------------------------------------- */}
                <header className='header__section'>
                    <div className="header__section__logo">
                        <h2>olcha</h2>
                    </div>
                    <div className="nav">
                        <input type="text" placeholder='Katalog boicha qidirish' />
                    </div>
                    <div className="icons">
                        <span className='inp__text'>
                            <svg className='svg__iconsr' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                            <p> Sevimlilar</p>
                        </span>
                        <span className='inp__text'>
                            <svg className='svg__iconsr' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                            <p> Savatcha</p>
                        </span>
                        <span className='inp__text'>
                            <svg className='svg__iconsr' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                            <p>Kirish</p>
                        </span>
                    </div>
                    <div className={menu ? "navigation active" : "navigation"}>
                        <div className={menu ? "toggle active" : "toggle"} onClick={handleMenu}>
                            <span></span>
                        </div>

                        <ul className='UL__UL'>
                            <li className="li" style={{ "--i": 0 }}>
                                <a href="#">
                                    <svg className='svg__iconr' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>

                                </a>
                            </li>
                            <li className="li" style={{ "--i": 1 }}>
                                <a href="#">
                                    <svg className='svg__iconr' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>

                                </a>
                            </li>
                            <li className="li" style={{ "--i": 2 }}>
                                <a href="#">
                                    <svg className='svg__iconr' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                {/* main__section----------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className='main__section'>
                    <div className="man__section__left">
                        <img src={acsia} alt="" />
                    </div>

                    <div className="main__section__right">
                        <div className="main__section__right__left">
                            <div className="product__day__box">
                                <h3 className='product__day__name'>
                                    Kun mahsuloti
                                </h3>
                                <img className='box__img' src={radar} alt="" />
                            </div>
                            <div className="main__section__right__right">
                                <p className='radar__name'>
                                    Radar-detektor Neoline X-COP <br /> 7700s
                                </p>
                                <span className='radar__mome'>
                                    <p className='acsia__name'>
                                        1 960 000 som
                                    </p>
                                    <del className='del__name'>
                                        2 050 000 som
                                    </del>
                                </span>
                                <a className='product__btn' href="#">
                                    254 000 som x12 oy
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* product__type__section-------------------------------------------------------------------------------------------------------------------------------- */}
                <section className='produc__type__section'>
                    <div className="produc__type__section__boxs">
                        <a href="/printer">
                        <img src={printer} alt="printer" />
                        </a>
                        <a href="/rottor">
                        <img src={rooter} alt="rotr" />
                        </a>
                        <a href="/proector">
                        <img src={prektor} alt="prektor" />
                        </a>
                    </div>
                </section>


                {/* main__phone------------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className='main__phone'>
                    <div className="main__section__box__1">
                        <div className="main__section__box__1_1">
                            <div className="main__section__box">
                                <div className="main__section__img">
                                    <img src={komp} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <h3 className='main__phone__box__name'>
                                    Noutbuk Lenovo V15-IGL N4020 4/256 GB SSD 15.6" HD (from UAE)
                                </h3>
                                <del className='main__phone__box__del'>
                                    3 000 000 so'm
                                </del>
                                <h3 className='main__phone__box__number'>
                                    2 550 000 so'm
                                </h3>
                                <a className='man__phone__box__btn' href="#">
                                    330 000 so'm x 12 oy
                                </a>
                                <div className="main__phone__icon__btn">
                                    <div className="svg__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                    </div>
                                    <a className='phone__btn' href="#">
                                        Muddatli to'lov
                                    </a>
                                </div>
                            </div>

                            <div className="main__section__box  ">
                                <div className="main__section__img id__name">
                                    <img src={iphone} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <h3 className='main__phone__box__name class__name'>
                                    Apple iPhone 14 Pro
                                </h3>
                                <del className='main__phone__box__del'>
                                    14 500 000 so'm
                                </del>
                                <h3 className='main__phone__box__number'>
                                    14  000  000 so'm
                                </h3>
                                <a className='man__phone__box__btn' href="#">
                                    1  771  000 so'm x 12 oy
                                </a>
                                <div className="main__phone__icon__btn">
                                    <div className="svg__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                    </div>
                                    <a className='phone__btn' href="#">
                                        Muddatli to'lov
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="main__section__box__1_1 main__section__box__1_2">
                            <div className="main__section__box">
                                <div className="main__section__img">
                                    <img src={redmi} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <h3 className='main__phone__box__name'>
                                    Redmi Note 12 Pro 4G (Global) Grafit kulrang 8/256 GB
                                </h3>
                                <del className='main__phone__box__del'>
                                    3  790  000 so'm
                                </del>
                                <h3 className='main__phone__box__number'>
                                    3  100  000 so'm
                                </h3>
                                <a className='man__phone__box__btn' href="#">
                                    401  000 so'm x 12 oy
                                </a>
                                <div className="main__phone__icon__btn">
                                    <div className="svg__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                    </div>
                                    <a className='phone__btn' href="#">
                                        Muddatli to'lov
                                    </a>
                                </div>
                            </div>

                            <div className="main__section__box ">
                                <div className="main__section__img id__name">
                                    <img src={samsun} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <h3 className='main__phone__box__name class__name'>
                                    Samsung Galaxy A54 5G (Global)
                                </h3>
                                <del className='main__phone__box__del'>
                                    4 500 000 so'm
                                </del>
                                <h3 className='main__phone__box__number'>
                                    4  214  000 so'm
                                </h3>
                                <a className='man__phone__box__btn' href="#">
                                    542  000 so'm x 12 oy
                                </a>
                                <div className="main__phone__icon__btn">
                                    <div className="svg__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                    </div>
                                    <a className='phone__btn' href="#">
                                        Muddatli to'lov
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="main__section__box nane__1">
                            <div className="main__section__img">
                                <img src={komp_2} alt="notebook" />
                                <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                            </div>
                            <h3 className='main__phone__box__name'>
                                Noutbuk Lenovo 81WQ001XRK V15 N4020 4GB 1TB 15.6
                            </h3>
                            <del className='main__phone__box__del'>
                                4  025  000 so'm
                            </del>
                            <h3 className='main__phone__box__number'>
                                3  099  000 so'm
                            </h3>
                            <a className='man__phone__box__btn' href="#">
                                401  000 so'm x 12 oy
                            </a>
                            <div className="main__phone__icon__btn">
                                <div className="svg__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                </div>
                                <a className='phone__btn' href="#">
                                    Muddatli to'lov
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="main__section__box__1">
                        <div className="main__section__box__1_1">
                            <div className="main__section__box">
                                <div className="main__section__img">
                                    <img src={m2ssd} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <h3 className='main__phone__box__name'>
                                    SSD Silicon Power A80 M.2 NVME 1TB
                                </h3>
                                <del className='main__phone__box__del'>
                                    2  090  000 so'm
                                </del>
                                <h3 className='main__phone__box__number'>
                                    1  045  000 so'm
                                </h3>
                                <a className='man__phone__box__btn' href="#">
                                    136  000 сум x 12 oy
                                </a>
                                <div className="main__phone__icon__btn">
                                    <div className="svg__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                    </div>
                                    <a className='phone__btn' href="#">
                                        Muddatli to'lov
                                    </a>
                                </div>
                            </div>

                            <div className="main__section__box  ">
                                <div className="main__section__img id__name">
                                    <img src={redmi_2} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <h3 className='main__phone__box__name class__name'>
                                    Xiaomi Redmi Note 12S 8/256GB
                                </h3>
                                <del className='main__phone__box__del'>
                                    2  864  000 so'm
                                </del>
                                <h3 className='main__phone__box__number'>
                                    2  595  000 so'm
                                </h3>
                                <a className='man__phone__box__btn' href="#">
                                    336  000 сум x 12 oy
                                </a>
                                <div className="main__phone__icon__btn">
                                    <div className="svg__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                    </div>
                                    <a className='phone__btn' href="#">
                                        Muddatli to'lov
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="main__section__box__1_1 main__section__box__1_2">
                            <div className="main__section__box">
                                <div className="main__section__img">
                                    <img src={plesteshn5} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <h3 className='main__phone__box__name'>
                                    Sony PlayStation 5+DVD (from U.A.E)
                                </h3>
                                <del className='main__phone__box__del'>
                                    7  645  000 so'm
                                </del>
                                <h3 className='main__phone__box__number'>
                                    5  999  000 so'm
                                </h3>
                                <a className='man__phone__box__btn' href="#">
                                    776  000 сум x 12 oy
                                </a>
                                <div className="main__phone__icon__btn">
                                    <div className="svg__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                    </div>
                                    <a className='phone__btn' href="#">
                                        Muddatli to'lov
                                    </a>
                                </div>
                            </div>

                            <div className="main__section__box">
                                <div className="main__section__img">
                                    <img src={irpotes} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <h3 className='main__phone__box__name'>
                                    Stayler Dyson Airwrap™ Complete Long
                                </h3>
                                <del className='main__phone__box__del'>
                                    9  549  000 so'm
                                </del>
                                <h3 className='main__phone__box__number'>
                                    8  466  000 so'm
                                </h3>
                                <a className='man__phone__box__btn' href="#">
                                    1  095  000 so'm x 12 oy
                                </a>
                                <div className="main__phone__icon__btn">
                                    <div className="svg__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                    </div>
                                    <a className='phone__btn' href="#">
                                        Muddatli to'lov
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="main__section__box nane__1">
                            <div className="main__section__img">
                                <img src={komp_2} alt="notebook" />
                                <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                            </div>
                            <h3 className='main__phone__box__name'>
                                Noutbuk Lenovo 81WQ001XRK V15 N4020 4GB 1TB 15.6
                            </h3>
                            <del className='main__phone__box__del'>
                                4  025  000 so'm
                            </del>
                            <h3 className='main__phone__box__number'>
                                3  099  000 so'm
                            </h3>
                            <a className='man__phone__box__btn' href="#">
                                401  000 so'm x 12 oy
                            </a>
                            <div className="main__phone__icon__btn">
                                <div className="svg__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                </div>
                                <a className='phone__btn' href="#">
                                    Muddatli to'lov
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* hours__section---------------------------------------------------------------------------------------------------------------------------------------- */}
                <section className="hours__sectios">
                    <div className="hours__sectios__top">
                        <div className="hours__sectios__top__left">
                            <div className=" hours__section__box">
                                <div className="main__section__img">
                                    <img src={hours_1} alt="notebook" />
                                </div>

                                <div className="hours__section__box__name ds">

                                    <h3 className='main__phone__box__name'>
                                        Aqlli soat Huawei Band 8
                                    </h3>
                                    <del className='main__phone__box__del'>
                                        650  000 so'm
                                    </del>
                                    <h3 className='main__phone__box__number'>
                                        530  000 so'm
                                    </h3>
                                    <a className='man__phone__box__btn' href="#">
                                        69  000 so'm x 12 oy
                                    </a>
                                </div>
                                <div className="hours__section__box__name__svg">
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                            </div>
                            <div className=" hours__section__box rt">
                                <div className="main__section__img">
                                    <img src={hours_2} alt="notebook" />
                                </div>

                                <div className="hours__section__box__name">

                                    <h3 className='main__phone__box__name'>
                                        Aqlli soat Galaxy Watch 6 Classic 47mm
                                    </h3>
                                    <del className='main__phone__box__del'>
                                        5  600  000 so'm
                                    </del>
                                    <h3 className='main__phone__box__number'>
                                        4  800  000 so'm
                                    </h3>
                                    <a className='man__phone__box__btn' href="#">
                                        621  000 so'm x 12 oy
                                    </a>
                                </div>
                                <div className="hours__section__box__name__svg">
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="hours__sektion__top__right">
                            <div className=" hours__sectios__right__box re">
                                <div className="main__section__img">
                                    <img src={hours_3} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>

                                </div>
                                <div className="hours__sectios__right__box__name">
                                    <h3 className='main__phone__box__name'>
                                        Aqlli soat Xiaomi Mibro Lite 2
                                    </h3>
                                    <del className='main__phone__box__del'>
                                        750  000 so'm
                                    </del>
                                    <h3 className='main__phone__box__number'>
                                        651  000 so'm
                                    </h3>
                                    <a className='man__phone__box__btn' href="#">
                                        85  000 so'm x 12 oy
                                    </a>
                                    <div className="main__phone__icon__btn">
                                        <div className="svg__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                        </div>
                                        <a className='phone__btn' href="#">
                                            Muddatli to'lov
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="main__section__sbox hours__sectios__right__box mr">
                                <div className="main__section__img">
                                    <img src={hours_4} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <div className="hours__sectios__right__box__name">
                                    <h3 className='main__phone__box__name'>
                                    Aqlli soat  MT8 Ultra 
                                    </h3>
                                    <del className='main__phone__box__del'>
                                    550  000 so'm
                                    </del>
                                    <h3 className='main__phone__box__number'>
                                    375  000 so'm
                                    </h3>
                                    <a className='man__phone__box__btn' href="#">
                                    49  000 so'm x 12 oy
                                    </a>
                                    <div className="main__phone__icon__btn">
                                        <div className="svg__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                        </div>
                                        <a className='phone__btn' href="#">
                                            Muddatli to'lov
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" hours__sectios__right__box">
                                <div className="main__section__img">
                                    <img src={hours_5} alt="notebook" />
                                    <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                </div>
                                <div className="hours__sectios__right__box__name">
                                    <h3 className='main__phone__box__name'>
                                    Aqlli soat DT NO.1 Ultra Mate Wear Pro 
                                    </h3>
                                    <del className='main__phone__box__del'>
                                    600  000 so'm
                                    </del>
                                    <h3 className='main__phone__box__number'>
                                    435  000 so'm
                                    </h3>
                                    <a className='man__phone__box__btn' href="#">
                                    57  000 so'm x 12 oy
                                    </a>
                                    <div className="main__phone__icon__btn">
                                        <div className="svg__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                        </div>
                                        <a className='phone__btn' href="#">
                                            Muddatli to'lov
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hours__sektion__bottom">
                        <section className='main__phone'>
                            <div className="main__section__box__1">
                                <div className="main__section__box__1_1">

                                    {/* main__section__box-1 */}
                                    <div className="main__section__box">
                                        <div className="main__section__img">
                                            <img src={hours_6} alt="notebook" />
                                            <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                        <h3 className='main__phone__box__name'>
                                            Bolalar soati Vmf Junior
                                        </h3>
                                        <del className='main__phone__box__del'>
                                            890  000 so'm
                                        </del>
                                        <h3 className='main__phone__box__number'>
                                            756  500 so'm
                                        </h3>
                                        <a className='man__phone__box__btn' href="#">
                                            98  000 so'm x 12 oy
                                        </a>
                                        <div className="main__phone__icon__btn">
                                            <div className="svg__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                            </div>
                                            <a className='phone__btn' href="#">
                                                Muddatli to'lov
                                            </a>
                                        </div>

                                    </div>
                                    {/* main__section__box-2 */}
                                    <div className="main__section__box  ">
                                        <div className="main__section__img id__name">
                                            <img src={hours_7} alt="notebook" />
                                            <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                        <h3 className='main__phone__box__name class__name'>
                                            Bolalar soati Vmf Sport
                                        </h3>
                                        <del className='main__phone__box__del deli'>
                                            690  000 so'm
                                        </del>
                                        <h3 className='main__phone__box__number'>
                                            586  500 so'm
                                        </h3>
                                        <a className='man__phone__box__btn' href="#">
                                            76  000 so'm x 12 oy
                                        </a>
                                        <div className="main__phone__icon__btn">
                                            <div className="svg__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                            </div>
                                            <a className='phone__btn' href="#">
                                                Muddatli to'lov
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main__section__box__1_1 main__section__box__1_2">
                                    {/* main__section__box-3 */}
                                    <div className="main__section__box">
                                        <div className="main__section__img">
                                            <img src={hours_8} alt="notebook" />
                                            <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                        <h3 className='main__phone__box__name'>
                                            Bolalar soati Vmf Gilas Plus
                                        </h3>
                                        <del className='main__phone__box__del'>
                                            620  000 so'm
                                        </del>
                                        <h3 className='main__phone__box__number'>
                                            527  000 so'm
                                        </h3>
                                        <a className='man__phone__box__btn' href="#">
                                            69  000 so'm x 12 oy
                                        </a>
                                        <div className="main__phone__icon__btn">
                                            <div className="svg__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                            </div>
                                            <a className='phone__btn' href="#">
                                                Muddatli to'lov
                                            </a>
                                        </div>
                                    </div>
                                    {/* main__section__box-4 */}
                                    <div className="main__section__box ">
                                        <div className="main__section__img id__name">
                                            <img src={hours_9} alt="notebook" />
                                            <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                        <h3 className='main__phone__box__name class__name'>
                                            Bolalar soati Vmf Gilas
                                        </h3>
                                        <del className='main__phone__box__del deli'>
                                            610  000 so'm
                                        </del>
                                        <h3 className='main__phone__box__number'>
                                            518  500 so'm
                                        </h3>
                                        <a className='man__phone__box__btn' href="#">
                                            68  000 so'm x 12 oy
                                        </a>
                                        <div className="main__phone__icon__btn">
                                            <div className="svg__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                            </div>
                                            <a className='phone__btn' href="#">
                                                Muddatli to'lov
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* main__section__box-5 */}
                                <div className="main__section__box nane__1">
                                    <div className="main__section__img">
                                        <img src={hours_10} alt="notebook" />
                                        <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                    </div>
                                    <h3 className='main__phone__box__name'>
                                        Erkaklar qo‘l soati Vmf Admiral V4135
                                    </h3>
                                    <del className='main__phone__box__del'>
                                        3  300  000 so'm
                                    </del>
                                    <h3 className='main__phone__box__number'>
                                        2  805  000 so'm
                                    </h3>
                                    <a className='man__phone__box__btn' href="#">
                                        363  000 so'm x 12 oy
                                    </a>
                                    <div className="main__phone__icon__btn">
                                        <div className="svg__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                        </div>
                                        <a className='phone__btn' href="#">
                                            Muddatli to'lov
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="main__section__box__1">
                                <div className="main__section__box__1_1">
                                    {/* main__section__box-6 */}
                                    <div className="main__section__box">
                                        <div className="main__section__img">
                                            <img src={hours_11} alt="notebook" />
                                            <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                        <h3 className='main__phone__box__name'>
                                            Qo‘l soati Vmf Elegant Plus V4135/4PA9
                                        </h3>
                                        <del className='main__phone__box__del '>
                                            1  199  000 so'm
                                        </del>
                                        <h3 className='main__phone__box__number'>
                                            1  019  150 so'm
                                        </h3>
                                        <a className='man__phone__box__btn' href="#">
                                            132  000 so'm x 12 oy
                                        </a>
                                        <div className="main__phone__icon__btn">
                                            <div className="svg__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                            </div>
                                            <a className='phone__btn' href="#">
                                                Muddatli to'lov
                                            </a>
                                        </div>
                                    </div>
                                    {/* main__section__box-7 */}
                                    <div className="main__section__box  ">
                                        <div className="main__section__img id__name">
                                            <img src={hours_12} alt="notebook" />
                                            <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                        <h3 className='main__phone__box__name class__name'>
                                            Ayollar soati Vmf Miras V3130/2PS0/6M5/08 Tillarang
                                        </h3>
                                        <del className='main__phone__box__del deli'>
                                            2  720  000 so'm
                                        </del>
                                        <h3 className='main__phone__box__number'>
                                            2  312  000 so'm
                                        </h3>
                                        <a className='man__phone__box__btn' href="#">
                                            299  000 so'm x 12 oy
                                        </a>
                                        <div className="main__phone__icon__btn">
                                            <div className="svg__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                            </div>
                                            <a className='phone__btn' href="#">
                                                Muddatli to'lov
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main__section__box__1_1 main__section__box__1_2">
                                    {/* main__section__box-8 */}
                                    <div className="main__section__box">
                                        <div className="main__section__img">
                                            <img src={hours_13} alt="notebook" />
                                            <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                        <h3 className='main__phone__box__name'>
                                            Erkaklar soati WMF Start
                                        </h3>
                                        <del className='main__phone__box__del delit'>
                                            830  000 so'm
                                        </del>
                                        <h3 className='main__phone__box__number'>
                                            705  500 so'm
                                        </h3>
                                        <a className='man__phone__box__btn' href="#">
                                            92  000 so'm x 12 oy
                                        </a>
                                        <div className="main__phone__icon__btn">
                                            <div className="svg__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                            </div>
                                            <a className='phone__btn' href="#">
                                                Muddatli to'lov
                                            </a>
                                        </div>
                                    </div>
                                    {/* main__section__box-9 */}
                                    <div className="main__section__box">
                                        <div className="main__section__img">
                                            <img src={hours_14} alt="notebook" />
                                            <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                        </div>
                                        <h3 className='main__phone__box__name'>
                                            Erkaklar soati VMF Indiana Lasso
                                        </h3>
                                        <del className='main__phone__box__del delit'>
                                            950  000 so'm
                                        </del>
                                        <h3 className='main__phone__box__number'>
                                            807  500 so'm
                                        </h3>
                                        <a className='man__phone__box__btn' href="#">
                                            105  000 so'm x 12 oy
                                        </a>
                                        <div className="main__phone__icon__btn">
                                            <div className="svg__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                            </div>
                                            <a className='phone__btn' href="#">
                                                Muddatli to'lov
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* main__section__box-10 */}
                                <div className="main__section__box nane__1">
                                    <div className="main__section__img">
                                        <img src={hours_15} alt="notebook" />
                                        <svg className='main__phone__svg__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                    </div>
                                    <h3 className='main__phone__box__name'>
                                        Erkaklar soati VMF Zona
                                    </h3>
                                    <del className='main__phone__box__del delit'>
                                        960  000 so'm
                                    </del>
                                    <h3 className='main__phone__box__number'>
                                        816  000 so'm
                                    </h3>
                                    <a className='man__phone__box__btn' href="#">
                                        960  000 so'm
                                    </a>
                                    <div className="main__phone__icon__btn">
                                        <div className="svg__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>
                                        </div>
                                        <a className='phone__btn' href="#">
                                            Muddatli to'lov
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                {/* footer__section--------------------------------------------------------------------------------------------------------------------------------------- */}
                <footer className='footer__section'>
                    <div className="footer__section__left__right">
                    <div className="footer__section__top">
                        <div className="footer__section__left">
                            <div className="header__section__logo">
                                <h2>olcha</h2>
                            </div>
                            <div className="footer__section__left__bottom">
                            <a className='namber' href="#">
                                Qo'lab-quvatlash raqami <br />
                                <span>
                                    +998 (71) 202 2021
                                </span>
                            </a>
                            <a className='lokation' href="#">
                                Qozitarnov, Toshken
                            </a>
                            <a className='email' href="">
                                info@olcha.uz
                            </a>
                        </div>
                        </div>
                        <div className="departments">
                            <span className='departments__name'>
                                Ma`lumot
                            </span>
                            <a className='departments__aa' href="">Biz haqimizda</a>
                            <a className='departments__aa' href="">Bo'sh ish o'rinlar</a>
                            <a className='departments__aa' href="">To'lovni qaytarish va tavarlarni almashtirish</a>
                            <a className='departments__aa' href="">Muddatli to'lov shartlari</a>
                            <a className='departments__aa' href="">Yordam</a>
                            <a className='departments__aa' href="">Yetkazib berish</a>
                        </div>

                        <div className="connection">
                            <a className='departments__aa' href="">Eco-friendly</a>
                            <a className='departments__aa' href="">Bonus va aksiyalar</a>
                            <a className='departments__aa' href="">To'lov va yetkazib berish</a>
                            <a className='departments__aa' href="">Olcha da soting</a>
                            <a className='departments__aa' href="">Servis markazi</a>
                        </div>
                        </div>
                        <div className="footer__sectilon__right">
                            <div className="foter__section__top">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon__apelsin" viewBox="0 0 80 20"><path fill="url(#a)" d="M20.8 16.1V4a4 4 0 0 0-4-3.9H4A4 4 0 0 0 0 4v12a4 4 0 0 0 4 4h12.7a4 4 0 0 0 4-3.9Z"></path><path fill="#8BC53F" fill-rule="evenodd" d="m13.8 1-10 4.7 14.7-.3L16.7 2c-.5-1-1.8-1.4-2.9-1Z" clip-rule="evenodd"></path><path fill="#008F4D" fill-rule="evenodd" d="M16.1 2.7 3.1 6l16.1.4-.5-2a2.2 2.2 0 0 0-2.6-1.6Z" clip-rule="evenodd"></path><path fill="var(--white)" fill-rule="evenodd" d="M18.9 13c0-.7-.7-1.4-1.5-1.4s-1.5.7-1.5 1.5.7 1.4 1.5 1.4 1.5-.6 1.5-1.4ZM17 5.6H3c-.2 0-.3.2-.3.4 0 .1.1.3.3.3h14c2 0 3.7 1.6 3.7 3.7v.3-2.6c-.7-1.3-2.1-2-3.7-2Z" clip-rule="evenodd"></path><path fill="var(--red)" fill-rule="evenodd" d="M2.5 16.3c-.4.1-.6.5-.5.9.1.4.6.6 1 .4.3 0 .5-.5.4-.9a.7.7 0 0 0-1-.4Zm1.4-1c-.4.1-.6.5-.5.9.1.3.6.5 1 .4.3-.1.5-.5.4-.9a.7.7 0 0 0-1-.4ZM2 14.6c-.3 0-.5.5-.4.9.1.3.6.5 1 .4.4-.1.6-.5.4-1-.1-.3-.5-.5-1-.3ZM4.2 17c-.4.2-.6.6-.5 1 .2.3.6.5 1 .4.4-.2.6-.6.4-1a.7.7 0 0 0-1-.4Z" clip-rule="evenodd"></path><path fill="#00527D" fill-rule="evenodd" d="m33.6 10.2-1.5-4-1.4 4h2.9Zm-4.4 4.1h-2.3l4.2-10.8h2l4.2 10.8h-2.2l-.8-2.2H30l-.8 2.2Zm10.9-3.9a2 2 0 0 0 2.1 2.1c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.5 0-.7-.2-1.2-.6-1.6a2 2 0 0 0-1.4-.6 2 2 0 0 0-1.5.6c-.4.4-.6 1-.6 1.6Zm2.3-4a3.7 3.7 0 0 1 2.7 1 4.1 4.1 0 0 1 1.2 3 4.1 4.1 0 0 1-1.2 2.9 3.8 3.8 0 0 1-2.7 1.1 3 3 0 0 1-.9-.1 2.9 2.9 0 0 1-1.2-.7v3.5h-2V6.4h1.4l.4.8.6-.4.8-.3 1-.2Zm9.1 1.8a2 2 0 0 0-2 1.6h4a2 2 0 0 0-2-1.6ZM55 12c0 .3-.2.6-.5 1l-.8.7c-.3.3-.6.4-1 .6l-1.3.2a4.2 4.2 0 0 1-3.8-2.5c-.2-.4-.4-1-.4-1.5 0-.6.2-1.1.4-1.6a4.2 4.2 0 0 1 3.8-2.5 4 4 0 0 1 2.7 1.1c.4.4.7.8.9 1.3a4.2 4.2 0 0 1 .2 2.4h-5.7c0 .4.3.8.6 1 .3.3.7.4 1.3.4h.6l.5-.3c.2 0 .3-.2.4-.3H55Zm4 2.3h-2V3.5h2v10.8Zm3.5-2.5c0 .3.1.5.4.7.2.2.5.3.8.3.4 0 .7-.1.9-.3l.3-.6c0-.2-.1-.3-.3-.4l-.8-.3a45.6 45.6 0 0 0-2-.7c-.3-.1-.6-.4-.8-.7-.2-.2-.3-.6-.3-1a2.1 2.1 0 0 1 .8-1.8l1-.5 1.1-.2c1 0 1.8.3 2.3.7.5.5.9 1 1 1.7h-2a1 1 0 0 0-.4-.5c-.2-.2-.5-.2-.8-.2a1 1 0 0 0-.7.2c-.2.1-.3.3-.3.5s.1.4.3.5c.3 0 .5.2.8.3a114 114 0 0 0 2 .6c.4.2.6.5.8.8.2.3.3.6.3 1.1 0 .3 0 .6-.2 1l-.6.7a3 3 0 0 1-1 .5c-.3.2-.7.2-1.2.2-1 0-1.9-.2-2.4-.7-.6-.5-1-1-1-1.9h2Zm8 2.5h-2V6.4h2v8Zm-1-9c-.3 0-.5 0-.8-.3a1 1 0 0 1 0-1.5c.3-.3.5-.4.8-.4.3 0 .6.1.8.4a1 1 0 0 1 0 1.5 1 1 0 0 1-.8.4Zm7.2 1c.5 0 1 .1 1.3.3a3 3 0 0 1 1.8 1.7l.2 1.4v4.6h-2V10a1.7 1.7 0 0 0-1.7-1.7c-.6 0-1 .2-1.3.5-.3.3-.5.7-.5 1.2v4.4h-2v-8H74l.4.8a4.3 4.3 0 0 1 1.4-.7 3 3 0 0 1 .9-.2Z" clip-rule="evenodd"></path><defs><linearGradient id="a" x1="20.9" x2=".8" y1="0" y2="20.9" gradientUnits="userSpaceOnUse"><stop stop-color="#FCB950"></stop><stop offset="1" stop-color="#EF4324"></stop></linearGradient></defs></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 32" class="icon icon__uzcard"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.7487 8.91207H22.6029V0.511241C22.6029 0.230682 22.8347 0 23.1167 0H24.0371C24.0392 1.37649 24.5891 2.69672 25.5683 3.67146C26.5501 4.64559 27.8769 5.19286 29.2625 5.19286V8.91207H28.7487ZM29.2625 11.8775C29.2625 15.3811 28.4582 17.992 26.8487 19.6936C25.2398 21.3952 22.7549 22.2439 19.4041 22.2439C16.2721 22.2439 13.8967 21.3952 12.277 19.6936C10.6574 17.992 9.84863 15.4271 9.84863 11.9966V0.488138C9.84863 0.219893 10.0675 0 10.3392 0H16.0171C16.2867 0.00213498 16.5083 0.219893 16.5083 0.488138V12.2482C16.5083 13.6478 16.7693 14.7272 17.2976 15.4857C18.1171 16.565 19.5831 16.9256 20.8108 16.3509C21.2065 16.1648 21.5543 15.8923 21.8282 15.5549C22.3463 14.8403 22.6029 13.7905 22.6029 12.3989V10.199H29.2625V11.8775Z" fill="#1F3E79"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3472 0H28.7486C29.0327 0 29.2624 0.230682 29.2624 0.511241V3.90001C27.1015 3.90001 25.3472 2.15643 25.3472 0.0042583V0Z" fill="#F4821F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.22167 30.8605C3.7221 30.8605 4.44456 30.0289 4.44456 28.8099V25.874H3.37366V28.7799C3.37366 30.3131 1.06237 30.3131 1.06237 28.7799V25.874H0V28.8184C0 30.0213 0.722775 30.8605 2.22167 30.8605ZM10.9218 30.7687V29.8534H8.54408L10.8712 26.7089V25.874H7.17075V26.7923H9.49792L7.17075 29.9252V30.7687H10.9218ZM15.9334 30.8605C16.7946 30.8765 17.5927 30.4138 17.996 29.6536L17.0894 29.2227C16.8668 29.6536 16.4215 29.9294 15.9288 29.9337C14.547 29.8664 13.8837 28.2164 14.8375 27.2178C15.1225 26.9174 15.5182 26.7377 15.9288 26.7174C16.4215 26.7262 16.8668 27.0008 17.0894 27.4318L17.996 26.989C17.5927 26.2331 16.7946 25.7691 15.9334 25.7936C14.0815 25.7403 12.792 27.6115 13.5093 29.3115C13.9212 30.2759 14.8835 30.8896 15.9334 30.8605ZM25.0957 30.7687L23.1966 25.874H21.8867L19.979 30.7687H21.1758L21.4834 29.9413H23.5999L23.9032 30.7687H25.0957ZM23.3106 29.0226H21.7727L22.5417 26.9174L23.3106 29.0226ZM32.1784 32.0004L30.3719 28.9062C31.0352 28.7468 31.4891 28.1331 31.4471 27.4563C31.4806 26.5422 30.7085 25.8024 29.7921 25.8782H27.4863V30.7729H28.5362V29.0311H29.305L30.973 31.9961L32.1741 32.0004H32.1784ZM29.6373 28.1161H28.5404V26.7965H29.6373C30.032 26.7508 30.3804 27.0554 30.3804 27.4563C30.3804 27.8531 30.032 28.1619 29.6373 28.1161ZM36.1145 30.7729C37.6567 30.7729 38.7276 29.8033 38.7276 28.3298C38.7276 26.8511 37.6567 25.8782 36.1145 25.8782H34.169V30.7729H36.1145ZM36.1145 29.8534H35.2198V26.7965H36.1145C36.9888 26.7292 37.7189 27.4563 37.6567 28.3298C37.6942 29.1896 36.976 29.8994 36.1102 29.8534H36.1145ZM40 25.7821V25.7936C40 26.6083 39.0126 27.0138 38.4374 26.4416C37.8618 25.8654 38.2697 24.8838 39.0849 24.8838H40V25.7821Z" fill="#1F3E79"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 22" class="icon icon__click"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6827 21.8697C10.1622 21.8662 9.64776 21.7869 9.15088 21.6315C8.60726 21.462 8.08175 21.2352 7.58078 20.9572C6.89812 20.6004 6.24447 20.1843 5.62971 19.7149C5.07489 19.2732 4.55245 18.7924 4.06342 18.2754C3.40025 17.5991 2.78141 16.9091 2.27245 16.2727C1.71017 15.5984 1.22437 14.859 0.82445 14.0701L0.789232 13.9994V13.9974L0.781941 13.9798V13.9717L0.7432 13.8868L0.74128 13.8808L0.73723 13.8752L0.700596 13.7921L0.696521 13.7824V13.7784L0.667343 13.7173L0.66003 13.6976L0.654012 13.682L0.648257 13.6698V13.6678L0.619346 13.6029L0.617429 13.5952L0.609421 13.587L0.574778 13.5064L0.568877 13.4947L0.536176 13.412L0.534259 13.408L0.532342 13.4019L0.466387 13.2343V13.2324L0.462597 13.2228L0.433829 13.1454L0.431912 13.1379L0.427858 13.1299C0.419851 13.1062 0.410597 13.0804 0.402733 13.0567V13.0512L0.396694 13.0371C0.387152 13.0079 0.379429 12.986 0.371997 12.9642V12.9602L0.365957 12.9426L0.336779 12.8674L0.331313 12.8458L0.308153 12.7771L0.304078 12.7649L0.302161 12.7555C0.292355 12.7296 0.286865 12.706 0.280848 12.6863L0.272982 12.6645L0.255719 12.6034L0.251644 12.5918V12.5899L0.248289 12.5757L0.230451 12.5146L0.22695 12.5052L0.225034 12.4889C0.21717 12.4657 0.211152 12.446 0.207628 12.4258L0.199788 12.4026C0.195856 12.3824 0.189815 12.3612 0.184493 12.3375L0.178449 12.3159V12.3097C0.174661 12.2942 0.16862 12.2724 0.163154 12.2487L0.155289 12.2189C0.151237 12.1991 0.147308 12.1797 0.141962 12.1558L0.139803 12.1422L0.135893 12.1266C0.131961 12.1069 0.127888 12.0871 0.122566 12.0674L0.11849 12.0376C0.116572 12.024 0.112736 12.0099 0.110482 11.9943V11.9787L0.10516 11.9487V11.9446L0.0971518 11.8992C0.0933638 11.8856 0.0913963 11.872 0.0892865 11.8579L0.0818566 11.813C0.0799386 11.7988 0.0779218 11.7851 0.0759558 11.775C0.0740379 11.7635 0.0720253 11.7417 0.0679735 11.724L0.0641872 11.6922C0.0627487 11.6726 0.0586968 11.655 0.056611 11.6353L0.048603 11.6055V11.5999C0.044815 11.5783 0.0448161 11.5606 0.0413158 11.5424C0.0413158 11.5328 0.0393959 11.5227 0.0375258 11.5131V11.5091C0.0353681 11.4913 0.033452 11.4716 0.0314861 11.4541C0.0314861 11.4418 0.0295655 11.4324 0.0295655 11.4202V11.4183C0.0274077 11.4027 0.0254902 11.3869 0.0254902 11.3713C0.0254902 11.3572 0.0219892 11.3436 0.0219892 11.33C0.0219892 11.3157 0.0200729 11.3021 0.0182029 11.2885C0.0182029 11.2723 0.0160445 11.2568 0.0160445 11.2413C0.0160445 11.2254 0.0160456 11.2154 0.0141276 11.2038C0.0122096 11.1916 0.014125 11.1721 0.012207 11.1562V11.1542C0.012207 11.1406 0.012207 11.1284 0.012207 11.115C0.012207 11.1007 0.012207 11.093 0.012207 11.083V11.0694C0.012207 11.0538 0.012207 11.0396 0.012207 11.026C0.012207 11.0104 0.012207 11.0024 0.012207 10.9907V10.9018C0.012207 10.8842 0.012207 10.8665 0.012207 10.8467C0.012207 10.8347 0.012207 10.8211 0.012207 10.809C0.012207 10.7974 0.012207 10.7776 0.012207 10.762C0.012207 10.7519 0.012207 10.7439 0.012207 10.7343V10.7205C0.012207 10.7005 0.0122096 10.6828 0.0141276 10.6652C0.0141276 10.6556 0.0141276 10.6454 0.0141276 10.6338C0.0141276 10.6177 0.0160452 10.5999 0.0182029 10.5782C0.0182029 10.5687 0.0182019 10.5586 0.0201198 10.5491C0.0201198 10.5294 0.0236194 10.5112 0.0255853 10.4915V10.4602C0.0255853 10.4404 0.0275029 10.423 0.0296606 10.4032L0.0335932 10.3735V10.3673C0.0335932 10.3497 0.0376682 10.332 0.0394903 10.3104C0.0394903 10.3022 0.039491 10.2968 0.0429913 10.2886V10.277C0.0449093 10.2573 0.0469235 10.2371 0.0509992 10.2195L0.0547892 10.1922C0.0567071 10.1724 0.0608055 10.1508 0.0627715 10.1311L0.0661517 10.1095V10.1055C0.0702034 10.0857 0.0721703 10.066 0.0761022 10.0424L0.0819993 10.0146C0.0854996 9.99288 0.0894325 9.97126 0.0935082 9.94953L0.0972945 9.93179V9.92206C0.10137 9.90045 0.105303 9.87669 0.108803 9.8551L0.112879 9.83536V9.8334C0.118633 9.81164 0.122709 9.78791 0.128031 9.76615V9.75813L0.129948 9.74454C0.134024 9.72281 0.139898 9.7012 0.145796 9.67529L0.151287 9.65584C0.155338 9.63411 0.161235 9.6102 0.168667 9.58301L0.170588 9.57101L0.172505 9.56329C0.180512 9.53767 0.186554 9.51191 0.193986 9.48401L0.197919 9.46856C0.205758 9.44065 0.211248 9.41748 0.219232 9.39374L0.223164 9.37556C0.229062 9.35397 0.236635 9.32649 0.244499 9.30087V9.29672L0.248432 9.28313C0.25783 9.25753 0.265837 9.22977 0.273125 9.20645L0.2772 9.19244C0.28504 9.16667 0.294462 9.13935 0.304268 9.10544L0.306426 9.10002V9.09806C0.31568 9.06829 0.32551 9.03896 0.335052 9.01107L0.339127 8.99903C0.348957 8.97185 0.358212 8.94411 0.368306 8.9182L0.372238 8.90691C0.383602 8.87285 0.393433 8.84768 0.402975 8.82177L0.406761 8.81177C0.416303 8.78459 0.428098 8.75481 0.439462 8.72506L0.441621 8.71949C0.453392 8.68972 0.464899 8.66038 0.478229 8.62477L0.482019 8.61861C0.494102 8.58727 0.505465 8.55752 0.518795 8.53019L0.522728 8.52017C0.534643 8.49243 0.546006 8.46524 0.559336 8.43134L0.56538 8.42161C0.575209 8.39599 0.588659 8.36622 0.603835 8.3309L0.607885 8.32317C0.623181 8.28541 0.639054 8.25407 0.650562 8.22645C1.42416 6.53103 2.58211 5.34982 3.7019 4.20824L3.72506 4.18448C4.37658 3.5202 4.98587 2.95234 5.58533 2.44959C6.27012 1.86984 7.00078 1.34534 7.77047 0.88622C8.19789 0.626107 8.65604 0.424804 9.13401 0.286888C9.54359 0.170411 9.96696 0.111328 10.3906 0.111328C10.963 0.11519 11.5298 0.21378 12.0708 0.403053C12.5891 0.582769 13.0902 0.809243 13.5677 1.07938C14.3317 1.49728 15.0642 1.97273 15.7604 2.50065C16.4163 2.99783 17.0351 3.54409 17.6132 4.13141C18.2162 4.75421 18.7677 5.42465 19.2627 6.14031C19.7265 6.77726 20.1098 7.47131 20.4018 8.20669C20.5908 8.72147 20.7533 9.24798 20.885 9.77994C21.0008 10.2432 21.0666 10.7188 21.0805 11.1956C21.0878 11.6631 21.0338 12.1301 20.9141 12.5836C20.7746 13.1001 20.5756 13.6013 20.322 14.0701C19.9607 14.76 19.5389 15.4166 19.0597 16.0281C18.584 16.6296 18.0731 17.201 17.5321 17.7415C16.9478 18.3366 16.3309 18.9008 15.6872 19.4289C15.0125 19.9831 14.3045 20.4937 13.5677 20.9573C12.711 21.5345 11.7095 21.85 10.6829 21.8698L10.6827 21.8697ZM12.2623 19.4586C11.8329 19.7149 11.3707 19.9083 10.8875 20.0284C11.3707 19.9083 11.8329 19.7149 12.2623 19.4586ZM5.9585 18.5889C6.00297 18.6207 6.049 18.652 6.09559 18.6838C6.0455 18.6484 6.00101 18.6187 5.9585 18.5889ZM4.39221 17.2565L4.47135 17.3352L4.39221 17.2565ZM5.14813 9.63411L5.12272 9.68747V9.69304L5.10155 9.74254L5.09963 9.7487L5.07829 9.79749V9.8015L5.0571 9.85315V9.8551L5.03775 9.90817V9.91013L5.01838 9.95751V9.96523L5.00112 10.0106L4.99896 10.0166L4.98366 10.0619V10.0681C4.97777 10.0837 4.97383 10.0994 4.96837 10.115V10.1192C4.96247 10.1389 4.95645 10.1529 4.95266 10.1665L4.95099 10.1745L4.9371 10.2174L4.93519 10.2276C4.93181 10.2412 4.9279 10.2554 4.92382 10.2689V10.2791L4.91203 10.3205L4.89268 10.3321L4.89076 10.3421L4.88122 10.3754L4.8793 10.3851C4.87525 10.3992 4.87146 10.4129 4.8695 10.4269L4.86597 10.4366L4.85617 10.4861L4.85209 10.4996L4.84859 10.5233V10.5349L4.84073 10.5667V10.5728L4.83483 10.5926L4.82893 10.6178L4.82749 10.6298V10.6437C4.82557 10.6557 4.82356 10.6673 4.82145 10.6793L4.81953 10.6929L4.8156 10.7262L4.81167 10.742C4.81167 10.752 4.80975 10.7637 4.80817 10.7757V10.7915C4.80817 10.8035 4.80625 10.8132 4.80424 10.8252V10.8546C4.80424 10.8627 4.80424 10.8682 4.80232 10.8763V10.9039C4.80232 10.9099 4.80232 10.9177 4.80232 10.9258C4.80232 10.9317 4.80232 10.9353 4.80232 10.9413C4.80232 10.9474 4.80232 10.961 4.80016 10.971C4.80016 10.9746 4.80016 10.9786 4.80016 10.9828V10.9908C4.80016 10.9983 4.80016 11.0084 4.80016 11.02C4.80016 11.03 4.80016 11.0341 4.80016 11.0417C4.80016 11.0497 4.80016 11.0579 4.80016 11.0655V11.0912C4.80016 11.0992 4.80016 11.1089 4.80016 11.119V11.1876C4.80016 11.1956 4.80016 11.2038 4.80016 11.2114C4.80016 11.2193 4.80016 11.229 4.80016 11.2371V11.2588C4.80016 11.2685 4.80016 11.2765 4.80016 11.2865V11.3083C4.80016 11.3137 4.80016 11.3198 4.80016 11.326V11.3593C4.80016 11.3652 4.80016 11.3729 4.80016 11.3809V11.4263C4.80016 11.4364 4.80232 11.446 4.80421 11.4562C4.80421 11.4596 4.80421 11.4638 4.80421 11.4678V11.4758C4.80421 11.4855 4.80613 11.4955 4.80814 11.5071V11.5247L4.80982 11.5409L4.81174 11.5545L4.81366 11.5742V11.5824L4.81581 11.6V11.6197L4.81975 11.6333V11.655L4.82166 11.6671L4.82574 11.6923V11.7004L4.82924 11.714V11.722L4.83303 11.7418L4.83519 11.7553C4.83711 11.7677 4.83912 11.7793 4.84291 11.7893L4.84507 11.8048L4.85039 11.8285L4.85231 11.8402V11.8544L4.86017 11.8877L4.86422 11.9033C4.86815 11.9175 4.87168 11.9292 4.8735 11.9392L4.87757 11.9528L4.88752 11.9881L4.88944 11.9941V12.0023C4.89297 12.0119 4.89702 12.0239 4.89899 12.0356L4.90292 12.0492L4.91624 12.0906V12.0967L4.92819 12.1339V12.1461L4.93365 12.1637L4.93955 12.1834L4.94147 12.1916V12.195L4.95127 12.2248L4.9548 12.2329L4.95885 12.2445V12.2507L4.97064 12.284L4.97414 12.294L4.98805 12.3354L4.99198 12.341V12.3449L5.00728 12.3883L5.00944 12.3943L5.0267 12.4378L5.02862 12.4438L5.04417 12.4812L5.04609 12.4888V12.495C5.05214 12.5085 5.0576 12.5247 5.06547 12.5403L5.06738 12.5443L5.08479 12.5898L5.08858 12.5953L5.10205 12.6292L5.1061 12.6387L5.10989 12.6467L5.13123 12.6923V12.6962L5.13338 12.6998L5.15247 12.7473V12.7533L5.16005 12.7649L5.17589 12.8008V12.8027L5.18321 12.8206L5.1992 12.8538C5.6843 13.7174 6.28978 14.5043 6.99519 15.1902C7.55594 15.7994 8.21939 16.3042 8.95048 16.6786C9.47419 16.9921 10.0663 17.1658 10.6732 17.1855C11.244 17.1758 11.8005 17.0001 12.2762 16.6786C13.0752 16.1718 13.8137 15.5726 14.479 14.8925C15.0958 14.2989 15.6176 13.611 16.028 12.8538C16.6369 11.6924 16.521 10.8469 16.0721 9.59875C15.7086 8.76493 15.1963 8.00794 14.5622 7.36695C13.8989 6.69265 13.1408 6.12065 12.3152 5.67154C11.7795 5.34606 11.1741 5.16062 10.5514 5.13288C10.0409 5.13901 9.54012 5.28482 9.10497 5.55694C8.27916 6.0637 7.52324 6.68092 6.85796 7.38856L6.84478 7.40216C6.152 8.03512 5.57582 8.79025 5.15051 9.63425L5.14813 9.63411ZM4.15195 17.0158L4.28976 17.1559L4.15195 17.0158ZM16.2419 16.1858C16.1352 16.2999 16.0195 16.4186 15.8977 16.5448C15.7548 16.6906 15.6076 16.8344 15.4587 16.9783C15.6076 16.8344 15.7567 16.6906 15.8977 16.5448C16.0214 16.4186 16.1352 16.2999 16.2419 16.1858ZM18.4134 13.1848C18.3863 13.2383 18.3591 13.2893 18.3321 13.3427C18.1525 13.6859 17.9551 14.0191 17.7422 14.34C17.9551 14.0191 18.1525 13.6859 18.3321 13.3427C18.3591 13.2893 18.3863 13.2363 18.4134 13.1848ZM18.659 8.99557C18.7926 9.41748 18.8912 9.849 18.9531 10.2887C18.8912 9.849 18.7941 9.41547 18.659 8.99356V8.99557ZM15.4006 4.1232C15.5958 4.30304 15.7853 4.48632 15.9689 4.67362C16.4952 5.21558 16.9769 5.80102 17.41 6.4244C17.5971 6.69637 17.7654 6.96035 17.9126 7.21474C17.3674 6.29033 16.7156 5.43675 15.9689 4.67362C15.7853 4.48432 15.5958 4.30304 15.4006 4.1232ZM12.0147 1.78695C12.1503 1.85419 12.2895 1.92731 12.4399 2.01015C12.8577 2.23663 13.2676 2.48701 13.6582 2.75099C13.2676 2.48701 12.8577 2.23863 12.4399 2.01015C12.2895 1.92931 12.1503 1.85192 12.0147 1.78695ZM5.39749 12.2187C5.32775 12.0512 5.26796 11.8815 5.21984 11.7064C5.1595 11.4913 5.12679 11.2684 5.11893 11.0438C5.14012 11.45 5.23317 11.8463 5.39749 12.2167V12.2187Z" fill="#53B7D1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.2854 15.9139C33.7651 15.9139 34.2077 15.9039 34.6121 15.8841C35.0179 15.8644 35.4339 15.823 35.8652 15.7579C36.0274 15.7207 36.1765 15.8604 36.1492 16.0301V17.4791C36.1492 17.6468 36.0486 17.7632 35.8459 17.8263C35.3508 17.9839 34.8418 18.0923 34.3274 18.1554C33.7825 18.2301 33.2311 18.2699 32.6801 18.2716C31.7923 18.2952 30.9108 18.1454 30.0812 17.8263C29.4064 17.5558 28.8128 17.1126 28.3544 16.5387C27.8901 15.9336 27.5594 15.2296 27.3877 14.4804C27.1748 13.5755 27.0743 12.6467 27.0842 11.7181V10.8288C27.0743 9.89851 27.1728 8.96997 27.3798 8.06475C27.5441 7.31533 27.8689 6.61355 28.3272 6.00664C28.7796 5.43264 29.3717 4.98909 30.0425 4.71898C30.8721 4.39949 31.7558 4.24941 32.6414 4.27331C33.6721 4.28145 34.6949 4.451 35.6755 4.77606C35.7627 4.79782 35.8418 4.84502 35.9037 4.91226C35.9442 4.97536 35.9636 5.0502 35.9597 5.1253V6.51685C35.9868 6.68439 35.8379 6.82673 35.6755 6.7874C35.3216 6.7379 34.9349 6.69869 34.5191 6.67078C34.1012 6.64303 33.6779 6.63144 33.2489 6.6333C32.7284 6.6177 32.2102 6.70412 31.7231 6.88369C31.3207 7.04321 30.9746 7.31934 30.7271 7.6783C30.4545 8.08865 30.2707 8.55192 30.1856 9.04052C30.0697 9.68147 30.0152 10.332 30.0251 10.9827V11.5823C30.0152 12.2349 30.0736 12.8855 30.1954 13.526C30.2841 14.013 30.4757 14.4744 30.7543 14.8786C31.0132 15.2314 31.3652 15.5036 31.7692 15.6615C32.2547 15.8408 32.7691 15.9255 33.2854 15.9119V15.9139ZM38.3477 4.81727C38.3477 4.61052 38.4426 4.50796 38.6323 4.50796H40.9837C41.1615 4.48234 41.3125 4.63614 41.2871 4.81727V14.8096C41.2659 15.1012 41.3317 15.391 41.4768 15.6433C41.6797 15.8544 41.9678 15.9552 42.2539 15.9139H46.7458C46.9241 15.888 47.0745 16.0416 47.0498 16.2232V17.6527C47.0498 17.899 46.9434 18.0272 46.7286 18.0408C46.0324 18.1039 45.2355 18.1593 44.3386 18.2049C43.4411 18.2503 42.5114 18.2716 41.552 18.2716C41.0436 18.2816 40.5387 18.2301 40.0438 18.1181C39.6783 18.0372 39.3362 17.8677 39.0476 17.6249C38.7887 17.3903 38.6011 17.0848 38.5085 16.7457C38.3902 16.3121 38.3363 15.8624 38.3462 15.4107L38.3477 4.81727ZM51.7542 17.7117C51.7794 17.903 51.619 18.0664 51.4314 18.0392H49.136C48.9484 18.0664 48.7878 17.903 48.8151 17.7117V4.85475C48.8151 4.62412 48.9217 4.50796 49.136 4.50796H51.4314C51.6462 4.50796 51.7542 4.62412 51.7542 4.85475V17.7117ZM60.6262 15.9139C61.1077 15.9139 61.5503 15.9039 61.9547 15.8841C62.3587 15.8644 62.7765 15.823 63.2057 15.7579C63.3681 15.7184 63.5171 15.8604 63.4899 16.0281V17.4791C63.4899 17.6468 63.3894 17.7632 63.1864 17.8263C62.6914 17.9817 62.185 18.0923 61.6706 18.1554C61.1232 18.2301 60.5721 18.268 60.0212 18.2716C59.1337 18.2952 58.2514 18.1454 57.4223 17.8263C56.747 17.5542 56.1534 17.1126 55.6971 16.5387C55.2332 15.9316 54.9026 15.2296 54.7303 14.4804C54.5174 13.5755 54.4169 12.6467 54.4268 11.7161V10.8268C54.4169 9.89852 54.5159 8.96997 54.7229 8.06475C54.8872 7.31533 55.2119 6.61355 55.6703 6.00464C56.1229 5.43064 56.7143 4.98709 57.3851 4.71898C58.2148 4.39949 59.0984 4.24755 59.984 4.27331C61.0147 4.28145 62.0399 4.451 63.0181 4.77606C63.1053 4.79782 63.1844 4.84502 63.2463 4.91226C63.287 4.97536 63.3062 5.04805 63.3027 5.1253V6.51685C63.3295 6.68439 63.1805 6.82673 63.0181 6.7874C62.6642 6.73589 62.2796 6.69869 61.8617 6.67078C61.4444 6.64303 61.0206 6.63144 60.5915 6.6333C60.0712 6.6177 59.553 6.70255 59.0657 6.88369C58.6633 7.04321 58.3192 7.31933 58.0697 7.67615C57.7971 8.08664 57.6134 8.55192 57.5286 9.04052C57.4144 9.68147 57.3604 10.332 57.3678 10.9827V11.5823C57.3604 12.2349 57.4164 12.8855 57.538 13.5238C57.6271 14.0111 57.8183 14.4744 58.0989 14.8786C58.3558 15.2314 58.7079 15.5036 59.1123 15.6615C59.5974 15.8408 60.1117 15.9255 60.6281 15.9119L60.6262 15.9139ZM75.2084 4.50796C75.2934 4.49793 75.3766 4.54327 75.4172 4.62255C75.4538 4.70695 75.4385 4.80583 75.3786 4.87494L71.3218 11.0221L75.9103 17.692C75.9608 17.7532 75.9702 17.8399 75.9395 17.913C75.9028 18.0015 75.8137 18.0528 75.7211 18.0392H73.0465C72.9361 18.0448 72.8262 18.0252 72.7257 17.9817C72.6386 17.9308 72.5648 17.8577 72.5168 17.7687L68.6298 11.7379V17.7097C68.6571 17.901 68.4947 18.0664 68.3071 18.0392H66.0115C65.8239 18.0664 65.6635 17.901 65.6907 17.7097V4.85475C65.6907 4.62255 65.7972 4.50595 66.0115 4.50595H68.3071C68.5219 4.50595 68.6298 4.62255 68.6298 4.85475V10.3063L72.252 4.73858C72.3505 4.59079 72.5129 4.50394 72.6872 4.50595L75.2084 4.50796Z" fill="#4D4D4D"></path></svg>
                            </div>
                            <div className="foter__section__right">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 22" class="icon icon__payme"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4536 2.17795C12.1863 1.74796 11.8405 1.37577 11.4326 1.07816C11.0179 0.797193 10.5664 0.576689 10.0883 0.427896C9.57065 0.259132 9.0357 0.146901 8.49133 0.092659C7.85575 0.0326091 7.22015 0.00102901 6.58141 0.00394427H1.05668C0.515248 -0.0444905 0.0410672 0.358893 0.00619546 0.897781C0.00619546 0.897781 0.00619546 0.929369 0.00619546 0.946195V9.87586C0.771667 11.5106 2.04308 12.8598 3.6377 13.7249V11.9316C3.58571 11.3504 4.0173 10.8377 4.60426 10.7892H6.26173C8.52016 10.7892 10.247 10.3165 11.4378 9.3746C12.6267 8.43234 13.2308 7.03786 13.2477 5.1843C13.2506 4.65228 13.1873 4.11942 13.0606 3.6009C12.9347 3.09715 12.7298 2.61832 12.4536 2.17795ZM9.21693 6.7681C9.024 7.09812 8.73585 7.36414 8.39403 7.53267C8.02008 7.71078 7.61686 7.81656 7.20511 7.84484C6.75367 7.90218 6.29619 7.93087 5.84184 7.92796H4.25054C3.8676 7.92796 3.63207 7.62204 3.63207 7.169V3.4864C3.60617 3.14286 3.9054 2.86189 4.25054 2.9022H5.84184C6.35654 2.9022 6.84284 2.91675 7.29718 2.94834C7.70603 2.96518 8.10611 3.06286 8.47443 3.23451C8.81708 3.3831 9.10147 3.63811 9.28833 3.95856C9.49902 4.38834 9.59632 4.86716 9.57065 5.34515C9.57921 5.8404 9.45831 6.33023 9.21693 6.76291V6.7681ZM3.64001 14.2632C2.27964 13.7733 1.03916 12.9976 0.00619546 11.9865V16.3019C-0.0430909 16.6488 0.20726 16.9669 0.558676 17.0012H3.05597C3.7181 17.0012 3.64001 16.2967 3.64001 16.2967V14.2632ZM37.9587 4.70652H35.8064C35.3806 4.67782 34.9985 4.9615 34.9004 5.37051L32.3968 12.2359C32.3968 12.2359 30.1868 5.9838 30.0202 5.49977C29.9252 5.03861 29.5224 4.70652 29.051 4.70069H27.0653C26.3572 4.70069 26.3572 5.2506 26.4524 5.46527C26.5472 5.68015 29.2581 13.0803 30.3196 15.9127C30.4867 16.2624 30.6045 16.6317 30.6677 17.0125C30.5986 17.3876 30.4579 17.7484 30.2472 18.0694C30.167 18.2037 30.0749 18.3328 29.9716 18.4529C32.0172 17.8489 34.3913 15.6435 35.5855 13.2636C36.7875 9.9644 38.3736 5.56565 38.445 5.33914C38.5229 4.99311 38.5229 4.70652 37.9587 4.70652ZM28.36 19.1231C28.173 19.1202 27.9888 19.1034 27.8075 19.0799C27.58 19.046 27.1483 19.0799 27.1483 19.4639V21.1134C27.1483 21.7464 27.4591 21.7926 27.6177 21.835C28.1302 21.9472 28.6532 22.0012 29.1769 21.9985C29.7956 22.0154 30.4084 21.8892 30.9728 21.6319C31.4848 21.3738 31.9421 21.0132 32.3135 20.5747C32.7361 20.0967 33.0936 19.5645 33.3757 18.9911C33.6805 18.3839 33.971 17.711 34.2472 16.9748L34.5696 16.0989C33.928 16.7315 31.0995 19.3862 28.36 19.1231ZM25.0996 6.67938C24.982 6.40151 24.8206 6.14402 24.6254 5.91459C24.4235 5.70572 24.1967 5.51951 23.9493 5.36489C23.6812 5.1843 23.3968 5.02968 23.0999 4.90437C22.7948 4.78631 22.4841 4.69468 22.1651 4.62361C21.8028 4.54297 21.4315 4.49164 21.0601 4.46586C20.6633 4.42576 20.2167 4.40289 19.7248 4.40289C16.4307 4.40289 14.5575 5.4368 14.1 7.50421C14.0161 7.83403 14.2464 8.15739 14.5863 8.18606H16.6148C17.1673 8.18606 17.1673 8.01732 17.377 7.54452C17.4691 7.28703 17.6334 7.06052 17.8516 6.89426C18.3701 6.56194 18.9829 6.40442 19.5957 6.45056C20.171 6.39028 20.7464 6.53368 21.2267 6.85165C21.5921 7.19248 21.808 7.66152 21.8282 8.16031C21.8282 8.84216 21.6186 9.29148 20.7663 9.29148C18.7524 9.21956 16.586 9.4461 15.3654 10.1448C14.1397 10.8898 13.412 12.2272 13.4525 13.653C13.4408 14.1969 13.5504 14.7412 13.7803 15.2366C13.9933 15.6664 14.3069 16.0444 14.6893 16.3362C15.0952 16.6633 15.5614 16.9067 16.0624 17.0497C16.6257 17.2043 17.2099 17.2785 17.7939 17.2704C18.583 17.2843 19.3681 17.1729 20.1217 16.9406C20.7869 16.6685 21.4165 16.3165 21.9949 15.8898V16.2762C21.9949 16.6544 22.1106 16.9956 22.5474 16.9956H24.8956C25.3702 16.9956 25.4798 16.6604 25.4798 16.2419V9.04522C25.4829 8.5959 25.4512 8.14846 25.3877 7.70206C25.3332 7.3523 25.2384 7.00919 25.0996 6.67938ZM21.8888 13.7505C21.8888 13.7505 21.282 15.0161 19.1265 15.0161C18.6116 15.0396 18.099 14.8985 17.6674 14.6157C17.282 14.3172 17.0753 13.8451 17.1149 13.3612C17.0663 12.7052 17.4288 12.0892 18.0276 11.8113C18.8989 11.4763 19.8285 11.3217 20.764 11.3531C21.3712 11.2643 21.9147 11.7344 21.9118 12.3444L21.8888 13.7505Z" fill="#333333"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M75.5834 9.12191C76.1388 10.0099 76.1388 11.1359 75.5834 12.026C75.0309 12.8596 72.0189 16.0611 71.026 17.0898C70.1626 17.9799 68.9973 18.8822 67.8439 18.8822H43.9267C40.6894 18.8822 40.4971 17.7827 40.4971 15.3312V5.32793C40.4971 2.81598 41.2417 2.08301 43.4577 2.08301H67.8986C69.0409 2.08301 70.0649 2.66739 71.2133 3.84429C72.2173 4.84911 75.1835 8.52671 75.5834 9.12191Z" fill="#33CCCC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M70.8421 12.9067C70.1172 14.8511 68.2066 16.0996 66.1263 15.9911C62.9433 15.9911 60.8198 13.8344 60.8198 10.6009C60.8198 7.36783 63.0295 5.10239 66.0137 5.10239C68.9976 5.10239 70.986 7.15898 71.1125 10.475C71.1125 10.8985 71.0085 11.2741 70.4738 11.2741H63.7205C63.7662 13.0496 64.6215 14.0233 66.1461 14.0233C66.9749 14.043 67.7372 13.5819 68.1026 12.8466C68.2463 12.6369 68.4858 12.5166 68.7384 12.5195H70.4799C70.7008 12.511 70.8768 12.7088 70.8363 12.9264L70.8421 12.9067ZM45.9269 5.94989V5.88984C45.9269 5.56645 45.9269 5.25141 45.3746 5.25141H43.3686C42.8994 5.25141 42.8766 5.50325 42.8766 5.90145V8.53933C43.6676 7.44475 44.7154 6.55463 45.9269 5.94989ZM59.3584 15.4953V8.98575C59.3584 6.31962 58.1761 4.98828 55.8108 4.98828C55.1516 4.99618 54.51 5.1851 53.9545 5.53796C53.3417 5.91828 52.795 6.39418 52.3346 6.94702C52.1277 6.34788 51.7218 5.83848 51.1862 5.50059C50.5765 5.16554 49.8862 5.00183 49.1923 5.03045C48.1684 5.03651 47.1784 5.37735 46.3695 5.99915C46.1914 6.17643 42.8706 8.74838 42.8706 11.4316V15.5066C42.8706 15.6325 42.8044 16.1283 43.363 16.1283H45.4458C46.0933 16.1283 46.0331 15.7044 46.0331 15.53V8.93171C46.3812 8.46183 47.0924 7.34788 48.2686 7.34788C48.6515 7.31361 49.0259 7.48795 49.2416 7.80323C49.4773 8.27247 49.5813 8.79681 49.5406 9.32096V15.5182C49.5406 15.6443 49.4747 16.14 50.0328 16.14H52.0933C52.7378 16.14 52.6772 15.7162 52.6772 15.5381V8.90821C53.0537 8.44209 53.7822 7.32442 54.9161 7.32442C55.304 7.29302 55.6782 7.46552 55.9058 7.77996C56.1447 8.24984 56.2505 8.77397 56.2079 9.29831V15.4953C56.2079 15.6217 56.1413 16.1165 56.6998 16.1165H58.7831C59.4362 16.0855 59.3584 15.6672 59.3584 15.4953ZM66.0252 7.15297C64.7593 7.15297 63.9046 8.0289 63.7175 9.46973H68.2463C68.1315 8.20951 67.4464 7.15297 66.0252 7.15297Z" fill="white"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 32" class="icon icon__humo"><g clip-path="url(#clip0_101_681)"><path d="M50.05 32H1.95C0.87308 32 0 31.1196 0 30.0336V1.96642C0 0.880432 0.87308 0 1.95 0H50.05C51.1269 0 52 0.880432 52 1.96642V30.0336C52 31.1196 51.1269 32 50.05 32Z" fill="white"></path><path d="M19.2125 1.02198C24.7608 1.02198 30.3091 1.04171 35.8572 1.00914C37.3805 1.00016 38.9046 0.991764 40.4282 0.972231C40.5582 0.970592 40.687 0.989405 40.8162 1.00081C41.4355 1.05548 41.5965 1.55475 41.7211 2.08103C43.0316 7.61501 42.6154 13.509 40.2873 18.7146C39.6669 20.102 38.9087 21.4091 38.0705 22.6694C37.412 23.6596 36.6943 24.6056 35.9094 25.5009C35.3238 26.1688 34.708 26.8068 34.0552 27.4027C32.8262 28.5242 31.5214 29.5474 30.0007 30.2502C29.1943 30.6229 28.3484 30.8565 27.4685 30.9812C26.5908 31.1057 25.7098 31.1044 24.8293 31.0851C19.9648 30.9787 15.0999 31.0615 10.2352 31.0395C7.71698 31.028 5.19868 31.0366 2.68039 31.0398C2.41733 31.0401 2.15759 31.0185 1.90948 30.9371C1.39338 30.7677 1.0806 30.3119 1.05116 29.7067C1.04284 29.535 1.04524 29.3627 1.04524 29.1907C1.04498 20.3885 1.04492 11.5863 1.04583 2.78409C1.04583 2.53213 1.0507 2.28259 1.09978 2.03056C1.21743 1.42674 1.69336 1.06708 2.29701 1.03018C2.50703 1.01733 2.71828 1.02316 2.92894 1.02316C8.35677 1.02283 13.7847 1.0229 19.2125 1.02198Z" fill="#2E4653"></path><path d="M42.7889 1.37382C42.8057 1.46263 42.8411 1.54785 42.8667 1.63503C43.2925 3.0831 43.5692 4.57489 43.7009 6.07934C44.1115 10.7753 43.0592 15.5233 40.9647 19.7183C38.5544 24.5458 34.8561 28.4993 29.969 30.7651C29.8749 30.8088 29.7104 30.7901 29.7404 30.9436C29.7685 31.0879 29.9227 31.0342 30.0237 31.0342C33.245 31.0353 36.4661 31.0388 39.6872 31.0258C43.1823 31.0118 47.4081 29.2297 49.4084 26.2437C50.4247 24.7264 50.6102 23.0044 49.8896 21.3253C49.8701 21.2799 49.8462 21.2337 49.7892 21.2326C49.7409 21.2429 49.7221 21.2801 49.7035 21.3154C49.3947 21.9053 49.078 22.4899 48.725 23.0551C47.2902 25.3524 45.223 27.2935 42.6282 28.1532C41.6574 28.4748 40.8013 28.5837 40.1815 28.6184C40.3219 28.5705 40.4633 28.5218 40.605 28.4739C41.3564 28.22 42.0864 27.9232 42.7889 27.5447C42.8959 27.4871 43.0018 27.4274 43.1067 27.3658C47.6557 24.6945 50.4895 19.171 50.9365 13.9963C51.1252 11.8102 50.83 8.85252 49.0874 7.29524C48.9421 7.16539 48.7809 7.0771 48.602 7.0244C48.5421 7.09899 48.5597 7.17247 48.5576 7.24149C48.5437 7.70544 48.5408 8.16892 48.5144 8.63352C48.2541 13.1977 46.9284 17.6226 44.6765 21.5658C44.0521 22.6592 43.3198 23.6623 42.3352 24.4557C42.1039 24.642 41.8585 24.8163 41.5562 24.899C41.6136 24.8169 41.6683 24.7329 41.7288 24.6531C41.9535 24.3565 42.1945 24.0711 42.4031 23.7633C44.3602 20.8756 45.7176 17.5579 46.5215 14.1625C47.1391 11.5539 47.6589 8.60029 47.1504 5.93363C46.879 4.50994 46.427 2.81612 45.2499 1.88194C44.628 1.38817 43.9298 1.09262 43.1387 1.01462C43.0968 1.01049 43.0589 1.00826 43.0246 1.00826C42.8003 1.00826 42.7381 1.1033 42.7889 1.37382Z" fill="url(#paint0_linear_101_681)"></path><path d="M12.0895 12.7505C12.0668 12.7786 12.0181 12.8267 12.0325 12.868C12.0469 12.9091 12.1351 12.8996 12.1723 12.9182C12.2358 12.9504 12.2614 13.0148 12.2595 13.0832C12.2572 13.1629 12.2563 13.9267 12.2533 14.9793C11.3346 14.9739 10.416 14.9684 9.49738 14.9629C9.47951 14.7328 9.47353 14.4747 9.48984 14.1939C9.50486 13.9351 9.53768 13.6773 9.58786 13.4231C9.60983 13.3118 9.63512 13.2011 9.66365 13.0913C9.69498 12.9706 9.78124 12.8225 9.77207 12.6962C9.7709 12.6793 9.76694 12.6619 9.75634 12.6487C9.73164 12.6179 9.68432 12.6229 9.64623 12.6328C9.4123 12.6933 9.18486 12.8192 9.00566 12.9821C8.9506 13.0322 8.80312 13.1733 8.66948 13.4147C8.31581 14.0534 8.28812 14.9579 8.28812 14.9579C8.27025 15.5428 8.24737 16.7279 8.86519 17.9583C8.86519 17.9583 9.29822 18.8208 9.91741 19.0334C10.0397 19.0754 10.073 19.0476 10.0835 19.0339C10.1318 18.9715 10.0282 18.8642 9.99762 18.8166C9.9412 18.7286 9.89297 18.6353 9.85144 18.5394C9.76551 18.3408 9.70863 18.1306 9.66619 17.9187C9.53684 17.2737 9.45318 16.6209 9.47106 15.9623H12.2533V18.438C12.2533 18.6022 12.3197 18.7598 12.4698 18.8369C12.5602 18.8834 12.6626 18.8998 12.7633 18.9124C12.9397 18.9344 13.1196 18.9468 13.294 18.9129C13.3961 18.8932 13.4979 18.856 13.5741 18.7847C13.6968 18.6698 13.6987 18.5143 13.6987 18.3577C13.6987 17.1142 13.7102 15.8706 13.7087 14.6271C13.7083 14.3187 13.7062 14.0103 13.7025 13.7019C13.6975 13.2831 13.5685 12.8613 13.2017 12.6264C13.0433 12.525 12.8618 12.4694 12.6844 12.4694C12.4618 12.4694 12.2457 12.5567 12.0895 12.7505Z" fill="url(#paint1_linear_101_681)"></path><path d="M7.74825 14.2574C7.38263 14.6981 7.35377 15.2125 7.33602 15.724C7.29449 16.9245 7.72908 17.7786 7.82645 17.9623C8.04511 18.3746 8.28249 18.6461 8.35262 18.7243C8.60248 19.0029 8.85332 19.1965 9.04572 19.3247C8.89316 19.287 8.67704 19.2152 8.44609 19.0718C8.23231 18.939 8.07975 18.7906 7.97946 18.677C7.83464 18.4903 7.73278 18.326 7.6659 18.209C7.48741 17.897 7.26498 17.5082 7.15162 16.987C7.1197 16.8407 7.09825 16.6919 7.04118 16.686C6.95876 16.6776 6.86562 16.9738 6.84553 17.0378C6.78047 17.2444 6.76402 17.4349 6.76519 17.5361C6.76994 17.9291 7.06205 18.6943 7.76125 19.2133C7.76125 19.2133 8.37238 19.6671 9.41758 19.702C9.46022 19.7034 9.71346 19.6974 9.90118 19.5619C9.99355 19.4953 10.0546 19.3931 9.89065 19.3447C8.76778 19.0134 8.32981 17.8142 8.09002 16.7739C8.03776 16.5473 7.98797 16.3239 7.95827 16.0922C7.86863 15.3929 7.8724 14.6238 8.09737 13.9491C7.92603 13.9879 7.84842 14.1366 7.74825 14.2574Z" fill="url(#paint2_linear_101_681)"></path><path d="M8.09717 13.9492C8.09871 13.9489 8.09997 13.9482 8.10151 13.9479L8.09857 13.945C8.09808 13.9464 8.09766 13.9478 8.09717 13.9492Z" fill="url(#paint3_linear_101_681)"></path><path d="M8.09863 13.9445L8.10136 13.9473L8.11443 13.9291C8.11443 13.9291 8.09857 13.9444 8.09863 13.9445Z" fill="url(#paint4_linear_101_681)"></path><path d="M27.5869 12.4839C27.5363 12.4846 27.4858 12.4876 27.4352 12.4876C27.3651 12.4882 27.2951 12.4895 27.2249 12.49C27.1771 12.4905 27.1292 12.4904 27.0813 12.4903C26.9928 12.4902 26.9041 12.49 26.8157 12.4931C26.6934 12.4979 26.579 12.5399 26.4922 12.6321C26.3888 12.7414 26.3067 12.8974 26.1698 13.232C26.1469 13.2872 26.1291 13.334 26.1164 13.3662C26.0647 13.4797 25.3303 15.0839 25.0534 15.5484C25.0333 15.583 24.9879 15.657 24.9315 15.6546C24.8752 15.657 24.8298 15.583 24.8097 15.5484C24.5328 15.0839 23.7983 13.4797 23.7466 13.3662C23.734 13.334 23.7162 13.2872 23.6932 13.232C23.5565 12.8974 23.4742 12.7414 23.3708 12.6321C23.284 12.5399 23.1697 12.4979 23.0473 12.4931C22.9589 12.49 22.8703 12.4902 22.7817 12.4903C22.7338 12.4904 22.686 12.4905 22.6381 12.49C22.5681 12.4895 22.4979 12.4882 22.4279 12.4876C22.3773 12.4876 22.3267 12.4846 22.2762 12.4839C22.2032 12.4834 22.1348 12.507 22.0727 12.5465C21.9578 12.6212 21.9084 12.7305 21.8906 12.7718C21.8572 12.8477 21.8509 12.9132 21.8457 12.9405C21.7952 13.198 21.79 13.4117 21.7946 13.5556C21.7412 15.2065 21.6877 16.8569 21.6343 18.5077C21.636 18.535 21.6412 18.5733 21.6561 18.6158C21.74 18.8574 22.044 18.9765 22.2784 18.9794C22.5152 18.9825 22.7979 18.8696 22.8979 18.6503C22.899 18.6479 22.9174 18.6054 22.9272 18.5582C22.9967 18.2218 23.037 15.5143 23.0519 14.3346C23.6926 15.6589 24.1942 16.6486 24.4259 17.0851C24.473 17.175 24.5735 17.3553 24.7586 17.4166C24.812 17.4349 24.8711 17.4445 24.9315 17.4452C24.9919 17.4445 25.0511 17.4349 25.1045 17.4166C25.2895 17.3553 25.39 17.175 25.4372 17.0851C25.6688 16.6486 26.1704 15.6589 26.8111 14.3346C26.8261 15.5143 26.8663 18.2218 26.9359 18.5582C26.9457 18.6054 26.964 18.6479 26.9652 18.6503C27.0652 18.8696 27.3479 18.9825 27.5846 18.9794C27.8191 18.9765 28.1231 18.8574 28.2069 18.6158C28.222 18.5733 28.2271 18.535 28.2288 18.5077C28.1753 16.8569 28.1219 15.2065 28.0685 13.5556C28.073 13.4117 28.068 13.198 28.0173 12.9405C28.0121 12.9132 28.0058 12.8477 27.9726 12.7718C27.9547 12.7305 27.9053 12.6212 27.7904 12.5465C27.729 12.5075 27.6616 12.4839 27.5896 12.4839C27.5887 12.4839 27.5878 12.4839 27.5869 12.4839Z" fill="url(#paint5_linear_101_681)"></path><path d="M16.6526 17.4643C16.6671 17.4661 16.6809 17.4692 16.6941 17.4729C16.6941 17.474 16.6935 17.4746 16.6929 17.4759C16.6821 17.4941 16.6442 17.4837 16.6526 17.4643Z" fill="white"></path><path d="M19.1412 12.6711C19.0494 12.7739 19.0245 12.8954 19.0167 12.9687C19.0128 14.187 19.0089 15.4052 19.0051 16.6234C19.0074 16.7428 18.9955 16.9674 18.8761 17.2147C18.75 17.4758 18.5713 17.6234 18.5254 17.66C18.5254 17.66 18.2212 17.9023 17.8234 17.9348C17.7836 17.9381 17.7418 17.9395 17.7418 17.9395C17.7313 17.9399 17.7209 17.9402 17.7104 17.9402C17.6999 17.9402 17.6895 17.9399 17.6791 17.9395C17.679 17.9395 17.6372 17.9381 17.5974 17.9348C17.1996 17.9023 16.8953 17.66 16.8953 17.66C16.8495 17.6234 16.6708 17.4758 16.5448 17.2147C16.4254 16.9674 16.4134 16.7428 16.4157 16.6234C16.4118 15.4052 16.408 14.187 16.4042 12.9687C16.3964 12.8954 16.3714 12.7739 16.2796 12.6711C16.1144 12.486 15.8507 12.4934 15.6432 12.4991C15.4246 12.5052 15.1969 12.5114 15.0637 12.6812C14.9591 12.8145 14.9674 12.979 14.9757 13.0506V16.8757C14.9757 17.2316 15.0772 17.7032 15.4155 18.1508C15.7956 18.6536 16.3356 18.8777 16.5021 18.9401C16.8394 19.0665 17.1714 19.1018 17.2731 19.1121C17.4494 19.1299 17.5994 19.1308 17.7104 19.1273C17.8214 19.1308 17.9715 19.1299 18.1478 19.1121C18.2494 19.1018 18.5814 19.0665 18.9187 18.9401C19.0852 18.8777 19.6251 18.6536 20.0053 18.1508C20.3436 17.7032 20.4451 17.2316 20.4451 16.8757V13.0506C20.4535 12.979 20.4617 12.8145 20.3571 12.6812C20.224 12.5114 19.9963 12.5052 19.7776 12.4991C19.7403 12.498 19.701 12.497 19.6609 12.497C19.4783 12.497 19.2766 12.5194 19.1412 12.6711Z" fill="url(#paint6_linear_101_681)"></path><path d="M16.9624 19.043C16.9739 19.0447 16.985 19.048 16.9954 19.0527C16.9952 19.0525 16.9762 19.0645 16.9762 19.0645L16.9624 19.043Z" fill="white"></path><path d="M30.3229 12.9807C29.8142 13.3663 29.4397 13.9073 29.2566 14.5217C28.7334 16.285 29.5203 18.5345 31.4043 19.0318C31.7083 19.112 32.0209 19.1459 32.3327 19.1374C32.6446 19.1459 32.9571 19.112 33.2611 19.0318C35.1451 18.5345 35.9321 16.285 35.4089 14.5217C35.2258 13.9073 34.8512 13.3663 34.3425 12.9807C33.7657 12.5442 33.0511 12.3152 32.3327 12.2982C31.6144 12.3152 30.8997 12.5442 30.3229 12.9807ZM30.6553 16.4901C30.4656 15.6857 30.5005 14.7385 30.9473 14.0208C31.2568 13.5235 31.783 13.229 32.3327 13.2248C32.8824 13.229 33.4086 13.5235 33.7181 14.0208C34.165 14.7385 34.1998 15.6857 34.0101 16.4901C33.8133 17.325 33.2635 18.2224 32.3327 18.2321C31.4019 18.2224 30.8522 17.325 30.6553 16.4901Z" fill="url(#paint7_linear_101_681)"></path></g><defs><linearGradient id="paint0_linear_101_681" x1="27.3787" y1="20.6024" x2="51.6078" y2="13.2266" gradientUnits="userSpaceOnUse"><stop stop-color="#9C8937"></stop><stop offset="0.329003" stop-color="#9C8937"></stop><stop offset="0.330336" stop-color="#9C8937"></stop><stop offset="0.560566" stop-color="#F7E59E"></stop><stop offset="0.627021" stop-color="#F7E59E"></stop><stop offset="0.787549" stop-color="#B39F4D"></stop><stop offset="1" stop-color="#B39F4D"></stop></linearGradient><linearGradient id="paint1_linear_101_681" x1="12.3708" y1="16.4826" x2="7.88808" y2="13.1186" gradientUnits="userSpaceOnUse"><stop stop-color="#9C8937"></stop><stop offset="0.329003" stop-color="#9C8937"></stop><stop offset="0.330336" stop-color="#9C8937"></stop><stop offset="0.560566" stop-color="#F7E59E"></stop><stop offset="0.627021" stop-color="#F7E59E"></stop><stop offset="0.787549" stop-color="#B39F4D"></stop><stop offset="1" stop-color="#B39F4D"></stop></linearGradient><linearGradient id="paint2_linear_101_681" x1="10.7064" y1="18.7006" x2="6.22368" y2="15.3367" gradientUnits="userSpaceOnUse"><stop stop-color="#9C8937"></stop><stop offset="0.329003" stop-color="#9C8937"></stop><stop offset="0.330336" stop-color="#9C8937"></stop><stop offset="0.560566" stop-color="#F7E59E"></stop><stop offset="0.627021" stop-color="#F7E59E"></stop><stop offset="0.787549" stop-color="#B39F4D"></stop><stop offset="1" stop-color="#B39F4D"></stop></linearGradient><linearGradient id="paint3_linear_101_681" x1="12.3259" y1="17.1298" x2="7.54707" y2="13.4942" gradientUnits="userSpaceOnUse"><stop stop-color="#9C8937"></stop><stop offset="0.329003" stop-color="#9C8937"></stop><stop offset="0.330336" stop-color="#9C8937"></stop><stop offset="0.560566" stop-color="#F7E59E"></stop><stop offset="0.627021" stop-color="#F7E59E"></stop><stop offset="0.787549" stop-color="#B39F4D"></stop><stop offset="1" stop-color="#B39F4D"></stop></linearGradient><linearGradient id="paint4_linear_101_681" x1="12.0325" y1="16.9336" x2="7.54919" y2="13.5696" gradientUnits="userSpaceOnUse"><stop stop-color="#9C8937"></stop><stop offset="0.329003" stop-color="#9C8937"></stop><stop offset="0.330336" stop-color="#9C8937"></stop><stop offset="0.560566" stop-color="#F7E59E"></stop><stop offset="0.627021" stop-color="#F7E59E"></stop><stop offset="0.787549" stop-color="#B39F4D"></stop><stop offset="1" stop-color="#B39F4D"></stop></linearGradient><linearGradient id="paint5_linear_101_681" x1="28.8765" y1="17.8695" x2="21.927" y2="14.2141" gradientUnits="userSpaceOnUse"><stop stop-color="#9C8937"></stop><stop offset="0.329003" stop-color="#9C8937"></stop><stop offset="0.330336" stop-color="#9C8937"></stop><stop offset="0.560566" stop-color="#F7E59E"></stop><stop offset="0.627021" stop-color="#F7E59E"></stop><stop offset="0.787549" stop-color="#B39F4D"></stop><stop offset="1" stop-color="#B39F4D"></stop></linearGradient><linearGradient id="paint6_linear_101_681" x1="21.1189" y1="17.5267" x2="14.1622" y2="13.2076" gradientUnits="userSpaceOnUse"><stop stop-color="#9C8937"></stop><stop offset="0.329003" stop-color="#9C8937"></stop><stop offset="0.330336" stop-color="#9C8937"></stop><stop offset="0.560566" stop-color="#F7E59E"></stop><stop offset="0.627021" stop-color="#F7E59E"></stop><stop offset="0.787549" stop-color="#B39F4D"></stop><stop offset="1" stop-color="#B39F4D"></stop></linearGradient><linearGradient id="paint7_linear_101_681" x1="37.2169" y1="18.5953" x2="28.5706" y2="13.6188" gradientUnits="userSpaceOnUse"><stop stop-color="#9C8937"></stop><stop offset="0.329003" stop-color="#9C8937"></stop><stop offset="0.330336" stop-color="#9C8937"></stop><stop offset="0.560566" stop-color="#F7E59E"></stop><stop offset="0.627021" stop-color="#F7E59E"></stop><stop offset="0.787549" stop-color="#B39F4D"></stop><stop offset="1" stop-color="#B39F4D"></stop></linearGradient><clipPath id="clip0_101_681"><rect width="52" height="32" fill="white"></rect></clipPath></defs></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="footer__section__bottom">
                        <span className='footer__section__bottom__namber'>© 2017-2023. 000 "Olcha store"</span>
                        <a className='departments__aaa' href="">Ommaviy ofe</a>
                        <a className='departments__aaa' href="#">Maxviylik siyosati</a>
                        <div className="iconr">
                            <svg className=' departments__aa__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                            <svg className=' departments__aa__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            <svg className=' departments__aa__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg>
                        </div>

                    </div>
                </footer>
            </div>
            )}



        </React.Fragment>
    );
}

export default shop;








//  <button
//                     className={card ? "burger" : "burger btn_close"}
//                     onClick={handleCard}
//                 >
//                     <span>

//                     </span>
//                     <span></span>
//                     <span></span>

//                 </button> 
{/* <div className="nav__media__icons">

<span className='nav__media__icon__text'>
    <p>Sevililar</p>
    <svg className='svg__media__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
</span>
<span className='nav__media__icon__text'>
    <p>Savatcha</p>
    <svg className='svg__media__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
</span>
<span className='nav__media__icon__text'>
    <p>Kirish</p>
    <svg className='svg__media__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
</span>
    </div>*/}