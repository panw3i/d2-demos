<template>
  <el-aside width="200px" class="questionnaire__aside--left">
    <div v-for="(item, index) in selected" :key="index" class="d2-mb-10">
      <el-button @click="handleRemove(item, index)" style="width: 100%;">
        {{item.title}}
      </el-button>
    </div>
    <div>
      <el-button type="primary" style="width: 100%;" @click="dialogVisible = true">
        <d2-icon name="plus"/> 新增
      </el-button>
    </div>
    <el-dialog
      title="选择区块"
      :append-to-body="true"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible">
      <p class="d2-mt-0">区块标题</p>
      <el-input v-model="title"></el-input>
      <p>区块组件</p>
      <el-radio-group v-model="name" size="small">
        <el-radio-button
          v-for="(item, index) in all"
          :key="index"
          :label="item.name">
          {{item.title}}
        </el-radio-button>
      </el-radio-group>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSelect">确 定</el-button>
      </span>
    </el-dialog>
  </el-aside>
</template>

<script>
export default {
  name: 'AsideLeft',
  data () {
    return {
      dialogVisible: false,
      title: '新区块',
      name: ''
    }
  },
  props: {
    all: {
      default: () => []
    },
    selected: {
      default: () => []
    }
  },
  watch: {
    name (value) {
      this.title = this.all.find(e => e.name === value).title
    }
  },
  created () {
    this.name = this.all[0].name
  },
  methods: {
    handleSelect () {
      this.dialogVisible = false
      this.$emit('select', {
        name: this.name,
        title: this.title,
        data: {}
      })
    },
    handleRemove (item, index) {
      this.$confirm(`删除 "${item.title}" 区块吗`, '确认操作', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$emit('remove', index)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
