import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  private avatarObservablePrivate$: BehaviorSubject<any> =
    new BehaviorSubject<any>(
      'https://foundersguide.com/wp-content/uploads/2020/11/programming-1.jpg'
    );

  get avatarObservable() {
    console.log('xx');

    return this.avatarObservablePrivate$.asObservable();
  }

  set avatarObservableData(data: any) {
    console.log('data', data);

    this.avatarObservablePrivate$.next(data);
  }

  constructor() {}
}
