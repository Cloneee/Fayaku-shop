import React from 'react'

const PaginationHome = () => {
  // const [curent, setcurent] = useState("")
  return (
    <div >
      <nav aria-label="...">
        <div class="pagination pagination-circle">
          <button type="button" class="btn btn-dark btn-floating mx-1">
            <i class="fas fa-angle-double-left"></i>
          </button>
          <button type="button" class="btn btn-dark btn-floating mx-1" >
            <i class="fas fa-angle-left"></i>
          </button>
          <div class="page-item">
            <button class="page-link" >1<span class="visually-hidden">(current)</span></button>
          </div>
          <div class="page-item active" aria-current="page">
            <button class="page-link" href="#">2 </button>
          </div>
          <div class="page-item">
            <button class="page-link" >3<span class="visually-hidden">(current)</span></button>
          </div>
          <button type="button" class="btn btn-dark btn-floating mx-1">
            <i class="fas fa-angle-right"></i>
          </button>
          <button type="button" class="btn btn-dark btn-floating mx-1" >
            <i class="fas fa-angle-double-right"></i>
          </button>
        </div>
      </nav>
      <div className="w-100" style={{height:"20px"}}></div>
    </div>
  )
}

export default PaginationHome
