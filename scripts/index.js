// Made for the public
// I thank you for showing interest :)
// Website: movsisyan.info
// I also exist on GitHub at github.com/MovsisyanM



//#region Helpers

// Get the distance between two points
const distance = (x, y, x_2, y_2) => {
    return Math.sqrt(Math.pow(x - x_2, 2) + Math.pow(y - y_2, 2));
};

// Turns an array into an rgba color that is interpretable by the canvas
const rgba = (array) => {
    return "rgba(" + array[0] + ", " + array[1] + ", " + array[2] + ", " + array[3] + ")";
}

// Gets the angle between two points
const angle = (x, y, x_2, y_2) => {
    return Math.atan2((y - y_2), (x_2 - x));
}


// Rotates a 2D point about a point
// x: The x of the point that is supposed to be rotated
// y: The y of the point that is supposed to be rotated
// Theta: Angle of rotation in radians
// aboutX, aboutY: the coordinates about which the point is rotated
const Rotate = (x, y, Theta, aboutX, aboutY) => {
    const localizedPoint = [x - aboutX, y - aboutY];
    const rotatedLocalizedPoint = [(localizedPoint[0] * Math.cos(Theta)) - (localizedPoint[1] * Math.sin(Theta)),
    (localizedPoint[1] * Math.cos(Theta)) + (localizedPoint[0] * Math.sin(Theta))];
    const rotatedGlobalPoint = [rotatedLocalizedPoint[0] + aboutX, rotatedLocalizedPoint[1] + aboutY];
    return rotatedGlobalPoint;
};


const Rotate3D = (x, y, z, pitch, yaw, roll) => {
    // Pitch
    let xPitch = x;
    let yPitch = y * Math.cos(pitch) - Math.sin(pitch) * y;
    let zPitch = z * Math.sin(pitch) + Math.cos(pitch) * z;

    // Yaw
    let xYaw = xPitch * Math.cos(yaw) + xPitch * Math.sin(yaw);
    let yYaw = yPitch;
    let zYaw = zPitch * Math.cos(yaw) - Math.sin(yaw) * zPitch;

    // Roll
    let xRoll = xYaw * Math.cos(roll) - Math.sin(roll) * xYaw;
    let yRoll = yYaw * Math.sin(roll) + Math.cos(roll) * yYaw;
    let zRoll = zYaw

    return (xRoll, yRoll, zRoll);
}


// Opens a window with the specified url
const goto = (url) => {
    window.open(url, '_blank');
}



//#endregion Helpers



//#region Initial Adjustments

// This obj hold everything to do with drawing
const Drawing = {}

// Get the canvas dom element
Drawing.canvas = document.querySelector("canvas");
// Get the canvas interface for 2d rendering
Drawing.context = canvas.getContext("2d");
// Pixel density
Drawing.pixelDensity = 1;
// Scroll position
Drawing.scroll = 0
// Set canvas to fullscreen
Drawing.maxout = () => {
    canvas.width = window.innerWidth * Drawing.pixelDensity;
    canvas.height = window.innerHeight * Drawing.pixelDensity;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    document.documentElement.style.overflow = 'hidden';  // Firefox, Chrome
    document.body.scroll = "no";                         // Internet explorer
}


// This obj holds everything that has to do with the user's device
const Device = {}

Device.mouseLocation = [0, 0];

Device.getAspectRatio = () => {
    return canvas.width / canvas.height;
}


//#endregion Initial Adjustments



//#region Event Handlers

Device.onBlur = (e) => { };
document.addEventListener("blur", Device.Blur, false);
Device.onFocus = (e) => { };
document.addEventListener("focus", Device.onFocus, false);
Device.onSubmit = (e) => { };
document.addEventListener("submit", Device.onSubmit, false);
Device.onReset = (e) => { };
document.addEventListener("reset", Device.onReset, false);
Device.onFullscreenChange = (e) => { };
document.addEventListener("fullscreenchange", Device.onFullscreenChange, false);
Device.onResize = () => { };
document.addEventListener("resize", Device.onResize, false);
Device.onScroll = (e) => { };
document.addEventListener("scroll", Device.onScroll, false);
Device.onCut = (e) => { };
document.addEventListener("cut", Device.onCut, false);
Device.onCopy = (e) => { };
document.addEventListener("copy", Device.onCopy, false);

Device.onPaste = (e) => {
    e.stopPropagation();
    e.preventDefault();
    data = e.clipboardData || window.clipboardData;
    // Input is the variable of your choice that becomes the clipboard text
    Input = data.getData("Text").replace(/\s/g, "");
};
document.addEventListener("paste", Device.onPaste, false);

Device.onKeyDown = (e) => { };
document.addEventListener("keydown", Device.onKeyDown, false);
Device.onKeyPress = (e) => { };
document.addEventListener("keypress", Device.onKeyPress, false);
Device.onKeyUp = (e) => { };
document.addEventListener("keyup", Device.onKeyUp, false);
Device.onMouseAuxClick = (e) => { };
document.addEventListener("auxclick", Device.onMouseAuxClick, false);
Device.onMouseClick = (e) => { };
document.addEventListener("click", Device.onMouseClick, false);
Device.onMouseRightClick = (e) => { };
document.addEventListener("contextmenu", Device.onMouseRightClick, false);
Device.onMouseDblClick = (e) => { };
document.addEventListener("dbclick", Device.onMouseDblClick, false);
Device.onMouseDown = (e) => { };
document.addEventListener("mousedown", Device.onMouseDown, false);
Device.onMouseEnter = (e) => { };
document.addEventListener("mouseenter", Device.onMouseEnter, false);
Device.onMouseLeave = (e) => { };
document.addEventListener("mouseleave", Device.onMouseLeave, false);

Device.onMouseMove = (e) => {
    Device.mouseLocation = [e.pageX, e.pageY];
};
document.addEventListener("mousemove", Device.onMouseMove, false);

Device.onMouseOver = (e) => { };
document.addEventListener("mouseover", Device.onMouseOver, false);
Device.onMouseOut = (e) => { };
document.addEventListener("mouseout", Device.onMouseOut, false);
Device.onMouseUp = (e) => { };
document.addEventListener("mouseup", Device.onMouseUp, false);
Device.onSelect = (e) => { };
document.addEventListener("select", Device.onSelect, false);

Device.onMouseWheel = (e) => {
    // e.deltaY == 3 for wheelup
    // e.deltaY == -3 for wheeldown
};
document.addEventListener("wheel", Device.onMouseWheel, false);

Device.onDrag = (e) => { };
document.addEventListener("drag", Device.onDrag, false);
Device.onDragEnd = (e) => { };
document.addEventListener("dragend", Device.onDragEnd, false);
Device.onDragEnter = (e) => { };
document.addEventListener("dragenter", Device.onDragEnter, false);
Device.onDragStart = (e) => { };
document.addEventListener("dragstart", Device.onDragStart, false);
Device.onDragLeave = (e) => { };
document.addEventListener("load", Device.onDragLeave, false);
Device.onDragOver = (e) => { };
document.addEventListener("dragover", Device.onDragOver, false);
Device.onDragDrop = (e) => { };
document.addEventListener("drop", Device.onDragDrop, false);
Device.onLoadAbort = (e) => { };
document.addEventListener("abort", Device.onLoadAbort, false);
Device.onLoadError = (e) => { };
document.addEventListener("load", Device.onLoadError, false);
Device.onLoad = (e) => { };
document.addEventListener("load", Device.onLoad, false);
Device.onLoadEnd = (e) => { };
document.addEventListener("loadend", Device.onLoadEnd, false);
Device.onLoadStart = (e) => { };
document.addEventListener("loadstart", Device.onLoadStart, false);
Device.onLoadProgress = (e) => { };
document.addEventListener("progress", Device.onLoadProgress, false);
Device.onLoadTimeout = (e) => { };
document.addEventListener("timeout", Device.onLoadTimeout, false);
Device.onVisibilityChange = (e) => { };
document.addEventListener("visibilitychange", Device.onVisibilityChange, false);
Device.onTouchCancel = (e) => { };
document.addEventListener("touchcancel", Device.onTouchCancel, false);
Device.onTouchEnd = (e) => { };
document.addEventListener("touchend", Device.onTouchEnd, false);
Device.onTouchMove = (e) => { };
document.addEventListener("touchmove", Device.onTouchMove, false);
Device.onTouchStart = (e) => { };
document.addEventListener("touchstart", Device.onTouchStart, false);
Device.onPointerOver = (e) => { };
document.addEventListener("pointerover", Device.onPointerOver, false);
Device.onPointerEnter = (e) => { };
document.addEventListener("pointerenter", Device.onPointerEnter, false);
Device.onPointerDown = () => { };
document.addEventListener("pointerdown", Device.onPointerDown, false);
Device.onPointerMove = (e) => { };
document.addEventListener("pointermove", Device.onPointerMove, false);
Device.onPointerUp = (e) => { };
document.addEventListener("pointerup", Device.onPointerUp, false);
Device.onPointerCancel = (e) => { };
document.addEventListener("pointercancel", Device.onPointerCancel, false);
Device.onPointerOut = (e) => { };
document.addEventListener("pointerout", Device.onPointerOut, false);
Device.onPointerLeave = (e) => { };
document.addEventListener("pointerleave", Device.onPointerLeave, false);
Device.onGotPointerCapture = (e) => { };
document.addEventListener("gotpointercapture", Device.onGotPointerCapture, false);
Device.onLostPointerCapture = (e) => { };
document.addEventListener("lostpointercapture", Device.onLostPointerCapture, false);


//#endregion Event Handlers



//#region Classes

// For the future maybe?

//class Drawable {
//    constructor(zIndex) {
//        this.zIndex = zIndex
//    }
//
//    draw(offsetX = 0, offsetY = 0, offsetZ = 0, scaleX = 1, scaleY = 1, scaleZ = 1) {
//        console.log("draw() not implemented in " + String(this))
//    }
//}
//
//
//class Container extends Drawable {
//    constructor(zIndex) {
//        super(zIndex);
//        this.items = [];
//    }
//
//    get length() {
//        return this.items.length;
//    }
//
//    addItem(item) {
//        if (item instanceof Drawable) { console.log("Tried to store a non-drawable object in " + String(this)) }
//        let pos = 0
//        this.items.forEach(e => {
//            if (e.zIndex < item.zIndex) {
//                pos++;
//                continue;
//            }
//            this.items.splice(pos, 0, item)
//            break;
//        });
//    }
//
//    removeItem(index) {
//        this.items.splice(index, 1)
//    }
//
//    draw(offsetX = 0, offsetY = 0, offsetZ = 0, scaleX = 1, scaleY = 1, scaleZ = 1) {
//        this.items.forEach(item => {
//            item.draw()
//        });
//    }
//}
//
//
//class Stack extends Container {
//    constructor(width, height, zIndex) {
//        super(zIndex);
//        this.width = width;
//        this.height = height;
//    }
//
//    addItem(item)
//
//    draw() {
//
//    }
//}

//#endregion Classes



//#region Cast

// Draws the page
const Cast = () => {
    context.fillStyle = "rgba(0, 0, 0, 1)"
    context.font = "73px Arial"
    context.fillText("Hello world", canvas.width / 2, canvas.height / 2, 1000)
}

//#endregion Cast



//#region Run

function Run() {
    Drawing.maxout();

    Cast();
    window.requestAnimationFrame(Run);
}

Run();

//#endregion Run

