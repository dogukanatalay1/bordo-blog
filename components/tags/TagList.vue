<template>
  <v-card class="mx-auto" max-width="500">
    <v-container class="py-0">
      <v-row align="center" justify="start">
        <v-col
          v-for="(selection, i) in selections"
          :key="selection.name"
          class="shrink"
        >
          <v-chip
            :disabled="loading"
            close
            @click:close="selected.splice(i, 1)"
          >
            # {{ selection.name }}
          </v-chip>
        </v-col>
        <v-col v-if="!allSelected" cols="12">
          <v-text-field
            ref="search"
            v-model="search"
            full-width
            hide-details
            label="Search"
            single-line
          />
        </v-col>
      </v-row>
    </v-container>
    <v-divider v-if="!allSelected" />
    <v-list>
      <template v-for="item in categories">
        <v-list-item
          v-if="!selected.includes(item)"
          :key="item.name"
          :disabled="loading"
          @click="selected.push(item)"
        >
          <v-list-item-avatar>
            <v-icon :disabled="loading" v-text="item.icon" />
          </v-list-item-avatar>
          <v-list-item-title v-text="`${item.name}`" />
        </v-list-item>
      </template>
    </v-list>
    <v-divider />
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      name: 'TagsComponent',
      items: [],
      loading: false,
      search: '',
      selected: []
    }
  },

  computed: {
    allSelected () {
      return this.selected.length === this.items.length
    },
    categories () {
      const search = this.search.toLowerCase()

      if (!search) {
        return this.items
      }

      return this.items.filter((item) => {
        const text = item.name.toLowerCase()

        return text.includes(search)
      })
    },
    selections () {
      const selections = []

      for (const selection of this.selected) {
        selections.push(selection)
      }
      return selections
    }
  },
  watch: {
    selected () {
      this.search = ''
    }
  },
  created () {
    this.getAllTags()
  },
  methods: {
    getAllTags () {
      this.$API.tags.getAllTags().then((response) => {
        this.items = response.data.data
      })
    },
    updateTagList () {
      this.$emit('taglist', this.selected)
    }
  }
}
</script>
