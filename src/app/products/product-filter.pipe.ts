import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product';
/**
 * Created by Tamás Ferenc on 2017. 07. 18..
 */

@Pipe({
  name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {


  transform(value: IProduct[], filterBy: string): IProduct[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;

  }
}
