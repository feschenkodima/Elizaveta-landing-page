import urls from "../config_urls/urls.json";
const axios = require("axios");

export async function getAllGallery() {
  try {
    return await axios
      .get(`${urls.BASE_URL}${urls.GALLERY}`)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    return console.log(error);
  }
}
