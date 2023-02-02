import './author.css'

export default function Author({userName, created, profileImg}) {
  return (
    <dl className="author-wrap">
      <dt className="a11y-hidden">Author</dt>
      <dd className="author"><img src={profileImg} alt="" /> {userName}</dd>
      <dt className="a11y-hidden">Created</dt>
      <dd className="created">{created}</dd>
    </dl>
)
}
