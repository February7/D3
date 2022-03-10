<script setup>
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import {
  logoSvg,
  dashboardSvg,
  jobsSvg,
  applicationSvg,
  teamSvg,
  reportSvg,
} from "./svg";

const inst = getCurrentInstance();
const router = useRouter();

const navActiveIndex = ref(0);

const navList = [
  { name: "No.1 入门", svg: dashboardSvg, href: "#" },
  { name: "No.2", svg: jobsSvg, href: "#" },
  { name: "No.3", svg: applicationSvg, href: "#" },
  { name: "No.4", svg: teamSvg, href: "#" },
  { name: "No.5", svg: reportSvg, href: "#" },
];

const jump = (el, href, i) => {
  el.stopPropagation();

  router.push(href);
  navActiveIndex.value = i;
};

inst.render = () => (
  <>
    <div class="app-container">
      <div class="app-left">
        <div class="app-logo">
          {logoSvg}
          <span>D3.js</span>
        </div>
        <ul class="nav-list">
          {navList.map((e, i) => (
            <li
              class={["nav-list-item", navActiveIndex.value === i && "active"]}
            >
              <a class="nav-list-link" onClick={(el) => jump(el, e.href, i)}>
                {e.svg}
                {e.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div class="app-main"></div>
    </div>
  </>
);
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>