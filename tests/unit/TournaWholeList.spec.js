import Vuex from 'vuex'
import { spyOn } from 'jest'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import TournaWholeList from '@/components/Test/TournaWholeList.vue'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('TournaWholeList.spec.js', () => {
  it('renders a value from $store.state', () => {
    const wrapper = mount(TournaWholeList, {
      computed: {
        posts: () => [
          {
            body: 'quia',
            id: 1,
            title: 'sunt',
            userId: 1
          }
        ],
        filteredPosts () {
          return true
        }
      },
      localVue
    })
    expect(wrapper.vm.posts[0].body).toEqual('quia')
    expect(wrapper.vm.posts[0].id).toEqual(1)
    expect(wrapper.vm.posts[0].title).toEqual('sunt')
    expect(wrapper.vm.posts[0].userId).toEqual(1)
  })
})
