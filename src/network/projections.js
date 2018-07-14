export default [
    {
        name: 'Dragonfly intra-group',
        spec: [
            {
                aggregate: 'router_rank',
                project: 'local_links',
                vmap: {
                    color: 'traffic',
                },
                colors: 'Blues'
            },
            {
                aggregate: 'router_port',
                project: 'global_links',
                vmap: {
                    color: 'traffic',
                },
                colors: ["#eee", 'purple']
            },
            {
                aggregate: 'router_port',
                project: 'terminals',
                vmap: {
                    color: 'data_size'
                },
                colors: ["#eee", 'teal']
            }
        ]
    },
    {
        name: 'Dragonfly inter-group',
        spec: [
            {
                aggregate: 'group_id',
                project: 'global_links',
                binMax: 9,
                vmap: {
                    color: 'traffic'
                },
                colors: ["#eee", 'purple'],
            },
            {
                aggregate: 'router_port',
                project: 'local_links',
                vmap: {
                    color: 'traffic'
                },
                colors: ["steelblue", 'red'],
            },
            {
                project: 'terminals',
                aggregate: 'router_port',
                vmap: {
                    color: 'data_size'
                },
                colors: ["#eee", 'teal']
            }
        ]
    }
]