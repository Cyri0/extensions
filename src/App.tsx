import './App.css'
import ExtensionCard, { type ExtensionCardType } from './components/ExtensionCard'

function App() {

  let Hello: ExtensionCardType = {icon: "🤪", title: "Hello", description: "Lorem ipsum"}

  let CardList: ExtensionCardType[] = [
    {icon: "😍", title: "Bye", description: "Lorem ipsum"},
    {icon: "🔥", title: "Fire", description: "Lorem ipsum"},
    {icon: "😂", title: "Funny", description: "Lorem ipsum"}
  ]

  return (
    <div className='cardHolder'>
      <ExtensionCard icon='🥸' title='DevLens' description='Lorem ipsum'/>

      <ExtensionCard {...Hello} />
      
      { CardList.map((e, idx) => <ExtensionCard key={idx} {...e} />) }
    </div>
  )
}

export default App
