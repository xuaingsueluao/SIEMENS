// 英文语言包
export default {
	// 通用
	common: {
		confirm: 'Confirm',
		cancel: 'Cancel',
		save: 'Save',
		delete: 'Delete',
		edit: 'Edit',
		loading: 'Loading...',
		success: 'Success',
		failed: 'Failed',
		retry: 'Retry',
		back: 'Back'
	},
	
	// 欢迎页
	welcome: {
		title: 'SIEMENS',
		line1: 'Welcome to',
		line2: 'Siemens Hall No.1',
		robotStatus: 'Robot Status',
		connected: 'Connected',
		disconnected: 'Disconnected',
		startRobot: 'Start Robot'
	},
	
	// 首页/功能大厅
	home: {
		title: 'Control Panel',
		settings: 'Settings',
		remote: 'Remote Control',
		newRoute: 'New Route',
		faceRecognition: 'Face Recognition',
		voiceSettings: 'Voice Settings',
		mapping: 'Mapping & Navigation',
		volume: 'Volume',
		initialPosition: 'Initial Position',
		selectRoute: 'Select Route',
		startTour: 'Start Tour',
		stopTour: 'Stop Tour',
		shutdown: 'Shutdown Robot',
		robotPerspective: 'Robot View',
		selectRouteTitle: 'Select Route',
		batteryStatus: 'Battery',
		noRouteAvailable: 'No routes available\nPlease go to "New Route"',
		routeSelected: 'You have selected {routeName}'
	},
	
	// 设置
	settings: {
		title: 'Settings',
		language: 'Language',
		languageSwitch: 'Language',
		theme: 'Theme',
		robotModel: 'Robot Model',
		audioSource: 'Audio Source',
		audioSourceInternal: 'Internal Speaker',
		audioSourceExternal: 'External Speaker',
		deviceNumber: 'Device Number',
		serviceIP: 'Service IP',
		deploymentTime: 'Deployment Time',
		wlan: 'WLAN',
		connectionStatus: 'Connection Status',
		contactUs: 'Contact Us'
	},
	
	// 遥控模式
	remote: {
		title: 'Remote Control',
		functionArea: 'Action Zone',
		actions: {
			highFive: 'High Five',
			handshake: 'Handshake',
			hug: 'Hug',
			clap: 'Clap',
			wave: 'Wave',
			raiseHands: 'Raise Hands',
			doubleHeart: 'Double Heart',
			raiseRight: 'Raise Right',
			blowKiss: 'Blow Kiss',
			chestWave: 'Chest Wave'
		}
	},
	
	// 新建路线
	route: {
		title: 'New Route',
		mapPlaceholder: 'Map Area',
		addContent: 'Add Content',
		forwardSpeed: 'Forward Speed',
		save: 'Save',
		editRouteName: 'Edit Route Name',
		routeNamePlaceholder: 'Enter route name',
		contentPlaceholder: 'Enter explanation content...',
		defaultRouteName: 'Route 1'
	},
	
	// 讲解内容配置
	routeContent: {
		actionTitle: 'Action',
		languageTitle: 'Language',
		voiceTitle: 'Voice Selection',
		addContentTitle: 'Add Content',
		contentPlaceholder: 'Enter the content to explain',
		uploadFile: 'Upload File',
		actions: {
			guideRight: 'Guide Right',
			guideLeft: 'Guide Left',
			introduceRight: 'Introduce Right',
			introduceLeft: 'Introduce Left',
			welcome: 'Welcome',
			auto: 'Auto'
		},
		languages: {
			chinese: 'Chinese',
			english: 'English',
			german: 'German'
		},
		voices: {
			maleA: 'A (Male)',
			femaleB: 'B (Female)',
			childC: 'C (Child)'
		}
	},
	
	// 人脸识别
	face: {
		title: 'Face Recognition',
		savedFaces: 'Saved Face Data',
		uploadPhotos: 'Upload Photos',
		namePlaceholder: 'Enter name',
		upload: 'Upload',
		noMore: 'No more data',
		emptyTip: 'No saved face data',
		deleteConfirmTitle: 'Confirm Delete',
		deleteConfirmContent: 'Are you sure to delete this face data?',
		pleaseSelectImage: 'Please select an image first',
		pleaseEnterName: 'Please enter a name',
		noDataToSave: 'No data to save'
	},
	
	// 语音设置
	voice: {
		title: 'Voice Settings',
		characterSettings: 'Character Settings',
		voiceSelect: 'Voice Selection',
		voiceA: 'A (Male)',
		voiceB: 'B (Female)',
		voiceC: 'C (Child)',
		replyContent: 'Reply Content & Knowledge Base',
		llmSelect: 'LLM Selection',
		qaKnowledgeBase: 'Q&A Knowledge Base',
		enabled: 'Enabled',
		disabled: 'Disabled',
		clickUpload: 'Upload',
		uploadedKnowledge: 'Uploaded Knowledge Base',
		uploadTip1: 'Re-uploading will overwrite the old knowledge base',
		uploadTip2: 'To delete, please upload an empty document (.txt format)',
		uploadTip3: 'Maximum knowledge base size: 4096 characters',
		voiceRecognition: 'Voice Recognition Log',
		connectionStatus: 'Connection Status',
		connected: 'Connected',
		disconnected: 'Disconnected',
		robot: 'Robot'
	},
	
	// 建图和导航
	mapping: {
		title: 'Mapping & Navigation'
	},
	
	// 音量调节
	volume: {
		title: 'Volume'
	},
	
	// 设备相关
	device: {
		status: 'Device Status',
		online: 'Online',
		offline: 'Offline',
		connect: 'Connect',
		disconnect: 'Disconnect'
	}
}
