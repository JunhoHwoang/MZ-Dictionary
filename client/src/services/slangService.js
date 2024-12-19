import axios from 'axios';

// Create an Axios instance with the base URL for the slang API
const API = axios.create({ baseURL: 'http://localhost:5000/slang' });

// Fetch all slang entries
export const fetchAllSlang = () => API.get('/');

// Fetch a single slang entry by its ID
export const fetchSlangByName = (term) => API.get(`/${term}`);

// Create a new slang entry
export const createSlang = (slangData) => API.post('/', slangData);

// Update an existing slang entry by its ID
export const updateSlang = (id, updatedData) => API.put(`/${id}`, updatedData);

// Delete a slang entry by its ID
export const deleteSlang = (id) => API.delete(`/${id}`);