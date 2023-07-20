import React, { useState } from 'react';
import './App.css';

function App() {
    const [formName, setFormName] = useState('');
    const [formAge, setFormAge] = useState(0);
    const [formNewsletter, setFormNewsletter] = useState(false);
    const [formComments, setFormComments] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formComments, formNewsletter, formAge, formName);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        name="name"
                        id="details-name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                    />
                </label>

                <label htmlFor="details-age">
                    Leeftijd:
                    <input
                        type="number"
                        name="age"
                        id="details-age"
                        value={formAge}
                        onChange={(e) => setFormAge(parseInt(e.target.value))}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Jouw review</legend>

                <label htmlFor="recipe-comments">
                    Opmerkingen:
                    <textarea
                        name="comments"
                        id="recipe-comments"
                        rows="4"
                        cols="40"
                        placeholder="Wat vond je van het recept?"
                        value={formComments}
                        onChange={(e) => setFormComments(e.target.value)}
                    >
          </textarea>
                </label>

                <label htmlFor="recipe-newsletter">
                    <input
                        type="checkbox"
                        name="newsletter"
                        checked={formNewsletter}
                        onChange={() => setFormNewsletter(!formNewsletter)}
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>

                <button type="submit">
                    Versturen
                </button>
            </fieldset>
        </form>
    );
}

export default App;