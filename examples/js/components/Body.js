import $ from 'jquery'

const renderBody = (inject) => {
    const Body = (props = {}) => {
        return `<h1>${props.body}</h1>`
    }
    const render = inject((store = {}) => {
        return {
            body: store.body
        }
    })((props = {}) => {
        const body = Body(props)
        $('#body').html(body);
    })
}
export default renderBody;