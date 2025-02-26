// app/secondary/layout.tsx
import { ReactNode } from 'react';
import HeaderMenu from '@/app/layouts/backend/partials/Header';
import SideBarMenu from '@/app/layouts/backend/partials/SideBarMenu';
import Switcher from '@/app/layouts/backend/partials/Switcher';

import Image from 'next/image';

export default function MasterLayout({ children }: { children: ReactNode }) {
  
    return (
<>

<html lang="en" dir="ltr" data-nav-layout="vertical" data-theme-mode="light" data-header-styles="light" data-menu-styles="light" data-toggled="close">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
        <meta charSet="UTF-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="Description" content="Rixzo - Laravel Bootstrap 5 Premium Admin &amp; Dashboard Template"/>
        <meta name="Author" content="Spruko Technologies Private Limited"/>
        <meta name="keywords" content=""/>
 
		<title> - </title>
 
        <link rel="icon" href="/backend/assets/images/brand-logos/favicon.ico" type="image/x-icon"/>

	    <link  id="style" href="/backend/assets/libs/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

        
        <link rel="preload" as="style" href="/backend/assets/app-_dJduKAg.css" />
        <link rel="stylesheet" href="/backend/assets/app-_dJduKAg.css" />

        {/* <!-- ICONS CSS --> */}
        <link href="/backend/assets/icon-fonts/icons.css" rel="stylesheet"/>

        {/* <!-- NODE WAVES CSS --> */}
        <link href="/backend/assets/libs/node-waves/waves.min.css" rel="stylesheet"/>

        {/* <!-- SIMPLEBAR CSS --> */}
        <link rel="stylesheet" href="/backend/assets/libs/simplebar/simplebar.min.css"/>

        {/* <!-- PICKER CSS --> */}
        <link rel="stylesheet" href="/backend/assets/libs/flatpickr/flatpickr.min.css" />
        <link rel="stylesheet" href="/backend/assets/libs/@simonwep/pickr/themes/nano.min.css" />

        {/* <!-- AUTO COMPLETE CSS --> */}
        <link rel="stylesheet" href="/backend/assets/libs/toastify-js/src/toastify.css" />
        <link rel="stylesheet" href="/backend/assets/libs/@tarekraafat/autocomplete.js/css/autoComplete.css" />

        {/* <!-- CHOICES CSS --> */}
        <link rel="stylesheet" href="/backend/assets/libs/choices.js/public/assets/styles/choices.min.css" />

        {/* <!-- CHOICES JS --> */}
        <script async src="/backend/assets/libs/choices.js/public/assets/scripts/choices.min.js"></script>

        {/* <!-- MAIN JS --> */}
        <script async src="/backend/assets/main.js"></script>



        
	</head>

    <body lang="en" dir="ltr" data-nav-layout="vertical" data-theme-mode="light" data-header-styles="light" data-menu-styles="light" data-toggled="close">

        {/* <!-- SWITCHER --> */}
        <Switcher />
        {/* <!-- END SWITCHER --> */}

        {/* <!-- LOADER --> */}
        <div id="loader" style={{ width: '100px', height: '100px' }}>
            <Image src="/backend/assets/images/media/loader.svg" alt="" width={100} height={100} />
        </div>
        {/* <!-- END LOADER --> */}

        {/* <!-- PAGE --> */}
        <div id="app">
        <div className="page">

                <HeaderMenu />

            <SideBarMenu />
             {children}


        </div>
    </div>
  
        <div className="scrollToTop">
                <span className="arrow"><i className="ri-arrow-up-s-fill fs-20"></i></span>
        </div>
       
        <div id="responsive-overlay">
        </div>
        {/* <!-- POPPER JS --> */}
        <script async src="/backend/assets/libs/@popperjs/core/umd/popper.min.js"></script>

        {/* <!-- BOOTSTRAP JS --> */}
        <script async src="/backend/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>



        {/* <!-- NODE WAVES JS --> */}
        <script async src="/backend/assets/libs/node-waves/waves.min.js"></script>

        {/* <!-- SIMPLEBAR JS --> */}
        <script async src="/backend/assets/libs/simplebar/simplebar.min.js"></script>

        <script  async src="/backend/assets/simplebar.js"></script>

        {/* <!-- PICKER JS --> */}
        <script async  src="/backend/assets/libs/flatpickr/flatpickr.min.js"></script>
        <script  async src="/backend/assets/libs/%40simonwep/pickr/pickr.es5.min.js"></script>

        {/* <!-- AUTO COMPLETE JS --> */}
        <script  async src="/backend/assets/libs/@tarekraafat/autocomplete.js/autoComplete.min.js"></script>


        {/* <!-- Apex Charts JS --> */}
        <script async src="/backend/assets/libs/apexcharts/apexcharts.min.js"></script>

        {/* <!-- Ecommerce-Dashboard JS --> */}

        <script async src="/backend/assets/ecommerce-dashboard-Diz2IHgQ.js"></script>


        {/* <!-- STICKY JS --> */}
        <script async src="/backend/assets/sticky.js"></script>

        {/* <!-- APP JS --> */}
    <script async  src="/backend/assets/app-Cnpnysuk.js"></script>

        {/* <!-- CUSTOM-SWITCHER JS --> */}
      <script async src="/backend/assets/custom-switcher-BX4z_p9X.js"></script>
      <link rel="modulepreload" href="/backend/assets/toasts-CLr2vkjC.js" />
      <script async type="module" src="/backend/assets/toasts-CLr2vkjC.js"></script>
        {/* <!-- END SCRIPTS --> */}
          {/* <!-- Toast JS --> */}
        
        
    </body>
</html>

</>

    );
}