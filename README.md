# my-website
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>流浪動物森林之家</title>

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Noto Sans TC',sans-serif;
}

body{
background:#fafaf7;
color:#444;
line-height:1.8;
}

/* 導覽列 */

nav{
position:fixed;
top:0;
width:100%;
background:white;
padding:18px 8%;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow:0 5px 15px rgba(0,0,0,.08);
z-index:999;
}

.logo{
font-size:28px;
font-weight:900;
color:#3c7b3d;
}

nav ul{
display:flex;
gap:25px;
list-style:none;
}

nav a{
text-decoration:none;
color:#555;
font-weight:700;
}

/* Hero */

.hero{

height:100vh;

background:
linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.35)),
url("images/hero.jpg");

background-size:cover;
background-position:center;

display:flex;
justify-content:center;
align-items:center;
text-align:center;
color:white;
padding:20px;

}

.hero h1{
font-size:58px;
margin-bottom:20px;
}

.hero p{
font-size:24px;
margin-bottom:35px;
}

.btn{

display:inline-block;

padding:18px 40px;

background:#ff8f00;

color:white;

border-radius:50px;

text-decoration:none;

font-size:22px;

font-weight:bold;

transition:.3s;

}

.btn:hover{

background:#ff6f00;

transform:scale(1.05);

}

section{

padding:90px 10%;

}

.title{

text-align:center;

font-size:42px;

color:#2e7d32;

margin-bottom:50px;

}

/* 故事 */

.story{

display:grid;

grid-template-columns:1fr 1fr;

gap:50px;

align-items:center;

}

.story img{

width:100%;

border-radius:20px;

}

/* 卡片 */

.cards{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:30px;

}

.card{

background:white;

border-radius:20px;

overflow:hidden;

box-shadow:0 10px 25px rgba(0,0,0,.08);

transition:.4s;

}

.card:hover{

transform:translateY(-10px);

}

.card img{

width:100%;

height:250px;

object-fit:cover;

}

.card h3{

padding:20px;

color:#388e3c;

}

.card p{

padding:0 20px 20px;

}

/* 救援成果 */

.stats{

display:flex;

justify-content:space-around;

flex-wrap:wrap;

text-align:center;

}

.stat{

margin:20px;

}

.number{

font-size:60px;

font-weight:bold;

color:#ff9800;

}

/* 捐款 */

.donate{

background:#2e7d32;

color:white;

text-align:center;

}

.donate h2{

font-size:46px;

margin-bottom:20px;

}

.donate p{

font-size:22px;

margin-bottom:30px;

}

/* Footer */

footer{

background:#222;

color:white;

text-align:center;

padding:40px;

}

@media(max-width:768px){

.story{

grid-template-columns:1fr;

}

.hero h1{

font-size:40px;

}

.hero p{

font-size:20px;

}

nav ul{

display:none;

}

}

</style>

</head>

<body>

<nav>

<div class="logo">🐶 流浪動物森林之家</div>

<ul>

<li><a href="hero">首頁</a></li>

<li><a href="#story">我們的故事</a></li>

<li><a href="#">捐款</a></li>

<li><a href="#">志工</a></li>

<li><a href="#">聯絡我們</a></li>

</ul>

</nav>

<header class="hero">

<div>

<h1>每一個生命，都值得一個家</h1>

<p>陪伴流浪毛孩找到幸福的歸屬</p>

<a class="btn" href="#">立即支持</a>

</div>

</header>

<section id="story">

<h2 class="title">我們的故事</h2>

<div class="story">

<img src="images/about.jpg">

<div>

<h2>用愛改變生命</h2>

<p>

我們每天投入流浪動物救援、醫療、送養及照護工作，

希望讓更多毛孩重新相信人類。

</p>

</div>

</div>

</section>

<section>

<h2 class="title">等待幸福的毛孩</h2>

<div class="cards">

<div class="card">

<img src="images/dog1.jpg">

<h3>小黑</h3>

<p>等待認養中，親人又活潑。</p>

</div>

<div class="card">

<img src="images/cat1.jpg">

<h3>咪咪</h3>

<p>喜歡撒嬌，期待溫暖的家。</p>

</div>

<div class="card">

<img src="images/dog2.jpg">

<h3>阿福</h3>

<p>救援成功，健康恢復中。</p>

</div>

</div>

</section>

<section>

<h2 class="title">救援成果</h2>

<div class="stats">

<div class="stat">

<div class="number">1000+</div>

救援毛孩

</div>

<div class="stat">

<div class="number">850+</div>

成功送養

</div>

<div class="stat">

<div class="number">300+</div>

愛心志工

</div>

</div>

</section>

<section class="donate">

<h2>您的每一份愛心，都能改變生命</h2>

<p>一起幫助更多等待希望的毛孩。</p>

<a class="btn" href="#">我要捐款</a>

</section>

<footer>

© 2026 流浪動物森林之家｜因為有您，生命更有希望

</footer>

</body>

</html>
