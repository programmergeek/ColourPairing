(this["webpackJsonpcolour-pairing"]=this["webpackJsonpcolour-pairing"]||[]).push([[0],[,,,,,,,,,,,,function(C,e,t){},function(C,e,t){},function(C,e,t){},,function(C,e,t){},function(C,e,t){},function(C,e,t){},function(C,e,t){},function(C,e,t){"use strict";t.r(e);var c=t(1),o=t.n(c),r=t(6),n=t.n(r),s=(t(12),t(2)),a=(t(13),t(3)),l=t(7),u=(t(14),t(0)),i=function(C){var e=Object.assign({},C),t=Object(c.useState)(""),o=Object(s.a)(t,2),r=o[0],n=o[1],a=Object(c.useState)(!1),i=Object(s.a)(a,2),d=i[0],j=i[1],V=function(C){"#"===C[0]?n(C):n("#".concat(C)),e.onChange&&e.onChange(C)};return Object(u.jsxs)("div",{className:"field-container",children:[Object(u.jsx)("input",{className:"input-field",value:r.toUpperCase(),onChange:function(C){return V(C.target.value)},onClick:function(){return j(!0)}}),Object(u.jsx)("div",{className:"colour-picker",style:{display:d?"block":" none"},onMouseLeave:function(){return j(!1)},children:Object(u.jsx)(l.a,{color:r.toUpperCase(),onChange:function(C){return V(C.hex.toUpperCase())}})})]})},d=t(4),j=(t(16),function(C){var e=Object.assign({},C),t=Object(c.useState)(!0),o=Object(s.a)(t,2),r=o[0],n=o[1],l=Object(c.useState)({}),j=Object(s.a)(l,2)[1];return Object(u.jsxs)("div",{className:"drop-menu-container",children:[Object(u.jsxs)("p",{className:"header",onClick:function(){n(!r)},children:[" ",e.header," "]}),Object(u.jsx)("div",{className:"fields ".concat(r?"hide-fields":"show-fields"),style:{height:70*e.fields.length},children:e.fields.map((function(C,t){return Object(u.jsxs)("div",{className:"field ".concat(r?"hide":"show"),style:{zIndex:e.fields.length-t},children:[Object(u.jsxs)("p",{className:"label",children:[" ",C," "]}),Object(u.jsx)(i,{onChange:function(t){j((function(c){return c=Object(a.a)(Object(a.a)({},c),{},Object(d.a)({},C,t)),e.onChange&&e.onChange(c),c}))}})]},t)}))})]})}),V=(t(17),["background-colour","text-colour","primary-button-background-colour","primary-button-border-colour","primary-button-text-colour","secondary-button-background-colour","secondary-button-border-colour","secondary-button-text-colour","tertiary-button-background-colour","tertiary-button-border-colour","tertiary-button-text-colour","primary-art-colour","secondary-art-colour"]),b=function(C){var e=Object.assign({},C),t=Object(c.useState)(!0),o=Object(s.a)(t,2),r=o[0],n=o[1];return Object(u.jsxs)("div",{className:"code-container",children:[Object(u.jsxs)("div",{id:"styles",children:[Object(u.jsx)("p",{id:"css",className:"".concat(r?"selected":""),onClick:function(){return n(!0)},children:"CSS"}),Object(u.jsx)("p",{id:"scss",className:"".concat(r?"":"selected"),onClick:function(){return n(!1)},children:"Sass"})]}),Object(u.jsxs)("div",{className:"code-block-container",children:[Object(u.jsx)("p",{className:"copy",onClick:function(){var C=document.getElementsByClassName("style-var");navigator.clipboard.writeText(""),navigator.clipboard.readText().then((function(){for(var e="",t=0;t<C.length;t++)e+=C[t].textContent+"\n";navigator.clipboard.writeText(e)}))},children:"Copy"}),Object(u.jsxs)("code",{className:"variables",children:["html {",Object(u.jsx)("br",{}),Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$"),"".concat(V[0]," : ").concat(e.colours.background,";")]}),Object(u.jsx)("br",{}),Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$"),"".concat(V[1]," : ").concat(e.colours.text,";")]}),Object(u.jsx)("br",{}),e.colours.primaryButton?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[2]," : ").concat(e.colours.primaryButton["Background Colour"],";"),Object(u.jsx)("br",{})]}):null,e.colours.primaryButton?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[3]," : ").concat(e.colours.primaryButton["Border Colour"],";"),Object(u.jsx)("br",{})]}):null,e.colours.primaryButton?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[4]," : ").concat(e.colours.primaryButton["Text Colour"],";"),Object(u.jsx)("br",{})]}):null,e.colours.secondaryButton?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[5]," : ").concat(e.colours.secondaryButton["Background Colour"],";"),Object(u.jsx)("br",{})]}):null,e.colours.secondaryButton?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[6]," : ").concat(e.colours.secondaryButton["Border Colour"],";"),Object(u.jsx)("br",{})]}):null,e.colours.secondaryButton?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[7]," : ").concat(e.colours.secondaryButton["Text Colour"],";"),Object(u.jsx)("br",{})]}):null,e.colours.tertiaryButton?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[8]," : ").concat(e.colours.tertiaryButton["Background Colour"],";")," ",Object(u.jsx)("br",{})]}):null,e.colours.tertiaryButton?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[9]," : ").concat(e.colours.tertiaryButton["Border Colour"],";"),Object(u.jsx)("br",{})]}):null,e.colours.tertiaryButton?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[10]," : ").concat(e.colours.tertiaryButton["Text Colour"],";"),Object(u.jsx)("br",{})]}):null,e.colours.clipArt?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[11]," : ").concat(e.colours.clipArt["Primary Colour"],";"),Object(u.jsx)("br",{})]}):null,e.colours.clipArt?Object(u.jsxs)("code",{className:"style-var",children:["".concat(r?"--":"$").concat(V[12]," : ").concat(e.colours.clipArt["Secondary Colour"],";"),Object(u.jsx)("br",{})]}):null,"}"]})]})]})},x=(t(18),function(C){var e=Object.assign({},C),t=Object(c.useState)({colours:{background:"#fff",text:"#000"}}),o=Object(s.a)(t,2),r=o[0],n=o[1];return Object(u.jsxs)("div",{className:"colour-settings",children:[Object(u.jsx)("h1",{className:"header-cs",children:"Colour Settings"}),Object(u.jsxs)("div",{id:"background-and-text",children:[Object(u.jsxs)("div",{id:"background",style:{zIndex:1e3},children:[Object(u.jsx)("label",{className:"label",children:" Background Colour"}),Object(u.jsx)(i,{onChange:function(C){n((function(t){return t.colours.background=C,e.onChange&&e.onChange(t),Object(a.a)({},t)}))}})]}),Object(u.jsxs)("div",{id:"text",style:{zIndex:1e3},children:[Object(u.jsx)("label",{className:"label",children:" Text Colour"}),Object(u.jsx)(i,{onChange:function(C){n((function(t){return t.colours.text=C,e.onChange&&e.onChange(t),Object(a.a)({},t)}))}})]})]}),Object(u.jsxs)("div",{className:"drop-menus",children:[Object(u.jsx)("div",{className:"menu",children:Object(u.jsx)(j,{fields:["Background Colour","Border Colour","Text Colour"],header:"Primary Button",onChange:function(C){n((function(t){return t.colours.primaryButton=C,e.onChange&&e.onChange(t),Object(a.a)({},t)}))}})}),Object(u.jsx)("div",{className:"menu",children:Object(u.jsx)(j,{fields:["Background Colour","Border Colour","Text Colour"],header:"Secondary Button",onChange:function(C){n((function(t){return t.colours.secondaryButton=C,e.onChange&&e.onChange(t),Object(a.a)({},t)}))}})}),Object(u.jsx)("div",{className:"menu",children:Object(u.jsx)(j,{fields:["Background Colour","Border Colour","Text Colour"],header:"Tertiary Button",onChange:function(C){n((function(t){return t.colours.tertiaryButton=C,e.onChange&&e.onChange(t),Object(a.a)({},t)}))}})}),Object(u.jsx)("div",{className:"menu",children:Object(u.jsx)(j,{fields:["Primary Colour","Secondary Colour"],header:"Art",onChange:function(C){n((function(t){return t.colours.clipArt=C,e.onChange&&e.onChange(t),Object(a.a)({},t)}))}})})]}),Object(u.jsxs)("div",{className:"code-block-cs",children:[console.log(r.colours),Object(u.jsx)(b,{colours:r.colours})]})]})}),H=(t(19),function(C){var e,t,c,o,r,n,s,a,l=Object.assign({},C);return Object(u.jsx)("div",{className:"output-container",style:{position:"absolute"},children:Object(u.jsxs)("svg",{width:"600",height:"600",viewBox:"0 0 650 650",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("g",{filter:"url(#filter0_d)",children:Object(u.jsx)("rect",{x:"79",y:"46",width:"650",height:"650",fill:l.colours.background})}),Object(u.jsx)("rect",{x:"156",y:"397",width:"133",height:"47",rx:"10",fill:(null===(e=l.colours.primaryButton)||void 0===e?void 0:e["Background Colour"])||"#9DF096"}),Object(u.jsx)("rect",{x:"299.5",y:"397.5",width:"153",height:"46",rx:"9.5",fill:(null===(t=l.colours.secondaryButton)||void 0===t?void 0:t["Background Colour"])||"white",stroke:(null===(c=l.colours.secondaryButton)||void 0===c?void 0:c["Border Colour"])||"#9DF096"}),Object(u.jsx)("path",{d:"M174.481 415.214H178.247C179.302 415.214 180.133 415.48 180.739 416.012C181.355 416.535 181.663 417.281 181.663 418.252C181.663 419.241 181.36 419.993 180.753 420.506C180.147 421.01 179.311 421.262 178.247 421.262H175.909V425H174.481V415.214ZM178.093 420.072C178.747 420.072 179.265 419.937 179.647 419.666C180.03 419.395 180.221 418.924 180.221 418.252C180.221 417.58 180.03 417.109 179.647 416.838C179.265 416.558 178.747 416.418 178.093 416.418H175.909V420.072H178.093ZM182.917 418.28H184.289V419.484C184.569 419.073 184.961 418.77 185.465 418.574C185.978 418.378 186.571 418.28 187.243 418.28V419.386C186.524 419.386 185.908 419.503 185.395 419.736C184.882 419.969 184.527 420.338 184.331 420.842V425H182.917V418.28ZM189.335 416.964C189.101 416.964 188.905 416.885 188.747 416.726C188.588 416.567 188.509 416.371 188.509 416.138C188.509 415.905 188.588 415.709 188.747 415.55C188.905 415.391 189.101 415.312 189.335 415.312C189.577 415.312 189.778 415.391 189.937 415.55C190.105 415.709 190.189 415.905 190.189 416.138C190.189 416.371 190.105 416.567 189.937 416.726C189.778 416.885 189.577 416.964 189.335 416.964ZM188.621 418.28H190.063V425H188.621V418.28ZM192.009 418.28H193.353V419.246C193.67 418.854 194.029 418.56 194.431 418.364C194.832 418.168 195.247 418.07 195.677 418.07C196.218 418.07 196.647 418.163 196.965 418.35C197.282 418.527 197.515 418.803 197.665 419.176C197.963 418.812 198.327 418.537 198.757 418.35C199.195 418.163 199.634 418.07 200.073 418.07C200.894 418.07 201.487 418.28 201.851 418.7C202.215 419.111 202.397 419.722 202.397 420.534V425H201.025V420.716C201.025 420.165 200.922 419.778 200.717 419.554C200.511 419.321 200.161 419.204 199.667 419.204C198.957 419.204 198.379 419.512 197.931 420.128C197.949 420.268 197.959 420.497 197.959 420.814V425H196.587V420.716C196.587 420.165 196.493 419.778 196.307 419.554C196.12 419.321 195.784 419.204 195.299 419.204C194.589 419.204 193.955 419.605 193.395 420.408V425H192.009V418.28ZM206.352 425.21C205.54 425.21 204.887 425.005 204.392 424.594C203.907 424.174 203.664 423.609 203.664 422.9C203.664 422.153 203.898 421.579 204.364 421.178C204.84 420.767 205.512 420.562 206.38 420.562C207.304 420.562 208.088 420.749 208.732 421.122V420.772C208.732 420.24 208.569 419.848 208.242 419.596C207.925 419.335 207.421 419.204 206.73 419.204C206.32 419.204 205.918 419.246 205.526 419.33C205.144 419.405 204.798 419.512 204.49 419.652V418.504C204.77 418.373 205.134 418.271 205.582 418.196C206.03 418.112 206.464 418.07 206.884 418.07C207.995 418.07 208.816 418.317 209.348 418.812C209.89 419.297 210.16 419.974 210.16 420.842V425H208.83V424.244C208.541 424.561 208.196 424.804 207.794 424.972C207.402 425.131 206.922 425.21 206.352 425.21ZM206.702 424.132C207.15 424.132 207.556 424.043 207.92 423.866C208.284 423.689 208.555 423.441 208.732 423.124V422.214C208.126 421.822 207.449 421.626 206.702 421.626C206.161 421.626 205.755 421.733 205.484 421.948C205.223 422.153 205.092 422.471 205.092 422.9C205.092 423.721 205.629 424.132 206.702 424.132ZM211.915 418.28H213.287V419.484C213.567 419.073 213.959 418.77 214.463 418.574C214.976 418.378 215.569 418.28 216.241 418.28V419.386C215.522 419.386 214.906 419.503 214.393 419.736C213.88 419.969 213.525 420.338 213.329 420.842V425H211.915V418.28ZM218.73 427.772C218.226 427.772 217.806 427.721 217.47 427.618V426.512C217.712 426.605 218.011 426.652 218.366 426.652C218.692 426.652 218.949 426.568 219.136 426.4C219.322 426.241 219.49 425.98 219.64 425.616L219.962 424.832L217.022 418.28H218.478L220.718 423.446L222.804 418.28H224.26L221.236 425.756C220.956 426.456 220.62 426.965 220.228 427.282C219.845 427.609 219.346 427.772 218.73 427.772ZM234.872 425.21C234.265 425.21 233.738 425.117 233.29 424.93C232.851 424.734 232.445 424.431 232.072 424.02V425H230.7V414.654H232.114V419.176C232.422 418.812 232.819 418.537 233.304 418.35C233.789 418.163 234.312 418.07 234.872 418.07C235.544 418.07 236.146 418.224 236.678 418.532C237.219 418.831 237.639 419.251 237.938 419.792C238.246 420.333 238.4 420.954 238.4 421.654C238.4 422.363 238.246 422.989 237.938 423.53C237.639 424.062 237.219 424.477 236.678 424.776C236.146 425.065 235.544 425.21 234.872 425.21ZM234.55 424.09C235.007 424.09 235.418 423.992 235.782 423.796C236.155 423.591 236.445 423.301 236.65 422.928C236.865 422.555 236.972 422.13 236.972 421.654C236.972 421.178 236.865 420.753 236.65 420.38C236.445 420.007 236.155 419.717 235.782 419.512C235.418 419.307 235.007 419.204 234.55 419.204C233.981 419.204 233.472 419.358 233.024 419.666C232.576 419.974 232.273 420.385 232.114 420.898V422.41C232.291 422.923 232.595 423.334 233.024 423.642C233.463 423.941 233.971 424.09 234.55 424.09ZM242.261 425.21C241.355 425.21 240.669 424.967 240.203 424.482C239.745 423.997 239.517 423.348 239.517 422.536V418.28H240.931V422.48C240.931 423.553 241.467 424.09 242.541 424.09C243.483 424.09 244.221 423.665 244.753 422.816V418.28H246.167V425H244.795V424.048C244.477 424.449 244.099 424.743 243.661 424.93C243.231 425.117 242.765 425.21 242.261 425.21ZM250.571 425.21C249.89 425.21 249.363 425.014 248.989 424.622C248.625 424.23 248.443 423.675 248.443 422.956V419.372H247.421V418.28H248.443V416.264H249.871V418.28H251.523V419.372H249.871V422.858C249.871 423.306 249.955 423.623 250.123 423.81C250.301 423.997 250.618 424.09 251.075 424.09C251.346 424.09 251.617 424.029 251.887 423.908V425.028C251.533 425.149 251.094 425.21 250.571 425.21ZM255.452 425.21C254.771 425.21 254.243 425.014 253.87 424.622C253.506 424.23 253.324 423.675 253.324 422.956V419.372H252.302V418.28H253.324V416.264H254.752V418.28H256.404V419.372H254.752V422.858C254.752 423.306 254.836 423.623 255.004 423.81C255.181 423.997 255.499 424.09 255.956 424.09C256.227 424.09 256.497 424.029 256.768 423.908V425.028C256.413 425.149 255.975 425.21 255.452 425.21ZM261.572 425.21C260.816 425.21 260.149 425.07 259.57 424.79C259.001 424.501 258.553 424.09 258.226 423.558C257.909 423.017 257.75 422.382 257.75 421.654C257.75 420.935 257.909 420.305 258.226 419.764C258.543 419.223 258.991 418.807 259.57 418.518C260.149 418.219 260.816 418.07 261.572 418.07C262.328 418.07 262.995 418.219 263.574 418.518C264.153 418.807 264.601 419.223 264.918 419.764C265.245 420.305 265.408 420.935 265.408 421.654C265.408 422.382 265.245 423.017 264.918 423.558C264.601 424.09 264.153 424.501 263.574 424.79C262.995 425.07 262.328 425.21 261.572 425.21ZM261.572 424.09C262.3 424.09 262.879 423.866 263.308 423.418C263.737 422.97 263.952 422.382 263.952 421.654C263.952 420.898 263.737 420.301 263.308 419.862C262.879 419.423 262.3 419.204 261.572 419.204C260.844 419.204 260.265 419.423 259.836 419.862C259.407 420.301 259.192 420.898 259.192 421.654C259.192 422.382 259.407 422.97 259.836 423.418C260.265 423.866 260.844 424.09 261.572 424.09ZM266.944 418.28H268.316V419.246C268.634 418.845 269.021 418.551 269.478 418.364C269.945 418.168 270.43 418.07 270.934 418.07C271.83 418.07 272.498 418.308 272.936 418.784C273.375 419.26 273.594 419.899 273.594 420.702V425H272.18V420.842C272.18 419.75 271.658 419.204 270.612 419.204C270.164 419.204 269.744 419.311 269.352 419.526C268.97 419.731 268.638 420.049 268.358 420.478V425H266.944V418.28Z",fill:(null===(o=l.colours.primaryButton)||void 0===o?void 0:o["Text Colour"])||"black"}),Object(u.jsx)("path",{d:"M318.745 425.21C318.185 425.21 317.63 425.159 317.079 425.056C316.538 424.963 316.094 424.832 315.749 424.664V423.376C316.645 423.796 317.611 424.006 318.647 424.006C320.103 424.006 320.831 423.516 320.831 422.536C320.831 422.2 320.752 421.929 320.593 421.724C320.434 421.519 320.206 421.341 319.907 421.192C319.608 421.033 319.123 420.819 318.451 420.548C317.527 420.175 316.86 419.764 316.449 419.316C316.038 418.868 315.833 418.303 315.833 417.622C315.833 417.109 315.973 416.656 316.253 416.264C316.533 415.863 316.925 415.555 317.429 415.34C317.933 415.116 318.512 415.004 319.165 415.004C319.697 415.004 320.178 415.046 320.607 415.13C321.036 415.214 321.456 415.349 321.867 415.536V416.768C321.055 416.404 320.234 416.222 319.403 416.222C318.731 416.222 318.218 416.343 317.863 416.586C317.508 416.829 317.331 417.174 317.331 417.622C317.331 417.93 317.406 418.191 317.555 418.406C317.714 418.611 317.942 418.798 318.241 418.966C318.549 419.125 319.002 419.325 319.599 419.568C320.262 419.839 320.784 420.095 321.167 420.338C321.55 420.581 321.839 420.879 322.035 421.234C322.24 421.579 322.343 422.013 322.343 422.536C322.343 423.385 322.04 424.043 321.433 424.51C320.826 424.977 319.93 425.21 318.745 425.21ZM327.573 425.21C326.331 425.21 325.356 424.902 324.647 424.286C323.947 423.661 323.597 422.783 323.597 421.654C323.597 420.553 323.909 419.68 324.535 419.036C325.169 418.392 326.07 418.07 327.237 418.07C328.011 418.07 328.669 418.219 329.211 418.518C329.752 418.807 330.158 419.213 330.429 419.736C330.709 420.249 330.849 420.837 330.849 421.5V422.2H324.941C324.987 422.835 325.253 423.311 325.739 423.628C326.233 423.936 326.901 424.09 327.741 424.09C328.17 424.09 328.604 424.053 329.043 423.978C329.481 423.894 329.869 423.787 330.205 423.656V424.79C329.906 424.911 329.509 425.009 329.015 425.084C328.529 425.168 328.049 425.21 327.573 425.21ZM329.519 421.206C329.5 420.571 329.29 420.081 328.889 419.736C328.497 419.381 327.937 419.204 327.209 419.204C326.499 419.204 325.949 419.386 325.557 419.75C325.165 420.114 324.959 420.599 324.941 421.206H329.519ZM335.936 425.21C335.19 425.21 334.527 425.07 333.948 424.79C333.37 424.51 332.917 424.104 332.59 423.572C332.273 423.031 332.114 422.391 332.114 421.654C332.114 420.917 332.273 420.282 332.59 419.75C332.917 419.209 333.37 418.793 333.948 418.504C334.536 418.215 335.208 418.07 335.964 418.07C336.991 418.07 337.812 418.271 338.428 418.672V419.834C337.822 419.414 337.047 419.204 336.104 419.204C335.339 419.204 334.718 419.414 334.242 419.834C333.776 420.245 333.542 420.851 333.542 421.654C333.542 422.457 333.776 423.063 334.242 423.474C334.709 423.885 335.32 424.09 336.076 424.09C337.019 424.09 337.831 423.866 338.512 423.418V424.566C338.186 424.79 337.812 424.953 337.392 425.056C336.982 425.159 336.496 425.21 335.936 425.21ZM343.388 425.21C342.632 425.21 341.964 425.07 341.386 424.79C340.816 424.501 340.368 424.09 340.042 423.558C339.724 423.017 339.566 422.382 339.566 421.654C339.566 420.935 339.724 420.305 340.042 419.764C340.359 419.223 340.807 418.807 341.386 418.518C341.964 418.219 342.632 418.07 343.388 418.07C344.144 418.07 344.811 418.219 345.39 418.518C345.968 418.807 346.416 419.223 346.734 419.764C347.06 420.305 347.224 420.935 347.224 421.654C347.224 422.382 347.06 423.017 346.734 423.558C346.416 424.09 345.968 424.501 345.39 424.79C344.811 425.07 344.144 425.21 343.388 425.21ZM343.388 424.09C344.116 424.09 344.694 423.866 345.124 423.418C345.553 422.97 345.768 422.382 345.768 421.654C345.768 420.898 345.553 420.301 345.124 419.862C344.694 419.423 344.116 419.204 343.388 419.204C342.66 419.204 342.081 419.423 341.652 419.862C341.222 420.301 341.008 420.898 341.008 421.654C341.008 422.382 341.222 422.97 341.652 423.418C342.081 423.866 342.66 424.09 343.388 424.09ZM348.76 418.28H350.132V419.246C350.449 418.845 350.836 418.551 351.294 418.364C351.76 418.168 352.246 418.07 352.75 418.07C353.646 418.07 354.313 418.308 354.752 418.784C355.19 419.26 355.41 419.899 355.41 420.702V425H353.996V420.842C353.996 419.75 353.473 419.204 352.428 419.204C351.98 419.204 351.56 419.311 351.168 419.526C350.785 419.731 350.454 420.049 350.174 420.478V425H348.76V418.28ZM360.402 425.21C359.73 425.21 359.123 425.065 358.582 424.776C358.05 424.477 357.63 424.062 357.322 423.53C357.023 422.989 356.874 422.363 356.874 421.654C356.874 420.954 357.023 420.333 357.322 419.792C357.63 419.251 358.05 418.831 358.582 418.532C359.123 418.224 359.73 418.07 360.402 418.07C361.615 418.07 362.535 418.439 363.16 419.176V414.654H364.574V425H363.202V424.02C362.829 424.431 362.418 424.734 361.97 424.93C361.531 425.117 361.009 425.21 360.402 425.21ZM360.724 424.09C361.303 424.09 361.807 423.941 362.236 423.642C362.675 423.334 362.983 422.923 363.16 422.41V420.898C363.001 420.385 362.698 419.974 362.25 419.666C361.811 419.358 361.303 419.204 360.724 419.204C360.267 419.204 359.851 419.307 359.478 419.512C359.114 419.717 358.825 420.007 358.61 420.38C358.405 420.753 358.302 421.178 358.302 421.654C358.302 422.13 358.405 422.555 358.61 422.928C358.825 423.301 359.114 423.591 359.478 423.796C359.851 423.992 360.267 424.09 360.724 424.09ZM368.599 425.21C367.787 425.21 367.134 425.005 366.639 424.594C366.154 424.174 365.911 423.609 365.911 422.9C365.911 422.153 366.145 421.579 366.611 421.178C367.087 420.767 367.759 420.562 368.627 420.562C369.551 420.562 370.335 420.749 370.979 421.122V420.772C370.979 420.24 370.816 419.848 370.489 419.596C370.172 419.335 369.668 419.204 368.977 419.204C368.567 419.204 368.165 419.246 367.773 419.33C367.391 419.405 367.045 419.512 366.737 419.652V418.504C367.017 418.373 367.381 418.271 367.829 418.196C368.277 418.112 368.711 418.07 369.131 418.07C370.242 418.07 371.063 418.317 371.595 418.812C372.137 419.297 372.407 419.974 372.407 420.842V425H371.077V424.244C370.788 424.561 370.443 424.804 370.041 424.972C369.649 425.131 369.169 425.21 368.599 425.21ZM368.949 424.132C369.397 424.132 369.803 424.043 370.167 423.866C370.531 423.689 370.802 423.441 370.979 423.124V422.214C370.373 421.822 369.696 421.626 368.949 421.626C368.408 421.626 368.002 421.733 367.731 421.948C367.47 422.153 367.339 422.471 367.339 422.9C367.339 423.721 367.876 424.132 368.949 424.132ZM374.162 418.28H375.534V419.484C375.814 419.073 376.206 418.77 376.71 418.574C377.223 418.378 377.816 418.28 378.488 418.28V419.386C377.769 419.386 377.153 419.503 376.64 419.736C376.127 419.969 375.772 420.338 375.576 420.842V425H374.162V418.28ZM380.977 427.772C380.473 427.772 380.053 427.721 379.717 427.618V426.512C379.959 426.605 380.258 426.652 380.613 426.652C380.939 426.652 381.196 426.568 381.383 426.4C381.569 426.241 381.737 425.98 381.887 425.616L382.209 424.832L379.269 418.28H380.725L382.965 423.446L385.051 418.28H386.507L383.483 425.756C383.203 426.456 382.867 426.965 382.475 427.282C382.092 427.609 381.593 427.772 380.977 427.772ZM392.947 415.214H397.441C398.309 415.214 398.981 415.438 399.457 415.886C399.933 416.334 400.171 416.987 400.171 417.846C400.171 418.331 400.054 418.761 399.821 419.134C399.597 419.498 399.298 419.769 398.925 419.946C399.97 420.254 400.493 421.015 400.493 422.228C400.493 422.797 400.367 423.292 400.115 423.712C399.872 424.123 399.536 424.44 399.107 424.664C398.678 424.888 398.202 425 397.679 425H392.947V415.214ZM397.259 419.414C397.716 419.414 398.076 419.288 398.337 419.036C398.598 418.784 398.729 418.411 398.729 417.916C398.729 417.347 398.598 416.95 398.337 416.726C398.085 416.493 397.693 416.376 397.161 416.376H394.375V419.414H397.259ZM397.357 423.838C397.908 423.838 398.328 423.717 398.617 423.474C398.906 423.231 399.051 422.816 399.051 422.228C399.051 421.64 398.897 421.22 398.589 420.968C398.29 420.716 397.838 420.59 397.231 420.59H394.375V423.838H397.357ZM404.713 425.21C403.808 425.21 403.122 424.967 402.655 424.482C402.198 423.997 401.969 423.348 401.969 422.536V418.28H403.383V422.48C403.383 423.553 403.92 424.09 404.993 424.09C405.936 424.09 406.673 423.665 407.205 422.816V418.28H408.619V425H407.247V424.048C406.93 424.449 406.552 424.743 406.113 424.93C405.684 425.117 405.217 425.21 404.713 425.21ZM413.023 425.21C412.342 425.21 411.815 425.014 411.441 424.622C411.077 424.23 410.895 423.675 410.895 422.956V419.372H409.873V418.28H410.895V416.264H412.323V418.28H413.975V419.372H412.323V422.858C412.323 423.306 412.407 423.623 412.575 423.81C412.753 423.997 413.07 424.09 413.527 424.09C413.798 424.09 414.069 424.029 414.339 423.908V425.028C413.985 425.149 413.546 425.21 413.023 425.21ZM417.904 425.21C417.223 425.21 416.696 425.014 416.322 424.622C415.958 424.23 415.776 423.675 415.776 422.956V419.372H414.754V418.28H415.776V416.264H417.204V418.28H418.856V419.372H417.204V422.858C417.204 423.306 417.288 423.623 417.456 423.81C417.634 423.997 417.951 424.09 418.408 424.09C418.679 424.09 418.95 424.029 419.22 423.908V425.028C418.866 425.149 418.427 425.21 417.904 425.21ZM424.024 425.21C423.268 425.21 422.601 425.07 422.022 424.79C421.453 424.501 421.005 424.09 420.678 423.558C420.361 423.017 420.202 422.382 420.202 421.654C420.202 420.935 420.361 420.305 420.678 419.764C420.996 419.223 421.444 418.807 422.022 418.518C422.601 418.219 423.268 418.07 424.024 418.07C424.78 418.07 425.448 418.219 426.026 418.518C426.605 418.807 427.053 419.223 427.37 419.764C427.697 420.305 427.86 420.935 427.86 421.654C427.86 422.382 427.697 423.017 427.37 423.558C427.053 424.09 426.605 424.501 426.026 424.79C425.448 425.07 424.78 425.21 424.024 425.21ZM424.024 424.09C424.752 424.09 425.331 423.866 425.76 423.418C426.19 422.97 426.404 422.382 426.404 421.654C426.404 420.898 426.19 420.301 425.76 419.862C425.331 419.423 424.752 419.204 424.024 419.204C423.296 419.204 422.718 419.423 422.288 419.862C421.859 420.301 421.644 420.898 421.644 421.654C421.644 422.382 421.859 422.97 422.288 423.418C422.718 423.866 423.296 424.09 424.024 424.09ZM429.396 418.28H430.768V419.246C431.086 418.845 431.473 418.551 431.93 418.364C432.397 418.168 432.882 418.07 433.386 418.07C434.282 418.07 434.95 418.308 435.388 418.784C435.827 419.26 436.046 419.899 436.046 420.702V425H434.632V420.842C434.632 419.75 434.11 419.204 433.064 419.204C432.616 419.204 432.196 419.311 431.804 419.526C431.422 419.731 431.09 420.049 430.81 420.478V425H429.396V418.28Z",fill:(null===(r=l.colours.secondaryButton)||void 0===r?void 0:r["Text Colour"])||"#9DF096"}),Object(u.jsx)("path",{d:"M480.864 416.418H477.826V415.214H485.344V416.418H482.306V425H480.864V416.418ZM488.685 425.21C487.444 425.21 486.468 424.902 485.759 424.286C485.059 423.661 484.709 422.783 484.709 421.654C484.709 420.553 485.022 419.68 485.647 419.036C486.282 418.392 487.182 418.07 488.349 418.07C489.124 418.07 489.782 418.219 490.323 418.518C490.864 418.807 491.27 419.213 491.541 419.736C491.821 420.249 491.961 420.837 491.961 421.5V422.2H486.053C486.1 422.835 486.366 423.311 486.851 423.628C487.346 423.936 488.013 424.09 488.853 424.09C489.282 424.09 489.716 424.053 490.155 423.978C490.594 423.894 490.981 423.787 491.317 423.656V424.79C491.018 424.911 490.622 425.009 490.127 425.084C489.642 425.168 489.161 425.21 488.685 425.21ZM490.631 421.206C490.612 420.571 490.402 420.081 490.001 419.736C489.609 419.381 489.049 419.204 488.321 419.204C487.612 419.204 487.061 419.386 486.669 419.75C486.277 420.114 486.072 420.599 486.053 421.206H490.631ZM493.507 418.28H494.879V419.484C495.159 419.073 495.551 418.77 496.055 418.574C496.568 418.378 497.161 418.28 497.833 418.28V419.386C497.114 419.386 496.498 419.503 495.985 419.736C495.471 419.969 495.117 420.338 494.921 420.842V425H493.507V418.28ZM501.688 425.21C501.007 425.21 500.48 425.014 500.106 424.622C499.742 424.23 499.56 423.675 499.56 422.956V419.372H498.538V418.28H499.56V416.264H500.988V418.28H502.64V419.372H500.988V422.858C500.988 423.306 501.072 423.623 501.24 423.81C501.418 423.997 501.735 424.09 502.192 424.09C502.463 424.09 502.734 424.029 503.004 423.908V425.028C502.65 425.149 502.211 425.21 501.688 425.21ZM505.161 416.964C504.927 416.964 504.731 416.885 504.573 416.726C504.414 416.567 504.335 416.371 504.335 416.138C504.335 415.905 504.414 415.709 504.573 415.55C504.731 415.391 504.927 415.312 505.161 415.312C505.403 415.312 505.604 415.391 505.763 415.55C505.931 415.709 506.015 415.905 506.015 416.138C506.015 416.371 505.931 416.567 505.763 416.726C505.604 416.885 505.403 416.964 505.161 416.964ZM504.447 418.28H505.889V425H504.447V418.28ZM510.243 425.21C509.431 425.21 508.777 425.005 508.283 424.594C507.797 424.174 507.555 423.609 507.555 422.9C507.555 422.153 507.788 421.579 508.255 421.178C508.731 420.767 509.403 420.562 510.271 420.562C511.195 420.562 511.979 420.749 512.623 421.122V420.772C512.623 420.24 512.459 419.848 512.133 419.596C511.815 419.335 511.311 419.204 510.621 419.204C510.21 419.204 509.809 419.246 509.417 419.33C509.034 419.405 508.689 419.512 508.381 419.652V418.504C508.661 418.373 509.025 418.271 509.473 418.196C509.921 418.112 510.355 418.07 510.775 418.07C511.885 418.07 512.707 418.317 513.239 418.812C513.78 419.297 514.051 419.974 514.051 420.842V425H512.721V424.244C512.431 424.561 512.086 424.804 511.685 424.972C511.293 425.131 510.812 425.21 510.243 425.21ZM510.593 424.132C511.041 424.132 511.447 424.043 511.811 423.866C512.175 423.689 512.445 423.441 512.623 423.124V422.214C512.016 421.822 511.339 421.626 510.593 421.626C510.051 421.626 509.645 421.733 509.375 421.948C509.113 422.153 508.983 422.471 508.983 422.9C508.983 423.721 509.519 424.132 510.593 424.132ZM515.806 418.28H517.178V419.484C517.458 419.073 517.85 418.77 518.354 418.574C518.867 418.378 519.46 418.28 520.132 418.28V419.386C519.413 419.386 518.797 419.503 518.284 419.736C517.77 419.969 517.416 420.338 517.22 420.842V425H515.806V418.28ZM522.62 427.772C522.116 427.772 521.696 427.721 521.36 427.618V426.512C521.603 426.605 521.902 426.652 522.256 426.652C522.583 426.652 522.84 426.568 523.026 426.4C523.213 426.241 523.381 425.98 523.53 425.616L523.852 424.832L520.912 418.28H522.368L524.608 423.446L526.694 418.28H528.15L525.126 425.756C524.846 426.456 524.51 426.965 524.118 427.282C523.736 427.609 523.236 427.772 522.62 427.772ZM534.591 415.214H539.085C539.953 415.214 540.625 415.438 541.101 415.886C541.577 416.334 541.815 416.987 541.815 417.846C541.815 418.331 541.698 418.761 541.465 419.134C541.241 419.498 540.942 419.769 540.569 419.946C541.614 420.254 542.137 421.015 542.137 422.228C542.137 422.797 542.011 423.292 541.759 423.712C541.516 424.123 541.18 424.44 540.751 424.664C540.321 424.888 539.845 425 539.323 425H534.591V415.214ZM538.903 419.414C539.36 419.414 539.719 419.288 539.981 419.036C540.242 418.784 540.373 418.411 540.373 417.916C540.373 417.347 540.242 416.95 539.981 416.726C539.729 416.493 539.337 416.376 538.805 416.376H536.019V419.414H538.903ZM539.001 423.838C539.551 423.838 539.971 423.717 540.261 423.474C540.55 423.231 540.695 422.816 540.695 422.228C540.695 421.64 540.541 421.22 540.233 420.968C539.934 420.716 539.481 420.59 538.875 420.59H536.019V423.838H539.001ZM546.356 425.21C545.451 425.21 544.765 424.967 544.298 424.482C543.841 423.997 543.612 423.348 543.612 422.536V418.28H545.026V422.48C545.026 423.553 545.563 424.09 546.636 424.09C547.579 424.09 548.316 423.665 548.848 422.816V418.28H550.262V425H548.89V424.048C548.573 424.449 548.195 424.743 547.756 424.93C547.327 425.117 546.86 425.21 546.356 425.21ZM554.667 425.21C553.986 425.21 553.458 425.014 553.085 424.622C552.721 424.23 552.539 423.675 552.539 422.956V419.372H551.517V418.28H552.539V416.264H553.967V418.28H555.619V419.372H553.967V422.858C553.967 423.306 554.051 423.623 554.219 423.81C554.396 423.997 554.714 424.09 555.171 424.09C555.442 424.09 555.712 424.029 555.983 423.908V425.028C555.628 425.149 555.19 425.21 554.667 425.21ZM559.548 425.21C558.867 425.21 558.339 425.014 557.966 424.622C557.602 424.23 557.42 423.675 557.42 422.956V419.372H556.398V418.28H557.42V416.264H558.848V418.28H560.5V419.372H558.848V422.858C558.848 423.306 558.932 423.623 559.1 423.81C559.277 423.997 559.595 424.09 560.052 424.09C560.323 424.09 560.593 424.029 560.864 423.908V425.028C560.509 425.149 560.071 425.21 559.548 425.21ZM565.668 425.21C564.912 425.21 564.244 425.07 563.666 424.79C563.096 424.501 562.648 424.09 562.322 423.558C562.004 423.017 561.846 422.382 561.846 421.654C561.846 420.935 562.004 420.305 562.322 419.764C562.639 419.223 563.087 418.807 563.666 418.518C564.244 418.219 564.912 418.07 565.668 418.07C566.424 418.07 567.091 418.219 567.67 418.518C568.248 418.807 568.696 419.223 569.014 419.764C569.34 420.305 569.504 420.935 569.504 421.654C569.504 422.382 569.34 423.017 569.014 423.558C568.696 424.09 568.248 424.501 567.67 424.79C567.091 425.07 566.424 425.21 565.668 425.21ZM565.668 424.09C566.396 424.09 566.974 423.866 567.404 423.418C567.833 422.97 568.048 422.382 568.048 421.654C568.048 420.898 567.833 420.301 567.404 419.862C566.974 419.423 566.396 419.204 565.668 419.204C564.94 419.204 564.361 419.423 563.932 419.862C563.502 420.301 563.288 420.898 563.288 421.654C563.288 422.382 563.502 422.97 563.932 423.418C564.361 423.866 564.94 424.09 565.668 424.09ZM571.04 418.28H572.412V419.246C572.729 418.845 573.117 418.551 573.574 418.364C574.041 418.168 574.526 418.07 575.03 418.07C575.926 418.07 576.593 418.308 577.032 418.784C577.471 419.26 577.69 419.899 577.69 420.702V425H576.276V420.842C576.276 419.75 575.753 419.204 574.708 419.204C574.26 419.204 573.84 419.311 573.448 419.526C573.065 419.731 572.734 420.049 572.454 420.478V425H571.04V418.28Z",fill:(null===(n=l.colours.tertiaryButton)||void 0===n?void 0:n["Text Colour"])||"#9DF096"}),Object(u.jsx)("circle",{cx:"573.463",cy:"320.463",r:"65",transform:"rotate(115.151 573.463 320.463)",fill:(null===(s=l.colours.clipArt)||void 0===s?void 0:s["Primary Colour"])||"#9DF096"}),Object(u.jsx)("circle",{cx:"195.524",cy:"288.524",r:"45.5",transform:"rotate(115.151 195.524 288.524)",fill:(null===(a=l.colours.clipArt)||void 0===a?void 0:a["Secondary Colour"])||"#3EB489"}),Object(u.jsx)("path",{d:"M174.469 295.672H181.813V317.272H208.093V295.672H215.437V346H208.093V323.464H181.813V346H174.469V295.672ZM243.821 347.08C237.437 347.08 232.421 345.496 228.773 342.328C225.173 339.112 223.373 334.6 223.373 328.792C223.373 323.128 224.981 318.64 228.197 315.328C231.461 312.016 236.093 310.36 242.093 310.36C246.077 310.36 249.461 311.128 252.245 312.664C255.029 314.152 257.117 316.24 258.509 318.928C259.949 321.568 260.669 324.592 260.669 328V331.6H230.285C230.525 334.864 231.893 337.312 234.389 338.944C236.933 340.528 240.365 341.32 244.685 341.32C246.893 341.32 249.125 341.128 251.381 340.744C253.637 340.312 255.629 339.76 257.357 339.088V344.92C255.821 345.544 253.781 346.048 251.237 346.432C248.741 346.864 246.269 347.08 243.821 347.08ZM253.829 326.488C253.733 323.224 252.653 320.704 250.589 318.928C248.573 317.104 245.693 316.192 241.949 316.192C238.301 316.192 235.469 317.128 233.453 319C231.437 320.872 230.381 323.368 230.285 326.488H253.829ZM268.618 292.792H275.89V346H268.618V292.792ZM285.282 292.792H292.554V346H285.282V292.792ZM320.162 347.08C316.274 347.08 312.842 346.36 309.866 344.92C306.938 343.432 304.634 341.32 302.954 338.584C301.322 335.8 300.506 332.536 300.506 328.792C300.506 325.096 301.322 321.856 302.954 319.072C304.586 316.288 306.89 314.152 309.866 312.664C312.842 311.128 316.274 310.36 320.162 310.36C324.05 310.36 327.482 311.128 330.458 312.664C333.434 314.152 335.738 316.288 337.37 319.072C339.05 321.856 339.89 325.096 339.89 328.792C339.89 332.536 339.05 335.8 337.37 338.584C335.738 341.32 333.434 343.432 330.458 344.92C327.482 346.36 324.05 347.08 320.162 347.08ZM320.162 341.32C323.906 341.32 326.882 340.168 329.09 337.864C331.298 335.56 332.402 332.536 332.402 328.792C332.402 324.904 331.298 321.832 329.09 319.576C326.882 317.32 323.906 316.192 320.162 316.192C316.418 316.192 313.442 317.32 311.234 319.576C309.026 321.832 307.922 324.904 307.922 328.792C307.922 332.536 309.026 335.56 311.234 337.864C313.442 340.168 316.418 341.32 320.162 341.32ZM372.998 295.672H380.63L391.862 333.904L402.95 295.672H408.71L419.726 333.904L430.958 295.672H438.59L423.902 346H416.918L405.758 307.984L394.67 346H387.686L372.998 295.672ZM459.31 347.08C455.422 347.08 451.99 346.36 449.014 344.92C446.086 343.432 443.782 341.32 442.102 338.584C440.47 335.8 439.654 332.536 439.654 328.792C439.654 325.096 440.47 321.856 442.102 319.072C443.734 316.288 446.038 314.152 449.014 312.664C451.99 311.128 455.422 310.36 459.31 310.36C463.198 310.36 466.63 311.128 469.606 312.664C472.582 314.152 474.886 316.288 476.518 319.072C478.198 321.856 479.038 325.096 479.038 328.792C479.038 332.536 478.198 335.8 476.518 338.584C474.886 341.32 472.582 343.432 469.606 344.92C466.63 346.36 463.198 347.08 459.31 347.08ZM459.31 341.32C463.054 341.32 466.03 340.168 468.238 337.864C470.446 335.56 471.55 332.536 471.55 328.792C471.55 324.904 470.446 321.832 468.238 319.576C466.03 317.32 463.054 316.192 459.31 316.192C455.566 316.192 452.59 317.32 450.382 319.576C448.174 321.832 447.07 324.904 447.07 328.792C447.07 332.536 448.174 335.56 450.382 337.864C452.59 340.168 455.566 341.32 459.31 341.32ZM486.938 311.44H493.994V317.632C495.434 315.52 497.45 313.96 500.042 312.952C502.682 311.944 505.73 311.44 509.186 311.44V317.128C505.49 317.128 502.322 317.728 499.682 318.928C497.042 320.128 495.218 322.024 494.21 324.616V346H486.938V311.44ZM515.696 292.792H522.968V346H515.696V292.792ZM549.064 347.08C545.608 347.08 542.488 346.336 539.704 344.848C536.968 343.312 534.808 341.176 533.224 338.44C531.688 335.656 530.92 332.44 530.92 328.792C530.92 325.192 531.688 322 533.224 319.216C534.808 316.432 536.968 314.272 539.704 312.736C542.488 311.152 545.608 310.36 549.064 310.36C555.304 310.36 560.032 312.256 563.248 316.048V292.792H570.52V346H563.464V340.96C561.544 343.072 559.432 344.632 557.128 345.64C554.872 346.6 552.184 347.08 549.064 347.08ZM550.72 341.32C553.696 341.32 556.288 340.552 558.496 339.016C560.752 337.432 562.336 335.32 563.248 332.68V324.904C562.432 322.264 560.872 320.152 558.568 318.568C556.312 316.984 553.696 316.192 550.72 316.192C548.368 316.192 546.232 316.72 544.312 317.776C542.44 318.832 540.952 320.32 539.848 322.24C538.792 324.16 538.264 326.344 538.264 328.792C538.264 331.24 538.792 333.424 539.848 335.344C540.952 337.264 542.44 338.752 544.312 339.808C546.232 340.816 548.368 341.32 550.72 341.32Z",fill:l.colours.text}),Object(u.jsx)("defs",{children:Object(u.jsxs)("filter",{id:"filter0_d",x:"44",y:"15",width:"670",height:"670",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object(u.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(u.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(u.jsx)("feOffset",{dy:"4"}),Object(u.jsx)("feGaussianBlur",{stdDeviation:"17.5"}),Object(u.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(u.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),Object(u.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(u.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})})]})})}),h=function(){var C=Object(c.useState)({colours:{background:"#fff",text:"#000"}}),e=Object(s.a)(C,2),t=e[0],o=e[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{onChange:function(C){o(C)}}),Object(u.jsx)(H,{colours:null===t||void 0===t?void 0:t.colours})]})},O=function(C){C&&C instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,n=e.getTTFB;t(C),c(C),o(C),r(C),n(C)}))};n.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}],[[20,1,2]]]);
//# sourceMappingURL=main.8faae5bb.chunk.js.map