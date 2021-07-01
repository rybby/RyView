/**
轻松制作短视频！- 锐视(RyView) - 音频可视化加数据可视化网页工具

作者：锐
邮箱：rybby@163.com
主页：ry.eefaa.cn, rybby.cn
锐视官方主页：rymaa.cn
锐视官方博客：rv.eefaa.cn

使用示例，创建锐视容器
RV.init();

该程序以MIT开源协议进行发布，请遵循MIT开源协议相关规则使用。另外，也请后续开发者保留程序的文档注释内容。
关于程序源码内的帮助内容(RVHELP)，使用者可自由修改或隐藏。但是，原作者选择将程序开源的目的，是为了让更多人参与程序的发展或维护，所以，希望后续开发者能为用户指明锐视官方网站，让更多用户能通过官方的云端库获取各种资源(Html5精灵造型、动作、表情以及各领域的可视化数据或者CC协议的免费可商用音频等)，以方便用户能更容易制作优质的短视频。

如果你有能力开发H5精灵或采集可视化数据，欢迎你将自己的资源提交到锐视的云端库，越多开发者参与进来，视频制作用户就拥有越多资源可选择。后续锐视会推出多种变现途径为开发者实现收入，还会对各种资源进行榜单排名以及开发者收入排名等。希望大家踊跃参与，让我们打造一个庞大的资源库，让短视频制作更简单！
*/

const RVHELP = '锐视(RyView)是一款网页工具，可轻松制作音频可视化加数据可视化以及文字说短视频。该工具由程序员锐(<a href="http://ry.eefaa.cn/" target="_blank">rv.eefaa.cn</a>)开发并以开源项目发布，目前保管在GitHub源码仓库。锐视官方主页地址：<a href="http://rymaa.cn/" target="_blank">http://rymaa.cn/</a>，博客地址：<a href="http://rv.eefaa.cn/" target="_blank">http://rv.eefaa.cn/</a>。如果你有能力开发H5精灵或采集可视化数据，欢迎你将自己的资源提交到锐视的云端库，越多开发者参与进来，视频制作用户就拥有越多资源可选择。后续锐视会推出多种变现途径为开发者实现收入，还会对各种资源进行榜单排名以及开发者收入排名等。希望大家踊跃参与，让我们打造一个庞大的资源库，让短视频制作更简单！';

const CL = console.log;
const RV = RyView = {
    pi1: Math.PI,
    pi2: Math.PI * 2,
    pi05: Math.PI * 0.5,
    pi15: Math.PI * 1.5,
    PS: 0, // play state
    FPS: 30, // frames per second
    DT: 300000, // duration(millisecond)
    PG: 0, // progress(millisecond)
    ST: 0, // start time
    PT: 0, // pause time
    LT: 0, // last time
    
    ini2: null,
    ini: {
        rini: 0, // reset ini
        lg: 'cn',
        ttsl: '',
        ttsp: 0,
        ttsr: 1.2,
        ttsv: 1,
        dmn: ',pe,re,se,inp,sys,loc,net,', // del menu
        out: {
            des: '导出',
            vc: 'vp8',
            vf: 'mp4',
            vp: '16:9',
            vs: '720P',
        },
        
        ft: {
            des: '字体',
            otn: 'zhenyan',
            ots: '32px',
            otc: '#ff0',
            otw: '0',
            otbs: '1px',
            otbc: '#000',
            ptn: 'pangmen',
            pts: '26px',
            ptc: '0',
            ptw: '0',
            ptbs: '1px',
            ptbc: '#000',
            wn: 'xiaobai',
            ws: '24px',
            wc: '#000',
            ww: '0',
            wbs: '0px',
            wbc: '#000',
            rn: 'Simsun',
            rs: '20px',
            rc: '#000',
            rw: '0',
            rbs: '0px',
            rbc: '#000',
        },
        
        sr: {
            des: '精灵',
            bg: {
                des: '背景精灵',
                id: 'bg_0',
                sn: '梦幻光斑',
                sc: '.25, .35',
                sh: '0, 360',
                hr: '75, 95',
                sr: '.02, .15'
            },
            mot: {
                des: '运动精灵',
                id: 'mot_0',
                sn: '梦幻泡泡',
                sc: '.02, .03',
                sr: '.08, .15',
                ss: '.8, 1'
            },
            ado: {
                des: '音频精灵',
                id: 'ado_0',
                sn: '爆炸光圈',
                bs: '1'
            },
            mat: {
                des: '比赛精灵',
                id: 'mat_0',
                sn: '锐比丘',
                sh: '0, 360',
                sf: '0',
                ss: '0',
            },
            act: {
                des: '角色精灵',
                id: 'act_0',
                sn: '锐视通',
                sh: '0, 360',
            },
            ass: {
                des: '辅助精灵',
                id: 'ass_0',
                sn: '锐比兽',
                sh: '0, 360',
            },
        },
    },
    
    lg: {
        cn: {
            des: '中文',
            st: '播放',
            sp: '停止',
            pe: '暂停',
            re: '恢复',
            ot: '导出',
            se: '保存',
            hp: '帮助',
            lg: '语言',
            inp: '输入',
            sys: '系统',
            loc: '本地',
            net: '网络',
            
            out: {
                des: '导出',
                vc: '视频编码',
                vf: '视频格式',
                vp: '视频比例',
                vs: '视频尺寸',
            },
            
            ft: {
                des: '字体',
                otn: '正标题字体名称',
                ots: '正标题字体大小',
                otc: '正标题字体颜色',
                otw: '正标题字体粗重',
                otbs: '正标题字体边框大小',
                otbc: '正标题字体边框颜色',
                ptn: '副标题字体名称',
                pts: '副标题字体大小',
                ptc: '副标题字体颜色',
                ptw: '副标题字体粗重',
                ptbs: '副标题字体边框大小',
                ptbc: '副标题字体边框颜色',
                wn: '台词字体名称',
                ws: '台词字体大小',
                wc: '台词字体颜色',
                ww: '台词字体粗重',
                wbs: '台词字体边框大小',
                wbc: '台词字体边框颜色',
                rn: '常规字体名称',
                rs: '常规字体大小',
                rc: '常规字体颜色',
                rw: '常规字体粗重',
                rbs: '常规字体边框大小',
                rbc: '常规字体边框颜色',
            },
            
            sr: {
                des: '精灵',
                bg: {
                    des: '背景精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    sc: '精灵数量',
                    sh: '精灵色相',
                    hr: '色相范围',
                    sr: '精灵半径'
                },
                mot: {
                    des: '运动精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    sc: '精灵数量',
                    sr: '精灵半径',
                    ss: '精灵速度'
                },
                ado: {
                    des: '音频精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    bs: '边框大小'
                },
                mat: {
                    des: '比赛精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    sh: '精灵色相',
                    sf: '精灵表情',
                    ss: '精灵速度',
                },
                act: {
                    des: '角色精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    sh: '精灵色相',
                },
                ass: {
                    des: '辅助精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    sh: '精灵色相',
                },
            },
            
            bm: {
                des: '背景音乐',
                id: '音轨ID',
                mn: '音乐名称',
                pb: '播放起点',
                pe: '播放终点',
                cb: '裁剪起点',
                ce: '裁剪终点',
                fi: '淡入',
                fo: '淡出',
            },
            
            ad: {
                des: '动画数据',
                t1: '正标题',
                tl: '时间列表',
                t2: '副标题',
                dt: '日期',
                du: '时长',
                tp: '类型',
                dl: '数据列表',
                nm: '名称',
                vl: '数值',
                pi: '图片',
                fa: '表情',
                ac: '动作',
                wd: '台词',
                d2: '时长',
            },
        },
        
        en: {
            des: 'English',
            st: 'Start',
            sp: 'Stop',
            pe: 'Pause',
            re: 'Resume',
            ot: 'Out',
            se: 'Save',
            hp: 'Help',
            lg: 'Language',
            inp: 'Input',
            sys: 'System',
            loc: 'Local',
            net: 'Net',
            
            out: {
                des: 'Out',
                vc: 'Video Coding',
                vf: 'Video Format',
                vp: 'Video Proportion',
                vs: 'Video Size',
            },
            
            ft: {
                des: 'Font',
                otn: 'Official Title Font Name',
                ots: 'Official Title Font Size',
                otc: 'Official Title Font Color',
                otw: 'Official Title Font Weight',
                otbs: 'Official Title Font Border Size',
                otbc: 'Official Title Font Border Color',
                ptn: 'Partial Title Font Name',
                pts: 'Partial Title Font Size',
                ptc: 'Partial Title Font Color',
                ptw: 'Partial Title Font Weight',
                ptbs: 'Partial Title Font Border Size',
                ptbc: 'Partial Title Font Border Color',
                wn: 'Word Font Name',
                ws: 'Word Font Size',
                wc: 'Word Font Color',
                ww: 'Word Font Weight',
                wbs: 'Word Font Border Size',
                wbc: 'Word Font Border Color',
                rn: 'Routine Font Name',
                rs: 'Routine Font Size',
                rc: 'Routine Font Color',
                rw: 'Routine Font Weight',
                rbs: 'Routine Font Border Size',
                rbc: 'Routine Font Border Color',
            },
            
            sr: {
                des: 'Sprite',
                bg: {
                    des: 'Background Sprite',
                    id: 'Sprite ID',
                    sn: 'Sprite Name',
                    sc: 'Sprite Count',
                    sh: 'Sprite Hue',
                    hr: 'Hue Range',
                    sr: 'Sprite Radius'
                },
                mot: {
                    des: 'Motion Sprite',
                    id: 'Sprite ID',
                    sn: 'Sprite Name',
                    sc: 'Sprite Count',
                    sr: 'Sprite Radius',
                    ss: 'Sprite Speed'
                },
                ado: {
                    des: 'Audio Sprite',
                    id: 'Sprite ID',
                    sn: 'Sprite Name',
                    bs: 'Border Size'
                },
                mat: {
                    des: 'Match Sprite',
                    id: 'Sprite ID',
                    sn: 'Sprite Name',
                    sh: 'Sprite Hue',
                    sf: 'Sprite Face',
                    ss: 'Sprite Speed',
                },
                act: {
                    des: 'Actor Sprite',
                    id: 'Sprite ID',
                    sn: 'Sprite Name',
                    sh: 'Sprite Hue',
                },
                ass: {
                    des: 'Assist Sprite',
                    id: 'Sprite ID',
                    sn: 'Sprite Name',
                    sh: 'Sprite Hue',
                },
            },
            
            bm: {
                des: 'BgMusic',
                id: 'TrackID',
                mn: 'Music Name',
                pb: 'Play Begin',
                pe: 'Play End',
                cb: 'Cut Begin',
                ce: 'Cut End',
                fi: 'Fade In',
                fo: 'Fade Out',
            },
            
            ad: {
                des: 'Animation Data',
                t1: 'Official Title',
                tl: 'Time List',
                t2: 'Partial Title',
                dt: 'Date',
                du: 'Duration',
                tp: 'Type',
                dl: 'Data List',
                nm: 'Name',
                vl: 'Value',
                pi: 'Picture',
                fa: 'Face',
                ac: 'Action',
                wd: 'Word',
                d2: 'Duration',
            },
        },
        
        jp: {
            des: '日本語',
            st: '開始',
            sp: 'やめる',
            pe: 'タイムアウト',
            re: 'リストア',
            ot: '輸出',
            se: 'セーブ',
            hp: '助けて',
            lg: '言語',
            inp: '入力',
            sys: 'システム',
            loc: 'ローカル',
            net: 'ネット',
            
            out: {
                des: '導出',
                vc: 'ビデオコーディング',
                vf: 'ビデオフォーマット',
                vp: 'ビデオの割合',
                vs: 'ビデオサイズ',
            },
            
            ft: {
                des: 'フォント',
                otn: '正タイトルフォント名',
                ots: '正タイトルフォントサイズ',
                otc: '正タイトルフォント色',
                otw: '正タイトルフォント太い',
                otbs: '正タイトルフォントボーダー大きさ',
                otbc: '正タイトルフォントボーダー色',
                ptn: '副タイトルフォント名',
                pts: '副正タイトルフォントサイズ',
                ptc: '副タイトルフォント色',
                ptw: '副タイトルフォント太い',
                ptbs: '副タイトルフォントボーダー大きさ',
                ptbc: '副タイトルフォントボーダー色',
                wn: 'せりふフォント名',
                ws: 'せりふフォントサイズ',
                wc: 'せりふフォント色',
                ww: 'せりふフォント太い',
                wbs: 'せりふフォントボーダー大きさ',
                wbc: 'せりふフォントボーダー色',
                rn: '常規フォント名',
                rs: '常規フォントサイズ',
                rc: '常規フォント色',
                rw: '常規フォント太い',
                rbs: '常規フォントボーダー大きさ',
                rbc: '常規フォントボーダー色',
            },
            
            sr: {
                des: 'スプライト',
                bg: {
                    des: 'バックグラウンド スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    sc: 'スプライト カウント',
                    sh: 'スプライト 色相',
                    hr: '色相 範囲',
                    sr: 'スプライト 半径'
                },
                mot: {
                    des: 'モーション スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    sc: 'スプライト カウント',
                    sr: 'スプライト 半径',
                    ss: 'スプライト スピード'
                },
                ado: {
                    des: 'オーディオ スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    bs: 'ボーダー サイズ'
                },
                mat: {
                    des: 'ゲーム スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    sh: 'スプライト 色相',
                    sf: 'スプライト Face',
                    ss: 'スプライト スピード',
                },
                act: {
                    des: '俳優 スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    sh: 'スプライト 色相',
                },
                ass: {
                    des: 'アシスト スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    sh: 'スプライト 色相',
                },
            },
            
            bm: {
                des: '背景音楽',
                id: 'トラックID',
                mn: '音楽名',
                pb: '播放出発点',
                pe: '播放終点',
                cb: '裁剪出発点',
                ce: '裁剪終点',
                fi: 'フェードイン',
                fo: 'フェードアウト',
            },
            
            ad: {
                des: 'アニメーションデータ',
                t1: '正タイトル',
                tl: '時間リスト',
                t2: '副タイトル',
                dt: '日付',
                du: '時長',
                tp: 'タイプ',
                dl: 'データリスト',
                nm: '名',
                vl: '数値',
                pi: '画像',
                fa: '表情',
                ac: '動き',
                wd: 'せりふ',
                d2: '時長',
            },
        },
        
        kr: {
            des: '한국어',
            st: '스타트',
            sp: '중지',
            pe: '시간 초과',
            re: '이력서',
            ot: '아웃',
            se: '저장',
            hp: '도움',
            lg: '언어',
            inp: '입력',
            sys: '체계',
            loc: '현지',
            net: '그물',
            
            out: {
                des: '내보내기',
                vc: '비디오 코딩',
                vf: '비디오 형식',
                vp: '비디오 비율',
                vs: '비디오 크기',
            },
            
            ft: {
                des: '글자체',
                otn: '표제글자체명칭',
                ots: '표제글자체크기',
                otc: '표제글자체색깔',
                otw: '표제글자체굵직하다',
                otbs: '표제글자체테두리크기',
                otbc: '표제글자체테두리색깔',
                ptn: '부제글자체명칭',
                pts: '부제글자체크기',
                ptc: '부제글자체색깔',
                ptw: '부제글자체굵직하다',
                ptbs: '부제글자체테두리크기',
                ptbc: '부제글자체테두리색깔',
                wn: '대사글자체명칭',
                ws: '대사글자체크기',
                wc: '대사글자체색깔',
                ww: '대사글자체굵직하다',
                wbs: '대사글자체테두리크기',
                wbc: '대사글자체테두리색깔',
                rn: '상규글자체명칭',
                rs: '상규글자체크기',
                rc: '상규글자체색깔',
                rw: '상규글자체굵직하다',
                rbs: '상규글자체테두리크기',
                rbc: '상규글자체테두리색깔',
            },
            
            sr: {
                des: '스프라이트',
                bg: {
                    des: '배경 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    sc: '스프라이트 카운트',
                    sh: '스프라이트 색조',
                    hr: '색조 범위',
                    sr: '스프라이트 반지름'
                },
                mot: {
                    des: '거동 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    sc: '스프라이트 카운트',
                    sr: '스프라이트 반지름',
                    ss: '스프라이트 속도'
                },
                ado: {
                    des: '오디오 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    bs: '테두리 크기'
                },
                mat: {
                    des: '시합 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    sh: '스프라이트 색조',
                    sf: '스프라이트 얼굴',
                    ss: '스프라이트 속도',
                },
                act: {
                    des: '배우 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    sh: '스프라이트 색조',
                },
                ass: {
                    des: '거들다 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    sh: '스프라이트 색조',
                },
            },
            
            bm: {
                des: '배경음악',
                id: '음궤ID',
                mn: '명칭',
                pb: '방송기점',
                pe: '방송종점',
                cb: '자르다기점',
                ce: '자르다종점',
                fi: '메이드인',
                fo: '메이드아웃',
            },
            
            ad: {
                des: '애니메이션 데이터',
                t1: '표제',
                tl: '시간목록',
                t2: '부제',
                dt: '날짜',
                du: '지속시간',
                tp: '유형',
                dl: '데이터목록',
                nm: '명칭',
                vl: '수치',
                pi: '그림',
                fa: '표정',
                ac: '동작',
                wd: '대사',
                d2: '지속시간',
            },
        },
        
        'in': {
            des: 'हिंदी',
            st: 'शुरू',
            sp: 'रुकें',
            pe: 'ठहराव',
            re: 'बायोडाटा',
            ot: 'आउट',
            se: 'सहेजें',
            hp: 'मदद',
            lg: 'भाषा',
            inp: 'इनपुट',
            sys: 'प्रणाली',
            loc: 'स्थानीय',
            net: 'इंटरनेट',
            
            out: {
                des: 'निर्यात',
                vc: 'वीडियो कोडिंग',
                vf: 'वीडियो फार्मेट',
                vp: 'वीडियो अनुपात',
                vs: 'वीडियो का आकार',
            },
            
            ft: {
                des: 'फ़ॉन्ट',
                otn: 'सकारात्मक शीर्षक फ़ॉन्ट नाम',
                ots: 'सकारात्मक शीर्षक फ़ॉन्ट आकार',
                otc: 'सकारात्मक शीर्षक फ़ॉन्ट रंग',
                otw: 'सकारात्मक शीर्षक फ़ॉन्ट वजन',
                otbs: 'सकारात्मक शीर्षक फ़ॉन्ट सीमा आकार',
                otbc: 'सकारात्मक शीर्षक फ़ॉन्ट सीमा रंग',
                ptn: 'उपशीर्षक फ़ॉन्ट नाम',
                pts: 'उपशीर्षक फ़ॉन्ट आकार',
                ptc: 'उपशीर्षक फ़ॉन्ट रंग',
                ptw: 'उपशीर्षक फ़ॉन्ट वजन',
                ptbs: 'उपशीर्षक फ़ॉन्ट सीमा आकार',
                ptbc: 'उपशीर्षक फ़ॉन्ट सीमा रंग',
                wn: 'शब्द फ़ॉन्ट नाम',
                ws: 'शब्द फ़ॉन्ट आकार',
                wc: 'शब्द फ़ॉन्ट रंग',
                ww: 'शब्द  फ़ॉन्ट वजन',
                wbs: 'शब्द फ़ॉन्ट सीमा आकार',
                wbc: 'शब्द फ़ॉन्ट सीमा रंग',
                rn: 'नियमित फ़ॉन्ट नाम',
                rs: 'नियमित फ़ॉन्ट आकार',
                rc: 'नियमित फ़ॉन्ट रंग',
                rw: 'नियमित फ़ॉन्ट वजन',
                rbs: 'नियमित फ़ॉन्ट सीमा आकार',
                rbc: 'नियमित फ़ॉन्ट सीमा रंग',
            },
            
            sr: {
                des: 'स्प्राइट',
                bg: {
                    des: 'पृष्ठभूमि स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    sc: 'स्प्राइट गिनती',
                    sh: 'स्प्राइट ह्यू',
                    hr: 'ह्यू रेंज',
                    sr: 'स्प्राइट त्रिज्या'
                },
                mot: {
                    des: 'प्रस्ताव स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    sc: 'स्प्राइट गिनती',
                    sr: 'स्प्राइट त्रिज्या',
                    ss: 'स्प्राइट स्पीड'
                },
                ado: {
                    des: 'ऑडियो स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    bs: 'बॉर्डर आकार'
                },
                mat: {
                    des: 'मैच स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    sh: 'स्प्राइट ह्यू',
                    sf: 'स्प्राइट चेहरा',
                    ss: 'स्प्राइट स्पीड',
                },
                act: {
                    des: 'अभिनेता स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    sh: 'स्प्राइट ह्यू',
                },
                ass: {
                    des: 'असिस्ट स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    sh: 'स्प्राइट ह्यू',
                },
            },
            
            bm: {
                des: 'पार्श्व संगीत',
                id: 'ऑडियो ट्रैकID',
                mn: 'नाम',
                pb: 'प्ले प्रारंभिक बिंदु',
                pe: 'प्ले अंत बिंदु',
                cb: 'काटना प्रारंभिक बिंदु',
                ce: 'काटना अंत बिंदु',
                fi: 'फीका होना',
                fo: 'फीका पड़ना',
            },
            
            ad: {
                des: 'परियोजना सूची',
                t1: 'सकारात्मक शीर्षक',
                tl: 'समय सूची',
                t2: 'उपशीर्षक',
                dt: 'तारीख',
                du: 'समयांतराल',
                tp: 'के प्रकार',
                dl: 'डेटा सूची',
                nm: 'नाम',
                vl: 'अंकीय मूल्य',
                pi: 'छवि',
                fa: 'चेहरा',
                ac: 'कार्य',
                wd: 'पंक्तियां',
                d2: 'समयांतराल',
            },
        },
    },
    
    vl: { // value list
        'out.vc': 'vp8,h264,webm,mpeg,daala',
        'out.vf': 'mp4,webm',
        'out.vp': '4:3,16:9,9:16',
        'out.vs': '480P,720P,1080P',
        'ft.otn': 'FONT',
        'ft.ots': '12px,14px,16px,18px,20px,24px,28px,32px,36px,42px,48px,56px,72px',
        'ft.otc': 'HSB',
        'ft.otw': '0,1',
        'ft.otbs': '1px,2px,3px,4px,5px,6px',
        'ft.otbc': 'HSB',
        'ft.stn': 'FONT',
        'ft.sts': '12px,14px,16px,18px,20px,24px,28px,32px,36px,42px,48px,56px,72px',
        'ft.stc': 'HSB',
        'ft.stw': '0,1',
        'ft.stbs': '1px,2px,3px,4px,5px,6px',
        'ft.stbc': 'HSB',
        'ft.wn': 'FONT',
        'ft.ws': '12px,14px,16px,18px,20px,24px,28px,32px,36px,42px,48px,56px,72px',
        'ft.wc': 'HSB',
        'ft.ww': '0,1',
        'ft.wbs': '1px,2px,3px,4px,5px,6px',
        'ft.wbc': 'HSB',
        'ft.rn': 'FONT',
        'ft.rs': '12px,14px,16px,18px,20px,24px,28px,32px,36px,42px,48px,56px,72px',
        'ft.rc': 'HSB',
        'ft.rw': '0,1',
        'ft.rbs': '1px,2px,3px,4px,5px,6px',
        'ft.rbc': 'HSB',
        'bm': 'bgm/[CC0]MixKit - First Time-459.mp3,bgm/[CCB]Alexiaction - Cinematic Dubstep.mp3,bgm/[CCB]Aliaksei Yukhnevich - Epic Inspiration.mp3,bgm/[CCB]ANtarcticbreeze - Epic Inspiring Cinematic Piano.mp3,bgm/[CCB]BenSound - A New Beginning.mp3,bgm/[CCB]BenSound - Creative Minds.mp3,bgm/[CCB]BenSound - Little Idea.mp3,bgm/[CCB]Makesound - Epic Adventure.mp3,bgm/[CCB]Sarah De Carlo - Ghost World.mp3,bgm/[CCB]SoundRiver - The Epic Inspiration.mp3,bgm/[CCB]SoundRiver - The Epic Inspire.mp3,bgm/[CCB]Steve Raphael - Epic Emotional.mp3,bgm/[CCB]Timofiy Starenkov - The Epicness.mp3,bgm/[CCB]Timofiy Starenkov - The Journey.mp3,bgm/[CCB]VIVAproduction - Inspiring Epic Fly.mp3',
    },
    
    init: (A) => {
        var a,b,c,d,e,f;
        A = A || '';
        document.body.innerHTML += '<div id="rvTMP" style="display:none;"></div><i id="rvIB" style="display:none"></i><div id="rvEB" class="h_"><div class="rvEbT"><div class="rvEbLab">编辑器(Editor)</div><div class="rvEbX" onclick="RV.hn(this.parentNode.parentNode)">X</div><div class="rvEbOk" onclick="RV.adt(RV.ED.value)">OK</div></div><textarea id="rvED" onmouseover="this.focus()" onfocus="RV.KO.kl=1" onblur="RV.KO.kl=0"></textarea></div><div id="rvHsb" class="h_"><div id="rvHsbCb" onclick="RV.hsb()"><div id="rvHsbH"></div><div id="rvHsbS"></div><div id="rvHsbB"></div><div id="rvHsbCS" class="CS1"><div class="rvHsbCS1"></div><div class="rvHsbCS2"></div></div></div><div id="rvHsbHue" onclick="RV.shue()"></div><div id="rvHsbV"><div class="rvHsbVl"><div id="rvHsbC1"></div><div id="rvHsbC2"></div><div id="rvHsbOk" onclick="RV.hsbok()">OK</div></div><div class="rvHsbVl"><div class="rvHsbN">H</div><div class="rvHsbT"><input id="rvHsbHv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">S</div><div class="rvHsbT"><input id="rvHsbSv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">B</div><div class="rvHsbT"><input id="rvHsbBv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div></div><div class="rvHsbVl"><div class="rvHsbN">H</div><div class="rvHsbT"><input id="rvHslHv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">S</div><div class="rvHsbT"><input id="rvHslSv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">L</div><div class="rvHsbT"><input id="rvHslLv" type="text" value="50" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div></div><div class="rvHsbVl"><div class="rvHsbN">R</div><div class="rvHsbT"><input id="rvRgbRv" type="text" value="255" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">G</div><div class="rvHsbT"><input id="rvRgbGv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">B</div><div class="rvHsbT"><input id="rvRgbBv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div></div><div class="rvHsbVl rvHsbCv"><div id="rvHexCt" class="rvHsbN" onclick="RV.mi(this)" key="HEX1,HEX2,RGB1,RGB2,RGBA,HSB,HSL,HSLA">HEX1</div><div class="rvHsbT"><input id="rvHexCv" type="text" value="#FF0000" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div></div></div></div><div id="rvFwin" class="rvLabB h_"><div class="rvLabT"><div class="rvLab">浮窗</div><div class="rvLabX" onclick="RV.hn(this.parentNode.parentNode)">X</div></div><div class="rvLabC"></div></div>';
        
        RV.RV = RV.an(A, 'RyView'); // ryview root node
        RV.RV.innerHTML = '<div id="rvVB"><div id="rvCvsBox"><canvas id="rvCvs"></canvas><canvas id="rvCvsTmp"></canvas></div><video id="rvVdo" onclick="this.play()"></video><div id="rvIB" class="h_"></div></div><div id="rvTB"><div id="rvTB0"></div><div id="rvTB1"></div><div id="rvTB2"></div></div>';
        
        RV.CB = RV.gn('rvCvsBox');
        RV.CV = RV.gn('rvCvs');
        RV.CTX = RV.CV.getContext('2d');
        RV.CVT = RV.gn('rvCvsTmp');
        RV.CTMP = RV.CVT.getContext('2d');
        RV.VDO = RV.gn('rvVdo');
        RV.TMP = RV.gn('rvTMP');
        RV.IB = RV.gn('rvIB');
        RV.EB = RV.gn('rvEB');
        RV.ED = RV.gn('rvED');
        RV.HSB = RV.gn('rvHsb');
        RV.FW = RV.gn('rvFwin');
        document.body.onkeydown = RV.kd;
        document.body.onkeyup = RV.ku;
        
        requestAnimationFrame = requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame || msRequestAnimationFrame;
        cancelAnimationFrame = cancelAnimationFrame || webkitCancelAnimationFrame || mozCancelAnimationFrame || msCancelAnimationFrame;
        
        RV.ii();
        RV.nm();
        RV.ado();
        RV.log('init');
        
        // test
        
    },
    
    ii: (A) => { // init ini
        var a,b,c,d,y,z;
        if(RV.ini.rini) RV.ls('RVINI', 0, -1);
        a = RV.e36(RV.ls('RVINI'), 2);
        // a = JSON.parse(a);
        a = a || '{}';
        a = eval('('+a+')');
        if(!a) {
            RV.ini2 = RV.ini;
            return;
        }
        if(!a.lg) a.lg = RV.ini.lg;
        if(!a.ttsl) a.ttsl = RV.ini.ttsl;
        if(!a.ttsp) a.ttsp = RV.ini.ttsp;
        if(!a.ttsr) a.ttsr = RV.ini.ttsr;
        if(!a.ttsv) a.ttsv = RV.ini.ttsv;
        if(!a.dmn) a.dmn = RV.ini.dmn;
        
        b = RV.ini.out;
        if(!a.out) a.out = {};
        for(z in b) {
            if(!a.out[z]) a.out[z] = b[z];
        }
        
        b = RV.ini.ft;
        if(!a.ft) a.ft = {};
        for(z in b) {
            if(!a.ft[z]) a.ft[z] = b[z];
        }
        
        b = RV.ini.sr;
        if(!a.sr) a.sr = {};
        for(z in b) {
            c = b[z];
            if(typeof c != 'object') continue;
            if(!a.sr[z]) a.sr[z] = {};
            for(y in c) {
                if(!a.sr[z][y]) a.sr[z][y] = c[y];
            }
        }
        
        RV.ini2 = a;
    },
    
    nm: (A) => { // new menu
        var a,b,c,d,e,f,l,z;
        l = A || RV.ini2.lg || 'cn';
        a = RV.lg[l];
        b = RV.ini2.dmn || '';
        c = [];
        for(z in a) {
            if(z == 'des' || typeof a[z] == 'object' || b.indexOf(','+z+',') >= 0) continue;
            if(z == 'st') f = 'RV.pa(1)';
            else if(z == 'sp') f = 'RV.pa(0)';
            else if(z == 'pe') f = 'RV.pa(2)';
            else if(z == 're') f = 'RV.pa(3)';
            else if(z == 'ot') f = 'RV.out()';
            else if(z == 'se') f = 'RV.save()';
            else if(z == 'hp') f = 'RV.msg(\'帮助(Help)\', RVHELP)';
            else if(z == 'lg') f = 'RV.slg()';
            else f = '';
            d = '<div class="rvBtn0" onclick="'+f+'">'+a[z]+'</div>';
            c.push(d);
        }
        c = c.join('')+'<b class="cl"></b>';
        RV.gn('rvTB0').innerHTML = c;
        
        c = [];
        for(z in a) {
            if(typeof a[z] != 'object') continue;
            e = a[z].des || a[z][0].des || '';
            if(!e) continue;
            if(z == 'out') f = ' s_';
            else f = '';
            d = '<div class="rvBtn1'+f+'" onclick="RV.sel(this);RV.si(\''+z+'\');RV.SMN=\''+z+'\'">'+e+'</div>';
            c.push(d);
        }
        c = c.join('')+'<b class="cl"></b>';
        RV.gn('rvTB1').innerHTML = c;
        RV.si('out');
        RV.rw();
    },
    
    si: (A) => { // set ini
        var a,b,c,d,e,f,l,v,w,x,y,z;
        l = RV.ini2.lg || 'cn';
        a = RV.lg[l];
        b = a[A];
        c = [];
        for(z in b) {
            if(A == 'sr') {
                if(z == 'des') continue;
                c.push('<div class="rvLabB"><div class="rvLabT"><div class="rvLab">'+b[z].des+'</div><div class="rvLabX" onclick="RV.dn(this.parentNode.parentNode)">X</div></div><div class="rvLabC">');
                for(y in b[z]) {
                    if(y == 'des') continue;
                    e = A+'.'+z+'.'+y;
                    d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+b[z][y]+':<input class="rvVal" type="text" value="'+RV.ini2[A][z][y]+'" key="'+e+'"/></div>';
                    c.push(d);
                }
                c.push('</div></div>');
                
            } else if(A == 'bm') {
                RV.abm();
                return;
                
            } else if(A == 'ad') {
                RV.aad();
                return;
                
            } else {
                if(z == 'des') continue;
                e = A+'.'+z;
                d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+b[z]+':<input class="rvVal" type="text" value="'+RV.ini2[A][z]+'" key="'+e+'"/></div>';
                c.push(d);
            }
        }
        
        if(A == 'sr') e = '<div class="rvBtn" onclick="RV.ol(\'http://rv.eefaa.cn/?snet\')">'+(a.net||'网络(Net)')+'</div>';
        else e = '';
        c = c.join('')+'<div class="rvBtn" onclick="RV.svi()">'+(a.se||'保存(Save)')+'</div>'+e+'<b class="cl"></b>';
        RV.gn('rvTB2').innerHTML = c;
    },
    
    mi: (A) => { // modify ini
        var a,b,c,d,e,f,o,z;
        if(!A) return;
        RV.MDF = A;
        a = A.getAttribute('key');
        b = RV.vl[a] || '';
        
        if(b == 'FONT') {
            RV.font(A);
            return;
        } else if(b == 'HSB') {
            RV.sn(RV.HSB);
            return;
        } else if(a.indexOf('HEX1,') != -1) {
            c = a.split(',');
            d = [];
            for(z=0; z<c.length; z++) {
                d.push('<div class="rvBtn" onclick="RV.sel(this);if(RV.MDF) RV.MDF.innerHTML=\''+c[z]+'\';">'+c[z]+'</div>');
            }
            d = d.join('');
            RV.msg('颜色类型(Color Type)', d, 1);
            return;
        }
        
        if(!b) {
            RV.msg(a, '无数据');
            return;
        }
        c = b.split(','); // value list
        d = [];
        for(z=0; z<c.length; z++) {
            d.push('<div class="rvBtn" onclick="RV.sel(this);RV.MDF.value=\''+c[z]+'\';">'+c[z]+'</div>');
        }
        d = d.join('');
        RV.msg(a, d, 1);
    },
    
    svi: (A) => { // save ini
        var a,b,c,d,e,z;
        a = RV.gn('rvTB2');
        b = a.getElementsByTagName('INPUT');
        for(z=0; z<b.length; z++) {
            c = b[z].getAttribute('key');
            if(!c) continue;
            d = b[z].value;
            eval('(RV.ini2.'+c+'="'+d+'")');
        }
        e = RV.ini2;
        e = JSON.stringify(e);
        e = RV.e36(e);
        RV.ls('RVINI', e);
        RV.rw();
    },
    
    abm: (A) => { // add bgmusic
        var a,b,c,d,e,f,l,y,z;
        l = RV.ini2.lg;
        a = RV.adoL;
        b = RV.lg[l].bm;
        c = [];
        for(z in a) {
            c.push('<div class="rvLabB"><div class="rvLabT"><div class="rvLab">#'+z+'</div><div class="rvLabX" onclick="RV.dn(this.parentNode.parentNode);delete RV.adoL.'+z+';RV.ana=null">X</div></div><div class="rvLabC">');
            for(y in b) {
                if(y == 'des') continue;
                e = 'RV.adoL.'+z+'.'+y;
                d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)" title="'+a[z][y]+'">'+b[y]+':<input class="rvVal" type="text" value="'+a[z][y]+'" key="'+e+'"/></div>';
                c.push(d);
            }
            c.push('</div></div>');
        }
        
        f = '<div class="rvBtn" onclick="RV.sys(\'ado\')">'+(RV.lg[l].sys||'系统(System)')+'</div><div class="rvBtn">'+(RV.lg[l].loc||'本地(Local)')+'<input type="file" class="rvFile" onclick="RV.up(this)" multiple="1"/></div><div class="rvBtn" onclick="RV.ol(\'http://rv.eefaa.cn/?anet\')">'+(RV.lg[l].net||'网络(Net)')+'</div>';
        
        c = c.join('')+f+'<b class="cl"></b>';
        RV.gn('rvTB2').innerHTML = c;
    },
    
    aad: (A) => { // add animation data
        var a,b,c,d,e,f,l,i,y,z;
        l = RV.ini2.lg;
        a = RV.adtL;
        b = RV.lg[l].ad;CL(b);
        if(!a) {
            c = '<div class="rvBtn" onclick="RV.sn(RV.EB)">'+(RV.lg[l].inp||'输入(Input)')+'</div><div class="rvBtn">'+(RV.lg[l].loc||'本地(Local)')+'<input type="file" class="rvFile" onclick="RV.up(this)" multiple="1"/></div><div class="rvBtn" onclick="RV.ol(\'http://rv.eefaa.cn/?dnet\')">'+(RV.lg[l].net||'网络(Net)')+'</div><b class="cl"></b>';
            RV.gn('rvTB2').innerHTML = c;
            return CL('no data');
        }
        
        c = [];
        d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+(b.t1||'正标题')+':<input class="rvVal" type="text" value="'+(a.t1||'')+'" key="RV.adtL.t1"/></div>';
        c.push(d);
        
        for(z=0; z<a.tl.length; z++) {
            if(z == 'des' || z == 'tt') continue;
            c.push('<div class="rvLabB"><div class="rvLabT"><div class="rvLab">#t'+z+'</div><div class="rvLabX" onclick="RV.dn(this.parentNode.parentNode);delete RV.adtL.tl['+z+']">X</div></div><div class="rvLabC">');
            
            f = ['t2', 'dt', 'd1', 'tp'];
            for(i=0; i<f.length; i++) {
                e = 'RV.adtL.tl['+z+'].'+f[i];
                d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+(b[f[i]]||'')+':<input class="rvVal" type="text" value="'+(a[z][f[i]]||'')+'" key="'+e+'"/></div>';
                c.push(d);
            }
            
            for(y=0; y<a[z].dl.length; y++) {
                c.push('<div class="rvLabB"><div class="rvLabT"><div class="rvLab">#d'+y+'</div><div class="rvLabX" onclick="RV.dn(this.parentNode.parentNode);delete RV.adtL.tl['+z+'].dl['+y+']">X</div></div><div class="rvLabC">');
                
                f = ['nm', 'vl', 'pi', 'fa', 'ac', 'wd', 'd2'];
                for(i=0; i<f.length; i++) {
                    e = 'RV.adtL.tl['+z+'].dl['+y+'].'+f[i];
                    d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+(b[f[i]]||'')+':<input class="rvVal" type="text" value="'+(a[z].dl[y][f[i]]||'')+'" key="'+e+'"/></div>';
                    c.push(d);
                }
                
                c.push('</div></div>');
            }
            
            c.push('</div></div>');
        }
        
        f = '<div class="rvBtn" onclick="RV.sn(RV.EB)">'+(RV.lg[l].inp||'输入(Input)')+'</div><div class="rvBtn">'+(RV.lg[l].loc||'本地(Local)')+'<input type="file" class="rvFile" onclick="RV.up(this)" multiple="1"/></div><div class="rvBtn" onclick="RV.ol(\'http://rv.eefaa.cn/?dnet\')">'+(RV.lg[l].net||'网络(Net)')+'</div>';
        
        c = c.join('')+f+'<b class="cl"></b>';
        RV.gn('rvTB2').innerHTML = c;
    },
    
    sys: (A) => { // system resource
        var a,b,c,d,e,f,z;
        if(A == 'ado') {
            a = RV.vl.bm || '';
            b = '系统音频(System Audio)';
        }
        c = a.split(','); // value list
        d = [];
        e = '';
        for(z=0; z<c.length; z++) {
            if(A == 'ado') e = 'RV.ado(\''+c[z]+'\')';
            d.push('<div class="rvBtn" onclick="RV.sel(this);'+e+'">'+c[z]+'</div>');
        }
        d = d.join('');
        RV.msg(b, d, 1);
    },
    
    pdt: (A) => { // parse data
        var a,b,c,d,o,s,t,z;
        if(!A) return;
        o = RV.adtL;
        s = RV.selAD || null;
        a = A.split(/\r\n|\r|\n/);
        for(z=0; z<a.length; z++) {
            t = t || {};
            b = [];
            c = (a[z]||'').trim();
            if(!c) continue;
            d = c.substr(0, 2);
            e = c.substr(3).trim();
            if(d == 't1') {
                o.t1 = e;
                continue;
            }
            
            t[d] = (t[d]||0) + 1;
            if(t[d] > 1) {
            
            }
        }
    },
    
    font: (A) => { // font
        var a,b,c,d,z;
        if(!A) return;
        RV.MDF = A;
        a = {simsun:'宋体(SimSun):ABCDabcd1234', yahei:'雅黑(YaHei):ABCDabcd1234', kuaile:'快乐(KuaiLe):ABCDabcd1234', kuhei:'酷黑(KuHei):ABCDabcd1234', pangmen:'庞门(PangMen):ABCDabcd1234', xiaobai:'小白(XiaoBai):ABCDabcd1234', zhenyan:'真言(ZhenYan):ABCDabcd1234'};
        b = [];
        for(z in a) {
            b.push('<div class="rvFont" style="font-family:'+z+';" onclick="RV.MDF.lastChild.value=\''+z+'\';">'+a[z]+'</div>');
        }
        b = b.join('')+'<b class="cl"></b>';
        RV.msg('字体(Font)', b, 1);
    },
    
    hsb: (A) => { // hsb
        var a,b,c,d,e,f,n,o,h,s,l,x,y,z,hsb,hsl,rgb,hex;
        A = A || window.event;
        a = RV.HSB;
        b = RV.gn('rvHsbCb');
        c = a.offsetLeft;
        d = a.offsetTop;
        e = b.offsetLeft;
        f = b.offsetTop;
        if (A.pageX || A.pageY) {
            x = A.pageX;
            y = A.pageY;
        } else {
            x = A.clientX;
            y = A.clientY;
        }
        
        h = RV.hsbH || 0;
        s = x-c-e;
        l = y-d-f;
        n = RV.gn('rvHsbCS');
        if(s <= 150 && l <= 150) {
            n.style.left = s-9 + 'px';
            n.style.top = l-9 + 'px';
            s = Math.round(s * (100/b.offsetWidth));
            l = Math.round(l * (100/b.offsetHeight));
            if(s>50 || l>50) g = 'CS1';
            else g = 'CS2';
            n.className = g;
            l = Math.abs(l - 100);
        } else {
            s = RV.hsbS || 100;
            l = RV.hsbB || 100;
        }
        
        if(s > 100) s = 100;
        if(l > 100) l = 100;
        RV.hsbS = s;
        RV.hsbB = l;
        
        RV.rvHSB = hsb = {h:h, s:s, b:l, hsb:'H:'+h+', S:'+s+', B:'+l};
        RV.rvRGB = rgb = RV.hsb2rgb(h, s, l);
        RV.rvHSL = hsl = RV.rgb2hsl(rgb.r, rgb.g, rgb.b);
        RV.rvHEX = hex = RV.rgb2hex(rgb.r, rgb.g, rgb.b);
        
        o = RV.gn('rvHsbC1');
        o.style.backgroundColor = hex.hex1;
        
        a = RV.gn('rvHsbHv');
        b = RV.gn('rvHsbSv');
        c = RV.gn('rvHsbBv');
        a.value = hsb.h;
        b.value = hsb.s;
        c.value = hsb.b;
        
        a = RV.gn('rvHslHv');
        b = RV.gn('rvHslSv');
        c = RV.gn('rvHslLv');
        a.value = hsl.h;
        b.value = hsl.s;
        c.value = hsl.l;
        
        a = RV.gn('rvRgbRv');
        b = RV.gn('rvRgbGv');
        c = RV.gn('rvRgbBv');
        a.value = rgb.g;
        b.value = rgb.g;
        c.value = rgb.b;
        
        a = RV.gn('rvHexCt');
        b = RV.gn('rvHexCv');
        c = a.innerHTML;
        if(c == 'HEX1') b.value = hex.hex1.toUpperCase();
        else if(c == 'HEX2') b.value = hex.hex2.toUpperCase();
        else if(c == 'RGB1') b.value = rgb.rgb1.toLowerCase();
        else if(c == 'RGB2') b.value = rgb.rgb2.toUpperCase();
        else if(c == 'RGBA') b.value = rgb.rgba.toLowerCase();
        else if(c == 'HSB') b.value = hsb.hsb.toUpperCase();
        else if(c == 'HSL') b.value = hsl.hsl.toUpperCase();
        else if(c == 'HSLA') b.value = hsl.hsla.toLowerCase();
        
        RV.sn(a);
    },
    
    hsbok: (A) => { // hsb ok
        var a,b,c,d;
        a = RV.gn('rvHsbC1');
        b = RV.gn('rvHsbC2');
        c = a.style.backgroundColor || '#FF0000';
        b.style.backgroundColor = c;
        d = RV.rgb2hex(c);
        if(RV.MDF) RV.MDF.value = d.hex1.toUpperCase();
        RV.hn(RV.HSB);
    },
    
    shue: (A) => { // set hue
        var a,b,c,d,e,h,x,y;
        A = A || window.event;
        a = RV.HSB;
        b = RV.gn('rvHsbHue');
        c = a.offsetTop;
        d = b.offsetTop;
        if (A.pageX || A.pageY) {
            x = A.pageX;
            y = A.pageY;
        } else {
            x = A.clientX;
            y = A.clientY;
        }
        RV.hsbH = h = Math.round((y-c-d) * (360/b.offsetHeight));
        e = RV.hsb2rgb(h, 100, 100);
        f = RV.gn('rvHsbH');
        f.style.backgroundColor = e.rgb1;
        RV.hsb();
    },
    
    hsbcc: (A) => { // change color
        var h1,h2,s1,s2,b1,b2,r,g,b,h,s,t,i,c,v1,v2,v3,hsb,hsl,rgb,hex;
        h1 = RV.gn('rvHsbHv');
        s1 = RV.gn('rvHsbSv');
        b1 = RV.gn('rvHsbBv');
        h2 = RV.gn('rvHslHv');
        s2 = RV.gn('rvHslSv');
        b2 = RV.gn('rvHslLv');
        r = RV.gn('rvRgbRv');
        g = RV.gn('rvRgbGv');
        b = RV.gn('rvRgbBv');
        t = RV.gn('rvHexCt');
        h = RV.gn('rvHexCv');
        i = A.id;
        if(i.indexOf('rvHsb') != -1) {
            v1 = parseInt(h1.value) || 0;
            v2 = parseInt(s1.value) || 0;
            v3 = parseInt(b1.value) || 0;
            if(v1 < 0) v1 = 0;
            if(v1 > 360) v1 = 360;
            if(v2 < 0) v2 = 0;
            if(v2 > 100) v2 = 100;
            if(v3 < 0) v3 = 0;
            if(v3 > 100) v3 = 100;
            hsb = {h:v1, s:v2, b:v3, hsb:'H:'+v1+', S:'+v2+', B:'+v3};
            rgb = RV.hsb2rgb(v1, v2, v3);
            hsl = RV.rgb2hsl(rgb.r, rgb.g, rgb.b);
            hex = RV.rgb2hex(rgb.r, rgb.g, rgb.b);
            
        } else if(i.indexOf('rvHsl') != -1) {
            v1 = parseInt(h2.value) || 0;
            v2 = parseInt(s2.value) || 0;
            v3 = parseInt(b2.value) || 0;
            if(v1 < 0) v1 = 0;
            if(v1 > 360) v1 = 360;
            if(v2 < 0) v2 = 0;
            if(v2 > 100) v2 = 100;
            if(v3 < 0) v3 = 0;
            if(v3 > 100) v3 = 100;
            hsl = {h:v1, s:v2, l:v3, hsl:'H:'+v1+', S:'+v2+', L:'+v3, hsla:'hsla('+h+', '+s+'%, '+l+'%, 1)'};
            rgb = RV.hsl2rgb(v1, v2, v3);
            hsb = RV.rgb2hsb(rgb.r, rgb.g, rgb.b);
            hex = RV.rgb2hex(rgb.r, rgb.g, rgb.b);
            
        } else if(i.indexOf('rvRgb') != -1) {
            v1 = parseInt(r.value) || 0;
            v2 = parseInt(g.value) || 0;
            v3 = parseInt(b.value) || 0;
            if(v1 < 0) v1 = 0;
            if(v1 > 255) v1 = 255;
            if(v2 < 0) v2 = 0;
            if(v2 > 255) v2 = 255;
            if(v3 < 0) v3 = 0;
            if(v3 > 255) v3 = 255;
            rgb = {r:v1, g:v2, b:v3, rgb1:'rgb('+v1+', '+v2+', '+v3+')', rgb2:'R:'+v1+', G:'+v2+', B:'+v3, rgba:'rgba('+r+', '+g+', '+b+', 1)'};
            hsl = RV.rgb2hsl(v1, v2, v3);
            hsb = RV.rgb2hsb(v1, v2, v3);
            hex = RV.rgb2hex(v1, v2, v3);
            
        } else if(i == 'rvHexCv') {
            v1 = (h.value || '#000000').toUpperCase();
            if(v1.indexOf('H:') != -1 && v1.indexOf('B:') != -1) {
                s = v1.replace('H:', '');
                s = s.replace('S:', '');
                s = s.replace('B:', '');
                s = s.split(/ *, */);
                v1 = parseInt(s[0]) || 0;
                v2 = parseInt(s[1]) || 0;
                v3 = parseInt(s[2]) || 0;
                if(v1 < 0) v1 = 0;
                if(v1 > 360) v1 = 360;
                if(v2 < 0) v2 = 0;
                if(v2 > 100) v2 = 100;
                if(v3 < 0) v3 = 0;
                if(v3 > 100) v3 = 100;
                hsb = {h:v1, s:v2, b:v3, hsb:'H:'+v1+', S:'+v2+', B:'+v3};
                rgb = RV.hsb2rgb(v1, v2, v3);
                hsl = RV.rgb2hsl(rgb.r, rgb.g, rgb.b);
                hex = RV.rgb2hex(rgb.r, rgb.g, rgb.b);
                
            } else if(v1.indexOf('H:') != -1 && v1.indexOf('L:') != -1) {
                s = v1.replace('H:', '');
                s = s.replace('S:', '');
                s = s.replace('L:', '');
                s = s.split(/ *, */);
                v1 = parseInt(s[0]) || 0;
                v2 = parseInt(s[1]) || 0;
                v3 = parseInt(s[2]) || 0;
                if(v1 < 0) v1 = 0;
                if(v1 > 360) v1 = 360;
                if(v2 < 0) v2 = 0;
                if(v2 > 100) v2 = 100;
                if(v3 < 0) v3 = 0;
                if(v3 > 100) v3 = 100;
                hsl = {h:v1, s:v2, l:v3, hsl:'H:'+v1+', S:'+v2+', L:'+v3, hsla:'hsla('+h+', '+s+'%, '+l+'%, 1)'};
                rgb = RV.hsl2rgb(v1, v2, v3);
                hsb = RV.rgb2hsb(rgb.r, rgb.g, rgb.b);
                hex = RV.rgb2hex(rgb.r, rgb.g, rgb.b);
                
            } else if(v1.indexOf('RGB(') != -1 || v1.indexOf('R:') != -1) {
                s = v1.replace('R:', '');
                s = s.replace('G:', '');
                s = s.replace('B:', '');
                s = s.replace('RGB(', '');
                s = s.replace(')', '');
                s = s.split(/ *, */);
                v1 = parseInt(s[0]) || 0;
                v2 = parseInt(s[1]) || 0;
                v3 = parseInt(s[2]) || 0;
                if(v1 < 0) v1 = 0;
                if(v1 > 255) v1 = 255;
                if(v2 < 0) v2 = 0;
                if(v2 > 255) v2 = 255;
                if(v3 < 0) v3 = 0;
                if(v3 > 255) v3 = 255;
                rgb = {r:v1, g:v2, b:v3, rgb1:'rgb('+v1+', '+v2+', '+v3+')', rgb2:'R:'+v1+', G:'+v2+', B:'+v3, rgba:'rgba('+r+', '+g+', '+b+', 1)'};
                hsl = RV.rgb2hsl(v1, v2, v3);
                hsb = RV.rgb2hsb(v1, v2, v3);
                hex = RV.rgb2hex(v1, v2, v3);
                
            } else {
                s = v1.replace('#', '');
                if(s.length == 3) {
                    v1 = parseInt(s.substr(0,1),16) || 0;
                    v2 = parseInt(s.substr(1,1),16) || 0;
                    v3 = parseInt(s.substr(2,1),16) || 0;
                } else if(s.length == 6) {
                    v1 = parseInt(s.substr(0,2),16) || 0;
                    v2 = parseInt(s.substr(2,2),16) || 0;
                    v3 = parseInt(s.substr(4,2),16) || 0;
                } else {
                    alert('数值无效！');
                    return;
                }
                
                if(v1 < 0) v1 = 0;
                if(v1 > 255) v1 = 255;
                if(v2 < 0) v2 = 0;
                if(v2 > 255) v2 = 255;
                if(v3 < 0) v3 = 0;
                if(v3 > 255) v3 = 255;
                rgb = {r:v1, g:v2, b:v3, rgb1:'rgb('+v1+', '+v2+', '+v3+')', rgb2:'R:'+v1+', G:'+v2+', B:'+v3, rgba:'rgba('+r+', '+g+', '+b+', 1)'};
                hsl = RV.rgb2hsl(v1, v2, v3);
                hsb = RV.rgb2hsb(v1, v2, v3);
                hex = RV.rgb2hex(v1, v2, v3);
            }
        }
        
        RV.gn('rvHsbC1').style.backgroundColor = rgb.rgb1;
        h1.value = hsb.h;
        s1.value = hsb.s;
        b1.value = hsb.b;
        
        h2.value = hsl.h;
        s2.value = hsl.s;
        b2.value = hsl.l;
        
        r.value = rgb.r;
        g.value = rgb.g;
        b.value = rgb.b;
        
        c = t.innerHTML;
        if(c == 'HEX1') h.value = hex.hex1.toUpperCase();
        else if(c == 'HEX2') h.value = hex.hex2.toUpperCase();
        else if(c == 'RGB1') h.value = rgb.rgb1.toLowerCase();
        else if(c == 'RGB2') h.value = rgb.rgb2.toUpperCase();
        else if(c == 'RGBA') h.value = rgb.rgba.toLowerCase();
        else if(c == 'HSB') h.value = hsb.hsb.toUpperCase();
        else if(c == 'HSL') h.value = hsl.hsl.toUpperCase();
        else if(c == 'HSLA') h.value = rgb.hsla.toLowerCase();
    },
    
    hex2rgb: (H) => { // hex to rgb
        var r,g,b,s;
        s = (H+'').replace('#', '');
        if(s.length == 3) {
            r = parseInt(s.substr(0, 1), 16);
            g = parseInt(s.substr(1, 1), 16);
            b = parseInt(s.substr(2, 1), 16);
        } else {
            r = parseInt(s.substr(0, 2), 16);
            g = parseInt(s.substr(2, 2), 16);
            b = parseInt(s.substr(4, 2), 16);
        }
        return {r:r, g:g, b:b, rgb1:'rgb('+r+', '+g+', '+b+')', rgb2:'R:'+r+', G:'+g+', B:'+b, rgba:'rgba('+r+', '+g+', '+b+', 1)'};
    },
    
    rgb2hex: (R, G, B) => { // rgb to hex
        var r,g,b,h,s;
        if(typeof R == 'string' && (R+'').substr(0,4)=='rgb(') {
            s = (R+'').replace('rgb(', '');
            s = s.replace(')', '');
            s = s.split(/ *, */);
            R = parseInt(s[0]) || 0;
            G = parseInt(s[1]) || 0;
            B = parseInt(s[2]) || 0;
        }
        r = '0' + R.toString(16);
        g = '0' + G.toString(16);
        b = '0' + B.toString(16);
        h = r.slice(-2)+g.slice(-2)+b.slice(-2);
        return {hex1:'#'+h, hex2:h};
    },
    
    rgb2hsb: (R, G, B) => { // rgb to hsb
        var r,g,b,h,s,v,f,l,m,n;
        r = R / 255;
        g = G / 255;
        b = B / 255;
        m = Math.min(r, g, b);
        n = v = Math.max(r, g, b);
        l = (m + n) / 2;
        f = n - m;
        
        if (n == m) {
            h = 0;
        } else {
            switch (n) {
            case r:
                h = (g - b) / f + (g < b ? 6 : 0);
                break;
            case g:
                h = 2.0 + (b - r) / f;
                break;
            case b:
                h = 4.0 + (r - g) / f;
                break;
            }
            h = Math.round(h * 60);
        }
        if (n == 0) {
            s = 0;
        } else {
            s = 1 - m / n;
        }
        s = Math.round(s * 100);
        v = Math.round(v * 100);
        return {h:h, s:s, b:v, hsb:'H:'+h+', S:'+s+', B:'+v};
    },
    
    hsb2rgb: (H, S, B) => { // hsb to rgb
        var r,g,b,h,s,v,f,p,q,t;
        s = S / 100;
        v = B / 100;
        h = Math.floor(H / 60) % 6;
        f = H / 60 - h;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        
        switch (h) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        case 5:
            r = v;
            g = p;
            b = q;
            break;
        }
        
        r = Math.round(r * 255);
        g = Math.round(g * 255);
        b = Math.round(b * 255);
        return {r:r, g:g, b:b, rgb1:'rgb('+r+', '+g+', '+b+')', rgb2:'R:'+r+', G:'+g+', B:'+b, rgba:'rgba('+r+', '+g+', '+b+', 1)'};
    },
    
    rgb2hsl: (R, G, B) => { // rgb to hsl
        var r,g,b,h,s,l,f,m,n;
        r = R / 255;
        g = G / 255;
        b = B / 255;
        m = Math.min(r, g, b);
        n = Math.max(r, g, b);
        l = (m + n) / 2;
        f = n - m;
        if (n == m) {
            h = 0;
            s = 0;
        } else {
            s = l > 0.5 ? f / (2.0 - n - m) : f / (n + m);
            switch (n) {
            case r:
                h = (g - b) / f + (g < b ? 6 : 0);
                break;
            case g:
                h = 2.0 + (b - r) / f;
                break;
            case b:
                h = 4.0 + (r - g) / f;
                break;
            }
            h = Math.round(h * 60);
        }
        s = Math.round(s * 100);
        l = Math.round(l * 100);
        return {h:h, s:s, l:l, hsl:'H:'+h+', S:'+s+', L:'+l, hsla:'hsla('+h+', '+s+'%, '+l+'%, 1)'};
    },
    
    hsl2rgb: (H, S, L) => { // hsl to rgb
        var h,s,l,p,q,c,i,r,g,b,rgb;
        h = H / 360;
        s = S / 100;
        l = L / 100;
        rgb = [];
        if (s == 0) {
            rgb = [Math.round(l * 255), Math.round(l * 255), Math.round(l * 255)];
        } else {
            q = l >= 0.5 ? (l + s - l * s) : (l * (1 + s));
            p = 2 * l - q;
            rgb[0] = h + 1 / 3;
            rgb[1] = h;
            rgb[2] = h - 1 / 3;
            for (i = 0; i < rgb.length; i++) {
                c = rgb[i];
                if (c < 0) {
                    c = c + 1;
                } else if (c > 1) {
                    c = c - 1;
                }
                switch (true) {
                case(c < (1 / 6)) : c = p + (q - p) * 6 * c;
                    break;
                case ((1 / 6) <= c && c < 0.5) : c = q;
                    break;
                case (0.5 <= c && c < (2 / 3)) : c = p + (q - p) * (4 - 6 * c);
                    break;
                default:
                    c = p;
                    break;
                }
                rgb[i] = Math.round(c * 255);
            }
        }
        
        r = rgb[0];
        g = rgb[1];
        b = rgb[2];
        return {r:r, g:g, b:b, rgb1:'rgb('+r+', '+g+', '+b+')', rgb2:'R:'+r+', G:'+g+', B:'+b, rgba:'rgba('+r+', '+g+', '+b+', 1)'};
    },
    
    hue: (A, B) => { // hue
        B = B || 50;
        A += Math.round(RV.rr(-(B)+', '+B));
        if(A < 0) A += 360;
        else if(A > 360) A -= 360;
        return A;
    },
    
    hsla: (A, B, C, D) => { // return hsla color
        return 'hsla(' +A+ ',' +B+ '%,' +C+ '%,' +D+ ')';
    },
    
    tts: (A, B) => { // text to speec
        var ssu = new SpeechSynthesisUtterance();
        B = B || {};
        ssu.text = A || '';
        ssu.lang = B.l || RV.ini2.ttsl || '';
        ssu.pitch = B.p || RV.ini2.ttsp || 0;
        ssu.rate = B.r || RV.ini2.ttsr || 1;
        ssu.volume = B.v || RV.ini2.ttsv || 1;
        speechSynthesis.speak(ssu);
        //CL([speechSynthesis, ssu]);
    },
    
    msg: (A, B, C) => { // show msg
        var a,b,c,d;
        A = A || '浮窗';
        B = B || '浮窗内容';
        a = RV.FW.firstChild.firstChild;
        b = RV.FW.firstChild.nextSibling;
        if(!C) B = '<div class="rvMsg">'+B+'</div>';
        a.innerHTML = A;
        b.innerHTML = B;
        RV.sn(RV.FW);
    },
    
    rw: (A) => { // resize window
        var a,b,c,d,e,f,g,i,j,w,h,w2,h2,z;
        a = RV.gn('rvTB');
        b = RV.gn('rvVB');
        c = RV.gn('rvTB0');
        d = RV.gn('rvTB1');
        e = RV.gn('rvTB2');
        w = document.body.offsetWidth;
        h = document.body.offsetHeight;
        
        f = RV.ini2.out.vp;
        g = parseInt(RV.ini2.out.vs);
        if(f == '4:3'){
            if(g == 1080) {
                RV.cw = 1440;
                RV.ch = 1080;
            } else if(g == 720) {
                RV.cw = 960;
                RV.ch = 720;
            } else {
                RV.cw = 640;
                RV.ch = 480;
            }
            
        } else if(f == '9:16') {
            if(g == 1080) {
                RV.cw = 1080;
                RV.ch = 1920;
            } else if(g == 720) {
                RV.cw = 720;
                RV.ch = 1280;
            } else {
                RV.cw = 480;
                RV.ch = 854;
            }
            
        } else {
            if(g == 1080) {
                RV.cw = 1920;
                RV.ch = 1080;
            } else if(g == 720) {
                RV.cw = 1280;
                RV.ch = 720;
            } else {
                RV.cw = 854;
                RV.ch = 480;
            }
        }
        
        i = RV.cw / RV.ch;
        if(w/h >= 0.75) {
            RV.RV.className = '';
            w = w - a.offsetWidth - 2;
            b.style.width = w + 'px';
            if (RV.cw >= RV.ch) {
                w2 = w - 20;
                h2 = w2 / i;
            } else {
                h2 = h - 20;
                w2 = h2 * i;
            }
            j = h - c.offsetHeight - d.offsetHeight - 2;
            
        } else {
            RV.RV.className = 'RVMB';
            b.style.width = 'auto';
            if (RV.cw >= RV.ch) {
                w2 = w - 20;
                h2 = w2 / i;
            } else {
                h2 = Math.round(h * .33);
                w2 = h2 * i;
            }
            j = h - c.offsetHeight - d.offsetHeight - 22 - h2;
        }
        
        e.style.height = j + 'px';
        RV.CB.style.width = w2 + 'px';
        RV.CB.style.height = h2 + 'px';
        RV.VDO.style.width = w2 + 'px';
        RV.VDO.style.height = h2 + 'px';
        RV.CV.width = RV.CVT.width = RV.cw;
        RV.CV.height = RV.CVT.height = RV.ch;
        RV.CV.style.width = RV.CVT.style.width = w2 + 'px';
        RV.CV.style.height = RV.CVT.style.height = h2 + 'px';
    },
    
    gn: (A) => { // get node
        if(typeof A == 'object') return A;
        return document.getElementById(A);
    },
    
    an: (A, B, C) => { // add node
        A = RV.gn(A) || document.body;
        B = B || 'testNode';
        C = C || 'div';
        var a = document.createElement(C);
        a.id = B;
        A.appendChild(a);
        return a;
    },
    
    dn: (A) => { // del node
        A = RV.gn(A);
        var p = A.parentNode;
        p.removeChild(A);
    },
    
    sn: (A) => { // show node
        A = RV.gn(A);
        A.className = A.className.replace(/ *[ianhodusf]{1}_{1}/g, '');
    },
    
    hn: (A) => { // show node
        A = RV.gn(A);
        A.className = A.className.replace(/ *[ianhodusf]{1}_{1}/g, '') + ' h_';
    },
    
    sh: (A) => { // show node
        A = RV.gn(A);
        var a = A.className;
        if (a.indexOf('h_') > -1) RV.sn(A);
        else RV.hn(A);
    },
    
    sel: (A) => { // select node
        var a,b,c,d,l,p,z;
        p = A.parentNode;
		a = p.childNodes;
		b = a.length;
		for(z = 0; z < b; z++) {
			if(a[z].nodeType!=1) continue;
			if(A == a[z]) c = z;
			d = a[z].className;
			a[z].className = d.replace(/ *s_/g, '');
			a[z].setAttribute('ss', '0');
		}
		A.className = A.className+' s_';
		A.setAttribute('ss', '1');
        return c;
    },
    
    aj: (A, B, C) => { // add js
         var a, b, c, d, h;
        A = 'JS_' + A;
        C = C || 1;
        h = document.getElementsByTagName('head')[0];
        a = RV.gn(A);
        if (!a) {
            a = h.appendChild(document.createElement('script'));
            a.id = A;
            a.setAttribute('type', 'text/javascript');
        }
        if (C == 1) a.text = B;
        else a.setAttribute('src', B);
        return a;
    },
    
    ac: (A, B) => { // add css
        var a, b, c, d, h;
        A = 'CSS_' + A;
        h = document.getElementsByTagName('head')[0];
        a = RV.gn(A);
        if (!a) {
            a = h.appendChild(document.createElement('style'));
            a.id = A;
            a.setAttribute('type', 'text/css');
        }
        b = RV.isie();
        if (b[0]=='IE' && b[1]<11) a.styleSheet.cssText = B;
        else a.innerHTML = B;
        return a;
    },
    
    kd: (A) => { // key down
        var o,k;
        A = A || window.event;
        o = A.srcElement || A.target;
        k = A.keyCode || A.charCode;
        RV.KO[RV.KO.kv[k]] = 1;
    },
    
    ku: (A) => { // key up
        var o,k,v;
        A = A || window.event;
        o = A.srcElement || A.target;
        k = A.keyCode || A.charCode;
        if (o.tagName == 'TEXTAREA' || o.tagName == 'INPUT' || o.getAttribute('contentEditable') == 'true') RV.KO.kl = 1;
        else RV.KO.kl = 0;
        RV.KO[RV.KO.kv[k]] = 0;
        v = RV.KO.kv[k];
        if (!v) return;
        
        if (RV.KO.F) v = 'F+' + v;
        else if (RV.KO.A) v = 'A+' + v;
        else if (RV.KO.Z) v = 'Z+' + v;
        else if (RV.KO.Cap) v = 'Cap+' + v;
        else if (RV.KO.A && RV.KO.S) v = 'A+S+' + v;
        else if (RV.KO.Z && RV.KO.S) v = 'Z+S+' + v;
        else if (RV.KO.Ctr && RV.KO.Alt) v = 'Ctr+Alt+' + v;
        else if (RV.KO.Ctr) v = 'Ctr+' + v;
        else if (RV.KO.Shi) v = 'Shi+' + v;
        else if (RV.KO.Alt) v = 'Alt+' + v;
        else if (RV.KO.Spa) v = 'Spa+' + v;
        if (RV.KO.D && v == 'D+F') RV.KO.kfo = 'DEF';
        if ((RV.KO.kfo != '无' && RV.KO.kl == 0) || (RV.KO.Ctr || RV.KO.Shi || RV.KO.Alt)) eval(RV.KO.kf[RV.KO.kfo][v]);
        if (RV.KO.kl == 2) RV.KO.kl = 0;
    },
    
    sk: (A) => { // sel key
        var k;
        A = RV.gn(A);
        if (!A) return;
        k = A.getAttribute('kfo');
        if (k) RV.KO.kfo = k;
        else RV.KO.kfo = 'DEF';
    },
    
    KO: { // key obj
        kl: 0, // key lock
        kfo: 'DEF', // key function obj
        kv: { // key value
            '65': 'A',
            '66': 'B',
            '67': 'C',
            '68': 'D',
            '69': 'E',
            '70': 'F',
            '71': 'G',
            '72': 'H',
            '73': 'I',
            '74': 'J',
            '75': 'K',
            '76': 'L',
            '77': 'M',
            '78': 'N',
            '79': 'O',
            '80': 'P',
            '81': 'Q',
            '82': 'R',
            '83': 'S',
            '84': 'T',
            '85': 'U',
            '86': 'V',
            '87': 'W',
            '88': 'X',
            '89': 'Y',
            '90': 'Z',
            '13': 'Ent',
            '17': 'Ctr',
            '16': 'Shi',
            '18': 'Alt',
            '32': 'Spa',
            '91': 'Win',
            '27': 'Esc',
            '192': '`',
            '9': 'Tab',
            '20': 'Cap',
            '8': 'Bac',
            '46': 'Del',
            '38': 'Up',
            '40': 'Dn',
            '37': 'Lef',
            '39': 'Rig',
            '33': 'Pu',
            '34': 'Pd',
            '36': 'Hm',
            '35': 'End',
            '48': '0',
            '49': '1',
            '50': '2',
            '51': '3',
            '52': '4',
            '53': '5',
            '54': '6',
            '55': '7',
            '56': '8',
            '57': '9',
            '189': '-',
            '187': '=',
            '219': '[',
            '221': ']',
            '186': ';',
            '222': '\'',
            '188': ',',
            '190': '.',
            '191': '/',
            '220': '\\',
            '112': 'F1',
            '113': 'F2',
            '114': 'F3',
            '115': 'F4',
            '116': 'F5',
            '117': 'F6',
            '118': 'F7',
            '119': 'F8',
            '120': 'F9',
            '121': 'F10',
            '122': 'F11',
            '123': 'F12',
            '19': 'Pau',
            '44': 'Prt',
            '45': 'Ins'
        },

        kf: { // key function
            'DEF': {
                'F+A': 'RV.pa(1)',
                'F+S': 'RV.pa(0)',
                'H': 'RV.sh("rvHsb")',
                'E': 'RV.sh("rvEB")',
            }
        }
    },
    
    isie: (A) => { // is ie
        var a,s,u;
        u = window.navigator.userAgent.toLowerCase();
        a = [];
        s = '';
        s = (u.match(/trident\/7([\d.]+)/)) ? a.push('IE', '11') : (s = u.match(/msie ([\d.]+)/)) ? a.push('IE', s[1]) : a.push('NOIE', 0);
        return a;
    },
    
    ft: (A) => { // format time
        var h,m,s;
        h = Math.floor(A/1000 / 3600);
        m = ('0' + Math.floor(A/1000 / 60 % 60)).slice(-2);
        s = ('0' + A/1000 % 60).slice(-2);
        if(h < 10) h = '0' + h;
        return h+':'+m+':'+s;
    },
    
    slp: (A, B) => { // sleep(ms)
        B = B || 0;
        if(!B) return new Promise(r => setTimeout(r, A));
        else {
            A = parseInt(A, 10);
            var a = new Date().getTime() + A;
            while(new Date().getTime() < a) {}
        }
    },
    
    rr: (A) => { // rand range
        var a,b,c,d,e,f;
        A += '';
        a = (A||'0,1').split(/ *, */);
        if(a.length < 2) return a[0];
        b = parseFloat(a[0])||0;
        c = parseFloat(a[1])||1;
        e = Math.min(b, c);
        f = Math.max(b, c);
        return Math.random() * (f-e) + e;
    },
    
    rs: (A, B) => { // rand string
        var a, l, s, z;
        A = A || 6;
        B = B || '';
        switch (B.toLowerCase()) {
        case 'n':
            s = '0123456789';
            break;
        case 'l':
            s = 'abcdefghijklmnopqrstuvwxyz';
            break;
        case 'u':
            s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        case 'nl':
            s = '0123456789abcdefghijklmnopqrstuvwxyz';
            break;
        case 'nu':
            s = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        case 'lu':
            s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        default:
            s = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        }
        s = s.split('');
        l = s.length;
        a = '';
        for (z = 0; z < A; z++) {
            a += s[Math.floor(Math.random() * l)];
        }
        return a;
    },
    
    ls: (A, B, C) => { // localStorage
        var a, b, c, d;
        a = window.localStorage;
        if (!a) return '';
        if (C < 0) {
            a.removeItem(A);
        } else if (C < 1) {
            a.clear();
        } else if (!B && B != 0) {
            b = a.getItem(A);
            if (typeof b != 'string') b = '';
            return b;
        } else {
            a.setItem(A, B);
        }
    },
    
    e36: (A, B, C) => { // exclamation 36
        var a, b, c, d, e, f, l, y, z;
        if (!A) return '';
        A += '';
        B = B || 1;
        C = C || 0;
        a = '!`@#$%^&*()~-_=+[{]}\\|;:\'",<.>/? \t\r\n';
        b = '1023456789abcdefghijklmnopqrstuvwxyz';
        a = a.split('');
        b = b.split('');
        c = {};
        for (z = 0; z < 36; z++) {
            b[z] = '!' + b[z];
            c[a[z]] = b[z];
        }
        if (C) {
            if (C == 1) d = '!`~#&-+\'";\\/\t\r\n';
            else d = '!' + C.replace(/\!/g, '');
            d = d.split('');
            e = [];
            f = [];
            for (z = 0; z < c.length; z++) {
                if (c[d[z]] != '') {
                    e.push(d[z]);
                    f.push(c[d[z]]);
                }
            }
            a = e;
            b = f;
        }
        l = a.length;
        if (B == 1) {
            for (z = 0; z < l; z++) {
                A = A.split(a[z]);
                A = A.join(b[z]);
            }
        } else {
            a.shift();
            b.shift();
            a.push('!');
            b.push('!1');
            for (z = 0; z < l; z++) {
                A = A.split(b[z]);
                A = A.join(a[z]);
            }
        }
        return A;
    },
    
    up: (A) => { // up file
        var a, b, c, d, e, f, l, o, p, s, t, u, v, w, x, y, z;
        v = {'image':'pic', 'jpeg':'pic', 'jpe':'pic', 'jpg':'pic', 'png':'pic', 'gif':'pic', 'bmp':'pic', 'zip':'zip', 'rar':'zip', '7z':'zip', 'gz':'zip', 'bz2':'zip', 'audio':'ado', 'mp3':'ado', 'wav':'ado', 'ape':'ado', 'flac':'ado', 'video':'vdo', 'mp4':'vdo', 'mpg':'vdo', 'mkv':'vdo', 'flv':'vdo', 'aiv':'vdo', 'rm':'vdo', 'rmvb':'vdo', 'text':'txt', 'js':'txt', 'json':'txt', 'csv':'txt'};
        o = RV.gn(A);
        if (!o) return;
        
        o.onchange = function() {
            e = this.files;
            l = e.length;
            for (z = 0; z < l; z++) {
                f = e[z] || null;
                if (!f) continue;
                //CL([f, f.name, f.size, f.type, f.lastModified, f.lastModifiedDate]);return;
                y = f.size || 0;
                x = (f.name || '').split('.');
                x = x[x.length - 1];
                t = (f.type || '').split('/');
                w = v[t[0]] || v[x];
                
                if (!w) {
                    RV.msg('错误', '无效文件类型！');
                    continue;
                } else if (w == 'pic') {
                    //u = URL.createObjectURL(f);
                    //URL.revokeObjectURL(u);
                    CL('File type not supported');
                } else if (w == 'ado') {
                    RV.ado(f);
                } else if (w == 'vdo') {
                    CL('File type not supported');
                } else if (w == 'zip') {
                    CL('File type not supported');
                } else if (w == 'txt') {
                    RV.adt(f);
                }
            }
        };
    },
    
    ol: (A) => { // open link
        var a = document.createElement('a');
        a.href = A;
        a.target = '_blank';
        a.click();
        RV.log(A);
    },
    
    log: (A) => { // link log
        var a, b, c, d, e, f;
        A = A + '';
        a = RV.gn('rvIB');
        b = A.substr(0, 7).toLowerCase();
        f = A.substr(0, 1);
        if (b != '.' && f != '/' && b != 'http:\/\/' && b != 'https:\/') return '';
        c = document.createElement('iframe');
        c.setAttribute('src', 'log.html?url=' + A);
        a.appendChild(c);
        if (a.childNodes.length > 10) a.removeChild(a.firstChild);
    },
    
    xhr: (A) => { // XMLHttpRequest
        var a, b, z;
        if (typeof XMLHttpRequest != 'undefined') {
            a = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            b = ['Msxml2.XMLHttp.5.0', 'Msxml2.XMLHttp.4.0', 'Msxml2.XMLHttp.3.0', 'Msxml2.XMLHttp', 'Microsoft.XMLHttp'];
            for (z = 0; z < b.length; z++) {
                try {
                    a = new ActiveXObject(b[z]);
                    break;
                } catch(e) {
                    return null;
                }
            }
        }
        return a;
    },
    
    req: (A, B, C) => { // request
        var a, b, c, d, e, f;
        B = B || 1;
        if (!A) return '';
        a = RV.xhr();
        if (!a) return CL('xhr error!');
        
        if (B == 1) {
            a.open('POST', 'res.php?q='+A+'&t=' + new Date().getTime(), true);
        } else if (B == 2) {
            a.open('GET', A, true);
            a.responseType = 'arraybuffer';
        } else {
            a.open('GET', A, true);
        }
        a.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
        a.onreadystatechange = function() {
            if (a.readyState == 4 && a.status == 200) {
                if (B == 1) {
                    if (a.responseText != '') {
                        b = a.responseText;
                        if(C) C(b);
                        else eval(b);
                    }
                } else {
                    C(a.response);
                }
            } else if (a.readyState == 4 && a.status == 304 && B == 2) {
                RV.msg('错误', '304');
            } else if (a.readyState == 4 && a.status == 404 && B == 2) {
                RV.msg('错误', '404 Not Found');
            }
        };
        
        a.send();
    },
    
    ps: (A) => { // play sprite
        var a,b,c,d,o;
        if(!RV.PS) return;
        a = RV.ini2;
        if(!RV.bgs && RV.slib[a.sr.bg.id]) {
            o = {
                cw: RV.cw,
                ch: RV.ch,
                sc: a.sr.bg.sc,
                sr: a.sr.bg.sr,
                sh: a.sr.bg.sh,
                hr: a.sr.bg.hr
            };
            RV.slib[a.sr.bg.id](o);
            RV.bgs = 1;
        }
        
        RV.CTX.clearRect(0, 0, RV.cw, RV.ch);
        RV.CTX.globalCompositeOperation = 'source-over';
        RV.CTX.shadowBlur = 0;
        RV.CTX.drawImage(RV.CVT, 0, 0);
        RV.CTX.globalCompositeOperation = 'lighter';
        
        o = {
            cw: RV.cw,
            ch: RV.ch,
            sc: a.sr.mot.sc,
            sr: a.sr.mot.sr,
            ss: a.sr.mot.ss
        };
        if(RV.slib[a.sr.mot.id]) RV.slib[a.sr.mot.id](o);
        
        o = {
            b: a.sr.ado.bs || 1,
            x: RV.cw / 2,
            y: RV.ch / 2,
            r: Math.min(RV.cw, RV.ch) * .3,
            u: RV.u8a,
            ana: RV.ana,
            ctx: RV.CTX
        };
        if(RV.slib[a.sr.ado.id]) RV.slib[a.sr.ado.id](o);
    },
    
    pm: (A) => { // play music
        var a,b,c,d,z;
        a = RV.adoL;
        for(z in a) {
            if(!RV.ana) {
                RV.ana = a[z]['ana'];
                RV.u8a = new Uint8Array(360);
            }
            if(RV.PS == 1 && !a[z].ps) {
                if(!a[z].pb) a[z].st();
                else if(a[z].pb && a[z].pb*1000 < RV.PG) a[z].st();
            } else if(!RV.PS && a[z].ps == 1) {
                a[z].sp();
            } else if(a[z].pe && a[z].pe*1000 < RV.PG && a[z].ps == 1) {
                a[z].sp();
            }
        }
    },
    
    pa: (A) => { // play animation
        if(A == 1) {
            RV.ST = new Date().getTime();
            RV.PG = 0;
            RV.LT = 0;
            RV.PS = 1; // play state: 0=stop, 1=play
            RV.bgs = 0;
            RV.mts = 0;
            RV.rec();
            RV.loop();
            RV.MR.start();
            
        } else if(A == 2) {
            
        } else if(A == 3) {
            
        } else {
            cancelAnimationFrame(RV.rafid);
            RV.PS = 0;
            RV.pm();
            RV.MR.stop();
        }
    },
    
    //loop: async (A) => { // loop play animation
    loop: (A) => { // loop play animation
        var a,b,c,d,o,z;
        if(!RV.PS) {
            RV.pa(0);
            return;
        }
        
        a = new Date();
        b = RV.LT || a.getTime();
        
        // 动画开始
        RV.ps();
        RV.pm();
        //await RV.slp(50);
        // 动画耗时
        
        RV.LT = a.getTime();
        c = RV.LT - b;
        if(c < 1000/RV.FPS) {
            d = 1000/RV.FPS - c;
            //await RV.slp(d);
            RV.slp(d, 1);
            RV.LT = a.getTime();
            c = RV.LT - b;
        }
        RV.PG += c; //CL(RV.PG);
        
        if(RV.PG >= RV.DT) {
            RV.pa(0);
            return;
        }
        RV.rafid = requestAnimationFrame(RV.loop);
    },
    
    out: (A) => { // out video
        if(RV.MRDT && RV.MRDT.length > 0) {
            var a,b,c;
            c = RV.ini2.out.tp || 'mp4';
            b = URL.createObjectURL(new Blob(RV.MRDT, {type: 'video/'+c}));
            //RV.VDO.src = b;
            a = document.createElement('a');
            a.href = b;
            a.download = RV.iname || 'test.'+c;
            a.click();
        }
        else return CL('no data!');
    },
    
    save: (A) => { // save file
        var a,b,c,d;
        
    },
    
    slg: (A) => { // select language
        var a,b,c,d,z;
        a = RV.lg;
        b = [];
        d = '语言(Language)';
        for(z in a) {
            c = a[z].des;
            if(!c) continue;
            b.push('<div class="rvBtn" onclick="RV.sel(this);RV.ini2.lg=\''+z+'\';RV.nm()">'+c+'</div>');
            if(RV.ini2.lg == z) d = c;
        }
        b = b.join('')+'<b class="cl"></b><div class="rvBtn" onclick="RV.svi()">'+(a[RV.ini2.lg].se||'保存(Save)')+'</div>';
        RV.msg(d, b, 1);
    },
    
    rec: (A) => { // media record
        var a,b,c,d;
        a = {'480P':1500000, '720P':3500000, '1080P':7500000};
        b = a[RV.ini2.out.vs || '720P'] || 3500000;
        c = RV.ini2.out.vc ||'vp8';
        d = RV.CV.captureStream(RV.FPS);
        if(c=='webm' || c=='mpeg') c = 'video/' + c;
        else c = 'video/webm;codecs=' + c;
        RV.MR = new MediaRecorder(d, {
            mimeType: c,
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: b
        });
        //RV.MR.stream.addTrack(RV.GT);
        RV.MRDT = [];
        RV.MR.ondataavailable = function (e) {
            if (e.data && e.data.size) {
                RV.MRDT.push(e.data);
            }
        };
        
        //RV.MR.onstop = RV.out;
    },
    
    ado: (A) => { // audio object
        var a,b,c,d,e,f,i,o,s,z;
        A = A || 'bgm/[CCB]BenSound - A New Beginning.mp3';
        if(!RV.adoL) RV.adoL = {};
        o = {};
        a = new(AudioContext || webkitAudioContext || mozAudioContext || msAudioContext)();
        b = a.createBufferSource();
        c = a.createAnalyser();
        d = a.createMediaStreamDestination();
        b.connect(c);
        c.connect(a.destination);
        //CL([a, b, c, d]);
        
        while (1) {
            i = RV.rs(6);
            if (!RV.adoL[i]) break;
        }
        RV.adoL[i] = o;
        o.ct = a; // AudioContext
        o.bs = b; // createBufferSource
        o.ana = c; // createAnalyser
        o.ms = d; // createMediaStreamDestination
        o.ps = 0; // play state
        o.id = i;
        o.pb = 0; // play begin
        o.pe = 0; // play end
        o.cb = 0; // cut begin
        o.ce = 0; // cut end
        o.fi = 0; // fade in
        o.fo = 0; // fade out
        o.st = (A) => { // start
            b = a.createBufferSource();
            b.connect(c);
            b.buffer = o.bf;
            b.start();
            b.loop = true;
            o.ps = 1;
        };
        
        o.sp = (A) => { // stop
            b.stop();
            b.loop = false;
            o.ps = 0;
        };
        
        o.pa = (A) => { // pause
        };
        
        o.re = (A) => { // resume
        };
        
        if(typeof A == 'string') {
            o.mn = A;
            s = o.mn.substr(0, 4);
            if(s == 'bgm/') o.mn = o.mn.substr(4);
            RV.req(A, 2, res => {
                a.decodeAudioData(res, bf => {
                    o.bf = b.buffer = bf;
                    if(RV.SMN == 'bm') RV.abm();
                });
            });
            
        } else if(typeof A == 'object') {
            o.mn = A.name;
            f = new FileReader();
            f.onload = () => {
                a.decodeAudioData(f.result, bf => {
                    o.bf = b.buffer = bf;
                    if(RV.SMN == 'bm') RV.abm();
                });
            };
            f.readAsArrayBuffer(A);
            
        } else {
            return CL('add audio error');
        }
    },
    
    adt: (A) => { // animation data object
        var a,b,c,d,e,f;
        if(!RV.adtL) RV.adtL = {};
        a = new Date();
        b = a.getFullYear()+'-'+('0'+a.getDate()).slice(-2);
        A = A || 0;
        if(!A) A = 't1.正标题\nt2.副标题\ndt.'+b+'\nd1.15\ntp.1\nnm.名称\nvl.0\npi.0\nfa.0\nac.0\nwd.\nd2.0';
        else if(A == 1) A = 't2.副标题\ndt.'+b+'\nd1.15\ntp.1\nnm.名称\nvl.0\npi.0\nfa.0\nac.0\nwd.\nd2.0';
        else if(A == 2) A = 'nm.名称\nvl.0\npi.0\nfa.0\nac.0\nwd.\nd2.0';
        
        if(typeof A == 'string') {
            RV.pdt(A);
            if(RV.SMN == 'bm') RV.aad();
            
        } else if(typeof A == 'object') {
            f = new FileReader();
            f.onload = () => {
                a.decodeAudioData(f.result, str => {
                    RV.pdt(str);
                    if(RV.SMN == 'bm') RV.aad();
                });
            };
            f.readAsArrayBuffer(A);
            
        } else {
            return CL('add animation data error');
        }
    },
    
    spt: (A) => { // sprite object
        var a,b,c,d,o;
        if(!RV.sptL) RV.sptL = {};
        o = {};
        
        o.st = (A) => { // start
            
        };
        
        o.sp = (A) => { // stop
            
        };
        
        o.pa = (A) => { // pause
            
        };
        
        o.re = (A) => { // resume
            
        };
        
    },
    
    slib: { // sprite lib
        bg_0: (A) => { // background sprite
            // A.cw: canvas width
            // A.ch: canvas height
            // A.sc: sprite count for min size(%)
            // A.rr: radius range
            // A.sh: sprite hue
            // A.hr: sprite hue range
            var r,x,y,h,s,l,a,b,is,sc,sr,sh,hr,sa,cv;
            
            cv = RV.CTMP;
            is = Math.min(A.cw, A.ch);
            sc = Math.floor(is * RV.rr(A.sc || '.30, .35'));
            sr = A.sr || '.05, .15';
            sh = RV.rr(A.sh || '0, 360');
            hr = RV.rr(A.hr || '.75, .95');
            sa = { // sprite attribute
                r: sr,
                b: '10, 40',
                s: '20, 70',
                l: '20, 60',
                a: '0.1, 0.5'
            }
            
            cv.clearRect(0, 0, RV.cw, RV.ch);
            RV.CTMP.globalCompositeOperation = 'lighter';
            while (sc--) {
                r = Math.floor(is * RV.rr(sa.r)),
                x = RV.rr(0+', '+A.cw),
                y = RV.rr(0+', '+A.ch),
                h = RV.hue(sh, hr),
                s = RV.rr(sa.s),
                l = RV.rr(sa.l),
                a = RV.rr(sa.a);
                b = RV.rr(sa.b),
                
                cv.shadowColor = RV.hsla(h, s, l, a);
                cv.shadowBlur = b;
                cv.beginPath();
                cv.arc(x, y, r, 0, RV.pi2);
                cv.closePath();
                cv.fill();
            }
        },
        
        mot_0: (A) => { // motion sprite
            // A.cw: canvas width
            // A.ch: canvas height
            // A.sc: sprite count for min size(%)
            // A.rr: radius range
            // A.sr: speed range
            var c,o,r,x,y,z,is,sc,sr,ss;
            
            if(!RV.mts) {
                RV.mtsArr = [];
                is = Math.min(A.cw, A.ch);
                sc = Math.floor(is * RV.rr(A.sc || '.04, .05'));
                sr = A.sr || '.05, .15';
                ss = A.ss || '.5, .8';
                for (var z = 0; z < sc; z++) {
                    RV.mtsArr.push({
                        x: RV.rr(0+', '+A.cw), // x coordinate
                        y: RV.rr(0+', '+A.ch), // y coordinate
                        r: Math.floor(is * RV.rr(sr)), // radius
                        a: RV.rr(0+', '+RV.pi2), // angle
                        s: RV.rr(ss), // speed
                        t: RV.rr('0, 1000'), // tick
                        h: RV.rr('0, 360') // hue
                    });
                }
                RV.mts = 1;
            }
            
            z = RV.mtsArr.length;
            RV.CTX.shadowBlur = 15;
            RV.CTX.shadowColor = '#fff';
            while (z--) {
                o = RV.mtsArr[z];
                o.x += Math.cos(o.a) * o.s;
                o.y += Math.sin(o.a) * o.s;
                o.a += RV.rr('-0.05, 0.05');
                RV.CTX.beginPath();
                RV.CTX.arc(o.x, o.y, o.r, 0, RV.pi2);
                //RV.CTX.fillStyle = RV.hsla(0, 0, 100, 0.075 + Math.cos(o.t * 0.02) * 0.05);
                c = RV.CTX.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
                c.addColorStop(0, RV.hsla(o.h, 100, 65, 0.08));
                c.addColorStop(1, RV.hsla(o.h, 100, 65, 0.16 + Math.cos(o.t * 0.02) * 0.05));
                RV.CTX.fillStyle = c;
                RV.CTX.fill();
                if (o.x - o.r > RV.cw) o.x = -o.r;
                else if (o.x + o.r < 0) o.x = RV.cw + o.r;
                if (o.y - o.r > RV.ch) o.y = -o.r;
                else if (o.y + o.r < 0) o.y = RV.ch + o.r;
                o.t++;
                
                x = o.x - o.r * .5;
                y = o.y - o.r * .5;
                r = o.r * .2;
                RV.CTX.beginPath();
                RV.CTX.arc(x, y, r, 0, RV.pi2);
                RV.CTX.fillStyle = RV.hsla(0, 0, 100, 0.05 + Math.cos(o.t * 0.02) * 0.05);
                RV.CTX.fill();
            }
        },
        
        ado_0: (A) => { // audio visualization
            // A.b: 圆边框大小
            // A.x: 圆心X
            // A.y: 圆心Y
            // A.r: 圆半径
            // A.u: Uint8Array
            // A.lc: line cap
            // A.lj: line join
            // A.ana: analyser
            // A.ctx: canvas
            var a, i, j, v, x, y, x0, y0, x1, y1;
            
            if(!A.ana) return;
            A.ana.getByteFrequencyData(A.u);
            RV.CTX.shadowBlur = 0;
            A.ctx.lineWidth = A.b || 1;
            A.ctx.lineCap = A.lc || 'round'; // butt round square
            A.ctx.lineJoin = A.lj || 'round'; // bevel round miter
            if (!RV.avisa) RV.avisa = 0;
            if (RV.avisa++>=360) RV.avisa = 0;
            a = RV.avisa;
            for (i = j = 0; i < 360; i++) {
                if (a++>=360) a = 0;
                A.ctx.beginPath();
                if (i > 0) A.ctx.moveTo(x1, y1);
                if (i < 180) {
                    j++;
                    v = (A.u[Math.floor(i * 1.8)] || 0) / 2;
                } else {
                    j--;
                    v = (A.u[Math.floor(j * 1.5)] || 0) / 2;
                }
                // X: R * cos(PI/180*旋转角度) + 圆心X
                // Y: R * sin(PI/180*旋转角度) + 圆心Y，R正数=顺时针，R负数=逆时针
                x1 = x = (A.r + v) * Math.cos(Math.PI / 180 * i) + A.x;
                y1 = y = -(A.r + v) * Math.sin(Math.PI / 180 * i) + A.y;
                if (!i) {
                    x0 = x;
                    y0 = y;
                }
                A.ctx.lineTo(x, y);
                A.ctx.strokeStyle = 'hsla(' + a + ', 100%, 50%, 1)';
                A.ctx.stroke();
            }
            A.ctx.lineTo(x0, y0);
            A.ctx.stroke();
        },
        
        mat_0: (A) => { // match sprite
            // A.cw: canvas width
            // A.ch: canvas height
            // A.sc: sprite count for min size(%)
            // A.rr: radius range
            // A.sr: speed range
            var c,o,r,x,y,z,is,sc,rr,sr;
            
        },
        
        act_0: (A) => { // actor sprite
            // A.cw: canvas width
            // A.ch: canvas height
            // A.sc: sprite count for min size(%)
            // A.rr: radius range
            // A.sr: speed range
            var c,o,r,x,y,z,is,sc,rr,sr;
            
        },
        
    },
    
    test: (A) => { // test
        var a,b,c,d;
        
    },
    
};