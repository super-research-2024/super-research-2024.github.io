(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24],{144:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/log/[pid]",function(){return n(2015)}])},2015:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o=n(5893),a=n(7294),s=n(1163),i=n(811);n(5202),n(8594);var r=n(2498),l=n(4641),d=n(3838),h=n(5698),c=n(1669),u=n(4418),g=n(5197),p=n(9564),f=n(2489),m=n(1664),y=n.n(m),w=n(8728),b=n(4231),v=n(5486),x=n(7474),k=n(399),j=n(4769),T=n(7404),I=n(4410),P=n(9008),_=n.n(P);function N(){let[e,t]=(0,a.useState)({ids:["1","2","3","4","5","6","7","8","999"],is_hydrated:!1,log_dict:{"06-04-24.md":"1","06-05-24.md":"2","06-06-24.md":"3","06-11-24.md":"4","06-12-24.md":"5","06-13-24.md":"6","06-14-24.md":"7","06-17-24.md":"8","HelloWorld.md":"999"},logs:{"06-04-24.md":"### Tuesday, June 4\n\nAfter blood, sweat, and lots of tears, the Pynecone dev environment is now set up. \n\nPynecone docs can be found here: https://docs.pynecone.io/\n\nThe app can be run in dev mode with `pc run` and in debug mode with `pc run --loglevel debug`. \nMake sure you have pynecone installed and Node.js 16.8.0 or higher. \n\nPynecone uses a page system that allows us to do fullstack development all in Python with many premade elements which are then converted into Javascript pages. The js files can be found in web/pages/.\nThe web directory can be left alone but can be useful for debugging. \n\nMy goals for tomorrow include setting up a homepage with our project description and goals.\nMy goal for the end of the week is to have these logs to be visible on the website. \n\n### From Pynecone docs: \n*You can export your app's frontend and backend to zip files using the `pc export` command.* \n\n*The front end is a compiled NextJS app, which can be deployed to a static hosting service like **GitHub Pages** or Vercel. However, this is just a static build, so you will need to deploy the backend separately. See the self-hosting guide for more information.*\n\n*Nathan Dixon*\n\nID: 1","06-05-24.md":"### Wednesday, June 5\n\nThe homepage of the website is 80% done. The project title, contributors, and description is added and styled as well as a rough draft of the menu bar. The remaining 20% is a bit more styling, bug fixes concerning the 'About' drop down menu and the image not loading. These should be fixed by the end of the week since they don't take high priority for site functionality. \n\nFor the menu bar, I used the hstack (Horizontal Stack) component in Pynecone to list buttons horizontally that link to each page. Currently, the About button is just that, but I am trying to get it so that it lists each member involved on mouse hover (as seen in the commented out version of that pc.link, lines 32 - 47). \n\nThe rest of the page is styled with a vstack which contains headings and text elements, all styled with Pynecone props. The project description would have been read from the text file in the assets directory, but Pynecone doesn't allow for the use of for loops inside a fragment. This is something I'd like to look into later when cleaning up the code. \n\nTomorrow's goal is to get the devlog page done. This will be the bulk of the website and will likely require another python file to parse through the markdown files. \n\n*Nathan Dixon*\n\nID: 2","06-06-24.md":"### Thursday, June 6\n\nMy goal for the log page is to have all log files displayed in a list of clickable cards. The cards will show the date and the person who entered the log and a preview of the log itself. Once the log is clicked, it will take the user to a dynamically rendered log page which displays the full log entry. \n\nI am able to display all of the logs on the page, but Pynecone has a very specific way to manipulate state elements and very little documentation on the topic. I am trying to update the log_name state variable with the clicked log, but this is still not working. \n\nThe issue I am currently facing is instead of trying to set a state element, I am trying to have a function called when the button is clicked to update a global variable using on_click, which is expecting an event to be returned. I will continue to debug this tomorrow.\n\nAll changes are saved in the 'log-functionality' branch to avoid issues with the main branch.\n\n*Nathan Dixon*\n\nID: 3","06-11-24.md":"### Tuesday, June 11\n\nToday was spent working with Gustavo on trying to get a selected log to properly render on the page. The biggest issue is the way that Pynecone handles state variables.\n\nFor starters, Pynecone only allows JSON serializable variables to be stored as state variables since the python files are eventually translated to JavaScript. This means that not only are we limited to a primitive data types, we also can't perform most common Python functions on these data types. I also had a very hard time passing state variables between my own functions, since Pynecone wraps these variables into State objects and doesn't provide a .value attribute to access the value of the state variable.\n\nWe opted for a simpler approach, where log names, ids, and contents were preloaded into state variables instead of trying to dynamically load them as a log was clicked. This is not the most scalable solution, but works for the small amount of logs needed for this project. \n\nWe want to get this part of the project up and working as soon as possible so we can move on to building out the infastructure tied to the NVIDIA Jetson - however, this will likely be revisted in the near future. \n\n*Nathan Dixon*\n\nID: 4","06-12-24.md":'### What I did:\n\nI spoke with Nate yesterday (06-11-24) regarding issues with getting the logs to display on the webpage and worked on some form of a solution. Due to the abstracted form of almost all the data in the pynecone framework the access to variables during runtime is somewhat difficult to navigate. I began with encapsulating all "global" variables into the State class for easy manipulation. Also, all log *names* and *ids* intially present in the /logs directory at runtime are loaded into log_dict, and the contents of the individual logs are loaded into logs. Pre-loading all of the logs elimated the issues both Nate and I were running into. With this, I also added functionality to check periodically (upon each load of the /devlog page) for new logs entered into the /logs directory allowing for real-time updates to the site. \n\nThe original approach to displaying these logs consisted of multiple log/# routes where # was the log id. I instead opted to update the contents of the markdown component on a single route to match the log chosen by the user. This new approach would benefit from the utilization of dynamic routing (via url parameters) which is mentioned in the docs (pynecone.app/docs/components/pages). This would allow us to create customized urls for each log, making it easier to share and dynamically change each page - while only occupying a single route for the log-display functionality. \n\n\n### What still needs consideration:\n\nI am sure there is a more concise way to combine the *logs_dict* and *logs* variables. As I said earlier, the logs would benefit from dynamic routing - with the current version clicking on log #1 would redirect to localhost:3000/logs/1 and display the proper information for that log. However copy/pasting the same url and changing the 1 to a 2 (localhost:3000/logs/2) would still only show the contents of log 1 as the program does not interpret url parameters. A minor addition, but overall good quality of life feature. \n\nI did not work on any sort of formatting for the log text, and thus that also needs some attention. The pc.markdown() component helps by directly formatting the markdown, however the component itself needs some work :)\n\n\n*Gustavo Londono*\n\nID: 5',"06-13-24.md":"### Thursday, June 13\n\nWith the website's basic functionality now working, it was time to begin working on the NVIDIA Jetson Nano. Professor Kartik Bulusu and I worked on finding a 3D printable housing for the Jetson. We chose the design linked below given it's strong standoffs and easy to assemble design. \n\n[Jetson Housing](https://www.thingiverse.com/thing:3603594)\n\nTomorrow's goal is to begin installing and updating the necessary libraries and software on the Jetson to prepare it for MQTT. Our end goal is to have the Jetson host the website as well as serve as the broker for the MQTT network between the Raspberry Pi's. \n\n*Nathan Dixon*\n\nID: 6","06-14-24.md":"### Friday, June 14\n\nToday, I began installing the necessary libraries and software on the Jetson to prepare it for MQTT.\n\nWe will be creating a virtual environment using **pyenv**, updating Python and installing:\n\n- Thonny\n- VSCode\n- Mosquitto\n- Paho\n- Matplotlib\n- Pandas\n- Numpy\n- SciPy\n\n*Nathan Dixon*\n\nID: 7","06-17-24.md":"### Monday, June 17\n\nA new Micro SD card was ordered and installed into the Jetson today, since we were running out of storage on the previous 32GB card. This meant flashing a new version of Ubuntu packaged from NVIDIA's website. \n\nThis meant having to reinstall all of the necessary packages. First steps were to upgrade Ubuntu to version 20.04, since this is required for Node.js 16.x or higher,  (which we need to host and run this website).\n\nNext steps include installing Node.js, setting the correct versions of Python in the virtual environments used for the website and the MQTT server.\n\nThe new Ubuntu version install took most of the day today, so these steps will be done tomorrow.\n\nSee the Log #7 (06-14-24) for the list of packages that were installed.\n\n*Nathan Dixon*\n\nID: 8","HelloWorld.md":"**Hello World**\n\nID: 999\n\n*Nathan Dixon - 2024-06-04*"},names:["06-04-24.md","06-05-24.md","06-06-24.md","06-11-24.md","06-12-24.md","06-13-24.md","06-14-24.md","06-17-24.md","HelloWorld.md"],pid:"",selected_log:{},events:[{name:"state.hydrate"}],files:[]}),[n,m]=(0,a.useState)({state:null,events:[],final:!0,processing:!1}),[P,N]=(0,a.useState)(!1),D=(0,s.useRouter)(),S=(0,a.useRef)(null),{isReady:J}=D,{colorMode:A,toggleColorMode:z}=(0,r.If)(),F=(0,a.useRef)(),M=(e,n)=>{(0,i.PF)(n),t(t=>({...t,events:[...t.events,...e]}))};return(0,a.useEffect)(()=>{J&&(S.current||(0,i.$j)(S,e,t,n,m,D,["websocket","polling"],N),n.processing||(0,i.eP)(e,t,n,m,D,S.current),null!=n.state&&(t(e=>({...n.state,events:[...e.events,...n.events]})),m(e=>({state:null,events:[],final:!0,processing:!e.final})),(0,i.eP)(e,t,n,m,D,S.current)))}),(0,a.useEffect)(()=>{F.current&&F.current.focus()}),(0,a.useEffect)(()=>{let e=()=>M([(0,i.E)("state.hydrate",{})]);return D.events.on("routeChangeComplete",e),()=>{D.events.off("routeChangeComplete",e)}},[D]),(0,o.jsx)(a.Fragment,{children:(0,o.jsxs)(a.Fragment,{children:[(0,o.jsxs)(a.Fragment,{children:[(0,o.jsxs)(l.U,{justify:"center",spacing:"10%",sx:{padding:"3%"},children:[(0,o.jsx)(d.r,{as:y(),href:"/",sx:{button:!0},children:(0,o.jsx)(h.z,{children:"Home"})}),(0,o.jsx)(d.r,{as:y(),href:"/devlog",sx:{button:!0},children:(0,o.jsx)(h.z,{children:"Devlog"})}),(0,o.jsx)(d.r,{as:y(),href:"/about",sx:{button:!0},children:(0,o.jsx)(h.z,{children:"About"})}),(0,o.jsx)(h.z,{onClick:z,sx:{float:"right"},children:(0,o.jsx)(a.Fragment,{children:(0,i.oA)("light"===A)?(0,o.jsx)(a.Fragment,{children:(0,o.jsx)(w.N,{})}):(0,o.jsx)(a.Fragment,{children:(0,o.jsx)(b.k,{})})})})]}),(0,o.jsx)(c.g,{justify:"center",spacing:"2%",sx:{width:"90%"},children:(0,o.jsx)(v.D,{components:{h1:e=>{let{node:t,...n}=e;return(0,o.jsx)(u.X,{size:"2xl",...n})},h2:e=>{let{node:t,...n}=e;return(0,o.jsx)(u.X,{size:"xl",...n})},h3:e=>{let{node:t,...n}=e;return(0,o.jsx)(u.X,{size:"lg",...n})},h4:e=>{let{node:t,...n}=e;return(0,o.jsx)(u.X,{size:"sm",...n})},h5:e=>{let{node:t,...n}=e;return(0,o.jsx)(u.X,{size:"xs",...n})},ul:g.QI,ol:g.GS,li:g.HC,p:p.x,a:d.r,code:e=>{let{node:t,inline:n,className:a,children:s,...i}=e,r=(a||"").match(RegExp("language-(?<lang>.*)"));return n?(0,o.jsxs)(f.E,{...i,children:["             ",s,"           "]}):(0,o.jsx)(x.Z,{children:String(s).replace(/ $/,""),language:r?r[1]:"",...i})}},rehypePlugins:[T.Z,I.Z],remarkPlugins:[k.Z,j.Z],sx:{padding:"3%"},children:e.selected_log.content})})]}),(0,o.jsxs)(_(),{children:[(0,o.jsx)("title",{children:"Pynecone App"}),(0,o.jsx)("meta",{content:"A Pynecone app.",name:"description"}),(0,o.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})})}},811:function(e,t,n){"use strict";let o;n.d(t,{E:function(){return k},$j:function(){return v},oA:function(){return j},PF:function(){return T},eP:function(){return b}});var a=n(6154),s=n(9367),i=n(1142),r=n.n(i),l=JSON.parse('{"P_":"http://localhost:8000/upload","Om":"ws://localhost:8000/event","H5":"http://localhost:8000/ping"}'),d=n(5885);l.H5;let h=l.Om,c=l.P_,u="token",g={},p=()=>{let e=new Date().getTime(),t=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let o=16*Math.random();return e>0?(o=(e+o)%16|0,e=Math.floor(e/16)):(o=(t+o)%16|0,t=Math.floor(t/16)),("x"==n?o:7&o|8).toString(16)})},f=()=>(o||window&&(window.sessionStorage.getItem(u)||window.sessionStorage.setItem(u,p()),o=window.sessionStorage.getItem(u)),o),m=(e,t)=>{for(let n in t){let o=e,a=n.split(".").slice(1);for(;a.length>0;)o=o[a.shift()];for(let e in t[n])o[e]=t[n][e]}},y=async(e,t,n)=>{if("_redirect"==e.name)return t.push(e.payload.path),!1;if("_console"==e.name)return console.log(e.payload.message),!1;if("_set_cookie"==e.name){let t=new d.Z;return t.set(e.payload.key,e.payload.value),localStorage.setItem(e.payload.key,e.payload.value),!1}if("_set_local_storage"==e.name)return localStorage.setItem(e.payload.key,e.payload.value),!1;if("_alert"==e.name)return alert(e.payload.message),!1;if("_set_focus"==e.name){let t=e.payload.ref in g?g[e.payload.ref]:e.payload.ref;return t.current.focus(),!1}if("_set_value"==e.name){let t=e.payload.ref in g?g[e.payload.ref]:e.payload.ref;return t.current.value=e.payload.value,!1}return e.token=f(),e.router_data=(e=>{let{pathname:t,query:n}=e;return{pathname:t,query:n}})(t),!!n&&(n.emit("event",JSON.stringify(e)),!0)},w=async(e,t,n)=>{let o=!1;return"uploadFiles"==e.handler&&(o=await x(t,n,e.name)),o},b=async(e,t,n,o,a,s)=>{if(n.processing||0==e.events.length)return;o({...n,processing:!0});let i=e.events.shift();t(e=>({...e,events:e.events}));(i.handler?await w(i,e,o):await y(i,a,s))||o({...e,final:!0,processing:!1})},v=async(e,t,n,o,a,i,l,d)=>{let c=new URL(h);e.current=(0,s.ZP)(h,{path:c.pathname,transports:l,autoUnref:!1}),e.current.on("connect",()=>{b(t,n,o,a,i,e.current),d(!1)}),e.current.on("connect_error",e=>{d(!0)}),e.current.on("event",e=>{m(t,(e=r().parse(e)).delta),a({state:t,events:e.events,final:e.final,processing:!0})})},x=async(e,t,n)=>{let o=e.files;if(0==o.length)return!1;let s={"Content-Type":o[0].type},i=new FormData;for(let e=0;e<o.length;e++)i.append("files",o[e],f()+":"+n+":"+o[e].name);return await a.Z.post(c,i,s).then(n=>{let o=n.data;m(e,o.delta),t({state:e,events:o.events,final:!0,processing:!1})}),!0},k=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{name:e,payload:t,handler:n}},j=e=>Array.isArray(e)?e.length>0:!!e,T=e=>{e&&"submit"==e.type&&e.preventDefault()}}},function(e){e.O(0,[265,29,990,774,888,179],function(){return e(e.s=144)}),_N_E=e.O()}]);