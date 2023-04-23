// Import Layout
import { HeaderOnly } from '~/components/Layouts';

// Import Routes Configuration
import routesConfig from '~/config/routes';
// Import Pages
import Home from '~/pages/Home/';
import Follow from '~/pages/Follow/';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';


//Public Route
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.follow,
        component: Follow,
    },
    {
        path: routesConfig.profile, //@ là dấu cố định có thể custom , ":nickname là path"
        component: Profile,

    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    }
    
];


// Private Route
const privateRoutes = [

];

export {publicRoutes, privateRoutes}