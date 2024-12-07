import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Findings',
  description: 'My Findings on state of the art image denoising techniques.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Progression of Understanding</h1>
      <BlogPosts />
    </section>
  )
}
