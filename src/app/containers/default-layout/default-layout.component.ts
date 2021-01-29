import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { navItems2 } from '../../_nav2';
import { AuthService } from '../../auth/auth.service';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {

  
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(private router: Router ,private tokenStorage: TokenStorageService,  private authService: AuthService,@Inject(DOCUMENT) _document?: any) {
    let userrole = this.tokenStorage.getAuthorities();

   
    

    if( userrole[0] == "ROLE_ADMIN"){
      this.navItems = navItems2;
     }
     if( userrole[0] == "ROLE_USER"){
      this.navItems = navItems;
     }
    
     
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
