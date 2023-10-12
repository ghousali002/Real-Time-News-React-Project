// App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchArticleName, setSearchArticleName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, [page]);

  const fetchNews = () => {
    setIsLoading(true);

    let url = "";

    if (!searchTerm) {
      url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=157f8e8eac304c9e9fafe0e52b6e1259&page=${page}`;
    } else {
      url = `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=popularity&apiKey=157f8e8eac304c9e9fafe0e52b6e1259&pageSize=20&page=${page}`;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          console.log("Network response was not good...");
          throw new Error("Network response was not good!!!!");
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setSearchArticleName(searchTerm);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error(
          "Api search limit Finish (This API only has 100 limits in 24 hours {50 in each 12 hours})",
          error
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSearch = () => {
    if (searchTerm) {
      setPage(1); // Reset page to 1 when performing a new search
      fetchNews();
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalResults / 20)) {
      setPage(newPage);
    }
  };

  return (
    <div className="App">
      <Header />
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Home
          articles={articles}
          searchArticalName={searchArticleName}
          page={page}
          totalPages={Math.ceil(totalResults / 20)}
          handlePageChange={handlePageChange}
        />
      )}

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
