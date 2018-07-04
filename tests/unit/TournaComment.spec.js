import { shallowMount } from '@vue/test-utils'
import TournaComment from '@/components/Test/TournaComment.vue'

describe('TournaComment.spec.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(TournaComment, { // Create a shallow instance of the component
      data () {
        return { userComment: '' }
      }
    })
  })

  it('equals messages to ["Cat"]', () => {
    // Within cmp.vm, we can access all Vue instance methods
    expect(cmp.vm.userComment).toEqual('')
  })

  // it('has the expected html structure', () => {
  //   expect(cmp.element).toMatchSnapshot()
  // })
})
