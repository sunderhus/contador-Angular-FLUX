import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { decrement, increment, resetCounter } from '../store/contador';
import { changeMessenger, clearMessenger } from '../store/texto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  public counterStore$: Observable<any>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.counterStore$ = this.store.pipe(select('contadorReducer'));
  }

  public increment() {
    this.store.dispatch(increment());
  }
  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(resetCounter());
  }

  public alterarTexto(mensagem: string) {
    this.store.dispatch(changeMessenger({ payload: mensagem }));
  }
  public limparTexto() {
    this.store.dispatch(clearMessenger());
  }
}
