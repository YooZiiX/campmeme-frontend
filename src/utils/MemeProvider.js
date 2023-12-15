import axios from "axios";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const getMemesByGET = async (url, defining_function) => {
  await axios
    .get(url, config)
    .then((response) => {
      if (response.status === 200) {
        defining_function(response.data);
      } else {
        alert("Erreur lors de la recuperation des memes!");
      }
    });
};

export const getMemesByPOST = async (url, json_body, defining_function) => {
  await axios
    .post(url, json_body, config)
    .then((response) => {
      if (response.status === 200) {
        defining_function(response.data);
      } else {
        alert("Erreur lors de la recuperation des memes!");
      }
    });
};
