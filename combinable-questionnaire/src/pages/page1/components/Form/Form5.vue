<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="薪资">
      <el-slider
        v-model="form.salary"
        :step="2"
        :min="2"
        :max="30"
        :format-tooltip="val => `${val} K`"
        show-stops>
      </el-slider>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './mixin'
export default {
  index: 5,
  title: '薪资',
  name: 'Form5',
  mixins: [
    mixin({
      salary: 8
    })
  ]
}
</script>
