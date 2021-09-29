import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  public mySubject = new Subject<string>();
  constructor() { }

  ngOnInit(): void {
  }

  // Start Listening to the Subject
  public subscribeToSubject(): void {
    this.mySubject.subscribe(
      (x) => console.log(`My First observer: ${x}`),
      (err) => console.log(err)
    );
    // this.mySubject.subscribe({
    //   next: (x) => console.log(`The other observer: ${x}`)
    // });
  }

  public emitValue(input: any): void {
    let inputValue = input.target.value;
    this.mySubject.next(inputValue);
  }
 

}
