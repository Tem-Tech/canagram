import { useState } from 'react';
import './../styles/__dictionary.scss';

type Meaning = {
    partOfSpeech: string;
    definitions: { definition: string; example?: string }[];
};

type Phonetic = {
    text: string;
    audio: string;
};

const Dictionary = () => {
    const [word, setWord] = useState('');
    const [meanings, setMeanings] = useState<Meaning[]>([]);
    const [phonetics, setPhonetics] = useState<Phonetic[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchDefinition = async () => {
        if (!word) return;
        setLoading(true);
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();


            if (data.length > 0) {
                setMeanings(data[0].meanings); 
                setPhonetics(data[0].phonetics); 
            } else {
                setMeanings([]);
            }
        } catch (error) {
            console.error('Error fetching word definition:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            fetchDefinition();
        }
    };

    const playAudio = (audioUrl: string) => {
        const audio = new Audio(audioUrl);
        audio.play();
    };

    return (
        <div className="dictionary">
            <input
                type="text"
                value={word}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a word..."
            />
            <button className="searchButton" onClick={fetchDefinition} disabled={loading}>
                {loading ? 'Loading...' : 'Search'}
            </button>

            {meanings.length > 0 && (
                <div className="dictionary__result">
                    <h2>{word.charAt(0).toUpperCase() + word.slice(1)}</h2>
                    {phonetics.length > 0 && (
                        <div>
                            <small>{phonetics[0].text}</small>
                            {phonetics[0].audio && (
                                <button className="wordSound" onClick={() => playAudio(phonetics[0].audio)}>
                                    🔊
                                </button>
                            )}
                        </div>
                    )}


                    <h4>Definition:</h4>

                    <div className="dictionary__meanings">
                        {meanings.map((meaning, index) => (
                            <div key={index} className="dictionary__meaning">
                                <p>
                                    <span>
                                        {meaning.partOfSpeech + "  "}
                                    </span>
                                    {meaning.definitions[0].definition}
                                </p>
                                {meaning.definitions[0].example && (
                                    <p className="dictionary__example">
                                        "{meaning.definitions[0].example}"
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dictionary;
