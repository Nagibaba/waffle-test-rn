import { instance } from "../../../common/axiosInstance";

const API_KEY = "Era4Oo2IXqd9rz1EZTGPEEht9RUzfB6f";

export const getGifs = (q) => {
	return instance
		.get(
			`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=15`
		)
		.then(({ data: { data } }) => data);
};
