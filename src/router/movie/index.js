export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
   children:[  //二级路由
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : '/movie',
            component : ()=> import('@/components/NowPlaying')
        }
    ]
}