
import './App.css';
import {useState} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

function App() {


  
  const [text, setText] = useState ("")
  const [isCopied, setCopied] = useClipboard(text);
  
  const stopListening = () => { SpeechRecognition.stopListening()}
  const startListening = () => {SpeechRecognition.startListening({ continuous: true })}
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  
  
  return (
   <>
    <div className="container">
      <h2>Speech to Text converter</h2>
      <br/>
      <p>A React App that converts speech to text</p>
    
      <div className="main-content" onClick={()=>setText(transcript)}>
        {transcript}
      </div>

      

      <div className="btn-style">
      <button onClick={setCopied}>
      {isCopied ? 'Copied' : 'Copy to Clipboard'}
    </button>
        <button onClick ={startListening}>Start Listening</button>
        <button onClick ={stopListening}>Stop Listening</button>
      </div>
    
    </div>
   </>
  );
}

export default App;
