## mobx-react
This is a library of binding mobx and react.
## api
### inject
You must create inject by provider, like this:
```javascript
import {
    provider
} from 'mobx-jquery'

const inject = provider(store);
```
Then, you can use inject as follows:
```javascript
const renderHeader = (props) => {
    const Header = `<header>${props.name}</header>`
    $("#header").html(Header);
}
inject((store) => {
    return {
        name: store.name
    }
})(renderHeader)
```
### observer
observer's usage is similar to inject.
```javascript
import {
        provider
} from 'mobx-jquery'

const renderHeader = observer((props) => {
    const Header = `<header>${props.name}</header>`
    $("#header").html(Header);
})
```
