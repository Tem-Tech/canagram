import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

type Phonetic = {
    text: string;
    audio: string;
};

type Definition = {
    definition: string;
    example?: string;
};

type Meaning = {
    partOfSpeech: string;
    definitions: Definition[];
};

const Dictionary = () => {
    const { word } = useParams<{ word: string }>();
    const navigate = useNavigate();
    const [searchedWord, setSearchedWord] = useState(word || '');
    const [fetchedWord, setFetchedWord] = useState('');
    const [meanings, setMeanings] = useState<Meaning[]>([]);
    const [phonetics, setPhonetics] = useState<Phonetic[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState<string>('');


    const fetchDefinition = async (searchTerm: string) => {
        if (!searchTerm) return;
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
            if (!response.ok) throw new Error('Word not found');

            const data = await response.json();
            if (data.length > 0) {
                setMeanings(data[0].meanings);
                setPhonetics(data[0].phonetics);
                setFetchedWord(searchTerm);
            } else {
                setError('No definitions found.');
                setMeanings([]);
            }
        } catch (error) {
            setError('Error fetching word definition');
            console.error('Error fetching word definition:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (word) {
            fetchDefinition(word);
        }
    }, [word]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedWord(event.target.value);
    };

    const handleSearch = () => {
        if (searchedWord) {
            navigate(`/canagram/dictionary/${searchedWord}`);
            fetchDefinition(searchedWord);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && searchedWord) {
            handleSearch();
        }
    };

    const resetDictionary = () => {
        setSearchedWord('');
        setMeanings([]);
        setPhonetics([]);
        setSelectedPartOfSpeech('');
        setError(null);
        navigate('/dictionary');
    };

    const playAudio = (audioUrl: string) => {
        const audio = new Audio(audioUrl);
        audio.play();
    };
    const handlePartOfSpeechChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPartOfSpeech(event.target.value);
    };

    const filteredMeanings = selectedPartOfSpeech
        ? meanings.filter((meaning) => meaning.partOfSpeech === selectedPartOfSpeech)
        : meanings;

    const partsOfSpeech = [...new Set(meanings.map((meaning) => meaning.partOfSpeech))]; 
    return (
        <div className="dictionary">
            <input
                type="text"
                value={searchedWord}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a word..."
            />
            <div className="dictionary__buttons">
                <button className="dictionary__searchButton" onClick={handleSearch} disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
                <button className="dictionary__resetButton" onClick={resetDictionary}>
                    Reset
                </button></div>

            {error && <p className="dictionary__error">{error}</p>}

            {!loading && meanings.length > 0 && (
                <div className="dictionary__result">
                    <h2 className="dictionary__word">{fetchedWord.charAt(0).toUpperCase() + fetchedWord.slice(1)}</h2>

                    {phonetics.length > 0 && (
                        <div className="dictionary__phonetics">

                            <div className="dictionary__phonetic">
                                <small>{phonetics[0].text}</small>
                                {phonetics[0].audio && (
                                    <button className="dictionary__phonetic wordSound" onClick={() => playAudio(phonetics[0].audio)}>
                                        🔊
                                    </button>
                                )}
                            </div>

                        </div>
                    )}
                       <label htmlFor="partOfSpeech">Part of speech:</label>
                    <select
                        id="partOfSpeech"
                        value={selectedPartOfSpeech}
                        onChange={handlePartOfSpeechChange}
                        className="dictionary__filter"
                    >
                        <option value="">All</option>
                        {partsOfSpeech.map((partOfSpeech) => (
                            <option key={partOfSpeech} value={partOfSpeech}>
                                {partOfSpeech}
                            </option>
                        ))}
                    </select>
                    <div className="dictionary__meanings">
                        {filteredMeanings.map((meaning, index) => (
                            <div key={index} className="dictionary__meaning">
                                <p><span>{meaning.partOfSpeech + " "}</span>
                                    {meaning.definitions[0].definition}</p>
                                {meaning.definitions[0].example && (
                                    <p className="dictionary__example">
                                        "{meaning.definitions[0].example}"
                                    </p>
                                )}
                                {/* {meaning.definitions.map((def, defIndex) => (
                                <div key={defIndex} className="dictionary__definition">
                                    <p>{def.definition}</p>
                                    {def.example && <p className="dictionary__example"><em>"{def.example}"</em></p>}
                                </div>
                            ))} */}
                            </div>
                        ))}
                    </div>
                </div>
            )}</div>
    );
};

export default Dictionary;
