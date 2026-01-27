// 德语语言包
export default {
	// 通用
	common: {
		confirm: 'Bestätigen',
		cancel: 'Abbrechen',
		save: 'Speichern',
		delete: 'Löschen',
		edit: 'Bearbeiten',
		loading: 'Laden...',
		success: 'Erfolgreich',
		failed: 'Fehlgeschlagen',
		retry: 'Wiederholen',
		back: 'Zurück'
	},
	
	// 欢迎页
	welcome: {
		title: 'SIEMENS',
		line1: 'Willkommen bei',
		line2: 'Siemens Halle Nr.1',
		robotStatus: 'Roboterstatus',
		connected: 'Verbunden',
		disconnected: 'Nicht verbunden',
		startRobot: 'Roboter starten'
	},
	
	// 首页/功能大厅
	home: {
		title: 'Bedienfeld',
		settings: 'Einstellungen',
		remote: 'Fernmodus',
		newRoute: 'Neue Route',
		faceRecognition: 'Gesichtserkennung',
		voiceSettings: 'Sprache',
		mapping: 'Karte/Navi',
		volume: 'Lautstärke',
		initialPosition: 'Startposition',
		selectRoute: 'Route wählen',
		startTour: 'Tour starten',
		stopTour: 'Tour beenden',
		shutdown: 'Ausschalten',
		robotPerspective: 'Roboter-Ansicht',
		selectRouteTitle: 'Route wählen',
		batteryStatus: 'Ladestand',
		noRouteAvailable: 'Keine Routen verfügbar\nBitte gehen Sie zu "Neue Route"',
		routeSelected: 'Sie haben {routeName} ausgewählt'
	},
	
	// 设置
	settings: {
		title: 'Einstellungen',
		language: 'Sprache',
		languageSwitch: 'Sprache',
		theme: 'Thema',
		robotModel: 'Robotermodell',
		audioSource: 'Audioquelle',
		audioSourceInternal: 'Interner Lautsprecher',
		audioSourceExternal: 'Externer Lautsprecher',
		deviceNumber: 'Gerätenummer',
		serviceIP: 'Service-IP',
		deploymentTime: 'Einsatzzeit',
		wlan: 'WLAN',
		connectionStatus: 'Verbindungsstatus',
		contactUs: 'Kontaktieren Sie uns'
	},
	
	// 遥控模式
	remote: {
		title: 'Fernmodus',
		functionArea: 'Aktionsbereich',
		actions: {
			highFive: 'Abklatschen',
			handshake: 'Händedruck',
			hug: 'Umarmung',
			clap: 'Klatschen',
			wave: 'Winken',
			raiseHands: 'Hände hoch',
			doubleHeart: 'Doppelherz',
			raiseRight: 'Rechts hoch',
			blowKiss: 'Kusshand',
			chestWave: 'Brustwinken'
		}
	},
	
	// 新建路线
	route: {
		title: 'Neue Route',
		mapPlaceholder: 'Kartenbereich',
		addContent: 'Inhalt hinzufügen',
		forwardSpeed: 'Vorwärtsgeschwindigkeit',
		save: 'Speichern',
		editRouteName: 'Routenname bearbeiten',
		routeNamePlaceholder: 'Routenname eingeben',
		contentPlaceholder: 'Erklärungsinhalt eingeben...',
		defaultRouteName: 'Route 1'
	},
	
	// 讲解内容配置
	routeContent: {
		actionTitle: 'Aktion',
		languageTitle: 'Sprache',
		voiceTitle: 'Stimmauswahl',
		addContentTitle: 'Inhalt hinzufügen',
		contentPlaceholder: 'Geben Sie den zu erklärenden Inhalt ein',
		uploadFile: 'Datei hochladen',
		actions: {
			guideRight: 'Rechts führen',
			guideLeft: 'Links führen',
			introduceRight: 'Rechts vorstellen',
			introduceLeft: 'Links vorstellen',
			welcome: 'Willkommen',
			auto: 'Automatisch'
		},
		languages: {
			chinese: 'Chinesisch',
			english: 'Englisch',
			german: 'Deutsch'
		},
		voices: {
			maleA: 'A (Männlich)',
			femaleB: 'B (Weiblich)',
			childC: 'C (Kind)'
		}
	},
	
	// 人脸识别
	face: {
		title: 'Gesichtserkennung',
		savedFaces: 'Gespeicherte Gesichtsdaten',
		uploadPhotos: 'Fotos hochladen',
		namePlaceholder: 'Name eingeben',
		upload: 'Hochladen',
		noMore: 'Keine weiteren Daten',
		emptyTip: 'Keine gespeicherten Gesichtsdaten',
		deleteConfirmTitle: 'Löschen bestätigen',
		deleteConfirmContent: 'Möchten Sie diese Gesichtsdaten wirklich löschen?',
		pleaseSelectImage: 'Bitte wählen Sie zuerst ein Bild',
		pleaseEnterName: 'Bitte geben Sie einen Namen ein',
		noDataToSave: 'Keine Daten zum Speichern'
	},
	
	// 语音设置
	voice: {
		title: 'Spracheinstellungen',
		characterSettings: 'Charakter-Einstellungen',
		voiceSelect: 'Stimmauswahl',
		voiceA: 'A (Männlich)',
		voiceB: 'B (Weiblich)',
		voiceC: 'C (Kind)',
		replyContent: 'Antwortinhalt & Wissensdatenbank',
		llmSelect: 'LLM Auswahl',
		qaKnowledgeBase: 'Q&A Wissensdatenbank',
		enabled: 'Aktiviert',
		disabled: 'Deaktiviert',
		clickUpload: 'Hochladen',
		uploadedKnowledge: 'Hochgeladene Wissensdatenbank',
		uploadTip1: 'Erneutes Hochladen überschreibt die alte Wissensdatenbank',
		uploadTip2: 'Zum Löschen bitte ein leeres Dokument hochladen (.txt Format)',
		uploadTip3: 'Maximale Zeichenanzahl der Wissensdatenbank: 4096 Zeichen',
		voiceRecognition: 'Sprach-Log',
		connectionStatus: 'Verbindung',
		connected: 'Verbunden',
		disconnected: 'Nicht verbunden',
		robot: 'Roboter'
	},
	
	// 建图和导航
	mapping: {
		title: 'Karte/Navi'
	},
	
	// 音量调节
	volume: {
		title: 'Lautstärke'
	},
	
	// 设备相关
	device: {
		status: 'Gerätestatus',
		online: 'Online',
		offline: 'Offline',
		connect: 'Verbinden',
		disconnect: 'Trennen'
	}
}
