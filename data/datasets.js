export default [
    {
        tag: 'AMG on Dragonfly Adaptive',
        path: 'dfly-2550-adaptive-amg-1728',
        topology: 'Dragonfly',
        groups: 51,
        routers: 510,
        terminals: 2550
    },
    {
        tag: 'Dragonfly Dally Uniform Random Traffic',
        path: 'dfly-dally-rand',
        topology: 'Dragonfly 1-D',
        groups: 65,
        routers: 1040,
        terminals: 8320,
        localLinkPerRouter: 17,
        globalLinkPerRouter: 8
    },
    // {
    //     tag: 'Dragonfly Plus Uniform Random Traffic',
    //     path: 'dfly-plus-rand',
    //     topology: 'Dragonfly Plus',
    //     groups: 33,
    //     routers: 1056,
    //     terminals: 8448,
    //     localLinkPerRouter: 16,
    //     globalLinkPerRouter: 16
    // },
    // {
    //     tag: 'AMR Boxlib on Dragonfly Adaptive',
    //     path: 'dfly-2550-adaptive-amr',
    //     topology: 'Dragonfly',
    //     groups: 51,
    //     routers: 510,
    //     terminals: 2550
    // },
    // {
    //     tag: 'Dragonfly Adaptive MiniFE',
    //     path: 'dfly-2550-adaptive-minife',
    //     topology: 'Dragonfly',
    //     groups: 51,
    //     routers: 510,
    //     terminals: 2550
    // },
    // {
    //     tag: 'Random Group Placement Multi-Apps on Dfly',
    //     path: 'dfly-5k-mapp-group',
    //     topology: 'Dragonfly',
    //     groups: 73,
    //     routers: 876,
    //     terminals: 5256,
    //     jobAllocation: './workloads.conf',
    //     jobs: ['AMG', 'AMR Boxlib', 'MiniFE']
    // },
    // {
    //     tag: 'Random Router Placement Multi-Apps on Dfly',
    //     path: 'dfly-5k-mapp-router',
    //     topology: 'Dragonfly',
    //     groups: 73,
    //     routers: 876,
    //     terminals: 5256,
    //     jobAllocation: './workloads.conf',
    //     jobs: ['AMG', 'AMR Boxlib', 'MiniFE']
    // },
    // {
    //     tag: 'Hybird Placement Multi-Apps on Dfly',
    //     path: 'dfly-5k-mapp-hybrid',
    //     topology: 'Dragonfly',
    //     groups: 73,
    //     routers: 876,
    //     terminals: 5256,
    //     jobAllocation: './workloads.conf',
    //     jobs: ['AMG', 'AMR Boxlib', 'MiniFE']
    // },
]
