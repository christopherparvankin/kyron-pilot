import { redirect } from 'next/navigation';

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  
  // Redirect to the main locations page
  redirect('/locations');
}