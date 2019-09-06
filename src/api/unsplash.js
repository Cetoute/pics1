import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 7f459fd8a6b3bf9ca18bb8bdf82c47bb892befcd45ded0b50b6552880d8b36cd'
	}
});
