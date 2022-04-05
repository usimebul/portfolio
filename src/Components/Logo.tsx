import {useEffect, useRef} from "react";
import styled from "@emotion/styled";

const Canvas = styled.canvas`
  width: 65px;
  height: 91px;
  background-color: transparent;  
`

const data = 'data:image/gif;base64,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'

interface IMouse {
    x: number,
    y: number,
    down: boolean
}


interface INodes {
    density: number,
    drawDistance: number,
    baseRadius: number,
    maxLineThickness: number,
    reactionSensitivity: number,
    lineThickness: number,

    points: Array<any>,
    mouse: IMouse,
    animation: any,
    canvas: HTMLCanvasElement | null,
    context: CanvasRenderingContext2D | null,
    bgImage: HTMLImageElement | null,
    bgCanvas: HTMLCanvasElement | null,
    bgContext: CanvasRenderingContext2D | null,
    bgContextPixelData: any,
    init: Function,
    preparePoints: Function,
    updatePoints: Function,
    drawLines: Function,
    drawPoints: Function,
    draw: Function,
    clear: Function,
    // The file reader has loaded the image... add it to image object to be drawn
    loadData: Function,
    // Image is loaded... draw to bg canvas
    drawImageToBackground: Function,
    mouseDown: (this: HTMLCanvasElement, ev: MouseEvent) => any,
    mouseUp: (this: HTMLCanvasElement, ev: MouseEvent) => any,
    mouseMove: (this: HTMLCanvasElement, ev: MouseEvent) => any,
    mouseOut: (this: HTMLCanvasElement, ev: MouseEvent) => any,
    // Resize and redraw the canvas.
    onWindowResize: Function,
}

function Logo() {
    const Nodes: INodes = {
        density: 8,
        drawDistance: 8,
        baseRadius: 2,
        maxLineThickness: 8,
        reactionSensitivity: 0.2,
        lineThickness: 4,

        points: [],
        mouse: {x: -1000, y: -1000, down: false},
        animation: null,
        canvas: null,
        context: null,
        bgImage: null,
        bgCanvas: null,
        bgContext: null,
        bgContextPixelData: null,

        init: function (canvas:HTMLCanvasElement, data:string) {
            // Set up the visual canvas
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
            if(this.context === null) return;

            this.context.globalCompositeOperation = "lighter";
            this.canvas.width = 65;
            this.canvas.height = 91;

            this.canvas.addEventListener('mousemove', this.mouseMove, false);
            this.canvas.addEventListener('mousedown', this.mouseDown, false);
            this.canvas.addEventListener('mouseup', this.mouseUp, false);
            this.canvas.addEventListener('mouseout', this.mouseOut, false);

            window.onresize = function (event) {
                if(Nodes.canvas === null) return;
                Nodes.onWindowResize();
            }

            // Load initial input image (the chrome logo!)
            this.loadData(data);
        },

        preparePoints: function () {
            if(this.canvas === null) return;
            // Clear the current points
            this.points = [];
            let i, j;
            let colors = this.bgContextPixelData.data;

            for (i = 0; i < this.canvas.height; i += this.density) {

                for (j = 0; j < this.canvas.width; j += this.density) {

                    const pixelPosition = (j + i * this.bgContextPixelData.width) * 4;

                    // Don't use whitish pixels
                    if (colors[pixelPosition] > 200 && (colors[pixelPosition + 1]) > 200 && (colors[pixelPosition + 2]) > 200 || colors[pixelPosition + 3] === 0) {
                        continue;
                    }

                    const color = 'rgba(' + colors[pixelPosition] + ',' + colors[pixelPosition + 1] + ',' + colors[pixelPosition + 2] + ',' + '1)';
                    this.points.push({x: j, y: i, originalX: j, originalY: i, color: color});

                }
            }
        },

        updatePoints: function () {
            if(this.canvas === null) return;
            let i, currentPoint, theta, distance;

            for (i = 0; i < this.points.length; i++) {

                currentPoint = this.points[i];

                theta = Math.atan2(currentPoint.y - this.mouse.y, currentPoint.x - this.mouse.x);

                if (this.mouse.down) {
                    distance = this.reactionSensitivity * 200 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
                        (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
                } else {
                    distance = this.reactionSensitivity * 100 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
                        (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
                }


                currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * 0.05;
                currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * 0.05;

            }
        },

        drawLines: function () {
            if(this.context === null) return;
            let i, j, currentPoint, otherPoint, distance;

            for (i = 0; i < this.points.length; i++) {
                currentPoint = this.points[i];

                // Draw the dot.
                this.context.fillStyle = currentPoint.color;
                this.context.strokeStyle = currentPoint.color;

                for (j = 0; j < this.points.length; j++) {

                    // Distaqnce between two points.
                    otherPoint = this.points[j];

                    if (otherPoint === currentPoint) {
                        continue;
                    }

                    distance = Math.sqrt((otherPoint.x - currentPoint.x) * (otherPoint.x - currentPoint.x) +
                        (otherPoint.y - currentPoint.y) * (otherPoint.y - currentPoint.y));

                    if (distance <= this.drawDistance) {

                        this.context.lineWidth = (1 - (distance / this.drawDistance)) * this.maxLineThickness * this.lineThickness;
                        this.context.beginPath();
                        this.context.moveTo(currentPoint.x, currentPoint.y);
                        this.context.lineTo(otherPoint.x, otherPoint.y);
                        this.context.stroke();
                    }
                }
            }
        },

        drawPoints: function () {
            if(this.context === null) return;
            let i, currentPoint;

            for (i = 0; i < this.points.length; i++) {

                currentPoint = this.points[i];

                // Draw the dot.
                this.context.fillStyle = currentPoint.color;
                this.context.strokeStyle = currentPoint.color;

                this.context.beginPath();
                this.context.arc(currentPoint.x, currentPoint.y, this.baseRadius, 0, Math.PI * 2, true);
                this.context.closePath();
                this.context.fill();

            }
        },

        draw: function () {
            this.animation = requestAnimationFrame(function () {
                Nodes.draw()
            });

            this.clear();
            this.updatePoints();
            this.drawLines();
            this.drawPoints();
        },

        clear: function () {
            if(this.canvas === null || this.context === null) return;
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },

        // The filereader has loaded the image... add it to image object to be drawn
        loadData: function (data: string) {
            this.bgImage = new Image();
            this.bgImage.src = data;

            this.bgImage.onload = function () {

                //this
                Nodes.drawImageToBackground();
            }
        },

        // Image is loaded... draw to bg canvas
        drawImageToBackground: function () {
            if(this.canvas === null || this.bgImage === null) return;
            this.bgCanvas = document.createElement('canvas');
            this.bgCanvas.width = this.canvas.width;
            this.bgCanvas.height = this.canvas.height;

            let newWidth, newHeight;

            // If the image is too big for the screen... scale it down.
            if (this.bgImage.width > this.bgCanvas.width - 0 || this.bgImage.height > this.bgCanvas.height - 0) {

                const maxRatio = Math.max(this.bgImage.width / (this.bgCanvas.width - 0), this.bgImage.height / (this.bgCanvas.height - 0));
                newWidth = this.bgImage.width / maxRatio;
                newHeight = this.bgImage.height / maxRatio;

            } else {
                newWidth = this.bgImage.width;
                newHeight = this.bgImage.height;
            }

            console.log(this.canvas.width, this.canvas.height)
            console.log(newWidth, newHeight)
            // Draw to background canvas
            this.bgContext = this.bgCanvas.getContext('2d');
            if(this.bgContext === null) return;

            this.bgContext.drawImage(this.bgImage, (this.bgCanvas.width - newWidth) /2,  (this.bgCanvas.height - newHeight) /2, newWidth, newHeight);
            this.bgContextPixelData = this.bgContext.getImageData(0, 0, this.bgCanvas.width, this.bgCanvas.height);

            this.preparePoints();
            this.draw();
        },

        mouseDown: function () {
            Nodes.mouse.down = true;
        },

        mouseUp: function () {
            Nodes.mouse.down = false;
        },

        mouseMove: function (event: MouseEvent) {
            Nodes.mouse.x = event.offsetX ;
            Nodes.mouse.y = event.offsetY;
        },

        mouseOut: function () {
            Nodes.mouse.x = -1000;
            Nodes.mouse.y = -1000;
            Nodes.mouse.down = false;
        },

        // Resize and redraw the canvas.
        onWindowResize: function () {
            cancelAnimationFrame(this.animation);
            this.drawImageToBackground();
        }
    }
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) return;

        Nodes.init(canvas, data);
    })

    return <Canvas ref={canvasRef}/>;
}

export default Logo;