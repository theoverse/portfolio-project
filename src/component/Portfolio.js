/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ewallet from "../images/ewallet.PNG";
import profinder from "../images/profinder.PNG";
import contactmanager from "../images/contact-manager.PNG";
import thebicycleshop from "../images/the-bicycle-shop.PNG";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX IMPORTS
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // ewallet
    const openPopupboxEwallet = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={ewallet} alt="ewallet project snapshot..." />
                <p>Working with DOM and LocalStorage, utilizing localstorage-api and dom-manipulation:</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() =>
                    window.open("https://theoverse.github.io/eWallet/")}>
                    https://theoverse.github.io/eWallet/</a> <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() =>
                    window.open("https://github.com/theoverse/eWallet")}>
                    https://github.com/theoverse/eWallet</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigEwallet = {
        titleBar: {
            enable: true,
            text: "eWallet"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // proFinder
    const proFinder = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={profinder} alt="profinder project snapshot..." />
                <p>Working with DOM, Github API, and Async Programming:</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() =>
                    window.open("https://theoverse.github.io/profinder/")}>
                    https://theoverse.github.io/profinder/</a> <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() =>
                    window.open("https://github.com/theoverse/profinder")}>
                    https://github.com/theoverse/profinder</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProFinder = {
        titleBar: {
            enable: true,
            text: "proFinder"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // contactManager
    const contactManager = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={contactmanager} alt="contact-manager project snapshot..." />
                <p>Working with DOM, Github API, and Async Programming:</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() =>
                    window.open("https://theoverse.github.io/contact-manager")}>
                    https://theoverse.github.io/contact-manager</a> <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() =>
                    window.open("https://github.com/theoverse/contact-manager")}>
                    https://github.com/theoverse/contact-manager</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigContactManager = {
        titleBar: {
            enable: true,
            text: "Contact Manager"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // theBicycleShop
    const theBicycleShop = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={thebicycleshop} alt="the-bicycle-shop project snapshot..." />
                <p>Working with DOM, Github API, and Async Programming:</p>
                <b>Demo:</b> <a className="hyper-link" onClick={() =>
                    window.open("https://the-bicycle-shop-expressjs.herokuapp.com/")}>
                    https://the-bicycle-shop-expressjs.herokuapp.com/</a> <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() =>
                    window.open("https://github.com/theoverse/the-bicycle-shop-expressjs")}>
                    https://github.com/theoverse/the-bicycle-shop-expressjs</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigTheBicycleShop = {
        titleBar: {
            enable: true,
            text: "The Bicycle Shop"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-img-box" onClick={openPopupboxEwallet}>
                        <img className="portfolio-img" src={ewallet} alt="ewallet project snapshot..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="portfolio-img-box" onClick={proFinder}>
                        <img className="portfolio-img" src={profinder} alt="profinder project snapshot..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="portfolio-img-box" onClick={contactManager}>
                        <img className="portfolio-img" src={contactmanager} alt="contact-manager project snapshot..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="portfolio-img-box" onClick={theBicycleShop}>
                        <img className="portfolio-img" src={thebicycleshop} alt="the-bicycle-shop project snapshot..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigEwallet} />
            <PopupboxContainer {...popupboxConfigProFinder} />
            <PopupboxContainer {...popupboxConfigContactManager} />
            <PopupboxContainer {...popupboxConfigTheBicycleShop} />
        </div >
    )
}

export default Portfolio