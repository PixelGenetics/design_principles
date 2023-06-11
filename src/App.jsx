import './App.css'
/*
import logo from './assets/design-principles-logo.svg'
import gitter from './assets/gitter.svg'
import twitter from './assets/twitter-icon.svg'
import mastodon from './assets/mastodon-icon.svg'
import github from './assets/github-icon.svg'
 */
import Media from 'react-media'
import Mobile from './components/Mobile'
function App() {

  return (
    <>    
    <div className='Page'>
      <Media query="(min-width: 501px)">
        {(matches) => {
          return matches ? 
              "Hola"
            : 
            (
              <Mobile />
            )
        }}
      </Media>
    </div>
    </>
  )
}

export default App
