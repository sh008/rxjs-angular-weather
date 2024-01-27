import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreJsonService {
  private jsonDataSubject = new BehaviorSubject<any>(null);
  jsonData$ = this.jsonDataSubject.asObservable();

  private hideBoxSource = new BehaviorSubject<boolean>(false)
  hideBox$ = this.hideBoxSource.asObservable()
  setJsonData(data: any) {
    this.jsonDataSubject.next(data)
  }

  setHideBox(value: boolean)
  {
    this.hideBoxSource.next(value)
  }

}
