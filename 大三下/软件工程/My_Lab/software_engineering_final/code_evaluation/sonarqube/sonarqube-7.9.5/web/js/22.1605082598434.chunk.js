(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1578:function(t,e,n){"use strict";n.r(e),n.d(e,"PageTracker",function(){return h});var r,o=n(695),a=n(705),c=n(711),i=n.n(c),u=n(735),s=n(1579),l=n(769),p=n(83),f=n(110),b=n(708),d=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={},e.trackPage=function(){var t=e.props,n=t.location,r=t.trackingIdGTM,o=e.state.lastLocation,a=window.dataLayer,c=n.pathname!==o,i=Object(p.b)();i&&c?(e.setState({lastLocation:n.pathname}),setTimeout(function(){return i(n.pathname)},500)):a&&a.push&&r&&"/"!==n.pathname&&(e.setState({lastLocation:n.pathname}),setTimeout(function(){return a.push({event:"render-end"})},500))},e}return d(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.trackingIdGTM,n=t.webAnalytics;n&&!Object(p.b)()&&Object(l.b)(n,"head"),e&&Object(s.gtm)(e)},e.prototype.render=function(){var t=this.props,e=t.trackingIdGTM,n=t.webAnalytics;return o.createElement(i.a,{defaultTitle:Object(f.getInstance)(),onChangeClientState:e||n?this.trackPage:void 0},this.props.children)},e}(o.Component);e.default=Object(u.a)(Object(a.connect)(function(t){var e=Object(b.getGlobalSettingValue)(t,"sonar.analytics.gtm.trackingId");return{trackingIdGTM:e&&e.value,webAnalytics:Object(b.getAppState)(t).webAnalyticsJsPath}})(h))},1579:function(t,e,n){"use strict";t.exports={gtm:function(t){return function(t,e,n,r,o){t[r]=t[r]||[],t[r].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var a=e.getElementsByTagName(n)[0],c=e.createElement(n);c.async=!0,c.src="https://www.googletagmanager.com/gtm.js?id="+o,a.parentNode.insertBefore(c,a)}(window,document,"script","dataLayer",t)}}},769:function(t,e,n){"use strict";n.d(e,"b",function(){return u}),n.d(e,"a",function(){return s});var r=n(702),o=n(83),a=function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function c(t){try{u(r.next(t))}catch(t){a(t)}}function i(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(c,i)}u((r=r.apply(t,e||[])).next())})},c=function(t,e){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},i=!1;function u(t,e){return void 0===e&&(e="body"),new Promise(function(n){var o=document.createElement("script");o.src=""+Object(r.b)()+t,o.onload=n,document.getElementsByTagName(e)[0].appendChild(o)})}function s(t){return a(this,void 0,void 0,function(){var e,r;return c(this,function(a){switch(a.label){case 0:return(e=Object(o.a)(t))?[2,Promise.resolve(e)]:i?[3,2]:[4,Promise.all([n.e(0),n.e(1),n.e(3),n.e(15),n.e(286)]).then(n.bind(null,913))];case 1:(0,a.sent().default)(),i=!0,a.label=2;case 2:return[4,u("/static/"+t+".js")];case 3:return a.sent(),(r=Object(o.a)(t))?[2,r]:[2,Promise.reject()]}})})}}}]);
//# sourceMappingURL=22.1605082598434.chunk.js.map