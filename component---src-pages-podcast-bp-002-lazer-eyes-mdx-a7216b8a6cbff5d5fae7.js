(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4M6O":function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var o;return function(){var a=this,s=arguments,i=function(){o=null,n||t.apply(a,s)},r=n&&!o;window.clearTimeout(o),o=setTimeout(i,e),r&&t.apply(a,s)}},e.isReactElement=i,e.shallowComparison=function t(e,n){var o,s=new Set(Object.keys(e).concat(Object.keys(n)));return 0!==(o=[]).concat.apply(o,(0,a.default)(s)).filter((function(o){if("object"==typeof e[o]){if(t(e[o],n[o]))return!0}else if(e[o]!==n[o]&&!i(e[o]))return!0})).length};var a=o(n("RIqP")),s=o(n("q1tI"));function i(t){return!!s.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return s.default.isValidElement(t)}))}},DzHo:function(t,e,n){"use strict";var o=n("2A+t"),a=n("izhR");e.a=function(t){var e,n=t.frontmatter,s=n.season,i=n.episodeNumber,r=n.publicationDate,c=n.duration,u=n.categories,l=n.excerpt;return Object(o.c)(a.b,null,Object(o.c)(a.i,null,"Season: ",Object(o.c)("b",null,s),"    Episode: ",Object(o.c)("b",null,i),"    Date: ",Object(o.c)("b",null,["January","February","March","April","May","June","July","August","September","October","November","December"][(e=new Date(r)).getMonth()]+" "+e.getDate()+", "+e.getFullYear()),"     Duration:"," ",Object(o.c)("b",null,function(t){var e=new Date(0);return e.setSeconds(t),e.toISOString().substr(11,8)}(c)),Object(o.c)("br",null),"Tags: ",Object(o.c)("b",null,u.join(", "))),Object(o.c)(a.i,{sx:{marginTop:[1,2],fontSize:[2,3]}},l))}},ORnI:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var a=o(n("VUT9"));e.Disqus=a.default;var s=o(n("qASQ"));e.CommentCount=s.default;var i=o(n("vAJ3"));e.CommentEmbed=i.default;var r=a.default;e.default=r},VUT9:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var a=o(n("pVnL")),s=o(n("8OQS")),i=o(n("VbXa")),r=o(n("q1tI")),c=o(n("17x9")),u=n("4M6O"),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="bitsandpieces-podcast",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,i.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,this.language=t.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var e=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);e.parentNode.removeChild(e)}},n.render=function(){var t=this.props,e=(t.config,(0,s.default)(t,["config"]));return r.default.createElement("div",(0,a.default)({id:"disqus_thread"},e,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},e}(r.default.Component);e.default=l,l.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string,language:c.default.string,remoteAuthS3:c.default.string,apiKey:c.default.string})}},hFZ1:function(t,e,n){"use strict";var o=n("q1tI"),a=n("2A+t");e.a=function(t){var e=t.isSmall,n="https://feed.booncon.com/bitsandpieces";if("undefined"==typeof window)return Object(a.c)("div",null);var s="podcastData-"+n;window[s]={title:"bits & pieces",subtitle:"How to get things done & love your work.",description:"A show about why work is not a job, friendships and riding unicorns. Hosted by Lukas Jakob Hafner and Tobias Johannes.",cover:"https://booncon-blahh.s3-eu-west-1.amazonaws.com/bp-cover-shaded.jpg",feeds:[{type:"audio",format:"mp3",url:n,"directory-url-itunes":"https://podcasts.apple.com/us/podcast/bits-pieces/"}]};var i=document.createElement("script");i.async=!0,i.src="https://cdn.podlove.org/subscribe-button/javascripts/app.js",i.setAttribute("class","podlove-subscribe-button"),i.setAttribute("data-language","en"),i.setAttribute("data-size","big"),i.setAttribute("data-json-data",s),i.setAttribute("data-color","#2A9BDA"),i.setAttribute("data-format",e?"rectangle":"cover"),i.setAttribute("data-style","filled");var r=Object(o.useRef)(null);return Object(o.useEffect)((function(){r.current&&r.current.appendChild(i)}),[]),Object(a.c)("span",{ref:r},Object(a.c)("noscript",null,Object(a.c)("a",{href:n},"Subscribe to feed")))}},qASQ:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var a=o(n("pVnL")),s=o(n("8OQS")),i=o(n("VbXa")),r=o(n("q1tI")),c=o(n("17x9")),u=n("4M6O"),l=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="bitsandpieces-podcast",n}(0,i.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,o=(0,s.default)(t,["config","placeholder"]);return r.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},o,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},e}(r.default.Component);e.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string}),placeholder:c.default.string}},rzc0:function(t,e,n){"use strict";var o=n("2A+t"),a=n("Wbzz"),s=n("izhR"),i=n("9Dj+"),r=n("vrFN"),c=n("hFZ1"),u=n("ORnI"),l=n("DzHo");e.a=function(t){var e,n=t.children,d=t.pageContext.frontmatter,p=d.title,b=(d.subtitle,d.publicationDate,d.slug),m=d.guid,f=Object(a.useStaticQuery)("2891618740"),h=null===(e=f.allMdx.nodes.filter((function(t){return t.frontmatter.slug===b}))[0])||void 0===e?void 0:e.frontmatter,g={url:""+(f.site.siteMetadata.siteUrl+b),identifier:m,title:p};return Object(o.c)(i.a,null,Object(o.c)(r.a,{title:p}),Object(o.c)(s.b,{sx:{variant:"contentWrap",marginTop:[5,6],p:{marginBottom:[2,3]}}},Object(o.c)(s.d,{gap:3,sx:{padding:[3,4],gridTemplateColumns:["1fr"]}},Object(o.c)(s.b,{px:[3,4]},Object(o.c)(s.e,{as:"h1"},p),Object(o.c)(s.b,{sx:{my:[2,3]}},Object(o.c)(l.a,{frontmatter:h})),Object(o.c)(s.b,null,(null==h?void 0:h.iuid)&&Object(o.c)("iframe",{src:"https://embed.podcasts.apple.com/us/podcast/bits&pieces/id967039989?i="+h.iuid,height:"175px",width:"100%",frameBorder:"0",sandbox:"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation",allow:"autoplay *; encrypted-media *;",styles:"width: 100%; overflow: hidden; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; background-color: transparent; background-position: initial initial; background-repeat: initial initial;"})),Object(o.c)("br",null),Object(o.c)(s.e,{as:"h2",sx:{marginBottom:[2,3]}},"Shownotes:"),n,Object(o.c)(s.b,{sx:{my:[3,4]}},Object(o.c)(c.a,null)),Object(o.c)(s.e,{as:"h2",sx:{marginBottom:[2,3]}},"Comments:"),Object(o.c)(s.b,{sx:{marginBottom:[3,4]}},Object(o.c)(u.Disqus,{config:g})),Object(o.c)(s.g,{to:"/podcast",sx:{fontSize:[2,3,4],marginBottom:[2,3]},as:a.Link},"→ Check out our other episodes")))))}},vAJ3:function(t,e,n){"use strict";var o=n("TqRt");e.__esModule=!0,e.default=void 0;var a=o(n("VbXa")),s=o(n("q1tI")),i=o(n("17x9")),r=function(t){function e(){return t.apply(this,arguments)||this}(0,a.default)(e,t);var n=e.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return s.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},e}(s.default.Component);e.default=r,r.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},r.propTypes={commentId:i.default.string.isRequired,width:i.default.number,height:i.default.number,showMedia:i.default.bool,showParentComment:i.default.bool}},"wlg+":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return u}));var o=n("zLVn"),a=(n("q1tI"),n("7ljp")),s=n("rzc0"),i={},r={_frontmatter:i},c=s.a;function u(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.b)(c,Object.assign({},r,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",null,"Intro"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/saftsaak"}),"@saftsaak")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/metzelfetz"}),"@metzelfetz")),Object(a.b)("h3",null,"Nordic Startup Environment"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://startupsauna.com"}),"Startup Sauna")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://cphftw.dk"}),"#cphftw")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://techcrunch.com/2013/12/03/rovio-supercell-finland/"}),"Helsinki Gaming Scene")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://eu.getcatchbox.com"}),"Catchbox")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://www.leeluu.fi"}),"LeeLuu")),Object(a.b)("h3",null,"AWSome Day Helsinki"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://aws.amazon.com"}),"AWS")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://aws.amazon.com/events/awsome-day-roadshow-mar-2015/"}),"Roadshow 2015")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://aws.amazon.com/redshift/"}),"Redshift")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://aws.amazon.com/summits/stockholm/faqs/"}),"AWS Summit Stockholm 2015")),Object(a.b)("h3",null,"A little bit of sports"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://www.toughest.se/en/events/copenhagen/"}),"Toughest")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Disc_golf"}),"Disc Golf")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://www.innovadiscs.com/targets/skillshot.html"}),"Portable disc golf basket")),Object(a.b)("h3",null,"Lazer eyes"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Photorefractive_keratectomy"}),"PRK")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://www.lasiksurgerynews.com/news/flex.shtml"}),"SMILE")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://vision.about.com/od/eyeexaminations/ig/Eye-Exam-Equipment/"}),"Eye Exam Equipment")),Object(a.b)("h3",null,"TV show recommendations"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://www.imdb.com/title/tt3749900/"}),"Gotham")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://www.imdb.com/title/tt2085059/"}),"Black Mirror")),Object(a.b)("h3",null,"Rant of the week: Google Chromebox for meetings"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.google.com/work/chrome/devices/for-meetings/index.html"}),"Chromebox for meetings")),Object(a.b)("h3",null,"Outro"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://booncon.com/podcast"}),"booncon.com/podcast")," – ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/booncon"}),"@booncon")))}u.isMDXComponent=!0},zLVn:function(t,e,n){"use strict";function o(t,e){if(null==t)return{};var n,o,a={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,"a",(function(){return o}))}}]);
//# sourceMappingURL=component---src-pages-podcast-bp-002-lazer-eyes-mdx-a7216b8a6cbff5d5fae7.js.map