import $ from 'jquery'

const Body = (props = {}) => {
    return `<h1>${props.body}</h1>`
}
const renderBody = (props = {}) => {
    console.log('body render')
    const body = Body(props)
    $('#body').html(body);
}
const render = (inject) => {
    inject((store = {}) => {
        return {
            body: store.body
        }
    })(renderBody)
}
export default render;