import './App.css'
import Left from './components/Left/Left'
import Right from './components/Right/Right'

function App() {

  return (
    <div className='lg:flex lg:justify-between'>
      <Left />
      <Right /> 
    </div>
  )
}

export default App
