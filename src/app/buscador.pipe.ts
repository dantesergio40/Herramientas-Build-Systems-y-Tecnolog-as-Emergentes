import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any,campo: string, args: string): any {

    if ( !value ) return null;
    if ( !args ) return value;

    return value.filter(product =>
      product['nombre'].toLowerCase().includes(args)
      );
  }

}



