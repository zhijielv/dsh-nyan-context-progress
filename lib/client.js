window.__ModuleLoader__.load({ id: "test-plugin-a-02", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var import_react = require("react");

// src/client/assets/nyan/nyan1.svg
var nyan1_default = 'data:image/svg+xml,<?xml version="1.0" encoding="UTF-8" standalone="no"?>%0A<!-- Created with Inkscape (http://www.inkscape.org/) -->%0A%0A<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="34" height="21" preserveAspectRatio="xMinYMin meet" viewBox="0 0 34 21">%0A  <g%0A     transform="translate(1,0)"%0A     id="layer1"%0A     style="display:inline">%0A    <g%0A       transform="translate(4,-1032.3622)"%0A       id="g3832">%0A      <path%0A         d="m 0,50 0,-3 1,0 0,-1 4,0 0,3 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3050"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 1,49 0,-2 3,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3830"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(4,-1032.3622)"%0A       id="g3841">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3836"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="rect3838"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,29,-1032.3622)"%0A       id="g3935">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3937"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3939"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(0,-1032.3622)"%0A       id="g3948">%0A      <path%0A         d="m 24,49 0,-1 4,0 0,1 -1,0 0,1 -2,0 0,-1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3941"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 25,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="rect3943"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(0,-1032.3622)"%0A       id="layer1-0">%0A      <path%0A         d="m 7,1033.3622 19,0 0,16 -19,0 z"%0A         id="rect5270"%0A         style="fill:%23ffcc99;fill-opacity:1" />%0A      <path%0A         d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"%0A         id="path5272"%0A         style="fill:%23ff99ff;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"%0A         id="rect5030-3-6"%0A         style="fill:%23ff3399;fill-opacity:1" />%0A      <path%0A         d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"%0A         id="path5412"%0A         style="fill:%23000000;fill-opacity:1" />%0A    </g>%0A    <g%0A       transform="translate(6,0)"%0A       id="layer3">%0A      <g%0A         id="g5869">%0A        <path%0A           d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"%0A           id="path5777"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"%0A           id="rect5496-38"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 12,13 2,0 0,2 -2,0 z"%0A           id="rect5779"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,13 2,0 0,2 -2,0 z"%0A           id="rect5781"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"%0A           id="path5785"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 19,12 1,0 0,1 -1,0 z"%0A           id="rect5787"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <g%0A           id="g5857">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5795"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5797"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A        <g%0A           transform="translate(-7,0)"%0A           id="g5861">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5863"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5865"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A      </g>%0A    </g>%0A    <g%0A       id="g3486">%0A      <path%0A         d="M 0,10 0,7 4,7 4,8 5,8 5,9 6,9 6,14 5,14 5,13 3,13 3,12 2,12 2,11 1,11 1,10 z"%0A         id="path3954"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 1,9 0,-1 2,0 0,1 1,0 0,1 1,0 0,1 1,0 0,1 -2,0 0,-1 -1,0 0,-1 -1,0 0,-1 z"%0A         id="path3956"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A  </g>%0A</svg>%0A';

// src/client/assets/nyan/nyan2.svg
var nyan2_default = 'data:image/svg+xml,<?xml version="1.0" encoding="UTF-8" standalone="no"?>%0A<!-- Created with Inkscape (http://www.inkscape.org/) -->%0A%0A<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="34" height="21" preserveAspectRatio="xMinYMin meet" viewBox="0 0 34 21">%0A  <g%0A     transform="translate(1,-1)"%0A     id="g4196">%0A    <g%0A       transform="translate(0,-1031.3622)"%0A       id="layer1">%0A      <g%0A         id="g3982">%0A        <path%0A           d="m 5,20 0,-3 1,0 0,-1 3,0 0,3 -1,0 0,1 z"%0A           transform="translate(0,1032.3622)"%0A           id="path3977"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 6,17 2,0 0,2 -2,0 z"%0A           transform="translate(0,1032.3622)"%0A           id="rect3979"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A      </g>%0A      <g%0A         transform="matrix(-1,0,0,1,20,0)"%0A         id="g3841">%0A        <path%0A           d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A           transform="translate(0,1002.3622)"%0A           id="path3836"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 7,48 2,0 0,1 -2,0 z"%0A           transform="translate(0,1002.3622)"%0A           id="rect3838"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A      </g>%0A      <g%0A         transform="matrix(-1,0,0,1,30,0)"%0A         id="g3935">%0A        <path%0A           d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A           transform="translate(0,1002.3622)"%0A           id="path3937"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 7,48 2,0 0,1 -2,0 z"%0A           transform="translate(0,1002.3622)"%0A           id="path3939"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A      </g>%0A      <g%0A         id="layer1-0">%0A        <path%0A           d="m 7,1033.3622 19,0 0,16 -19,0 z"%0A           id="rect5270"%0A           style="fill:%23ffcc99;fill-opacity:1" />%0A        <path%0A           d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"%0A           id="path5272"%0A           style="fill:%23ff99ff;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"%0A           id="rect5030-3-6"%0A           style="fill:%23ff3399;fill-opacity:1" />%0A        <path%0A           d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"%0A           id="path5412"%0A           style="fill:%23000000;fill-opacity:1" />%0A      </g>%0A      <g%0A         transform="translate(7,1032.3622)"%0A         id="layer3">%0A        <g%0A           id="g5869">%0A          <path%0A             d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"%0A             id="path5777"%0A             style="fill:%23999999;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"%0A             id="rect5496-38"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 12,13 2,0 0,2 -2,0 z"%0A             id="rect5779"%0A             style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 23,13 2,0 0,2 -2,0 z"%0A             id="rect5781"%0A             style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"%0A             id="path5785"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 19,12 1,0 0,1 -1,0 z"%0A             id="rect5787"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <g%0A             id="g5857">%0A            <path%0A               d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A               id="path5795"%0A               style="fill:%23000000;fill-opacity:1;stroke:none" />%0A            <path%0A               d="m 21,11 1,0 0,1 -1,0 z"%0A               id="path5797"%0A               style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A          </g>%0A          <g%0A             transform="translate(-7,0)"%0A             id="g5861">%0A            <path%0A               d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A               id="path5863"%0A               style="fill:%23000000;fill-opacity:1;stroke:none" />%0A            <path%0A               d="m 21,11 1,0 0,1 -1,0 z"%0A               id="path5865"%0A               style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A          </g>%0A        </g>%0A      </g>%0A      <g%0A         transform="matrix(-1,0,0,1,35,0)"%0A         id="g3986">%0A        <path%0A           d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A           transform="translate(0,1002.3622)"%0A           id="path3988"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 7,48 2,0 0,1 -2,0 z"%0A           transform="translate(0,1002.3622)"%0A           id="path3990"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A      </g>%0A      <g%0A         id="g3996">%0A        <path%0A           d="m 1,12 -1,0 0,-2 1,0 0,-1 2,0 0,1 1,0 0,1 2,0 0,4 -2,0 0,-1 -2,0 0,-1 -1,0 z"%0A           transform="translate(0,1032.3622)"%0A           id="path3992"%0A           style="fill:%23000000;stroke:none" />%0A        <path%0A           d="m 1,12 0,-2 2,0 0,2 3,0 0,2 -2,0 0,-1 -2,0 0,-1 z"%0A           transform="translate(0,1032.3622)"%0A           id="path3994"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A      </g>%0A    </g>%0A  </g>%0A</svg>%0A';

// src/client/assets/nyan/nyan3.svg
var nyan3_default = 'data:image/svg+xml,<?xml version="1.0" encoding="UTF-8" standalone="no"?>%0A<!-- Created with Inkscape (http://www.inkscape.org/) -->%0A%0A<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="34" height="21" preserveAspectRatio="xMinYMin meet" viewBox="0 0 34 21">%0A  <g%0A     transform="translate(1,1)"%0A     id="g4137">%0A    <g%0A       id="g3806">%0A      <path%0A         d="m 6,20 0,-4 4,0 0,3 -1,0 0,1 z"%0A         id="path3977"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,17 2,0 0,2 -2,0 z"%0A         id="rect3979"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,21,-1032.3622)"%0A       id="g3841">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3836"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="rect3838"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,31,-1032.3622)"%0A       id="g3935">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3937"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3939"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(0,-1032.3622)"%0A       id="layer1-0">%0A      <path%0A         d="m 7,1033.3622 19,0 0,16 -19,0 z"%0A         id="rect5270"%0A         style="fill:%23ffcc99;fill-opacity:1" />%0A      <path%0A         d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"%0A         id="path5272"%0A         style="fill:%23ff99ff;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"%0A         id="rect5030-3-6"%0A         style="fill:%23ff3399;fill-opacity:1" />%0A      <path%0A         d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"%0A         id="path5412"%0A         style="fill:%23000000;fill-opacity:1" />%0A    </g>%0A    <g%0A       transform="translate(7,0)"%0A       id="layer3">%0A      <g%0A         id="g5869">%0A        <path%0A           d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"%0A           id="path5777"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"%0A           id="rect5496-38"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 12,13 2,0 0,2 -2,0 z"%0A           id="rect5779"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,13 2,0 0,2 -2,0 z"%0A           id="rect5781"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"%0A           id="path5785"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 19,12 1,0 0,1 -1,0 z"%0A           id="rect5787"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <g%0A           id="g5857">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5795"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5797"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A        <g%0A           transform="translate(-7,0)"%0A           id="g5861">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5863"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5865"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A      </g>%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,36,-1032.3622)"%0A       id="g3986">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3988"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3990"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       id="g4584">%0A      <path%0A         d="m 0,14 0,-2 2,0 0,-1 3,0 0,-1 1,0 0,4 -1,0 0,1 -4,0 0,-1 z"%0A         id="path3812"%0A         style="fill:%23000000;stroke:none" />%0A      <path%0A         d="m 1,14 0,-1 1,0 0,-1 4,0 0,1 -2,0 0,1 z"%0A         id="path3814"%0A         style="fill:%23999999;stroke:none" />%0A    </g>%0A  </g>%0A</svg>%0A';

// src/client/assets/nyan/nyan4.svg
var nyan4_default = 'data:image/svg+xml,<?xml version="1.0" encoding="UTF-8" standalone="no"?>%0A<!-- Created with Inkscape (http://www.inkscape.org/) -->%0A%0A<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="34" height="21" preserveAspectRatio="xMinYMin meet" viewBox="0 0 34 21">%0A  <g%0A     transform="translate(1,0)"%0A     id="g4082">%0A    <g%0A       transform="translate(0,-1031.3622)"%0A       id="g3982">%0A      <path%0A         d="m 5,20 0,-3 1,0 0,-1 3,0 0,3 -1,0 0,1 z"%0A         transform="translate(0,1032.3622)"%0A         id="path3977-4"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 6,17 2,0 0,2 -2,0 z"%0A         transform="translate(0,1032.3622)"%0A         id="rect3979-3"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,20,-1031.3622)"%0A       id="g3841">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3836"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="rect3838"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,30,-1031.3622)"%0A       id="g3935">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3937"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3939"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(0,-1031.3622)"%0A       id="layer1-0">%0A      <path%0A         d="m 7,1033.3622 19,0 0,16 -19,0 z"%0A         id="rect5270"%0A         style="fill:%23ffcc99;fill-opacity:1" />%0A      <path%0A         d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"%0A         id="path5272"%0A         style="fill:%23ff99ff;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"%0A         id="rect5030-3-6"%0A         style="fill:%23ff3399;fill-opacity:1" />%0A      <path%0A         d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"%0A         id="path5412"%0A         style="fill:%23000000;fill-opacity:1" />%0A    </g>%0A    <g%0A       transform="translate(7,1)"%0A       id="layer3">%0A      <g%0A         id="g5869">%0A        <path%0A           d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"%0A           id="path5777"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"%0A           id="rect5496-38"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 12,13 2,0 0,2 -2,0 z"%0A           id="rect5779"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,13 2,0 0,2 -2,0 z"%0A           id="rect5781"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"%0A           id="path5785"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 19,12 1,0 0,1 -1,0 z"%0A           id="rect5787"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <g%0A           id="g5857">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5795"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5797"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A        <g%0A           transform="translate(-7,0)"%0A           id="g5861">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5863"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5865"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A      </g>%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,35,-1031.3622)"%0A       id="g3986">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3988"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3990"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="matrix(1,0,0,-1,0,1058.3622)"%0A       id="g4887">%0A      <path%0A         d="m 1,12 -1,0 0,-2 1,0 0,-1 2,0 0,1 1,0 0,1 2,0 0,4 -2,0 0,-1 -2,0 0,-1 -1,0 z"%0A         transform="translate(0,1032.3622)"%0A         id="path4889"%0A         style="fill:%23000000;stroke:none" />%0A      <path%0A         d="m 1,12 0,-2 2,0 0,2 3,0 0,2 -2,0 0,-1 -2,0 0,-1 z"%0A         transform="translate(0,1032.3622)"%0A         id="path4891"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A  </g>%0A</svg>%0A';

// src/client/assets/nyan/nyan5.svg
var nyan5_default = 'data:image/svg+xml,<?xml version="1.0" encoding="UTF-8" standalone="no"?>%0A<!-- Created with Inkscape (http://www.inkscape.org/) -->%0A%0A<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="34" height="21" preserveAspectRatio="xMinYMin meet" viewBox="0 0 34 21">%0A  <g%0A     transform="translate(1,0)"%0A     id="g4025">%0A    <g%0A       transform="translate(0,1)"%0A       id="g5089">%0A      <path%0A         d="m 3,20 0,-3 1,0 0,-1 1,0 0,-1 3,0 0,3 -1,0 0,1 -1,0 0,1 z"%0A         id="path5085"%0A         style="fill:%23000000;stroke:none" />%0A      <path%0A         d="m 4,19 0,-2 1,0 0,-1 2,0 0,2 -1,0 0,1 z"%0A         id="path5087"%0A         style="fill:%23999999;stroke:none" />%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,20,-1031.3622)"%0A       id="g3841">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3836"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="rect3838"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,28,-1031.3622)"%0A       id="g3935">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3937"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3939"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(0,-1031.3622)"%0A       id="layer1-0">%0A      <path%0A         d="m 7,1033.3622 19,0 0,16 -19,0 z"%0A         id="rect5270"%0A         style="fill:%23ffcc99;fill-opacity:1" />%0A      <path%0A         d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"%0A         id="path5272"%0A         style="fill:%23ff99ff;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"%0A         id="rect5030-3-6"%0A         style="fill:%23ff3399;fill-opacity:1" />%0A      <path%0A         d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"%0A         id="path5412"%0A         style="fill:%23000000;fill-opacity:1" />%0A    </g>%0A    <g%0A       transform="translate(6,1)"%0A       id="layer3">%0A      <g%0A         id="g5869">%0A        <path%0A           d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"%0A           id="path5777"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"%0A           id="rect5496-38"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 12,13 2,0 0,2 -2,0 z"%0A           id="rect5779"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,13 2,0 0,2 -2,0 z"%0A           id="rect5781"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"%0A           id="path5785"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 19,12 1,0 0,1 -1,0 z"%0A           id="rect5787"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <g%0A           id="g5857">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5795"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5797"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A        <g%0A           transform="translate(-7,0)"%0A           id="g5861">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5863"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5865"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A      </g>%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,33,-1031.3622)"%0A       id="g3986">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3988"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3990"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(0,1)"%0A       id="g5097">%0A      <path%0A         d="M -1,11 -1,9 0,9 0,8 4,8 4,9 6,9 6,13 4,13 4,12 1,12 1,11 z"%0A         id="path5093"%0A         style="fill:%23000000;stroke:none" />%0A      <path%0A         d="m 0,10 0,-1 3,0 0,1 2,0 0,1 1,0 0,1 -1,0 0,-1 -4,0 0,-1 z"%0A         id="path5095"%0A         style="fill:%23999999;stroke:none" />%0A    </g>%0A  </g>%0A</svg>%0A';

// src/client/assets/nyan/nyan6.svg
var nyan6_default = 'data:image/svg+xml,<?xml version="1.0" encoding="UTF-8" standalone="no"?>%0A<!-- Created with Inkscape (http://www.inkscape.org/) -->%0A%0A<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="34" height="21" preserveAspectRatio="xMinYMin meet" viewBox="0 0 34 21">%0A  <g%0A     transform="translate(1,0)"%0A     id="g3968">%0A    <g%0A       transform="translate(0,1)"%0A       id="g5089">%0A      <path%0A         d="m 3,20 0,-3 1,0 0,-1 1,0 0,-1 3,0 0,3 -1,0 0,1 -1,0 0,1 z"%0A         id="path5085"%0A         style="fill:%23000000;stroke:none" />%0A      <path%0A         d="m 4,19 0,-2 1,0 0,-1 1,0 0,1 1,0 0,1 -1,0 0,1 z"%0A         id="path5087"%0A         style="fill:%23999999;stroke:none" />%0A    </g>%0A    <g%0A       transform="matrix(-1,0,0,1,32,-1031.3622)"%0A       id="g3982">%0A      <path%0A         d="m 5,20 0,-3 1,0 0,-1 3,0 0,3 -1,0 0,1 z"%0A         transform="translate(0,1032.3622)"%0A         id="path3977"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 6,17 2,0 0,2 -2,0 z"%0A         transform="translate(0,1032.3622)"%0A         id="rect3979"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(3,-1031.3622)"%0A       id="g3841">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3836"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="rect3838"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(12,-1031.3622)"%0A       id="g3935">%0A      <path%0A         d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3937"%0A         style="fill:%23000000;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 7,48 2,0 0,1 -2,0 z"%0A         transform="translate(0,1002.3622)"%0A         id="path3939"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A    <g%0A       transform="translate(0,-1031.3622)"%0A       id="layer1-0">%0A      <path%0A         d="m 7,1033.3622 19,0 0,16 -19,0 z"%0A         id="rect5270"%0A         style="fill:%23ffcc99;fill-opacity:1" />%0A      <path%0A         d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"%0A         id="path5272"%0A         style="fill:%23ff99ff;fill-opacity:1;stroke:none" />%0A      <path%0A         d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"%0A         id="rect5030-3-6"%0A         style="fill:%23ff3399;fill-opacity:1" />%0A      <path%0A         d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"%0A         id="path5412"%0A         style="fill:%23000000;fill-opacity:1" />%0A    </g>%0A    <g%0A       transform="translate(6,0)"%0A       id="layer3">%0A      <g%0A         id="g5869">%0A        <path%0A           d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"%0A           id="path5777"%0A           style="fill:%23999999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"%0A           id="rect5496-38"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 12,13 2,0 0,2 -2,0 z"%0A           id="rect5779"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 23,13 2,0 0,2 -2,0 z"%0A           id="rect5781"%0A           style="fill:%23ff9999;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"%0A           id="path5785"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <path%0A           d="m 19,12 1,0 0,1 -1,0 z"%0A           id="rect5787"%0A           style="fill:%23000000;fill-opacity:1;stroke:none" />%0A        <g%0A           id="g5857">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5795"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5797"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A        <g%0A           transform="translate(-7,0)"%0A           id="g5861">%0A          <path%0A             d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"%0A             id="path5863"%0A             style="fill:%23000000;fill-opacity:1;stroke:none" />%0A          <path%0A             d="m 21,11 1,0 0,1 -1,0 z"%0A             id="path5865"%0A             style="fill:%23ffffff;fill-opacity:1;stroke:none" />%0A        </g>%0A      </g>%0A    </g>%0A    <g%0A       transform="translate(0,-1033.3622)"%0A       id="g3996">%0A      <path%0A         d="m 1,12 -1,0 0,-2 1,0 0,-1 2,0 0,1 1,0 0,1 2,0 0,4 -2,0 0,-1 -2,0 0,-1 -1,0 z"%0A         transform="translate(0,1032.3622)"%0A         id="path3992"%0A         style="fill:%23000000;stroke:none" />%0A      <path%0A         d="m 1,12 0,-2 2,0 0,2 3,0 0,2 -2,0 0,-1 -2,0 0,-1 z"%0A         transform="translate(0,1032.3622)"%0A         id="path3994"%0A         style="fill:%23999999;fill-opacity:1;stroke:none" />%0A    </g>%0A  </g>%0A</svg>%0A';

// src/client/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var NYAN_FRAMES = [nyan1_default, nyan2_default, nyan3_default, nyan4_default, nyan5_default, nyan6_default];
function contextOccupancy(pressure) {
  const usedTokens = pressure?.projectedTokens ?? pressure?.pressureTokens;
  if (usedTokens === void 0 || pressure?.contextWindow === void 0 || pressure.contextWindow <= 0) return null;
  return {
    percent: Math.min(100, Math.round(usedTokens / pressure.contextWindow * 100))
  };
}
var BAR_WIDTH = 200;
var BAR_HEIGHT = 20;
var DEFAULT_RIGHT = 8;
var DEFAULT_BOTTOM = 6;
var POS_STORAGE_KEY = "a02-context-progress-pos";
function loadPosition() {
  try {
    const raw = localStorage.getItem(POS_STORAGE_KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.left === "number" && typeof parsed.top === "number") {
      return { left: parsed.left, top: parsed.top };
    }
  } catch {
  }
  return null;
}
function savePosition(position) {
  try {
    localStorage.setItem(POS_STORAGE_KEY, JSON.stringify(position));
  } catch {
  }
}
var inject = ["slots", "sessions"];
function apply(ctx) {
  const ContextProgress = (_props) => {
    const sessionInfo = (0, import_react.useSyncExternalStore)(
      (0, import_react.useCallback)((onStoreChange) => ctx.sessions.currentProvideInfo.subscribe(onStoreChange), [ctx]),
      (0, import_react.useCallback)(() => ctx.sessions.currentProvideInfo.getSnapshot(), [ctx])
    );
    const pressure = (0, import_react.useSyncExternalStore)(
      (0, import_react.useCallback)((onStoreChange) => {
        const unsubscribe = [];
        const face = sessionInfo?.projections?.faceOf("contextPressure");
        if (face !== void 0) unsubscribe.push(face.subscribe(onStoreChange));
        unsubscribe.push(ctx.sessions.currentProvideInfo.subscribe(onStoreChange));
        return () => {
          for (const off of unsubscribe) off();
        };
      }, [ctx, sessionInfo]),
      (0, import_react.useCallback)(() => sessionInfo?.projections?.faceOf("contextPressure").getSnapshot(), [sessionInfo])
    );
    const [position, setPosition] = (0, import_react.useState)(loadPosition);
    const [dragging, setDragging] = (0, import_react.useState)(false);
    const positionRef = (0, import_react.useRef)(position);
    positionRef.current = position;
    const dragStartRef = (0, import_react.useRef)(null);
    const onPointerDown = (e) => {
      if (e.button !== 0) return;
      const left = positionRef.current?.left ?? window.innerWidth - BAR_WIDTH - DEFAULT_RIGHT;
      const top = positionRef.current?.top ?? window.innerHeight - BAR_HEIGHT - DEFAULT_BOTTOM;
      dragStartRef.current = { startX: e.clientX, startY: e.clientY, left, top };
      setDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
      e.preventDefault();
    };
    const onPointerMove = (e) => {
      const drag = dragStartRef.current;
      if (drag === null) return;
      const nextLeft = Math.min(Math.max(0, drag.left + e.clientX - drag.startX), window.innerWidth - BAR_WIDTH);
      const nextTop = Math.min(Math.max(0, drag.top + e.clientY - drag.startY), window.innerHeight - BAR_HEIGHT);
      const next = { left: nextLeft, top: nextTop };
      positionRef.current = next;
      setPosition(next);
    };
    const onPointerUp = (e) => {
      if (dragStartRef.current === null) return;
      dragStartRef.current = null;
      setDragging(false);
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
      if (positionRef.current !== null) savePosition(positionRef.current);
    };
    const [frame, setFrame] = (0, import_react.useState)(0);
    (0, import_react.useEffect)(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const timer = window.setInterval(() => setFrame((f) => (f + 1) % NYAN_FRAMES.length), 120);
      return () => window.clearInterval(timer);
    }, []);
    const context = contextOccupancy(pressure);
    if (context === null) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        role: "progressbar",
        "aria-label": `Context ${context.percent}%`,
        "aria-valuenow": context.percent,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        title: `Context ${context.percent}%`,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onPointerCancel: onPointerUp,
        style: {
          position: "absolute",
          left: position?.left,
          top: position?.top,
          right: position === null ? DEFAULT_RIGHT : void 0,
          bottom: position === null ? DEFAULT_BOTTOM : void 0,
          width: BAR_WIDTH,
          height: BAR_HEIGHT,
          zIndex: 1,
          pointerEvents: "auto",
          cursor: dragging ? "grabbing" : "grab",
          touchAction: "none",
          userSelect: "none"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "relative", width: "100%", height: "100%", pointerEvents: "none" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "img",
            {
              src: NYAN_FRAMES[frame],
              alt: "",
              width: 54,
              height: 33,
              style: {
                position: "absolute",
                left: `calc(${context.percent}% - 10px)`,
                top: -6,
                zIndex: 2,
                imageRendering: "pixelated",
                pointerEvents: "none"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                borderRadius: 8
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  style: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    border: "1px solid rgba(120, 120, 120, 0.9)",
                    borderRadius: 7,
                    overflow: "hidden",
                    background: "rgba(255, 255, 255, 0.28)",
                    boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.35)"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: `${context.percent}%`,
                        background: "linear-gradient(180deg, #ff0000 0%, #ffc800 14.3%, #ffff00 28.6%, #00ff00 42.9%, #00ffff 57.1%, #0000ff 71.4%, #5a009d 100%)"
                      }
                    }
                  )
                }
              )
            }
          )
        ] })
      }
    );
  };
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "context-progress"
  }, ContextProgress));
}
return module.exports; } });
