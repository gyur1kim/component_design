import { FlyOut } from "./FlyOut/FlyOut"


function App() {

  return (
    <>
      <FlyOut>
        <FlyOut.Toggle/>
        <FlyOut.List>
          <FlyOut.Item>Edit</FlyOut.Item>
          <FlyOut.Item>Delete</FlyOut.Item>
        </FlyOut.List>
      </FlyOut>
    </>
  )
}

export default App
