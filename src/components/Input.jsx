import { TextField } from "@mui/material"

const Input = ({output,setOutput,input,setInput}) => {
  return (
    <TextField
          id="outlined-multiline-static"
          label="HTML"
          multiline
          rows={20}
          
        sx={{width:"50%",boxShadow: "rgba(0, 0, 0, 0.15) 6px 6px 3px"}}
          defaultValue={input}
          onChange={(e)=> setInput(e.target.value) }
        />
  )
}

export default Input