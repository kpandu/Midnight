(this.webpackJsonpsol5=this.webpackJsonpsol5||[]).push([[0],{10:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/linkedin.937b5084.svg"},38:function(e,t,a){e.exports=a.p+"static/media/welcome_Trim.ffef58a0.mp4"},39:function(e,t,a){e.exports=a.p+"static/media/welcome-bg.d5953f28.mp4"},40:function(e,t,a){e.exports=a.p+"static/media/me.342b7f76.png"},41:function(e,t,a){e.exports=a.p+"static/media/crystalold.40a94938.png"},42:function(e,t,a){e.exports=a.p+"static/media/crystalnew.7eff92fb.png"},43:function(e,t,a){e.exports=a.p+"static/media/canny.73242700.png"},44:function(e,t,a){e.exports=a.p+"static/media/sol2video.2b4030ae.mp4"},51:function(e,t,a){e.exports=a(95)},56:function(e,t,a){},83:function(e,t,a){e.exports=a.p+"static/media/social_cropped.557df9b4.mp4"},84:function(e,t,a){e.exports=a.p+"static/media/tasker.57c00019.mp4"},85:function(e,t,a){e.exports=a.p+"static/media/flapong.b8b20b1a.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/sol3video.51d5a75b.mp4"},87:function(e,t,a){e.exports=a.p+"static/media/SOL4crop.c4755f22.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/MediaCNN.210a5439.mp4"},89:function(e,t,a){e.exports=a.p+"static/media/panorama.56c043bf.png"},94:function(e,t,a){e.exports=a.p+"static/media/github.1bb02710.svg"},95:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),o=a.n(r),l=(a(56),a(3)),c=a(2),s=a(4),m=a(5),u=a(6),d=a(107),p=(a(10),a(18)),h=a.n(p),g=a(31),f=a.n(g),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="flex-start";return this.props.left&&(e="flex-end"),this.props.center&&(e="center"),i.a.createElement(d.a,{item:!0,container:!0,xs:"12",md:"6",lg:"4",justify:e,style:{marginBottom:"5%"}},i.a.createElement(d.a,{container:!0,item:!0,alignItems:"flex-start",justify:"flex-start",direction:"column",style:{width:this.props.width}},!this.props.video&&i.a.createElement(f.a,{options:{max:0,scale:1.05}},i.a.createElement(h.a,{zoom:!0},i.a.createElement("img",{src:this.props.src,id:"proj-img",style:{width:this.props.width}}))),this.props.video&&i.a.createElement(f.a,{options:{max:0,scale:1.05}},i.a.createElement(h.a,{zoom:!0},i.a.createElement("video",{muted:"muted",autoPlay:!0,preload:"auto",src:this.props.src,style:{width:this.props.width,minWidth:"300px",borderRadius:this.props.phone?"21px":"0px"},loop:!0,type:"video/mp4"}))),i.a.createElement(h.a,{bottom:!0},i.a.createElement("h1",{className:"project-title"},this.props.title),i.a.createElement("h1",{id:"project-paragraph"},this.props.description))))}}]),t}(n.Component),E=a(7),b=a.n(E),v=a(108),w=a(29),j=a(14),O=a(37),x=a.n(O),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={visible:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.children!==this.props.children&&(this.setTimer(),this.setState({visible:!0}))}},{key:"componentDidMount",value:function(){this.setTimer()}},{key:"setTimer",value:function(){null!=this._timer&&clearTimeout(this._timer),this._timer=setTimeout(function(){window.onscroll=function(){},document.getElementsByTagName("html")[0].style.overflowY="visible",this.setState({visible:!1}),this._timer=null}.bind(this),this.props.delay)}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"render",value:function(){return this.state.visible?i.a.createElement("div",null,this.props.children):i.a.createElement("span",null)}}]),t}(i.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"disableScrolling",value:function(){window.onscroll=function(){window.scrollTo(0,0)},document.getElementsByTagName("html")[0].style.overflowY="hidden"}},{key:"componentDidMount",value:function(){this.disableScrolling()}},{key:"render",value:function(){return i.a.createElement(I,{style:{position:"absolute",width:"100%",height:"100%",zIndex:55},delay:5500},i.a.createElement(j.Spring,{from:{value:3,opacity:7},to:{value:38,opacity:0},config:{duration:5500,easing:v.a}},(function(e){return i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center",direction:"column",style:{width:"100vw",height:"100vh",zIndex:9999,position:"relative",backgroundColor:"black",opacity:e.opacity}},i.a.createElement(E.Fade,{zoom:!0},i.a.createElement(w.a.svg,{width:"85",height:"85",stroke:"white",fill:"none",strokeWidth:.7,strokeDasharray:3*e.value,strokeDashoffset:e.value},i.a.createElement(x.a,null))),i.a.createElement("h1",{id:"exp-caption"},"LOADING..."))})))}}]),t}(n.Component),A=a(38),C=a.n(A),S=a(39),T=a.n(S),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).replay=function(){document.getElementsByTagName("video")[0].play(),document.getElementsByTagName("video")[1].play()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{minHeight:"100vh"}},i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center",className:"video-parallax"},i.a.createElement("video",{id:"bg-parallax",muted:"muted",autoPlay:!0,src:T.a,onEnded:this.replay,type:"video/mp4",preload:"true"})),i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center",style:{height:"100vh",position:"absolute",top:"0"}},i.a.createElement("video",{preload:"true",id:"zoom",muted:"muted",autoPlay:!0,src:C.a,onEnded:this.replay,type:"video/mp4"})),i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center",style:{height:"100vh",position:"absolute",top:"0"}},i.a.createElement(d.a,{container:!0,direction:"column",justify:"center",alignItems:"flex-start",style:{width:"65%",height:"55%",position:"relative"}},i.a.createElement("div",{style:{marginLeft:"-10%"}},i.a.createElement("h1",{id:"title"},i.a.createElement(E.Fade,{bottom:!0},"PROJECT: MIDNIGHT")),i.a.createElement("h1",{id:"overlay-caption",onClick:this.replay},i.a.createElement(E.Fade,{bottom:!0,delay:220},"KRISHAN PANDUWAWALA"))))))}}]),t}(n.Component),D=a(109),P=a(23),R=a.n(P),M=a(40),L=a.n(M),B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{id:"title",style:{textAlign:"right"===this.props.align?"end":"start"}},this.props.title),i.a.createElement("h1",{id:"overlay-paragraph",style:{textAlign:"right"===this.props.align?"end":"start"}},this.props.description))}}]),t}(n.Component),q=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(D.a,{style:{minHeight:"130vh",marginTop:"10%"}},i.a.createElement(d.a,{container:!0,direction:"column",justify:"center",alignItems:"flex-end"},i.a.createElement(B,{align:"right",title:"ABOUT",description:"0x1"}),i.a.createElement(R.a,null,(function(e){var t=e.isVisible;return i.a.createElement(j.Spring,{config:{duration:600,easing:function(e){return e}},to:{width:t?"50%":"0%"}},(function(e){var t=e.width;return i.a.createElement("hr",{width:t,color:"white",style:{marginRight:"0px"}})}))}))),i.a.createElement(d.a,{container:!0,alignContent:"center",justify:"center"},i.a.createElement(E.Fade,{zoom:!0,duration:1600},i.a.createElement("img",{src:L.a,id:"profile-pic"})),i.a.createElement(d.a,{container:!0,direction:"column",justify:"flex-end",alignItems:"center"},i.a.createElement(d.a,{container:!0,spacing:4,alignItems:"flex-start",style:{width:"73%"}},i.a.createElement(d.a,{item:!0,xs:!0},i.a.createElement(E.Fade,{up:!0,delay:100},i.a.createElement("h6",{className:"square-text"},"Hi, I'm Krishan. Currently I am a student at the University of Maryland, College Park. I am a Junior majoring in Computer Science with an upper level concentration in Mathematics. I have just completed a summer long internship at Boeing Intelligence & Analytics, where I developed a strong interest and skill set for Fullstack Development."))),i.a.createElement(d.a,{item:!0,xs:!0},i.a.createElement(E.Fade,{up:!0,delay:100},i.a.createElement("h6",{className:"square-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")))))))}}]),t}(n.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{container:!0,style:{marginTop:"8% ",marginBottom:"10%"}},i.a.createElement(d.a,{container:!0,item:!0,justify:"flex-end",xs:!0},i.a.createElement(d.a,{container:!0,item:!0,direction:"column",alignItems:"flex-start",style:{paddingRight:"40px",paddingBottom:"20px"}},i.a.createElement(b.a,{up:!0},i.a.createElement("h1",{id:"exp-title"},this.props.title),i.a.createElement("h1",{id:"exp-caption"},this.props.caption.toUpperCase()),i.a.createElement("h1",{id:"exp-caption"},this.props.date.toUpperCase()),i.a.createElement("h1",{id:"exp-caption"},this.props.loc.toUpperCase())))),i.a.createElement(d.a,{item:!0,xs:!0,container:!0,justify:"flex-start",alignItems:"flex-start",direction:"column"},i.a.createElement(b.a,{zoom:!0},i.a.createElement("h1",{id:"exp-paragraph"},this.props.description),i.a.createElement("p",{className:"exp-bullets"},this.props.bullets.map((function(e){return i.a.createElement(n.Fragment,{key:e},i.a.createElement("strong",{style:{color:"#19c8fd"}},"\u2022")," \xa0",e," ",i.a.createElement("br",null))}))))))}}]),t}(n.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(D.a,{style:{minHeight:"120vh"}},i.a.createElement(d.a,{container:!0,direction:"column",justify:"center",alignItems:"flex-start"},i.a.createElement(B,{title:"EXPERIENCE",description:"0x2",align:"left"}),i.a.createElement(R.a,null,(function(e){var t=e.isVisible;return i.a.createElement(j.Spring,{delay:100,config:{duration:600,easing:function(e){return Math.sqrt(Math.sqrt(e))}},to:{width:t?"50%":"0%"}},(function(e){var t=e.width;return i.a.createElement("hr",{width:t,color:"white",style:{marginLeft:"0px"}})}))}))),i.a.createElement(F,{loc:"Annapolis Juntion, MD",date:"June 2019 - August 2019",title:"BOEING I&A",description:"At BI&A I engineered a facial recognition app applying AWS\r Rekognition to identify people, objects, and frequent associations\r between people. Given an image of someone, you can find all the\r images that person is in, the frequency of people that person is\r with, and the objects within those images. You can also search for\r objects in the datasets and find the matching images along with\r graphs to better visualize the results.",src:"https://www.ftmeadealliance.org/wp-content/uploads/2018/02/Copy-of-Custom-%E2%80%93-Untitled-Design-4.png",align:"right",bullets:["Hosted ReactJS frontend on AWS S3, ExpressJS REST APIs on AWS EC2, and MySQL database in AWS RDS.","Improved reliability with multiple REST APIs in a microservice architecture.","Maximized scalability by deploying through AWS Elastic Beanstalk."],caption:"Software Engineer Intern"}),i.a.createElement(F,{title:"UMD",loc:"College Park, MD",date:"August 2019 - May 2020",description:"In the class CMSC389N: Single Page Web Application Development,\r I taught ReactJS, ExpressJS, and MongoDB. I held weekly office hours and aided \r in the creation of projects and exams. ",src:"https://www.cs.umd.edu/sites/default/files/logo_top_bottom.png",align:"left",bullets:[],caption:"Teaching Assistant"}),i.a.createElement(F,{title:"UMD",loc:"College Park, MD",date:"August 2019 - May 2020",description:"Under the guidance of Prof. Muhammad Nayeem Teli, Hyekang Joo, Ashan Panduwawala, and I completed a 3-point distracted/drowsy driver\r detection application that runs on a Rasberry Pi in a car. The main features include: yawn frequency detection;\r blink detection; and finally driver action detection. I completed the third part,\r where I trained a convolutional neural network using transfer learning \r and YOLO object detection to predict the actions of a driver. Actions include and are not limited to:\r texting, calling, driving normally,\r and reaching behind. The system was optimized heavily to allow for real-time detection.\r ",src:"https://www.cs.umd.edu/sites/default/files/logo_top_bottom.png",align:"left",bullets:[],caption:"Undergraduate Researcher"}),i.a.createElement(F,{title:"AMAZON",loc:"Seattle, WA",date:"May 2020 - August 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,\r sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \r Ut enim ad minim veniam, quis nostrud exercitation ullamco\r laboris nisi ut aliquip ex ea commodo consequat. Duis \r aute irure dolor in reprehenderit in voluptate velit esse\r cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",src:"https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg",align:"right",bullets:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.","Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed."],caption:"Software Development Engineer Intern"}))}}]),t}(n.Component),W=a(9);var z=function(e){var t,a=e.text;return i.a.createElement(d.a,(t={item:!0,xs:!0,container:!0,justify:"center"},Object(W.a)(t,"xs","12"),Object(W.a)(t,"md","6"),Object(W.a)(t,"lg","4"),t),i.a.createElement(E.Fade,{zoom:!0,duration:1600},i.a.createElement("h1",{id:"quote",style:{marginBottom:"25%",marginTop:"15%"}},a)))},H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"flex-start",spacing:6},i.a.createElement(y,{src:"https://cdn.shopify.com/s/files/1/2723/6790/collections/Large_Website_CROPPED-8158_c27a7da0-a6e5-43ea-93b6-f87a33505287_2048x.jpg?v=1515986208",title:"TEMPORARY PLACEHOLDER",description:"asdasd",width:"90%"}),i.a.createElement(y,{src:a(83),title:"IOS/ANDROID SOCIAL MEDIA APP",width:"40vh",phone:!0,description:"This is a social media app similar to Instagram,\r which was made with React Native & Firebase.",video:!0}),i.a.createElement(z,{text:'"Imagination is more important than knowledge...'}))}}]),t}(n.Component),U=a(41),_=a.n(U),V=a(42),Y=a.n(V),G=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center",spacing:1},i.a.createElement(y,{src:_.a,title:"",width:"100%",top:"15%",description:"",center:!0}),i.a.createElement(d.a,{item:!0,container:!0,justify:"flex-start",xs:!0,style:{margin:"20px"}},i.a.createElement(h.a,{bottom:!0},i.a.createElement("h1",{className:"project-title"},"CRYSTAL SKY"),i.a.createElement("h1",{id:"project-paragraph"},"Given a picture of the sky, the program will use CV2 to filter for stars, then using these stars as coordinates and points found through canny edge detection, Delaunay triangulation is applied creating an artistic representation of the image. Edge detection preserves the outline of non-sky elements when triangulated."))),i.a.createElement(y,{src:Y.a,title:"",description:"",width:"100%",top:"0vw",center:!0}))}}]),t}(n.Component),K=a(43),X=a.n(K),Q=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"flex-start",spacing:6},i.a.createElement(z,{text:"...for knowledge is limited to all we now know and understand..."}),i.a.createElement(y,{src:a(84),title:"TASKER",width:"30vh",phone:!0,description:"Tasker is a task manager app made for Android. It uses firebase\r for authentication and database storage.",video:!0}),i.a.createElement(y,{src:X.a,title:"CANNY EDGE DETECTION",description:"Canny edge detection using only numpy and pillow. First a gaussian blur filter is applied. Then\r gradient filters are applied. The the resulting matricies are used to compute edge strength and edge orientation.\r These are used to conduct non maximum suppression yielding the above image after a threshold is applied.",width:"100%",top:"30%"}))}}]),t}(n.Component),Z=a(44),$=a.n(Z),ee=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"flex-start",spacing:6},i.a.createElement(y,{src:a(85),title:"FLAPPY BIRD / PONG",width:"80%",description:"Making games may not be my specialization, yet they teach so much. \n          Through creating Flappy Bird in Java and Pong in Python, I took my first steps into both languages.",center:!0}),i.a.createElement(y,{src:$.a,title:"PROJECT PARALLAX",description:"I was really interested in parallax and wanted to learn React, therefore I combined the\r 2 into the site above. It built a strong foundation in states and functional/class components. The site\r features a parallax downfall from space to the bottom of the sea.",width:"100%",center:!0,video:!0}))}}]),t}(n.Component),te=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"flex-start"},i.a.createElement(y,{src:a(86),title:"SOL",width:"100%",video:!0,description:"I was blinded by thinking that overly flashy looks good. Before I \r realized that I was wrong, I made the above graphic which was going to be the at the very top of this\r website. It is a real-time interactive 3D animation in space made with BabylonJS. Project Midnight is a nice\r balance between flashy and simple."}),i.a.createElement(z,{text:"...while imagination embraces the entire world..."}))}}]),t}(n.Component),ae=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"flex-start",spacing:6},i.a.createElement(y,{src:a(87),title:"PROJECT CANVAS",width:"95%",description:"This website was the one that preceded the one you are viewing. It gave me the \r inspiration for really bold text, and incorporating a simple design. Its over-simplicity led to its downfall,\r which led to the more daring yet simple Project Midnight.",center:!0}),i.a.createElement(y,{src:a(88),title:"MEDIA CONTROLLER CNN",width:"50vw",video:!0,description:i.a.createElement(i.a.Fragment,null,"Through Tensorflow and CV2, a convolutional nerual network using transfer learning is trained to learn hand gestures and induce media controls. Below are the gestures: ",i.a.createElement("br",null),i.a.createElement("br",null),"No Hand: Pause Music after 6 seconds of inactivity. Music will resume automatically upon hand visibility. ",i.a.createElement("br",null),"Fist: Play/Pause ",i.a.createElement("br",null)," Thumb Out: Back ",i.a.createElement("br",null)," Pinky Out: Skip"," ",i.a.createElement("br",null)," Normal: Do Nothing"," ")}))}}]),t}(n.Component),ne=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"flex-start",spacing:6},i.a.createElement(y,{src:a(89),title:"PANORAMA STICHER",width:"100%",description:"Using RANSAC on the potential candidates from Harris corner detection,\r the best matches are found between the 2 images to be stitched.\r Then the transformation between the 2 images is computed which is used\r to transform and stich all pixels from the left image to the right image.\r "}))}}]),t}(n.Component),ie=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,{container:!0,justify:"center",style:{minHeight:"300vh"}},i.a.createElement(D.a,null,i.a.createElement(B,{align:"right",title:"PROJECTS",description:"0x3"}),i.a.createElement(R.a,null,(function(e){var t=e.isVisible;return i.a.createElement(j.Spring,{delay:100,config:{duration:600,easing:function(e){return e}},to:{width:t?"50%":"0%"}},(function(e){var t=e.width;return i.a.createElement("hr",{width:t,color:"white",style:{marginRight:"0px",marginBottom:"15%"}})}))}))),i.a.createElement(d.a,{container:!0,justify:"center",style:{width:"90vw"}},i.a.createElement(H,null),i.a.createElement(ae,null),i.a.createElement(G,null),i.a.createElement(Q,null),i.a.createElement(ee,null),i.a.createElement(te,null),i.a.createElement(ne,null))),i.a.createElement(E.Fade,{zoom:!0,delay:500,duration:1600},i.a.createElement(d.a,{container:!0,justify:"center"},i.a.createElement(d.a,{item:!0,container:!0,alignItems:"flex-start",justify:"center",direction:"column",style:{maxWidth:"60%",height:"100vh"}},i.a.createElement("h1",{id:"quote",style:{padding:0}},'...and all there ever will be to know and understand. "'),i.a.createElement("h1",{id:"exp-loc",style:{textAlign:"end"}},"Albert Einstein")))))}}]),t}(n.Component),re=a(45),oe=a.n(re),le=a(30),ce=a.n(le);function se(){return i.a.createElement("div",null,i.a.createElement(d.a,{container:!0,style:{minHeight:"100vh",position:"relative"},alignItems:"center"},i.a.createElement(ce.a,null,(function(e){var t=e.isVisible;return i.a.createElement(j.Spring,{delay:1e3,config:{duration:800},to:{opacity:t?1:0}},(function(e){var t=e.opacity;return i.a.createElement("div",{style:{width:"120vw",height:"100vh",left:0,top:0,position:"absolute",backgroundColor:"white",opacity:t}})}))})),i.a.createElement(D.a,null,i.a.createElement(d.a,{container:!0,style:{margin:"0"},justify:"flex-start",alignItems:"center"},i.a.createElement(d.a,{item:!0,xs:6},i.a.createElement("h1",{id:"title"},"EVENTUALLY MIDNIGHT COMES TO AN END..."))),i.a.createElement(d.a,{container:!0,style:{marginTop:"5%",marginLeft:"0%"},justify:"flex-end",alignItems:"flex-end",direction:"column"},i.a.createElement(d.a,{item:!0,container:!0,direction:"column",xs:6},i.a.createElement("h1",{id:"contact-description"},"Midnight is when the line ",i.a.createElement("br",null),"between imagination and innovation is blurred.",i.a.createElement("br",null),"I also wrote this site at midnight.",i.a.createElement("br",null)," ",i.a.createElement("br",null),"Made with ReactJS.",i.a.createElement("br",null)," ",i.a.createElement("br",null),"Krishan Panduwawala"),i.a.createElement(d.a,{container:!0,style:{marginTop:"20px"}},i.a.createElement("img",{src:a(94),color:"black",width:"35",height:"35",className:"link",onClick:function(){return window.location.assign("https://github.com/kpandu")}}),i.a.createElement("img",{src:a(34),color:"black",className:"link",onClick:function(){return window.location.assign("https://www.linkedin.com/in/krishan-panduwawala-ba9749185/")}}),i.a.createElement(oe.a,{src:a(34),className:"link",style:{fontSize:35.5},onClick:function(){return window.location.href="mailto:krishan103@hotmail.com"}})))))))}var me=a(46),ue=a.n(me),de=a(47),pe=a.n(de),he=a(48),ge=a.n(he),fe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),i.a.createElement(d.a,{item:!0,container:!0,direction:"column",justify:"flex-start",alignItems:"center",xs:this.props.middle?12:4,md:"4",className:"tech-background",style:{background:"linear-gradient(164deg, rgba(24,57,109,1) 0%, rgba(22,34,77,1) 100%);"}},i.a.createElement(ce.a,null,(function(t){return t.isVisible&&i.a.createElement(j.Spring,{from:{value:2},to:{value:50},config:{duration:5500,easing:v.a},delay:e.props.delay},(function(t){return i.a.createElement(E.Fade,{zoom:!0,delay:e.props.delay},i.a.createElement(w.a.svg,{width:"55",height:"55",stroke:e.props.color,fill:"none",strokeWidth:.7,strokeDasharray:3*t.value,strokeDashoffset:t.value},i.a.createElement(e.props.svg,null)))}))})),i.a.createElement(E.Fade,{delay:1800+this.props.delay/1.5},i.a.createElement("h1",{id:"tech-title",style:{color:this.props.color}},this.props.title)),i.a.createElement("h1",{id:"tech-list"},this.props.list.map((function(t){return i.a.createElement(E.Fade,{delay:1800+e.props.delay/1.5,key:t},t)}))))}}]),t}(n.Component),ye=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{container:!0,alignItems:"space-evenly",style:{minHeight:"120vh",width:"100vw"}},i.a.createElement(d.a,{container:!0,justify:"center",direction:"column",alignItems:"center"},i.a.createElement(E.Fade,null,i.a.createElement("h1",{id:"title",style:{textAlign:"center"}},"SKILLS"),i.a.createElement("hr",{style:{width:"30%",color:"white"}})),i.a.createElement(E.Fade,{delay:2700},i.a.createElement("h1",{id:"exp-paragraph",style:{textAlign:"center",width:"40vw"}},"What kind of programer am I? I have made several websites using ReactJS which incorporates HTML, CSS, and Javascript. I built REST APIs at Boeing and utilized the cloud to scale deployment. Right now I am an undergraduate reseacher in computer vision applying the latest techniques such as YOLO object detection. I am also using machine learning to detect unsafe driving. To answer the question, I am a Data Scientist focusing on fullstack development and computer vision.")),i.a.createElement(D.a,null,i.a.createElement(d.a,{container:!0,justify:"space-evenly",style:{marginTop:"4%"},alignItems:"flex-start",spacing:5},i.a.createElement(fe,{title:"FRONT-END",list:["ReactJS","HTML","CSS","Android"],svg:ue.a,color:"#61dbfb",delay:0}),i.a.createElement(fe,{title:"BACK-END",list:["ExpressJS","Firebase","MongoDB","AWS"],color:"purple",svg:pe.a,delay:500}),i.a.createElement(fe,{title:"DATA SCIENCE / VISION",list:["Tensorflow","Pytorch","CV2","Keras"],color:"#ff450c",svg:ge.a,delay:1e3,middle:!0})))))}}]),t}(n.Component);var Ee=function(){return i.a.createElement("div",{style:{maxWidth:"100vw"}},i.a.createElement(k,null),i.a.createElement(N,null),i.a.createElement(q,null),i.a.createElement(J,null),i.a.createElement(ye,null),i.a.createElement(ie,null),i.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.5caa9c71.chunk.js.map