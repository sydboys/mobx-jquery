import $ from 'jquery'

const renderHeader = (inject) => {
    const Header = (props = {}) => {
        return `<header>${props.header}</header>`
    }
    const render = 
        inject((store = {}) => {
            return {
                header: store.header,
                clickHeader: store.clickHeader
            }
        })((props) => {
            const header = Header(props);
            $('#header').html(header).off('click').on('click', props.clickHeader)
        })
}
export default renderHeader