import Random from './Components/Random'
import Tag from './Components/Tag'
import './App.css';

function App() {
  return (
    <div className="w-full h-full flex flex-col relative items-center">
      <h1 className='bg-blue-500 w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold rounded-md'>RANDOM GIF</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
      <Random/>
      <Tag/>
      </div>
    </div>
  );
}

export default App;
