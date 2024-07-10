import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script, Link } from "honox/server";

function Topic(name: string) {
	return <span class="topic">#{name}</span>;
}

// @ts-ignore
export default jsxRenderer(({ children, frontmatter }) => {
	const cssPath = import.meta.env.PROD
		? "static/assets/style.css"
		: "/app/style.css";

	console.log(frontmatter);

	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{frontmatter.title ?? "enginya blog"}</title>
				<Link href={cssPath} rel="stylesheet" />
				<Script src="/app/client.ts" />
				<Style />
			</head>
			<body>
				<h1>{frontmatter.title}</h1>
				<div>{frontmatter.topics.map(Topic)}</div>
				{children}
			</body>
		</html>
	);
});
