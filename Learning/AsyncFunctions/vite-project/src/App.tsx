import './App.css'

function App() {

  return (
    <>
      <Todo title='go to gym' description='go to gym today' done={false}/>
    </>
  )
}

interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp) {
  return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
    </h2>
    <button>{props.done}</button>
  </div>

}

export default App
