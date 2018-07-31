<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="打分">
      <el-rate
        v-model="form.rate"
        show-text>
      </el-rate>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './mixin'
export default {
  index: 6,
  title: '打分',
  name: 'Form6',
  mixins: [
    mixin({
      rate: 2.5
    })
  ]
}
</script>
