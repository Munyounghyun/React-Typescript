import {useCallback, useState} from 'react'
import {Avatar, Icon, Title} from '../components'
import * as D from '../data'
import {useToggle} from '../hooks'

export default function FetchTest() {
  //API 서버에서 가져온 데이터 선언
  const [loading, toggleLoading] = useToggle()
  const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const getRandomUser = useCallback(() => {
    toggleLoading()
    D.fetchRandomUser().then(setRandomUser).catch(setError).finally(toggleLoading)
  }, [toggleLoading])

  return (
    <section className="mt-4">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        <button className="btn btn-sm btn-primary" onClick={getRandomUser}>
          <Icon name="get_app" />
          <span>get random user</span>
        </button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <p className="btn btn-primary loading"></p>
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center">
          <button className="btn btn-primary loading">{error.message}</button>
        </div>
      )}
      {randomUser && (
        <div className="flex justify-center p-4 mt-4">
          <Avatar src={randomUser.picture.large} />
          <div className="ml-4">
            <p className="text-xl ">
              {randomUser.name.title}.{randomUser.name.first}
              {randomUser.name.last}
            </p>
            <p className="italic text-gray-600">{randomUser?.email}</p>
          </div>
        </div>
      )}
    </section>
  )
}