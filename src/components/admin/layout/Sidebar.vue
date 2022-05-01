<template>
  <div>
    <nav
      class="
        main-header
        navbar navbar-expand
        bg-white
        navbar-light
        border-bottom
      "
    >
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#"
            ><i class="fa fa-bars"></i
          ></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="/admin/dashboard" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>
      <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input
            class="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-navbar" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="fa fa-comments-o"></i>
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" class="dropdown-item">
              <div class="media">
                <img
                  src="admin-webu/dist/img/user2-160x160.jpg"
                  alt="User Avatar"
                  class="img-size-50 mr-3 img-circle"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Brad Diesel
                    <span class="float-right text-sm text-danger"
                      ><i class="fa fa-star"></i
                    ></span>
                  </h3>
                  <p class="text-sm">Call me whenever you can...</p>
                  <p class="text-sm text-muted">
                    <i class="fa fa-clock-o mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="/admin/dashboard" class="dropdown-item">
              <div class="media">
                <img
                  src="admin-webu/dist/img/user2-160x160.jpg"
                  alt="User Avatar"
                  class="img-size-50 img-circle mr-3"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    John Pierce
                    <span class="float-right text-sm text-muted"
                      ><i class="fa fa-star"></i
                    ></span>
                  </h3>
                  <p class="text-sm">I got your message bro</p>
                  <p class="text-sm text-muted">
                    <i class="fa fa-clock-o mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <div class="media">
                <img
                  src="dist/img/user3-128x128.jpg"
                  alt="User Avatar"
                  class="img-size-50 img-circle mr-3"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning"
                      ><i class="fa fa-star"></i
                    ></span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted">
                    <i class="fa fa-clock-o mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer"
              >See All Messages</a
            >
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="fa fa-bell-o"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fa fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fa fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fa fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer"
              >See All Notifications</a
            >
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            ><i class="fa fa-th-large"></i
          ></a>
        </li>
      </ul>
    </nav>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <router-link to="/admin/dashboard" class="brand-link">
        <img
          src="../../../admin-webu/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </router-link>
      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="../../../admin-webu/dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <router-link
              :to="{ name: 'admin.employee.employee-list' }"
              class="d-block"
              >Alexander Pierce</router-link
            >
          </div>
        </div>
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li
              class="nav-item has-treeview"
              :class="{ 'menu-open': openMainMenu('/admin/catalog/') }"
            >
              <a
                href="#"
                class="nav-link"
                :class="{
                  active: subIsActive([
                    '/admin/catalog/category',
                    '/admin/catalog/attribute',
                    '/admin/catalog/product',
                    '/admin/catalog/attr-group',
                  ]),
                }"
              >
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Manage Catalog
                  <i class="right fa fa-angle-left"></i>
                </p>
              </a>

              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :class="{ active: subIsActive(['/admin/catalog/category']) }"
                    :to="{ name: 'admin.catalog.category' }"
                  >
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>Manage Category</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :class="{
                      active: subIsActive(['/admin/catalog/attr-group']),
                    }"
                    :to="{ name: 'admin.catalog.attribute-group.list' }"
                    exact
                  >
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>Attribute Group</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :class="{
                      active: openMainMenu('/admin/catalog/attribute'),
                    }"
                    :to="{ name: 'admin.catalog.attribute' }"
                    exact
                  >
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>Manage Attribute</p>
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :class="{ active: openMainMenu('/admin/catalog/product') }"
                    :to="{ name: 'admin.catalog.product' }"
                  >
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>Manage Product</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li
              class="nav-item has-treeview"
              :class="{ 'menu-open': openMainMenu('/admin/employee/') }"
            >
              <a
                href="#"
                class="nav-link"
                :class="{
                  active: subIsActive([
                    '/admin/employee',
                    '/admin/employee/create',
                    '/admin/employee/create/task-list',
                  ]),
                }"
              >
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  Manage Employee
                  <i class="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link
                    :to="{ name: 'admin.employee.employee-list' }"
                    exact
                    class="nav-link"
                  >
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>Employee List</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    :to="{ name: 'admin.employee.tasklist' }"
                    exact
                    class="nav-link"
                  >
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>Task List</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" @click.prevent="UserlogOut()" class="nav-link">
                <i class="nav-icon fa fa-sign-out"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  component: {},
  data() {
    return {
      actionUrl: {
        logoutUrl: `${this.$serverUrl}api/logout`,
      },
      to: "/logout",
    };
  },
  methods: {
    UserlogOut: function () {
      let con = confirm("Are you sure want to logout?");
      if (con == true) {
        this.$axios
          .post(
            this.actionUrl.logoutUrl,
            {},
            {
              headers: this.$helper.authHeader(),
            }
          )
          .then((response) => {
            if (response.data.status == 200) {
              localStorage.removeItem("usertoken");
              this.$router.push("/login");
            } else {
              console.log(response);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("loading false");
          });
      }
    },
    openMainMenu(input) {
      if(Array.isArray(input)){
        input.forEach(item =>{
          if( this.$route.path.match(item) ){
            console.log("Active")
            return true;
          }         
        });
        //return this.$route.path.indexOf(input) === 0;
      }else{
        return this.$route.path.indexOf(input) === 0;
      }
    },
    subIsActive(input) {
      //console.log(this.$route)
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
  },
  props: ["responseData"],
};
</script>
