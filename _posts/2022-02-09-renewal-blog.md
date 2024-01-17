---
layout: post
title: "블로그 리뉴얼"
categories: [github page]
image: assets/images/renewal-blog.png
---

학원 수료 이후, 개발자는 기술 블로그가 필수라는 말에 부랴부랴 블로그를 생성하였습니다. 플랫폼에는 티스토리, 노션, 벨로그, 깃페이지가 선택지에 있었고, 디자인적인 측면에서는 노션이 가장 마음에 들었으나, 복잡한 url의 형식과 페이지를 개별적으로 생성한다는 점이 불만으로 작용, 벨로그는 디자인이 썩 마음에 들지 않는데 커스터마이징까지 불가능하다는 점에서 탈락,(티스토리는 그냥 끌리지 않았다) 결국 jekyll을 사용한 깃페이지를 활용하기로 결심했습니다.

커스터마이징이 자유롭다는 점에서 내가 테마를 생성했어도 되었으나, 나의 디자인 실력과 이상의 괴리가 크다는 점에서 기존에 존재하는 테마를 사용함.

<br>

![hydeout]({{ site.baseurl }}/assets/images/posts/renewal-1.png)

###### [jekyll theme | Hydeout](https://github.com/fongandrew/hydeout)

<br>

위의 테마가 초기에 사용했던 테마입니다. 티스토리와 유사한 디자인이었고, 처음에는 마음에 들었으나 점점 보기 거슬려 결국 테마를 바꾸기로 결심하였습니다.

다만, 테마만 바꾼다는 것이 프로젝트와 블로그 포스팅을 구분 짓고, tag로 포스팅을 분류하는 것이 아닌 카테고리로 나누고 싶었기에 그냥 새로 만들기로 했습니다. (이때 introduction을 남긴다는 것이 멍청하게 삭제해서 다시 써야 했음)

처음 블로그를 만들 당시에 커스터마이징을 하는 것에 어려움을 겪어 그냥 새로 내가 만들까... 하다가 이번에는 마음에 드는 테마를 찾아 최대한 커스터마이징할 요소를 줄이자 마음먹고 고심해서 다음의 테마를 골랐습니다.

<br>

![]({{ site.baseurl }}/assets/images/posts/renewal-2.png)

###### [jekyll theme | Affiliates](https://github.com/wowthemesnet/affiliates-jekyll-theme)

<br>

> 그러나, 역시, 당연하게도 나는 커스터마이징을 이전보다 훨씬 많이 하게 된다

현재의 테마는 이미지 중심의 디자인이 마음에 들어 선택하였으나 역시나... 커스터마이징 삽질을 하였고 post-box 형식 이외의 모든 것을 바꿨습니다.

<br>

![]({{ site.baseurl }}/assets/images/posts/renewal-3.png)

###### 기존의 것과 현재 커스터마이징한 `index.html` 비교

<br>

그래도 구글링 + 복붙의 향연이었던 과거와는 달리 이번에는 지킬 docs를 전반적으로 읽어나가고 jekyll directory 구조, liquid, 변수에 대한 이해를 기반으로 시작하여 수월한 편이었습니다.

<br>

### 기존 테마에서 추가 or 커스터마이징 한 기능

1. 숫자 리스트 형식의 `paginatinate` 기능 추가
2. recent posts 형식의 블로그 `index.html`
3. `collection`을 활용하여 project 파일 별도로 관리
4. syntaxhighlighter
5. 기타(거의 모든..) UI
6. 활성 메뉴 표시 기능 (2월 26일 추가)

특히 1번과 3번에 난항을 겪었고, 시간이 남는다면 미래의 나를 위해 jekyll 커스터마이징 관련 포스팅을 작성해볼까 합니다.

<br>

### 참고 사이트

1. **jekyll 공식 사이트** : [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)
2. [https://moon9342.github.io/jekyll-struct](https://moon9342.github.io/jekyll-struct)
3. [https://ehfgk78.github.io](https://ehfgk78.github.io)
4. [https://henriwoodcock.medium.com/how-to-create-a-projects-page-on-jekyll-3bcf129f3efd](https://henriwoodcock.medium.com/how-to-create-a-projects-page-on-jekyll-3bcf129f3efd)

<br>
