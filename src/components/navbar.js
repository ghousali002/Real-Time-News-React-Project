import React from "react";

function Navbar({ searchTerm, setSearchTerm, onSearch,  }) {
  const handleSearch = () => {
    console.log("search term:"+searchTerm);
    onSearch(searchTerm);
  };
  
  const buttonPress= (value) =>{
    setSearchTerm(value);
    onSearch(searchTerm);
  }
  var link = [
    { id: "world", text: "World" },
    { id: "business", text: "Business" },
    { id: "sports", text: "Sports" },
    { id: "entertainment", text: "Entertaiment" }
  ]

  return (
    <nav className="navbar" style={{ backgroundColor: "white" }}>
      <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>

        </li>
          {link.map((item) => (
            <li className="nav-item" key={item.id}>
              <button
                className="nav-link"
                style={{
                  border: "none",
                  backgroundColor: "white",
                  fontWeight: "bold"
                }}
                value={item.id}
                onClick={() => buttonPress(item.id)} 
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
