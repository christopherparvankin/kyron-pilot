import { redirect } from 'next/navigation';

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Redirect to the main services page
  redirect('/services');
}