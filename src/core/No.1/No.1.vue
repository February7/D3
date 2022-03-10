<script setup>
import { ref, getCurrentInstance } from 'vue';
import * as d3 from 'd3';
import { data } from './data';

const inst = getCurrentInstance();

// 比例尺
const scale = d3.scaleLinear().domain([0, 10]).range([-1000, 1000]);
console.log(scale(6));

inst.render = () => (
  <div class="container">
    <p>hello No.1</p>
  </div>
)
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>