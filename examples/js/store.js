import {
    observable,
    action
} from 'mobx'
class Store {
    @observable body = 'body'
    @observable header = 'header'
    @observable footer = 'footer'

    @action
    clickHeader = () => {
        this.header = '1111'
    }
}
export default new Store()