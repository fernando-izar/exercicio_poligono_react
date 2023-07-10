import { useState } from "react";
import "./App.css";
import { Card, Button, notification, Input, Space, Col } from "antd";
import Polygon from "./components/Polygon";
import calculaMenorDistancia from "./utils/calculaMenorDistancia";
import verificaSeEstaPrimeiroQuadrante from "./utils/verificaSeEstaPrimeiroQuadrante";
import moveParaPrimeiroQuadrante from "./utils/moveParaPrimeiroQuadrante";

function App() {
  const [points, setPoints] = useState([]);
  const [scale, setScale] = useState(1);
  const [minValue, setMinValue] = useState(null);

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = async (e) => {
        const contents = e.target?.result;
        let text;

        if (typeof contents === "string") {
          text = contents;
        } else if (contents instanceof ArrayBuffer) {
          const decoder = new TextDecoder();
          text = decoder.decode(contents);
        } else {
          throw new Error("Invalid file type");
        }

        const rows = text.split("\n").slice(1);

        const newPoints = [];
        rows.forEach((row) => {
          const columns = row.split(",");
          const x = parseFloat(columns[0]);
          const y = parseFloat(columns[1]);

          newPoints.push([x, y]);
        });

        const estaNoPrimeiroQuadrante =
          verificaSeEstaPrimeiroQuadrante(newPoints);
        if (!estaNoPrimeiroQuadrante) {
          const pontosMovidos = moveParaPrimeiroQuadrante(newPoints);
          setPoints(pontosMovidos);
        } else {
          setPoints(newPoints);
        }

        notification.success({
          message: "Pontos carregados com sucesso",
        });
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      notification.error({
        message: "Erro ao carregar os pontos",
      });
    }
  };

  const uploadPoints = async () => {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".csv";
      fileInput.addEventListener("change", handleFileUpload, false);
      fileInput.click();
    } catch (error) {
      notification.error({
        message: "Erro ao carregar os pontos",
      });
    }
  };

  return (
    <Card title="Cálculo da menor abertura interna">
      <Col>
        <Space direction="horizontal">
          <Button onClick={uploadPoints} type="primary">
            Carregar Dados
          </Button>
          <Button
            onClick={() => setMinValue(calculaMenorDistancia(points))}
            type="primary"
          >
            Calcular
          </Button>
          <Input
            type="number"
            value={scale}
            minValue={1}
            onChange={(e) => setScale(e.target.value)}
            placeholder="Escala"
          />
        </Space>
      </Col>
      {minValue && minValue !== Infinity && (
        <p>Menor abertura interna: {minValue}</p>
      )}
      <Polygon points={points} scale={scale} />
    </Card>
  );
}

export default App;
