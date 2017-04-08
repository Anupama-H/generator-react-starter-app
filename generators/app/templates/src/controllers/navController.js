/**
 * Created by ravi.hamsa on 4/7/17.
 */

import {SimpleEmitter} from "react-starter-components";
import {Map} from "immutable";
import _ from "lodash";


class NavController extends SimpleEmitter {

    constructor(){
        super(...arguments);
        this.attributes = Map();
    }

    readPageAttributes(attributes){
        this.attributes = Map(attributes);
    }

    setPageAttributes(attributes){
        this.attributes = this.attributes.merge(attributes);
        this.triggerChange();
    }

    setPageAttribute(attribute, value){
        let obj = {[attribute]:value};
        this.setPageAttributes(obj);
    }

    resetPageAttributes(attributes){
        this.attributes = Map(attributes);
        this.triggerChange();
    }

    clearPageAttribute(attribute){
        this.attributes = this.attributes.delete(attribute);
        this.triggerChange();
    }

    getURLHash(){
        let obj = this.toJSON();
        let url = '#/'+obj.pageId;
        let rest = _.omit(obj, 'pageId');
        let restParams = []
        for(var i in rest){
            restParams.push(`${i}=${rest[i]}`)
        }
        if(restParams.length > 0){
            url = url+'/'+restParams.join(';')
        }
        return url;
    }

    toJSON(){
        return this.attributes.toJSON();
    }

    triggerChange() {
        // this.trigger('change', this.toJSON());
        window.location.hash = this.getURLHash();
    }
}

export default new NavController();