/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
   
  GetStarted:[
	 {
      type: 'doc',
      id: 'concepts/quickstart',
      label: "Quickstart"
    },
	/*{
        type: 'category',
        label: 'Qodly Hero Handbook',
        link: {
            type: 'doc',
            id: 'qodlyHeroHandbook/intro',
        },
        items: [
            'qodlyHeroHandbook/layers',
            { 	
                type: 'category',
                label: 'Qodly Studio - QDroid',
                link: {
                    type: 'doc',
                    id: 'qodlyHeroHandbook/qodlyStudio/intro',
                },
                items: [
                    'qodlyHeroHandbook/qodlyStudio/accessingQodly',
                    { 	
                        type: 'category',
                        label: 'WebForms',
                        link: {
                            type: 'doc',
                            id: 'qodlyHeroHandbook/qodlyStudio/webforms/intro',
                        },
                        items: [
                            { 	
                                type: 'category',
                                label: 'Components',
                                link: {
                                    type: 'generated-index',
                                    title: 'QDroid Incredible Components',
                                    description: 'For web application development, the first sub-element of the Components section is highly useful, providing powerful features that simplify the process. Now, let us take a closer look at each of the available components:',
                                    slug: '/category/components',
                                    keywords: ['components'],
                                    image: '/img/docusaurus.png',
                                },
                                items: [
                                    { 	
                                        type: 'category',
                                        label: 'Overview',
                                        link: {
                                            type: 'doc',
                                            id: 'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/intro',
                                        },
                                        items: [
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/propertiesPanel',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/tooltip',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/headerPanel',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/contextualPanel',
                                        ],
                                    },
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/styleBox',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/button',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/checkBox',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/image',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/icon',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/selectBox',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/text',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webformLoader',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/radio',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/matrix',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/selectInput',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/textInput',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/rangeInput',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/tabs',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/dataTable',
                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/fileInput',
                                ],
                            },
                            'qodlyHeroHandbook/qodlyStudio/webforms/components/craftedComponents/intro',
                            'qodlyHeroHandbook/qodlyStudio/webforms/components/templates/intro',
                            { 	
                                type: 'category',
                                label: 'Datasources',
                                link: {
                                    type: 'doc',
                                    id: 'qodlyHeroHandbook/qodlyStudio/webforms/datasources/intro',
                                },
                                items: [
                                    'qodlyHeroHandbook/qodlyStudio/webforms/datasources/intro',
                                ],
                            },
                            'qodlyHeroHandbook/qodlyStudio/webforms/styleLibrary/intro',
                            'qodlyHeroHandbook/qodlyStudio/webforms/outline/intro'
                        ],
                    },
                ],
            },
            { 	
                type: 'category',
                label: 'Qodly Server - Fortress',
                link: {
                    type: 'generated-index',
                    title: 'test',
                    description: 'test',
                    slug: '/qodlyServer',
                    keywords: ['qodlyServer'],
                    image: '/img/qodly.png',
                },
                items: [
                    'qodlyHeroHandbook/qodlyServer/intro',
                ],
            },
            { 	type: 'category',
                label: 'Qodly Cloud - Nimbus',
                link: {
                    type: 'generated-index',
                    title: 'test',
                    description: 'test',
                    slug: '/qodlyCloud',
                    keywords: ['qodlyCloud'],
                    image: '/img/qodly.png',
                },
                items: [
                    'qodlyHeroHandbook/qodlyCloud/intro',
                ],
            },
        ],
    },
    */
	/*   
   {
      type: 'doc',
      id: 'resources',
      label: "Resources"
    },
	*/	
  ],
  
  
  Develop:[
	{
			type: 'doc',
			id: 'studio/overview',
			label: "Overview"
	},
	{
			type: 'category',
			label: 'Model',
			items: ['studio/model/model-editor-interface',
				'studio/model/datastore-classes',
				'studio/model/attributes',
				'studio/model/functions',
				'studio/model/import',

			],
	},
	{
			type: 'category',
			label: 'Webforms',
			items: ['studio/design-webforms/create-webform',
					{
						type: 'category',
						label: 'Components',
						items: [
							'studio/design-webforms/components/componentsBasics',
							'studio/design-webforms/components/stylebox',
							'studio/design-webforms/components/selectbox',
							'studio/design-webforms/components/tabs',
							'studio/design-webforms/components/webformloader',
							'studio/design-webforms/components/matrix',
							'studio/design-webforms/components/datatable',
							'studio/design-webforms/components/text',
							'studio/design-webforms/components/button',
							'studio/design-webforms/components/textinput',
							'studio/design-webforms/components/image',
							'studio/design-webforms/components/fileupload',
							'studio/design-webforms/components/radio',
							'studio/design-webforms/components/rangeinput',
							'studio/design-webforms/components/selectinput',
							'studio/design-webforms/components/icon',
							'studio/design-webforms/components/checkbox',
						],
					},
				'studio/design-webforms/craftedComponents',
				'studio/design-webforms/templates',
				'studio/design-webforms/styling',
				'studio/design-webforms/datasources',
				'studio/design-webforms/events',
				'studio/rendering',
			],
	},
	{
			type: 'doc',
			id: 'studio/settings',
			label: "Settings"
	},
	{
			type: 'category',
			label: 'Coding and Debugging',
			items: ['studio/coding',
				'studio/debugging',
			],
	},
    {
        type: 'category',
        label: 'Access Control',
        items: [
            'studio/roles/accessControlMechanisms',
            'studio/roles/rolesPrivilegesOverview',
            {   
                type: 'category',
                label: 'Permissions',
                items: [
                    'studio/roles/datastorePermissions',
					'studio/roles/dataClassPermissions',
                    'studio/roles/attributesPermissions'
                ]
            },
            {   
                type: 'category',
                label: 'Function Level Access',
                items: [
                    'studio/roles/permissionsFunctionLevel',
                    'studio/roles/promoteActionFunction'
                ]
            },
			'studio/roles/includingPrivileges'
        ],
    },
    {
			type: 'category',
			label: 'Programming Guide',
			items: ['orda/data-model','orda/data','orda/queries',
			],
	},
	{
		type: 'category',
		label: 'QodlyScript Reference',
		link: {
			type: 'generated-index',
			title: 'QodlyScript',
			description: 'QodlyScript Reference Guide',
			slug: '/category/qodlyscript',
			keywords: ['qodlyscript', 'language'],
			image: '/img/docusaurus.png',
			},
		items: [
			'language/basics/lang-quicktour',
			{ 	type: 'category',
					label: 'Basics',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'generated-index',
						title: 'Basics',
						description: 'Main concepts of the QodlyScript Language.',
						slug: '/category/language',
						keywords: ['language'],
						image: '/img/docusaurus.png',
					},
					items: [
						'language/basics/lang-variables',
							{ 	type: 'category',
								label: 'Data Types',
								collapsible: true,
								collapsed: true,
								link: {
									type: 'doc',
									id: 'language/basics/lang-data-types',
									},
									items: [
										'language/basics/lang-blob',
										'language/basics/lang-boolean',
										'language/basics/lang-collection',
										'language/basics/lang-date',
										'language/basics/lang-null-undefined',
										'language/basics/lang-number',
										'language/basics/lang-object',
										'language/basics/lang-picture',
										'language/basics/lang-time',
										'language/basics/lang-text',
										'language/basics/lang-variant',
									],
							},
						'language/basics/lang-operators',
						'language/basics/lang-methods',
						'language/basics/lang-classes',
						'language/basics/lang-parameters',
						'language/basics/lang-expressions',
						'language/basics/lang-shared',
						'language/basics/lang-control-flow',
						'language/basics/lang-errors',
						'language/basics/lang-identifiers',
						'language/basics/lang-pathnames',
						],
				},
			'language/BlobClass',
			'language/boolean',
			'language/ClassClass',
			'language/CollectionClass',
			'language/CryptoKeyClass',
			'language/DataClassClass',
			'language/DataStoreClass',
			'language/dateandtime',
			'language/debug',
			'language/EmailObjectClass',
			'language/EntityClass',
			'language/EntitySelectionClass',
			'language/FileClass',
			'language/FileHandleClass',
			'language/FolderClass',
			'language/FunctionClass',
			'language/HTTPRequestClass',
			'language/IMAPTransporterClass',
			'language/json',
			'language/MailAttachmentClass',
			'language/math',
			'language/object',
			'language/pictures',
			'language/process',
			'language/SessionClass',
			'language/SignalClass',
			'language/string',
			'language/SystemWorkerClass',
			'language/UsersClass',
			'language/WebForm',
			'language/WebServerClass',
			'language/ZipArchiveClass',
			'language/ZipFileClass',
			'language/ZipFolderClass',
			],
		},
],

    Run:[
    {
		type: 'doc',
		id: 'cloud/getStarted',
		label: "Qodly Applications"
	},
	{
		type: 'doc',
		id: 'cloud/application-management',
		label: "Application Management"
	},
	{
		type: 'doc',
		id: 'cloud/deployment',
		label: "Release Management and Deployment"
	},

	],




   Architecture:[
    {
		type: 'doc',
		id: 'concepts/platform',
		label: "Platform Overview"
	},
    {
		type: 'doc',
		id: 'concepts/cloud',
		label: "Cloud Architecture"
	},
	],

  API:[
	{
		type: 'category',
		label: 'API',
		link: {
			type: 'generated-index',
			title: 'API',
			description: 'QodlyScript REST API',
			slug: '/category/API',
			image: '/img/docusaurus.png',
			},
		items: [
		  		{
					type: 'doc',
					id: 'api/overview-api',
					label: "Overview"
				},
			],
	},
  ],

};
	
module.exports = sidebars;
