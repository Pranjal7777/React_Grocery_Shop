export const AddToList = ({ item, remove, e }) => {
  console.log(e);
  return (
    <div>
      <span>{item}</span>{" "}
      <button
        onClick={(item) => {
          remove(e.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};
