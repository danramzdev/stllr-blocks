!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(1)},function(e,t,r){"use strict";var n=r(2),o=r(3),a=r(4),l=r(5),c=(r.n(l),r(6)),i=(r.n(c),wp.blocks.registerBlockType),s=wp.element.Fragment;i("stllr-blocks/movie-card",{title:"Movie Card",icon:"video-alt2",category:"stllr-blocks",attributes:{title:{source:"text",selector:".title"},year:{source:"text",selector:".year"},category:{source:"text",selector:".category"},director:{source:"text",selector:".director span"},actors:{source:"text",selector:".actors span"},description:{type:"array",source:"children",selector:".description"},imageAlt:{source:"attribute",attribute:"alt",selector:"img"},imageUrl:{source:"attribute",attribute:"src",selector:"img"},borderColor:{type:"string",default:"black"},backgroundColor:{type:"string",default:"transparent"},textColor:{type:"string",default:"black"}},edit:function(e){var t=e.attributes,r=e.className,n=e.setAttributes;e.focus;return wp.element.createElement(s,null,wp.element.createElement(o.a,{attributes:t,setAttributes:n}),wp.element.createElement(a.a,{attributes:t,setAttributes:n,className:r}))},save:function(e){var t=e.attributes;return wp.element.createElement(n.a,{attributes:t})}})},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=wp.element.Component,i=function(e){function t(){var e,r,a,l;n(this,t);for(var c=arguments.length,i=Array(c),s=0;s<c;s++)i[s]=arguments[s];return r=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.cardImage=function(e,t){var r=a.props.attributes.borderColor;return e?t?wp.element.createElement("figure",{className:"image",style:{border:"6px solid "+r}},wp.element.createElement("img",{src:e,alt:t})):wp.element.createElement("figure",{className:"image",style:{border:"6px solid "+r}},wp.element.createElement("img",{className:"card__image",src:e,alt:"","aria-hidden":"true"})):null},l=r,o(a,l)}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props.attributes,t=e.title,r=e.year,n=e.category,o=e.director,a=e.actors,l=e.description,c=e.imageUrl,i=e.imageAlt,s=e.backgroundColor,u=e.textColor;return wp.element.createElement("div",{className:"card",style:{backgroundColor:s}},wp.element.createElement("div",{className:"card__image-stars"},this.cardImage(c,i),wp.element.createElement("div",{class:"stars"},wp.element.createElement("i",{class:"dashicons dashicons-star-filled"}),wp.element.createElement("i",{class:"dashicons dashicons-star-filled"}),wp.element.createElement("i",{class:"dashicons dashicons-star-filled"}),wp.element.createElement("i",{class:"dashicons dashicons-star-half"}),wp.element.createElement("i",{class:"dashicons dashicons-star-empty"}))),wp.element.createElement("div",{className:"card__content",style:{color:u}},wp.element.createElement("div",{className:"title-year"},wp.element.createElement("h3",{className:"title"},t),wp.element.createElement("p",{className:"year"},r)),wp.element.createElement("div",{className:"category-director-actors"},wp.element.createElement("p",{className:"category"},n),wp.element.createElement("p",{className:"director"},wp.element.createElement("strong",null,"Director:")," ",wp.element.createElement("span",null,o)),wp.element.createElement("p",{className:"actors"},wp.element.createElement("strong",null,"Reparto:")," ",wp.element.createElement("span",null,a))),wp.element.createElement("div",{className:"description"},l),wp.element.createElement("a",{href:"https://www.imdb.com/title/tt5463162/",style:{backgroundColor:u,color:s}},"Comprar")))}}]),t}(c);t.a=i},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=wp.element.Component,i=wp.editor,s=i.InspectorControls,u=i.ColorPalette,p=wp.components.PanelBody,m=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=t.backgroundColor,n=t.borderColor,o=t.textColor,a=e.setAttributes;return wp.element.createElement(s,null,wp.element.createElement(p,{title:"Colors",initialOpen:!0},wp.element.createElement("p",null,"Select Background Color"),wp.element.createElement(u,{value:r,onChange:function(e){return a(e?{backgroundColor:e}:{backgroundColor:"transparent"})}}),wp.element.createElement("hr",null),wp.element.createElement("p",null,"Select Border Color"),wp.element.createElement(u,{value:n,onChange:function(e){return a(e?{borderColor:e}:{borderColor:"transparent"})}}),wp.element.createElement("hr",null),wp.element.createElement("p",null,"Select Text Color"),wp.element.createElement(u,{value:o,onChange:function(e){return a(e?{textColor:e}:{textColor:"black"})}})))}}]),t}(c);t.a=m},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=wp.element.Component,i=wp.editor,s=i.RichText,u=i.MediaUpload,p=i.PlainText,m=wp.components.Button,f=function(e){function t(){var e,r,a,l;n(this,t);for(var c=arguments.length,i=Array(c),s=0;s<c;s++)i[s]=arguments[s];return r=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.getImageButton=function(e){var t=a.props.attributes.imageUrl;return t?wp.element.createElement("img",{src:t,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(m,{onClick:e,className:"button button-large"},"Pick an image"))},l=r,o(a,l)}return a(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.attributes,n=t.setAttributes,o=(t.className,r.title),a=r.year,l=r.category,c=r.director,i=r.actors,m=r.description;return wp.element.createElement("div",{className:"container"},wp.element.createElement(u,{onSelect:function(e){n({imageAlt:e.alt,imageUrl:e.url})},type:"image",value:r.imageID,render:function(t){var r=t.open;return e.getImageButton(r)}}),wp.element.createElement(p,{onChange:function(e){return n({title:e})},value:o,placeholder:"Movie title",className:"heading"}),wp.element.createElement(p,{onChange:function(e){return n({year:e})},value:a,placeholder:"Movie Year",className:"heading"}),wp.element.createElement(p,{onChange:function(e){return n({category:e})},value:l,placeholder:"Movie Category",className:"heading"}),wp.element.createElement(p,{onChange:function(e){return n({director:e})},value:c,placeholder:"Movie Director",className:"heading"}),wp.element.createElement(p,{onChange:function(e){return n({actors:e})},value:i,placeholder:"Movie Actors",className:"heading"}),wp.element.createElement(s,{onChange:function(e){return n({description:e})},value:m,multiline:"p",placeholder:"Movie Description",formattingControls:["bold","italic","underline"],isSelected:r.isSelected}))}}]),t}(c);t.a=f},function(e,t){},function(e,t){}]);