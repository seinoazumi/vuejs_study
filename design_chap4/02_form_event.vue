<template>
  <fieldset>
    <div class="form-group"> 
      <label for="name">
        お名前
        <span class="badge">
          10文字
        </span>
      </label>
      <p class="errors">
        {{ name | maxLengthValidator(10) }}
      </p>
      <input type="text" name="name" id="name" v-model="name">
    </div>

    <div class="form-group"> 
      <label for="subject">
        件名
        <span class="badge">
          20文字
        </span>
      </label>
      <p class="errors">
        {{ subject | maxLengthValidator(20) }}
      </p>
      <input type="text" name="subject" id="subject" v-model="subject">
    </div>

    <div class="form-group"> 
      <label for="contents">
        内容
        <span class="badge">
          30文字
        </span>
      </label>
      <p class="errors">
        {{ contents | maxLengthValidator(30) }}
      </p>
      <input type="text" name="contents" id="contents" v-model="contents">
    </div>
  </fieldset>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        subject: '',
        contents: '',
        errors: {
          name: [],
          subject: [],
          contents: []
        },
      }
    },
    filters: {
      maxLengthValidator: function(val, max) {
        if (val && val.length > max) {
          return max + '文字以内で入力して下さい'
        }
      }
    },
    methods: {
      validator: function(type, max) {
        let name = [],
            subject = [],
            contents = [],
            message = max + '文字以内で入力して下さい'

        if (type === 'name') {
          if (this.name.length > max) {
            name.push(message);
          }
          this.errors.name = name
        } else if (type === 'subject') {
          if (this.subject.length > max) {
            subject.push(message);
          }
          this.errors.subject = subject
      } else if (type === 'contents') {
          if (this.contents.length > max) {
            subject.push(message);
          }
          this.errors.contents = contents
        }
      }
    }
  }
</script>

<style scoped>
  form {
    width: 50%;
    margin: 0 auto;
  }
  .form-row {
    display: flex;
  }
  .form-row button {
    flex: auto;
    margin-left: 10px;
  }
  .badge {
    font-size: 10px;
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    background: #f6f7fa;
    padding: 4px 8px;
    border-radius: 2px;
    margin-left: .5em;
    position: relative;
    top: -1px;
  }
  .errors {
    color: red;
    margin: 10px 0 0;
    font-size: 12px;
  }
</style>
