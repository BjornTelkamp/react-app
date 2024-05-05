import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import { useState } from "react";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      <ListGroup
        items={["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"]}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>

      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            Hello <span className="fw-bold">World</span>
          </Alert>
        )}

        <Button color="primary" onClick={() => setAlertVisible(true)}>
          Click me!
        </Button>
      </div>
    </>
  );
}

export default App;
