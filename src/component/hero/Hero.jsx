// import React, { useState } from "react";
// import { data, datac } from "../data/data";
// import "./hero.css";
// import { Link } from "react-router-dom";
// import Singlecard from "../singlecard/Singlecard";
// import Carousell from "../crousel/Carousell";

// function App({query}) {
//   const itemsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const totalPages = Math.ceil(datac.length / itemsPerPage);

//   // Assuming you want to display all items on the current page
//   const currentItems = datac.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const goToPrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <Carousell />
//       <div className="categories">
//         <h3>Shop by categories</h3>
//         <p>Freshest meats and much more!</p>
//       </div>

//       <div className="h">
//         {data.map((item) => (
//           <Link to={`./category/${item.name}`} className="pitem" key={item.name}>
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{ height: "130px", width: "130px" }}
//             />
//             <p>{item.name}</p>
//           </Link>
//         ))}

//         {/* Display the currentItems if it's defined */}
//         {currentItems.length > 0 && (
//           <div className="p2item">
//             <Singlecard currentItems={currentItems} />
//           </div>
//         )}
//       </div>
//       <div className="ccontainer">
//         <button
//           className="button"
//           onClick={() => goToPrevPage()}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <button
//           className={`button ${currentPage === totalPages ? "disabled" : ""}`}
//           onClick={() => goToNextPage()}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// }
// export default App
import React, { useState, useEffect } from "react";
import { data, datac } from "../data/data";
import "./hero.css";
import { Link } from "react-router-dom";
import Singlecard from "../singlecard/Singlecard";
import Carousell from "../crousel/Carousell";

function Hero({ query }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
console.log(query )
  
  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = datac.filter(item =>
        item.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(datac);
    }
  }, [query]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Carousell />
      <div className="categories">
        <h3>Shop by categories</h3>
        <p>Freshest meats and much more!</p>
      </div>

      <div className="h">
        {data.map((item) => (
          <Link to={`./category/${item.name}`} className="pitem" key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              style={{ height: "130px", width: "130px" }}
            />
            <p>{item.name}</p>
          </Link>
        ))}

        {currentItems.length > 0 && (
          <div className="p2item">
            <Singlecard currentItems={currentItems} />
          </div>
        )}
      </div>

      <div className="ccontainer">
        <button
          className="button"
          onClick={() => goToPrevPage()}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`button ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() => goToNextPage()}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Hero;
