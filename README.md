# my-website
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>流浪動物森林之家｜官方網站</title>

<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap" rel="stylesheet">

<style>

/* =====================
   基礎設計系統（接案標準）
===================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Noto Sans TC",sans-serif;
}

:root{
    --primary:#7b0000;
    --bg:#f7f7f7;
    --dark:#222;
    --gray:#666;
    --accent:#ffd27d;
}

body{
    background:var(--bg);
    color:#333;
    line-height:1.8;
}

/* =====================
   導覽列（企業級）
===================== */

nav{
    position:fixed;
    top:0;
    width:100%;
    background:rgba(0,0,0,.85);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 8%;
    z-index:1000;
    backdrop-filter:blur(8px);
}

nav h2{
    color:#fff;
    font-size:20px;
}

nav ul{
    display:flex;
    list-style:none;
    gap:22px;
}

nav a{
    color:#fff;
    text-decoration:none;
    font-size:14px;
    transition:.3s;
}

nav a:hover{
    color:var(--accent);
}

/* =====================
   Hero（商業核心）
===================== */

.hero{
    height:100vh;
    background:
    linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
    url("images/307511659_479709087524548_6460439239543438505_n.jpg");
    background-size:cover;
    background-position:center;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    color:#fff;
    padding:20px;
}

.hero h1{
    font-size:56px;
    line-height:1.3;
}

.hero p{
    font-size:18px;
    margin-top:15px;
    opacity:.9;
}

.btn{
    display:inline-block;
    margin-top:25px;
    padding:12px 28px;
    background:var(--accent);
    color:#222;
    border-radius:50px;
    font-weight:700;
    text-decoration:none;
    transition:.3s;
}

.btn:hover{
    background:#fff;
}

/* =====================
   區塊通用（接案標準）
===================== */

section{
    padding:90px 10%;
}

.title{
    text-align:center;
    margin-bottom:50px;
}

.title h2{
    font-size:36px;
    color:var(--primary);
}

.title p{
    color:var(--gray);
    max-width:700px;
    margin:auto;
}

/* =====================
   關於區
===================== */

.about{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:40px;
    align-items:center;
}

.about img{
    width:100%;
    border-radius:18px;
}

.about h3{
    color:var(--primary);
    font-size:28px;
    margin-bottom:10px;
}

/* =====================
   卡片系統（可重用）
===================== */

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:#fff;
    padding:25px;
    border-radius:16px;
    box-shadow:0 5px 15px rgba(0,0,0,.08);
    transition:.3s;
}

.card:hover{
    transform:translateY(-6px);
}

.card h3{
    color:var(--primary);
    margin-bottom:10px;
}

/* =====================
   圖片區
===================== */

.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:15px;
}

.gallery img{
    width:100%;
    height:220px;
    object-fit:cover;
    border-radius:14px;
}

/* =====================
   支持區（轉換核心）
===================== */

.support{
    background:#fff3d6;
    text-align:center;
    border-radius:20px;
    padding:60px 30px;
}

.support h2{
    color:var(--primary);
    margin-bottom:15px;
}

/* =====================
   聯絡區
===================== */

.contact{
    text-align:center;
}

.contact-box{
    background:#fff;
    padding:40px;
    border-radius:18px;
    max-width:700px;
    margin:auto;
    box-shadow:0 5px 15px rgba(0,0,0,.08);
}

/* =====================
   Footer
===================== */

footer{
    background:#222;
    color:#fff;
    text-align:center;
    padding:20px;
}

/* =====================
   RWD
===================== */

@media(max-width:768px){
    nav ul{display:none;}
    .hero h1{font-size:36px;}
}

</style>
</head>

<body>

<!-- NAV -->
<nav>
    <h2>流浪動物森林之家</h2>
    <ul>
        <li><a href="#about">關於</a></li>
        <li><a href="#env">環境</a></li>
        <li><a href="#daily">日常</a></li>
        <li><a href="#gallery">相簿</a></li>
        <li><a href="#support">支持</a></li>
        <li><a href="#contact">聯絡</a></li>
    </ul>
</nav>

<!-- HERO -->
<header class="hero">
    <div>
        <h1><br></h1>
        <p></p>
    
    </div>
</header>

<!-- ABOUT -->
<section id="about">

    <div class="title">
        <h2>關於我們</h2>
        <p>專注流浪動物救援、醫療與送養</p>
    </div>

    <div class="about">
        <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d">
        <div>
            <h3>讓每個生命都有第二次機會</h3>
            <p>我們致力於救援與照護流浪動物，提供醫療與安置，幫助牠們重返家庭。</p>
        </div>
    </div>

</section>

<!-- ENV -->
<section id="env">

    <div class="title">
        <h2>園區環境</h2>
        <p>安全、乾淨、舒適</p>
    </div>

    <div class="grid">
        <div class="card">
            <h3>活動空間</h3>
            <p>自由活動與社交</p>
        </div>
        <div class="card">
            <h3>休息區</h3>
            <p>舒適與安全環境</p>
        </div>
        <div class="card">
            <h3>日常照護</h3>
            <p>健康管理與清潔</p>
        </div>
    </div>

</section>

<!-- DAILY -->
<section id="daily">

    <div class="title">
        <h2>日常照護</h2>
        <p>用愛陪伴每一天</p>
    </div>

    <div class="grid">
        <div class="card">
            <h3>餵食</h3>
            <p>固定營養供應</p>
        </div>
        <div class="card">
            <h3>清潔</h3>
            <p>環境維護</p>
        </div>
        <div class="card">
            <h3>陪伴</h3>
            <p>心理安全感建立</p>
        </div>
    </div>

</section>

<!-- GALLERY -->
<section id="gallery">

    <div class="title">
        <h2>溫暖紀錄</h2>
        <p>每一張照片都是故事</p>
    </div>

    <div class="gallery">
        <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a">
        <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1">
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131">
        <img src="https://images.unsplash.com/photo-1511044568932-338cba0ad803">
    </div>

</section>

<!-- SUPPORT -->
<section id="support">

    <div class="support">
        <h2>愛心支持</h2>
        <p>每一份捐助都能改變生命</p>
        <a class="btn" href="#contact">聯絡捐助</a>
    </div>

</section>

<!-- CONTACT -->
<section id="contact">

    <div class="title">
        <h2>聯絡我們</h2>
    </div>

    <div class="contact-box">
        <p>
            台北市內湖區康樂街136巷15弄7號<br>
            LINE：@660zbsgw
        </p>
    </div>

</section>

<footer>
    © 2026 流浪動物森林之家
</footer>

</body>
</html>
