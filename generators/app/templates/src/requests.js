/**
 * Created by ravi.hamsa on 7/16/16.
 */

import _ from 'lodash';
let urlPrefix = 'backend/api/v1/'


export default {
    getTier1Categories: {
        type: 'url',
        method: 'get',
        cache:'none',
        url: urlPrefix + 'meta/firstlevel/tier1categories',
        parser: function(data){
            _.each(data, function(item){
                item.name = item.label;
                item.id = item.value;
            })
            return data;
        }
    },
    getDashboardData: {
        type:'url',
        method:'post',
        cache:'none,',
        url:urlPrefix+'reporting/dashboard/data',
        parser: function(data){
            debugger;
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



