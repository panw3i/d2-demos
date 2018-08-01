<template>
  <el-aside
    width="200px"
    class="questionnaire__aside--left">
    <!-- 已经选择的区块列表 点击每个按钮后开始删除响应的区块 -->
    <div
      v-for="(item, index) in selected"
      :key="index"
      class="d2-mb-10">
      <el-button
        @click="handleRemove(item, index)"
        style="width: 100%;">
        {{item.title}}
      </el-button>
    </div>
    <!-- 新建区块按钮 -->
    <div>
      <el-button
        type="primary"
        style="width: 100%;"
        @click="dialogVisible = true">
        <d2-icon name="plus"/> 新增
      </el-button>
    </div>
    <!-- 选择区块界面 -->
    <el-dialog
      title="选择区块"
      :append-to-body="true"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible">
      <p class="d2-mt-0">区块标题</p>
      <el-input v-model="title"></el-input>
      <p>区块组件</p>
      <el-alert
        v-if="all.length === 0"
        type="error"
        title="没有可用区块"/>
      <el-radio-group
        v-else
        v-model="name"
        size="small">
        <el-radio-button
          v-for="(item, index) in all"
          :key="index"
          :label="item.name">
          {{item.title}}
        </el-radio-button>
      </el-radio-group>
      <span slot="footer">
        <el-button
          @click="dialogVisible = false">
          取 消
        </el-button>
        <!-- 如果没有区块可用 不显示确定按钮 -->
        <el-button
          v-if="all.length !== 0"
          type="primary"
          @click="handleSelect">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </el-aside>
</template>

<script>
export default {
  name: 'AsideLeft',
  data () {
    return {
      // 新建区块的 dialog 显示控制
      dialogVisible: false,
      // 新建区块时设置的区块标题
      title: '新区块',
      // 新建区块时选择的区块
      name: ''
    }
  },
  props: {
    // 所有可选区块
    all: {
      default: () => []
    },
    // 用户已经选择的区块
    selected: {
      default: () => []
    }
  },
  watch: {
    // 用户选择一个区块后，标题自动改为这个区块的默认标题
    name (value) {
      this.title = this.all.find(e => e.name === value).title
    }
  },
  methods: {
    // 用户选择区块完毕
    handleSelect () {
      // 关闭 dialog
      this.dialogVisible = false
      // 发送事件
      this.$emit('select', {
        name: this.name,
        title: this.title,
        data: {}
      })
    },
    // 用户删除区块
    handleRemove (item, index) {
      this.$confirm(`删除 "${item.title}" 区块吗`, '确认操作', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 发送事件
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
