import React, { useRef } from "react";

export default function EditForm({ handleEdit, id, setIsEditing }) {
  const ref = useRef();

  // Setup onChange handler for edit input
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (ref.current.value) {
      const handleEditInput = ref.current.value;
      handleEdit({ text: handleEditInput, id });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    ref.current.value = "";
  };

  return (
    <div>
      <form
        className="flex my-6 mx-0 items-center justify-center"
        onChange={handleEditSubmit}
      >
        <input
          className="block shadow-lg rounded px-2 pt-2 pb-2 w-3/5 bg-pink-100"
          type="text"
          ref={ref}
          placeholder="Edit an item"
        />
        <span
          className="material-symbols-outlined cursor-pointer hover:opacity-30 ml-2"
          onChange={() => handleEditSubmit}
          onClick={() => setIsEditing(false)}
        >
          add_task
        </span>
        <span
          className="material-symbols-outlined cursor-pointer hover:opacity-30 ml-2"
          onSubmit={() => handleCancel}
          onClick={() => setIsEditing(false)}
        >
          cancel
        </span>
      </form>
    </div>
  );
}