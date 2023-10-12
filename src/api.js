// // api.js
// const axios = require('axios');

// function getArticlesWithPage(page) {
//   if (page === null) {
//     return axios
//       .get(
//         "https://newsapi.org/v2/top-headlines?country=in&apiKey=157f8e8eac304c9e9fafe0e52b6e1259&page=" +
//           page
//       )
//       .then(function (res) {
//         return res;
//       });
//   } else {
//     return axios
//       .get(
//         "https://newsapi.org/v2/top-headlines?country=in&apiKey=157f8e8eac304c9e9fafe0e52b6e1259&page=" +
//           page
//       )
//       .then(function (res) {
//         return res;
//       });
//   }
// }

// module.exports = {
//   getArticlesWithPage,
// };
