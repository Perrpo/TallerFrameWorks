// Este componente muestra la lista de categorías ya buscadas y permite seleccionar una para ver sus GIFs
const ListGroup = ({ categories, setSelectedCategory }) => {
  return (
    <div className="mt-3">
      <h5>Categorías anteriores</h5>
      <ul className="list-group">
        {categories.length === 0 ? (
          // Si no hay categorías aún
          <li className="list-group-item">No hay categorías aún.</li>
        ) : (
          // Lista de categorías guardadas
          categories.map((cat, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCategory(cat)} // Al hacer clic, se muestra esa categoría
            >
              {cat}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListGroup;
