import './New.scss'
import { useEffect, useState } from 'react'

export const New = () => {
    const [tab1, setTab1] = useState({})
    return (
        <div className='new'>
            <div className="tabs">
                <div className="tab tab1"></div>
                <div className="tab tab2"></div>
                <div className="tab tab3"></div>
                <div className="tab tab4"></div>
                <div className="tab tab5 "></div>
            </div>
        </div>
    )
}
