import React from "react";
import { MytodoSide } from "./style";
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaSignature } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { MdRoomPreferences } from "react-icons/md";

function Mytodo({ children }) {
  return (
    <MytodoSide>
      <div className="Mytodo-Main-Section">
        <div className="todo-Container">{children}</div>
      </div>
    </MytodoSide>
  );
}

export default Mytodo;
