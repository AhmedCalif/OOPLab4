export class NumberGroup {
    data: number[];
    constructor(data: number[]) {
        this.data = data;
    }
    getlength() {
        return this.data.length;
    }

    compare (leftPos: number, rightPos: number): boolean {
        return this.data[leftPos] > this.data[rightPos];
    }
     swap (leftPos: number, rightPos: number) : void {
        let tempLeft = this.data[leftPos];
        tempLeft = this.data[rightPos];
        this.data[leftPos] = this.data[rightPos]
     }
  }