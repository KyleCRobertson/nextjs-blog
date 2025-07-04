import { Component } from "react";
import '../styles/global.scss';

export default function App({ Component, pageProps }){
    return (
        <Component {...pageProps} />
    )
}