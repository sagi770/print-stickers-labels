import React, { useState } from "react";
import { FormArea } from "./components/FormArea/FormArea";
import { StickersArea } from "./components/StickersArea";
import ShowButton from "./components/ShowButton";
import { Stickers } from "./interfaces";


function App() {
  const [stickersList, setStickersList] = useState<Stickers[]>([]);
  const [formViewStatus, setFormViewStatus] = useState<boolean>(true);

  //USE MOBX !!!
  //USE CSS file

  // const setStickers = (stickersList: Stickers[]) => {
  //   setStickersList(stickersList);
  // }

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
