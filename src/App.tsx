import { Button } from "./components/button"

export default function App() {
  return (
    <div className= "max-w-2x1 mx-auto p-4 flex flex-col gap-4">
      <Header></Header>
    </div>
  )
}
function Header () {
  return (
    <header className= "flex items-center justify-between">
        <div className="flex flex-col gap-1 items-end">
          <h1 className="text-zinc-100 text-3xl font-bold">Habit Tracker</h1>
          <span className="text-zinc-400 text-sm">1/1 done today</span>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-400 text-sm">Apr 6 - Apr 12</span>
            <div className="flex items-center gap-3">
              <Button >prev</Button>
              <Button >next</Button>
            </div>
          </div>
        </div>
    </header>
  )
} 
