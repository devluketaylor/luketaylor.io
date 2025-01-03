import { Separator } from "@/components/ui/separator";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { Page } from "@/lib/types";

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = posts;

  return (
    <>
      <Navbar currentPage={Page.Blog} />
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              My ramblings on all things web dev
            </p>
          </div>
        </div>

        {displayPosts?.length > 0 ? (
          <ul className="flex flex-col gap-5">
            {displayPosts.map((post) => {
              const { slug, date, title, description } = post;
              return (
                <li key={slug}>
                  <PostItem
                    slug={slug}
                    title={title}
                    date={date}
                    description={description}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nothing to see here yet.</p>
        )}
      </div>
    </>
  );
}
