import ReactDOM from 'react-dom/client'
import './index.css'

console.log('test');

function Test() {
    return (
        <div>test</div>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Test/>
)
