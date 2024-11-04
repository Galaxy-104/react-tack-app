import { appContainer, board, buttons } from "./App.css"

function App() {
  return (
    <div className={appContainer}>
      <div className={board}>

      </div>

      <div>
        <button className={buttons}>
          게시판 생성하기
        </button>
      </div>
    </div>
  )
}

export default App
