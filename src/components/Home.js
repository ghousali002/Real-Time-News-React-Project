import React from "react";

function Home({ articles, page, totalPages, handlePageChange, searchArticalName }) {
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

  const check = (img, desc) => {
    return true;
  };

  return (
    <div className="container">
      <h2 style={{ margin: 8 }}>Top-Headlines{searchArticalName?<>: </>:<></>}
      <small>{searchArticalName}</small> </h2>
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {articles.map((element) => (
          <div key={element.url}>
            {check(element.url, element.description) ? (
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
                        {element.title.length > 50 ? element.title.slice(0, 50) : element.title}
                      </h5>
                    </a>
                    <p className="card-text">
                      {element.description ? element.description : <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi animi iusto aliquam ratione tempore deleniti rem, quidem in.</div>}
                    </p>
                    <small>{formatTimestamp(element.publishedAt)}</small>
                    <p className="card-text">
                      {element.source.name ? (
                        <a href={element.url} target="_blank" rel="noreferrer">
                          <strong>Reference: </strong> <small>{element.source.name}</small>
                        </a>
                      ) : (
                        <strong></strong>
                      )}
                    </p>
                  </div>

                </div>
              </div>
            ) : (
              <span></span>
            )}
          </div>
        ))}
      </div>
      <div className="pagination" style={{ marginTop: "50px" }}>
        <ul>
          <li className="pagedisplay" style={{ marginBottom: 2, marginTop: 10 }}>
            <p style={{ marginBottom: 0 }}>
              <b>Page {page}</b>
            </p>
          </li>
          <li className="pagebuttons">
            {page > 1 ? (
              <button
                className="btn btn-dark nextButton"
                onClick={() => handlePageChange(page - 1)}
              >
                &larr; Previous Page
              </button>
            ) : (
              <button
                className="btn btn-dark nextButton"
                disabled
                onClick={() => handlePageChange(page - 1)}
              >
                &larr; Previous Page
              </button>
            )}
            {page < totalPages ? (
              <button
                className="btn btn-dark nextButton"
                onClick={() => handlePageChange(page + 1)}
              >
                Next Page &rarr;
              </button>
            ) : (
              <button
                className="btn btn-dark nextButton"
                disabled
                onClick={() => handlePageChange(page + 1)}
              >
                Next Page &rarr;
              </button>
            )}
          </li>
          <li className="pagedisplay" style={{ marginBottom: 2, marginTop: 10 }}>
          <p style={{ marginBottom: 0 }}>
              <b>Total Page {
              totalPages
              }</b>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
