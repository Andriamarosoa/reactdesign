 
export const MainNav = [
    {
        icon: 'pe-7s-rocket',
        label: 'Dashboard',
        // to: '#/dashboards/crm',
        content: [
            {
                label: 'Accueil',
                to: '#/maintenance',
            },
            {
                label: 'Devis',
                to: '#/maintenance',
            },
            {
                label: 'Affaires',
                to: '#/maintenance',
            },
            {
                label: 'Planning',
                to: '#/maintenance',
            },
            {
                label: 'Equipe',
                to: '#/maintenance',
            },
            {
                label: 'Clients',
                to: '#/maintenance',
            },
            {
                label: 'Analyse et comptes',
                to: '#/maintenance',
            },
            
        ]
    },
    {
        icon: 'pe-7s-browser',
        label: 'Espace utilisateur',
        // to: '#/dashboards/crm',
        content:[
            {
                label: 'Login',
                to: '#/maintenance',
            },
            {
                label: 'Register',
                to: '#/maintenance',
            },
            {
                label: 'Forgot password',
                to: '#/maintenance',
            },
            
        ]
    },
    {
        icon: 'pe-7s-plugin',
        label: 'Application',
        to: '#/dashboards/crm',
        content:[
            {
                label: 'MailBox',
                to: '#/maintenance',
            },
            {
                label: 'Chatbox',
                to: '#/maintenance',
            },
            {
                label: 'version',
                to: '#/maintenance',
            },
            
        ]
    },
    
];
export const ComponentsNav = [
    {
        icon: 'pe-7s-diamond',
        label: 'Devis',
        content: [
            {
                label: 'Nouveau devis',
                to: '#/maintenance',
            },
            {
                label: 'Devis en cours',
                to: '#/maintenance',

            }
        ],
    }, 
    {
        icon: 'pe-7s-car',
        label: 'Révisions',
        content: [
            {
                label: 'Révisions',
                to: '#/maintenance',
            },
            {
                label: 'Actualiser un devis',
                to: '#/maintenance',
            },
        ],
    },
    {
        icon: 'pe-7s-display2',
        label: 'Paramètres de vente',
        // to: '#/tables/regular-tables',
        content: [
            {
                label: 'Catégories',
                to: '#/maintenance',
            },
            {
                label: 'Moyens',
                to: '#/maintenance',
            },
            {
                label: 'Coût',
                to: '#/maintenance',
            },
            {
                label: 'Tâches élémentaires',
                to: '#/maintenance',
            },
            
        ],
    },
    {
        icon: 'pe-7s-display2',
        label: 'Clients',
        // to: '#/tables/regular-tables',
        content: [
            {
                label: 'Nouveau client',
                to: '#/add-client',
            },
            {
                label: 'Liste des clients',
                to: '#/client',
            },
        ],
    },
    
];
export const FormsNav = [
    {
        icon: 'pe-7s-light',
        label: 'Planning',
        // to: '#/forms/controls',
        content: [
            {
                label: 'Planning personnel',
                to: '#/maintenance',
            },
            {
                label: 'Planning global',
                to: '#/maintenance',
            },
        ],
    },
    {
        icon: 'pe-7s-eyedropper',
        label: 'Membres de l’équipe',
        // to: '#/forms/layouts',
        content: [
            {
                label: 'Nouveau membre',
                to: '#/maintenance',
            },
            {
                label: 'Liste du personnel',
                to: '#/maintenance',
            },
        ],
    },
    {
        icon: 'pe-7s-pendrive',
        label: 'Plan de charges',
        to: '#/maintenance',
    },
    {
        icon: 'pe-7s-pendrive',
        label: 'Tâches',
        // to: '#/forms/validation',
        content: [
            {
                label: 'Nouvelle tâche',
                to: '#/maintenance',
            },
            {
                label: 'Tâches en cours',
                to: '#/maintenance',
            },
        ],
    },
    
];
export const WidgetsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Affaires personnelles',
        to: '#/maintenance',
    },
    {
        icon: 'pe-7s-id',
        label: 'Affaires globales',
        // to: '#/maintenance',
        content: [
            {
                label: 'Affaires à planifier',
                to: '#/maintenance',
            },
            {
                label: 'Affaires en cours',
                to: '#/maintenance',
            },
            {
                label: 'Affaires livrables',
                to: '#/maintenance',
            },
            {
                label: 'Affaires facturables',
                to: '#/maintenance',
            },
            {
                label: 'Affaires terminées',
                to: '#/maintenance',
            },
        ],
    },
    {
        icon: 'pe-7s-display1',
        label: 'Affaires archivés',
        to: '#/maintenance',
    },
    
];
export const bilanAnalyseNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Bilan',
        // to: '#/charts/chartjs',
        content:[
            {
                icon: 'pe-7s-graph2',
                label: 'Bilan horaire',
                content:[
                    {
                        icon: 'pe-7s-graph2',
                        label: 'Bilan personnel',
                        to: '#/maintenance',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        label: 'Bilan équipe',
                        to: '#/maintenance',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        label: 'Bilan affaires',
                        to: '#/maintenance',
                    }, 
                ]
            },
            {
                icon: 'pe-7s-graph2',
                label: 'Bilan mensuel',
                to: '#/bilan-mensuel',
            },
            {
                icon: 'pe-7s-graph2',
                label: 'Bilan annuel',
                to: '#/maintenance',
            },
        ]
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Indicateurs bilan',
        to: '#/maintenance',
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Tableaux d’analyse',
        content:[
            {
                icon: 'pe-7s-graph2',
                label: 'Tableau des affaires en cours',
                to: '#/maintenance',
            },
            {
                icon: 'pe-7s-graph2',
                label: 'Tableau d’avancement',
                to: '#/maintenance',
            },
            {
                icon: 'pe-7s-graph2',
                label: 'Tableau des factures',
                to: '#/maintenance',
            }, 
            {
                icon: 'pe-7s-graph2',
                label: 'Tableau paye',
                to: '#/maintenance',
            }, 
            
        ]
    }, 
];
export const ChartsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Créer une facture',
        to: '#/maintenance',
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Tableau des comptes',
        to: '#/maintenance',
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Indicateur de comptes',
        to: '#/maintenance',
    },
    
]
export const MenuInProgress=[
    {
        icon: 'pe-7s-display2',
        label: 'Clients',
        // to: '#/tables/regular-tables',
        content: [
            {
                label: 'Nouveau client',
                to: '#/add-client',
            },
            {
                label: 'Liste des clients',
                to: '#/client',
            },
        ],
    },
    {
        icon: 'pe-7s-display2',
        label: 'Postes',
        to: '#/job',
    },
    {
        icon: 'pe-7s-display2',
        label: 'Catégories de coût',
        to: '#/categories-cout',
    },
]