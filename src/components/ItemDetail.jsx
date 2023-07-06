export const ItemDetail = ({ box }) => {
  return (
    <>
      <div>{box.box_factory}</div>
      <div>{box.box_model}</div>
      <div>{box.box_year}</div>
      <div>{box.box_category}</div>
      <img src={box.img} alt={box.box_model} />
    </>
  );
};
