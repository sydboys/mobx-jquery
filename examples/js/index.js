import $ from 'jquery'
import store from './store'
import renderBody from './components/Body'
import renderHeader from './components/Header'
import renderFooter from './components/Footer'

import {
    provider
} from '../../lib/mobx-jquery'

$(function() {
    const inject = provider(store);
    const render = () => {
        renderBody(inject);
        renderHeader(inject);
        renderFooter(inject);
    }
    render();
})