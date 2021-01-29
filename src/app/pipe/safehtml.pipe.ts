import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer ,SafeValue} from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
export class SafehtmlPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){
    
  }
  transform(SafeValue): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(SafeValue);
    
    
    
    
  }

}
