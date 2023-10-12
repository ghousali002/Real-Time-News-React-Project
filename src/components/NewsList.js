import React, { useState, useEffect } from "react";

const NewsList = ({ category, searchTerm }) => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=716f837f4a154feeaaa2c4f5f6f9a46a&page=${page}&category=${category}&q=${searchTerm}`;
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
          window.scrollTo(0, 0);
        });
    };

    fetchNews();
  }, [page, category, searchTerm]);

  const changePage = (number) => {
    setPage(page + number);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleString("en-US", options);
  };
  
  return (
    <div>
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {articles.map((element) => (
          <div key={element.url}>
            <div className="col" key={element.url}>
              <div className="card">
                <a href={element.url} target="_blank" rel="noreferrer">
                  <img
                    src={element.urlToImage ? element.urlToImage : "./404.jpg"}
                    className="card-img-top"
                    alt="net slow"
                    style={{ height: 280 }}
                  />
                </a>
                <div className="card-body">
                  <a href={element.url} target="_blank" rel="noreferrer">
                    <h5 className="card-title">
                      {element.title.length > 50
                        ? element.title.slice(0, 50)
                        : element.title}
                    </h5>
                  </a>
                  <p className="card-text">
                    {element.description ? (
                      element.description
                    ) : (
                      <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolore modi animi iusto aliquam ratione tempore
                        deleniti rem, quidem in.
                      </div>
                    )}
                  </p>
                  <small>{formatTimestamp(element.publishedAt)}</small>
                  <p className="card-text">
                    {element.source.name ? (
                      <a href={element.url} target="_blank" rel="noreferrer">
                        <strong>Reference: </strong>{" "}
                        <small>{element.source.name}</small>
                      </a>
                    ) : (
                      <strong></strong>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination" style={{ marginTop: "50px" }}>
        <ul>
          <li
            className="pagedisplay"
            style={{ marginBottom: 2, marginTop: 10 }}
          >
            <p style={{ marginBottom: 0 }}>
              <b>Page {page}</b>
            </p>
          </li>
          <li className="pagebuttons">
            {page > 1 ? (
              <button
                className="btn btn-dark nextButton"
                onClick={() => changePage(-1)}
              >
                &larr; Previous Page
              </button>
            ) : (
              <button
                className="btn btn-dark nextButton"
                disabled
                onClick={() => changePage(-1)}
              >
                &larr; Previous Page
              </button>
            )}
            {page * 20 < totalResults ? (
              <button
                className="btn btn-dark nextButton"
                onClick={() => changePage(1)}
              >
                Next Page &rarr;
              </button>
            ) : (
              <button
                className="btn btn-dark nextButton"
                disabled
                onClick={() => changePage(1)}
              >
                Next Page &rarr;
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewsList;
