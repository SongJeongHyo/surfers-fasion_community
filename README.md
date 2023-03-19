# 옷 정보 커뮤니티 사이트 개발

spring을 이용한 22년도-1학기 이니로 동아리 프로젝트 back-end

[최종_보고서.pdf](https://github.com/201810777/surfers/files/8999579/_.pdf)

# 최종 보고서

## Surfers 옷 정보 커뮤니티

백엔드 - 김예진, 김동윤, 송정효

프론트엔드 - 김지민, 박민희, 서유림

### 개발환경

프론트 - HTML, CSS, JavaScript

백엔드 - IntelliJ IDEA, Java 14, Gradle 7.0.2, Spring Boot 2.5.2, Maria DB

### 하였습니다.

### 먼저 DataBase table입니다.

![Untitled](https://user-images.githubusercontent.com/79832986/226159933-68aa0da7-dda6-40f7-9b8b-30daf5fcaf0d.png)

회원정보, 게시물, 좋아요수, 팔로우 및 팔로워, 댓글 정보를 담을 수 있도록 설정했습니다.

# 기능설명

## 1) 회원가입 및 로그인

![Untitled (1)](https://user-images.githubusercontent.com/79832986/226159961-2faa4313-7231-42ce-8085-27512bfe046f.png)

![Untitled (2)](https://user-images.githubusercontent.com/79832986/226159965-7f156eeb-0c71-4eb4-842e-097acc0d4e20.png)

로그인과 회원가입 페이지 화면 입니다.

```java
@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final PrincipalDetailsService principalDetailsService;
    private final Oauth2DetailsService oauth2DetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests()
                .antMatchers("/","/login", "/signup", "/style/**", "/js/**", "/img/**").permitAll()
                .anyRequest().authenticated()
            .and()
                .formLogin()
                .loginPage("/login")
                .loginProcessingUrl("/loginForm")
                .defaultSuccessUrl("/")
            .and()
                .logout()
                .logoutSuccessUrl("/login")
                .invalidateHttpSession(true) // 세션 전체 삭제
            .and()
                .oauth2Login() //form 로그인도 하고, oauth2로그인도 한다.
                .loginPage("/login")//내가 만든 로그인 페이지 사용
                .userInfoEndpoint() //oauth2로그인시 최종 유저의 정보를 바로 받아온다.
                .userService(oauth2DetailsService)
        ;
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(principalDetailsService).passwordEncoder(new BCryptPasswordEncoder());
    }
}
```

스프링 시큐리티를 사용하여 로그인 기능을 구현하였습니다.

![Untitled (3)](https://user-images.githubusercontent.com/79832986/226159981-9ac33998-1a9d-4d56-84f5-11de0a935646.png)

User 정보 table입니다. 

User의 ID, email, name, password, phone number, profile image, title, website의 정보를 담고 있습니다.

회원가입이 완료되고 ID와 password를 정보에 맞게 로그인 하면 main 페이지로 이동하게 됩니다.

## 2) 메인화면

![Untitled (4)](https://user-images.githubusercontent.com/79832986/226159992-4af70b69-538a-45a2-a7fe-60cab7574cb3.png)

메인화면(post) 입니다. 

![Untitled (5)](https://user-images.githubusercontent.com/79832986/226160002-4ac6d33e-f0fb-4f79-9f8c-563b99048fd6.png)

Post 의 Database table입니다. id, user_id, create_date, post_img_url, tag, text의 정보를 담고 있습니다.

우측 상단 4가지 메뉴는 각각 

- post/story - 모든 게시물
- post/popular - 좋아요 많은 게시물
- post/likes - User가 좋아요를 누른 게시물
- user/profile - user의 프로필정보

의 기능을 하고 있습니다.

## 프로필 정보 - user/profile

![Untitled (6)](https://user-images.githubusercontent.com/79832986/226160110-57b549a1-4b2b-4dfb-90bf-e9f7a223d6f7.png)

user/profile 화면입니다.

해당 ID가 올린 게시물을 확인할 수 있습니다.

![Untitled (7)](https://user-images.githubusercontent.com/79832986/226160024-bb330c0c-807c-44ee-962e-350fef6ff256.png)

좋아요 및 댓글 기능을 사용할 수 있고 다른 ID에서 누른 좋아요 및 작성한 댓글들도 확인할 수 있습니다.

![Untitled (8)](https://user-images.githubusercontent.com/79832986/226160037-5c3bfab3-0ee1-494c-8fe7-9d81e0955284.png)

![Untitled (9)](https://user-images.githubusercontent.com/79832986/226160146-0e2ff1fc-45dd-44e6-aee3-17bd054c2e42.png)

like와 comment의 Database table입니다. 

![Untitled (10)](https://user-images.githubusercontent.com/79832986/226160150-ae302ec1-1924-43bb-b1a2-37b7b895ef05.png)

User간 팔로우 및 팔로워를 확인할 수 있습니다.

![Untitled (11)](https://user-images.githubusercontent.com/79832986/226160172-33fd2a22-4cc4-404d-9018-3f790e8194bc.png)

팔로우를 함에 따라 팔로잉 수가 바뀌는 것을 확인할 수 있습니다.

![Untitled (12)](https://user-images.githubusercontent.com/79832986/226160178-bf6c9010-3264-4b2c-9863-9213520e5190.png)

follow 부분의 Database table 입니다. 서로 팔로우가 되어있는 것을 확인할 수 있습니다.

## 게시물 업로드

![Untitled (13)](https://user-images.githubusercontent.com/79832986/226160197-361ee0c7-a914-4b34-a8d1-47c129d14ce8.png)

업로드 할 사진을 선택하여 comment 작성 및 해시태그를 작성할 수 있습니다. 

![Untitled (14)](https://user-images.githubusercontent.com/79832986/226160214-cfb77c4c-3c7f-4c8b-ab2b-f0c7b51edbfb.png)

위처럼 해시태그를 사용함으로써 메인 페이지의 게시물 검색 기능을 통해 게시물을 찾을 수 있습니다.

## 설정

![Untitled (15)](https://user-images.githubusercontent.com/79832986/226160243-ecf88a78-16a6-42c3-aa53-61474d765427.png)

톱니바퀴 모양의 설정을 누르면 회원정보 변경 및 로그아웃을 할 수 있습니다.

![Untitled (16)](https://user-images.githubusercontent.com/79832986/226160267-9b670293-261e-43f0-938c-ed8199715d26.png)

프로필 수정 페이지입니다.

이메일은 바꿀 수 없으므로 readonly로 설정해 두었고 이름, 소개, 전화번호, 프로필 사진은 변경할 수 있도록 하였습니다.

패스워드가 다를 경우 프로필을 수정할 수 없습니다.

## 우측 상단 메뉴 설명

## 모든 게시물 - post/story

![post story캡쳐](https://user-images.githubusercontent.com/79832986/226160277-37a9d967-0043-42cc-b613-73909145fcee.png)

모든 User들이 올린 게시물을 확인할 수 있는 페이지입니다.

## 좋아요 많은 게시물 - post/popular

![Untitled (17)](https://user-images.githubusercontent.com/79832986/226160290-85dd3590-fd1f-4968-8f37-c73475cc0204.png)

다수의 User들이 좋아요를 누른 게시물을 확인할 수 있는 페이지입니다.

## User(사용자)가 좋아요를 누른 게시물 - post/likes

![Untitled (18)](https://user-images.githubusercontent.com/79832986/226160299-b6ef1951-a517-498a-84ba-8dbaefcf9b11.png)

User본인이 좋아요를 누른 게시물을 확인할 수 있는 페이지입니다.

