import React from 'react';

const LayoutSwitcher: React.FC = () => {
    // const [layout, setLayout] = useState<'grid' | 'list'>('grid');

    // const toggleLayout = () => {
    //     setLayout((prevLayout) => (prevLayout === 'grid' ? 'list' : 'grid'));
    // };

    return (
        <>
           <div className="offcanvas offcanvas-end"  id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <nav className="border-bottom border-block-end-dashed">
                        <div className="nav nav-tabs nav-justified" id="switcher-main-tab" role="tablist">
                            <button className="nav-link active" id="switcher-home-tab" data-bs-toggle="tab" data-bs-target="#switcher-home"
                                type="button" role="tab" aria-controls="switcher-home" aria-selected="true">Theme Styles</button>
                            <button className="nav-link" id="switcher-profile-tab" data-bs-toggle="tab" data-bs-target="#switcher-profile"
                                type="button" role="tab" aria-controls="switcher-profile" aria-selected="false">Theme Colors</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active border-0" id="switcher-home" role="tabpanel" aria-labelledby="switcher-home-tab"
                           >
                            <div className="">
                                <p className="switcher-style-head">Theme Color Mode:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-light-theme">
                                                Light
                                            </label>
                                            <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                                 />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-dark-theme">
                                                Dark
                                            </label>
                                            <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Directions:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-ltr">
                                                LTR
                                            </label>
                                            <input className="form-check-input" type="radio" name="direction" id="switcher-ltr"  />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-rtl">
                                                RTL
                                            </label>
                                            <input className="form-check-input" type="radio" name="direction" id="switcher-rtl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Navigation Styles:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-vertical">
                                                Vertical
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-style" id="switcher-vertical"
                                                 />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-horizontal">
                                                Horizontal
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-style"
                                                id="switcher-horizontal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation-menu-styles">
                                <p className="switcher-style-head">Vertical & Horizontal Menu Styles:</p>
                                <div className="row switcher-style gx-0 pb-2 gy-2">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-click">
                                                Menu Click
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                id="switcher-menu-click" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-hover">
                                                Menu Hover
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                id="switcher-menu-hover"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icon-click">
                                                Icon Click
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                id="switcher-icon-click" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icon-hover">
                                                Icon Hover
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                                id="switcher-icon-hover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidemenu-layout-styles">
                                <p className="switcher-style-head">Sidemenu Layout Styles:</p>
                                <div className="row switcher-style gx-0 pb-2 gy-2">
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-default-menu">
                                                Default Menu
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                id="switcher-default-menu"  />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-closed-menu">
                                                Closed Menu
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                id="switcher-closed-menu" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icontext-menu">
                                                Icon Text
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                id="switcher-icontext-menu" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icon-overlay">
                                                Icon Overlay
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                id="switcher-icon-overlay" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-detached">
                                                Detached
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                id="switcher-detached" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-double-menu">
                                                Double Menu
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                                id="switcher-double-menu" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Page Styles:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-regular">
                                                Regular
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-styles" id="switcher-regular"
                                                 />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-classic">
                                                Classic
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-styles" id="switcher-classic" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-modern">
                                                Modern
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-styles" id="switcher-modern" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Layout Width Styles:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-full-width">
                                                Full Width
                                            </label>
                                            <input className="form-check-input" type="radio" name="layout-width" id="switcher-full-width"
                                                 />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-boxed">
                                                Boxed
                                            </label>
                                            <input className="form-check-input" type="radio" name="layout-width" id="switcher-boxed" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Menu Positions:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-fixed">
                                                Fixed
                                            </label>
                                            <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-fixed"
                                                 />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-scroll">
                                                Scrollable
                                            </label>
                                            <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-scroll" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Header Positions:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-header-fixed">
                                                Fixed
                                            </label>
                                            <input className="form-check-input" type="radio" name="header-positions"
                                                id="switcher-header-fixed"  />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-header-scroll">
                                                Scrollable
                                            </label>
                                            <input className="form-check-input" type="radio" name="header-positions"
                                                id="switcher-header-scroll" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Loader:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-loader-enable">
                                                Enable
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-loader"
                                                id="switcher-loader-enable" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-loader-disable">
                                                Disable
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-loader"
                                                id="switcher-loader-disable"  />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="switcher-profile" role="tabpanel" aria-labelledby="switcher-profile-tab" >
                            <div>
                                <div className="theme-colors">
                                    <p className="switcher-style-head">Menu Colors:</p>
                                    <div className="d-flex switcher-style pb-2">
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-white" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Light Menu" type="radio" name="menu-colors"
                                                id="switcher-menu-light" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Dark Menu" type="radio" name="menu-colors"
                                                id="switcher-menu-dark"  /> 
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Color Menu" type="radio" name="menu-colors"
                                                id="switcher-menu-primary" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Gradient Menu" type="radio" name="menu-colors"
                                                id="switcher-menu-gradient" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-transparent"
                                                data-bs-toggle="tooltip" data-bs-placement="top" title="Transparent Menu"
                                                type="radio" name="menu-colors" id="switcher-menu-transparent" />
                                        </div>
                                    </div>
                                    <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Menu dynamically change from below Theme Primary color picker</div>
                                </div>
                                <div className="theme-colors">
                                    <p className="switcher-style-head">Header Colors:</p>
                                    <div className="d-flex switcher-style pb-2">
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-white" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Light Header" type="radio" name="header-colors"
                                                id="switcher-header-light"  />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Dark Header" type="radio" name="header-colors"
                                                id="switcher-header-dark" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Color Header" type="radio" name="header-colors"
                                                id="switcher-header-primary" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Gradient Header" type="radio" name="header-colors"
                                                id="switcher-header-gradient" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-transparent" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Transparent Header" type="radio" name="header-colors"
                                                id="switcher-header-transparent" />
                                        </div>
                                    </div>
                                    <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Header dynamically change from below Theme Primary color picker</div>
                                </div>
                                <div className="theme-colors">
                                    <p className="switcher-style-head">Theme Primary:</p>
                                    <div className="d-flex flex-wrap align-items-center switcher-style">
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-1" type="radio"
                                                name="theme-primary" id="switcher-primary" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-2" type="radio"
                                                name="theme-primary" id="switcher-primary1" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                                id="switcher-primary2" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                                id="switcher-primary3" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                                id="switcher-primary4" />
                                        </div>
                                        <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                            <div className="theme-container-primary"></div>
                                            <div className="pickr-container-primary"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theme-colors">
                                    <p className="switcher-style-head">Theme Background:</p>
                                    <div className="d-flex flex-wrap align-items-center switcher-style">
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-1" type="radio"
                                                name="theme-background" id="switcher-background" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-2" type="radio"
                                                name="theme-background" id="switcher-background1" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-3" type="radio" name="theme-background"
                                                id="switcher-background2" /> 
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-4" type="radio"
                                                name="theme-background" id="switcher-background3" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-5" type="radio"
                                                name="theme-background" id="switcher-background4" />
                                        </div>
                                        <div className="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent">
                                            <div className="theme-container-background"></div>
                                            <div className="pickr-container-background"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-image mb-3">
                                    <p className="switcher-style-head">Menu With Background Image:</p>
                                    <div className="d-flex flex-wrap align-items-center switcher-style">
                                        <div className="form-check switch-select m-2">
                                            <input className="form-check-input bgimage-input bg-img1" type="radio"
                                                name="theme-background" id="switcher-bg-img" />
                                        </div>
                                        <div className="form-check switch-select m-2">
                                            <input className="form-check-input bgimage-input bg-img2" type="radio"
                                                name="theme-background" id="switcher-bg-img1" />
                                        </div>
                                        <div className="form-check switch-select m-2">
                                            <input className="form-check-input bgimage-input bg-img3" type="radio" name="theme-background"
                                                id="switcher-bg-img2" />
                                        </div>
                                        <div className="form-check switch-select m-2">
                                            <input className="form-check-input bgimage-input bg-img4" type="radio"
                                                name="theme-background" id="switcher-bg-img3" /> 
                                        </div>
                                        <div className="form-check switch-select m-2">
                                            <input className="form-check-input bgimage-input bg-img5" type="radio"
                                                name="theme-background" id="switcher-bg-img4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between canvas-footer flex-nowrap gap-2">

                            <a href="javascript:void(0);" id="reset-all" className="btn btn-danger text-nowrap">Reset</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutSwitcher;