export const PostHeader = ({ meta, isBlogPost }) => (
  <>
    <h1 className={isBlogPost ? 'great-title' : null}>{meta.title}</h1>
    <div className="notes mb-16">
      <span>{meta.date}</span> • <span>{meta.readTime} min read</span>
    </div>
  </>
)
