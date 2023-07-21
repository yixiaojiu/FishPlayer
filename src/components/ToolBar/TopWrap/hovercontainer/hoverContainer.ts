import PLAY_EVENT from "@/constant/event";
import Component from "@/utils/createElement";
import currentBar from "./currentbar";

class HoverContainer extends Component {

    constructor(container: HTMLElement) {
        super(container, 'div', { class: 'hover-container' });
        new currentBar(this.element).element as HTMLElement;
        this.initEventHub();
    }
    initEventHub() {
        Component.eventHub.on(PLAY_EVENT.MOUSEMOVE, (x:string) => {
            this.element.style.display = 'block';
            this.element.style.left = x+'px';
        })
    }
}

export default HoverContainer;