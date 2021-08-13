import React from 'react'
import { useHistory } from 'react-router-dom'

const HeaderNotLoggedYet = () => {
    const history = useHistory()
    const handleLoginOnCLick = ()=>{
        history.push("/dang-nhap")
    }
    return (
        <div>
            <button className="btn btn-danger" onClick={()=>handleLoginOnCLick()}>Đăng nhập/Đăngký</button>
        </div>
    )
}

export default HeaderNotLoggedYet
