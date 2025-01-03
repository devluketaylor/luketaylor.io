import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { MDXContent } from "@/components/mdx-components";
import Navbar from "@/components/navbar";
import { Page } from "@/lib/types";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import LukeImage from "@/assets/luke.jpg";
import { IoIosTime } from "react-icons/io";
import { estimateReadingTime, formatDate } from "@/lib/utils";

interface PostPageProps {
	params: {
		slug: string[];
	};
}

async function getPostFromParams(params: PostPageProps["params"]) {
	const slug = params?.slug?.join("/");
	const post = posts.find((post) => post.slugAsParams === slug);

	return post;
}

export async function generateStaticParams(): Promise<
	PostPageProps["params"][]
> {
	return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
	const post = await getPostFromParams(params);

	if (!post || !post.published) {
		return notFound();
	}

	return (
		<div>
			<Navbar currentPage={Page.Blog} />
			<Link href="/blog" className="flex">
				<ChevronLeft />
				Go Back
			</Link>
			<article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
				<h1 className="mb-2">{post.title}</h1>
				{post.description ? (
					<p className="text-xl mt-0 text-muted-foreground">
						{post.description}
					</p>
				) : null}

				<div className="flex items-center gap-3">
					<Image
						src={LukeImage}
						className="rounded-xl outline outline-accent"
						alt="luke-taylor"
						width={60}
						height={60}
					/>

					<div className="">
						<p className="my-0 font-semibold">Luke Taylor</p>
						<div className="text-sm sm:text-base font-medium flex items-center gap-2">
							<IoIosTime className="h-4 w-4 fill-muted-foreground" />
							<time
								dateTime={post.date}
								className="text-muted-foreground text-sm"
							>
								{formatDate(post.date)}
							</time>
						</div>
					</div>
				</div>
				<Separator className="my-4" />

				<MDXContent code={post.body} />
			</article>
			<Footer currentPage={Page.Blog} />
		</div>
	);
}
