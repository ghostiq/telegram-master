module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["models/User"]},function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat["components/LogInButtons"]},function(e,t){e.exports=flarum.core.compat["components/LogInButton"]},function(e,t){e.exports=flarum.core.compat["components/NotificationGrid"]},function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},,,function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(2),i=r.n(a),u=r(3),l=r.n(u),c=r(1),f=r(4),s=r.n(f),p=r(5),g=r.n(p),d=r(6),b=r.n(d),y=r(7),x=r.n(y);n.a.initializers.add("flarum-telegram",function(){i.a.prototype.canReceiveTelegramNotifications=l.a.attribute("canReceiveTelegramNotifications"),i.a.prototype.flagrowTelegramError=l.a.attribute("flagrowTelegramError"),Object(c.extend)(s.a.prototype,"items",function(e){e.add("flarum-telegram",g.a.component({className:"Button LogInButton--telegram",icon:"telegram",path:"/auth/telegram",children:n.a.translator.trans("flarum-telegram.forum.log_in_with_telegram_button")}))}),Object(c.extend)(b.a.prototype,"notificationTypes",function(){if(n.a.forum.attribute("flarum-telegram.enableNotifications")){var e=n.a.session.user;e&&e.canReceiveTelegramNotifications()&&this.methods.push({name:"telegram",icon:"telegram",label:n.a.translator.trans("flarum-telegram.forum.settings.notify_by_telegram_heading")})}}),Object(c.extend)(x.a.prototype,"notificationsItems",function(e){if(n.a.forum.attribute("flarum-telegram.enableNotifications")){var t=n.a.session.user;if(t&&t.flagrowTelegramError()){var r=n.a.forum.attribute("flarum-telegram.botUsername");e.add("flagrowTelegramError",{view:function(){return m(".Alert",m("p",n.a.translator.trans("flarum-telegram.forum.settings.unblock_telegram_bot",{a:m("a",{href:"https://t.me/"+r}),username:"@"+r})))}})}}})})}]);
//# sourceMappingURL=forum.js.map