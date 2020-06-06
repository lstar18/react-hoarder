import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getStuff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json`)
    .then((response) => {
      const theItems = response.data;
      const stuff = [];
      if (theItems !== null) {
        Object.keys(theItems).forEach((itemId) => {
          theItems[itemId].id = itemId;
          stuff.push(theItems[itemId]);
        });
      }
      resolve(stuff);
    })
    .catch((err) => reject(err));
});
export default { getStuff };
