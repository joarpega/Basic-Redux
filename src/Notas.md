### Escuchar cambios específicos de un elemento del STATE
## Modificación: 1 en archivo app.conponent.ts
Con la opcion select (regresa un observable) se puede seleccionar solo una propiedad que se encuentre en el STATE

**Actual**
~~~
      this.store.select('contador')
        .subscribe(contador => this.contador = contador);
~~~  
**Anterior**
~~~
      this.store.subscribe(state => {
        this.contador = state.contador;
      });
~~~

### Se implementa el archivo app.reducers.ts
Este archivo contendra el detalle de la aplicación