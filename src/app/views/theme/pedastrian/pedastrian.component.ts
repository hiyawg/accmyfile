import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedastrian',
  templateUrl: './pedastrian.component.html',
  styleUrls: ['./pedastrian.component.scss']
})
export class PedastrianComponent implements OnInit {
  pedestrianform: FormGroup;
  id:any;
  accident: any;
  accidenttype: any;
  accid:any;
  constructor(private actRoute: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit() {
    this.id =  this.actRoute.snapshot.paramMap.get('id');
    this.pedestrianform = this.formBuilder.group({
     
      pedistriansDto: new FormArray([])
      

    }) 
   
}

  addPedistrian(form: any): void {
    console.log(this.id);
    console.log(form);
    const rooturl = 'https://traficaccidentreport.herokuapp.com/trafficaccidentanalysis/pedastrian/save';
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
	    addressDto:[''],
	   
	    firstNameDto:[''],
	    injuryClassDto:[''],
	    lastNameDto:[''],
	    middleNameDto:[''],
	    phoneNumberDto:[''],
	    positionDuringAccidentDto:[''],
	    sexDto:[''],
       })
    }


    addPedstrianInVehicle(): void {
   
      (<FormArray>this.pedestrianform.get('pedistriansDto')).push(this.addPedistrianFormGroup())
     
    
    }

}
