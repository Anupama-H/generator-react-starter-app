/**
 * Created by ravi.hamsa on 9/24/16.
 */
import {core, components} from "react-starter-components";
import _ from "lodash";
const {FormElement} = components.Form;

export default class SimpleElement extends FormElement {

    getElementProps(){
        let defaultValue = this.getDefaultValue();
        let value = defaultValue || '';
        let elementProps = _.pick(this.props, ['name', 'placeholder', 'className', 'type'])
        elementProps.className +=' form-control';
        elementProps.value = value;
        elementProps.onChange=this.onChange.bind(this);
        return elementProps;
    }

    render(){
        return <input type="text" {...this.getElementProps()} />
    }
}