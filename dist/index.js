// import { Result } from "./types.js";
export * from "./types.js";
export function ok(successData) {
    return { ...successData, ok: true };
}
export function notOk(failureData) {
    return { ...failureData, ok: false };
}
// const x = ok({ status: "good" });
// function test(): Result<{ data: string }> {
// 	return ok({ data: "hello world" });
// }
