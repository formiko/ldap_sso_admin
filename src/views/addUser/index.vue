<template>
  <div>
    <el-form :model="ValidateForm" ref="ValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
        label="用户名"
        prop="username"
        :rules="[
        { required: true, message: '用户名不能为空'},
        ]"
    >
        <el-input type="username" v-model.number="ValidateForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item
        label="密码"
        prop="password"
        :rules="[
        { required: true, message: '密码不能为空'},
        ]"
    >
        <el-input type="password" v-model.number="ValidateForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ValidateForm')">提交</el-button>
        <el-button @click="resetForm('ValidateForm')">重置</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ValidateForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          console.log(this.ValidateForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
