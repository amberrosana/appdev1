import './App.css'

function Button() {
  return(
    <button>Edit Button</button>
  )
}

function AdminPanel() {
  return(
    <h1>This is the Admin Panel</h1>
  )
}

function App() {
  return (
    <>
      <AdminPanel />
      <Button />
    </>
  )
}

export default App
