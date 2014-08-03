import Ember from 'ember';

export default Ember.Controller.extend({

    sidebarIsOpen: false,

    menus: [
        {
            name: '',
            nodes: [
                {
                    name: 'Dashboard',
                    target: 'dashboard',
                    icon: 'test-icon'
                },
                {
                    name: 'Recipes',
                    target: 'recipes'
                },
                {
                    name: 'Settings',
                    target: 'settings.user',
                    icon: 'test-icon-3',
                    nodes: [
                        {
                            name: 'User',
                            target: 'settings.user',
                            icon: 'test-icon'
                        },
                        {
                            name: 'Security',
                            target: 'settings.security'
                        },
                        {
                            name: 'Recipes',
                            target: 'settings.recipes',
                            icon: 'test-icon-3'
                        }
                    ]
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
