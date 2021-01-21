!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e){a(1,arguments);var t=r(e);return!isNaN(t)}n.r(t);var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var d={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;a=e.values[d]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function l(e){return function(t,n){var a=String(t),r=n||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=a.match(i);if(!u)return null;var d,c=u[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(s)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(s,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(s,(function(e){return e.test(c)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:a.slice(c.length)}}}var m,h={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof i[e]?i[e]:1===t?i[e].one:i[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:d,formatRelative:function(e,t,n,a){return c[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(m.matchPattern);if(!r)return null;var o=r[0],i=n.match(m.parsePattern);if(!i)return null;var u=m.valueCallback?m.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:n.slice(o.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(e,t){a(2,arguments);var n=r(e).getTime(),o=f(t);return new Date(n+o)}function p(e,t){a(2,arguments);var n=f(t);return g(e,-n)}function w(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var v={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return w("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):w(n+1,2)},d:function(e,t){return w(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return w(e.getUTCHours()%12||12,t.length)},H:function(e,t){return w(e.getUTCHours(),t.length)},m:function(e,t){return w(e.getUTCMinutes(),t.length)},s:function(e,t){return w(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return w(Math.floor(a*Math.pow(10,n-3)),t.length)}};function y(e){a(1,arguments);var t=1,n=r(e),o=n.getUTCDay(),i=(o<t?7:0)+o-t;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function b(e){a(1,arguments);var t=r(e),n=t.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(n+1,0,4),o.setUTCHours(0,0,0,0);var i=y(o),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var d=y(u);return t.getTime()>=i.getTime()?n+1:t.getTime()>=d.getTime()?n:n-1}function T(e){a(1,arguments);var t=b(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=y(n);return r}function C(e,t){a(1,arguments);var n=t||{},o=n.locale,i=o&&o.options&&o.options.weekStartsOn,u=null==i?0:f(i),d=null==n.weekStartsOn?u:f(n.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=r(e),s=c.getUTCDay(),l=(s<d?7:0)+s-d;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function E(e,t){a(1,arguments);var n=r(e,t),o=n.getUTCFullYear(),i=t||{},u=i.locale,d=u&&u.options&&u.options.firstWeekContainsDate,c=null==d?1:f(d),s=null==i.firstWeekContainsDate?c:f(i.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(o+1,0,s),l.setUTCHours(0,0,0,0);var m=C(l,t),h=new Date(0);h.setUTCFullYear(o,0,s),h.setUTCHours(0,0,0,0);var g=C(h,t);return n.getTime()>=m.getTime()?o+1:n.getTime()>=g.getTime()?o:o-1}function M(e,t){a(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.firstWeekContainsDate,i=null==o?1:f(o),u=null==n.firstWeekContainsDate?i:f(n.firstWeekContainsDate),d=E(e,t),c=new Date(0);c.setUTCFullYear(d,0,u),c.setUTCHours(0,0,0,0);var s=C(c,t);return s}var x="midnight",N="noon",P="morning",k="afternoon",D="evening",S="night";function U(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=t||"";return n+String(r)+i+w(o,2)}function W(e,t){return e%60==0?(e>0?"-":"+")+w(Math.abs(e)/60,2):O(e,t)}function O(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+w(Math.floor(r/60),2)+n+w(r%60,2)}var j={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return v.y(e,t)},Y:function(e,t,n,a){var r=E(e,a),o=r>0?r:1-r;return"YY"===t?w(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):w(o,t.length)},R:function(e,t){return w(b(e),t.length)},u:function(e,t){return w(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return w(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return w(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return v.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return w(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,o){var i=function(e,t){a(1,arguments);var n=r(e),o=C(n,t).getTime()-M(n,t).getTime();return Math.round(o/6048e5)+1}(e,o);return"wo"===t?n.ordinalNumber(i,{unit:"week"}):w(i,t.length)},I:function(e,t,n){var o=function(e){a(1,arguments);var t=r(e),n=y(t).getTime()-T(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(o,{unit:"week"}):w(o,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):v.d(e,t)},D:function(e,t,n){var o=function(e){a(1,arguments);var t=r(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var o=t.getTime(),i=n-o;return Math.floor(i/864e5)+1}(e);return"Do"===t?n.ordinalNumber(o,{unit:"dayOfYear"}):w(o,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return w(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return w(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return w(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?N:0===r?x:r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?D:r>=12?k:r>=4?P:S,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return v.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):v.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):w(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):w(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):v.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):v.s(e,t)},S:function(e,t){return v.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return W(r);case"XXXX":case"XX":return O(r);case"XXXXX":case"XXX":default:return O(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return W(r);case"xxxx":case"xx":return O(r);case"xxxxx":case"xxx":default:return O(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+U(r,":");case"OOOO":default:return"GMT"+O(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+U(r,":");case"zzzz":default:return"GMT"+O(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return w(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return w((a._originalDate||e).getTime(),t.length)}};function Y(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function B(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var q={p:B,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return Y(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",Y(r,t)).replace("{{time}}",B(o,t))}};function I(e){return e.getTime()%6e4}function L(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+I(t))%6e4:I(t))}var H=["D","DD"],z=["YY","YYYY"];function X(e){return-1!==H.indexOf(e)}function F(e){return-1!==z.indexOf(e)}function Q(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,G=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R=/^'([^]*?)'?$/,_=/''/g,J=/[a-zA-Z]/;function $(e){return e.match(R)[1].replace(_,"'")}let V=[],K=(e,t)=>{let n=document.getElementById("flash");n.style.display="block",n.textContent=t,"error"===e?n.style.backgroundColor="rgb(128, 0, 0)":"success"===e&&(n.style.backgroundColor="rgb(0, 156, 34)"),setTimeout((function(){n.style.display="none"}),4e3)},Z=()=>{if(0!==V.length){document.getElementById("e-title").style.display="none",document.querySelectorAll(".proj-div").forEach(e=>e.remove());let e=document.getElementById("todo-grid");V.forEach(t=>{let n=document.createElement("div");n.className="proj-div",e.appendChild(n);let a=document.createElement("div");a.className="grid3-div",n.appendChild(a);let r=document.createElement("div");a.appendChild(r);let o=document.createElement("h2"),i=document.createTextNode(t.getName());o.className="proj-name",o.appendChild(i),a.appendChild(o);let u=document.createElement("button"),d=document.createTextNode("Delete");u.className="delete-proj-btn",u.appendChild(d),a.appendChild(u),u.onclick=function(){if(!0===confirm("Are you sure you want to delete this project?")){let e=[];V.find(n=>{n===t||e.push(n)}),V=[],e.forEach(e=>{V.push(e)}),K("success",`Project ${t.getName()} was deleted`),Z()}};let c=document.createElement("div");if(c.className="todo-div",n.appendChild(c),t.getTodo().length>0){let e=document.createElement("div");e.className="todo-row-info",c.appendChild(e);let n=document.createElement("h3"),a=document.createTextNode("Title");n.className="td-title-info",n.appendChild(a),e.appendChild(n);let r=document.createElement("h3"),o=document.createTextNode("Date");r.className="td-date-info",r.appendChild(o),e.appendChild(r);let i=document.createElement("h3"),u=document.createTextNode("Priority");i.className="td-priority-info",i.appendChild(u),e.appendChild(i);let d=document.createElement("h3"),s=document.createTextNode("Show");d.className="td-priority-info",d.appendChild(s),e.appendChild(d);let l=document.createElement("h3"),m=document.createTextNode("Delete");l.className="td-priority-info",l.appendChild(m),e.appendChild(l);let h=0;t.getTodo().forEach(e=>{h++;let n=document.createElement("div");n.className="todo-row",c.appendChild(n);let a=document.createElement("h3"),r=document.createTextNode(e.getTitle());a.className="td-title",a.appendChild(r),n.appendChild(a);let o=document.createElement("h3"),i=document.createTextNode(e.getDate());o.className="td-date",o.appendChild(i),n.appendChild(o);let u=document.createElement("h3"),d=document.createTextNode(e.getPriority());u.className="td-priority",u.appendChild(d),n.appendChild(u);let s=document.createElement("button"),l=document.createTextNode("Show");s.className="sd-btn",s.appendChild(l),n.appendChild(s);let m=document.createElement("button"),f=document.createTextNode("Delete");m.className="delete-todo-btn",m.appendChild(f),n.appendChild(m),m.onclick=function(){let n=[];t.getTodo().find(t=>{t===e||n.push(t)}),t.clearTodo(),n.forEach(e=>{t.addTodo(e)}),Z(),K("success",`Todo ${e.getTitle()} was deleted`)};let g=document.createElement("h3"),p=document.createTextNode(e.getDesc()),w=[];t.getName().split(" ").forEach(e=>{let t=e.toLowerCase();w.push(t)});let v=w.join("-");g.className="td-desc",g.id=`description-${h}-${v}`,g.appendChild(p),n.appendChild(g),g.style.display="none",s.onclick=function(){let e=document.getElementById(""+g.id);"none"===e.style.display?(s.textContent="Hide",e.style.display="block"):"block"===e.style.display&&(s.textContent="Show",e.style.display="none")}})}})}else document.querySelectorAll(".proj-div").forEach(e=>e.remove()),document.getElementById("e-title").style.display="block"};Z(),{start:()=>{let e=document.getElementById("nav-btn"),t=document.getElementById("np-hide"),n=document.getElementById("np-close"),a=document.getElementById("np-submit"),r=document.getElementById("np-input");e.addEventListener("click",(function(){document.getElementById("new-td-hide").style.display="none",t.style.display="block"})),n.addEventListener("click",(function(){t.style.display="none"})),a.addEventListener("click",(function(){if(r.value.trim().length&&0!==r.value.length)if(r.value.length<=30){let n=(e=r.value,t=[],{getName:()=>e,getTodo:()=>t,addTodo:e=>{t.push(e)},clearTodo:()=>t=[]});V.push(n),K("success",`Project ${r.value} was created`),r.value="",Z()}else K("error","Project name cannot be longer than 30 characters"),r.value="";else K("error","Project name cannot be empty"),r.value="";var e,t}))}}.start(),{start:()=>{let e=document.getElementById("new-td-hide"),t=document.getElementById("new-todo-btn"),n=document.getElementById("new-td-close"),i=document.getElementById("new-td-submit"),u=document.getElementById("td-title"),d=document.getElementById("td-description"),c=document.getElementById("td-priority"),s=document.getElementById("date-input"),l=document.getElementById("proj-select");V.forEach(e=>{l.options.length=0;let t=document.createElement("option"),n=document.createTextNode(e.getName());t.appendChild(n),t.setAttribute("value",e.getName()),l.appendChild(t)}),t.addEventListener("click",(function(){document.getElementById("np-hide").style.display="none",e.style.display="block",V.forEach(e=>{l.options.length=0;let t=document.createElement("option"),n=document.createTextNode(e.getName());t.appendChild(n),t.setAttribute("value",e.getName()),l.appendChild(t)})})),n.addEventListener("click",(function(){e.style.display="none"})),i.addEventListener("click",(function(){let e=s.value.split("-"),t=parseInt(e[1]),n=parseInt(e[2]),i=parseInt(e[0]);u.value.length<=20&&d.value.length<=100&&parseInt(c.value)>=1&&parseInt(c.value)<=10&&u.value.trim().length&&d.value.trim().length&&c.value.trim().length&&s.value.trim().length&&l.value.trim().length?V.forEach(e=>{if(e.getName()===l.value){let m=((e,t,n,a)=>({getTitle:()=>e,getDesc:()=>t,getDate:()=>n,getPriority:()=>a}))(u.value,d.value,function(e,t,n){a(2,arguments);var i=String(t),u=n||{},d=u.locale||h,c=d.options&&d.options.firstWeekContainsDate,s=null==c?1:f(c),l=null==u.firstWeekContainsDate?s:f(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=d.options&&d.options.weekStartsOn,g=null==m?0:f(m),w=null==u.weekStartsOn?g:f(u.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var v=r(e);if(!o(v))throw new RangeError("Invalid time value");var y=L(v),b=p(v,y),T={firstWeekContainsDate:l,weekStartsOn:w,locale:d,_originalDate:v},C=i.match(G).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,q[t])(e,d.formatLong,T):e})).join("").match(A).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return $(n);var r=j[a];if(r)return!u.useAdditionalWeekYearTokens&&F(n)&&Q(n,t,e),!u.useAdditionalDayOfYearTokens&&X(n)&&Q(n,t,e),r(b,n,d.localize,T);if(a.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return C}(new Date(i,t,n),"MM-dd-yyyy"),parseInt(c.value));e.addTodo(m),u.value="",d.value="",c.value="",s.value="",l.value="",Z()}}):(u.value="",d.value="",c.value="",s.value="",l.value="",K("error","One or more fields are empty or over the character limit"))}))}}.start()}]);