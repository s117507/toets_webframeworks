import { useState } from 'react'
import { rainbow } from "rainbow-colors-array-ts";

const colors = rainbow(100);
interface Colors {
  hex: string;
}

const ColorList = () => {

    let [colorList , setColorList] = useState<Colors[]>([]);;
    const [hex, setHex] = useState("")

    const AddColorList = () => {
      setColorList([...colorList, {hex: hex}]);
    }

    return(
      <select>
        {colorList.map((color,i) => (
          <option onClick={ColorList} value={color.hex} style={{display: "flex", flexWrap: "wrap", width: 50, height: 50, backgroundColor: color.hex, cursor: "pointer" }}/>
        ))}
      </select>
    )
}

function App() {



  return (
    <>      
    <h1>Oefening 1</h1>
    <div style={{display: 'flex', flexFlow: "row wrap", gap: 5, alignItems: "flex-start", marginLeft: 2, marginRight: 2}}>
      <button>Remove</button>
      <div></div>
      {colors.map((color, i) =>(
        <button key={i} onClick={ColorList} value={color.hex} style={{ color: "transparent", display: "flex", flexWrap: "wrap", width: 50, height: 50, backgroundColor: color.hex, cursor: "pointer", border: "none" }}/>
        ))}
    </div>
    </>
  );
}

export default App
