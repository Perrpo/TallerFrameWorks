import { useState } from "react";

// Este componente permite al usuario agregar nuevas categorías de búsqueda
export const AddCategory = ({ categories, setCategories, setSelectedCategory }) => {
  const [searchValue, setSearchValue] = useState("");

  // Actualiza el valor del input mientras el usuario escribe
  const onInputChange = (event) => setSearchValue(event.target.value);

  // Esta función se ejecuta al hacer clic en el botón o presionar Enter
  const onCategorySubmit = () => {
    const trimmed = searchValue.trim();
    if (trimmed.length <= 1 || categories.includes(trimmed)) return;

    // Agrega la nueva categoría
    setCategories([...categories, trimmed]);

    // Actualiza la categoría seleccionada actual para mostrar sus GIFs
    setSelectedCategory(trimmed);

    // Limpia el input
    setSearchValue("");
  };

  // Permite usar Enter como alternativa al botón
  const onKeyDown = (e) => {
    if (e.key === "Enter") onCategorySubmit();
  };

  return (
    <div className="input-group mt-3">
      <input
        className="form-control"
        placeholder="Buscar GIF..."
        type="text"
        value={searchValue}
        onChange={onInputChange}
        onKeyDown={onKeyDown} // Detecta tecla Enter
      />
      <button className="btn btn-outline-secondary" type="button" onClick={onCategorySubmit}>
        Agregar
      </button>
    </div>
  );
};
