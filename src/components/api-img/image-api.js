import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const fetchImages = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    headers: {
      Authorization: "Client-ID fTB5WCIWszuD2y8xeHW_8S_0VzUcsEkrkbWKlhMqeBY",
    },
    params: {
      query: searchQuery,
      per_page: 12,
      page,
    },
  });
  return response.data.results;
};
export default fetchImages;
