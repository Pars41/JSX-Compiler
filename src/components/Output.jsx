import { TextField } from "@mui/material";
import { compiler } from "../helper/compiler";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyToClipboard from "react-copy-to-clipboard";

const Output = ({ output, setOutput, input, setInput,notify }) => {
  setOutput(`${input && "<> \n"}  ${compiler(input)} ${input && "\n </>"}`);
  // setOutput(`<> \n ${input.replaceAll("class", "className").replaceAll("for","htmlFor")} \n </>`)

  return (
    <div className="output">
      <TextField
        id="outlined-multiline-static"
        label="JSX"
        multiline
        rows={20}
        sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.15) 6px 6px 3px" }}
        defaultValue="default"
        value={output}
      />
      <CopyToClipboard text={output}>
        <ContentCopyIcon onClick={notify} fontSize="large" color="primary" sx={{cursor:"pointer"}} className="icon" />
      </CopyToClipboard>
    </div>
  );
};

export default Output;
