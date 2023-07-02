import {PageReactWidgetController} from '@beyond-js/react-18-widgets/page';
import {View} from "./views";
import { Store } from './store';
import { ns_2 } from '@beyond-js/widgets/controller';

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return View;
    }

    #store: Store

    createStore() {
        this.#store = new Store()
        return this.#store
    }
}