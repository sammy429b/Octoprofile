import React from 'react'
import GithubContext from './GithubContext'

const Githubprovider = ({childern}) => {
  const[info,setInfo] = React.useState('sammy429b')

  return (
    <GithubContext.Provider value={{info,setInfo}}>
      {childern}
    </GithubContext.Provider>
  )
}

export default Githubprovider
