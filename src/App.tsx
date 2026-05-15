import Button from './components/Button'
import Display from './components/Display'

function App() {
  return (
    <div>
      <Display value="123456789" />

      <Button
        label="7"
        onClick={() => console.log('pressed')}
      />
    </div>
  )
}

export default App