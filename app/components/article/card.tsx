type Tag = {
  name: string;
};

export type ArticleCardProps = {
  title: string;
  description: string;
  eyecatch?: {
    path: string;
    description?: string;
  };
  tags: Tag[];
};

function Tag(tag: Tag) {
  return (
    <>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{tag.name}
      </span>
    </>
  );
}

export function ArticleCard(props: ArticleCardProps) {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        {
          props.eyecatch ? <img class="w-full" src={props.eyecatch.path} alt={props.eyecatch.description ?? ""} /> : <></>
        }
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-700 text-base">{props.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {props.tags.map(Tag)}
        </div>
      </div>
    </>
  );
}
