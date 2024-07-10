import type { Context } from "hono";

import { ArticleCard } from "../../components/article/card";

export default function Index(c: Context) {
	return (
		<>
			<ArticleCard
				title="The Coldest Sunset"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
				tags={[
					{
						name: "photography",
					},
					{
						name: "travel",
					},
					{
						name: "winter",
					},
				]}
			/>
		</>
	);
}
