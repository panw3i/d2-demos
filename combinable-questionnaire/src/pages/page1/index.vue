<template>
  <d2-container>
    <template slot="header">可配置问卷示例</template>
    <div class="questionnaire">
      <el-container>
        <aside-left
          :all="formListUseful"
          :selected="forms"
          @select="handleAsideSelect"
          @remove="handleAsideRemove"/>
        <el-main class="questionnaire__main">
          <div class="questionnaire__container">
            <el-card v-for="(form, index) in forms" :key="index" shadow="never" class="questionnaire__card">
              <template slot="header">{{form.title}}</template>
              <div style="margin-bottom: -20px;">
                <component :is="form.name" v-model="forms[index].data"/>
              </div>
            </el-card>
          </div>
        </el-main>
        <aside-right :res="res"/>
      </el-container>
    </div>
    <template slot="footer">从左侧选择要添加的表单块</template>
  </d2-container>
</template>

<script>
import sortby from 'lodash.sortby'
const req = context => context.keys().map(context)
const forms = req(require.context('./components/Form/', false, /\.vue$/))
const components = {}
const formList = []
sortby(forms.map(e => {
  const component = e.default
  const { index, title, name } = component
  return { component, title, index, name }
}), ['index']).forEach(form => {
  const { component, title, name } = form
  components[name] = component
  formList.push({ title, name })
})
export default {
  name: 'page1',
  components: {
    ...components,
    AsideLeft: () => import('./components/AsideLeft'),
    AsideRight: () => import('./components/AsideRight')
  },
  data () {
    return {
      formList,
      forms: []
    }
  },
  computed: {
    res () {
      return Object.assign({}, ...this.forms.map(e => e.data))
    },
    formListUseful () {
      return this.formList.filter(e => !this.forms.find(f => f.name === e.name))
    }
  },
  methods: {
    handleAsideSelect (val) {
      this.forms.push({
        ...val
      })
    },
    handleAsideRemove (index) {
      this.forms.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public.scss';
.questionnaire {
  @extend %full;
  .el-container {
    @extend %full;
  }
  .questionnaire__aside--left {
    border-right: 1px solid #cfd7e5;
    padding: 20px;
  }
  .questionnaire__aside--right {
    border-left: 1px solid #cfd7e5;
    padding: 20px;
    .questionnaire__res-key {
      font-size: 12px;
      line-height: 14px;
      color: $color-text-sub;
    }
    .questionnaire__res-value {
      font-size: 14px;
      line-height: 20px;
      color: $color-text-normal;
      margin-bottom: 10px;
    }
  }
  .questionnaire__main {
    background-color: rgba(#000, .05);
  }
  .questionnaire__container {
    max-width: 400px;
    margin: 0px auto;
    .questionnaire__card {
      border: 1px solid #cfd7e5;
      margin-bottom: 20px;
      .el-form-item__label {
        line-height: 16px;
      }
    }
  }
}
</style>
