import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterData, getRepoLanData, isLanguage} = props
  const {language, id} = languageFilterData
  const onClickLanguage = () => {
    getRepoLanData(id)
  }
  const isActive = isLanguage ? 'display' : ''
  const isActive1 = isLanguage ? 'display1' : ''
  return (
    <li className={`${isActive} btn-card`}>
      <button
        type="button"
        onClick={onClickLanguage}
        className={`${isActive1} language-btn`}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
