import { useState, useEffect } from "react";

 function CategoryForm({ selected, onSave, onCancel }) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(selected?.name || "");
  }, [selected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Category name is required");

    onSave({ ...selected, name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category name"
      />
      <button type="submit">{selected ? "Update" : "Add"}</button>
      {selected && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default  CategoryForm


