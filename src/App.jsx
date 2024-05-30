import * as $ from './styles/styles';

function App() {

  return (
    <div>
      <h1>Hello world</h1>
      <div style={{...$.w250px, ...$.h200px, borderStyle: 'solid', ...$.b2, ...$.p6, ...$.br12}}>
        <div style={{...$.w25, ...$.h25, borderStyle: 'solid', ...$.b3, ...$.bbr10}}>

        </div>
      </div>
    </div>
  )
}

export default App
