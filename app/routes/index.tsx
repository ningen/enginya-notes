import type { Context } from "hono";

export default function Index(c: Context) {
	return (
		<>
			<h1 class="text-blue-500">Hello honox</h1>
		</>
	);
}
