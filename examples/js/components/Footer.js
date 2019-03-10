import $ from 'jquery'
import { observable, action, autorun } from 'mobx';

class Footer {
    @observable count = 1;
    static instance = null
    static getInstance(props = {}) {
        if (!Footer.instance) {
            return Footer.instance = new Footer(props);
        }
        return Footer.instance;
    }
    constructor(props) {
        this.props = props;
    }
    @action
    changeCount = () => {
        this.count += 1
    }
    render() {
        return `<footer>${this.props.footer} ${this.count}</footer>`
    }
}
const renderFooter = (props = {}) => {
    const footer = Footer.getInstance(props);
    const renderHTML = footer.render();
    $('#footer').html(renderHTML).off('click').on('click', footer.changeCount)
}

const render = (inject) => {
    inject((store = {}) => {
        return {
            footer: store.footer
        }
    })(renderFooter)
}
export default render