import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EnrolleeService } from 'app/api';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ProgramsResolver implements Resolve<any> {
  constructor(private enrolleeService: EnrolleeService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.enrolleeService.apiVversionEnrolleeProgramListGet(environment.apiVersion).pipe(
      catchError(error => {
        this.router.navigate(['/error/internal-server']);
        return of(null);
      })
    );
  }
}