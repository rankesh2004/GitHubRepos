import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {category: 'ALL', languageData: [], isLoading: true}

  componentDidMount() {
    this.getLanguageData()
  }

  getLanguageData = async () => {
    const {category} = this.state

    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${category}`,
    )
    const data = await response.json()
    console.log(data.popular_repos)
    const popularRepos = data.popular_repos

    const updatedData = popularRepos.map(eachItem => ({
      avatarUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))

    this.setState({languageData: updatedData, isLoading: false})
  }

  getRepoLanData = languageCategory => {
    this.setState(
      {category: languageCategory, isLoading: true},
      this.getLanguageData,
    )
  }

  render() {
    const {category, languageData, isLoading} = this.state
    console.log(languageData)
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="language-btn">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              languageFilterData={eachItem}
              key={eachItem.id}
              isLanguage={eachItem.id === category}
              getRepoLanData={this.getRepoLanData}
            />
          ))}
        </ul>
        {isLoading ? (
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        ) : (
          <ul className="language-card-container">
            {languageData.map(eachItem => (
              <RepositoryItem languageItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
