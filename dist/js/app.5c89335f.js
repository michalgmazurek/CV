(function(e){function t(t){for(var i,s,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3217:function(e,t,n){"use strict";var i=n("ffb9"),a=n.n(i);a.a},"34cd":function(e,t,n){},"4bf3":function(e,t,n){},"4f8a":function(e,t,n){e.exports=n.p+"img/CV1.43664b3b.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Resume")],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"page"},[n("div",{staticClass:"container"},[n("ContactInfo",{attrs:{"general-information-items":e.generalInformationItems}}),n("Name",{attrs:{"general-information-items":e.generalInformationItems}}),n("Experience",{attrs:{"experience-items":e.experienceItems}}),n("Education",{attrs:{"education-items":e.educationItems}}),n("Skills",{attrs:{"skills-items":e.skillsItems}}),n("Languages",{attrs:{"languages-items":e.languagesItems}}),n("Hobbies",{attrs:{"hobbies-items":e.hobbiesItems}}),n("Consent",{staticStyle:{"page-break-after":"auto"}})],1)])])},o=[],l=n("5530"),c=n("2909"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"contact-info"},[e._m(0),n("ul",{staticClass:"contact"},[n("li",{staticClass:"text"},[n("span",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),e._v(e._s(e.generalInformationItems.telephone)+" ")]),n("li",{staticClass:"text"},[n("span",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}}),n("a",{attrs:{href:e.mailto,target:"_blank"}},[e._v(" "+e._s(e.generalInformationItems.email)+" ")])]),n("li",{staticClass:"text"},[n("span",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),n("a",{attrs:{href:e.githubLink,target:"_blank"}},[e._v(" "+e._s(e.generalInformationItems.github)+" ")])]),n("li",{staticClass:"text"},[n("span",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}}),n("a",{attrs:{href:e.linkedinLink,target:"_blank"}},[e._v(" "+e._s(e.generalInformationItems.linkedin)+" ")])])]),n("div",{staticClass:"print-button__container"},[n("button",{staticClass:"print-button",attrs:{type:"button"},on:{click:e.print}},[e._v(" Print ")])])])},u=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"photo-container"},[i("img",{staticClass:"photo",attrs:{src:n("4f8a"),alt:"Photo"}})])}],d={name:"ContactInfo",props:{generalInformationItems:{type:Object,required:!0}},computed:{linkedinLink:function(){var e;return"https://www.".concat(null===(e=this.generalInformationItems)||void 0===e?void 0:e.linkedin)},mailto:function(){var e;return"mailto:".concat(null===(e=this.generalInformationItems)||void 0===e?void 0:e.email)},githubLink:function(){var e;return"https://".concat(null===(e=this.generalInformationItems)||void 0===e?void 0:e.github)}},methods:{print:function(){window.print()}}},m=d,f=(n("9eb3"),n("2877")),b=Object(f["a"])(m,p,u,!1,null,"7a10c7f8",null),g=b.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h1",{staticClass:"header"},[e._v(" "+e._s(e.generalInformationItems.name)+" "+e._s(e.generalInformationItems.surname)+" ")]),n("h2",{staticClass:"subheader subheader--position"},[e._v(" "+e._s(e.generalInformationItems.position)+" ")])])},y=[],v={name:"Name",props:{generalInformationItems:{type:Object,required:!0}}},_=v,x=Object(f["a"])(_,h,y,!1,null,null,null),I=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("p",{staticClass:"subheader"},[e._v(" experience ")]),e._l(e.experienceItems,(function(e){return n("ExperienceItem",{key:"experience-"+e.id,attrs:{"company-name":e.companyName,position:e.position,"start-date":e.startDate,"end-date":e.endDate,responsibilities:e.responsibilities}})}))],2)},S=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"point"},[n("p",{staticClass:"company"},[e._v(" "+e._s(e.companyName)+" ")]),n("p",{staticClass:"position"},[e._v(" "+e._s(e.position)+" ")]),n("p",{staticClass:"text"},[n("span",{staticClass:"fa fa-calendar",attrs:{"aria-hidden":"true"}},[e._v(e._s(e.startDate)+" - "+e._s(e.endDate))])]),n("Responsibilities",{attrs:{"company-name":e.companyName,responsibilities:e.responsibilities}})],1)},k=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"list"},e._l(e.responsibilities,(function(t){return n("ResponsibilitiesItem",{key:e.companyName+"-"+t.id,attrs:{responsibility:t}})})),1)])},j=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(" "+e._s(e.responsibility.point)+" ")])},E=[],N={name:"ResponsibilitiesItem",props:{responsibility:{type:Object,required:!0}}},R=N,A=Object(f["a"])(R,O,E,!1,null,null,null),q=A.exports,M={name:"Responsibilities",components:{ResponsibilitiesItem:q},props:{responsibilities:{type:Array,required:!0},companyName:{type:String,required:!0}}},z=M,L=Object(f["a"])(z,w,j,!1,null,null,null),$=L.exports,P={name:"ExperienceItem",components:{Responsibilities:$},props:{companyName:{type:String,required:!0},position:{type:String,required:!0},startDate:{type:String,required:!0},endDate:{type:String,required:!0},responsibilities:{type:Array,required:!0}}},T=P,J=Object(f["a"])(T,D,k,!1,null,null,null),F=J.exports,B={name:"Experience",components:{ExperienceItem:F},props:{experienceItems:{type:Array,required:!0}}},W=B,H=Object(f["a"])(W,C,S,!1,null,null,null),V=H.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("p",{staticClass:"subheader"},[e._v(" education ")]),e._l(e.educationItems,(function(e){return n("EducationItem",{key:"experience-"+e.id,attrs:{"company-name":e.companyName,position:e.position,"start-date":e.startDate,"end-date":e.endDate}})}))],2)},Q=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"point"},[n("p",{staticClass:"company"},[e._v(" "+e._s(e.companyName)+" ")]),n("p",{staticClass:"position"},[e._v(" "+e._s(e.position)+" ")]),n("p",{staticClass:"text"},[n("span",{staticClass:"fa fa-calendar",attrs:{"aria-hidden":"true"}},[e._v(e._s(e.startDate)+" - "+e._s(e.endDate))])])])},X=[],K={name:"EducationItem",props:{companyName:{type:String,required:!0},position:{type:String,required:!0},startDate:{type:String,required:!0},endDate:{type:String,required:!0}}},Y=K,Z=Object(f["a"])(Y,U,X,!1,null,null,null),ee=Z.exports,te={name:"Education",components:{EducationItem:ee},props:{educationItems:{type:Array,required:!0}}},ne=te,ie=Object(f["a"])(ne,G,Q,!1,null,null,null),ae=ie.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("p",{staticClass:"subheader"},[e._v(" skills ")]),n("div",{staticClass:"tag__container"},e._l(e.skillsItems,(function(e){return n("Tag",{key:"skill-"+e.id,attrs:{text:e.text}})})),1)])},se=[],oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.tagClass},[e._v(" "+e._s(e.text)+" ")])},le=[],ce={name:"Tag",props:{text:{type:String,required:!0},wider:{type:Boolean,required:!1,default:!1}},computed:{tagClass:function(){return this.wider?"tag tag--wider":"tag"}}},pe=ce,ue=Object(f["a"])(pe,oe,le,!1,null,null,null),de=ue.exports,me={name:"Skills",components:{Tag:de},props:{skillsItems:{type:Array,required:!0}}},fe=me,be=Object(f["a"])(fe,re,se,!1,null,null,null),ge=be.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("p",{staticClass:"subheader"},[e._v(" Languages ")]),n("div",{staticClass:"tag__container"},e._l(e.languagesItems,(function(e){return n("Tag",{key:"language-"+e.id,attrs:{text:e.text,wider:""}})})),1)])},ye=[],ve={name:"Languages",components:{Tag:de},props:{languagesItems:{type:Array,required:!0}}},_e=ve,xe=Object(f["a"])(_e,he,ye,!1,null,null,null),Ie=xe.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("p",{staticClass:"subheader"},[e._v(" Hobbies ")]),n("div",{staticClass:"tag__container"},e._l(e.hobbiesItems,(function(e){return n("Tag",{key:"hobby-"+e.id,attrs:{text:e.text}})})),1)])},Se=[],De={name:"Hobbies",components:{Tag:de},props:{hobbiesItems:{type:Array,required:!0}}},ke=De,we=Object(f["a"])(ke,Ce,Se,!1,null,null,null),je=we.exports,Oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"art"},[n("p",{staticClass:"consent"},[e._v(" I grant my consent to process my personal data included in the offer of employment for the purposes required in the process of recruitment, according to the Personal data Protection Act from 29.08.1997.” "),n("br"),e._v(' "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb procesu rekrutacji (zgodnie z ustawą o ochronie danych osobowych z dnia 29.08.1997 Dz.U. z 2002 r. Nr 101, pozycja 926 z późn.zm.)" ')])])}],Ne={name:"Consent"},Re=Ne,Ae=(n("3217"),Object(f["a"])(Re,Oe,Ee,!1,null,"35c16d62",null)),qe=Ae.exports,Me=[{id:3,companyName:"Coders Lab",position:"Become Front-end Developer",startDate:"Sep 2016",endDate:"Apr 2017"},{id:2,companyName:"Warsaw School of Economics",position:"Master of Arts - International Economics",startDate:"Oct 2013",endDate:"May 2016"},{id:1,companyName:"University of Warsaw",position:"Bachelor - Business Administration and Management",startDate:"Oct 2010",endDate:"Jun 2013"}],ze=[{id:9,companyName:"Freelance",position:"",startDate:"Jul 2020",endDate:"till now",responsibilities:[{id:1,point:"Developing software as a Freelancer/International Contractor"}]},{id:8,companyName:"1010 Data",position:"Senior Front-end Developer",startDate:"Jul 2021",endDate:"Jul 2023",responsibilities:[{id:3,point:"Developing innovative functionalities and services using Vue, XState, Rest, and WebSockets to improve user experience and streamline processes"},{id:2,point:"Creating and implementing a new project for big data analysis, enabling more efficient data processing and analysis"},{id:1,point:"Collaboration with a fully remote US-based team in NY on a day-to-day basis, ensuring successful project outcomes"}]},{id:7,companyName:"Docplanner (ZnanyLekarz.pl)",position:"Front-end Developer",startDate:"Mar 2019",endDate:"Jul 2021",responsibilities:[{id:9,point:"Developing new functionalities and services (Vue, Vuex, GraphQL, Jest, jQuery, JS, Rest)"},{id:8,point:"Developing, refactoring and redesigning internal services (CMS) serving all cash-ow related functionalities in Europe and Latin America"},{id:7,point:"Developing and refactoring e-commerce functionalities and features (worldwide)"},{id:6,point:"Implementing Google Analytics mechanisms and metrics tools"},{id:5,point:"Managing Front-end bug-flow for the whole company (Sentry)"},{id:4,point:"Participation in recruitment process - improving the process, being part of a team responsible for the recruitment area in Poland, creating the whole culture of the trial day"},{id:3,point:"Conducting inside company workshops"},{id:2,point:'Role of "buddy" for candidates during their trial days'},{id:1,point:"Implementing tools for recruitment process like fakeAPI (Node.js) or recruitment task repository"}]},{id:6,companyName:"Bonnier Business Polska (Puls Biznesu)",position:"Front-end Developer",startDate:"Aug 2018",endDate:"Feb 2019",responsibilities:[{id:2,point:"Developing new functionalities and services (Angular 6, React, JS, TypeScript, SCSS)"},{id:1,point:"Developing internal services (CMS) from scratch(Angular 6, TypeScript, SCSS)"}]},{id:5,companyName:"DaWanda",position:"Front-end Developer",startDate:"Feb 2018",endDate:"Aug 2018",responsibilities:[{id:4,point:"Developing new functionalities for the webpage (React, Redux, Sagas, CSS)"},{id:3,point:"Cooperation with german team - part of a team implementing most urgent features on DaWanda"},{id:2,point:"Rewriting existing code into modern and efficient React components, and its implementation in ruby code"},{id:1,point:"Individual project of implementation new search-bar feature with complex autosuggest (React, Redux, HTML, CSS)"}]},{id:4,companyName:"Coders Lab",position:"Junior Front-end Developer",startDate:"May 2017",endDate:"Feb 2018",responsibilities:[{id:2,point:"Developing front-end of the internal web applications (React, Redux, JS, Twig, HTML, CSS, Jest)"},{id:1,point:"Writing documentation"}]},{id:3,companyName:"Coders Lab",position:"Recruiter",startDate:"Apr 2016",endDate:"May 2017",responsibilities:[]},{id:2,companyName:"Mizrach Search",position:"Researcher",startDate:"Nov 2014",endDate:"May 2015",responsibilities:[]},{id:1,companyName:"Kienbaum Executive Consultants",position:"Research Analyst",startDate:"Nov 2010",endDate:"Nov 2014",responsibilities:[]}],Le=[{id:19,text:"JS (ES6)"},{id:18,text:"TypeScript"},{id:17,text:"Vue"},{id:16,text:"Vuex"},{id:15,text:"XState"},{id:14,text:"React"},{id:13,text:"Redux"},{id:12,text:"Angular 2-6"},{id:11,text:"jQuery"},{id:10,text:"Ajax"},{id:9,text:"Rest"},{id:8,text:"GraphQL"},{id:7,text:"Jest"},{id:6,text:"Webpack"},{id:5,text:"Docker"},{id:4,text:"HTML"},{id:3,text:"CSS"},{id:2,text:"SCSS"},{id:1,text:"Bootstrap"}],$e=[{id:2,text:"English   (C1)"},{id:1,text:"German   (B1)"}],Pe=[{id:6,text:"Sailing"},{id:5,text:"Brain teasers"},{id:4,text:"Paintball"},{id:3,text:"Snowboarding"},{id:2,text:"Vintage Audio"},{id:1,text:"Cars"}],Te={name:"Michał",surname:"Mazurek",position:"Senior Front-end Developer",telephone:"+48 790 613 813",email:"michalgmazurek@gmail.com",github:"github.com/michalgmazurek",linkedin:"linkedin.com/in/michalgmazurek"},Je={name:"Resume",components:{Name:I,Consent:qe,Experience:V,Education:ae,Skills:ge,Languages:Ie,Hobbies:je,ContactInfo:g},computed:{experienceItems:function(){return Object(c["a"])(ze)},educationItems:function(){return Object(c["a"])(Me)},generalInformationItems:function(){return Object(l["a"])({},Te)},skillsItems:function(){return Object(c["a"])(Le)},languagesItems:function(){return Object(c["a"])($e)},hobbiesItems:function(){return Object(c["a"])(Pe)}}},Fe=Je,Be=(n("8bf8"),Object(f["a"])(Fe,s,o,!1,null,"c41b15ae",null)),We=Be.exports,He=(n("7046"),{name:"App",components:{Resume:We}}),Ve=He,Ge=Object(f["a"])(Ve,a,r,!1,null,null,null),Qe=Ge.exports;new i["a"]({render:function(e){return e(Qe)}}).$mount("#app")},7046:function(e,t,n){},"8bf8":function(e,t,n){"use strict";var i=n("4bf3"),a=n.n(i);a.a},"9eb3":function(e,t,n){"use strict";var i=n("34cd"),a=n.n(i);a.a},ffb9:function(e,t,n){}});
//# sourceMappingURL=app.5c89335f.js.map