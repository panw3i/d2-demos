<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="学历">
      <el-radio-group v-model="form.education" size="small">
        <el-radio-button :label="1">初中</el-radio-button>
        <el-radio-button :label="2">高中</el-radio-button>
        <el-radio-button :label="3">本科</el-radio-button>
        <el-radio-button :label="4">研究生</el-radio-button>
        <el-radio-button :label="5">博士</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './mixin'
export default {
  index: 7,
  title: '学历',
  name: 'Form7',
  mixins: [
    mixin({
      education: 3
    })
  ]
}
</script>
