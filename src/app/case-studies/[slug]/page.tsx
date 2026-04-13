import { Metadata } from "next";
import CaseStudyDetailPage from "@/views/CaseStudyDetailPage";
import { caseStudies } from "@/data/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.codename} | Case Study`,
    description: study.challenge,
    keywords: [study.type, study.industry, ...study.tech],
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
  };
}

export default function Page() {
  return <CaseStudyDetailPage />;
}
