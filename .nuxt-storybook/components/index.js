export { default as CTAsection } from '../..\\components\\CTAsection.vue'
export { default as CtaSectionS } from '../..\\components\\CtaSectionS.vue'
export { default as CustomInput } from '../..\\components\\customInput.vue'
export { default as Features } from '../..\\components\\Features.vue'
export { default as Notification } from '../..\\components\\Notification.vue'
export { default as Pricing } from '../..\\components\\Pricing.vue'
export { default as Quote } from '../..\\components\\Quote.vue'
export { default as Sponsors } from '../..\\components\\Sponsors.vue'
export { default as CommonHero } from '../..\\components\\common\\Hero.vue'
export { default as CommonTheFooter } from '../..\\components\\common\\TheFooter.vue'
export { default as CommonTheNavbar } from '../..\\components\\common\\TheNavbar.vue'
export { default as DashboardBarChart } from '../..\\components\\dashboard\\BarChart.vue'
export { default as DashboardCreditCard } from '../..\\components\\dashboard\\CreditCard.vue'
export { default as DashboardNav } from '../..\\components\\dashboard\\DashboardNav.vue'
export { default as DashboardDoughnutChart } from '../..\\components\\dashboard\\DoughnutChart.vue'
export { default as DashboardLineChart } from '../..\\components\\dashboard\\LineChart.vue'
export { default as DashboardSidebar } from '../..\\components\\dashboard\\Sidebar.vue'
export { default as DashboardTagsPercent } from '../..\\components\\dashboard\\TagsPercent.vue'
export { default as DashboardUserInfo } from '../..\\components\\dashboard\\UserInfo.vue'
export { default as DashboardUsers } from '../..\\components\\dashboard\\Users.vue'
export { default as PostsBlogPost } from '../..\\components\\posts\\BlogPost.vue'
export { default as PostsBlogSection } from '../..\\components\\posts\\BlogSection.vue'
export { default as PostsPostDetail } from '../..\\components\\posts\\PostDetail.vue'
export { default as PostsPostForm } from '../..\\components\\posts\\PostForm.vue'
export { default as TagsTagList } from '../..\\components\\tags\\TagList.vue'
export { default as UserProfile } from '../..\\components\\user\\Profile.vue'
export { default as TexteditorBlogSideForm } from '../..\\components\\texteditor\\BlogSideForm.vue'
export { default as TexteditorEditor } from '../..\\components\\texteditor\\Editor.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
