
import {
    autorun
} from 'mobx'
export const provider = (store) => (getState) => (component) => {
    autorun(() => {
        try {
            const props = getState(store);
            component(props);
        } catch (err) {
            console.err(err);
            throw err;
        }
    })
}
export const observer = (component) => (props) => {
    autorun(() => {
        component(props);
    })
}
export default {
    provider,
    observer
}