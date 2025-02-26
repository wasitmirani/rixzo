import React from 'react';

const HeaderMenu: React.FC = () => {
	return (
        <>
          <header className="app-header">
        
            <div className="main-header-container container-fluid">
          
                <div className="header-content-left">

                    <div className="header-element">
                        <div className="horizontal-logo">
                            <a href="index.html" className="header-logo">
                                <img src="/backend/assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                <img src="/backend/assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                                <img src="/backend/assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                                <img src="/backend/assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white" />
                            </a>
                        </div>
                    </div>
                 
                    <div className="header-element mx-lg-0 mx-2">
                        <a aria-label="Hide Sidebar" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="javascript:void(0);"><span></span></a>
                    </div>
              
                    <div className="header-element header-search d-lg-block d-none my-auto auto-complete-search">
                    
                        <input type="text" className="header-search-bar form-control rounded-pill" id="header-search" placeholder="Search for Results..."  />
                        <a href="javascript:void(0);" className="header-search-icon border-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        </a>
                  
                    </div>

       
                </div>
            
                <div className="header-content-right">

                    <div className="header-element d-lg-none d-flex">
                        <a href="javascript:void(0);" className="header-link" data-bs-toggle="modal" data-bs-target="#responsive-searchModal">
                          
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                           
                        </a>
                    </div>
            
                    <div className="header-element country-selector dropdown">
                       
                        <a href="javascript:void(0);" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                            <span className="avatar avatar-xs avatar-rounded">
                                <img src="/backend/assets/images/flags/us_flag.jpg" alt="img" />
                            </span>
                        </a>
                   
                        <ul className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs avatar-rounded lh-1 me-2">
                                        <img src="/backend/assets/images/flags/us_flag.jpg" alt="img" />
                                    </span>
                                    English
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs avatar-rounded lh-1 me-2">
                                        <img src="/backend/assets/images/flags/spain_flag.jpg" alt="img" />
                                    </span>
                                    Spanish
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs avatar-rounded lh-1 me-2">
                                        <img src="/backend/assets/images/flags/french_flag.jpg" alt="img" />
                                    </span>
                                    French
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs avatar-rounded lh-1 me-2">
                                        <img src="/backend/assets/images/flags/germany_flag.jpg" alt="img" />
                                    </span>
                                    German
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs avatar-rounded lh-1 me-2">
                                        <img src="/backend/assets/images/flags/italy_flag.jpg" alt="img" />
                                    </span>
                                    Italian
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                    <span className="avatar avatar-xs avatar-rounded lh-1 me-2">
                                        <img src="/backend/assets/images/flags/russia_flag.jpg" alt="img" />
                                    </span>
                                    Russian
                                </a>
                            </li>
                        </ul>
                    </div>
               
                    <div className="header-element header-theme-mode">
               
                        <a href="javascript:void(0);" className="header-link layout-setting">
                            <span className="light-layout">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><rect fill="none" height="24" width="24"/><path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/></svg>
                    
                            </span>
                            <span className="dark-layout">
                              
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>
                             
                            </span>
                        </a>
                       
                    </div>

                    <div className="header-element cart-dropdown dropdown">
                
                        <a href="javascript:void(0);" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                            <span className="badge bg-primary rounded-pill header-icon-badge" id="cart-icon-badge">4</span>
                        </a>
                      
                        <div className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                            <div className="p-3 bg-light bg-opacity-75">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fw-semibold">Cart Items</p>
                                    <span className="badge bg-pink" id="cart-data">4 Items</span>
                                </div>
                            </div>
                            <div>
                                <hr className="dropdown-divider" />
                            </div>
                            <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="lh-1">
                                            <span className="avatar avatar-lg bg-light">
                                                <img src="/backend/assets/images/media/media-92.jpg" alt=""/>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="fw-medium"><a href="cart.html">EliteChair Pro</a></div>
                                            <span className="text-muted fs-12 fw-normal">
                                                Furniture
                                            </span>
                                            <div className="fs-11 fw-medium text-default"><span className="text-muted">Qty: </span>01</div>
                                        </div>
                                        <div className="text-end">
                                            <a href="javascript:void(0);" className="header-cart-remove float-end dropdown-item-close"><i className="ti ti-trash"></i></a>
                                            <div className="fw-semibold fs-14 text-default">$1,299.00</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="lh-1">
                                            <span className="avatar avatar-lg bg-light">
                                                <img src="/backend/assets/images/media/media-95.jpg" alt="Sunglasses"/>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="fw-medium"><a href="cart.html">Sunglasses</a></div>
                                            <span className="text-muted fs-12 fw-normal">
                                                Accessories
                                            </span>
                                            <div className="fs-11 fw-medium text-default"><span className="text-muted">Qty: </span>01</div>
                                        </div>
                                        <div className="text-end">
                                            <a href="javascript:void(0);" className="header-cart-remove float-end dropdown-item-close"><i className="ti ti-trash"></i></a>
                                            <div className="fw-semibold fs-14 text-default">$249.99</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="lh-1">
                                            <span className="avatar avatar-lg bg-light">
                                                <img src="/backend/assets/images/media/media-93.jpg" alt="StellarPhone X"/>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="fw-medium"><a href="cart.html">StellarPhone X</a></div>
                                            <span className="text-muted fs-12 fw-normal">
                                                Smartphones
                                            </span>
                                            <div className="fs-11 fw-medium text-default"><span className="text-muted">Qty: </span>01</div>
                                        </div>
                                        <div className="text-end">
                                            <a href="javascript:void(0);" className="header-cart-remove float-end dropdown-item-close"><i className="ti ti-trash"></i></a>
                                            <div className="fw-semibold fs-14 text-default">$1,199.08</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="lh-1">
                                            <span className="avatar avatar-lg bg-light">
                                                <img src="/backend/assets/images/media/media-96.jpg" alt="PowerBeats Pro"/>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="fw-medium"><a href="cart.html">PowerBeats Pro</a></div>
                                            <span className="text-muted fs-12 fw-normal">
                                                Audio Accessories
                                            </span>
                                            <div className="fs-11 fw-medium text-default"><span className="text-muted">Qty: </span>01</div>
                                        </div>
                                        <div className="text-end">
                                            <a href="javascript:void(0);" className="header-cart-remove float-end dropdown-item-close"><i className="ti ti-trash"></i></a>
                                            <div className="fw-semibold fs-14 text-default">$249.95</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="p-3 empty-header-item border-top">
                                <div className="d-grid">
                                    <a href="checkout.html" className="btn btn-primary">Proceed to checkout</a>
                                </div>
                            </div>
                            <div className="p-5 empty-item d-none">
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
                                        <i className="ri-shopping-cart-2-line fs-2"></i>
                                    </span>
                                    <h6 className="fw-semibold mb-1 mt-3">Your Cart is Empty</h6>
                                    <span className="mb-3 fw-normal fs-13 d-block">Add some items to make me happy </span>
                                    <a href="products.html" className="btn btn-primary btn-wave btn-sm m-1" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                        </div>
              
                    </div>
                  
                    <div className="header-element notifications-dropdown dropdown">
                      
                        <a href="javascript:void(0);" className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
                            <span className="header-icon-pulse bg-secondary rounded pulse pulse-secondary"></span>
                        </a>
                
                        <div className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                            <div className="p-3 bg-light bg-opacity-75">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fw-semibold">Notifications</p>
                                    <span className="badge bg-pink" id="notifiation-data">5 Unread</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <ul className="list-unstyled mb-0" id="header-notification-scroll">
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md offline bg-primary-transparent avatar-rounded">
                                                <img src="/backend/assets/images/faces/1.jpg" alt="Sonia Agarwal" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><a href="chat.html">Sonia Agarwal</a></p>
                                                <div className="fw-normal header-notification-text text-muted">
                                                    <span className="fw-medium fs-12 text-success">Approval</span> for the Insurance
                                                </div>
                                                <span className="text-muted header-notification-text fs-11">7 mins ago</span>
                                            </div>
                                            <div>
                                                <a href="javascript:void(0);" className="text-muted me-1 dropdown-item-close1">
                                                    <i className="ti ti-trash fs-16"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md offline bg-primary-transparent avatar-rounded">
                                                <img src="/backend/assets/images/faces/12.jpg" alt="Rajesh Kumar"/>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><a href="chat.html">Rajesh Kumar</a></p>
                                                <div className="fw-normal header-notification-text text-muted">
                                                    <span className="fw-medium fs-12 text-warning">Urgent Request</span> for project
                                                </div>
                                                <span className="text-muted header-notification-text fs-11">3 hours ago</span>
                                            </div>
                                            <div>
                                                <a href="javascript:void(0);" className="text-muted me-1 dropdown-item-close1">
                                                    <i className="ti ti-trash fs-16"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md offline bg-success-transparent avatar-rounded">
                                                <img src="/backend/assets/images/faces/3.jpg" alt="Ayesha Malik" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><a href="chat.html">Ayesha Malik</a></p>
                                                <div className="fw-normal header-notification-text text-muted">
                                                    <span className="fw-medium fs-12 text-info">Task Completed</span> for redesign
                                                </div>
                                                <span className="text-muted header-notification-text fs-11">2 hours ago</span>
                                            </div>
                                            <div>
                                                <a href="javascript:void(0);" className="text-muted me-1 dropdown-item-close1">
                                                    <i className="ti ti-trash fs-16"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md online bg-danger-transparent avatar-rounded">
                                                <img src="/backend/assets/images/faces/14.jpg" alt="Mohan Desai" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><a href="chat.html">Mohan Desai</a></p>
                                                <div className="fw-normal header-notification-text text-muted">
                                                    <span className="fw-medium fs-12 text-danger">New Message</span> about client meeting
                                                </div>
                                                <span className="text-muted header-notification-text fs-11">15 mins ago</span>
                                            </div>
                                            <div>
                                                <a href="javascript:void(0);" className="text-muted me-1 dropdown-item-close1">
                                                    <i className="ti ti-trash fs-16"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md offline bg-warning-transparent avatar-rounded">
                                                <img src="/backend/assets/images/faces/5.jpg" alt="Priya Sharma" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-medium"><a href="chat.html">Priya Sharma</a></p>
                                                <div className="fw-normal header-notification-text text-muted">
                                                    <span className="fw-medium fs-12 text-warning">Meeting Reminder</span> scheduled for 3:00 PM
                                                </div>
                                                <span className="text-muted header-notification-text fs-11">30 mins ago</span>
                                            </div>
                                            <div>
                                                <a href="javascript:void(0);" className="text-muted me-1 dropdown-item-close1">
                                                    <i className="ti ti-trash fs-16"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="p-3 empty-header-item1 border-top">
                                <div className="d-grid">
                                    <a href="chat.html" className="btn btn-primary">View All</a>
                                </div>
                            </div>
                            <div className="p-5 empty-item1 d-none">
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                        <i className="ri-notification-off-line fs-2"></i>
                                    </span>
                                    <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                
                    <div className="header-element header-shortcuts-dropdown dropdown">
                       
                        <a href="javascript:void(0);" className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="notificationDropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z"/></g></g></g></svg>
                        </a>
                      
                        <div className="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end" aria-labelledby="notificationDropdown">
                            <div className="p-3 bg-light bg-opacity-75">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fw-semibold">Related Apps</p>
                                    <span className="badge bg-pink">6 Apps</span>
                                </div>
                            </div>
                            <div className="dropdown-divider mb-0"></div>
                            <div className="main-header-shortcuts p-3" id="header-shortcut-scroll">
                            <div className="row g-2">
                                <div className="col-4">
                                    <a href="javascript:void(0);" className="related-apps">
                                            <div className="text-center p-3 related-app pink bg-pink-transparent border border-pink border-opacity-10">
                                                <span className="avatar avatar-md avatar-rounded bg-pink bg-opacity-10 border border-pink border-opacity-10 p-2 mb-2">
                                                    <img src="/backend/assets/images/apps/figma.png" alt=""/>
                                                </span>
                                                <span className="d-block fs-12">Figma</span>
                                            </div>
                                        </a>
                                </div>
                                <div className="col-4">
                                        <a href="javascript:void(0);" className="related-apps">
                                            <div className="text-center p-3 related-app success bg-success-transparent border border-success border-opacity-10">
                                                <span className="avatar avatar-md avatar-rounded bg-success bg-opacity-10 border border-success border-opacity-10 p-2 mb-2">
                                                    <img src="/backend/assets/images/apps/microsoft-powerpoint.png" alt=""/>
                                                </span>
                                                <span className="d-block fs-12">PowerPoint</span>
                                            </div>
                                        </a>
                                </div>
                                <div className="col-4">
                                        <a href="javascript:void(0);" className="related-apps">
                                            <div className="text-center p-3 related-app primary bg-primary-transparent border border-primary border-opacity-10">
                                                <span className="avatar avatar-md avatar-rounded bg-primary bg-opacity-10 border border-primary border-opacity-10 p-2 mb-2">
                                                    <img src="/backend/assets/images/apps/microsoft-word.png" alt=""/>
                                                </span>
                                                <span className="d-block fs-12">MS Word</span>
                                            </div>
                                        </a>
                                </div>
                                <div className="col-4">
                                        <a href="javascript:void(0);" className="related-apps">
                                            <div className="text-center p-3 related-app info bg-info-transparent border border-info border-opacity-10">
                                                <span className="avatar avatar-md avatar-rounded bg-info bg-opacity-10 border border-info border-opacity-10 p-2 mb-2">
                                                    <img src="/backend/assets/images/apps/calender.png" alt=""/>
                                                </span>
                                                <span className="d-block fs-12">Calendar</span>
                                            </div>
                                        </a>
                                </div>
                                <div className="col-4">
                                        <a href="javascript:void(0);" className="related-apps">
                                            <div className="text-center p-3 related-app secondary bg-secondary-transparent border border-secondary border-opacity-10">
                                                <span className="avatar avatar-md avatar-rounded bg-secondary bg-opacity-10 border border-secondary border-opacity-10 p-2 mb-2">
                                                    <img src="/backend/assets/images/apps/sketch.png" alt=""/>
                                                </span>
                                                <span className="d-block fs-12">Sketch</span>
                                            </div>
                                        </a>
                                </div>
                                <div className="col-4">
                                        <a href="javascript:void(0);" className="related-apps">
                                            <div className="text-center p-3 related-app danger bg-danger-transparent border border-danger border-opacity-10">
                                                <span className="avatar avatar-md avatar-rounded bg-danger bg-opacity-10 border border-danger border-opacity-10 p-2 mb-2">
                                                    <img src="/backend/assets/images/apps/google.png" alt=""/>
                                                </span>
                                                <span className="d-block fs-12">Google</span>
                                            </div>
                                        </a>
                                </div>
                            </div>
                            </div>
                            <div className="p-3 border-top">
                                <div className="d-grid">
                                    <a href="javascript:void(0);" className="btn btn-primary">View All</a>
                                </div>
                            </div>
                        </div>
                     
                    </div>
  
                    <div className="header-element header-fullscreen">
                   
                        {/* <a onclick="openFullscreen();" href="javascript:void(0);" className="header-link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="full-screen-open header-link-icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="full-screen-close header-link-icon d-none" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>
                        </a> */}
                      
                    </div>
                  
                    <div className="header-element dropdown">
                       
                        <a href="javascript:void(0);" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <span className="avatar avatar-sm avatar-rounded">
                                <img src="/backend/assets/images/faces/14.jpg" alt="img" className="img-fluid"/>
                            </span>
                        </a>
                       
                        <ul className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                            <li className="p-3 bg-light bg-opacity-75 border-bottom">
                                <div className="d-flex align-items-center justify-content-between gap-4">
                                    <div>
                                        <p className="mb-0 fw-semibold lh-1">Ashwin Seth</p>
                                        <span className="fs-11 text-muted">ashwinseth@mail.com</span>
                                    </div>
                                    <span className="badge bg-pink align-self-end mb-1">Pro</span>
                                </div>
                            </li>
                            <li><a className="dropdown-item d-flex align-items-center" href="profile.html"><i className="ti ti-user-circle fs-18 me-2 text-gray fw-normal"></i>My Profile</a></li>
                            <li><a className="dropdown-item d-flex align-items-center" href="mail.html"><i className="ti ti-inbox fs-18 me-2 text-gray fw-normal"></i>Mail Inbox <span className="badge bg-success ms-auto">06</span></a></li>
                            <li><a className="dropdown-item d-flex align-items-center" href="mail-settings.html"><i className="ti ti-adjustments-horizontal fs-18 me-2 text-gray fw-normal"></i>Account Settings</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item d-flex align-items-center" href="signin-cover.html"><i className="ti ti-logout fs-18 me-2 text-gray fw-normal"></i>Sign Out</a></li>
                        </ul>
                    </div>


           
                    <div className="header-element">
                 
                        <a href="javascript:void(0);" className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
                        </a>
                        
                    </div>
                   

                </div>
             
            </div>
         
    </header>

<div className="modal fade" id="responsive-searchModal" aria-labelledby="responsive-searchModal" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-body">
            <div className="input-group">
                <input type="text" className="form-control border-end-0" placeholder="Search Anything ..."
                    aria-label="Search Anything ..." aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button"
                    id="button-addon2"><i className="bi bi-search"></i></button>
            </div>
        </div>
    </div>
</div>
</div>

        </>
    );
};
export default HeaderMenu;