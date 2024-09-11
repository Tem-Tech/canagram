const API_BASE_URL = 'https://api.datamuse.com';

export const fetchWords = async (query: string): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/words?rel_rhy=${query}`);

    if (!response.ok) {
      throw new Error(`Error fetching words: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching words:', error);
    throw error;
  }
};
