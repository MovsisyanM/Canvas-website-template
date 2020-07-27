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

// Gets the angle between two points
const angle = (x, y, x_2, y_2) => {
    return Math.atan2((y - y_2), (x_2 - x));
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

// Last recorded mouse location
Device.mouseLocation = [0, 0];
// Device aspect ratio
Device.getAspectRatio = () => {
    return canvas.width / canvas.height;
}

//#region Event Handlers

Device.onLoad = () => { }

Device.onSubmit = () => { }

Device.onReset = () => { }

Device.onFullscreenChange = () => { }

Device.onResize = () => { }

Device.onScroll = () => { }

Device.onCut = () => { }

Device.onCopy = () => { }

Device.onPaste = () => { }

Device.onKeyDown = () => { }

Device.onKeyPress = () => { }

Device.onKeyUp = () => { }

Device.onMouseAuxClick = () => { }

Device.onMouseClick = () => { }

Device.onMouseRightClick = () => { }

Device.onMouseDblClick = () => { }

Device.onMouseDown = () => { }

Device.onMouseEnter = () => { }

Device.onMouseLeave = () => { }

Device.onMouseMove = () => { }

Device.onMouseOver = () => { }

Device.onMouseOut = () => { }

Device.onMouseUp = () => { }

Device.onSelect = () => { }

Device.onMouseWheel = () => { }


//#endregion Event Handlers

//#endregion Initial Adjustments



//#region Cast

// Draws the page
const Cast = () => {
    context.fillStyle = "rgba(0, 0, 0, 1)"
    context.font = "73px Arial"
    context.fillText("Hello world", canvas.width / 2, canvas.height / 2, 1000)
}

//#endregion Cast



//#region Event Registration

// Track the mouse movement of the player
document.addEventListener("mousemove", onMUpdate, false);
// Track the mousewheel of the player
document.addEventListener("wheel", onWUpdate, false);
// Track clicks
document.addEventListener("mousedown", onMouse, false);

document.addEventListener("keydown", onKey, false);

document.addEventListener("paste", onPaste, false);


function onPaste(e) {
    e.stopPropagation();
    e.preventDefault();
    data = e.clipboardData || window.clipboardData;
    // Input is the variable of your choice that becomes the clipboard text
    Input = data.getData("Text").replace(/\s/g, "");
}


// This gets hoisted
function onMUpdate(e) {
    // Your logic goes here


    // Account the last recorded mouse position
    mouseLocation = [e.pageX, e.pageY];
}


// This gets hoisted
function onWUpdate(e) {
    // e.deltaY = 3 for wheelup
    // e.deltaY = -3 for wheeldown
}


// This gets hoisted up per request
function onKey(e) {

}


// This gets hoisted
function onMouse(e) {

}

//#endregion Event Handling


//#region Run

function Run() {
    Maxout();

    Cast();
    window.requestAnimationFrame(Run);
}

Run();

//#endregion Run

