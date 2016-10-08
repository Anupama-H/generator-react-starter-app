/**
 * Created by ravi.hamsa on 7/23/16.
 */
import render from './render'
import Home from './pages/Home';
import CampaignCreate from './pages/campaign/Create';
import CampaignList from './pages/campaign/List';
import AdvertiserCreate from './pages/advertiser/Create';
import AdvertiserList from './pages/advertiser/List';
import PublisherCreate from './pages/publisher/Create';
import PublisherList from './pages/publisher/List';

import Unknown from './pages/Unknown';


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
            return render(<Unknown pageId="unknown"/>, userDetails);
        }

    },
    children: [
        {
            path: '/',
            action: function (location) {
                return <Home {...parseParams(location)} pageId="home"/>
            }
        },
        {
            path: '/campaign',
            async action({ next }) {
                const component = await next();
                return component;
            },
            children: [
                {
                    path:'/',
                    action: function (location) {
                        return <CampaignList {...parseParams(location)} pageId="campaign-list"/>
                    }
                },
                {
                    path:'/create',
                    action: function (location) {
                        return <CampaignCreate {...parseParams(location)} pageId="campaign-create"/>
                    }
                }

            ]
        },
        {
            path: '/advertiser',
            async action({ next }) {
                const component = await next();
                return component;
            },
            children: [
                {
                    path:'/',
                    action: function (location) {
                        return <AdvertiserList {...parseParams(location)} pageId="advertiser-list"/>
                    }
                },
                {
                    path:'/create',
                    action: function (location) {
                        return <AdvertiserCreate {...parseParams(location)} pageId="advertiser-create"/>
                    }
                }

            ]
        },
        {
            path: '/publisher',
            async action({ next }) {
                const component = await next();
                return component;
            },
            children: [
                {
                    path:'/',
                    action: function (location) {
                        return <PublisherList {...parseParams(location)} pageId="publisher-list"/>
                    }
                },
                {
                    path:'/create',
                    action: function (location) {
                        return <PublisherCreate {...parseParams(location)} pageId="publisher-create"/>
                    }
                }
            ]
        }

    ]
};
