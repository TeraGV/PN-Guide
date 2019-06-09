String.prototype.clr = function (hexColor) { return `<font color='#${hexColor}'>${this}</font>` };

module.exports = function PNGuide(mod) {
	const command = mod.command || mod.require.command;
	const Vec3 = require('tera-vec3');
	if (mod.proxyAuthor !== 'caali') {
		const options = require('./module').options
		if (options) {
			const settingsVersion = options.settingsVersion
			if (settingsVersion) {
				mod.settings = require('./' + (options.settingsMigrator || 'settings_migrator.js'))(mod.settings._version, settingsVersion, mod.settings)
				mod.settings._version = settingsVersion
			}
		}
	}
	// 定义恒量
	
	const MapID = [3101, 3201];					
	const HuntingZn = [3101, 3201];				
	const BossID = [1000, 2000, 3000];					// Bosų skaičius
	var saymaster = require('../../ora/say-master');
	const svois = 1.5;
	
	const FirstBossActions = {							// 1王攻击动作
//		{id: 101, msg: '101 ХАРД правой рукой на танка'},
//		{id: 102, msg: '102 ХАРД левой рукой на танка'},
//		{id: 103, msg: '103 На танка'},
//		{id: 104, msg: '104 На танка'},
		{id: 107, msg: 'Откид медленный'},
//		{id: 108, msg: '108 На танка бжух бжух'},
		{id: 111, msg: 'Жопа быстрая'},
		{id: 112, msg: 'Бабочька боковая'},
		{id: 113, msg: 'Подкид, прыжок 80%'},
		{id: 116, msg: '116 Неопознаный Shun - Флик'},
		{id: 117, msg: '117 Неопознаный Обратный  - Ирис'},
		{id: 118, msg: 'Подкид, Ивейд'},
		{id: 119, msg: 'Бабочька из жопы'},
//        {id: 121, msg: '121 Удар правой'},
//        {id: 122, msg: '122 Бум'},
//        {id: 124, msg: '124 Бум'},
        {id: 127, msg: 'Откид'},
//        {id: 128, msg: '128 На танка:право-лево'},
        {id: 131, msg: 'Жопа'},
        {id: 132, msg: 'Крылья'},
        {id: 133, msg: 'Подкид, Ивейд, Полет нормальный'},
        {id: 138, msg: 'Подкид, Ивейд, Хьюстон у нас проблемы'},
        {id: 139, msg: 'Бабочька из жопы'},
//        {id: 141, msg: '141 Двумя бум'},
//        {id: 142, msg: '142 Бум-Бум'},
		{id: 143, msg: 'Пица, быстро от него'},
		{id: 145, msg: 'Пица, быстро от него'},
		{id: 147, msg: 'Тяп тяп'},
        {id: 148, msg: 'Подкид правой'},
        {id: 149, msg: 'Подкид левой'},
		{id: 150, msg: '150 Неопознаный Мобильный'},
		{id: 151, msg: '151 ХАРД'},
		{id: 156, msg: '156 Неопознаный Повернись 1'},
		{id: 157, msg: '157 Неопознаный Повернись 2'},
		{id: 301, msg: 'Вместе'},
		{id: 303, msg: 'Взрыв'},
//		{id: 304, msg: '304 На танка'},
		{id: 305, msg: 'Кулаки'},
		{id: 306, msg: '306 ХАРД'},
		{id: 307, msg: '307 ХАРД'},
		{id: 308, msg: '308 ХАРД'},
//		{id: 310, msg: '310 ХАРД (упал)'},
		{id: 311, msg: 'Откид 311 к нему к нему'},
		{id: 312, msg: 'Откид вместе'},
        {id: 313, msg: 'От него, к нему'},
		{id: 314, msg: 'От него, к нему быстрая'}
};
	
const SecondBossActions = {	
//        {id: 101, msg: '101 На танка'},
//        {id: 102, msg: '102 На танка'},
//        {id: 103, msg: '103 На танка'},
//        {id: 104, msg: '104 На танка'},
//        {id: 105, msg: '105 На танка'},
		{id: 106, msg: '106 Неопознаный Пустой'},
//       {id: 107, msg: '107 На танка'},
        {id: 108, msg: 'Откид'},
//        {id: 109, msg: '109 На танка'},
		{id: 110, msg: '110 Неопознаный Полет старт'},
		{id: 111, msg: '111 Неопознаный Полет енд1'},
		{id: 112, msg: '112 Неопознаный Полет енд2'},
		{id: 113, msg: '113 Неопознаный Порошек'},
		{id: 114, msg: '114 Неопознаный задняя атака'},
		{id: 115, msg: '115 Неопознаный Порошек'},
//        {id: 116, msg: '116 откид после 108 скила'},
		{id: 150, msg: '150 Неопознаный Фронтон'},
 		{id: 201, msg: '201 Неопознаный Отойти 8м'},
		{id: 202, msg: '202 Неопознаный Вперед 8м'},
		{id: 203, msg: '203 Неопознаный Отойти 12м'},
//      {id: 204, msg: '204 Отпрыжка во время дебафа'},
		{id: 205, msg: '205 Неопознаный Снять'},
		{id: 206, msg: '206 Неопознаный Ближний'},
		{id: 207, msg: '207 Неопознаный Ближний'},
		{id: 208, msg: '208 Неопознаный'},
		{id: 209, msg: '209 Неопознаный'},
		{id: 210, msg: '210 Неопознаный'},
		{id: 211, msg: '211 Неопознаный Поворот'},
		{id: 212, msg: '212 Неопознаный'},
		{id: 213, msg: '213 Неопознаный Задний'},
		{id: 214, msg: '214 Неопознаный'},
		{id: 215, msg: '215 Неопознаный'},
		{id: 216, msg: '216 Неопознаный'},
		{id: 217, msg: '217 Неопознаный'},
		{id: 218, msg: '218 Неопознаный'},
		{id: 219, msg: '219 Неопознаный'},
		{id: 220, msg: '220 Неопознаный'},
		{id: 221, msg: '221 Неопознаный'},
		{id: 222, msg: '222 Неопознаный'},
		{id: 223, msg: '223 Неопознаный'},
		{id: 224, msg: '224 Неопознаный'},
		{id: 225, msg: '225 Неопознаный'},
//        {id: 226, msg: '226 Камни фаза 2'},
//        {id: 227, msg: '227 Камни фаза 3'},
        {id: 228, msg: 'Камни'},
		{id: 229, msg: '229 Неопознаный самоцветы'},
		{id: 230, msg: 'Взрыв!!!'},
        {id: 231, msg: 'От неё!!!'},
        {id: 232, msg: 'К ней!!!'},
		{id: 233, msg: '233 Неопознаный старт-енд'},
//        {id: 234, msg: '234 вторая фаза дебафа'},
        {id: 235, msg: 'Дебаф!'}
};
};
const ThirdBossActions = {	

        {id: 398, msg: '398'},	
        {id: 399, msg: '399'}
}
	
	// 定义变量
	let isTank = false,								// 坦克职业 / 打手职业
		insidemap = false,							// 确认进入副本地图
		insidezone = false,							// 确认进入BOSS地图
		whichmode = 0,								// 确认副本上/下级
		whichboss = 0,								// 判定当前是哪个王
		
		hooks = [],
		boss_CurLocation,							// BOSS坐标
		boss_CurAngle,								// BOSS角度
		
		uid0 = 999999999n,							// 花朵UID
		uid1 = 899999999n,							// 龙头UID
		uid2 = 799999999n,							// 告示牌UID
		
		curLocation,								// 地面提示 坐标 x y z
		curAngle,									// 地面提示 角度
		
		sign_CurLocation,							// 水波石碑 坐标
		sign_CurAngle,								// 水波石碑 角度
		
		power = false,								// 充能计数
		Level = 0,									// 充能层数
		levelMsg = [],								// 充能文字 数组
		powerMsg = '';								// 充能文字
	// 控制命令
	mod.command.add("殿堂", (arg) => {
		if (!arg) {
			mod.settings.enabled = !mod.settings.enabled;
			command.message("辅助提示 " + (mod.settings.enabled ? "启用".clr('56B4E9') : "禁用".clr('E69F00')));
		} else {
			switch (arg) {
				case "组队":
					mod.settings.sendToParty = !mod.settings.sendToParty;
					command.message("发送通知 " + (mod.settings.sendToParty ? "组队".clr('56B4E9') : "自己".clr('E69F00')));
					break;
				case "代理":
					mod.settings.sendToStream = !mod.settings.sendToStream;
					command.message("代理频道 " + (mod.settings.sendToStream ? "启用".clr('56B4E9') : "禁用".clr('E69F00')));
					break;
				case "debug":
					command.message("模块开关: " + `${mod.settings.enabled}`.clr('00FFFF'));
					command.message("副本地图: " + insidemap);
					command.message("区域位置: " + insidezone);
					command.message("副本难度: " + whichmode);
					command.message("副本首领: " + whichboss);
					command.message("发送通知 " + (mod.settings.sendToParty ? "真实组队".clr('56B4E9') : "仅自己见".clr('E69F00')));
					command.message("职业分类 " + (isTank ? "坦克".clr('00FFFF') : "打手".clr('FF0000')));
					sendMessage("test");
					break;
				default :
					command.message(`无效的参数!`.clr('FF0000'));
					break;
			}
		}
	});
	// 登陆游戏
	mod.game.on('enter_game', () => {
		let job = (mod.game.me.templateId - 10101) % 100;
		if (job === 1 || job === 10) {					// 0-双刀, 1-枪骑, 2-大剑, 3-斧头, 4-魔道
			isTank = true;								// 5-弓箭, 6-祭司, 7-元素, 8-飞镰, 9-魔工
		} else {										// 10-拳师, 11-忍者 12 月光
			isTank = false;
		}
	})
		// 切换场景
	mod.game.me.on('change_zone', (zone, quick) => {
		if (zone === MapID[0]) {
			insidemap = true;
			command.message("Добро пожаловать: " + "ГП ".clr('56B4E9') + "[Нормал]".clr('E69F00'));
			saymaster.say('Добро пожаловать в гнездо Нормал', svois);
			load();
		} else if (zone === MapID[1]) {
			insidemap = true;
			command.message("Добро пожаловать: : " + "ГП ".clr('56B4E9') + "[Хард]".clr('00FFFF'));
			saymaster.say('Добро пожаловать в гнездо хард', svois);
			load();
		} else {
			unload();
		}
	})
	// 加载 获取信息
	function load() {
		if (!hooks.length) {
			hook('S_BOSS_GAGE_INFO', 3, sBossGageInfo);		// 获取 大型怪物血量信息
			hook('S_ACTION_STAGE', 9, sActionStage);		// 获取 周围全部[攻击动作]事件
		}
	}
	// 挂钩 获取信息
	function hook() {
		hooks.push(mod.hook(...arguments));
	}
	// BOSS信息
	function sBossGageInfo(event) {
		if (!insidemap) return;
		
		let bosshp = (Number(event.curHp) / Number(event.maxHp));
		
		if (bosshp <= 0) {
			whichboss = 0;
		}
		
		if (bosshp === 1) {
			power = false,
			Level = 0,
			levelMsg = [],
			powerMsg = '';
		}
		
		if (event.huntingZoneId == HuntingZn[0]) {
			insidezone = true;
			whichmode = 1;
		} else if (event.huntingZoneId == HuntingZn[1]) {
			insidezone = true;
			whichmode = 2;
		} else {
			insidezone = false;
			whichmode = 0;
		}
		if (event.templateId == BossID[0]) whichboss = 1;
		else if (event.templateId == BossID[1]) whichboss = 2;
		else if (event.templateId == BossID[2]) whichboss = 3;
		else whichboss = 0;
	}
	// BOSS技能
	function sActionStage(event) {
		// 模块关闭 或 不在副本中 或 找不到BOSS血条
		if (!mod.settings.enabled || !insidezone || whichboss==0) return;
		
		// 2王石碑 水波攻击 范围提示
		if (whichboss==2 && (event.templateId==2021 || event.templateId==2022 || event.templateId==2023)) {
			let sign_skillid = event.skill.id % 1000;								// 石碑攻击技能编号简化
			sign_CurLocation = event.loc;											// 石碑的 x y z 坐标
			sign_CurAngle = event.w;												// 石碑的角度
			
			let	sign_X = sign_CurLocation.x - boss_CurLocation.x,					// 石碑与王 X坐标之差
				sign_Y = sign_CurLocation.y - boss_CurLocation.y,					// 石碑与王 Y坐标之差
				sign_Radius = Math.pow((sign_X*sign_X) + (sign_Y*sign_Y), 0.5);		// 勾股定理: C等于(A平方+B平方)的1/2次幂
			
			curLocation = sign_CurLocation;											// 传递石碑坐标参数
			curAngle = sign_CurAngle;												// 传递石碑角度参数
			
			if (sign_skillid === 302 || sign_skillid === 306 || sign_skillid === 303 || sign_skillid === 307) {
				Spawnitem2(413, 6, sign_Radius, 7000);								// 构造圆形花圈 石碑到王的距离为 [半径]
			}
		}
		
		// 3王 接电石碑 队员间隔
		if (whichboss==3 && event.templateId==3022 && event.skill.id==1101) {
			// 3王回地图中间点的 (x, y) 坐标
			boss_CurLocation.x = -95703;
			boss_CurLocation.y = 144980;
			// 上级HP<40% 较短一侧石碑到王 提示跳过
			let X = Math.pow((boss_CurLocation.x - event.loc.x), 2),
				Y = Math.pow((boss_CurLocation.y - event.loc.y), 2),
				C = Math.pow(X+Y, 0.5);
			if (C < 500) return;
			
			// 石碑的坐标/角度 设定为提示物初始点
			curLocation = event.loc;
			curAngle = event.w;
			
			Spawnitem2(445, 15, 105, 8000);
			Spawnitem2(445, 12, 210, 8000);
			Spawnitem2(445, 10, 315, 8000);
			Spawnitem2(445, 8, 420, 8000);
			
			Spawnitem1(912, 180, 440, 8000);
		}
		
		// 攻击技能 不是[1王] 也不是 [2王] 也不是 [3王] , 函数到此结束 (屏蔽 玩家/队友/NPC/召唤生物 攻击技能)
		if (event.templateId!=BossID[0] && event.templateId!=BossID[1] && event.templateId!=BossID[2]) return;
		
		let skillid = event.skill.id % 1000;		// 攻击技能编号简化 取1000余数运算
		boss_CurLocation = event.loc;				// BOSS的 x y z 坐标
		boss_CurAngle = event.w;					// BOSS的角度
		
		curLocation = boss_CurLocation;				// 传递BOSS坐标参数
		curAngle = boss_CurAngle;					// 传递BOSS角度参数
		
		let bossSkillID;
		if (whichboss==1 && (bossSkillID = mod.settings.FirstBossActions.find(obj => obj.id === skillid))) {
			//if (!isTank && skillid === 106) return;												// 打手职业 不提示的技能
			//if ( isTank && (skillid === 107 || skillid === 108 || skillid === 307)) return;		// 坦克职业 不提示的技能
			if (skillid === 313) {	// От него к нему
				Spawnitem2(445, 8, 250, 5000);		
			//	Spawnitem2(445, 6, 560, 5000);
			}
			if (skillid === 314) {	// От него к нему
				Spawnitem2(445, 8, 250, 5000);		
			//	Spawnitem2(445, 6, 560, 5000);
			}
			sendMessage(bossSkillID.msg);
			saymaster.say(bossSkillID.msg, svois);
			
		}
		
		if (whichboss==2 && (bossSkillID = mod.settings.SecondBossActions.find(obj => obj.id === skillid))) {
			// 2王 内外圈
		/*	if (skillid === 301) {	// 捶地+旋转
				Spawnitem2(445, 8, 260, 5000);		// 中心圈
				Spawnitem2(445, 6, 560, 5000);
			}
			if (skillid === 302) {	// 旋转+捶地
				Spawnitem2(445, 8, 260, 5000);		// 中心圈
				Spawnitem2(445, 6, 680, 5000);
			}
			if (skillid === 114) {	// 三连拍
				Spawnitem2(445, 8, 260, 5000);		// 中心圈
				Spawnitem2(445, 6, 560, 5000);
			}
			
			// 2王 前砸后砸 横向对称轴
			if (skillid === 116) {
				Spawnitem1(445, 270, 500, 5000);	// 左侧直线花朵
				Spawnitem1(445, 90, 500, 5000);		// 右侧直线花朵
			}
		*/	
			if (skillid === 231) {	// От неё
				Spawnitem2(445, 8, 290, 5000);		
			//	Spawnitem2(445, 6, 680, 5000);
			}
			if (skillid === 232) {	// К ней
				Spawnitem2(445, 8, 260, 5000);		
			//	Spawnitem2(445, 6, 560, 5000);
			}
			sendMessage(bossSkillID.msg);
			saymaster.say(bossSkillID.msg, svois);
		}	
		
	}
	// 卸载 获取信息
	function unload() {
		if (hooks.length) {
			for (let h of hooks)
				mod.unhook(h);
			hooks = [];
		}
		reset();
	}
	// 重置数据配置
	function reset() {
		insidemap = false,
		insidezone = false,
		whichmode = 0,
		whichboss = 0,
		
		power = false,
		Level = 0,
		levelMsg = [],
		powerMsg = '';
	}
	// 发送提示文字
	function sendMessage(msg) {
		if (mod.settings.sendToParty) {
			mod.send('C_CHAT', 1, {
				channel: 21, //21 = p-notice, 1 = party, 2 = guild, 25 = r-notice
				message: msg
			});
		} else if (mod.settings.sendToStream) {
			command.message(msg);
		} else {
			mod.send('S_CHAT', 2, {
				channel: 21, //21 = 队长通知, 1 = 组队, 2 = 公会, 25 = 团长通知
				authorName: "Гнездо",
				message: msg
			});
		}
	}
	// 地面提示(光柱+告示牌)
	function SpawnThing(degrees, radius, times) { // 偏移角度 半径距离 持续时间
		let r = null, rads = null, finalrad = null;
		
		r = curAngle - Math.PI;
		rads = (degrees * Math.PI/180);
		finalrad = r - rads;
		curLocation.x = boss_CurLocation.x + radius * Math.cos(finalrad);
		curLocation.y = boss_CurLocation.y + radius * Math.sin(finalrad);
		// 告示牌
		mod.send('S_SPAWN_BUILD_OBJECT', 2, {
			gameId : uid1,
			itemId : 1,
			loc : curLocation,
			w : r,
			unk : 0,
			ownerName : "提示",
			message : "安全区"
		});
		// 龙头光柱
		curLocation.z = curLocation.z - 1000;
		mod.send('S_SPAWN_DROPITEM', 7, {
			gameId: uid2,
			item: 98260, // 98260-古龙贝勒古斯的头
			loc: curLocation,
			amount: 1,
			expiry: 600000,
			owners: [{
				id: 0
			}]
		});
		curLocation.z = curLocation.z + 1000;
		// 延迟消除
		setTimeout(DespawnThing, times, uid1, uid2);
		uid1--;
		uid2--;
	}
	// 消除 光柱+告示牌
	function DespawnThing(uid_arg1, uid_arg2) {
		mod.send('S_DESPAWN_BUILD_OBJECT', 2, {
			gameId : uid_arg1,
			unk : 0
		});
		mod.send('S_DESPAWN_DROPITEM', 4, {
			gameId: uid_arg2
		});
	}
	//地面提示(花朵)
	function Spawnitem(item, degrees, radius, times) { // 显示物品 偏移角度 半径距离 持续时间
		let r = null, rads = null, finalrad = null, spawnx = null, spawny = null, pos = null;
		
		r = curAngle - Math.PI;
		rads = (degrees * Math.PI/180);
		finalrad = r - rads;
		spawnx = curLocation.x + radius * Math.cos(finalrad);
		spawny = curLocation.y + radius * Math.sin(finalrad);
		pos = {x:spawnx, y:spawny};
		// 花朵
		mod.send('S_SPAWN_COLLECTION', 4, {
			gameId : uid0,
			id : item,
			amount : 1,
			loc : new Vec3(pos.x, pos.y, curLocation.z),
			w : r,
			unk1 : 0,
			unk2 : 0
		});
		// 延时消除
		setTimeout(Despawn, times, uid0);
		uid0--;
	}
	// 消除花朵
	function Despawn(uid_arg0) {
		mod.send('S_DESPAWN_COLLECTION', 2, {
			gameId : uid_arg0
		});
	}
	// 构造直线花朵
	function Spawnitem1(item, degrees, maxRadius, times) {  // 显示物品 偏移角度 最远距离 持续时间
		for (var radius=50; radius<=maxRadius; radius+=50) { // 距离间隔 50
			Spawnitem(item, degrees, radius, times); // 显示物品 偏移角度 半径距离 持续时间
		}
	}
	// 构造圆形花圈
	function Spawnitem2(item, intervalDegrees, radius, times) { // 显示物品 偏移间隔 半径距离 持续时间
		for (var degrees=0; degrees<360; degrees+=intervalDegrees) {
			Spawnitem(item, degrees, radius, times); // 显示物品 偏移角度 半径距离 持续时间
		}
	}
}
