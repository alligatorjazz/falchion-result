// import { z } from "zod"; - install zod if you want (npm i zod)
export type Result<Success extends object = object, Failure extends object = object> =
	| ({ ok: true } & Success)
	| ({ ok: false } & Failure);
export type AsyncResult<
	Success extends object = object,
	Failure extends object = object
> = Promise<Result<Success, Failure>>;
