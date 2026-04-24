@media (max-width: 768px) {
  nav {
    margin-left: 0;
    justify-content: flex-end;
    flex-wrap: nowrap;
    gap: 8px;
  }

  nav a {
    font-size: 13px;
    white-space: nowrap;
  }

  .lang-wrapper {
    flex-shrink: 0;
  }
}
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Playfair Display',serif;
scroll-behavior:smooth;
}

body{
background:#0a0a0a;
color:#fff;
}

/* HEADER */
header{
  position:fixed;
  top:0;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:2px 25px;
  height: 60px; /* vaste hoogte = strakker resultaat */
  background:rgba(0,0,0,0.85);
  backdrop-filter:blur(7px);
  z-index:1000;
  overflow: visible;
}

/* LINKS (logo + tekst) */
.left{
  display:flex;
  align-items:center;
  gap:12px;
}

/* LOGO half uit header */
.logo img{
  width:90px;
  height:90px;
  border-radius:50%;

  transform: translateY(20px); /* iets minder hoog laten steken */

  border:3px solid gold;

  box-shadow: 0 12px 25px rgba(0,0,0,0.5);
}

/* merknaam */
.brand{
  color:white;
  font-weight:600;
  font-size:16px;
}

/* duwt alles naar rechts vanaf hier */
nav{
  margin-left:auto;
  display:flex;
  align-items:center;
}

.brand{
  font-family: 'Montserrat', sans-serif;
  font-size:18px;
  font-weight:700;
  color: gold;
  text-transform:uppercase;

  letter-spacing: 1px; /* 👈 dit doet het effect */
}

/* taal ernaast houden */
.lang-wrapper{
  margin-left:15px;
  display:flex;
  align-items:center;
}

nav a{
color:#bbb;
margin-left:12px;
text-decoration:none;
transition:0.3s;
}

nav a:hover{
color:gold;
transform:translateY(-2px);
}

/* HERO */

/* 📱 Mobiel (zoals je nu hebt) */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding-top: 320px;

  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.0)),
              url("images/images/bg.jpg") center/cover no-repeat;
}

/* 💻 Desktop */
@media (min-width: 768px) {
  .hero {
    align-items: center;   /* centeren */
    padding-top: 0;        /* padding weg */
  }
}
.hero h1{
color:gold;
font-size:3.2rem;
}

.hero p{
color:#ccc;
margin-top:10px;
}

/* BUTTON */
.btn{
background:gold;
padding:12px 22px;
color:black;
border-radius:6px;
text-decoration:none;
display:inline-block;
margin-top:15px;
transition:0.3s;
}

.btn:hover{
transform:scale(1.05);
box-shadow:0 10px 25px rgba(255,215,0,0.4);
}

/* SOCIAL */
.container{
display:flex;
justify-content:center;
gap:12px;
margin:40px 0;
flex-wrap:wrap;
}

.container a{
display:flex;
align-items:center;
height:60px;
width:60px;
background:white;
border-radius:50px;
overflow:hidden;
cursor:pointer;
transition:0.4s ease;
text-decoration:none;
color:black;
box-shadow:0 8px 20px rgba(0,0,0,0.2);
}

.container a:hover{
width:200px;
transform:translateY(-6px);
box-shadow:0 15px 35px rgba(255,215,0,0.45);
}

.container a .icon{
width:60px;
display:flex;
justify-content:center;
align-items:center;
}

.container a span{
padding-left:10px;
font-weight:700;
}


.section h2{
color:gold;
margin-bottom:30px;
font-size:2rem;
}

/* CARDS */
.grid{
display:grid;
gap:20px;
max-width:1100px;
margin:auto;
}

@media(min-width:768px){
.grid{grid-template-columns:repeat(3,1fr);}
}

.card{
height:280px;
cursor:pointer;
perspective:1000px;
transition:0.3s;
}

.card:hover{
transform:translateY(-10px);
filter:drop-shadow(0 15px 30px rgba(255,215,0,0.35));
}

.card-inner{
position:relative;
width:100%;
height:100%;
transition:transform 0.8s;
transform-style:preserve-3d;
}

.card.flipped .card-inner{
transform:rotateY(180deg);
}

.card-front,.card-back{
position:absolute;
width:100%;
height:100%;
backface-visibility:hidden;
border-radius:15px;
overflow:hidden;
}

.card-front img{
width:100%;
height:100%;
object-fit:cover;
}

.overlay{
position:absolute;
bottom:0;
width:100%;
padding:15px;
background:linear-gradient(to top,rgba(0,0,0,0.85),transparent);
}

.overlay h3{
color:gold;
}

/* BACK */
.card-back{
background:#111;
transform:rotateY(180deg);
display:flex;
align-items:center;
justify-content:center;
padding:20px;
text-align:center;
border:1px solid rgba(255,215,0,0.2);
}

.card-back h3{
color:gold;
margin-bottom:10px;
}

/* HALAL */
.halal-section{
padding:120px 20px;
}

.halal-text{
max-width:750px;
margin:0 auto 30px auto;
color:#ccc;
line-height:1.6;
}

.halal-list{
max-width:800px;
margin:auto;
display:flex;
flex-direction:column;
gap:15px;
}

.halal-item{
display:flex;
gap:15px;
align-items:flex-start;
background:#111;
padding:18px;
border-radius:12px;
border:1px solid rgba(255,215,0,0.15);
transition:0.3s;
}

.halal-item:hover{
transform:translateX(8px);
box-shadow:0 12px 30px rgba(255,215,0,0.25);
}

.halal-item i{
color:gold;
font-size:22px;
min-width:25px;
}

/* FORM */
form{
max-width:520px;
margin:auto;
display:flex;
flex-direction:column;
gap:12px;
}

.form-row{
display:flex;
align-items:center;
gap:10px;
background:#111;
padding:12px;
border-radius:10px;
border:1px solid rgba(255,215,0,0.1);
transition:0.3s;
}

.form-row:hover{
box-shadow:0 10px 25px rgba(255,215,0,0.15);
transform:scale(1.01);
}

.form-row i{
color:gold;
min-width:20px;
}

input,select,textarea{
width:100%;
background:transparent;
border:none;
color:white;
outline:none;
}

/* BUTTON */
button{
background:gold;
padding:12px;
border:none;
cursor:pointer;
font-weight:bold;
transition:0.3s;
}

button:hover{
transform:scale(1.03);
box-shadow:0 10px 25px rgba(255,215,0,0.4);
}

/* WHATSAPP FLOAT */
.whatsapp{
position:fixed;
bottom:0px;
right:0px;
background:#25D366;
padding:12px 14px;
border-radius:50px;
color:white;
text-decoration:none;
}

/* FOOTER */
footer{
text-align:center;
padding:30px;
color:#777;
font-size:14px;
}

/* CONTACT SECTION */
.contact-section{
text-align:center;
margin-top:25px;
}

.contact-section h3{
color:gold;
margin-bottom:12px;
font-size:16px;
}

.contact-icons{
display:flex;
justify-content:center;
align-items:center;
gap:15px;
}

/* CONTACT ITEM (FIXED & CLEAN) */
.contact-item{
width:55px;
height:55px;
border-radius:55%;
display:flex;
align-items:center;
justify-content:center;
position:relative;
text-decoration:none;
color:white;
transition:0.3s ease;
}

/* ICON CENTER FIX */
.contact-item i{
font-size:27px;
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100%;
}

/* COLORS */
.contact-item.tiktok{
background:#000;
}

.contact-item.instagram{
background:radial-gradient(circle at 30% 30%, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
}

.contact-item.whatsapp{
background:#25D366;
}

/* HOVER */
.contact-item:hover{
transform:translateY(-8px) scale(1.1);
filter:brightness(1.2);
box-shadow:0 10px 25px rgba(255,215,0,0.4);
}

/* TOOLTIP */
.contact-item::after{
content:attr(data-name);
position:absolute;
bottom:-28px;
background:black;
color:gold;
padding:4px 8px;
font-size:12px;
border-radius:5px;
opacity:0;
transition:0.3s;
pointer-events:none;
white-space:nowrap;
}

.contact-item:hover::after{
opacity:1;
bottom:-35px;
}

.lang-wrapper{
position:relative;
}

.lang-btn{
background:#111;
border:1px solid gold;
color:white;
padding:8px 12px;
border-radius:50px;
cursor:pointer;
display:flex;
align-items:center;
gap:8px;
transition:0.3s;
}

.lang-btn:hover{
transform:scale(1.05);
box-shadow:0 10px 25px rgba(255,215,0,0.3);
}

.lang-menu{
position:absolute;
right:0;
top:45px;
background:#111;
border:1px solid gold;
border-radius:12px;
overflow:hidden;
display:none;
min-width:180px;
z-index:999;
}

.lang-menu.active{
display:block;
}

.lang-option{
padding:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:10px;
transition:0.2s;
}

.lang-option:hover{
background:gold;
color:black;
}

.lang-option span{
font-size:18px;
}

.section{
  max-width:1200px;
  margin:auto;
}





section{
  opacity:0.2;
  transform:scale(0.96);
  filter:blur(6px);
  transition: all 0.7s cubic-bezier(.2,.8,.2,1);
}

section.active{
  opacity:1;
  transform:scale(1);
  filter:blur(0);
}

section{
  opacity:0.2;
  transform:scale(0.96);
  filter:blur(6px);
  transition: all 0.7s cubic-bezier(.2,.8,.2,1);
}

section.active{
  opacity:1;
  transform:scale(1);
  filter:blur(0);
}






































/* From Uiverse.io by yeisonordonez */ 
.container {
  position: absolute;
  width: 380px;
  height: 380px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.car-container {
  position: absolute;
  width: 380px;
  height: 380px;
}

.car {
  position: absolute;
  width: 220px;
  height: 110px;
  background-color: #911717;
  left: 30px;
  top: 150px;
  clip-path: polygon(6% 0%, 80% 0%, 100% 50%, 100% 100%, 0% 100%);
}

.car::before {
  content: "";
  position: absolute;
  width: 220px;
  height: 45px;
  background-color: #ba1c1c;
  left: 0px;
  top: 5px;
  border-top: 4px solid #630909;
  border-bottom: 2px solid #630909;
}

.car::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 110px;
  background-color: #630909;
  left: 140px;
  top: 5px;
  transform: rotate(3deg);
  box-shadow:
    -65px 5px #630909,
    78px 5px #630909;
}

.front-part {
  position: absolute;
  width: 100px;
  height: 55px;
  background-color: #911717;
  right: 30px;
  top: 205px;
  clip-path: polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%);
}

.front-part2 {
  position: absolute;
  width: 100px;
  height: 10px;
  background-color: rgb(154, 11, 11);
  right: 30px;
  transform: rotate(6.3deg);
  top: 212px;
  border-bottom: 2px solid #630909;
}
.front-part2::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 8px;
  background-color: rgba(251, 243, 205, 0.686);
  right: 22px;
  top: -4px;
  box-shadow: inset 0px -3px #000000c9;
}

.front-part2::before {
  content: "";
  position: absolute;
  width: 95px;
  height: 5px;
  background-color: #d41111;
  top: -5px;
  border-radius: 50% 50% 0% 0%;
}

.front-part3 {
  position: absolute;
  background-color: #3d090965;
  width: 320px;
  height: 30px;
  bottom: 120px;
  left: 30px;
  box-shadow: inset 0px 12px rgba(252, 72, 72, 0.147);
}

.front-part3::before {
  content: "";
  position: absolute;
  background-color: #f984843b;
  width: 220px;
  height: 8px;
  bottom: 46px;
  left: 0px;
}

.bottom-part {
  position: absolute;
  width: 320px;
  height: 20px;
  background-color: #630909;
  left: 30px;
  top: 260px;
}

.bottom-part::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 25px;
  background-color: #864343;
  left: -8px;
  top: -5px;
  border-radius: 5px 0px 0px 10px;
  box-shadow:
    inset -5px -8px rgba(0, 0, 0, 0.409),
    inset -5px 3px rgba(255, 255, 255, 0.324);
}

.wheel-container {
  position: absolute;
  width: 100px;
  height: 46px;
  background-color: black;
  left: 40px;
  top: 234px;
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  box-shadow: 100px 0px;
}

.wheel-container2 {
  left: 235px;
}

.wheel-back {
  position: absolute;
  background-color: rgb(33, 9, 9);
  width: 30px;
  height: 70px;
  left: 6px;
  top: 175px;
  border-radius: 8px;
  transform: rotate(4deg);
  box-shadow:
    inset 6px -1px 0px -2px rgb(101, 101, 101),
    inset 0px 5px rgb(96, 96, 96),
    inset 0px 30px 0px -4px #2b2b2b;
}

.wheel-break {
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  background-color: rgb(183, 189, 211);
  bottom: 25px;
  left: 25px;
}

.wheel-break::after {
  content: "";
  position: absolute;
  background-color: rgb(183, 0, 0);
  width: 8px;
  height: 15px;
  right: -1px;
  top: 8px;
  border-radius: 0% 100% 100% 0% / 0% 50% 50% 0%;
}

.wheel-break::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
  top: 3.5px;
  left: 3.5px;
  border: 4px solid rgb(90, 100, 134);
}

.wheel-break2 {
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  background-color: rgb(183, 189, 211);
  bottom: 25px;
  left: 25px;
}

.wheel-break2::after {
  content: "";
  position: absolute;
  background-color: rgb(183, 0, 0);
  width: 10px;
  height: 25px;
  left: -2px;
  top: 3px;
  border-radius: 100% 0% 0% 100% / 50% 0% 0% 50%;
}

.wheel-break2::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
  top: 3.5px;
  left: 3.5px;
  border: 4px solid rgb(90, 100, 134);
}

.window {
  width: 55px;
  height: 40px;
  position: absolute;
  background-color: black;
  top: 160px;
  left: 45px;
  transform: skew(-5deg);
  border-radius: 6px;
  box-shadow: inset 0px 0px 0px 2px rgb(61, 61, 61);
}

.window::before {
  content: "";
  width: 48px;
  height: 40px;
  position: absolute;
  background-color: black;
  top: 0px;
  left: 72px;
  border-radius: 6px;
  box-shadow: inset 0px 0px 0px 2px rgb(61, 61, 61);
}

.window::after {
  content: "";
  width: 30px;
  height: 40px;
  position: absolute;
  background-color: black;
  top: 0px;
  left: 132px;
  border-radius: 6px 6px 0px 6px;
  box-shadow:
    inset 2px 0px rgb(61, 61, 61),
    inset 0px 2px rgb(61, 61, 61);
}

.window2 {
  width: 53px;
  height: 20px;
  position: absolute;
  background-color: black;
  top: 180px;
  left: 180px;
  border-radius: 0% 100% 10% 0% / 0% 80% 10% 4%;
  box-shadow: inset 0px -2px rgb(61, 61, 61);
}

.window2::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 42px;
  background-color: black;
  top: -18px;
  right: 11px;
  transform: rotate(-37deg);
  border-radius: 0% 10% 0% 100%;
  box-shadow: inset -2px 0px rgb(61, 61, 61);
}

.window2::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 36px;
  background-color: rgb(60, 60, 61);
  top: -18px;
  right: 25px;
  transform: skew(37deg);
  box-shadow:
    -60px 0px rgb(60, 60, 61),
    -130px 0px rgb(60, 60, 61);
}

.window3 {
  width: 4px;
  height: 25px;
  position: absolute;
  background-color: #bbbcbc52;
  top: 173px;
  left: 189px;
  transform: skew(38deg);
  box-shadow:
    -60px 0px #bbbcbc52,
    -129px -1px #bbbcbc52;
}

.window3::before {
  content: "";
  width: 3px;
  height: 55px;
  position: absolute;
  background-color: black;
  top: -22px;
  left: 42px;
}

.details {
  position: absolute;
  width: 60px;
  height: 4px;
  background-color: black;
  top: 220px;
  left: 40px;
  box-shadow: 150px 0px;
}

.details::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 4px;
  background-color: black;
  top: 0px;
  right: -70px;
  box-shadow:
    15px 45px 0px 0px #6f6f6f,
    70px 45px 0px 0px #6f6f6f,
    50px 45px 0px 0px #6f6f6f,
    20px 50px 0px 1px #3b3b3b,
    66px 50px 0px 1px #3b3b3b,
    20px 50px 0px 5px,
    66px 50px 0px 5px;
}

.details::after {
  content: "";
  position: absolute;
  width: 70px;
  height: 4px;
  background-color: black;
  right: -230px;
  transform: rotate(5deg);
  bottom: -3px;
}

.details2 {
  position: absolute;
  width: 60px;
  height: 8px;
  background-color: #c42525;
  top: 228px;
  left: 60px;
  box-shadow: 195px 2px #c42525;
  border-radius: 17% 18% 26% 26% / 100% 100% 0% 0%;
}

.details2::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 54px;
  background-color: #c42525;
  transform: rotate(24deg);
  left: -8.7px;
  box-shadow: 178.1px -79px #c42525;
}

.details2::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 54px;
  background-color: #9c1717;
  transform: rotate(-24deg);
  left: 65px;
  box-shadow: 178.1px 79px #9c1717;
}

.details4 {
  position: absolute;
  width: 50px;
  height: 3px;
  background-color: #f75f5f8c;
  top: 233px;
  left: 64px;
  box-shadow: 195px 2px #f75f5f8c;
  border-radius: 17% 18% 26% 26% / 100% 100% 0% 0%;
}

.details4::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 50px;
  background-color: #f75f5f8c;
  transform: rotate(24deg);
  left: -11px;
  top: -2px;
  box-shadow: 178.1px -77px 0px -0.5px #f75f5f8c;
}

.details4::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 50px;
  background-color: #f75f5f8c;
  transform: rotate(-24deg);
  left: 60px;
  top: -2px;
  box-shadow: 177px 81px #f75f5f8c;
}

.details3 {
  position: absolute;
  width: 20px;
  height: 15px;
  background-color: black;
  bottom: 175px;
  right: 146px;
  box-shadow:
    inset 0px 2px #424141,
    inset -2px 0px #1d1515,
    inset 0px 10px rgb(37, 37, 37);
  border-radius: 4px 4px 0px 4px;
}

.details3::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.858);
  left: -41px;
  top: 30px;
  box-shadow: -67px 0px;
}

.details3::after {
  position: absolute;
  content: "";
  width: 2px;
  height: 2px;
  background-color: rgba(179, 178, 178, 0.858);
  left: -41px;
  top: 30px;
  box-shadow: -67px 0px rgb(167, 167, 167);
}

.bumper {
  position: absolute;
  width: 20px;
  height: 35px;
  background-color: black;
  bottom: 100px;
  right: 23px;
  border-radius: 0% 20% 20% 0%;
  box-shadow: inset -4px 0px rgb(79, 79, 79);
}

.bumper::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: rgb(105, 105, 105);
  box-shadow: 0px 14px 0px -0.3px rgba(251, 251, 251, 0.315);
}

.bumper::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 25px;
  background-color: rgb(69, 69, 69);
  rotate: 8deg;
  top: 3px;
  left: -2px;
}

.bumper2 {
  position: absolute;
  width: 25px;
  height: 5px;
  background-color: rgb(39, 39, 39);
  bottom: 101px;
  right: 23px;
  rotate: 5deg;
}

.bumper2::before {
  content: "";
  position: absolute;
}

.details5 {
  position: absolute;
  width: 100px;
  height: 2px;
  background-color: rgb(187, 187, 187);
  bottom: 107px;
  left: 138px;
}

.details5::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.096);
  top: -80px;
  left: -125px;
  transform: rotate(5deg);
  box-shadow:
    inset 0px -3px rgba(255, 255, 255, 0.24),
    0px 40px 0px 1px black;
}

.details5::after {
  content: "";
  position: absolute;
  width: 170px;
  height: 1px;
  background-color: rgb(0, 0, 0);
  top: -120px;
  left: -98px;
  box-shadow: 0px -2px 0px 1px;
}

.wheel-logo {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 1px 4px 1px;
  border-color: transparent transparent white transparent;
  z-index: 1;
  transform: scale(1);
}

.wheel-logo::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 1px 4px 1px;
  border-color: transparent transparent white transparent;
  transform: rotate(-65deg);
  right: 1px;
}

.wheel-logo::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 1px 4px 1px;
  border-color: transparent transparent white transparent;
  transform: rotate(65deg);
  left: 1px;
}

.head-lights {
  position: absolute;
  width: 16px;
  height: 20px;
  background-color: rgb(212, 207, 166);
  left: 334px;
  bottom: 140px;
  box-shadow:
    inset 3px 0px #840f0f,
    inset -5px 0px #9a4e4e,
    inset -5px 0px #ad2121;
}

.head-lights::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 15px;
  background-color: #840f0f;
  left: 11px;
  bottom: 0px;
}

.head-lights::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #840f0f86;
  left: 3px;
  bottom: 0px;
  box-shadow: -1px -13px 0px -1px rgba(254, 254, 235, 0.568);
}

.tail-lights {
  position: absolute;
  width: 4px;
  height: 10px;
  background-color: rgb(252, 3, 3);
  right: 348px;
  bottom: 125px;
  box-shadow: inset -2px 0px rgb(214, 0, 0);
}

.tail-lights::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 16px;
  background-color: rgba(255, 0, 0, 0.288);
  left: -4px;
}

.extra-lighting-details {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.712);
  height: 1.5px;
  width: 50px;
  bottom: 145px;
  left: 65px;
  box-shadow: 195px 2px rgba(255, 255, 255, 0.712);
}

.extra-lighting-details::before {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0.288);
  height: 2px;
  width: 115px;
  top: 10px;
  left: 65px;
  box-shadow: -30px -35px 0px 1px rgba(255, 255, 255, 0.205);
}

.extra-lighting-details::after {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0.568);
  height: 2px;
  width: 80px;
  top: -22px;
  left: 190px;
  rotate: 8deg;
  box-shadow: 0px -3px rgba(0, 0, 0, 0.349);
}

.extra-lighting-details2 {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.226);
  height: 12px;
  width: 10px;
  bottom: 165px;
  left: 220px;
  rotate: 15deg;
}

.extra-lighting-details2::before {
  content: "";
  position: absolute;
  background-color: rgba(0, 0, 0, 0.308);
  height: 8px;
  width: 10px;
  bottom: 5px;
  left: 0px;
  rotate: -15deg;
}

.extra-lighting-details3 {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.089);
  height: 45px;
  width: 5px;
  bottom: 175px;
  left: 100px;
  rotate: 5deg;
  box-shadow:
    10px 0px rgba(255, 255, 255, 0.144),
    65px -5px rgba(255, 255, 255, 0.144);
}

.extra-lighting-details3::before {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0.418);
  height: 1px;
  width: 25px;
  bottom: -33px;
  left: 240px;
  rotate: -5deg;
  box-shadow: 1px -12px rgba(255, 255, 255, 0.541);
}

.street {
  position: absolute;
  width: 600px;
  height: 450px;
  bottom: 0px;
  z-index: -1;
  overflow: hidden;
}

.line {
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: black;
  bottom: 62px;
}

.obstacles {
  position: absolute;
  width: 20px;
  height: 15px;
  background-color: black;
  border-radius: 40% 40% 0% 0%;
  bottom: 60px;
  left: 110%;
}

/*wheel*/
.wheel-ring {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  left: 10px;
  top: 10px;
  border: 6px solid rgb(34, 34, 34);
  box-shadow:
    0px 0px 0px 4px rgb(63, 63, 63),
    inset 0px 0px 0px 2px rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wheel-ring2 {
  left: 10px;
  top: 10px;
}

.container-wheel2 {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 60px;
  left: 245px;
}

.container-wheel1 {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 60px;
  left: 50px;
}

.wheel-center {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow:
    inset 0px 0px 0px 5px,
    inset 0px 0px 0px 6px rgb(191, 191, 191),
    inset 0px 0px 0px 12px black;
}

.wheel-center2 {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 1;
  border: 1px solid white;
}

.wheel-ring-stick {
  position: absolute;
  width: 4px;
  height: 18px;
  background-color: black;
  top: 32px;
  left: 19px;
  transform: rotate(15deg);
}

.wheel-ring-stick::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 18px;
  background-color: black;
  top: -2px;
  left: 8px;
  transform: rotate(-20deg);
}

.wheel-ring-stick2 {
  transform: rotate(82deg);
  left: 8px;
  top: 16px;
}

.wheel-ring-stick3 {
  left: 34px;
  top: 25px;
  transform: rotate(-55deg);
}

.wheel-ring-stick4 {
  top: 2px;
  left: 17px;
  transform: rotate(155deg);
}

.wheel-ring-stick5 {
  top: 7px;
  left: 36px;
  transform: rotate(225deg);
}

/*end of wheel*/

/*----AMIMATION-----*/

/*wheel*/
@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.wheel-ring1 {
  animation: spinning 1s linear infinite;
}

.wheel-ring2 {
  animation: spinning 1s linear infinite;
}

.container-wheel1 {
  animation: bounce1 3s infinite;
}

.container-wheel2 {
  animation: bounce2 3s infinite;
}

@keyframes bounce1 {
  0%,
  50% {
    transform: translateY(0px);
  }
  52% {
    transform: translateY(-5px);
  }
  65% {
    transform: translateY(0px);
  }
}

@keyframes bounce2 {
  0%,
  28% {
    transform: translateY(0px);
  }
  30% {
    transform: translateY(-5px);
  }
  45% {
    transform: translateY(0px);
  }
}
/*wheel-end*/

/*car-body*/
.car-container {
  animation: lift 3s infinite cubic-bezier(0.96, 0.5, 0.27, 0.55);
  transform-origin: center;
}

@keyframes lift {
  0%,
  30% {
    transform: rotate(0deg) translateY(0px);
  }
  32% {
    transform: rotate(-1.5deg) translateY(-2px);
  }
  48%,
  50% {
    transform: rotate(0deg) translateY(0px);
  }
  56.5% {
    transform: rotate(1deg) translateY(-1px);
  }
  68% {
    transform: rotate(0deg) translateY(0px);
  }
}

/*obstacle*/

.obstacles {
  animation: displacement 3s linear infinite;
}

@keyframes displacement {
  0% {
    left: 110%;
  }
  100% {
    left: -40%;
  }
}


.car-wrapper {
  position: absolute;
  top: 200px; /* 👈 hier omhoog */
  left: 1030px;
  width: 380px;
  height: 380px;
}
