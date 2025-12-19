import { Productos } from "../../../data/menuItems";
import MenuItemCard from "../../Ui/MenuItemCard/MenuItemCard.jsx";
import Button from "../../Ui/Button/Button.jsx";
import style from "./Menu.module.css";

const Menu = ({ onSelectProduct, selectedProduct }) => {
  return (
    <div className={style.menuGrid}>
      {Productos.map((item) => (
        <MenuItemCard
          key={item.id}
          {...item}
          isSelected={selectedProduct?.id === item.id}
        >
          <Button
            type="button"
            onClick={() => onSelectProduct(item)}
          >
            Consultar
          </Button>
        </MenuItemCard>
      ))}
    </div>
  );
};

export default Menu;