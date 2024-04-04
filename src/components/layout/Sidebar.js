import React from 'react'
import LogoAndCompanyTitle from './LogoAndCompanyTitle';
import DropDownMenu from './DropDownMenu';

const Sidebar = () => {
    return (
        <div className="w-64 bg-white hidden">
            <LogoAndCompanyTitle />
            <DropDownMenu />
        </div>
    )
}

export default Sidebar
