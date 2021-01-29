import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-motorist',
  templateUrl: './motorist.component.html',
  styleUrls: ['./motorist.component.scss']
})
export class MotoristComponent implements OnInit {
  motoristform: FormGroup;
  id:any;
  accident: any;
  accidenttype: any;
  accid:any;
  vehicle:any;
  constructor(private actRoute: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit() {
    this.id =  this.actRoute.snapshot.paramMap.get('id');
    this.motoristform = this.formBuilder.group({
     
      motoristDto: new FormArray([])

      
      

    }) 
    //this.getAccident2(this.id);
}



  registerMotorist(form: any): void {
    console.log(this.id);
    console.log(form);
    const rooturl = 'https://traficaccidentreport.herokuapp.com/trafficaccidentanalysis/motorist/save';
      this.http.post(rooturl + '/' + this.id,form).subscribe(data => {
        console.log(data);
        this.accident = data;
        this.accid  = this.accident.accident_id;
       
        console.log(this.accidenttype);
        this.router.navigate(['/theme/vehiclelist/',this.accid]);
        
        //this.accident = JSON.stringify(data, null, 4);
        //console.log(this.accident);

      })
    }
   
    addPedistrianFormGroup() : FormGroup{

  
      return this.formBuilder.group({
        additionalInfoDto:[''],
        issuedStateDto:[''],
        licenseNumberDto:[''],
        educationDto:[''],
        //hasLicenseDto:[''],
        issuedCountryDto:[''],
        motorisReadinessDto:[''],
	      
       })
    }


    addMotorist(): void {
   
      (<FormArray>this.motoristform.get('motoristDto')).push(this.addPedistrianFormGroup())
     
    
    }

  
}
