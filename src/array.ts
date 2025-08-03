export class Arr<T> {
  private store: Record<number, T> = {};
  private _length: number = 0;

  constructor(...args: T[]) {
    for (let i = 0; i < args.length; i++) {
      this.store[i] = args[i];
      this._length = args.length;
    }
  }

  get length() {
    return this._length;
  }

  public map<U>(fn: (val: T, index: number) => U): U[] {
    const result: U[] = [];
    let i = 0;

    while (i < this.length) {
      result.push(fn(this.store[i], i));

      i++;
    }

    return result;
  }

  public forEach(fn: (val: T, index: number) => void): void {
    let i = 0;

    while (i < this.length) {
      fn(this.store[i], i);

      i++;
    }
  }

  public reduce() {}

  public flatMap() {}
}
