import type { Context } from "hono";

export default function Index(c: Context) {
	return (
		<>
			<h1>Hello honox</h1>
		</>
	);
}
