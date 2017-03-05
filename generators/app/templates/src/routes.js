/**
 * Created by ravi.hamsa on 7/23/16.
 */
import render from './render'
import Home from './pages/Home';

import {Unknown, UserLogin} from './pages'


const parseParams = function (location) {

    let str = location.params.attributes || '';
    let paramsStrings = str.split(';');
    let paramsObj = {};
    paramsStrings.forEach(function (item) {
        let itemParts = item.split('=');
        let key = itemParts[0];
        let value = itemParts[1];
        paramsObj[key] = value;
    })
    return paramsObj;
}

const emptyFunction = function () {
}


export default {
    path: '/',
    async action({next}) {
        const component = await next();

        let userDetails = {}
        if (component !== undefined) {
            return render(component, userDetails);
        } else {
            return render(<Unknown/>, userDetails);
        }

    },
    children: [

        {
            path: '/user',
            async action({ next }) {
                const component = await next();
                return component;
            },
            children: [
                {
                    path:'/',
                    action: function (location) {
                        return <UserLogin {...parseParams(location)}/>
                    }
                },
                {
                    path:'/login',
                    action: function (location) {
                        return <UserLogin {...parseParams(location)}/>
                    }
                }

            ]
        },
        {
            path: '/home',
            async action({ next }) {
                const component = await next();
                return component;
            },
            children: [
                {
                    path:'/',
                    action: function (location) {
                        return <Home {...parseParams(location)}/>
                    }
                }

            ]
        }
    ]
};
