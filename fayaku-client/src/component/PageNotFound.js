import React from 'react'
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
    let history = useHistory();

  function handleClick() {
    history.push("/trang-chu");
  }
    return (
        <div className=" w-auto"  style={{"height" : "550px"}}>
            <div className="col-12 text-center">
                <br></br>
               <strong><h3>404 - Page not Found </h3></strong> 
               <div className="text-center">
            <button className="btn btn-dark" onClick={()=>handleClick()}>Quay lại trang chủ</button>
            </div>
            </div >
            
        </div>
    )
}

export default PageNotFound
