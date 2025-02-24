

import React from 'react';
import Link from 'next/link';// Assuming you have some CSS for styling
import SidebarMenu from '@/app/utils/sidebarMenu';


const SideBar: React.FC = () => {
	const menu = new SidebarMenu();
	const menuList = menu.getMenuList();

	return (
        <>
        
        </>
    )
};

export default SidebarMenu;