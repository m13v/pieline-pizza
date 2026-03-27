import { Metadata } from "next";
import { notFound } from "next/navigation";
import pages from "../../../../data/pages.json";
import LandingPage from "./LandingPage";

type PageData = (typeof pages)[number];

export async function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.meta_description,
    openGraph: {
      title: page.title,
      description: page.meta_description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.meta_description,
    },
    robots: "index, follow",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug) as PageData | undefined;
  if (!page) notFound();
  return <LandingPage page={page} />;
}
