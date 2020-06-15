import React, { useState } from "react";
import { FormArea } from "./components/FormArea/FormArea";
import { StickersArea } from "./components/StickersArea";
import ShowButton from "./components/ShowButton";
import { Stickers } from "./interfaces";

const getTodayDate = () => {
  const today = new Date();
  today.setDate(new Date().getDate() + 1);

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
    orderID: "11",
    date: todayDate,
    quantity: "",
    material: "silver",
    chainLength: "",
    line1: "line1",
    line2: "line2",
    image:
      "https://instagram.ftlv6-1.fna.fbcdn.net/v/t51.2885-15/e15/s320x320/98331657_291805631844341_3782185453709637350_n.jpg?_nc_ht=instagram.ftlv6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=S3XzhPEIHGgAX_z8V84&oh=666e229c5f174508a405cb4895b9043b&oe=5F0A1887",
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
