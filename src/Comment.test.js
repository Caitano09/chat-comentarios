import Comment from './Comment'
import {render} from 'enzyme'


it('should render', ()=>{
    const comment = { comment: 'test' }
    const wrapper = render(<Comment comment={comment}/>)
    expect(wrapper.text()).toBe('test')
})