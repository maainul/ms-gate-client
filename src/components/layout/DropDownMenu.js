import React from 'react'
import SidebarItem from './SidebarItem';
import navItems from './NavItems';


const DropDownMenu = () => {
    return (
        <>
            {navItems.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}
        </>
    )
}

export default DropDownMenu
