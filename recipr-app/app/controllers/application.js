import Ember from 'ember';

export default Ember.Controller.extend({

    sidebarIsOpen: false,
    
    menus: [
        {
            name: 'Main Menu',
            nodes: [
                {
                    name: 'Node 1',
                    target: '/',
                    icon: 'test-icon',
                    model: 232
                },
                {
                    name: 'Node 2',
                    target: '/test',
                    external: true
                },
                {
                    name: 'Node 3',
                    target: '/test',
                    icon: 'test-icon-3'
                }
            ]
        },
        {
            nodes: [
                {
                    name: 'Node 1',
                    target: '/',
                    icon: 'test-icon'
                },
                {
                    name: 'Node 2',
                    target: '/test',
                    icon: 'test-icon-2'
                },
                {
                    name: 'Node 3',
                    target: '/test',
                    icon: 'test-icon-3'
                }
            ]
        }
    ],

    actions: {
        toggleSidebar: function(){
            this.set('sidebarIsOpen', !this.get('sidebarIsOpen'));
        }
    }
});
