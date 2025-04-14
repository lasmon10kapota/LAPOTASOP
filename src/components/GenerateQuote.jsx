import React from 'react';
import general from './General.json';
import family from './Family.json';
import lastevents from './LastEvents.json';
import marriage from './Marriage.json';
import salvation from './Salvation.json';
import victory from './Victory.json';
import youth from './Youth.json';

const categories = {
    general,
    youth,
    marriage,
    family,
    salvation,
    victory,
    lastevents
};

function GenerateQuote() {
    const [selectedCategory, setSelectedCategory] = React.useState("general");
    const [count, setCount] = React.useState(Math.floor(Math.random() * categories[selectedCategory].length));


    const maxLength = categories[selectedCategory].length;


    function handleSelectedCategory(e) {
        setSelectedCategory(e.target.value);
        setCount(Math.floor(Math.random() * categories[e.target.value].length)); // reset count when category changes
    }


    function getRandomQuote() {
        setCount(Math.floor(Math.random() * maxLength));
    }


    function getNextQuote() {
        setCount((prevCount) => (prevCount === maxLength - 1 ? 0 : prevCount + 1));
    }


    function getPreviousQuote() {
        setCount((prevCount) => (prevCount === 0 ? maxLength - 1 : prevCount - 1));
    }

    return (
        <div>
            <div className="heading">
                <h2>Lapota SOP Quote Generator</h2>
            </div>
            <div className='welcome_div'>
                <div className="quote_holder">
                    <p style={{ color: 'darkcyan' }}>
                        Welcome to <i><strong>SOP quote generator (Spirit of Prophecy)</strong></i>! Scripture-based.
                    </p>
                </div>
            </div>
            <div className="quote_section">
                <hr />
                <div className='buttons_holder'>
                    <button className='button_style' onClick={getPreviousQuote}>Prev</button>
                    <button className='button_style' onClick={getRandomQuote}>Get Quote</button>
                    <div>
                        <select className='button_style' value={selectedCategory} onChange={handleSelectedCategory}>
                            <option value="general">Choose Category</option>
                            <option value="youth">Youth</option>
                            <option value="marriage">Marriage</option>
                            <option value="family">Family</option>
                            <option value="salvation">Salvation</option>
                            <option value="victory">Victory</option>
                            <option value="lastevents">Last Events</option>
                        </select>
                    </div>
                    <button className='button_style' onClick={getNextQuote}>Next</button>

                </div>

                <hr />
                <div className="variable_quote_holder">
                    <h2 style={{ textAlign: 'center', color: 'white' }}>Enjoy SOP Quotes</h2>
                    <hr />
                    <p><b>{categories[selectedCategory][count].quotation}</b></p>
                    <div className="playback_btns">
                        <h4 style={{ color: 'darkred' }}>{categories[selectedCategory][count].reference}</h4>
                    </div>
                </div>
            </div>
            <footer>
                <h2 title="@ Lasmon Kapota; email: lsmnkapota@gmail.com">&copy; LK Soft Development 2024</h2>
            </footer>
        </div>
    );
}

export default GenerateQuote;