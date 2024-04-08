import { useEffect, useState } from "react";

export default function Randomcolor() {
    const [typeofcolor, setTypeofcolor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)

    }

    function handleCreateRandomHexcolor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexcolor = "#";

        for (let i = 0; i < 6; i++) {
            hexcolor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexcolor);
    }
    function handleCreateRandomRgbcolor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
        if (typeofcolor === "rgb") handleCreateRandomRgbcolor();
        else {
          handleCreateRandomHexcolor();
        }
      }, [typeofcolor]);
    
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button onClick={() => setTypeofcolor("hex")}>Create HEX Color</button>
            <button onClick={() => setTypeofcolor("rgb")}>Create RGB Color</button>
            <button onClick={typeofcolor === "hex" ? handleCreateRandomHexcolor : handleCreateRandomRgbcolor}>Generate Random Color</button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <h3>{typeofcolor === "rgb" ? 'RGB color' : 'HEX color'}</h3>
                <h1>{color}</h1>

            </div>
        </div>
    );
}