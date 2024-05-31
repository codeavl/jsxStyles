import * as _ from './styles/styles';

function App() {

  return (
    <div>
      <h1>Hello world</h1>
      <div style={{..._.w250px, ..._.h200px, borderStyle: 'solid', ..._.b2, ..._.p6, ..._.br12}}>
        <div style={{..._.w25, ..._.h25, borderStyle: 'solid', ..._.b3, ..._.bbr10, ..._.borderGreen}}>
        </div>
        <p style={{..._.fs20, ..._.textBlue, ..._.bgOrange}}>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default App
