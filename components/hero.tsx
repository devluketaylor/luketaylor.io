import Image from "next/image";
import Luke from "../assets/luke.jpg";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="pb-32">
			<Image
				src={Luke}
				alt="Luke Taylor"
				width={120}
				height={120}
				className="rounded-3xl outline outline-4 outline-black/5 dark:outline-white/5"
			/>
			<h1 className="text-4xl mt-8 font-bold uppercase">Luke Taylor</h1>
			<h2 className="text-lg font-light">Software Engineer</h2>

			<p className="text-sm mt-5">
				I'm a passionate software engineer dedicated to building
				innovative technologies that solve real-world problems. I earned
				my computer science degree from the University of Missouri, and
				I'm driven by a love for learning and creating. I'm excited to
				collaborate on impactful projects and continue growing in the
				tech industry.
			</p>

			<p className="text-sm mt-5">
				If you'd like to get in touch, please{" "}
				<span className="underline underline-offset-2 decoration-input decoration-2">
					<Link href="/contact">send me an email</Link>
				</span>{" "}
				or reach out on social media.
			</p>

			<Separator className="mt-5" />
		</section>
	);
}
