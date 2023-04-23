// Import Layout
 import { HeaderOnly } from '~/components/Layouts';


// Import Pages
import Home from '~/pages/Home/';
import Follow from '~/pages/Follow/';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';


//Public Route
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/follow',
        component: Follow,
    },
    {
        path: '/profile/:nickname', //@ là dấu cố định có thể custom , ":nickname là path"
        component: Profile,

    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    }
    
];


// Private Route
const privateRoutes = [

];

export {publicRoutes, privateRoutes}