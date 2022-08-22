import './App.css';
import { JournalApp } from './JournalApp';
import { BrowserRouter } from 'react-router-dom';
export default function App() {
  return (
    <>
<BrowserRouter>
    <JournalApp />
 </BrowserRouter>
    </>
  )
}
