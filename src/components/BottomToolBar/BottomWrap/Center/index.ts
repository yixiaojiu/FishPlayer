
import Danmaku from "@/components/danmaku/danmakuIcon";
import DanmakuSet from "@/components/danmaku/danmakuSet";
import { Player } from "@/page";
import { Video } from "@/player/video";
import { Component } from "@/utils/createElement";


class CenterContainer extends Component {
    constructor(container: HTMLElement, video: Video, Player: Player) {
        super(container, "div", { class: "toolbox-container center" });
        const { center } = video.options?.components ?? {};
        new Danmaku(this.element);
        new DanmakuSet(this.element,video);
        if (center) {
            center.forEach((component) => {
                new component(this.element, video, Player);
            })
        }
    }
}

export default CenterContainer;