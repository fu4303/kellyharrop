export const PostHeader = ({ meta, isBlogPost }) => (
  <>
    <div className="notes mb-2 dark:text-gray-400">{meta.date}</div>
    <h1 className={isBlogPost ? 'mb-10' : null}>{meta.title}</h1>
  </>
)
