// Draggable

let draggableElems = document.querySelectorAll('.draggable');
let draggies = []
for (let i = 0; i < draggableElems.length; i++) {
    let draggableElem = draggableElems[i];
    let draggie = new Draggabilly(draggableElem, {});
    draggies.push(draggie);
}

// Draggable END


var Engine, Render, Runner, Composite;
var engine, render, world, runner;

function update() {
    world.animate();
    window.requestAnimationFrame(update);
}

function resizedw(){
    // world.shapes = [];
    Engine.clear(engine);
    Render.stop(render);
    Runner.stop(runner);
    rabbitsInitialized = false;

    let spawnedRabbits = document.querySelectorAll('.rabbit-spawned');
    for (let i = 0; i < spawnedRabbits.length; i++) {
        spawnedRabbits[i].remove();
    }

    initRabbits();
}

var resizeTimeout;

window.addEventListener('resize', function (event) {

    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizedw, 100);

    if (window.innerWidth < 1200 && window.innerWidth > 520) {
        lax.removeElements(".page-title");
        lax.addElements(".page-title", {
            scrollY: {
                translateY: [
                    [
                        0, 'screenHeight'
                    ],
                    [
                        20, 'screenHeight*1.5'
                    ]
                ],
                scale: [
                    [
                        1, 'screenHeight'
                    ],
                    [
                        1, 5
                    ]
                ]
            }
        });

        lax.removeElements(".esports-word-4");
        lax.addElements(".esports-word-4", {
            scrollY: {
                translateY: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        0, 'screenHeight*0.9'
                    ]
                ],
                translateX: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        0, '40'
                    ]
                ],
                scale: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        1, 2.7
                    ]
                ]
            }
        });
    } else if (window.innerWidth >= 1200) {
        lax.removeElements(".page-title");
        lax.addElements(".page-title", {
            scrollY: {
                translateY: [
                    [
                        0, 'screenHeight'
                    ],
                    [
                        20, 'screenHeight*1.5'
                    ]
                ],
                scale: [
                    [
                        1, 'screenHeight'
                    ],
                    [
                        1, 9
                    ]
                ]
            }
        });

        lax.removeElements(".esports-word-4");
        lax.addElements(".esports-word-4", {
            scrollY: {
                translateY: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        0, 'screenHeight*0.9'
                    ]
                ],
                translateX: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        0, '40'
                    ]
                ],
                scale: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        1, 2.7
                    ]
                ]
            }
        });
    } else if (window.innerWidth <= 520) {
        lax.removeElements(".page-title");
        lax.addElements(".page-title", {
            scrollY: {
                translateY: [
                    [
                        0, 'screenHeight'
                    ],
                    [
                        20, 'screenHeight*1.5'
                    ]
                ],
                scale: [
                    [
                        1, 'screenHeight'
                    ],
                    [
                        1, 2.3
                    ]
                ]
            }
        });

        lax.removeElements(".esports-word-4");
    }

});

// Zoom for scalable parallaxes END Above the clouds animations

window.scrollTo(0, 0)
window.onload = function () {

    lax.init()

    lax.addDriver("scrollY", function () {
        return document.documentElement.scrollTop;
    }, {
        frameStep: 1,
        inertiaEnabled: true

    });

    if (window.innerWidth < 1200 && window.innerWidth > 520) {
        lax.addElements(".page-title", {
            scrollY: {
                translateY: [
                    [
                        0, 'screenHeight'
                    ],
                    [
                        20, 'screenHeight*1.5'
                    ]
                ],
                scale: [
                    [
                        1, 'screenHeight'
                    ],
                    [
                        1, 5
                    ]
                ]
            }
        });
        lax.addElements(".esports-word-4", {
            scrollY: {
                translateY: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        0, 'screenHeight*0.9'
                    ]
                ],
                translateX: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        0, '40'
                    ]
                ],
                scale: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        1, 2.7
                    ]
                ]
            }
        });
    } else if (window.innerWidth >= 1200) {
        lax.addElements(".page-title", {
            scrollY: {
                translateY: [
                    [
                        0, 'screenHeight'
                    ],
                    [
                        20, 'screenHeight*1.5'
                    ]
                ],
                scale: [
                    [
                        1, 'screenHeight'
                    ],
                    [
                        1, 9
                    ]
                ]
            }
        });
        lax.addElements(".esports-word-4", {
            scrollY: {
                translateY: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        0, 'screenHeight*0.9'
                    ]
                ],
                translateX: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        0, '40'
                    ]
                ],
                scale: [
                    [
                        'screenHeight*2', 'screenHeight*2.75'
                    ],
                    [
                        1, 2.7
                    ]
                ]
            }
        });
    } else if (window.innerWidth <= 520) {
        lax.addElements(".page-title", {
            scrollY: {
                translateY: [
                    [
                        0, 'screenHeight'
                    ],
                    [
                        20, 'screenHeight*1.5'
                    ]
                ],
                scale: [
                    [
                        1, 'screenHeight'
                    ],
                    [
                        1, 2.3
                    ]
                ]
            }
        });
    }

    // if ( window.innerWidth > 1199 ) { 	lax.addElements(".page-title", {
    // scrollY: { 			translateY: [[0, 'screenHeight'], [20, 'screenHeight*1.5']],
    // scale: [[1, 'screenHeight'], [1, 9]], 		} 	}); } else {
    // lax.addElements(".page-title", { 		scrollY: { 			translateY: [[0,
    // 'screenHeight'], [20, 'screenHeight*1.5']], 			scale: [[1, 'screenHeight'],
    // [1, 5]], 		} 	}); }

    lax.addElements(".scroll-down", {
        scrollY: {
            opacity: [
                [
                    0, "screenHeight/10"
                ],
                [
                    1, 0
                ]
            ]
        }
    });

    lax.addElements(".cloud-speed-1", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/2'
                ]
            ]
        }
    });
    lax.addElements(".cloud-speed-2", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/4'
                ]
            ]
        }
    });
    lax.addElements(".cloud-speed-3", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/6'
                ]
            ]
        }
    });

    lax.addElements(".snake-speed-1", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/2'
                ]
            ],
            translateX: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '120'
                ]
            ]
        }
    });
    lax.addElements(".snake-speed-2", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/3'
                ]
            ],
            translateX: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-20'
                ]
            ]
        }
    });
    lax.addElements(".snake-speed-3", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/5'
                ]
            ],
            translateX: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-20'
                ]
            ]
        }
    });

    lax.addElements(".coin-speed-1", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/2'
                ]
            ],
            translateX: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '120'
                ]
            ]
        }
    });
    lax.addElements(".coin-speed-2", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/3'
                ]
            ],
            translateX: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-20'
                ]
            ]
        }
    });
    lax.addElements(".coin-speed-3", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/5'
                ]
            ],
            translateX: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-20'
                ]
            ]
        }
    });

    lax.addElements(".rabbit-speed-1", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/2'
                ]
            ],
            translateX: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '120'
                ]
            ]
        }
    });
    lax.addElements(".rabbit-speed-2", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/3'
                ]
            ],
            translateX: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-20'
                ]
            ]
        }
    });
    lax.addElements(".rabbit-speed-3", {
        scrollY: {
            translateY: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-screenHeight/5'
                ]
            ],
            translateX: [
                [
                    0, 'screenHeight'
                ],
                [
                    5, '-20'
                ]
            ]
        }
    });

    lax.addElements(".esports-word-1", {
        scrollY: {
            translateY: [
                [
                    'screenHeight*2', 'screenHeight*2.75'
                ],
                [
                    0, 'screenHeight*0.9'
                ]
            ],
            translateX: [
                [
                    'screenHeight*2', 'screenHeight*2.75'
                ],
                [
                    0, '-550'
                ]
            ],
            scale: [
                [
                    'screenHeight*2', 'screenHeight*2.75'
                ],
                [
                    1, 1.5
                ]
            ]
        }
    });
    lax.addElements(".esports-word-2", {
        scrollY: {
            translateY: [
                [
                    'screenHeight*2', 'screenHeight*2.75'
                ],
                [
                    0, 'screenHeight*0.6'
                ]
            ],
            translateX: [
                [
                    'screenHeight*2', 'screenHeight*2.75'
                ],
                [
                    0, '-20'
                ]
            ],
            scale: [
                [
                    'screenHeight*2', 'screenHeight*2.75'
                ],
                [
                    1, 2
                ]
            ]
        }
    });
    lax.addElements(".esports-word-3", {
        scrollY: {
            translateY: [
                [
                    'screenHeight*2', 'screenHeight*2.75'
                ],
                [
                    0, 'screenHeight*0.63'
                ]
            ],
            translateX: [
                [
                    'screenHeight*2', 'screenHeight*2.75'
                ],
                [
                    0, '500'
                ]
            ],
            scale: [
                [
                    'screenHeight*2', 'screenHeight*2.75'
                ],
                [
                    1, 1.8
                ]
            ]
        }
    });
    // lax.addElements(".esports-word-4", { 	scrollY: { 		translateY:
    // [['screenHeight*2', 'screenHeight*2.75'], [0, 'screenHeight*0.9']],
    // translateX: [['screenHeight*2', 'screenHeight*2.75'], [0, '40']], 		scale:
    // [['screenHeight*2', 'screenHeight*2.75'], [1, 2.7]], 	}, });

    lax.addElements(".services-list-item-border", {
        scrollY: {
            translateX: [
                [
                    'elInY', 'elOutY'
                ],
                [
                    0, '100'
                ]
            ]
        }
    });

    // lax.addElements("h2", { 	scrollY: { 		translateX: [['elInY', 'elOutY'], [0,
    // -10], {inertia: 5}], 	}, });

    lax.addElements(".board-list-item-name", {
        scrollY: {
            translateY: [
                [
                    'elInY', 'elOutY'
                ],
                [
                    0, -120
                ]
            ]
        }
    });
    lax.addElements(".board-list-item-position", {
        scrollY: {
            translateY: [
                [
                    'elInY', 'elOutY'
                ],
                [
                    0, -120
                ]
            ]
        }
    });

}

// Above the clouds animations END Board carousel

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        // type   : 'loop',
        perPage: 3,
        perMove: 1,
        arrows: true,
        pagination: false,
        gap: '48px',
        fixedWidth: '428px',
        breakpoints: {
            1619: {
                fixedWidth: '324px'

            },
            1024: {
                fixedWidth: '324px',
                perPage: 2
            },
            520: {
                fixedWidth: '251px',
                perPage: 1
            }
        }
    }).mount();
});

// Board carousel END Header scroll

let rabbitsInitialized = false;

function initRabbits() {
    if (rabbitsInitialized === false) {
        setTimeout(function () {
            // module aliases
            // var Engine = Matter.Engine,
                Engine = Matter.Engine,
                Render = Matter.Render,
                Runner = Matter.Runner,
                Composite = Matter.Composite;

            // create an engine
            engine = Engine.create();

            let bWidth = document
                .querySelector('.rabbits-overlay')
                .offsetWidth;
            let bHeight = document
                .querySelector('.rabbits-overlay')
                .offsetHeight;

            // var render = Render.create({
            render = Render.create({
                element: document.getElementById("debug"),
                engine: engine,
                options: {
                    width: bWidth,
                    height: bHeight,
                    background: '#fafafa',
                    wireframeBackground: '#222',
                    // hasBounds: false,
                    hasBounds: true,
                    enabled: true,
                    wireframes: true,
                    showSleeping: true,
                    showDebug: false,
                    showBroadphase: false,
                    showBounds: false,
                    showVelocity: true,
                    showCollisions: false,
                    showAxes: false,
                    showPositions: false,
                    showAngleIndicator: false,
                    showIds: false,
                    showShadows: false
                }
            });

            // run the renderer
            Render.run(render);
            // create runner
            runner = Runner.create();

            // run the engine
            Runner.run(runner, engine);

            let shapes = [];
            let x = 400;
            let y = 0;

            // let world = new World(engine.world, bWidth, bHeight);
            world = new World(engine.world, bWidth, bHeight);
            for (let i = 0; i < 10; i++) {
                setTimeout(function () {
                    x = getRandomInt(0, bWidth);
                    world.addBunny(x, y);
                }, 100 * i);
            }
            // document
            //     .querySelector('.rabbits-overlay')
            //     .addEventListener('click', event => {
            //         // console.log(event);
            //         world.addBunny(event.layerX, event.layerY);
            //     });

            update();

            // function update() {
            //     world.animate();
            //     window.requestAnimationFrame(update);
            // }

        }, 1000);
    }
    rabbitsInitialized = true;
}

document
    .querySelector('.rabbits-overlay')
    .addEventListener('click', event => {
        // console.log(event);
        world.addBunny(event.layerX, event.layerY);
    });


window.onscroll = function () {
    stickyHeader();

    if (window.pageYOffset > (document.querySelector(".rabbits-area").offsetTop - window.innerHeight + 100)) {
        initRabbits();
    }
};

let header = document.querySelector(".header");
let stickyOffsetTop = window.innerHeight * 2;

function stickyHeader() {
    if (window.pageYOffset > stickyOffsetTop) {
        header
            .classList
            .add("sticky");
    } else {
        header
            .classList
            .remove("sticky");
    }
}

// Header scroll END Mobile Nav

let mainNav = document.querySelector('.header');
document
    .querySelector('.toggle-mobile-nav')
    .addEventListener('click', function () {
        mainNav
            .classList
            .toggle('show-mobile-nav');
    });

// Mobile Nav END Rabbits Physix

function Shape(x, y, world) {
    this.setWorld(world);

    this.setRealSize(47, 66);
    this.setRealPosition(x, y);
    this.createElement();
    this.createPhysicsBody();
}

Shape.prototype.createElement = function () {
    this.element = document.createElement("div");
    this.element.className = "rabbit-spawned";
    document
        .querySelector('.rabbits-overlay')
        .appendChild(this.element);

}

Shape.prototype.setRealPosition = function (x, y) {
    this.x = x + this.getRealWidth() / 2;
    this.y = y + this.getRealHeight() / 2;
}

Shape.prototype.setRealSize = function (width, height) {
    this.width = width;
    this.height = height;

};

Shape.prototype.setWorld = function (world) {
    this.world = world;
}

Shape.prototype.getRealX = function () {
    return (this.body.position.x - this.getRealWidth() / 2);

}

Shape.prototype.getRealY = function () {
    return (this.body.position.y - this.getRealHeight() / 2);

}

Shape.prototype.getRealWidth = function () {
    let r = (this.width);
    return r;
}

Shape.prototype.getRealHeight = function () {
    let r = (this.height);

    return r;
}

Shape.prototype.animate = function () {

    this.element.style.transform = "translate( " + this.getRealX() + "px, " +
            this.getRealY() + "px )";
    this.element.style.transform += "rotate( " + this.body.angle + "rad )";
}

Shape.prototype.createPhysicsBody = function () {
    this.body = Matter
        .Bodies
        .rectangle(this.x, this.y, this.width, this.height);
}

Shape.prototype.getPhysicsBody = function () {
    return this.body;
}

function World(matterWorld, worldBoundsX, worldBoundsY) {
    this.matterWorld = matterWorld;
    this.matterWorld.gravity.scale = 0.001;
    this.shapes = [];

    this.composite = Matter.Composite;
    this.setBounds(worldBoundsX, worldBoundsY);
    this.addFlor();
}

World.prototype.setBounds = function (x, y) {
    this.boundsX = x;
    this.boundsY = y;
};

World.prototype.addFlor = function () {

    // Viewport boundaries
    var ground = Matter
        .Bodies
        .rectangle(this.boundsX / 2, this.boundsY, this.boundsX, 10, {isStatic: true});
    var leftWall = Matter
        .Bodies
        .rectangle(1, this.boundsY / 2, 10, this.boundsY + 100, {isStatic: true});
    var rightWall = Matter
        .Bodies
        .rectangle(
            this.boundsX - 1,
            this.boundsY / 2,
            10,
            this.boundsY + 100,
            {isStatic: true}
        );

    this
        .composite
        .add(this.matterWorld, [ground, leftWall, rightWall]);

    // Viewport boundaries END
    this.addForm();
    this.addHtmlElement(document.querySelector('.list-social'));
    this.addHtmlElement(document.querySelector('.footer-logo'));
}

World.prototype.addForm = function () {

    viewportDom = document.querySelector('.rabbits-area');

    formDom = document.querySelector('.form-contact-us');
    formContainerDom = document.querySelector('.form-contact-us-container');
    section = document.querySelector('.contact-us-section');

    let formWidth = formDom.offsetWidth;
    let formHeight = formDom.offsetHeight;

    let formLeft = this.boundsX / 2;
    let formTop = (formDom.offsetTop + section.offsetTop + formHeight / 2);

    var form = Matter
        .Bodies
        .rectangle(formLeft, formTop, formWidth, formHeight, {isStatic: true});

    this
        .composite
        .add(this.matterWorld, [form]);
}

World.prototype.addHtmlElement = function (el) {
    let elWidth = el.offsetWidth;
    let elHeight = el.offsetHeight;
    let elLeft = el.offsetLeft + el.offsetWidth / 2;
    let elTop = this.boundsY - el.offsetHeight / 2;

    var socialLinks = Matter
        .Bodies
        .rectangle(elLeft, elTop, elWidth, elHeight, {isStatic: true});

    this
        .composite
        .add(this.matterWorld, [socialLinks]);
}

World.prototype.addBunny = function (x, y) {
    shape = new Shape(x, y, this);
    this
        .shapes
        .push(shape);
    this
        .composite
        .add(this.matterWorld, shape.getPhysicsBody());
}

World.prototype.animate = function () {
    for (var i = 0, l = this.shapes.length; i < l; i++) {
        this
            .shapes[i]
            .animate();
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Rabbits Physix END


// High five

// const burst = new mojs.Burst({
//     left: -10, top: -70,
//     degree:     -60,
//     angle:    90,
//     radius:   { 10: 40 },
//     count:    3,
//     children: {
//         shape:        'line',
//         radius:       7,
//         radiusY:      0,
//         scale:        2,
//         strokeDasharray: '100%',
//         strokeDashoffset: { '-100%' : '100%' },
//         stroke:       '#000' ,
//         easing:       'linear.none',
//         duration:     600
//     }
// });
//
// document.querySelector('.high-five').addEventListener( 'click', function (e) {
//     burst
//         .tune({ x: 130, y: e.pageY })
//         .replay();
// } );

// new MojsPlayer({ add: burst, isPlaying: true, isRepeat: true });

const highfive = document.getElementById("highfive");
function playAudio() {
    highfive.play();
}
let highFives = document.querySelectorAll('.high-five');
for (let i = 0; i < highFives.length; i++) {
    highFives[i].addEventListener( 'click', function (e) {
        if (highFives[i].classList.contains('animating')) {
            playAudio();
            highFives[i].classList.remove('animating');
            highFives[i].classList.add('animating');
        } else {
            playAudio();
            highFives[i].classList.add('animating');
        }
        setTimeout(() => {
            highFives[i].classList.remove('animating');
        }, 300);
    });
}

// document.querySelector('.high-five')

// High five END