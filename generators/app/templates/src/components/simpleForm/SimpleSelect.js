/**
 * Created by ravi.hamsa on 9/24/16.
 */
import SimpleElement from './SimpleElement';

export default class SimpleSelect extends SimpleElement {
    render(){
        let options = this.props.options || [];
        let strings = this.props.strings || {};
        let selectText = strings.select || 'Select'
        if(options.length === 0){
            selectText = strings.noOptions || 'No Options'
        }
        return <select {...this.getElementProps()}>
            <option value="-1">{selectText}</option>
            {options.map(function(option, index){
                return <option value={option.id} key={index}>{option.name}</option>
            },this)}
        </select>
    }
}