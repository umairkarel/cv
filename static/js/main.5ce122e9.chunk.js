(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{12:function(e,s,c){},14:function(e,s,c){},15:function(e,s,c){"use strict";c.r(s);var a=c(1),t=c(6),i=c.n(t),n=(c(12),c(3)),r=c(0),l=function(e){var s=e.data;if(s)var c=s.name,a=s.occupation,t=s.description,i=(s.address.city,s.social.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.url,children:Object(r.jsx)("i",{className:e.className})})},e.name)})));return Object(r.jsxs)("header",{id:"home",children:[Object(r.jsxs)("nav",{id:"nav-wrap",children:[Object(r.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(r.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(r.jsxs)("ul",{id:"nav",className:"nav",children:[Object(r.jsx)("li",{className:"current",children:Object(r.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#edu",children:"Education"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#wrk",children:"Work"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(r.jsx)("div",{className:"row banner",children:Object(r.jsxs)("div",{className:"banner-text",children:[Object(r.jsxs)("h1",{className:"responsive-headline",children:["I'm ",c,"."]}),Object(r.jsxs)("h3",{children:["I'm a ",Object(r.jsx)("span",{children:a}),". ",t,"."]}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{className:"social",children:i})]})}),Object(r.jsx)("p",{className:"scrolldown",children:Object(r.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(r.jsx)("i",{className:"icon-down-circle"})})})]})},o=function(e){var s=e.data,c=null;return s&&(c=s.social.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.url,children:Object(r.jsx)("i",{className:e.className})})},e.name)}))),Object(r.jsx)("footer",{children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"twelve columns",children:[Object(r.jsx)("ul",{className:"social-links",children:c}),Object(r.jsxs)("ul",{className:"copyright",children:[Object(r.jsxs)("li",{children:["\xa9 Copyright ",(new Date).getFullYear()," Umair Karel"]}),Object(r.jsxs)("li",{children:["Design by"," ",Object(r.jsx)("a",{href:"https://github.com/umairkarel",children:"umairkarel"})]})]})]}),Object(r.jsx)("div",{id:"go-top",children:Object(r.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(r.jsx)("i",{className:"icon-up-open"})})})]})})},d=c.p+"static/media/profilepic.994ea6e6.png",j=c.p+"static/media/resume.5f7cea61.pdf",m=function(e){var s=e.data;if(s)var c=s.name,a=s.address.street,t=s.address.city,i=s.address.state,n=s.address.zip,l=s.phone,o=s.email,m=s.about;return Object(r.jsx)("section",{id:"about",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"three columns",children:Object(r.jsx)("img",{className:"profile-pic",src:d,alt:"Profile Pic"})}),Object(r.jsxs)("div",{className:"nine columns main-col",children:[Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:m}}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"columns contact-details",children:[Object(r.jsx)("h2",{children:"Contact Details"}),Object(r.jsxs)("p",{className:"address",children:[Object(r.jsx)("span",{children:c}),Object(r.jsxs)("span",{children:[a,Object(r.jsx)("br",{}),t," ",i,", ",n]}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:l}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"mailto:".concat(o,"?subject=The%20subject%20of%20the%20mail"),children:o})})]})]}),Object(r.jsx)("div",{className:"columns download",children:Object(r.jsxs)("p",{children:[console.log(j),Object(r.jsxs)("a",{href:j,target:"_blank",rel:"noopener noreferrer",className:"button",children:[Object(r.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})]})})]})]})]})})},h=function(e){var s=e.data,c=null,a=null;return s&&(c=s.education.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:e.school}),Object(r.jsxs)("p",{className:"info",children:[e.degree," ",Object(r.jsx)("span",{children:"\u2022"})," ",e.specialization,e.specialization?Object(r.jsx)("span",{children:"\u2022"}):null,Object(r.jsx)("em",{className:"date",children:e.graduated})]})]},e.school)})),a=s.work.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:e.company}),Object(r.jsxs)("p",{className:"info",children:[e.title,Object(r.jsx)("span",{children:"\u2022"})," ",Object(r.jsx)("em",{className:"date",children:e.years})]}),e.description&&e.description.map((function(e,s){return Object(r.jsx)("p",{children:e},s)}))]},e.title)}))),Object(r.jsxs)("section",{id:"resume",children:[Object(r.jsxs)("div",{className:"row education",id:"edu",children:[Object(r.jsx)("div",{className:"three columns header-col",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Education"})})}),Object(r.jsx)("div",{className:"nine columns main-col",children:Object(r.jsx)("div",{className:"row item",children:Object(r.jsx)("div",{className:"twelve columns",children:c})})})]}),Object(r.jsxs)("div",{className:"row work",id:"wrk",children:[Object(r.jsx)("div",{className:"three columns header-col",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Work"})})}),Object(r.jsx)("div",{className:"nine columns main-col",children:a})]}),Object(r.jsxs)("div",{className:"row skill",id:"ski",children:[Object(r.jsx)("div",{className:"three columns header-col",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Skills"})})}),Object(r.jsx)("div",{className:"nine columns main-col",children:Object(r.jsx)("section",{id:"four",className:"skills",children:Object(r.jsxs)("div",{className:"languages skills show-on-scroll",children:[Object(r.jsx)("i",{className:"devicon-python-plain technology"}),Object(r.jsx)("i",{className:"devicon-javascript-plain colored technology"}),Object(r.jsx)("i",{className:"devicon-django-plain colored technology"}),Object(r.jsx)("i",{className:"devicon-flask-plain colored technology"}),Object(r.jsx)("i",{className:"devicon-nodejs-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-express-original colored technology"}),Object(r.jsx)("i",{className:"devicon-react-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-numpy-plain colored technology"}),Object(r.jsx)("i",{className:"devicon-java-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-bootstrap-plain-wordmark technology"}),Object(r.jsx)("i",{className:"devicon-css3-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-html5-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-docker-plain-wordmark technology"}),Object(r.jsx)("i",{className:"devicon-postgresql-plain-wordmark  technology"}),Object(r.jsx)("i",{className:"devicon-mongodb-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-mysql-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-redis-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-github-original technology"}),Object(r.jsx)("i",{className:"devicon-amazonwebservices-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-nginx-plain-wordmark colored technology"}),Object(r.jsx)("i",{className:"devicon-git-plain-wordmark colored technology"})]})})})]})]})},b=c(2),u=c(4),p=function(e){return Object.keys(e).map((function(s){return encodeURIComponent(s)+"="+encodeURIComponent(e[s])})).join("&")},x=function(e){var s=e.data,c=Object(a.useState)({name:"",email:"",message:""}),t=Object(n.a)(c,2),i=t[0],l=t[1],o=function(e){l(Object(u.a)(Object(u.a)({},i),{},Object(b.a)({},e.target.name,e.target.value)))};if(s)var d=s.name,j=s.address.street,m=s.address.city,h=s.address.state,x=s.address.zip,O=s.phone,g=s.email,v=s.contactmessage;return Object(r.jsxs)("section",{id:"contact",children:[Object(r.jsxs)("div",{className:"row section-head",children:[Object(r.jsx)("div",{className:"two columns header-col",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Get In Touch."})})}),Object(r.jsx)("div",{className:"ten columns",children:Object(r.jsx)("p",{className:"lead",children:v})})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"eight columns",children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:p(Object(u.a)({"form-name":"contact-me"},i))}).then((function(){alert("Your message was successfully sent!"),l({name:"",email:"",message:""})})).catch((function(e){return alert(e)}))},children:Object(r.jsxs)("fieldset",{children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(r.jsx)("span",{className:"required",children:"*"})]}),Object(r.jsx)("input",{type:"text",size:"35",id:"contactName",name:"name",value:i.name,required:!0,onChange:o})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(r.jsx)("span",{className:"required",children:"*"})]}),Object(r.jsx)("input",{type:"email",size:"35",id:"contactEmail",name:"email",value:i.email,required:!0,onChange:o})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(r.jsx)("span",{className:"required",children:"*"})]}),Object(r.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"message",value:i.message,required:!0,onChange:o})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"submit",className:"submit",children:"Submit"}),Object(r.jsx)("span",{id:"image-loader",children:Object(r.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})})}),Object(r.jsx)("aside",{className:"four columns footer-widgets",children:Object(r.jsxs)("div",{className:"widget widget_contact",children:[Object(r.jsx)("h4",{children:"Address and Phone"}),Object(r.jsxs)("p",{className:"address",children:[d,Object(r.jsx)("br",{}),j," ",Object(r.jsx)("br",{}),m,", ",h," ",x,Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:O}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"mailto:".concat(g,"?subject=The%20subject%20of%20the%20mail"),children:g})})]})]})})]})]})},O=c.p+"static/media/project1.9ba7e97a.gif",g=c.p+"static/media/project2.493ec6f3.gif",v=c.p+"static/media/project5.c5c778f2.gif",f=function(){return Object(r.jsx)("section",{id:"portfolio",children:Object(r.jsx)("div",{className:"row projects",children:Object(r.jsxs)("div",{className:"twelve columns collapsed",children:[Object(r.jsx)("h1",{children:"Check Out Some of My Works."}),Object(r.jsxs)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:[Object(r.jsx)("div",{className:"article-wrapper",children:Object(r.jsxs)("article",{className:"col-12 col-12-xsmall work-item",children:[Object(r.jsx)("a",{href:"https://github.com/umairkarel/Sorting-Visualizer",className:"image fit thumb",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:O,alt:"Sorting-Visualizer"})}),Object(r.jsxs)("div",{className:"art-description",children:[Object(r.jsxs)("div",{className:"text-wrapper",children:[Object(r.jsx)("h3",{children:"Sorting Algorithms Visualizer"}),Object(r.jsxs)("p",{children:["A application to visualize various sorting algorithm's."," ",Object(r.jsx)("br",{}),'"Unlock the magic of sorting algorithms visually - enhancing understanding one step at a time!"']})]}),Object(r.jsxs)("ul",{className:"actions",children:[Object(r.jsx)("div",{className:"actions-wrapper",children:Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"https://github.com/umairkarel/Sorting-Visualizer",className:"button project-button brands",target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsx)("i",{className:"fa fa-github icon"}),"View Source"]})})}),Object(r.jsx)("div",{className:"languages",children:Object(r.jsx)("i",{className:"devicon-python-plain technology"})})]})]})]})}),Object(r.jsx)("div",{className:"article-wrapper",children:Object(r.jsxs)("article",{className:"col-12 col-12-xsmall work-item",children:[Object(r.jsx)("a",{href:"https://github.com/umairkarel/GreenMile",className:"image fit thumb",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:g,alt:"green-mile"})}),Object(r.jsxs)("div",{className:"art-description",children:[Object(r.jsxs)("div",{className:"text-wrapper",children:[Object(r.jsx)("h3",{children:"Hand Written Digit Recognizer"}),Object(r.jsx)("p",{children:"Handwritten Digit recognizer implemented from complete scratch using self-coded neural network."})]}),Object(r.jsxs)("ul",{className:"actions",children:[Object(r.jsx)("div",{className:"actions-wrapper",children:Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"https://github.com/umairkarel/Machine-Learning/tree/master/Projects/Hand-Written-Digit-Recognizer",className:"button project-button brands",target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsx)("i",{className:"fa fa-github icon"}),"View Source"]})})}),Object(r.jsxs)("div",{className:"languages",children:[Object(r.jsx)("i",{className:"devicon-python-plain technology"}),Object(r.jsx)("i",{className:"devicon-numpy-plain technology"})]})]})]})]})}),Object(r.jsx)("div",{className:"article-wrapper",children:Object(r.jsxs)("article",{className:"col-12 col-12-xsmall work-item",children:[Object(r.jsx)("a",{href:"https://github.com/umairkarel/Smart-Water",className:"image fit thumb",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:v,alt:"smart-water"})}),Object(r.jsxs)("div",{className:"art-description",children:[Object(r.jsxs)("div",{className:"text-wrapper",children:[Object(r.jsx)("h3",{children:"8 Puzzle Solver"}),Object(r.jsxs)("p",{children:["8 Puzzle game along with the solver feature that uses \ud835\uddd4* \ud835\ude00\ud835\uddf2\ud835\uddee\ud835\uddff\ud835\uddf0\ud835\uddf5 \ud835\uddee\ud835\uddf9\ud835\uddf4\ud835\uddfc\ud835\uddff\ud835\uddf6\ud835\ude01\ud835\uddf5\ud835\uddfa to solve any(valid) instance of the game.",Object(r.jsx)("br",{}),"It shows step by step solution to the user."]})]}),Object(r.jsxs)("ul",{className:"actions",children:[Object(r.jsx)("div",{className:"actions-wrapper",children:Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"https://github.com/umairkarel/8-Puzzle-Solver",className:"button project-button brands",target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsx)("i",{className:"fa fa-github icon"}),"View Source"]})})}),Object(r.jsx)("div",{className:"languages",children:Object(r.jsx)("i",{className:"devicon-python-plain technology"})})]})]})]})}),Object(r.jsx)("ul",{className:"actions",children:Object(r.jsx)("li",{className:"wide-button",children:Object(r.jsx)("a",{href:"https://github.com/umairkarel",className:"button portfolio-button",target:"_blank",rel:"noopener noreferrer",children:"Full Portfolio"})})})]})]})})})},N=c(7),w=(c(14),function(){var e=Object(a.useState)(N),s=Object(n.a)(e,1)[0];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{data:s.main}),Object(r.jsx)(m,{data:s.main}),Object(r.jsx)(h,{data:s.resume}),Object(r.jsx)(f,{data:s.portfolio}),Object(r.jsx)(x,{data:s.main}),Object(r.jsx)(o,{data:s.main})]})});i.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"main":{"name":"Umair Karel","occupation":"Backend Developer","description":"I thrive on transforming concepts into code, turning imagination into reality.","contactmessage":"Have me make stuff for you. If you like my work and have some cool projects to work on, just send me a direct message or contact me through social sites.","email":"umair.karel@gmail.com","phone":"+91 9370621692","about":"<p>Strong in design and integration with intuitive problem-solving skills. Proficient in MERN Stack Development, (Highest Rating 1879 [4\u2b50]) on CodeChef, (max. specialist, 1476) on Codeforces, ACM ICPC Regionalist \'20. <br /><br />Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>","address":{"city":"Mangaon, Raigad","state":"MH","zip":"402102"},"website":"/","resumedownload":"https://drive.google.com/file/d/1761iQz_zaKeO6-vt2Duepa3HQW6cb_pv/view?usp=sharing","social":[{"name":"linkedin","url":"https://www.linkedin.com/in/umairkarel/","className":"fa fa-linkedin"},{"name":"github","url":"https://github.com/umairkarel","className":"fa fa-github"},{"name":"email","url":"mailto:umair.karel@gmail.com?subject=The%20subject%20of%20the%20mail","className":"fa fa-envelope"}]},"resume":{"education":[{"school":"Dr. Babasaheb Ambedkar Technological University","degree":"B. Tech","specialization":"Computer Science","graduated":"2019-2023"},{"school":"S.S Nikam English School and Junior Science College","degree":"Higher Secondary","specialization":"Science","graduated":"2017-2019"}],"work":[{"company":"Sarvaha Systems Pvt. Ltd.","title":"Software Engineer","years":"July 2023 - Present","description":["\u2022 Working on HIDS system, Responsible for re-engineering and developing front-end & back-end for the existing HIDS system to achieve customized features.","\u2022 Worked on machine learning-driven solution to forecast stock market indices, utilized advanced ML techniques including bagging, stacking, and meta-labelling.","\u2022 Achieved good predictive accuracy by incorporating diverse features, including historical prices, prices of top influential stocks, and external factors into the modeling process."]},{"company":"Sarvaha Systems Pvt. Ltd.","title":"Software Engineering Intern","years":"Jan 2023 - June 2023","description":["\u2022 Designed and implemented a production-ready microservice using Flask to scrape data from websites and store it in a MongoDB database. This API leveraged containerization for improved deployment and scalability.","\u2022 Integrated Celery and Redis to handle scraping tasks asynchronously, enhancing API performance by offloading time-consuming tasks.","\u2022 Integrated cron functionality to automate data scraping at regular intervals, ensuring up-to-date information retrieval every 24 hours without manual intervention.","\u2022 Enforced best practices throughout the project by employing Poetry dependency management, linter and formatter with automated enforcement via git commit hooks."]},{"company":"Medpiper Technologies Pvt. Ltd.","title":"Backend Developer (Python)","years":"Oct 2021 - Apr 2022","description":["\u2022 Led the Engineering and maintenance of the Backend for two projects , JournoMed and CRM, using Django and Flask frameworks.","\u2022 Implemented REST APIs using both PostgreSQL and MongoDB as databases with the latest database design and management practices.","\u2022 Documented all API endpoints to ensure smooth and efficient communication across the team."]}]}}')}},[[15,1,2]]]);
//# sourceMappingURL=main.5ce122e9.chunk.js.map