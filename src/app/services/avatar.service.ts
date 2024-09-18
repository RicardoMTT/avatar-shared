import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {

  private avatarObservablePrivate$: BehaviorSubject<any> = new BehaviorSubject<any>('https://foundersguide.com/wp-content/uploads/2020/11/programming-1.jpg');

  constructor() {}

  get avatarObservable() {
    return this.avatarObservablePrivate$.asObservable();
  }

  set avatarObservableData(data: any) {
    this.avatarObservablePrivate$.next(data);
  }

}
