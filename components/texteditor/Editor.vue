<template>
  <div class="ml-5">
    <div class="container-fluid mt-5 flex-wrap">
      <form style="width: 500px" @submit.prevent="createPost()">
        <fieldset>
          <!-- <legend v-if="isUpdate">
          Update Post
        </legend>
        <legend v-else>
          Create a post
        </legend> -->
          <div class="form-group">
            <label>Cover image</label>
            <CustomInput
              type="image"
              placeholder="Enter image"
              alt="Submit"
              @inputValue="image = $event"
            />
          </div>
          <div class="form-group">
            <label>Topic</label>
            <CustomInput
              type="text"
              placeholder="Enter topic"
              @inputValue="title = $event"
            />
          </div>
          <div class="form-group">
            <label>Descrtiption</label>
            <CustomInput
              type="text"
              placeholder="Enter description"
              @inputValue="description = $event"
            />
          </div>
        </fieldset>
      </form>
    </div>
    <tiptap-vuetify
      style="width: 50%"
      :value="value"
      :extensions="extensions"
      @input="$emit('input', arguments[0])"
    />
  </div>
</template>

<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image
} from 'tiptap-vuetify'

export default {
  name: 'EditorComponent',
  components: { TiptapVuetify },
  props: {
    value: {
      type: String,
      default: `
        <h1>Yay Headlines!</h1>
        <p>All these <strong>cool tags</strong> are working now.</p>`
    }
  },
  data: () => ({
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak,
      Image
    ]
  })
}
</script>
