import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedProjectService {
  private selectedProjectIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  constructor() { }

  setSelectedProjectId(projectId: number | null): void {
    this.selectedProjectIdSubject.next(projectId);
  }

  get selectedProjectId(): Observable<number | null> {
    return this.selectedProjectIdSubject.asObservable();
  }
}