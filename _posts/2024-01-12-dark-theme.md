---
layout: post
title: "GitHub Pages 다크 모드 수동 추가"
categories: [github pages]
image: assets/images/posts/dark-theme.png
---

새해를 맞아 방치했던 블로그를 업데이트하고 싶어 아래와 같은 기능을 추가하기로 결심했습니다.

1. 무한스크롤
2. 댓글 기능
3. 다크 모드

이 중 다크 모드 기능을 제일 먼저 구현하기로 결심했습니다. ~~사실 처음부터 다크 모드를 지원해주는 지킬 테마를 사용하면 될 일~~

![theme-change]({{ site.baseurl }}/assets/images/posts/opening.png){: .img-center}

###### 아직 사람있다고요

해당 기능은 `jekyll` + `liquid`를 사용하여 구현했습니다. 요새는 깃허브 페이지를 포스팅 용도로는 번거러워 잘 안쓰고.. 사용하시더라도 진작 `Gatsby.js`로 마이그하셨거나, 최근에는 `Next.js`로 구현하는 추세더군요.
저도 언젠가는 후자의 방식으로 마이그레이션을 하고 싶습니다.. 언젠가..

각설하고 저처럼 다크모드 없는 `jekyll` 테마를 받으셨다가 간단하게라도 만들어내고 싶으신 분들을 위해 해당 포스트를 작성합니다.

### nav-bar(header)에 테마 변경 switch 추가

```html
<div class="collapse navbar-collapse" id="navbarResponsive">
  <ul class="navbar-nav ml-auto d-flex align-items-center">
    <!-- 메뉴 리스트 -->
    <li class="nav-item"></li>

    <!-- 메뉴 리스트에 테마 변경 스위치 추가 -->
    <li class="nav-item">
      <label class="theme-btn-wrap px-3" for="btn_change_theme"
        ><input type="checkbox" id="btn_change_theme" /><i class="theme-btn"></i
      ></label>
    </li>
  </ul>
</div>
```

###### default.html

헤더에 테마 변경용 스위치를 넣어줌. 푸터에 넣으실 분들은 원하시는 태그에 넣으시면 됩니다.

```css
/* 디폴트 상태 */
.theme-btn-wrap .theme-btn {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("/assets/images/moon.png") left center no-repeat;
  background-size: cover;
  vertical-align: middle;
  transition-duration: 0.3s;
}
.theme-btn-wrap input[type="checkbox"] {
  display: none;
}
/* 다크모드로 변경되었을 때 */
.theme-btn-wrap input[type="checkbox"]:checked + .theme-btn {
  background-image: url("/assets/images/sun.png");
}

/* 스위치에 마우스 오버 시 효과 */
.theme-btn-wrap .theme-btn:hover {
  transition: all 1s ease-in-out;
  scale: 1.2;
  rotate: 180deg;
}
```

###### theme.scss

테마 변경 시 저처럼 아이콘을 바꿔 넣는 방식으로 구현하시는 분들도 있고, 토글로 구현하시는 분들도 계십니다. 둘 다 체크박스라는 점은 동일하니 편하신 방식으로 구현하면 됨.

미체크 상태는 디폴트(라이트 모드)로, 체크된 상태를 다크 모드 시의 아이콘으로 표시되게 해주었습니다. 추가로 그냥 아이콘만 변하는 건 심심해서 마우스 오버 시 회전 및 확대되도록 구현하였습니다.

<br>

### 테마 변경용 script 작성

```javascript
// 테마 변경에 따른 HTML 요소 속성값 변경
let setDarkTheme = (isDark) => {
  if (isDark) {
    document.documentElement.setAttribute("color-theme", "dark");
  } else {
    document.documentElement.setAttribute("color-theme", "light");
  }
  // 로컬스토리지 값에 사용자가 설정한 테마 저장
  localStorage.setItem("theme", isDark ? "dark" : "default");
};

let currentTheme = localStorage.getItem("theme");
let isDark = false;

if (currentTheme) {
  isDark = currentTheme === "dark";
} else {
  isDark = matchMedia("(prefers-color-scheme: dark)").matches; // 최초 진입 시, 사용자 OS 설정에 맞춤
}

setDarkTheme(isDark); // 토글을 통해서가 아닌 페이지 접속 시 실행할 부분

let themeBtn = document.getElementById("btn_change_theme");

if (themeBtn) {
  themeBtn.checked = isDark;
}

// 스위치의 체크 여부를 통해 다크모드 여부 설정
let changeTheme = (e) => {
  setDarkTheme(e.target.checked);
};

themeBtn.addEventListener("click", changeTheme);
```

###### change-theme.js

최초 진입했을 경우 `prefers-color-scheme`라는 미디어쿼리를 통해 사용자 OS에 적용된 테마를 가져오도록 구현하였고, 이후에는 로컬스토리지에 테마 값을 저장하여 불러오도록 하였습니다.

테마 변경 아이콘 클릭(즉, 체크됨) 시에는 다크모드 여부 플래그 값을 true로 변경하고,
`color-theme`이라는 HTML 요소 속성을 별도로 만들어 모드에 따라 해당 속성의 값을 바꾸어주었습니다.

제 블로그에서는 테마 변경 시 바뀌는 건 그래봤자 배경색, 폰트색 등 색상 위주고 그마저도 많지 않았습니다.
그러나 보다 다양한 기능을 구현하고 싶으시면 저처럼 HTML 요소로 빼지 마시고, **CSS 파일을 테마 별로 생성하여 조건문을 통해 바꾸시는 걸 추천드립니다. (`_config.yml` 파일 작업 필요)**

<br>

### 테마에 따른 CSS 변경

```css
:root[color-theme="light"] {
  --background: #fff;
  --font-color: #333;
  --font-color-l: #000000;
  --nav-link-color: rgb(109, 109, 109);
  --article-color: rgba(0, 0, 0, 0.8);
}

:root[color-theme="dark"] {
  --background: rgb(13, 13, 14);
  --font-color: #d2d2d2;
  --font-color-l: #fff;
  --nav-link-color: rgb(186, 186, 186);
  --article-color: rgba(255, 255, 255, 0.8);
}

body {
  /* 변수를 통해 고정된 값이 사용자 지정 속성 활용 */
  background: var(--background);
}
```

###### theme.scss

테마에 따라 변경되어야 하는 색상들의 경우 `color-theme` 속성의 값에 변수로 설정해놓았습니다. 이렇게 설정해 놓은 변수들은 `var(--변수명)`을 통해 개별 태그에서 사용해주시면 됩니다.

<br>

### 결과

![theme-change]({{ site.baseurl }}/assets/images/posts/theme-change.gif){: .img-center}

앞서 말씀드린 것처럼 저는 테마 변경 시 고칠 부분이 많지 않아 간단하게 구현하였습니다. 별도의 CSS로 구현하는 방식은 아래 중 첫번쨰 링크 참조 부탁드립니다.

<br>

### 참고 자료

1. [minimal-mistakes 테마 다크 모드 토글 적용 - Github Pages 운영](https://etch-cure.github.io/blog/toggle-dark-mode/)
2. [블로그 커스터마이징 하기](https://wlqmffl0102.github.io/posts/Customizing-Blogs/)
3. [웹페이지 다크 모드 지원하기](https://edykim.com/ko/post/dark-mode/)
