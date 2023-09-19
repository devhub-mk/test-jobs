import { useMemo, useState } from "react";
import "./App.css";
import data from "./data.json";
import Pagination from "./components/Pagination";

let pageSize = 12;

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="container">
      <div className="flex">
        {currentData.map((item) => {
          return (
            <div className="comments">
              <div className="user-info">
                <div>{item.name}</div>
                <div>{item.email}</div>
              </div>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
      <Pagination className="pagination-bar" currentPage={currentPage} totalCount = {data.length} pageSize={pageSize} onPageChange={page=>setCurrentPage(page)}/>
    </div>
  );
}

export default App;
