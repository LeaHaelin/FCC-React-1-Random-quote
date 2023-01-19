import React from 'react';
import axios from 'axios';
import iconTwitter from '../images/twitter.png';


export const Quote = ({ quote, setQuote, itemStyles, backgroundStyles }) => {
    //quoteHandler - when it clicks, get a quote and author
    const quoteHandler = () => {
        axios.get(`https://type.fit/api/quotes`).then(response => {
            setQuote(response.data[Math.floor(Math.random() * response.data.length)]);
            console.log(response.data[Math.floor(Math.random() * response.data.length)]);
        })
    }

    return (
        <div className='quote' id='quote-box'>
            <h2 className='quote__text' id='text' style={itemStyles}>{quote.text}</h2>
            <p className='quote__author' id='author' style={itemStyles}>{quote.author}</p>
            <div className='quote__btns'>
                <a className='quote__btns--twitter' id='tweet-quote' href='https://twitter.com/intent/tweet'>
                    <img className='quote__btns--icon' src={iconTwitter} alt="twitter-icon" style={backgroundStyles} /></a>
                <button className='quote__btns--new' id='new-quote' onClick={quoteHandler} style={backgroundStyles} >new quote</button>
            </div>
        </div>
    )
}
