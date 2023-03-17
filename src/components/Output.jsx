import { TextField } from "@mui/material";
import { compiler } from "../helper/compiler";

const Output = ({ output, setOutput, input, setInput }) => {
  setOutput(`${input && "<> \n"}  ${compiler(input)} ${input && "\n </>"}`);
  // setOutput(`<> \n ${input.replaceAll("class", "className").replaceAll("for","htmlFor")} \n </>`)

  return (
    <TextField
      id="outlined-multiline-static"
      label="JSX"
      multiline
      rows={20}
      sx={{width:"50%",boxShadow: "rgba(0, 0, 0, 0.15) 6px 6px 3px"}}

      defaultValue="default"
      value={output}
    />
  );
};

export default Output;
