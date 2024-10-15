export * from "./types.js";
export declare function ok<T>(successData: T): {
    ok: true;
} & T;
export declare function notOk<T>(failureData: T): {
    ok: false;
} & T;
