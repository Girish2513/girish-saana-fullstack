//union types
type Status = "loading" | "success" | "error";
function handle(status: Status) {
  switch (status) {
    case "loading": {
      return "loading";
    }
    case "success": {
      return "success";
    }
    case "error": {
      return "error";
    }
    default:
      const exhaustiveness: never = status;
      return exhaustiveness;
  }
}

//intersection types
type hasId = { id: string };
type hasTimestamps = { createdAt: Date; updatedAt: Date };
type entity = hasId & hasTimestamps;
type entity1 = Omit<entity, "id">;
const temp1: entity = {
  id: "hello",
  createdAt: new Date(),
  updatedAt: new Date(),
};
const temp2: entity1 = {
  createdAt: new Date(),
  updatedAt: new Date(),
};

//descriminated unions
type shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectange"; width: number; height: number };

function area(shape: shape) {
  switch (shape.kind) {
    case "circle":
      return "circle have 0 sides";
    case "square":
      return "square have 4 equal sides";
    case "rectange":
      return "rectangle have lenght and width";
    default:
      const e: never = shape;
      return e;
  }
}

//type guards
function isCircle(s: shape): s is { kind: "circle"; radius: number } {
  return s.kind === "circle";
}
function area1(shape: shape) {
  if (isCircle(shape)) {
    return "area1 is circle";
  }
  if ("radius" in shape) {
    return "radius in shape"; //manual narrowing using in
  }
}

//conditional types
type promiseType<T> = T extends Promise<infer U> ? U : T; //infer U returns inner type
type A2 = promiseType<Promise<string>>;
type B2 = promiseType<Promise<number>>;
type C2 = promiseType<boolean>;
type nullable<T> = T | null;
type A3 = nullable<string>;
type nonnullable<T> = T extends null | undefined ? never : T;
type clean = nonnullable<string | null | undefined>;

//utility types
type User3 = {
  id: string;
  name?: string;
};
type scrictUser = Required<User3>;
type readonlyUser = ReadOnly<User3>;
const user4: readonlyUser = {
  id: "hello",
};
user4.id = "33";

type Letters = "a" | "b" | "c";
type excludea = Exclude<Letters, "a">;
type extractab = Extract<Letters, "a" | "b">; //extracts only a and b
type Result = Exclude<"a" | "b" | "c", "a">;

//template literal types
type events = "click" | "hover" | "focus";
type EventHandlerNames = `on${Capitalize<events>}`; //creates a new string by applying on as prefix

//indexed access & recursive types
type User4 = {
  id: string;
  profile: { name: string; address: { city: string } };
};
type City = User4["profile"]["address"]["city"];

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

const data: JsonValue = {
  name: "Girish",
  age: 22,
  skills: ["TS", "JS"],
  address: {
    city: "Hyderabad",
    meta: {
      verified: true,
    },
  },
};
