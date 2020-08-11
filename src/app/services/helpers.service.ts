import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  public static createArrayOfArrayWithIndexes(arraySize: number): number[][] {
    return new Array(arraySize).fill([]).map((row, rowIndex) => {

      const mappedRow = [...row];

      for (
        let i = 1 + (rowIndex * arraySize);
        i <= (1 + rowIndex) * arraySize;
        i += 1
      ) {
        mappedRow.push(i);
      }

      return mappedRow;
    })
  }
}
