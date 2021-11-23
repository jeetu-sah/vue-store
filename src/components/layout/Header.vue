<template>
  <div>
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <h1 class="logo mr-auto">  <router-link to="/">Mentor</router-link> 
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active">
                <router-link to="/">Home</router-link>
            </li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/courses">Courses</router-link></li>
            <li><router-link to="/events">Events</router-link></li>
            <li><router-link to="/pricing">Pricing</router-link></li>
            <li class="drop-down">
              <a href="">Drop Down</a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="drop-down">
                  <a href="#">Deep Drop Down</a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
        <router-link to="/login" class="get-started-btn">Login</router-link>
        <!-- <a href="/admin" class="get-started-btn">Login</a> -->
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>
