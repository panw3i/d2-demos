<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="移动电话">
      <el-input v-model="form.mobilePhone"></el-input>
    </el-form-item>
    <el-form-item label="固定电话">
      <el-input v-model="form.tel"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './mixin'
export default {
  index: 2,
  title: '电话',
  name: 'Form2',
  mixins: [
    mixin({
      mobilePhone: '',
      tel: ''
    })
  ]
}
</script>
