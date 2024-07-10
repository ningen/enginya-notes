import type { Meta } from "../types";

export default function Top() {
	const posts = import.meta.glob<{ frontmatter: Meta }>("./posts/*.md", {
		eager: true,
	});

	const publishedPosts = Object.entries(posts).flatMap(([id, module]) => {
		const meta = module.frontmatter;
		if (!meta.published) return [];

		return [
			{
				id: id,
				href: id.replace(/\.md$/, ""),
				title: meta.title,
				topics: meta.topics,
			},
		];
	});

	return (
		<div>
			<ul>
				{publishedPosts.map((post) => {
					return <li key={post.id}>
						<a href={post.href}>{post.title}</a>
					</li>;
				})}
			</ul>
		</div>
	);
}
