import { useState, useEffect } from 'react'
import CharactersCard from './CharactersCard';
import './Characters.css'

const API_URL = 'https://www.breakingbadapi.com/api/characters';

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [searchFor, setSearchFor] = useState([]);


    useEffect(() => {
        getBreakingBad();
    }, []);


    const getBreakingBad = async () => {
        const response = await fetch(`${API_URL}?name=${searchFor}`);
        const data = await response.json();
        setCharacters(data);
    }


    return (
        <>

            <div className='container nh-container'>
                <input
                    type='text'
                    className='form-control my-3'
                    placeholder='Search a Character'
                    value={searchFor}
                    onChange={(e) => {
                        setSearchFor(e.target.value);
                        e.target.value === '' && getBreakingBad('')
                    }}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            getBreakingBad();
                        }
                    }}
                />

                
            
            
                {
                    characters?.length > 0
                        ? (
                            characters.map(character =>
                                <CharactersCard key={character.char_id} character={character} />
                            )
                        )
                        : (
                            <h1>There is no {searchFor} here</h1>
                        )
                }                
            </div>

        </>
    )
}

export default Characters