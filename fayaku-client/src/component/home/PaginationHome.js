import React, { useState } from 'react'

const PaginationHome = (props) => {
  const { current, totalPage, onPageChange } = props
  // const [curent, setcurent] = useState("")
  // const [currentPage, setcurrentPage] = useState(1)
  let arr = [...Array(totalPage)]
  const handleOnPageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage)
    }
  }
  // arr.fill(5)



  const exportPageButton = arr.map((value, index) => {
    return <div class={index + 1 === current ? "page-item active" : "page-item"} aria-current="page">
      <button class="page-link" onClick={() => handleOnPageChange(index + 1)} >{index + 1} </button>
    </div>
  })
  return (
    <div >
      <nav aria-label="...">
        <div class="pagination pagination-circle">
          <button type="button" class="btn btn-dark btn-floating mx-1"
          onClick={() => handleOnPageChange(1)}
           disabled={current === 1} >
            <i class="fas fa-angle-double-left"></i>
          </button>
          <button type="button" class="btn btn-dark btn-floating mx-1"
           onClick={() => handleOnPageChange(current - 1)} disabled={current === 1}>
            <i class="fas fa-angle-left"></i>
          </button>
          {/* <div class="page-item">
            <button class="page-link" >1<span class="visually-hidden">(current)</span></button>
          </div>
          <div class="page-item active" aria-current="page">
            <button class="page-link" href="#">2 </button>
          </div>
          <div class="page-item">
            <button class="page-link" >3<span class="visually-hidden">(current)</span></button>
          </div> */}
          {exportPageButton}
          <button type="button" class="btn btn-dark btn-floating mx-1"
            onClick={() => handleOnPageChange(current + 1)} 
            disabled={current === totalPage}>
            <i class="fas fa-angle-right"></i>
          </button>
          <button type="button" class="btn btn-dark btn-floating mx-1" 
           onClick={() => handleOnPageChange(totalPage)}
          disabled={current === totalPage}>
            <i class="fas fa-angle-double-right"></i>
          </button>
        </div>
      </nav>
      <div className="w-100" style={{ height: "20px" }}></div>
    </div>
  )
}

export default PaginationHome
