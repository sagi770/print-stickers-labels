import React, { useState } from "react";
import { FormArea } from "./components/FormArea";
import StickersArea from "./components/StickersArea";
import ShowButton from "./components/ShowButton";

function App() {
  const [stickersList, setStickersList] = useState([]);
  const [formViewStatus, setFormViewStatus] = useState(true);

  //USE MOBX !!!
  return (
    <div>
      {formViewStatus ? (
        <FormArea
          setStickersList={setStickersList}
          stickersList={stickersList}
          setFormViewStatus={setFormViewStatus}
        />
      ) : (
        <ShowButton setFormViewStatus={setFormViewStatus} />
      )}

      <StickersArea
        formViewStatus={formViewStatus}
        setStickersList={setStickersList}
        stickersList={stickersList}
      />
    </div>
  );
}

export default App;
