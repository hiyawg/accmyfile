import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.scss']
})
export class SuperuserComponent implements OnInit {
  [x: string]: any;

  id:any;
  accidents:any[];
  vehicle:any;
  http: any;
  
  router: any;
    
  
 
  
    ngOnInit() {
      this.id = this.actRoute.snapshot.paramMap.get('id');
      this.getAccident(this.id);
     
           
    }
    
    getAccident(id:any): void {    
      const rooturl = 'https://traficaccidentreport.herokuapp.com/trafficaccidentanalysis/accident/vehicles';   
       this.http.get(rooturl + '/' + id).subscribe(data => {        
         this.vehicle = data;
        
                    
          });
  
    }
  
    accidentDetail(accidentId:any){
  
      this.router.navigate(['/theme/alldetails',accidentId]).then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
       });
  
    }
  }
  