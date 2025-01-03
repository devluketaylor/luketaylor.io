import Link from "next/link";
import { IoIosTime } from "react-icons/io";
import { buttonVariants } from "@/components/ui/button";
import { cn, estimateReadingTime, formatDate } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

interface PostItemProps {
	slug: string;
	title: string;
	description?: string;
	date: string;
}

export function PostItem({ slug, title, description, date }: PostItemProps) {
	return (
		<Link href={slug}>
			<article>
				<Card>
					<CardHeader>
						<div>
							<h2 className="text-2xl">{title}</h2>
						</div>
					</CardHeader>
					<CardContent>
						<div className="max-w-none text-muted-foreground">
							{description}
						</div>
					</CardContent>
					<CardFooter>
						<div className="flex justify-between items-center">
							<dl>
								<dt className="sr-only">Published On</dt>
								<dd className="text-sm sm:text-base font-medium flex items-center gap-2">
									<IoIosTime className="h-4 w-4 fill-muted-foreground" />
									<time
										dateTime={date}
										className="text-muted-foreground text-sm"
									>
										{formatDate(date)}
									</time>
									<p>
										{estimateReadingTime(slug)}- 8 min read
									</p>
								</dd>
							</dl>
						</div>
					</CardFooter>
				</Card>
			</article>
		</Link>
	);
}
