/**
 * Created by ravi.hamsa on 7/16/16.
 */

import _ from 'lodash';
let urlPrefix = 'backend/api/v1/'


export default {
    getListOfSomeItems: {
        type: 'url',
        method: 'get',
        cache:'none',
        url: urlPrefix + 'dummyData',
        parser: function(data){
            return data;
        }
    },

    createAdvertiser:{
        type:'url',
        method:'post',
        cache:'none',
        url:urlPrefix + 'account/adv/create',
        parser: function(data){
            debugger;
            return data;
        }
    }
}



