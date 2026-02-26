class Count {
  private count: number;
  static a: number = 4;
  static fromJSON(json: string): Count {
    const obj = JSON.parse(json);
    return new Count(obj.count);
  }

  constructor(initial: number) {
    this.count = initial;
    Count.a++;
  }
  inc() {
    this.count++;
    return this;
  }
  dec() {
    this.count--;
    return this;
  }
  value() {
    return this.count;
  }
  get isZero(): boolean {
    return this.count === 0;
  }
  set step(n: number) {
    if (n < 0) {
      throw new Error("number is negative");
    }
    this.count = n;
  }
}

const c1 = new Count(0);
c1.inc();
console.log(c1.inc().inc().value());
console.log(c1.value());
console.log(c1.isZero);
console.log((c1.step = 3));

const d = Count.fromJSON('{"count":10}');
console.log("static", d.value());
new Count(1);
new Count(5);

console.log("helo", Count.a);

class Demo {
  public a = 1;
  protected b = 2;
  private c = 3;
  #secret = 4;
  static count = 3;
  constructor(i: number) {
    Demo.count++; //static member
  }
  reveal() {
    return this.#secret;
  }
}

const temp = new Demo(0);
console.log(temp.a);
console.log(temp.b);
console.log(temp.c);
console.log(temp.reveal());

//factory fun
function makeCounter(initial = 0) {
  let count = initial;
  return {
    inc() {
      count += 1;
      return this;
    },
    dec() {
      count -= 1;
      return this;
    },
    val() {
      return count;
    },
  };
}
const e = makeCounter();
console.log(e.inc().inc().val());

//inheritence
class bounderCount extends Count {
  constructor(
    initial: number,
    private max: number,
  ) {
    super(initial);
  }
  inc() {
    if (this.value() < this.max) {
      super.inc();
    }
    return this;
  }
  dec() {
    if (this.value() < 0) {
      super.dec();
    }
    return this;
  }
}
//composition
class BoundedCounter {
  constructor(
    private inner: Count, //now inner is Count
    private max: number,
  ) {}

  inc() {
    if (this.inner.value() < this.max) {
      this.inner.inc();
    }
    return this;
  }

  dec() {
    if (this.inner.value() > 0) {
      this.inner.dec();
    }
    return this;
  }

  value() {
    return this.inner.value();
  }
}
let compcount = new Count(0);
let comp = new BoundedCounter(compcount, 2);
console.log("comp", comp.inc().inc().inc().value());

//abstract contracts
abstract class Store<T> {
  abstract get(key: string): T | undefined;
  abstract set(key: string, value: T): void;
  abstract has(key: string): boolean;
}

//memory usage with map
class MemoryStore<T> extends Store<T> {
  private data = new Map<string, T>();

  get(key: string): T | undefined {
    return this.data.get(key);
  }

  set(key: string, value: T): void {
    this.data.set(key, value);
  }

  has(key: string): boolean {
    return this.data.has(key);
  }
}

const store = new MemoryStore<number>();

store.set("a", 10);
console.log(store.get("a"));
console.log(store.has("a"));

//interface
interface IStore<T> {
  get(key: string): T | undefined;
  set(key: string, value: T): void;
  has(key: string): boolean;
}
class MemoryStore2<T> implements IStore<T> {
  private data = new Map<string, T>();

  get(key: string): T | undefined {
    return this.data.get(key);
  }

  set(key: string, value: T): void {
    this.data.set(key, value);
  }

  has(key: string): boolean {
    return this.data.has(key);
  }
}

//generic abstract store
abstract class Store1<T> {
  private opened = false;

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }

  private requireOpen(): void {
    if (!this.opened) {
      throw new Error("Store is closed");
    }
  }

  protected ensureOpen(): void {
    this.requireOpen();
  }

  abstract get(key: string): T | undefined;
  abstract set(key: string, value: T): void;
  abstract has(key: string): boolean;
}

class MemoryStore1<T> extends Store1<T> {
  private data = new Map<string, T>();

  get(key: string): T | undefined {
    this.ensureOpen();
    return this.data.get(key);
  }

  set(key: string, value: T): void {
    this.ensureOpen();
    this.data.set(key, value);
  }

  has(key: string): boolean {
    this.ensureOpen();
    return this.data.has(key);
  }
}

const store1 = new MemoryStore1<number>();

store1.open();
store1.set("score", 99);

console.log(store1.get("score"));
console.log(store1.has("score"));

store1.close();
store1.get("score");

//logger class
type LogLevel = "info" | "warn" | "error";

class Logger {
  constructor(private level: LogLevel = "info") {}

  private shouldLog(msgLevel: LogLevel): boolean {
    const order = { info: 0, warn: 1, error: 2 };
    return order[msgLevel] >= order[this.level];
  }

  info(msg: string) {
    if (this.shouldLog("info")) console.log("[INFO]", msg);
  }

  warn(msg: string) {
    if (this.shouldLog("warn")) console.warn("[WARN]", msg);
  }

  error(msg: string) {
    if (this.shouldLog("error")) console.error("[ERROR]", msg);
  }
}

//cache class
class Cache1<K, V> {
  private store = new Map<K, V>();

  constructor(private maxSize: number) {
    if (maxSize <= 0) throw new Error("maxSize must be > 0");
  }

  set(key: K, value: V) {
    if (this.store.size >= this.maxSize) {
      const first = this.store.keys().next();
      if (!first.done) {
        this.store.delete(first.value);
      }
    }
    this.store.set(key, value);
  }

  get(key: K): V | undefined {
    return this.store.get(key);
  }

  has(key: K): boolean {
    return this.store.has(key);
  }

  size(): number {
    return this.store.size;
  }
}

//timer class
class Timer {
  private startTime: number | null = null;
  private elapsed = 0;

  start() {
    if (this.startTime === null) {
      this.startTime = Date.now();
    }
  }

  stop() {
    if (this.startTime !== null) {
      this.elapsed += Date.now() - this.startTime;
      this.startTime = null;
    }
  }

  reset() {
    this.startTime = null;
    this.elapsed = 0;
  }

  getElapsed(): number {
    if (this.startTime !== null) {
      return this.elapsed + (Date.now() - this.startTime);
    }
    return this.elapsed;
  }
}

//validation class
class ValidationResult {
  constructor(
    public readonly success: boolean,
    public readonly errors: string[] = [],
  ) {}

  static ok(): ValidationResult {
    return new ValidationResult(true);
  }

  static fail(errors: string[]): ValidationResult {
    return new ValidationResult(false, errors);
  }
}
const result = ValidationResult.fail(["Email invalid"]);

if (!result.success) {
  console.log(result.errors);
}
