(this["webpackJsonpstit-frontend-challenge"]=this["webpackJsonpstit-frontend-challenge"]||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/star.967d62c7.svg"},32:function(e,a,t){e.exports=t.p+"static/media/unfilled.77ac57be.svg"},33:function(e,a,t){e.exports=t.p+"static/media/halfstar.74f8e421.svg"},34:function(e,a,t){e.exports=t.p+"static/media/marker.f00d58bd.png"},35:function(e,a,t){e.exports=t.p+"static/media/pin.a07280f4.png"},37:function(e,a,t){e.exports=t(80)},42:function(e,a,t){},43:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),i=t.n(r),o=(t(42),t(8)),s=t(1),c=(t(43),t(9)),u=function(e){var a={pathname:"/details",id:e.res.id};return l.a.createElement("div",{className:"restaurant-card-wrapper"},l.a.createElement(o.b,{to:a},l.a.createElement("div",{className:"restaurant-card"},l.a.createElement("div",{className:"restaurant-card-img"},l.a.createElement("img",{src:e.res.image_url,alt:e.res.name})),l.a.createElement("div",{className:"restaurant-card-text"},l.a.createElement("p",{className:"cuisine"},e.res.categories[0].title),l.a.createElement("h3",null,e.res.name),l.a.createElement("div",{className:"restaurant-details"},l.a.createElement("p",null,e.res.location.address1),l.a.createElement("p",null,e.res.price))))))},d=function(e){var a=e.restaurants;if(!a||0===a.length)return l.a.createElement("p",null,"No restaurants, sorry");var t={near:a[0].location.city,search:"Balthazar"};return l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"list-head"},{near:"Restaurants in",search:"Search results for"}[e.type]," ",l.a.createElement("span",{className:"location"},t[e.type])),l.a.createElement("div",{className:"restaurant-wrapper"},a.map((function(e){return l.a.createElement(u,{res:e,key:e.id})}))))},m=t(36),p=t(30),f=t.n(p);var g=function(){return l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"loading-symbol"}))};var E=function(e,a,t){return function(r){r.isLoading;var i=Object(m.a)(r,["isLoading"]),o=Object(n.useState)({loading:!0,data:null}),s=Object(c.a)(o,2),u=s[0],d=s[1];return Object(n.useEffect)((function(){d({loading:!0}),a.limit=18,console.log(a);var e=t?"https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/",t):"https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search");f.a.get(e,{headers:{Authorization:"Bearer ".concat("ADRBX-UxZiZKehLa6yxp4gpCLqr3O39muhcVRQQ8IKX-fJc0PixZNS6FIOIt6FD4CeMNhxbhyBiPppaxooa4qcScqm2CZrG-FB_eX2m1ikFQ8astC1fbhKdAmkk0X3Yx")},params:a}).then((function(e){var a=e.data.businesses||e.data;d({loading:!1,data:a})}))}),[d]),u.loading?l.a.createElement(g,null):l.a.createElement(e,Object.assign({},i,{data:u.data}))}};var y=function(e){return l.a.createElement("nav",{className:"white"===e.color?"map-nav":""},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Restaurants Near You")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/details"},"Restaurant Details")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/search"},"Search Restaurants")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/map"},"Map View"))))};function h(e){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:"header-wrapper"},l.a.createElement("div",{className:"header"}),l.a.createElement("div",{className:"header-content"},l.a.createElement("h1",null,"Find the Best Restaurants Near You"),l.a.createElement("input",{type:"text",placeholder:"Location"}))),l.a.createElement(d,{restaurants:e.data,type:"near"}))}var v=function(e){var a=Object(n.useState)({latitude:null,longitude:null,location:null,loading:!0}),t=Object(c.a)(a,2),r=t[0],i=t[1];if(Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){i({latitude:e.coords.latitude,longitude:e.coords.longitude,loading:!1})}),(function(e){i({location:"new york",loading:!1})}))}),[i]),!r.loading){var o=E(h,{latitude:r.latitude,longitude:r.longitude,location:"new york",categories:"restaurants"});return l.a.createElement(o,null)}return l.a.createElement(g,null)},b=t(31),N=t.n(b),w=t(32),T=t.n(w),k=t(33),O=t.n(k);function x(e){for(var a=[],t=Math.floor(e.data.rating),n=0;n<t;n++)a.push("filled");var r=0;e.data.rating%1!==0&&(a.push("half"),r=1);for(var i=5-t-r,o=0;o<i;o++)a.push("unfilled");return l.a.createElement("div",{className:"restaurant-details"},l.a.createElement(y,null),l.a.createElement("div",{className:"header-wrapper",style:{backgroundImage:"url("+e.data.image_url+")"}}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"details-wrapper"},l.a.createElement("div",{className:"details-left"},l.a.createElement("h1",null,e.data.name),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"star-container"},a.map((function(e,a){return l.a.createElement(j,{type:e,key:a})}))),l.a.createElement("p",null,e.data.review_count+" reviews")),e.lat?l.a.createElement("p",null,function(){var a=e.data.coordinates.latitude,t=e.data.coordinates.longitude,n=Math.abs(a-e.lat),l=Math.abs(t-e.long);return Math.round(6900*Math.sqrt(n*n+l*l))/100}()," mi away"):""),l.a.createElement("div",{className:"details-right"},l.a.createElement("div",{className:"address"},l.a.createElement("h3",null,"Address"),l.a.createElement("p",null,e.data.location.display_address[0]),l.a.createElement("p",null,e.data.location.display_address[1])),l.a.createElement("div",{className:"phone"},l.a.createElement("h3",null,"Phone"),l.a.createElement("p",null,e.data.display_phone))))))}function j(e){var a={filled:N.a,unfilled:T.a,half:O.a};return l.a.createElement("img",{src:a[e.type],alt:"restaurant"})}var S=function(e){var a=Object(n.useState)({latitude:null,longitude:null,loading:!0}),t=Object(c.a)(a,2),r=t[0],i=t[1],o=e.location.id||"KgpOYAG-r_eDsQXFXt0nnQ";if(Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){i({latitude:e.coords.latitude,longitude:e.coords.longitude,loading:!1})}),(function(e){i({location:"new york",loading:!1})}))}),[i]),!r.loading){var s=E(x,{},o);return l.a.createElement(s,{lat:r.latitude,long:r.longitude})}return l.a.createElement(g,null)},M=t(13),z=t(34),B=t.n(z),R=t(35),A=t.n(R);var C=Object(M.GoogleApiWrapper)({apiKey:"".concat("AIzaSyD4F2j4ah1DlhTTAS1hMoarHsz9cuMt7E0")})((function(e){var a={lat:e.latitude||40.729335,long:e.longitude||-73.997903},t=e.points.map((function(e,a){return l.a.createElement(M.Marker,{key:a,id:a,position:{lat:e.coordinates.latitude,lng:e.coordinates.longitude},icon:{url:A.a,scaledSize:new google.maps.Size(24,33)}})})),n=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#efefef"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffbd83"},{saturation:"-16"},{lightness:"48"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{visibility:"on"},{lightness:"31"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#8ad1c5"},{saturation:"-33"},{lightness:"55"}]}];return l.a.createElement(M.Map,{google:e.google,zoom:12,style:{width:"100%",height:"100%"},initialCenter:{lat:a.lat,lng:a.long},onReady:function(e,a){return function(e,a){a.setOptions({styles:n})}(0,a)}},l.a.createElement(M.Marker,{key:1234,name:"Your location",position:{lat:a.lat,lng:a.long},icon:{url:B.a,scaledSize:new google.maps.Size(24,24)}}),t)}));function F(e){return l.a.createElement("div",{className:"restaurants-map"},l.a.createElement(y,{color:"white"}),l.a.createElement("div",{className:"restaurants-map-wrapper"},l.a.createElement("div",{className:"list-wrapper"},l.a.createElement(d,{restaurants:e.data,type:"near"})),l.a.createElement("div",{className:"map-wrapper"},l.a.createElement(C,{latitude:e.latitude,longitude:e.longitude,points:e.data}))))}var _=function(e){var a=Object(n.useState)({latitude:null,longitude:null,location:null,loading:!0}),t=Object(c.a)(a,2),r=t[0],i=t[1];if(Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){i({latitude:e.coords.latitude,longitude:e.coords.longitude,loading:!1})}),(function(e){i({location:"new york",loading:!1})}))}),[i]),!r.loading){var o=E(F,{latitude:r.latitude,longitude:r.longitude,location:"new york",categories:"restaurants"});return l.a.createElement(o,{latitude:r.latitude,longitude:r.longitude})}return l.a.createElement(g,null)};function D(e){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:"header-wrapper"},l.a.createElement("div",{className:"header"}),l.a.createElement("div",{className:"header-content"},l.a.createElement("h1",null,"Find the Best Restaurants Near You"),l.a.createElement("input",{type:"text",placeholder:"Search"}))),l.a.createElement(d,{restaurants:e.data,type:"search"}))}var I=function(e){var a=E(D,{location:"new york",term:"Balthazar"});return l.a.createElement(a,null)};var P=function(){return l.a.createElement(o.a,{basename:"/stit-frontend-challenge"},l.a.createElement("div",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/details",component:S}),l.a.createElement(s.a,{path:"/map",component:_}),l.a.createElement(s.a,{path:"/search",component:I}),l.a.createElement(s.a,{path:"/",component:v,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.de672996.chunk.js.map