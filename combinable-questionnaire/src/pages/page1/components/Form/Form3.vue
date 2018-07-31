<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="兴趣">
      <el-checkbox-group v-model="form.hobby">
        <el-checkbox label="户外"></el-checkbox>
        <el-checkbox label="游戏"></el-checkbox>
        <el-checkbox label="舞蹈"></el-checkbox>
        <el-checkbox label="其它"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './mixin'
export default {
  index: 3,
  title: '兴趣',
  name: 'Form3',
  mixins: [
    mixin({
      hobby: []
    })
  ]
}
</script>
