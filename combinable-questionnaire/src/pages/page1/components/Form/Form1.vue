<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="姓名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-radio-group v-model="form.usersex">
        <el-radio :label="1">男</el-radio>
        <el-radio :label="0">女</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './mixin'
export default {
  index: 1,
  title: '基础',
  name: 'Form1',
  mixins: [
    mixin({
      username: '',
      usersex: 1
    })
  ]
}
</script>
