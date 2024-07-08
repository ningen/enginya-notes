import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script, Link } from "honox/server";

export default jsxRenderer(({ children, title }) => {
	const cssPath = import.meta.env.PROD
		? "static/assets/style.css"
		: "/app/style.css";

	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{title ? <title>{title}</title> : <></>}
				<Link href={cssPath} rel="stylesheet" />
				<Script src="/app/client.ts" />
				<Style />
			</head>
			<body>{children}</body>
		</html>
	);
});
