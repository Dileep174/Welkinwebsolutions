<template>
  <header class="wrapper bg-soft-primary">
    <nav class="navbar navbar-expand-lg center-nav transparent navbar-light bg-white">
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <router-link to="/">
            <img src="../assets/img/logo.png" alt="Logo" />
          </router-link>
        </div>
        <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div class="offcanvas-header d-lg-none">
            <h3 class="text-white fs-30 mb-0">Welkin Solutions</h3>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul class="navbar-nav">
              <li v-for="item in menuItems" :key="item.id" class="nav-item">
                <router-link :to="item.url" class="nav-link hover">
                  <div class="menu-item-wrap">
                    <span class="menu-item-title">{{ item.title }}</span>
                  </div>
                </router-link>
              </li>
            </ul>
            <!-- /.navbar-nav -->
            <div class="offcanvas-footer d-lg-none">
              <div>
                <router-link to="/contact" class="btn btn-sm btn-primary rounded">Contact Us</router-link>
                <br />
                <nav class="nav social social-white mt-4">
                  <a href="#"><i class="uil uil-twitter"></i></a>
                  <a href="#"><i class="uil uil-facebook-f"></i></a>
                  <a href="#"><i class="uil uil-dribbble"></i></a>
                  <a href="#"><i class="uil uil-instagram"></i></a>
                  <a href="#"><i class="uil uil-youtube"></i></a>
                </nav>
                <!-- /.social -->
              </div>
            </div>
            <!-- /.offcanvas-footer -->
          </div>
          <!-- /.offcanvas-body -->
        </div>
        <!-- /.navbar-collapse -->
        <div class="navbar-other w-25 d-flex ms-auto">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item d-none d-md-block">
              <router-link to="/contact" class="btn btn-sm btn-primary rounded">Contact Us</router-link>
            </li>
            <li class="nav-item d-lg-none">
              <button class="hamburger offcanvas-nav-btn"><span></span></button>
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>
        <!-- /.navbar-other -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
  </header>
  <RouterView></RouterView>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchMenuItems } from '../services/apiService';

export default {
  name: 'Header',
  setup() {
    const menuItems = ref([]);

    onMounted(async () => {
      try {
        const data = await fetchMenuItems();
        menuItems.value = data.map(item => ({
          id: item.id,
          title: item.title.rendered,
          url: item.slug === 'home' ? '/' : `/${item.slug}`
        }));
      } catch (error) {
        console.error('Failed to fetch menu items', error);
      }
    });

    return {
      menuItems,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
