// import { Result } from "./types.js";

export * from "./types.js";
export function ok<T>(successData?: T): { ok: true } & T {
	return { ...(successData ?? ({} as T)), ok: true };
}

export function notOk<T>(failureData?: T): { ok: false } & T {
	return { ...(failureData ?? ({} as T)), ok: false };
}

// const x = ok({ status: "good" });
// function test(): Result<{ data: string }> {
// 	return ok({ data: "hello world" });
// }
