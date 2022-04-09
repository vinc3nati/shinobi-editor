import { get } from "axios";
import { useState } from "react";
import { FaRegLaughBeam } from "react-icons/fa";
import { useTextEditor } from "../../contexts/editor-context";
import { Modal } from "../Modal/Modal";

export const Gif = () => {
  const [show, setShow] = useState(false);
  const { editor } = useTextEditor();

  const getGifFromTenor = async (query) => {
    if (query) {
      try {
        const {
          data: { results },
        } = await get(
          `https://g.tenor.com/v1/search?q=${query}&key=${process.env.TENOR_API_KEY}`
        );
        console.log(results);
        const gifURL = results[0].media[0]?.mp4?.url;
        if (gifURL) {
          editor.chain().focus().setIframe({ src: gifURL }).run();
        }
      } catch (err) {
        alert("No Gif Found");
        console.error(err);
      } finally {
        setShow(false);
      }
    }
  };
  return (
    <>
      <li
        className={editor.isActive("iframe") ? "action active" : "action"}
        onClick={() => setShow(true)}
        title="GIF"
      >
        <FaRegLaughBeam />
      </li>
      {show && (
        <Modal
          label="Search Gif"
          operations={{
            cancel: () => setShow(false),
            proceed: getGifFromTenor,
          }}
        />
      )}
    </>
  );
};
