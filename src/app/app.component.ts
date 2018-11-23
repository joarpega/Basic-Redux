import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.subscribe(state => {
      // console.log(state);
      this.contador = state.contador;
    });
  }

  incrementar() {
    // this.contador++;

    const action = new IncrementarAction();

    this.store.dispatch(action);
  }
  decrementar() {
    // this.contador--;
    const action = new DecrementarAction();

    this.store.dispatch(action);

  }

}