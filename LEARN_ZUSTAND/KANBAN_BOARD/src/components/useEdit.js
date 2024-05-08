import { useState } from "react";

const useEdit = () => {
  const [isEdit, setIsEdit] = useState(false);
  const onEdit = () => {
    setIsEdit(true);
  };
  return { isEdit, onEdit };
};

export default useEdit;
