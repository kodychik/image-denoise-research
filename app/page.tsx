import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Final Report - A Semester on Deep Learning and Image Denoising
      </h1>
      <p className="mb-4">
        {`This report outlines my journey in exploring deep learning techniques under the mentorship of Francisco Estrada
        at the University of Toronto. My work spanned foundational learning, implementing neural networks, studying state-of-the-art architectures,
        and applying them to image processing tasks, particularly image restoration and denoising. The key findings and methodologies are described
        in detail in the following sections.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
