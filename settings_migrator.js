const DefaultSettings = {
    "enabled": true,        // 模块启动开关
    "sendToParty": false,   // 发送真实组队频道通知
    "sendToStream": false,  // 关闭队长通知, 并将消息发送到代理频道
    "FirstBossActions": [   // 1王攻击动作
//		{id: 101, msg: '101 ХАРД правой рукой на танка'},
//		{id: 102, msg: '102 ХАРД левой рукой на танка'},
//		{id: 103, msg: '103 ХАРД бабочька вниз на танка'},
//		{id: 104, msg: '104 ХАРД бабочька внизб на танка'},
		{id: 107, msg: 'Откид медленный'},
//		{id: 108, msg: '108 на танка бжух бжух'},
		{id: 111, msg: 'Жопа'},
		{id: 112, msg: 'Бабочька боковая'},
		{id: 113, msg: 'Подкид прыжок 80%'},
		{id: 116, msg: '116 Неопознаный Shun - Флик'},
		{id: 117, msg: '117 Неопознаный Обратный  - Ирис'},
		{id: 118, msg: 'Подкид Ивейд'},
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
//		{id: 304, msg: '304 ХАРД на танка'},
		{id: 305, msg: 'Кулаки'},
		{id: 306, msg: '306 ХАРД'},
		{id: 307, msg: '307 ХАРД'},
		{id: 308, msg: '308 ХАРД'},
//		{id: 310, msg: '310 ХАРД упал'},
		{id: 311, msg: 'Откид к нему'},
		{id: 312, msg: 'Откид вместе'},
        {id: 313, msg: 'От него, к нему'},
		{id: 314, msg: 'От него, к нему быстрая'}
    ],
    "SecondBossActions": [  // 2王攻击动作
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
		{id: 117, msg: '117'},
		{id: 118, msg: '118'},
		{id: 119, msg: '119'},
		{id: 120, msg: '120'},
		{id: 121, msg: '121'},
		{id: 122, msg: '122'},
		{id: 123, msg: '123'},
		{id: 124, msg: '124'},
		{id: 125, msg: '125'},
		{id: 126, msg: '126'},
		{id: 127, msg: '127'},
		{id: 128, msg: '128'},
		{id: 129, msg: '129'},
		{id: 130, msg: '130'},
		{id: 131, msg: '131'},
		{id: 132, msg: '132'},
		{id: 133, msg: '133'},
		{id: 134, msg: '134'},
		{id: 135, msg: '135'},
		{id: 136, msg: '136'},
		{id: 137, msg: '137'},
		{id: 138, msg: '138'},
		{id: 139, msg: '139'},
		{id: 140, msg: '140'},
		{id: 141, msg: '141'},
		{id: 142, msg: '142'},
		{id: 143, msg: '143'},
		{id: 144, msg: '144'},
		{id: 145, msg: '145'},
		{id: 146, msg: '146'},
		{id: 147, msg: '147'},
		{id: 148, msg: '148'},
		{id: 149, msg: '149'},
		{id: 150, msg: '150 Неопознаный Фронтон'},
//		{id: 201, msg: '201 Неопознаный Отойти 8м'},
//		{id: 202, msg: '202 Неопознаный Вперед 8м'},
//		{id: 203, msg: '203 Неопознаный Отойти 12м'},
//        {id: 204, msg: '204 Отпрыжка во время дебафа'},
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
    ],
    "ThirdBossActions": [   // 3王攻击动作

        {id: 398, msg: '398'},	
        {id: 399, msg: '399'}
    ]
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {
        // Migrate from older version (using the new system) to latest one
        if (from_ver + 1 < to_ver) {
            // Recursively upgrade in one-version steps
            settings = MigrateSettings(from_ver, from_ver + 1, settings);
            return MigrateSettings(from_ver + 1, to_ver, settings);
        }
        
        // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
        // a switch for each version step that upgrades to the next version. This enables us to
        // upgrade from any version to the latest version without additional effort!
        switch(to_ver) {
            default:
                let oldsettings = settings
                
                settings = Object.assign(DefaultSettings, {});
                
                for(let option in oldsettings) {
                    if(settings[option]) {
                        settings[option] = oldsettings[option]
                    }
                }
                
                break;
        }
        
        return settings;
    }
}
