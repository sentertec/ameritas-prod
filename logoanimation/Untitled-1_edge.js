/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'logo',
                type: 'image',
                rect: ['0', '0','639px','193px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'retirement',
                type: 'image',
                rect: ['195px', '139px','243px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"retirement.png",'0px','0px']
            },
            {
                id: 'insurance',
                type: 'image',
                rect: ['195px', '139px','234px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"insurance.png",'0px','0px']
            },
            {
                id: 'fulfilling_life',
                type: 'image',
                rect: ['195px', '139px','270px','46px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fulfilling_life.png",'0px','0px']
            },
            {
                id: 'financial_services',
                type: 'image',
                rect: ['195px', '143px','417px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"financial_services.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_insurance}": [
                ["style", "top", '84px'],
                ["style", "opacity", '0'],
                ["style", "left", '195px']
            ],
            "${_fulfilling_life}": [
                ["style", "top", '84px'],
                ["style", "opacity", '0'],
                ["style", "left", '195px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '639px'],
                ["style", "height", '193px'],
                ["style", "overflow", 'hidden']
            ],
            "${_financial_services}": [
                ["style", "top", '90px'],
                ["style", "opacity", '0'],
                ["style", "left", '195px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_retirement}": [
                ["style", "top", '84px'],
                ["style", "opacity", '0'],
                ["style", "left", '195px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8500,
            autoPlay: true,
            timeline: [
                { id: "eid36", tween: [ "style", "${_retirement}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 1000, easing: "easeInOutBack" },
                { id: "eid40", tween: [ "style", "${_retirement}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 500, easing: "easeInOutBack" },
                { id: "eid32", tween: [ "style", "${_fulfilling_life}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid38", tween: [ "style", "${_fulfilling_life}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInOutBack" },
                { id: "eid34", tween: [ "style", "${_insurance}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeInOutBack" },
                { id: "eid39", tween: [ "style", "${_insurance}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 500, easing: "easeInOutBack" },
                { id: "eid33", tween: [ "style", "${_insurance}", "top", '139px', { fromValue: '84px'}], position: 2000, duration: 1000, easing: "easeInOutBack" },
                { id: "eid35", tween: [ "style", "${_retirement}", "top", '139px', { fromValue: '84px'}], position: 4000, duration: 1000, easing: "easeInOutBack" },
                { id: "eid42", tween: [ "style", "${_financial_services}", "opacity", '0', { fromValue: '0'}], position: 1500, duration: 0 },
                { id: "eid30", tween: [ "style", "${_financial_services}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1000, easing: "easeInOutBack" },
                { id: "eid44", tween: [ "style", "${_financial_services}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 500, easing: "easeInOutBack" },
                { id: "eid31", tween: [ "style", "${_fulfilling_life}", "top", '139px', { fromValue: '84px'}], position: 0, duration: 1000, easing: "easeInOutBack" },
                { id: "eid27", tween: [ "style", "${_financial_services}", "top", '145px', { fromValue: '90px'}], position: 6000, duration: 1000, easing: "easeInOutBack" },
                { id: "eid2", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 1000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-78410109");
