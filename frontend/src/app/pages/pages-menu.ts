import { NbMenuItem } from '@nebular/theme';
import { Title } from '@angular/platform-browser';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Main Activites',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Purchase & Sell',
    icon: 'shopping-cart-outline',
    children: [
    {
      title: 'Purchase',
      link: '/pages/dashboard/Purchase',
    },
    {
      title: 'Sell',
      link: '/pages/dashboard/sell',
    },
  ]
},
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Customer',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Add Customer',
        link: '/pages/dashboard/addcustomer',
      }
    , {
        title: 'Customer List',
        link: '/pages/dashboard/customerdetails',
      }
    ]
  },
  {
    title: 'Receive debt & Pay loan',
    icon: 'layout-outline',
    children: [
   {
    title: 'Receive debt',
    link: '/pages/dashboard/checktransactions',
    },
      {
        title: 'Pay loan',
        link: '/pages/dashboard/checkloantransactions',
      },
    ]
  },
      {
        title: 'Hard Currency',
        icon:'globe-2',
        children:
         [
           {
           title: 'Add A new Currency',
           link: '/pages/dashboard/addHD'
          },
          {
            title: 'Buy Or Sell Currency',
            link: '/pages/dashboard/HD'
           },
        ]
      }
,
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },

  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
 
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Logout',
    icon: 'log-out',
    link: '/auth/login',
   
  },
];
