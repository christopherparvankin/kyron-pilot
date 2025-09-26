import { redirect } from 'next/navigation';

interface ProviderPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { slug } = await params;
  
  // Redirect to the static provider pages
  const validSlugs = ['arjun-iyengar', 'adam-paduszynski', 'devarajan-iyengar'];
  
  if (validSlugs.includes(slug)) {
    redirect(`/providers/${slug}`);
  } else {
    // Redirect to providers page if slug is not valid
    redirect('/providers');
  }
}
