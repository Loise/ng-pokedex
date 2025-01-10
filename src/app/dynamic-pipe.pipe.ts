import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicPipe'
})
export class DynamicPipe implements PipeTransform {
  transform(value: any[], pipeInfo: { pipe: any, options: any[] }): any[] {
    if (!value || !pipeInfo) {
      return value;
    }

    // Appliquer chaque pipe avec ses options successivement
    let result = value;
    
    const { pipe, options } = pipeInfo;
      
      // Instancier le pipe avec 'new' et appliquer les options
      const pipeInstance = new pipe();
      result = pipeInstance.transform(result, ...options);
    

    return result;
  }
}
