import React from 'react';

// import SidebarMenu from '../../../utils/sidebarMenu';

const SideBar: React.FC = () => {
	// const menu = new SidebarMenu();
	// const menuList = menu.getMenuList();

    return (
        <>
            <aside className="app-sidebar sticky" id="sidebar">
              
                <div className="main-sidebar-header">
                    <a href="index.html" className="header-logo">
                        <img src="/backend/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                        <img src="/backend/assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                        <img src="/backend/assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                        <img src="/backend/assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white" />
                    </a>
                </div>
 

                {/* Start::main-sidebar */}
                <div className="main-sidebar" id="sidebar-scroll">
                    {/* Start::nav */}
                    <nav className="main-menu-container nav nav-pills flex-column sub-open">
                        <div className="slide-left" id="slide-left">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg>
                        </div>
                        <ul className="main-menu">
                            <li className="slide has-sub active"> <a href="javascript:void(0);" className="side-menu__item active">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"></path><path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3"></path></svg>
                                  <span className="side-menu__label">Dashboards</span> <i className="ri-arrow-right-s-line side-menu__angle"></i> </a> 
                                  <ul className="slide-menu child1 active"  data-popper-placement="bottom">
                                     <li className="slide side-menu__label1"> <a href="javascript:void(0)">Dashboards</a> </li> 
                                     <li className="slide active"> <a href="index.php" className="side-menu__item active">Sales</a> </li> 
                                     <li className="slide"> <a href="index2.php" className="side-menu__item">Ecommerce</a> </li> 
                                     <li className="slide"> <a href="index3.php" className="side-menu__item">Crypto</a> </li> 
                                     <li className="slide"> <a href="index4.php" className="side-menu__item">Jobs</a> </li> 
                                     <li className="slide"> <a href="index5.php" className="side-menu__item">NFT</a> </li> 
                                     <li className="slide"> <a href="index6.php" className="side-menu__item">CRM</a> </li>
                                      <li className="slide"> <a href="index7.php" className="side-menu__item">Analytics</a> </li> 
                                      <li className="slide"> <a href="index8.php" className="side-menu__item">Projects</a> </li> <
                                        li className="slide"> <a href="index9.php" className="side-menu__item">HRM</a> </li>
                                         <li className="slide"> <a href="index10.php" className="side-menu__item">Stocks</a> </li> 
                                         <li className="slide"> <a href="index11.php" className="side-menu__item">Courses</a> </li>
                                          <li className="slide"> <a href="index12.php" className="side-menu__item">Medical</a> </li>
                                           <li className="slide"> <a href="index13.php" className="side-menu__item">POS System</a> </li> 
                                           <li className="slide"> <a href="index14.php" className="side-menu__item">Podcast</a> </li> 
                                           <li className="slide"> <a href="index15.php" className="side-menu__item">School</a> </li>
                                            <li className="slide"> <a href="index16.php" className="side-menu__item">Social Media</a> 
                                            </li> 
                                            </ul>
                                             </li>
                        </ul>
                        <div className="slide-right" id="slide-right">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                            </svg>
                        </div>
                    </nav>
                    
                </div>
               
            </aside>
        </>
   	);
};

export default SideBar;