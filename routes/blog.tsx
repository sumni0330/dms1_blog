import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "../utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <main class="min-h-screen bg-[#FFF8E7] flex flex-col items-center px-4 pt-16">
      <h1 class="text-4xl font-extrabold mb-10 flex items-center gap-2">
        <span role="img" aria-label="memo">
          📝
        </span>{" "}
        Blog
      </h1>
      <div class="w-full max-w-2xl space-y-6">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </main>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <a
      href={`/${post.slug}`}
      class="block rounded-2xl shadow-md hover:shadow-xl transition bg-white border border-gray-200 hover:bg-[#F8F5ED] p-6 group"
    >
      <h2 class="text-2xl font-bold text-blue-800 mb-2 group-hover:underline">
        {post.title}
      </h2>

      <p class="text-gray-700 mt-3">{post.description || post.snippet}</p>
    </a>
  );
}
