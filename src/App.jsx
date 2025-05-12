import { AddCategory } from "./components/AddCategory";
import { GridGif } from "./components/GridGif";
import { useState } from "react";
import ListGroup from "./components/ListGroup";

// Componente principal de la aplicación
const App = () => {
  const [categories, setCategories] = useState([]); // Lista de búsquedas anteriores
  const [selectedCategory, setSelectedCategory] = useState(""); // Categoría actual mostrada

  return (
    <div className="container mt-3 mb-5">
      <h1 className="mb-3">Gif Expert</h1>

      {/* Componente para ingresar nuevas búsquedas */}
      <AddCategory
        categories={categories}
        setCategories={setCategories}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Lista de categorías anteriores (historial) */}
      <ListGroup
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Muestra los gifs de la categoría actual */}
      {selectedCategory && (
        <GridGif key={selectedCategory} category={selectedCategory} />
      )}
    </div>
  );
};

export default App;
