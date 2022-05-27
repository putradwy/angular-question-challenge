import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private title = new BehaviorSubject('🎥 Movie Catalogue');
  sharedMessage = this.title.asObservable();

  constructor() { }

  nextMessage(title: string) {
    this.title.next(title)
  }
}