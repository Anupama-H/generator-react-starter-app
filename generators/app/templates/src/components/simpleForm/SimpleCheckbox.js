/**
 * Created by ravi.hamsa on 9/24/16.
 */
import SimpleElement from './SimpleElement';

export default class SimpleCheckbox extends SimpleElement {

    render(){
        let elementProps = this.getElementProps();
        elementProps.defaultChecked = elementProps.value;
        return <label> <input type="checkbox" {...this.getElementProps()} /> {this.props.label} </label>
    }
}