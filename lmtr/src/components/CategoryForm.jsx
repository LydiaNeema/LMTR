import { useState, useEffect } from "react";

export default function CategoryForm({ selected, onSave, onCancel }) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(selected?.name || "");
  }, [selected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = name.trim();
    if (!cleaned) {
      return alert("Category name is required");
    }
    onSave({ ...selected, name: cleaned });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={name}
        placeholder="Category name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">
        {selected ? "Update" : "Add Category"}
      </button>
      {selected && (
        <button type="button" onClick={onCancel} style={{ marginLeft: '0.5rem' }}>
          Cancel
        </button>
      )}
    </form>
  );
}