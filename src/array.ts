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

  public map<U>(fn: (val: T, index: number) => U): Arr<U> {
    const result = new Arr<U>();
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

  public push(val: T) {
    this.store[this.length] = val;

    return ++this._length;
  }

  public reduce() {}

  public flatMap() {}

  public filter(fn: (val: T, index: number) => boolean): Arr<T> {
    const result = new Arr<T>();

    let i = 0;

    while (i < this.length) {
      if (fn(this.store[i], i)) result.push(this.store[i]);

      i++;
    }

    return result;
  }

  public [Symbol.iterator](): Iterator<T> {
    let idx = 0;
    const self = this;

    return {
      next(): IteratorResult<T> {
        if (idx < self.length) {
          return { value: self.store[idx++], done: false };
        } else {
          return { value: undefined as any, done: true };
        }
      },
    };
  }
}
