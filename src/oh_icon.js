import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiTable,
} from "oh-vue-icons/icons/bi";

addIcons(
  BiTable,
);

// register components
const registerIcon = (app) => {
  app.component('v-icon', OhVueIcon);
}

export default registerIcon