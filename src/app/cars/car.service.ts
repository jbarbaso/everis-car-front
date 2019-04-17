import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Car } from './entities/car';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsUrl = 'api/cars';

  constructor(private http: HttpClient) { }

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl).pipe(
      catchError(this.handleError<Car[]>('getCars', []))
    );
  }

  /* GET cars whose fields contains search term */
  // searchCars(term: string): Observable<Car[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty car array.
  //     return of([]);
  //   }
  //   return this.http.get<Car[]>(`${this.carsUrl}/?brand=${term}`).pipe(
  //     catchError(this.handleError<Car[]>('searchCars', []))
  //   );
  // }

  /** GET car by id. Return `undefined` when id not found */
  getCarNo404<Data>(id: number): Observable<Car> {
    const url = `${this.carsUrl}/?id=${id}`;
    return this.http.get<Car[]>(url)
      .pipe(
        map(cars => cars[0]), // returns a {0|1} element array
        catchError(this.handleError<Car>(`getCar id=${id}`))
      );
  }

  /** GET car by id. Will 404 if id not found */
  public getCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
      catchError(this.handleError<Car>(`getCar id=${id}`))
    );
  }

  /** POST: add a new car to the server */
  public addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, httpOptions).pipe(
      catchError(this.handleError<Car>('addCar'))
    );
  }

  /** DELETE: delete the car from the server */
  deleteCar(car: Car | number): Observable<Car> {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carsUrl}/${id}`;

    return this.http.delete<Car>(url, httpOptions).pipe(
      catchError(this.handleError<Car>('deleteCar'))
    );
  }

  /** PUT: update the car on the server */
  updateCar(car: Car): Observable<any> {
    return this.http.put(this.carsUrl, car, httpOptions).pipe(
      catchError(this.handleError<any>('updateCar'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
