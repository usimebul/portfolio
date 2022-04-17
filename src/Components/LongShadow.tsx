import styled from "@emotion/styled";
import {useEffect, useRef} from "react";

const Canvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

interface IPos {
    x: number;
    y: number;
}

interface IDot {
    p1: IPos;
    p2: IPos;
    p3: IPos;
    p4: IPos;
}


const colors = ["#08fdd8", "#e6616b", "#5cd3ad"];

function LongShadow() {
    class Box {
        x: number;
        y: number;
        r: number;
        halfSize: number;
        shadowLength: number;
        color: string;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D | null;

        constructor(canvas: HTMLCanvasElement) {
            this.canvas = canvas;
            this.context = canvas.getContext("2d");
            this.halfSize = Math.floor(Math.random() * 50 + 1);
            this.shadowLength = 2000;
            this.x = Math.floor(Math.random() * canvas.width + 1);
            this.y = Math.floor(Math.random() * canvas.height + 1);
            this.r = Math.random() * Math.PI;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        getDots(): IDot {
            let full = (Math.PI * 2) / 4;

            let p1 = {
                x: this.x + this.halfSize * Math.sin(this.r),
                y: this.y + this.halfSize * Math.cos(this.r)
            };
            let p2 = {
                x: this.x + this.halfSize * Math.sin(this.r + full),
                y: this.y + this.halfSize * Math.cos(this.r + full)
            };
            let p3 = {
                x: this.x + this.halfSize * Math.sin(this.r + full * 2),
                y: this.y + this.halfSize * Math.cos(this.r + full * 2)
            };
            let p4 = {
                x: this.x + this.halfSize * Math.sin(this.r + full * 3),
                y: this.y + this.halfSize * Math.cos(this.r + full * 3)
            };

            return {
                p1: p1,
                p2: p2,
                p3: p3,
                p4: p4
            };
        }

        rotate() {
            let speed = (60 - this.halfSize) / 20;
            this.r += speed * 0.002;
            this.x += speed;
            this.y += speed;
        }

        draw() {
            let dots = this.getDots();
            this.context!.beginPath();
            this.context!.moveTo(dots.p1.x, dots.p1.y);
            this.context!.lineTo(dots.p2.x, dots.p2.y);
            this.context!.lineTo(dots.p3.x, dots.p3.y);
            this.context!.lineTo(dots.p4.x, dots.p4.y);
            this.context!.fillStyle = this.color;
            this.context!.fill();

            if (this.y - this.halfSize > this.canvas.height) {
                this.y -= this.canvas.height + 100;
            }
            if (this.x - this.halfSize > this.canvas.width) {
                this.x -= this.canvas.width + 100;
            }
        }

        drawShadow() {
            let dots = this.getDots();
            let angles = [];
            let points = [];

            let dot: keyof typeof dots;

            for (dot in dots) {
                let angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
                let endX =
                    dots[dot].x + this.shadowLength * Math.sin(-angle - Math.PI / 2);
                let endY =
                    dots[dot].y + this.shadowLength * Math.cos(-angle - Math.PI / 2);
                angles.push(angle);
                points.push({
                    endX: endX,
                    endY: endY,
                    startX: dots[dot].x,
                    startY: dots[dot].y
                });
            }

            for (let i = points.length - 1; i >= 0; i--) {
                let n = i == 3 ? 0 : i + 1;
                this.context!.beginPath();
                this.context!.moveTo(points[i].startX, points[i].startY);
                this.context!.lineTo(points[n].startX, points[n].startY);
                this.context!.lineTo(points[n].endX, points[n].endY);
                this.context!.lineTo(points[i].endX, points[i].endY);
                this.context!.fillStyle = "#1d1d1d";
                this.context!.fill();
            }
        }
    }

    let boxes: Array<Box> = [];
    const light = {
        x: 160,
        y: 200
    };

    function collisionDetection(b: number) {
        for (let i = boxes.length - 1; i >= 0; i--) {
            if (i != b) {
                let dx =
                    boxes[b].x + boxes[b].halfSize - (boxes[i].x + boxes[i].halfSize);
                let dy =
                    boxes[b].y + boxes[b].halfSize - (boxes[i].y + boxes[i].halfSize);
                let d = Math.sqrt(dx * dx + dy * dy);
                if (d < boxes[b].halfSize + boxes[i].halfSize) {
                    boxes[b].halfSize =
                        boxes[b].halfSize > 1 ? (boxes[b].halfSize -= 1) : 1;
                    boxes[i].halfSize =
                        boxes[i].halfSize > 1 ? (boxes[i].halfSize -= 1) : 1;
                }
            }
        }
    }

    const canvas = useRef<HTMLCanvasElement>(null);
    let context: CanvasRenderingContext2D | null;

    function drawLight() {
        context!.beginPath();
        context!.arc(light.x, light.y, 1000, 0, 2 * Math.PI);

        let gradient = context!.createRadialGradient(
            light.x,
            light.y,
            0,
            light.x,
            light.y,
            1000
        );

        gradient.addColorStop(0, "#252525");
        gradient.addColorStop(1, "#2e2e2e");
        context!.fillStyle = gradient;
        context!.fill();

        context!.beginPath();
        context!.arc(light.x, light.y, 20, 0, 2 * Math.PI);
        gradient = context!.createRadialGradient(
            light.x,
            light.y,
            0,
            light.x,
            light.y,
            5
        );

        context!.fill();
    }

    function draw() {
        if (!canvas.current) return;
        context!.clearRect(0, 0, canvas.current.width, canvas.current.height);
        drawLight();

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].rotate();
            boxes[i].drawShadow();
        }
        for (let i = 0; i < boxes.length; i++) {
            collisionDetection(i);
            boxes[i].draw();
        }
        requestAnimationFrame(draw);
    }

    function resize() {
        let box = canvas.current!.getBoundingClientRect();
        canvas.current!.width = box.width;
        canvas.current!.height = box.height;
    }

    window.onresize = resize;

    useEffect(() => {
        context = canvas.current!.getContext("2d");
        canvas.current!.onmousemove = function (e: MouseEvent) {
            light.x = e.offsetX;
            light.y = e.offsetY;
        };

        resize();
        draw();

        while (boxes.length < 14) {
            boxes.push(new Box(canvas.current!));
        }
    });

    return <Canvas ref={canvas} id="canvas"/>;
}

export default LongShadow;
