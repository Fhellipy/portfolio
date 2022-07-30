import { InferGetServerSidePropsType } from "next";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function PostPage({ post }: PostPageProps) {
  return (
    <article>
      <h3>
        {post.id} - {post.title}
      </h3>
      <p>{post.body}</p>

      <p>postado por usuário nº{post.userId}</p>
    </article>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  const json = await response.json();

  const post = json as Post;

  return {
    props: { post },
  };
}
