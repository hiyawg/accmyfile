interface NavAttributes {
    [propName: string]: any;
  }
  interface NavWrapper {
    attributes: NavAttributes;
    element: string;
  }
  interface NavBadge {
    text: string;
    variant: string;
  }
  interface NavLabel {
    class?: string;
    variant: string;
  }
  
  export interface NavData {
    name?: string;
    url?: string;
    icon?: string;
    badge?: NavBadge;
    title?: boolean;
    children?: NavData[];
    variant?: string;
    attributes?: NavAttributes;
    divider?: boolean;
    class?: string;
    label?: NavLabel;
    wrapper?: NavWrapper;
  }
  
  export const navItems2: NavData[] = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Theme'
    },
    {
      name: 'Home',
      url: '/theme/home',
      icon: 'cui-home'
    },
    {
      name: 'accident',
      url: '/theme/accident',
      icon: 'cui-speedometer'
    },
    {
      name: 'users',
      url: '/theme/users',
      icon: 'cui-speedometer'
    },
    {
      name: 'All accident detail',
      url: '/theme/accidentlist',
      icon: 'cui-speedometer'
    },
   
    
    
    
  
    
   
   
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras',
    },
    
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      badge: {
        variant: 'secondary',
        text: 'NEW'
      },
      attributes: { disabled: true },
    }
   
  ];
  