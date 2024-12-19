import React from 'react'
import myquote from './Quotes.json'

function GenerateQuote() {
    const maxLength = myquote.length;
    const randQuoteCount = Math.floor(Math.random() * maxLength);
    const [count, setCount] = React.useState(randQuoteCount);

    function getRandomQuote() {
        setCount(count => randQuoteCount)
    }
    function getNextQuote() {
        if (count === maxLength - 1) {
            setCount(count => 0)
        }
        setCount(count => count + 1)
    }

    function getPreviousQuote() {
        if (count === 0) {
            setCount(count => maxLength - 1)
        }
        setCount(count => count - 1)
    }

    return (
        <div>
            <div className="heading">
                <h2>Lapota SOP Quote Generator</h2>
            </div>
            <div className='welcome_div'>
                <div className="quote_holder">
                    <p style={{ color: 'darkcyan' }}>
                        Welcome to SOP quote generator! The SOP stands for Spirit of Prophecy.
                        These are quotes that are in harmony with scriptures.
                        Study them and you will find hope and joy from them.
                    </p>
                    <p style={{ color: 'darkcyan' }}>
                        If you want to get in touch with me, you can contact me through the email 'lsmnkapota@gmail.com'.
                    </p>
                </div>
            </div>
            <div className="quote_section">
                <hr />
                <div className='buttons_holder'>
                    <button onClick={getPreviousQuote}>Back</button>
                    <button onClick={getRandomQuote}>Get Quote</button>
                    <button onClick={getNextQuote}>Next</button>
                </div>
                <hr />
                <div className="variable_quote_holder">
                    <h2 style={{ textAlign: 'center', color: 'white' }}>Enyoy SOP Quotes</h2>
                    <hr />
                    <p><b>{myquote[count].quotation}</b></p>
                    <h4 style={{ color: 'darkred' }}>{myquote[count].reference}</h4>
                </div>
            </div>
            <footer>
                <h2 title="@ Lasmon Kapota; email: lsmnkapota@gmail.com">&copy; LK Soft Development 2024</h2>
            </footer>
        </div>

    )
}

export default GenerateQuote