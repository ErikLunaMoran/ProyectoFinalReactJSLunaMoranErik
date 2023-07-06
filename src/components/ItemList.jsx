import { Item } from "../components/Item";

export const ItemList = ({ products }) =>
  products.map((box) => <Item key={box.id} box={box} />);
