import { Stack } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  
const [input, setInput] = useState(`<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>`)
const [output, setOutput] = useState(input)
const notify = () => toast("Copied!");

  return (
    <Stack spacing={2}>
      <Header />
      <Stack spacing={5} padding={5}  direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
        <Input output={output} input={input} setInput={setInput} setOutput={setOutput}/>
        <Output notify={notify} output={output} input={input} setInput={setInput} setOutput={setOutput}/>
      </Stack>
    <ToastContainer 
    position="bottom-center"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </Stack>
  );
}

export default App;
