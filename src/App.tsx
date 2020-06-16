import React, { useState } from "react";
import { FormArea } from "./components/FormArea/FormArea";
import { StickersArea } from "./components/StickersArea";
import ShowButton from "./components/ShowButton";
import { Stickers } from "./interfaces";

const getTodayDate = () => {
  const today = new Date();

  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  
  return yyyy + "-" + mm + "-" + dd;
}


const App = () => {
  const [stickersList, setStickersList] = useState<Stickers[]>([]);
  const [formViewStatus, setFormViewStatus] = useState<boolean>(true);
  const todayDate = getTodayDate();

  const [formState, setFormState] = useState<Stickers>({
    orderID: "",
    date: todayDate,
    quantity: "",
    material: "",
    chainLength: "",
    line1: "",
    line2: "",
    image: "",
    gift: false,
    fast: false,
  });

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
          formState={formState}
          setFormState={setFormState}
          setFormViewStatus={setFormViewStatus}
          todayDate={todayDate}
        />
      ) : (
          <ShowButton setFormViewStatus={setFormViewStatus} />
        )}

      <StickersArea
        formViewStatus={formViewStatus}
        setStickersList={setStickersList}
        stickersList={stickersList}
        setFormState={setFormState}
      />
    </div>
  );
}

export default App;
