import $ from 'jquery'

const Header = (props = {}) => {
    return `<header>${props.header}</header>`
}
const renderHeader = (props = {}) => {
    console.log('header render')
    const header = Header(props);
    $('#header').html(header).off('click').on('click', props.clickHeader)
}
const render = (inject) => {
    inject((store = {}) => {
        return {
            header: store.header,
            clickHeader: store.clickHeader
        }
    })(renderHeader)
}
export default render