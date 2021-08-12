import React from 'react'

const PaginationHome = (props) => {
  const { current, totalPage, onPageChange } = props
 
  let arr = [...Array(totalPage)]
  const handleOnPageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage)
    }
  }



  const exportPageButton = arr.map((value, index) => {
    return <div key={index} className={index + 1 === current ? "page-item active" : "page-item"} aria-current="page">
      <button className="page-link" onClick={() => handleOnPageChange(index + 1)} >{index + 1} </button>
    </div>
  })
  return (
    <div >
      <nav aria-label="...">
        <div className="pagination pagination-circle">
          <button type="button" className="btn btn-dark btn-floating mx-1"
          onClick={() => handleOnPageChange(1)}
           disabled={current === 1} >
            <i className="fas fa-angle-double-left"></i>
          </button>
          <button type="button" className="btn btn-dark btn-floating mx-1"
           onClick={() => handleOnPageChange(current - 1)} disabled={current === 1}>
            <i className="fas fa-angle-left"></i>
          </button>
        
          {exportPageButton}
          <button type="button" className="btn btn-dark btn-floating mx-1"
            onClick={() => handleOnPageChange(current + 1)} 
            disabled={current === totalPage}>
            <i className="fas fa-angle-right"></i>
          </button>
          <button type="button" className="btn btn-dark btn-floating mx-1" 
           onClick={() => handleOnPageChange(totalPage)}
          disabled={current === totalPage}>
            <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
      </nav>
      <div className="w-100" style={{ height: "20px" }}></div>
    </div>
  )
}

export default PaginationHome
