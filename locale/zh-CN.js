// 中文语言包
export default {
	// 通用
	common: {
		confirm: '确认',
		cancel: '取消',
		save: '保存',
		delete: '删除',
		edit: '编辑',
		loading: '加载中...',
		success: '操作成功',
		failed: '操作失败',
		retry: '重试',
		back: '返回'
	},
	
	// 欢迎页
	welcome: {
		title: 'SIEMENS',
		line1: '欢迎来到',
		line2: '西门子1号展厅',
		robotStatus: '机器人状态',
		connected: '已连接',
		disconnected: '未连接',
		startRobot: '启动机器人'
	},
	
	// 首页/功能大厅
	home: {
		title: '控制面板',
		settings: '设置',
		remote: '遥控模式',
		newRoute: '新建路线',
		faceRecognition: '人脸识别',
		voiceSettings: '语音设置',
		mapping: '建图导航',
		volume: '音量调节',
		initialPosition: '初始定位',
		selectRoute: '选择路线',
		startTour: '开启导览',
		stopTour: '关闭导览',
		shutdown: '关闭机器人',
		robotPerspective: '机器人视角',
		selectRouteTitle: '选择路线',
		batteryStatus: '电量',
		noRouteAvailable: '无可用路线\n请前往"新建路线"',
		routeSelected: '您已经选择{routeName}'
	},
	
	// 设置
	settings: {
		title: '设置',
		language: '语言',
		languageSwitch: '语言切换',
		theme: '主题',
		robotModel: '机器人型号',
		audioSource: '音源选择',
		audioSourceInternal: '本体音响',
		audioSourceExternal: '外接音响',
		deviceNumber: '设备编号',
		serviceIP: '服务IP',
		deploymentTime: '部署时间',
		wlan: 'WLAN',
		connectionStatus: '连接状态',
		contactUs: '联系我们'
	},
	
	// 遥控模式
	remote: {
		title: '遥控模式',
		functionArea: '展示功能区',
		actions: {
			highFive: '击掌',
			handshake: '握手',
			hug: '拥抱',
			clap: '鼓掌',
			wave: '挥手',
			raiseHands: '举双手',
			doubleHeart: '双手比心',
			raiseRight: '举右手',
			blowKiss: '右手飞吻',
			chestWave: '胸前挥手'
		}
	},
	
	// 新建路线
	route: {
		title: '新建路线',
		mapPlaceholder: '地图区域',
		addContent: '添加讲解内容',
		forwardSpeed: '前进速度',
		save: '保存',
		editRouteName: '编辑路线名称',
		routeNamePlaceholder: '请输入路线名称',
		contentPlaceholder: '请输入讲解内容...',
		defaultRouteName: '路线1'
	},
	
	// 讲解内容配置
	routeContent: {
		actionTitle: '执行动作',
		languageTitle: '语言',
		voiceTitle: '声音选择',
		addContentTitle: '添加讲解内容',
		contentPlaceholder: '请输入要讲解的内容',
		uploadFile: '上传文件',
		actions: {
			guideRight: '向右引导',
			guideLeft: '向左引导',
			introduceRight: '向右介绍',
			introduceLeft: '向左介绍',
			welcome: '欢迎光临',
			auto: '自动'
		},
		languages: {
			chinese: '中文',
			english: '英文',
			german: '德文'
		},
		voices: {
			maleA: 'A (男声)',
			femaleB: 'B (女声)',
			childC: 'C (童声)'
		}
	},
	
	// 人脸识别
	face: {
		title: '人脸识别',
		savedFaces: '已保存人脸数据',
		uploadPhotos: '上传照片',
		namePlaceholder: '请填写备注',
		upload: '上传',
		noMore: '没有更多了',
		emptyTip: '暂无保存的人脸数据',
		deleteConfirmTitle: '确认删除',
		deleteConfirmContent: '确定要删除该人脸数据吗？',
		pleaseSelectImage: '请先选择图片',
		pleaseEnterName: '请输入姓名',
		noDataToSave: '没有可保存的数据'
	},
	
	// 语音设置
	voice: {
		title: '语音设置',
		characterSettings: '人物设定',
		voiceSelect: '音色选择',
		voiceA: 'A (男声)',
		voiceB: 'B (女声)',
		voiceC: 'C (童声)',
		replyContent: '回复内容&知识库',
		llmSelect: '大语言模型选择',
		qaKnowledgeBase: 'Q&A知识库',
		enabled: '已开启',
		disabled: '已关闭',
		clickUpload: '点击上传',
		uploadedKnowledge: '已上传知识库',
		uploadTip1: '重新上传会覆盖旧知识库',
		uploadTip2: '删除知识库请上传空文档(请上传".txt"格式文档)',
		uploadTip3: '知识库最大字数为4096字',
		voiceRecognition: '语音识别记录',
		connectionStatus: '连接状态',
		connected: '已连接',
		disconnected: '未连接',
		robot: '机器人'
	},
	
	// 建图和导航
	mapping: {
		title: '建图和导航'
	},
	
	// 音量调节
	volume: {
		title: '音量调节'
	},
	
	// 设备相关
	device: {
		status: '设备状态',
		online: '在线',
		offline: '离线',
		connect: '连接',
		disconnect: '断开连接'
	}
}
