<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="家庭住址">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="工作地址">
      <el-input v-model="form.addressWork"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './mixin'
export default {
  index: 4,
  title: '地址',
  name: 'Form4',
  mixins: [
    mixin({
      address: '',
      addressWork: ''
    })
  ]
}
</script>
