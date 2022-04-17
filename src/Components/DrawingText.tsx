import styled from "@emotion/styled";
import {useEffect, useRef} from "react";

interface IPosition {
    x: number;
    y: number;
}

const Canvas = styled.canvas`
  cursor: crosshair;
  position: absolute;
  left: 0;
  top: 0;
`;

let position = {x: 0, y: window.innerHeight / 2};
let counter = 0;
let minFontSize = 8;
let letters =
    "안녕하세요 저는 웹 프론트엔드 개발자 안구환입니다. 이 글은 심심한 화면에 하나의 재미거리로 별 다른 정보를 드리고 있지 않습니다. 가독성이 매우 떨어지기 때문에 재미로만 봐주세요. 저는 현재 웹 Front-end를 기반으로 서버, 데이터베이스, 인프라로 역량을 확대해 나가고 있습니다. 궁극적으로 지향하는 목표는 Front-end 중심의 Full Stack 개발자가 되는 것 입니다.        ";
let mouse = {x: 0, y: 0, down: false};

function DrawingText() {
    const canvas = useRef<HTMLCanvasElement>(null);
    let context: CanvasRenderingContext2D | null | undefined;

    function distance(pt: IPosition, pt2: IPosition) {
        var xs = 0;
        var ys = 0;

        xs = pt2.x - pt.x;
        xs = xs * xs;

        ys = pt2.y - pt.y;
        ys = ys * ys;

        return Math.sqrt(xs + ys);
    }

    function textWidth(string: string, size: number) {
        context!.font = size + "px Georgia";
        return context!.measureText(string).width;
    }

    function draw() {
        if (mouse.down) {
            var d = distance(position, mouse);
            var fontSize = minFontSize + d / 2;
            var letter = letters[counter];
            var stepSize = textWidth(letter, fontSize);

            if (d > stepSize) {
                var angle = Math.atan2(mouse.y - position.y, mouse.x - position.x);

                context!.font = fontSize + "px Georgia";

                context!.save();
                context!.translate(position.x, position.y);
                context!.rotate(angle);
                context!.fillStyle = "White";
                context!.fillText(letter, 0, 0);
                context!.restore();

                counter++;
                if (counter > letters.length - 1) {
                    counter = 0;
                }

                //console.log (position.x + Math.cos( angle ) * stepSize)
                position.x = position.x + Math.cos(angle) * stepSize;
                position.y = position.y + Math.sin(angle) * stepSize;
            }
        }
    }

    function mouseMove(event: MouseEvent) {
        mouse.x = event.pageX;
        mouse.y = event.pageY;
        draw();
    }

    function mouseDown(event: MouseEvent) {
        mouse.down = true;
        position.x = event.pageX;
        position.y = event.pageY;
    }

    function mouseUp(event: MouseEvent) {
        mouse.down = false;
    }

    function doubleClick(event: MouseEvent) {
        canvas.current!.width = canvas.current!.width;
    }

    useEffect(() => {
        context = canvas.current?.getContext("2d");

        canvas.current!.width = window.innerWidth;
        canvas.current!.height = window.innerHeight;

        canvas.current!.addEventListener("mousemove", mouseMove, true);
        canvas.current!.addEventListener("mousedown", mouseDown, true);
        canvas.current!.addEventListener("mouseup", mouseUp, true);
        canvas.current!.addEventListener("mouseout", mouseUp, true);
        canvas.current!.addEventListener("dblclick", doubleClick, true);

        window.onresize = function () {
            console.log("sadfasdf");

            canvas.current!.width = window.innerWidth;
            canvas.current!.height = window.innerHeight;
        };
    });

    return <Canvas ref={canvas} id="canvas"></Canvas>;
}

export default DrawingText;
