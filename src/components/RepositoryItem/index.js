import './index.css'

const RepositoryItem = props => {
  const {languageItem} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = languageItem
  return (
    <li className="language-card">
      <img src={avatarUrl} alt={name} className="avatar-img" />
      <p className="name">{name}</p>
      <div className="count-container">
        <p className="count">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="star"
            className="count-img"
          />
          <span>{starsCount}</span>
        </p>
        <p className="count">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="fork"
            className="count-img"
          />
          <span>{forksCount}</span>
        </p>
        <p className="count">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="issues"
            className="count-img"
          />
          <span>{issuesCount}</span>
        </p>
      </div>
    </li>
  )
}

export default RepositoryItem
