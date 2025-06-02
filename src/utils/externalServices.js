import axios from 'axios';
import createHttpError from 'http-errors';

export const fetchFromPythonBackend = async (endpoint, data) => {
  try {
    const response = await axios.post(
      `https://87445432-3df6-4f8f-8aad-4b6d94932672-00-i7r5ts1srsi3.janeway.replit.dev${endpoint}`,
      data,
    );
    return response.data;
  } catch (error) {
    console.error('Python backend error:', error);
    throw createHttpError(
      502,
      `Failed to fetch data from Python service ${error}
      \n for such data: ${JSON.stringify(data)}`,
    );
  }
};
