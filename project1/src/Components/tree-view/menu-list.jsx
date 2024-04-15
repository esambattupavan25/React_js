
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  console.log("list", list)
  return (
    <ul className="menu-list-conatainer">
      {list && list.length
        ? ((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
