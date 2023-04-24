// Import Layout
import { HeaderOnly } from '~/Layouts';

// Import Routes Configuration
import config from '~/config';
// Import Pages
import Home from '~/pages/Home/';
import Follow from '~/pages/Follow/';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';


//Public Route
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.follow,
        component: Follow,
    },
    {
        path: config.routes.profile, //@ là dấu cố định có thể custom , ":nickname là path"
        component: Profile,

    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    }
    
];


// Private Route
const privateRoutes = [

];

export {publicRoutes, privateRoutes}