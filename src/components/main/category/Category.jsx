import './category.css'

export default function Category({category}) {
  return (
    <dl className="category">
      <dt className="a11y-hidden">Category</dt>
      <dd>{category[0]}</dd>
      <dd>{category[1]}</dd>
    </dl>
  )
}
