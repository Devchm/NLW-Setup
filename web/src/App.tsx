import './styles/global.css'
import './lib/dayjs'
//import { Habit } from "./components/Habit"
import { Header } from './components/Header'
import { SummerTable } from './components/SummaryTable'

export function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center ">
        <div className="w-full max-w-5xl px-6 flex flex-col gap-16">

          <Header />
          <SummerTable />



        </div>

      </div >
    </>
  )
}

//export default App
