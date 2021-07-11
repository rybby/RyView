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

const RVHELP = '锐视(RyView)是一款网页工具，可轻松制作音频可视化加数据可视化以及文字说短视频。该工具由程序员锐(<a href="http://ry.eefaa.cn/" target="_blank">ry.eefaa.cn</a>)开发并以开源项目发布，目前保管在<a href="https://github.com/rybby/RyView/" target="_blank">GitHub</a>源码仓库。锐视官方主页地址：<a href="http://rymaa.cn/" target="_blank">rymaa.cn</a>，博客地址：<a href="http://rv.eefaa.cn/" target="_blank">rv.eefaa.cn</a>。如果你有能力开发H5精灵或采集可视化数据，欢迎你将自己的资源提交到锐视的云端库，越多开发者参与进来，视频制作用户就拥有越多资源可选择。后续锐视会推出多种变现途径为开发者实现收入，还会对各种资源进行榜单排名以及开发者收入排名等。希望大家踊跃参与，让我们打造一个庞大的资源库，让短视频制作更简单！';

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
    FP: 0, // FPS progress
    ST: 0, // start time
    PT: 0, // pause time
    LT: 0, // last time
    
    exp1: 't1 网络视频平台用户月活量\n\nt2 2021-01\ntp 1\n\nnm 腾讯视频\nvl 50000w\n\nnm 西瓜视频\nvl 45000w\n\nnm 搜狐视频\nvl 28000w\n\nnm 优酷视频\nvl 35000w\n\nnm 百度视频\nvl 32000w\n\n\nt2 2021-02\ntp 1\n\nnm 腾讯视频\nvl 56000w\n\nnm 西瓜视频\nvl 48000w\n\nnm 搜狐视频\nvl 32000w\n\nnm 优酷视频\nvl 38000w\n\nnm 百度视频\nvl 35000w\n\n\nt2 2021-03\ntp 1\n\nnm 腾讯视频\nvl 52000w\n\nnm 西瓜视频\nvl 43000w\n\nnm 搜狐视频\nvl 26000w\n\nnm 优酷视频\nvl 31000w\n\nnm 百度视频\nvl 35000w\n',
    
    exp2: 't1 我就是过来炫个富的，你满意个der啊\n\nt2 凭实力相亲，有钱就是任性\ntp 2\n\nnm 张三\nwd 你好，你是王阿姨介绍的相亲对象吗？\nnm 李四\nwd 对，我就是，不好意思，我迟到了！\n\nnm 张三\nwd 那我们进入主题吧！\nnm 李四\nwd 好鸭！\n\nnm 张三\nwd 你有房吗？\nnm 李四\nwd 北京二环有3套住宅！京西有5栋酒店！\n\nnm 张三\nwd 那你有车吗？\nnm 李四\nwd 2辆奔驰，3辆宝马，10台挖掘机，30辆泥头车！\n\nnm 张三\nwd 那你有存款吗？\nnm 李四\nwd 没有，但我有10位数余额！\n\nnm 张三\nwd 嗯，我对你很满意！\nnm 李四\nwd 你满意什么？\n\nnm 张三\nwd 和你在一起鸭，我同意做你女朋友！\nnm 李四\nwd 你满意有个卵用！我就是过来炫个富的，还你满意，你满意个der啊！\n\nnm 张三\nwd 你...神经病！\nnm 李四\nwd 不好意思，我还有其它地方要赶去炫富呢！告辞！\n',
    
    css: '!8!hmargin!n0!m!wpadding!n0!m!wborder!n0!m!wbackground!ccolor!ntransparent!m!wfont!cstyle!nnormal!m!wtext!cdecoration!nnone!m!woverflow!nhidden!m!j!zhtml!qbody!hposition!nrelative!m!wheight!n100!5!m!woverflow!nhidden!m!j!zbody!hcolor!n!3333!m!wfont!cfamily!n宋体!m!wfont!csize!n16px!m!wline!cheight!n150!5!m!wtext!calign!ncenter!m!woverflow!nhidden!m!j!z!3RyView!wb!hdisplay!ninline!m!wfont!cweight!nnormal!m!j!z!3RyView!wa!hcolor!n!3158!m!wtext!cdecoration!nnone!m!wdisplay!ninline!m!wcursor!npointer!m!j!z!3RyView!wa!nhover!hcolor!n!3F22!m!j!z!3RyView!wi!hdisplay!nblock!m!wfont!cstyle!nnormal!m!j!z!3RyView!w!scl!hdisplay!nblock!m!wheight!n0!m!wclear!nboth!m!j!z!z!2font!cface!hfont!cfamily!n!okuaile!o!m!wsrc!n!wurl!9font!ukuaile!sttf!a!m!j!z!2font!cface!hfont!cfamily!n!okuhei!o!m!wsrc!nurl!9font!ukuhei!sttf!a!m!j!z!2font!cface!hfont!cfamily!n!opangmen!o!m!wsrc!nurl!9font!upangmen!sttf!a!m!j!z!2font!cface!hfont!cfamily!n!oxiaobai!o!m!wsrc!nurl!9font!uxiaobai!sttf!a!m!j!z!2font!cface!hfont!cfamily!n!ozhenyan!o!m!wsrc!nurl!9font!uzhenyan!sttf!a!m!j!z!z!3RyView!hposition!nrelative!m!wmargin!n0!m!wpadding!n0!m!wtext!calign!ncenter!m!woverflow!nhidden!m!j!z!3rvVB!hposition!nrelative!m!wwidth!n864px!m!wheight!n100!5!m!wmargin!n0!m!wpadding!n0!m!wfloat!nleft!m!wdisplay!ninline!m!woverflow!nhidden!m!j!z!3rvTB!hposition!nrelative!m!wwidth!n300px!m!wheight!n100!5!m!wmargin!n0!m!wpadding!n0!m!wfloat!nright!m!wdisplay!ninline!m!wborder!n1px!wsolid!w!3dde!m!wtext!calign!nleft!m!woverflow!nhidden!m!j!z!sRVMB!w!3rvVB!q!w!sRVMB!w!3rvTB!hwidth!nauto!m!wheight!nauto!m!wfloat!nnone!m!wdisplay!nblock!m!j!z!sRVMB!w!3rvTB!hmargin!n0!w10px!m!j!z!z!3rvCvsBox!hposition!nrelative!m!wwidth!n854px!m!wheight!n480px!m!wmargin!n10px!m!wbackground!n!3000!m!j!zcanvas!hposition!nabsolute!m!wleft!n0!m!wtop!n0!m!j!z!3rvCvsHide!q!3rvCvsTmp!hopacity!n0!m!j!z!3rvVdo!hmargin!ctop!n10px!m!wdisplay!nnone!m!wbackground!n!3000!m!j!z!z!3rvTB0!hbackground!n!3dcd!m!j!z!srvBtn!q!srvBtn0!hheight!n24px!m!wline!cheight!n24px!m!wmargin!cleft!n!c1px!m!wpadding!n0!w5px!m!wfloat!nleft!m!wdisplay!ninline!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3ccd!m!wcursor!npointer!m!j!z!srvBtn!nhover!q!srvBtn0!nhover!q!srvFont!nhover!hbackground!n!3aab!m!j!z!srvBtn!nactive!q!srvBtn0!nactive!q!srvFont!nactive!hbackground!n!399a!m!j!z!srvBtn!hmargin!n5px!w0!w0!w5px!m!j!z!srvFont!hline!cheight!n36px!m!wmargin!n5px!w5px!w0!w5px!m!wpadding!n0!w5px!m!wdisplay!nblock!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3ccd!m!wcursor!npointer!m!wfont!csize!n36px!m!wword!cwrap!nbreak!cword!m!wword!cbreak!nbreak!call!m!j!z!srvFile!hwidth!n35px!m!wheight!n24px!m!wmargin!ctop!n!c24px!m!wdisplay!nblock!m!wbackground!n!3f22!m!wopacity!n!s01!m!wcursor!npointer!m!j!z!z!3rvTB1!hpadding!cbottom!n5px!m!wbackground!n!3ede!m!j!z!srvBtn1!hheight!n24px!m!wline!cheight!n24px!m!wmargin!n5px!w0!w0!w5px!m!wpadding!n0!w5px!m!wfloat!nleft!m!wdisplay!ninline!m!wborder!n1px!wsolid!w!3ccd!m!wcursor!npointer!m!wbackground!n!3dde!m!j!z!srvBtn1!nhover!hbackground!n!3aab!m!j!z!srvBtn1!nactive!hbackground!n!399a!m!j!z!z!3rvTB2!hpadding!cbottom!n5px!m!wbackground!n!3fef!m!woverflow!nauto!m!j!z!srvBtn2!hheight!n24px!m!wline!cheight!n24px!m!wmargin!n5px!w5px!w0!w5px!m!wpadding!n0!w5px!m!wborder!n1px!wsolid!w!3dde!m!wcursor!npointer!m!wbackground!n!3eef!m!wwhite!cspace!nnowrap!m!j!z!srvBtn2!nhover!hbackground!n!3aab!m!j!z!srvBtn2!nactive!hbackground!n!399a!m!j!z!3RyView!wb!srvVal!q!3RyView!winput!srvVal!hpadding!n0!w3px!m!wcolor!n!3f22!m!woutline!nnone!m!j!z!srvLabB!hmargin!n5px!w5px!w0!w5px!m!wborder!n1px!wsolid!w!3ddc!m!wbackground!n!3ffe!m!j!z!srvLabT!hheight!n24px!m!wborder!cbottom!n1px!wsolid!w!3ddc!m!wbackground!n!3ffd!m!j!z!srvLab!hheight!n24px!m!wline!cheight!n24px!m!wpadding!n0!w10px!m!wbackground!n!3dd2!m!wcolor!n!3fff!m!wdisplay!ninline!m!wfloat!nleft!m!j!z!srvLabDN!hbackground!n!3ee5!m!j!z!srvLabX!q!srvLabAdd!hwidth!n24px!m!wheight!n24px!m!wline!cheight!n24px!m!wbackground!n!3f22!m!wcolor!n!3fff!m!wtext!calign!ncenter!m!wdisplay!ninline!m!wfloat!nright!m!wcursor!npointer!m!wfont!cfamily!nverdana!m!j!z!srvLabAdd!hbackground!n!3f90!m!j!z!srvLabC!hpadding!cbottom!n5px!m!wtext!calign!nleft!m!j!z!z!3rvEB!hposition!nabsolute!m!wleft!n35!5!m!wtop!n35!5!m!wz!cindex!n50000!m!wwidth!n320px!m!wheight!n180px!m!wmargin!n!c90px!w0!w0!w!c160px!m!wborder!n1px!wsolid!w!3ddc!m!wbackground!n!3ffe!m!j!z!srvEbT!hheight!n24px!m!wborder!cbottom!n1px!wsolid!w!3ddc!m!wbackground!n!3ffd!m!j!z!srvEbLab!hheight!n24px!m!wline!cheight!n24px!m!wpadding!n0!w10px!m!wbackground!n!3dd2!m!wcolor!n!3fff!m!wdisplay!ninline!m!wfloat!nleft!m!j!z!srvEbX!q!srvEbOk!hwidth!n24px!m!wheight!n24px!m!wline!cheight!n24px!m!wbackground!n!3f22!m!wcolor!n!3fff!m!wtext!calign!ncenter!m!wdisplay!ninline!m!wfloat!nright!m!wcursor!npointer!m!wfont!cfamily!nverdana!m!j!z!srvEbOk!hbackground!n!3f90!m!j!z!3rvED!hwidth!n310px!m!wheight!n145px!m!wline!cheight!n120!5!m!wpadding!n5px!m!woverflow!cy!nauto!m!woutline!nnone!m!wfont!csize!n16px!m!j!z!z!3rvHsb!hposition!nabsolute!m!wleft!n50px!m!wtop!n50px!m!wz!cindex!n1000000!m!wwidth!n340px!m!wheight!n160px!m!wmargin!n0!m!wpadding!n0!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3ccd!m!j!z!3rvHsbCb!hposition!nabsolute!m!wwidth!n150px!m!wheight!n150px!m!wleft!n5px!m!wtop!n5px!m!wcursor!ncrosshair!m!j!z!3rvHsbH!q!3rvHsbS!q!3rvHsbB!hposition!nabsolute!m!wleft!n0px!m!wtop!n0px!m!wwidth!n150px!m!wheight!n150px!m!j!z!3rvHsbH!hbackground!n!3f00!m!j!z!3rvHsbS!hbackground!n!3fff!m!wbackground!nlinear!cgradient!9to!wright!q!wrgba!9255!q255!q255!q1!a!q!wrgba!9255!q255!q255!q0!a!a!m!j!z!3rvHsbB!hbackground!n!3000!m!wbackground!nlinear!cgradient!9to!wtop!q!wrgba!90!q0!q0!q1!a!q!wrgba!90!q0!q0!q0!a!a!m!j!z!3rvHsbCS!q!srvHsbCS1!q!srvHsbCS2!hposition!nabsolute!m!wwidth!n20px!m!wheight!n20px!m!wleft!n139px!m!wtop!n!c9px!m!j!z!srvHsbCS1!hleft!n9px!m!wtop!n0px!m!wwidth!n2px!m!wheight!n20px!m!j!z!srvHsbCS2!hleft!n0px!m!wtop!n9px!m!wwidth!n20px!m!wheight!n2px!m!j!z!sCS1!w!srvHsbCS1!q!sCS1!w!srvHsbCS2!hbackground!n!3fff!m!j!z!sCS2!w!srvHsbCS1!q!sCS2!w!srvHsbCS2!hbackground!n!3000!m!j!z!3rvHsbHue!hposition!nabsolute!m!wleft!n160px!m!wtop!n5px!m!wwidth!n20px!m!wheight!n150px!m!wcursor!ncrosshair!m!wbackground!n!3000!m!wbackground!nlinear!cgradient!9to!wbottom!q!w!3f00!q!w!3ff0!q!w!30f0!q!w!30ff!q!w!300f!q!w!3f0f!q!w!3f00!a!m!j!z!3rvHsbV!hposition!nabsolute!m!wleft!n185px!m!wtop!n5px!m!wwidth!n150px!m!wheight!n150px!m!wtext!calign!nleft!m!j!z!srvHsbVl!hwidth!n148px!m!wheight!n24px!m!wline!cheight!n24px!m!wmargin!cbottom!n5px!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3dde!m!j!z!3rvHsbC1!q!3rvHsbC2!q!3rvHsbOk!hwidth!n50px!m!wheight!n26px!m!wdisplay!ninline!cblock!m!j!z!3rvHsbC1!hbackground!n!3f00!m!j!z!3rvHsbC2!hbackground!n!3f00!m!j!z!3rvHsbOk!hwidth!n47px!m!wborder!cleft!n1px!wsolid!w!3bbc!m!wbackground!n!3dd2!m!wcursor!npointer!m!wtext!calign!ncenter!m!j!z!srvHsbN!q!srvHsbT!hheight!n24px!m!wline!cheight!n24px!m!wdisplay!ninline!cblock!m!j!z!srvHsbN!hwidth!n15px!m!wmargin!cleft!n3px!m!wtext!calign!ncenter!m!j!z!srvHsbT!hwidth!n30px!m!j!z!srvHsbT!winput!hwidth!n28px!m!wheight!n14px!m!wline!cheight!n14px!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3eef!m!wtext!calign!ncenter!m!woutline!nnone!m!j!z!srvHsbCv!w!srvHsbN!hwidth!n35px!m!wcursor!npointer!m!j!z!srvHsbCv!w!srvHsbT!hwidth!n106px!m!j!z!srvHsbCv!w!srvHsbT!winput!hwidth!n98px!m!wpadding!n0!w3px!m!wtext!calign!nleft!m!j!z!z!3rvFwin!hposition!nabsolute!m!wleft!n50!5!m!wtop!n50!5!m!wz!cindex!n100000!m!wwidth!n320px!m!wheight!n180px!m!wmargin!n!c90px!w0!w0!w!c160px!m!j!z!3rvFwin!w!srvLabC!hheight!n150px!m!woverflow!cy!nauto!m!j!z!3rvFwin!w!srvMsg!hpadding!n5px!w5px!w0!w5px!m!j!z!srvLabC!w!srvBtn!hword!cwrap!nbreak!cword!m!wword!cbreak!nbreak!call!m!j!z!z!ss!d!hbackground!n!3f22!m!wcolor!n!3fff!m!j!z!sh!d!hdisplay!nnone!m!j',
    
    ini2: null,
    ini: {
        rini: 0, // reset ini
        lg: 'cn',
        ttsl: '',
        ttsp: 0,
        ttsr: 1.2,
        ttsv: 1,
        dmn: ',pe,re,se,inp,sys,loc,net,', // del menu
        vdo: {
            des: '视频',
            vc: 'vp8',
            vf: 'mp4',
            vp: '16:9',
            vs: '720P',
            va: '',
            rs: '0',
        },
        
        ft: {
            des: '字体',
            otn: 'zhenyan',
            ots: '72px',
            otc: '#ff0',
            otw: '0',
            otbs: '5px',
            otbc: '#f00',
            ptn: 'pangmen',
            pts: '48px',
            ptc: '#000',
            ptw: '0',
            ptbs: '2px',
            ptbc: '#fff',
            wn: 'xiaobai',
            ws: '24px',
            wc: '#000',
            ww: '0',
            wbs: '0px',
            wbc: '#f00',
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
                id: 'bg_lspot',
                sn: '梦幻光斑',
                sc: '.15, .25',
                sr: '.02, .15',
                sh: '0, 360',
                ss: '25, 100',
                sb: '55, 100',
                sa: '.1, .5',
                hr: '75, 95',
            },
            mot: {
                des: '运动精灵',
                id: 'mot_dpopo',
                sn: '梦幻泡泡',
                sc: '.02, .03',
                sr: '.08, .15',
                sp: '.8, 1',
                sh: '0, 360',
                ss: '25, 100',
                sb: '55, 100',
                sa: '.25, .35',
            },
            ado: {
                des: '音频精灵',
                id: 'ado_eaper',
                sn: '爆炸光圈',
                bs: '1',
            },
            mat: {
                des: '比赛精灵',
                id: 'mat_rypeter',
                sn: '锐比特',
                sh: '0, 360',
                ss: '25, 100',
                sb: '55, 100',
                sa: '.55, .75',
                ar: '2',
                fr: '90',
            },
            act: {
                des: '角色精灵',
                id: 'act_rypenn',
                sn: '锐比安',
                sh: '0, 360',
                ss: '25, 100',
                sb: '55, 100',
                sa: '.55, .75',
            },
            ass: {
                des: '辅助精灵',
                id: 'ass_rypeso',
                sn: '锐比兽',
                sh: '0, 360',
                ss: '25, 100',
                sb: '55, 100',
                sa: '.55, .75',
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
            
            vdo: {
                des: '视频',
                vc: '视频编码',
                vf: '视频格式',
                vp: '视频比例',
                vs: '视频尺寸',
                va: '视频作者',
                rs: '重设配置',
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
                    sr: '精灵半径',
                    sh: '精灵色相',
                    ss: '精灵饱和度',
                    sb: '精灵亮度',
                    sa: '精灵透明度',
                    hr: '色相范围',
                },
                mot: {
                    des: '运动精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    sc: '精灵数量',
                    sr: '精灵半径',
                    sp: '精灵速度',
                    sh: '精灵色相',
                    ss: '精灵饱和度',
                    sb: '精灵亮度',
                    sa: '精灵透明度',
                },
                ado: {
                    des: '音频精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    bs: '边框大小',
                },
                mat: {
                    des: '比赛精灵',
                    id: '精灵ID',
                    sh: '精灵色相',
                    ss: '精灵饱和度',
                    sb: '精灵亮度',
                    sa: '精灵透明度',
                    ar: '动作速率',
                    fr: '表情速率',
                },
                act: {
                    des: '角色精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    sh: '精灵色相',
                    ss: '精灵饱和度',
                    sb: '精灵亮度',
                    sa: '精灵透明度',
                },
                ass: {
                    des: '辅助精灵',
                    id: '精灵ID',
                    sn: '精灵名称',
                    sh: '精灵色相',
                    ss: '精灵饱和度',
                    sb: '精灵亮度',
                    sa: '精灵透明度',
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
                d1: '时长',
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
            
            vdo: {
                des: 'Video',
                vc: 'Video Coding',
                vf: 'Video Format',
                vp: 'Video Proportion',
                vs: 'Video Size',
                va: 'Video Author',
                rs: 'Reset Config',
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
                    sr: 'Sprite Radius',
                    sh: 'Sprite Hue',
                    ss: 'Sprite Saturation',
                    sb: 'Sprite Brightness',
                    sa: 'Sprite Alpha',
                    hr: 'Hue Range',
                },
                mot: {
                    des: 'Motion Sprite',
                    id: 'Sprite ID',
                    sn: 'Sprite Name',
                    sc: 'Sprite Count',
                    sr: 'Sprite Radius',
                    sp: 'Sprite Speed',
                    sh: 'Sprite Hue',
                    ss: 'Sprite Saturation',
                    sb: 'Sprite Brightness',
                    sa: 'Sprite Alpha',
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
                    ss: 'Sprite Saturation',
                    sb: 'Sprite Brightness',
                    sa: 'Sprite Alpha',
                    ar: 'Action Rate',
                    fr: 'Face Rate',
                },
                act: {
                    des: 'Actor Sprite',
                    id: 'Sprite ID',
                    sn: 'Sprite Name',
                    sh: 'Sprite Hue',
                    ss: 'Sprite Saturation',
                    sb: 'Sprite Brightness',
                    sa: 'Sprite Alpha',
                },
                ass: {
                    des: 'Assist Sprite',
                    id: 'Sprite ID',
                    sn: 'Sprite Name',
                    sh: 'Sprite Hue',
                    ss: 'Sprite Saturation',
                    sb: 'Sprite Brightness',
                    sa: 'Sprite Alpha',
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
                d1: 'Duration',
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
            
            vdo: {
                des: 'ビデオ',
                vc: 'ビデオコーディング',
                vf: 'ビデオフォーマット',
                vp: 'ビデオの割合',
                vs: 'ビデオサイズ',
                va: 'ビデオ作者',
                rs: '構成のリセット',
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
                    sr: 'スプライト 半径',
                    sh: 'スプライト 色相',
                    ss: 'スプライト 飽和',
                    sb: 'スプライト 明るさの',
                    sa: 'スプライト アルファ',
                    hr: '色相範囲',
                },
                mot: {
                    des: 'モーション スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    sc: 'スプライト カウント',
                    sr: 'スプライト 半径',
                    sp: 'スプライト スピード',
                    sh: 'スプライト 色相',
                    ss: 'スプライト 飽和',
                    sb: 'スプライト 明るさの',
                    sa: 'スプライト アルファ',
                },
                ado: {
                    des: 'オーディオ スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    bs: 'ボーダー サイズ',
                },
                mat: {
                    des: 'ゲーム スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    sh: 'スプライト 色相',
                    ss: 'スプライト 飽和',
                    sb: 'スプライト 明るさの',
                    sa: 'スプライト アルファ',
                    ar: 'アクション率',
                    fr: 'フェイスレート',
                },
                act: {
                    des: '俳優 スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    sh: 'スプライト 色相',
                    ss: 'スプライト 飽和',
                    sb: 'スプライト 明るさの',
                    sa: 'スプライト アルファ',
                },
                ass: {
                    des: 'アシスト スプライト',
                    id: 'スプライト ID',
                    sn: 'スプライト 名',
                    sh: 'スプライト 色相',
                    ss: 'スプライト 飽和',
                    sb: 'スプライト 明るさの',
                    sa: 'スプライト アルファ',
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
                d1: '時長',
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
            
            vdo: {
                des: '비디오',
                vc: '비디오 코딩',
                vf: '비디오 형식',
                vp: '비디오 비율',
                vs: '비디오 크기',
                va: '비디오 작성자',
                rs: '구성 재설정',
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
                    sr: '스프라이트 반경',
                    sh: '스프라이트 색조',
                    ss: '스프라이트 포화',
                    sb: '스프라이트 밝기',
                    sa: '스프라이트 알파',
                    hr: '색조 범위',
                },
                mot: {
                    des: '거동 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    sc: '스프라이트 카운트',
                    sr: '스프라이트 반지름',
                    sp: '스프라이트 속도',
                    sh: '스프라이트 색조',
                    ss: '스프라이트 포화',
                    sb: '스프라이트 밝기',
                    sa: '스프라이트 알파',
                },
                ado: {
                    des: '오디오 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    bs: '테두리 크기',
                },
                mat: {
                    des: '시합 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    sh: '스프라이트 색조',
                    ss: '스프라이트 포화',
                    sb: '스프라이트 밝기',
                    sa: '스프라이트 알파',
                    ar: '동작 비율',
                    fr: '얼굴 비율',
                },
                act: {
                    des: '배우 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    sh: '스프라이트 색조',
                    ss: '스프라이트 포화',
                    sb: '스프라이트 밝기',
                    sa: '스프라이트 알파',
                },
                ass: {
                    des: '거들다 스프라이트',
                    id: '스프라이트 ID',
                    sn: '스프라이트 이름',
                    sh: '스프라이트 색조',
                    ss: '스프라이트 포화',
                    sb: '스프라이트 밝기',
                    sa: '스프라이트 알파',
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
                d1: '지속시간',
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
            
            vdo: {
                des: 'वीडियो',
                vc: 'वीडियो कोडिंग',
                vf: 'वीडियो फार्मेट',
                vp: 'वीडियो अनुपात',
                vs: 'वीडियो का आकार',
                va: 'वीडियो लेखक',
                rs: 'कॉन्फ़िगरेशन रीसेट करें',
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
                    sr: 'स्प्राइट त्रिज्या',
                    sh: 'स्प्राइट ह्यू',
                    ss: 'स्प्राइट संतृप्ति',
                    sb: 'स्प्राइट चमक',
                    sa: 'स्प्राइट अल्फा',
                    hr: 'ह्यू रेंज',
                },
                mot: {
                    des: 'प्रस्ताव स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    sc: 'स्प्राइट गिनती',
                    sr: 'स्प्राइट त्रिज्या',
                    sp: 'स्प्राइट स्पीड',
                    sh: 'स्प्राइट ह्यू',
                    ss: 'स्प्राइट संतृप्ति',
                    sb: 'स्प्राइट चमक',
                    sa: 'स्प्राइट अल्फा',
                },
                ado: {
                    des: 'ऑडियो स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    bs: 'बॉर्डर आकार',
                },
                mat: {
                    des: 'मैच स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    sh: 'स्प्राइट ह्यू',
                    ss: 'स्प्राइट संतृप्ति',
                    sb: 'स्प्राइट चमक',
                    sa: 'स्प्राइट अल्फा',
                    ar: 'कार्रवाई दर',
                    fr: 'अंकित दर',
                },
                act: {
                    des: 'अभिनेता स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    sh: 'स्प्राइट ह्यू',
                    ss: 'स्प्राइट संतृप्ति',
                    sb: 'स्प्राइट चमक',
                    sa: 'स्प्राइट अल्फा',
                },
                ass: {
                    des: 'असिस्ट स्प्राइट',
                    id: 'स्प्राइट ID',
                    sn: 'स्प्राइट नाम',
                    sh: 'स्प्राइट ह्यू',
                    ss: 'स्प्राइट संतृप्ति',
                    sb: 'स्प्राइट चमक',
                    sa: 'स्प्राइट अल्फा',
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
                d1: 'समयांतराल',
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
        'vdo.vc': 'vp8,h264,webm,mpeg,daala',
        'vdo.vf': 'mp4,webm',
        'vdo.vp': '4:3,16:9,9:16',
        'vdo.vs': '480P,720P,1080P',
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
        var a,b,c,d,e,f,y,z;
        A = A || '';
        document.body.innerHTML += '<div id="rvTMP" style="display:none;"></div><i id="rvIB" style="display:none"></i><div id="rvEB" class="h_"><div class="rvEbT"><div class="rvEbLab">编辑器(Editor)</div><div class="rvEbX" onclick="RV.hn(this.parentNode.parentNode)">X</div><div class="rvEbOk" onclick="var a=RV.ED.value;if(a==\'exp1\') RV.ED.value=RV.exp1;else if(a==\'exp2\') RV.ED.value=RV.exp2;else RV.adt(a)">OK</div></div><textarea id="rvED" onmouseover="this.focus()" onfocus="RV.KO.kl=1" onblur="RV.KO.kl=0" placeholder="输入 exp1 或 exp2 提交可使用范例数据预览"></textarea></div><div id="rvHsb" class="h_"><div id="rvHsbCb" onclick="RV.hsb()"><div id="rvHsbH"></div><div id="rvHsbS"></div><div id="rvHsbB"></div><div id="rvHsbCS" class="CS1"><div class="rvHsbCS1"></div><div class="rvHsbCS2"></div></div></div><div id="rvHsbHue" onclick="RV.shue()"></div><div id="rvHsbV"><div class="rvHsbVl"><div id="rvHsbC1"></div><div id="rvHsbC2"></div><div id="rvHsbOk" onclick="RV.hsbok()">OK</div></div><div class="rvHsbVl"><div class="rvHsbN">H</div><div class="rvHsbT"><input id="rvHsbHv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">S</div><div class="rvHsbT"><input id="rvHsbSv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">B</div><div class="rvHsbT"><input id="rvHsbBv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div></div><div class="rvHsbVl"><div class="rvHsbN">H</div><div class="rvHsbT"><input id="rvHslHv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">S</div><div class="rvHsbT"><input id="rvHslSv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">L</div><div class="rvHsbT"><input id="rvHslLv" type="text" value="50" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div></div><div class="rvHsbVl"><div class="rvHsbN">R</div><div class="rvHsbT"><input id="rvRgbRv" type="text" value="255" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">G</div><div class="rvHsbT"><input id="rvRgbGv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div><div class="rvHsbN">B</div><div class="rvHsbT"><input id="rvRgbBv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div></div><div class="rvHsbVl rvHsbCv"><div id="rvHexCt" class="rvHsbN" onclick="RV.mi(this)" key="HEX1,HEX2,RGB1,RGB2,RGBA,HSB,HSL,HSLA">HEX1</div><div class="rvHsbT"><input id="rvHexCv" type="text" value="#FF0000" onmouseover="this.focus()" onchange="RV.hsbcc(this)"/></div></div></div></div><div id="rvFwin" class="rvLabB h_"><div class="rvLabT"><div class="rvLab">浮窗</div><div class="rvLabX" onclick="RV.hn(this.parentNode.parentNode)">X</div></div><div class="rvLabC"></div></div>';
        
        RV.RV = RV.an(A, 'RyView'); // ryview root node
        RV.RV.innerHTML = '<div id="rvVB"><div id="rvCvsBox"><canvas id="rvCvs"></canvas><canvas id="rvCvsHide"></canvas><canvas id="rvCvsTmp"></canvas></div><video id="rvVdo" onclick="this.play()"></video><div id="rvIB" class="h_"></div></div><div id="rvTB"><div id="rvTB0"></div><div id="rvTB1"></div><div id="rvTB2"></div></div>';
        
        RV.CB = RV.gn('rvCvsBox');
        RV.CVX = RV.gn('rvCvs');
        RV.CTX = RV.CVX.getContext('2d');
        RV.CVH = RV.gn('rvCvsHide');
        RV.CTH = RV.CVH.getContext('2d');
        RV.CVT = RV.gn('rvCvsTmp');
        RV.CTT = RV.CVT.getContext('2d');
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
        
        RV.ac('RVCSS', RV.e36(RV.css, 2));
        RV.ii();
        RV.nm();
        RV.ado();
        RV.adt();
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
        if(a.vdo && a.vdo.rs == 1) {
            RV.ls('RVINI', 0, -1);
            a = 0;
        }
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
        
        b = RV.ini.vdo;
        if(!a.vdo) a.vdo = {};
        for(z in b) {
            if(!a.vdo[z]) a.vdo[z] = b[z];
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
            if(z == 'vdo') f = ' s_';
            else f = '';
            d = '<div class="rvBtn1'+f+'" onclick="RV.sel(this);RV.si(\''+z+'\');RV.SMN=\''+z+'\'">'+e+'</div>';
            c.push(d);
        }
        c = c.join('')+'<b class="cl"></b>';
        RV.gn('rvTB1').innerHTML = c;
        RV.si('vdo');
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
                e = 'RV.adoL.'+z+'.'+y+'=this.value';
                d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)" title="'+a[z][y]+'">'+b[y]+':<input class="rvVal" type="text" value="'+a[z][y]+'" onchange="'+e+'"/></div>';
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
        b = RV.lg[l].ad;
        if(!a) {
            c = '<div class="rvBtn" onclick="RV.sn(RV.EB)">'+(RV.lg[l].inp||'输入(Input)')+'</div><div class="rvBtn">'+(RV.lg[l].loc||'本地(Local)')+'<input type="file" class="rvFile" onclick="RV.up(this)" multiple="1"/></div><div class="rvBtn" onclick="RV.ol(\'http://rv.eefaa.cn/?dnet\')">'+(RV.lg[l].net||'网络(Net)')+'</div><b class="cl"></b>';
            RV.gn('rvTB2').innerHTML = c;
            return CL('no data');
        }
        
        c = [];
        d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+(b.t1||'正标题')+':<input class="rvVal" type="text" value="'+(a.t1||'')+'" onchange="RV.adtL.t1=this.value"/></div>';
        c.push(d);
        
        for(z=0; z<a.tl.length; z++) {
            if(a.tl == false) continue;
            a.tl[z] = a.tl[z] || {};
            c.push('<div class="rvLabB"><div class="rvLabT"><div class="rvLab">#t'+z+'</div><div class="rvLabX" onclick="RV.dn(this.parentNode.parentNode);delete RV.adtL.tl['+z+']" title="删除时间节点(Delete time node)">X</div><div class="rvLabAdd" onclick="RV.adt(1)" title="添加时间节点(Add time node)">+</div></div><div class="rvLabC">');
            
            f = ['t2', 'd1', 'tp'];
            for(i=0; i<f.length; i++) {
                e = 'RV.adtL.tl['+z+'].'+f[i]+'=this.value';
                d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+(b[f[i]]||'')+':<input class="rvVal" type="text" value="'+(a.tl[z][f[i]]||'')+'" onchange="'+e+'"/></div>';
                c.push(d);
            }
            
            for(y=0; y<a.tl[z].dl.length; y++) {
                if(a.tl[z].dl == false) continue;
                c.push('<div class="rvLabB"><div class="rvLabT"><div class="rvLab rvLabDN">#d'+y+'</div><div class="rvLabX" onclick="RV.dn(this.parentNode.parentNode);delete RV.adtL.tl['+z+'].dl['+y+']" title="删除数据节点(Delete data node)">X</div><div class="rvLabAdd" onclick="RV.selAD=RV.adtL.tl['+z+'].dl;RV.adt(2)" title="添加数据节点(Add data node)">+</div></div><div class="rvLabC">');
                
                f = ['nm', 'vl', 'pi', 'fa', 'ac', 'wd', 'd2'];
                for(i=0; i<f.length; i++) {
                    e = 'RV.adtL.tl['+z+'].dl['+y+'].'+f[i]+'=this.value';
                    d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+(b[f[i]]||'')+':<input class="rvVal" type="text" value="'+(a.tl[z].dl[y][f[i]]||'')+'" onchange="'+e+'"/></div>';
                    c.push(d);
                }
                
                c.push('</div></div>');
            }
            
            c.push('</div></div>');
        }
        
        f = '<div class="rvBtn" onclick="RV.sn(RV.EB)">'+(RV.lg[l].inp||'输入(Input)')+'</div><div class="rvBtn">'+(RV.lg[l].loc||'本地(Local)')+'<input type="file" class="rvFile" onclick="RV.up(this)" multiple="1"/></div><div class="rvBtn" onclick="RV.ol(\'http://rv.eefaa.cn/?dnet\')">'+(RV.lg[l].net||'网络(Net)')+'</div>';
        
        c = c.join('')+f+'<b class="cl"></b>';
        RV.gn('rvTB2').innerHTML = c;
        RV.selAD = null;
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
        var a,b,c,d,l,o,t,z,s1,s2;
        A = (A||'').trim();
        if(!A) return;
        s1 = ',t1,t2,d1,tp,';
        s2 = ',nm,vl,pi,fa,ac,wd,d2,';
        RV.adtL = RV.adtL || {};
        RV.adtL.tl = RV.adtL.tl || [];
        a = A.split(/\r\n|\r|\n/);
        
        for(z=0; z<a.length; z++) {
            b = b || {};
            c = (a[z]||'').trim();
            if(!c) continue;
            d = c.substr(0, 2);
            e = c.substr(2).trim();
            
            if(s1.indexOf(','+d+',') != -1) {
                o = RV.adtL.tl;
                l = (RV.adtL.tl.length||1) - 1;
            } else if(s2.indexOf(','+d+',') != -1) {
                RV.adtL.tl[(RV.adtL.tl.length||1)-1].dl = RV.adtL.tl[(RV.adtL.tl.length||1)-1].dl || [];
                o = RV.selAD || RV.adtL.tl[(RV.adtL.tl.length||1)-1].dl;
                l = (o.length||1) - 1;
            }
            else continue;
            o[l] = o[l] || {};
            
            if(d == 't1') {
                RV.adtL.t1 = e || 正标题;
                continue;
            }
            
            b[d] = (o[l][d]==undefined?0:1) + 1;
            if(b[d] > 1) {
                b = {};
                o.push({});
                l = (o.length||1) - 1;
            }
            
            o[l][d] = e;
        }
    },
    
    font: (A) => { // font
        var a,b,c,d,z;
        if(!A) return;
        RV.MDF = A;
        a = {SimSun:'宋体(SimSun):ABCDabcd1234', 'Microsoft YaHei':'雅黑(YaHei):ABCDabcd1234', kuaile:'快乐(KuaiLe):ABCDabcd1234', kuhei:'酷黑(KuHei):ABCDabcd1234', pangmen:'庞门(PangMen):ABCDabcd1234', xiaobai:'小白(XiaoBai):ABCDabcd1234', zhenyan:'真言(ZhenYan):ABCDabcd1234'};
        b = [];
        for(z in a) {
            b.push('<div class="rvFont" style="font-family:'+z+';" onclick="RV.MDF.value=\''+z+'\';">'+a[z]+'</div>');
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
        if(r < 0) r = 0;
        if(r > 255) r = 255;
        if(g < 0) g = 0;
        if(g > 255) g = 255;
        if(b < 0) b = 0;
        if(b > 255) b = 255;
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
        } else {
            R = parseInt(R) || 0;
            G = parseInt(G) || 0;
            B = parseInt(B) || 0;
        }
        if(R < 0) R = 0;
        if(R > 255) R = 255;
        if(G < 0) G = 0;
        if(G > 255) G = 255;
        if(B < 0) B = 0;
        if(B > 255) B = 255;
        r = '0' + R.toString(16);
        g = '0' + G.toString(16);
        b = '0' + B.toString(16);
        h = r.slice(-2)+g.slice(-2)+b.slice(-2);
        return {hex1:'#'+h, hex2:h};
    },
    
    rgb2hsb: (R, G, B) => { // rgb to hsb
        var r,g,b,h,s,v,f,l,m,n;
        R = parseInt(R) || 0;
        G = parseInt(G) || 0;
        B = parseInt(B) || 0;
        if(R < 0) R = 0;
        if(R > 255) R = 255;
        if(G < 0) G = 0;
        if(G > 255) G = 255;
        if(B < 0) B = 0;
        if(B > 255) B = 255;
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
        H = parseInt(H) || 0;
        S = parseInt(S) || 0;
        B = parseInt(B) || 0;
        if(H < 0) H = 0;
        if(H > 360) H = 360;
        if(S < 0) S = 0;
        if(S > 100) S = 100;
        if(B < 0) B = 0;
        if(B > 100) B = 100;
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
        R = parseInt(R) || 0;
        G = parseInt(G) || 0;
        B = parseInt(B) || 0;
        if(R < 0) R = 0;
        if(R > 255) R = 255;
        if(G < 0) G = 0;
        if(G > 255) G = 255;
        if(B < 0) B = 0;
        if(B > 255) B = 255;
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
        H = parseInt(H) || 0;
        S = parseInt(S) || 0;
        L = parseInt(L) || 0;
        if(H < 0) H = 0;
        if(H > 360) H = 360;
        if(S < 0) S = 0;
        if(S > 100) S = 100;
        if(L < 0) L = 0;
        if(L > 100) L = 100;
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
    
    hsla: (H, S, L, A) => { // return hsla color
        return 'hsla(' +H+ ',' +S+ '%,' +L+ '%,' +A+ ')';
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
        
        f = RV.ini2.vdo.vp;
        g = parseInt(RV.ini2.vdo.vs);
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
        RV.CVX.width = RV.CVH.width = RV.CVT.width = RV.cw;
        RV.CVX.height = RV.CVH.height = RV.CVT.height = RV.ch;
        RV.CVX.style.width = RV.CVH.style.width = RV.CVT.style.width = w2 + 'px';
        RV.CVX.style.height = RV.CVH.style.height = RV.CVT.style.height = h2 + 'px';
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
    
    nf: (A, B, C) => { // number format
        var a,b,c;
        if(B == 2) {
            A = (A+'').toLowerCase();
            if(A.indexOf('e') != -1 || A.indexOf('亿') != -1) A = (parseFloat(A)||0) * 100000000;
            else if(A.indexOf('kw') != -1 || A.indexOf('千万') != -1) A = (parseFloat(A)||0) * 10000000;
            else if(A.indexOf('m') != -1 || A.indexOf('百万') != -1) A = (parseFloat(A)||0) * 1000000;
            else if(A.indexOf('w') != -1 || A.indexOf('万') != -1) A = (parseFloat(A)||0) * 10000;
            else A = parseFloat(A) || 0;
            return A;
        }
        
        A = parseFloat(A) || 0;
        C = C || 2;
        if (!A) return 0;
        b = {1:10, 2:100, 3:1000, 4:10000, 5:100000};
        c = b[C] || 100;
        
        if (A > 100000000) {
            a = Math.ceil(A / 100000000 * c) / c;
            a = a + 'e';
        } else if (A > 10000000) {
            a = Math.ceil(A / 10000000 * c) / c;
            a = a + 'kw';
        } else if (A > 10000000) {
            a = Math.ceil(A / 1000000 * c) / c;
            a = a + 'm';
        } else if (A > 10000) {
            a = Math.ceil(A / 10000 * c) / c;
            a = a + 'w';
        } else a = A;
        return a;
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
    
    face: (A, B, C) => { // face
        var a,b,c,d,e,f,z;
        a = {0:'xi', 1:'nu', 2:'ai', 3:'le', 4:'ku', 5:'co', 6:'gl', 7:'xy', 8:'bs', 9:'cx', 10:'kj', 11:'je', 12:'wy'};
        if(typeof A == 'number') A = a[A] || 'xi';
        else A = A || 'xi';
        B = B || 0;
        C = C || 0;
        c = RV.CTT;
        c.clearRect(0, 0, RV.cw, RV.ch);
        c.globalCompositeOperation = 'source-over';
        c.lineCap = 'round';
        c.lineJoin = 'round';
        c.lineWidth = 2;
        c.fillStyle = '#fff';
        c.strokeStyle = '#000';
        
        if(A == 'xi') { // 喜
            c.beginPath();
            c.moveTo(7, 15);
            c.bezierCurveTo(10, 13, 17, 13, 20, 15);
            c.bezierCurveTo(24, 16, 23, 21, 20, 20);
            c.bezierCurveTo(22, 18, 5, 18, 7, 20);
            c.bezierCurveTo(3, 21, 4, 16, 7, 15);
            
            c.moveTo(30, 15);
            c.bezierCurveTo(33, 13, 40, 13, 43, 15);
            c.bezierCurveTo(47, 16, 46, 21, 43, 20);
            c.bezierCurveTo(45, 18, 28, 18, 30, 20);
            c.bezierCurveTo(26, 21, 27, 16, 30, 15);
            
            c.moveTo(15, 32);
            c.bezierCurveTo(18, 37, 32, 37, 35, 32);
            c.bezierCurveTo(32, 42, 18, 42, 15, 32);
            c.fill();
            c.stroke();
            
            c.fillStyle = '#000';
            c.beginPath();
            c.arc(11, 16, 3, 0, RV.pi2);
            c.arc(34, 16, 3, 0, RV.pi2);
            c.fill();
            
        } else if(A == 'nu') { // 怒
            c.beginPath();
            c.moveTo(5, 13);
            c.bezierCurveTo(5, 13, 22, 18, 22, 18);
            c.bezierCurveTo(18, 28, 5, 18, 5, 13);
            
            c.moveTo(28, 18);
            c.bezierCurveTo(28, 18, 45, 13, 45, 13);
            c.bezierCurveTo(45, 18, 32, 28, 28, 18);
            
            c.moveTo(15, 32);
            c.lineTo(35, 32);
            c.lineTo(35, 36);
            c.lineTo(15, 36);
            c.lineTo(15, 32);
            c.fill();
            c.stroke();
            
        } else if(A == 'ai') { // 哀
            c.beginPath();
            c.moveTo(5, 20);
            c.bezierCurveTo(5, 20, 20, 15, 20, 15);
            c.bezierCurveTo(20, 20, 5, 25, 5, 20);
            
            c.moveTo(30, 15);
            c.bezierCurveTo(30, 15, 45, 20, 45, 20);
            c.bezierCurveTo(45, 25, 30, 20, 30, 15);
            
            c.moveTo(15, 38);
            c.bezierCurveTo(15, 31, 35, 31, 35, 38);
            c.bezierCurveTo(35, 38, 35, 38, 15, 38);
            c.fill();
            c.stroke();
            
        } else if(A == 'le') { // 乐
            c.beginPath();
            c.moveTo(7, 15);
            c.bezierCurveTo(10, 13, 17, 13, 20, 15);
            c.bezierCurveTo(24, 16, 23, 21, 20, 20);
            c.bezierCurveTo(22, 18, 5, 18, 7, 20);
            c.bezierCurveTo(3, 21, 4, 16, 7, 15);
            
            c.moveTo(30, 15);
            c.bezierCurveTo(33, 13, 40, 13, 43, 15);
            c.bezierCurveTo(47, 16, 46, 21, 43, 20);
            c.bezierCurveTo(45, 18, 28, 18, 30, 20);
            c.bezierCurveTo(26, 21, 27, 16, 30, 15);
            
            c.moveTo(15, 32);
            c.bezierCurveTo(15, 32, 35, 32, 35, 32);
            c.bezierCurveTo(35, 45, 15, 45, 15, 32);
            c.fill();
            c.stroke();
            
            c.fillStyle = '#000';
            c.beginPath();
            c.arc(13, 16, 3, 0, RV.pi2);
            c.arc(36, 16, 3, 0, RV.pi2);
            c.fill();
            
        } else if(A == 'ku') { // 哭
            c.beginPath();
            c.moveTo(5, 12);
            c.lineTo(18, 12)
            
            c.moveTo(32, 12);
            c.lineTo(45, 12);
            c.stroke();
            
            c.beginPath();
            c.moveTo(7, 14);
            c.bezierCurveTo(7, 14, 16, 14, 16, 14);
            c.bezierCurveTo(12, 21, 20, 20, 16, 27);
            c.bezierCurveTo(12, 34, 20, 35, 16, 42);
            c.bezierCurveTo(18, 42, 7, 42, 7, 42);
            c.bezierCurveTo(11, 35, 3, 34, 7, 27);
            c.bezierCurveTo(11, 20, 3, 21, 7, 14);
            
            c.moveTo(7, 14);
            c.bezierCurveTo(34, 14, 43, 14, 43, 14);
            c.bezierCurveTo(39, 21, 47, 20, 43, 27);
            c.bezierCurveTo(39, 34, 47, 35, 43, 42);
            c.bezierCurveTo(45, 42, 34, 42, 34, 42);
            c.bezierCurveTo(38, 35, 30, 34, 34, 27);
            c.bezierCurveTo(38, 20, 30, 21, 34, 14);
            c.fill();
            
            c.beginPath();
            c.moveTo(20, 35);
            c.bezierCurveTo(20, 30, 30, 30, 30, 35);
            c.stroke();
            
        } else if(A == 'co') { // 愁
            c.beginPath();
            c.moveTo(5, 20);
            c.bezierCurveTo(5, 20, 20, 10, 20, 10);
            c.bezierCurveTo(20, 18, 13, 20, 5, 20);
            
            c.moveTo(30, 10);
            c.bezierCurveTo(30, 10, 45, 20, 45, 20);
            c.bezierCurveTo(37, 20, 30, 18, 30, 10);
            
            c.moveTo(15, 35);
            c.bezierCurveTo(15, 25, 35, 25, 35, 35);
            c.bezierCurveTo(35, 30, 15, 30, 15, 35);
            c.fill();
            c.stroke();
            
        } else if(A == 'gl') { // 鬼脸
            c.beginPath();
            c.arc(13.5, 15, 6, 0, RV.pi2);
            c.fill();
            c.stroke();
            
            c.fillStyle = '#000';
            c.beginPath();
            c.arc(10, 15, 4, 0, RV.pi2);
            c.fill();
            
            c.beginPath();
            c.moveTo(45, 20);
            c.lineTo(30, 20);
            c.lineTo(45, 12);
            c.stroke();
            
            c.fillStyle = '#faa';
            c.beginPath();
            c.moveTo(15, 30);
            c.lineTo(35, 30);
            c.moveTo(18, 30);
            c.bezierCurveTo(15, 30, 35, 30, 32, 30);
            c.bezierCurveTo(32, 45, 18, 45, 18, 30);
            c.fill();
            c.stroke();
            
        } else if(A == 'xy') { // 小样
            c.beginPath();
            c.moveTo(5, 15);
            c.bezierCurveTo(5, 15, 22, 15, 22, 15);
            c.bezierCurveTo(22, 25, 5, 20, 5, 15);
            
            c.moveTo(28, 15);
            c.bezierCurveTo(28, 15, 45, 15, 45, 15);
            c.bezierCurveTo(45, 20, 28, 25, 28, 15);
            
            c.moveTo(18, 35);
            c.bezierCurveTo(18, 35, 32, 32, 32, 32);
            c.bezierCurveTo(32, 37, 18, 40, 18, 35);
            c.fill();
            c.stroke();
            
            c.globalCompositeOperation = 'source-atop';
            c.fillStyle = '#000';
            c.beginPath();
            c.arc(17, 17, 4, 0, RV.pi2);
            c.arc(40, 17, 4, 0, RV.pi2);
            c.fill();
            
        } else if(A == 'bs') { // 鄙视
            c.beginPath();
            c.moveTo(5, 17);
            c.lineTo(20, 13);
            
            c.moveTo(30, 17);
            c.lineTo(45, 13);
            c.stroke();
            
            c.beginPath();
            c.moveTo(15, 35);
            c.lineTo(32, 30);
            c.lineTo(35, 35);
            c.lineTo(15, 35);
            c.fill();
            c.stroke();
            
            c.fillStyle = '#000';
            c.beginPath();
            c.arc(17, 16, 3, 0, RV.pi2);
            c.arc(42, 16, 3, 0, RV.pi2);
            c.fill();
            
        } else if(A == 'cx') { // 嘲笑
            c.beginPath();
            c.moveTo(5, 15);
            c.bezierCurveTo(5, 10, 20, 10, 20, 15);
            c.bezierCurveTo(20, 17, 18, 18, 18, 18);
            c.bezierCurveTo(18, 16, 7, 16, 7, 18);
            c.bezierCurveTo(7, 18, 5, 17, 5, 15);
            
            c.moveTo(30, 15);
            c.bezierCurveTo(30, 10, 45, 10, 45, 15);
            c.bezierCurveTo(45, 17, 43, 18, 43, 18);
            c.bezierCurveTo(43, 16, 32, 16, 32, 18);
            c.bezierCurveTo(32, 18, 30, 17, 30, 15);
            
            c.moveTo(17, 28);
            c.bezierCurveTo(17, 28, 33, 28, 33, 28);
            c.bezierCurveTo(33, 48, 17, 48, 17, 28);
            c.fill();
            c.stroke();
            
            c.fillStyle = '#000';
            c.beginPath();
            c.arc(12, 14, 2, 0, RV.pi2);
            c.arc(37, 14, 2, 0, RV.pi2);
            c.fill();
            
        } else if(A == 'kj') { // 恐惧
            c.save();
            c.rotate(25*RV.pi1/180);
            c.scale(1, 1.2);
            c.beginPath();
            c.arc(19, 6, 7, 0, RV.pi2);
            c.fill();
            c.stroke();
            c.restore();
            
            c.save();
            c.rotate(-25*RV.pi1/180);
            c.scale(1, 1.2);
            c.beginPath();
            c.arc(27, 24, 7, 0, RV.pi2);
            c.fill();
            c.stroke();
            c.restore();
            
            c.beginPath();
            c.moveTo(20, 27);
            c.lineTo(30, 27);
            c.lineTo(30, 43);
            c.lineTo(20, 43);
            c.lineTo(20, 27);
            c.fill();
            c.stroke();
            
        } else if(A == 'je') { // 惊愕
            c.save();
            c.scale(1, 1.2);
            c.beginPath();
            c.arc(13.5, 13, 6, 0, RV.pi2);
            c.fill();
            c.stroke();
            c.restore();
            
            c.save();
            c.scale(1, 1.2);
            c.beginPath();
            c.arc(36.5, 13, 6, 0, RV.pi2);
            c.fill();
            c.stroke();
            c.restore();
            
            c.beginPath();
            c.moveTo(15, 35);
            c.bezierCurveTo(15, 25, 35, 25, 35, 35);
            c.bezierCurveTo(35, 35, 36, 38, 32, 38);
            c.bezierCurveTo(32, 36, 18, 36, 18, 38);
            c.bezierCurveTo(14, 38, 15, 35, 15, 35);
            c.fill();
            c.stroke();
            
        } else if(A == 'wy') { // 无语
            c.beginPath();
            c.moveTo(5, 15);
            c.bezierCurveTo(5, 12, 20, 12, 20, 15);
            c.bezierCurveTo(21, 20, 4, 20, 5, 15);
            
            c.moveTo(30, 15);
            c.bezierCurveTo(30, 12, 45, 12, 45, 15);
            c.bezierCurveTo(46, 20, 29, 20, 30, 15);
            
            c.moveTo(20, 35);
            c.lineTo(30, 35);
            c.fill();
            c.stroke();
            
            c.fillStyle = '#aff';
            c.beginPath();
            c.moveTo(40, 25);
            c.bezierCurveTo(50, 45, 30, 45, 40, 25);
            c.fill();
            c.stroke();
            
        } else {
            c.beginPath();
            c.moveTo(5, 15);
            c.lineTo(20, 15);
            c.stroke();
            
            c.beginPath();
            c.moveTo(30, 15);
            c.lineTo(45, 15);
            c.stroke();
            
            c.beginPath();
            c.moveTo(18, 35);
            c.lineTo(32, 35);
            c.stroke();
            
        }
        
        RV.CTX.drawImage(RV.CVT, B, C);
    },
    
    txt: (A, B, C, D, E, F, G, H) => { // draw text
        var a,b,c,d,e,f,g,h,z;
        if(!A && A!=0) return;
        B = B || 'wd';
        a = RV.ini2.ft;
        
        if(B == 't1') {
            b = A.split(/[,.\;\!\?，。；！？]/);
            c = a.otn || 'Microsoft YaHei';
            d = parseInt(a.ots) || 72;
            e = a.otc || '#ff0';
            f = parseInt(a.otbs) || 5;
            g = a.otbc || '#f00';
            for(z=0; z<b.length; z++) {
                RV.CTX.textAlign = 'start';
                RV.CTX.lineWidth = f;
                RV.CTX.font = d+'px '+c;
                RV.CTX.strokeStyle = g;
                RV.CTX.strokeText(b[z], 50, (50+d)*(z+1));
                RV.CTX.fillStyle = e;
                RV.CTX.fillText(b[z], 50, (50+d)*(z+1));
            }
            
        } else if(B == 't2') {
            c = a.ptn || 'Microsoft YaHei';
            d = parseInt(a.pts) || 48;
            e = a.ptc || '#000';
            f = parseInt(a.ptbs) || 2;
            g = a.ptbc || '#fff';
            RV.CTX.textAlign = 'right';
            RV.CTX.lineWidth = f;
            RV.CTX.font = d+'px '+c;
            RV.CTX.strokeStyle = g;
            RV.CTX.strokeText(A, RV.cw-50, RV.ch-50);
            RV.CTX.fillStyle = e;
            RV.CTX.fillText(A, RV.cw-50, RV.ch-50);
            
        } else if(B == 'wd') {
            
            
        } else if(B == 'rf') {
            b = E || 20;
            c =  F || '#000';
            d = G || 'left';
            e = H || 'Simsun';
            RV.CTX.textAlign = d;
            RV.CTX.font = b+'px '+e;
            RV.CTX.fillStyle = c;
            RV.CTX.fillText(A, C, D);
        }
    },
    
    scp: (A) => { // show copyright
        var a,b,c,d,x,y,z;
        a = ['视频作者(Video Author): '+(RV.ini2.vdo.va||'未知作者(Unknown Author)'), '视频工具(Video Tools): 锐视(RyView)'];
        b = RV.adoL || {};
        d = 0;
        for(z in b) {
            c = b[z].mn || '';
            if(c) {
                if(!d++) a.push('音频资源(Audio Resources): ');
                a.push(c);
            }
        }
        d = a.length;
        x = RV.cw / 2;
        y = (RV.ch-38*d) / 2;
        for(z=0; z<a.length; z++) {
            RV.txt(a[z], 'rf', x, y+38*z, 32, '#fff', 'center');
        }
    },
    
    sinit: (A) => { // sprite init
        var a,b,c,d,o,z;
        a = RV.ini2 || {};
        if(RV.slib[a.sr.bg.id]) {
            o = {
                sc: a.sr.bg.sc,
                sr: a.sr.bg.sr,
                sh: a.sr.bg.sh,
                ss: a.sr.bg.ss,
                sb: a.sr.bg.sb,
                sa: a.sr.bg.sa,
                hr: a.sr.bg.hr,
            };
            RV.slib[a.sr.bg.id](o);
        }
        
        if(RV.slib[a.sr.mot.id]) {
            o = {
                sc: a.sr.mot.sc,
                sr: a.sr.mot.sr,
                sp: a.sr.mot.sp,
                sh: a.sr.mot.sh,
                ss: a.sr.mot.ss,
                sb: a.sr.mot.sb,
                sa: a.sr.mot.sa,
            };
            RV.slib[a.sr.mot.id](o);
        }
        
        if(RV.slib[a.sr.ado.id]) {
            for(z in RV.adoL) {
                if(!RV.ana) {
                    RV.ana = RV.adoL[z]['ana'];
                    RV.u8a = new Uint8Array(360);
                    RV.msd = RV.adoL[z]['msd']
                    break;
                }
            }
            
            o = {
                x: RV.cw / 2,
                y: RV.ch / 2,
                r: Math.min(RV.cw, RV.ch) * .3,
                b: a.sr.ado.bs || 1,
            };
            RV.slib[a.sr.ado.id](o);
        }
        
        if(RV.slib[a.sr.mat.id]) {
            o = {
                sh: a.sr.mat.sh,
                ss: a.sr.mat.ss,
                sb: a.sr.mat.sb,
                sa: a.sr.mat.sa,
            };
            RV.slib[a.sr.mat.id](o);
        }
        
        if(RV.slib[a.sr.act.id]) {
            o = {
                sh: a.sr.act.sh,
                ss: a.sr.act.ss,
                sb: a.sr.act.sb,
                sa: a.sr.act.sa,
            };
            RV.slib[a.sr.act.id](o);
        }
        
        RV.pd();
    },
    
    ps: (A) => { // play sprite
        var a,b,c,d,o;
        a = RV.ini2 || {};
        RV.CTX.clearRect(0, 0, RV.cw, RV.ch);
        RV.CTX.globalCompositeOperation = 'lighter';
        if(RV.slib[a.sr.bg.id]) RV.slib[a.sr.bg.id]();
        if(RV.slib[a.sr.mot.id]) RV.slib[a.sr.mot.id]();
        if(RV.slib[a.sr.ado.id]) RV.slib[a.sr.ado.id]();
        RV.pd();
    },
    
    pd: (A) => { // play data
        var a,b,c,d,o,z;
        RV.adtArr = [];
        a = RV.adtL;
        o = RV.ini2 || {};
        if(!a) return;
        if(!RV.pdInit) {
            a.pp = 't1'; // play progress
            a.pb = RV.PG; // play begin
            a.pe = 1000*3; // play end
            a.ps = 1; // play state
            RV.pdInit = 1;
            return;
        }
        
        if(a.pp=='t1' && a.ps) {
            if((a.pb+a.pe) > RV.PG) {
                RV.txt(a.t1, 't1');
                return;
            } else {
                a.pp = 0;
                a.ps = 0;
            }
        }
        
        if(!a.ps) {
            if(a.pp >= a.tl.length) {
                a.pb = RV.PG;
                a.pe = 1000*5;
                a.ps = 3;
                return;
            }
            a.ps = 1;
            if(a.tl == false) return;
            a.tl[a.pp] = a.tl[a.pp] || {};
            a.pb = RV.PG;
            a.pet2 = 1000*3;
            a.pe = parseInt(a.tl[a.pp].d1) || 15;
            if(a.pe < 10) a.pe = 10;
            a.pe = 1000*a.pe;
            if(a.tl[a.pp].dl == false) return;
            
        } else if(a.ps == 1) {
            if(a.tl[a.pp].t2 && (a.pb+a.pet2) > RV.PG) RV.txt(a.tl[a.pp].t2, 't2');
            if((a.pb+a.pe) > RV.PG) {
                if(a.tl[a.pp].tp == 1) {
                    if(RV.slib[o.sr.mat.id]) RV.slib[o.sr.mat.id]({tl: a.pp});
                } else {
                    if(RV.slib[o.sr.act.id]) RV.slib[o.sr.act.id]({tl: a.pp});
                }
            } else {
                a.petop = 1000*3;
                a.ps = 2;
            }
            
        } else if(a.ps == 2) { // 展示排名
            if((a.pb+a.pe+a.petop) > RV.PG) {
                if(a.tl[a.pp].tp == 1) {
                    if(RV.slib[o.sr.mat.id]) RV.slib[o.sr.mat.id]({tl: a.pp});
                } else {
                    if(RV.slib[o.sr.act.id]) RV.slib[o.sr.act.id]({tl: a.pp});
                }
                
            } else if(a.pp >= a.tl.length) {
                a.pb = RV.PG;
                a.pe = 1000*5;
                a.ps = 3;
            } else {
                a.pp++;
                a.ps = 0;
                a.pb = 0;
                a.pe = 0;
                a.pet2 = 0;
                a.petop = 0;
            }
            
        } else if(a.ps == 3) { // 展示版权信息
            if((a.pb+a.pe) > RV.PG) {
                RV.scp();
            } else {
                RV.pa(0);
            }
        }
    },
    
    pa: (A) => { // play animation
        var a = RV.ini2 || {};
        //CL(performance.memory);
        if(A == 1) {
            // 动画初始化
            RV.ST = new Date().getTime();
            RV.PG = 0;
            RV.FP = 0;
            RV.LT = 0;
            RV.PS = 1; // play state: 0=stop, 1=play
            RV.pdInit = 0;
            RV.bgInit = 0;
            RV.motInit = 0;
            RV.adoInit = 0;
            RV.matInit = 0;
            RV.actInit = 0;
            RV.assInit = 0;
            RV.sinit();
            RV.rec();
            RV.loop();
            RV.MR.start();
            
        } else if(A == 2) { // pause
            
        } else if(A == 3) { // resume
            
        } else {
            cancelAnimationFrame(RV.rafid);
            RV.PS = 0;
            if(RV.slib[a.sr.ado.id]) RV.slib[a.sr.ado.id]();
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
        
        // 动画耗时
        //await RV.slp(50);
        RV.ps();
        
        RV.LT = a.getTime();
        c = RV.LT - b;
        /*if(c < 1000/RV.FPS) {
            d = 1000/RV.FPS - c;
            //await RV.slp(d);
            RV.slp(d, 1);
            RV.LT = a.getTime();
            c = RV.LT - b;
        }*/
        RV.PG += c;// CL(RV.PG);
        RV.FP++;
        
        if(RV.PG >= RV.DT) {
            RV.pa(0);
            return;
        }
        RV.rafid = requestAnimationFrame(RV.loop);
    },
    
    out: (A) => { // out video
        if(RV.MRDT && RV.MRDT.length > 0) {
            var a,b,c,d;
            d = RV.adtL.t1 || 'test';
            c = RV.ini2.vdo.tp || 'mp4';
            b = URL.createObjectURL(new Blob(RV.MRDT, {type: 'video/'+c}));
            //RV.VDO.src = b;
            a = document.createElement('a');
            a.href = b;
            a.download = d+'.'+c;
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
        var a,b,c,d,e,f;
        a = {'480P':1500000, '720P':3500000, '1080P':7500000};
        b = a[RV.ini2.vdo.vs || '720P'] || 3500000;
        c = RV.ini2.vdo.vc || 'vp8';
        d = RV.CVX.captureStream(RV.FPS);
        //if(RV.msd) d.addTrack(RV.msd.stream.getAudioTracks()[0]);
        if(c=='webm' || c=='mpeg') c = 'video/' + c;
        else c = 'video/webm;codecs=' + c;
        e = new MediaStream([d.getVideoTracks()[0], RV.msd.stream.getAudioTracks()[0]]);
        //f = navigator.mediaDevices.getUserMedia({video:false, audio:true});
        //d.getVideoTracks().forEach(v => f.addTrack(v));
        //RV.MR = new MediaRecorder(e, {
        RV.MR = new MediaRecorder(d, {
            mimeType: c,
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: b,
            //bitsPerSecond: 3500000,
        });
        //if(RV.msd) RV.MR.stream.addTrack(RV.msd.stream.getAudioTracks()[0]);
        RV.MRDT = [];
        RV.MR.ondataavailable = function (e) {
            if (e.data && e.data.size) {
                RV.MRDT.push(e.data);
            }
        };
        
        //RV.MR.onstop = RV.out;
    },
    
    ado: (A) => { // audio object
        var a,b,c,d,e,f,i,o,s,t,z;
        A = A || 'bgm/[CCB]BenSound - A New Beginning.mp3';
        if(!RV.adoL) RV.adoL = {};
        o = {};
        a = new(AudioContext || webkitAudioContext || mozAudioContext || msAudioContext)();
        b = a.createBufferSource();
        c = a.createAnalyser();
        d = a.createMediaStreamDestination();
        b.connect(c);
        b.connect(d);
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
        o.msd = d; // createMediaStreamDestination
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
                    t = b.buffer.duration*1000;
                    if(RV.DT < t) RV.DT = t;
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
        RV.adtL = RV.adtL || {};
        A = A || 0;
        if(!A) A = RV.exp1;
        //if(!A) A = 't1 正标题\nt2 副标题\nd1 15\ntp 1\nnm 名称\nvl 0\npi \nfa \nac \nwd \nd2';
        else if(A == 1) A = 't2 副标题\nd1 15\ntp 1\nnm 名称\nvl 0\npi \nfa \nac \nwd \nd2';
        else if(A == 2) A = 'nm 名称\nvl 0\npi \nfa \nac \nwd \nd2';
        
        if(typeof A == 'string') {
            RV.pdt(A);
            if(RV.SMN == 'ad') RV.aad();
            
        } else if(typeof A == 'object') {
            var f = new FileReader();
            f.onload = () => {
                RV.pdt(f.result);
                if(RV.SMN == 'ad') RV.aad();
            };
            f.readAsText(A);
            
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
        bg_lspot: (A) => { // background sprite: light spot
            // A.sc: sprite count for min size(%)
            // A.sr: sprite radius
            // A.sh: sprite hue
            // A.ss: sprite saturation
            // A.sb: sprite brightness
            // A.sa: sprite alpha
            // A.hr: hue range
            var c,o,r,x,y,z,h,s,b,a,l,is,sc,sr,sh,ss,sb,sa,hr,bl,rgb;
            A = A || {};
            c = RV.CTH;
            cw = RV.cw;
            ch = RV.ch;
            
            if(!RV.bgInit) {
                is = Math.min(cw, ch);
                sc = Math.floor(is * RV.rr(A.sc || '.30, .35'));
                sr = A.sr || '.05, .15';
                sh = RV.rr(A.sh || '0, 360');
                hr = RV.rr(A.hr || '.75, .95');
                ss = A.ss || '25, 100';
                sb = A.sb || '55, 100';
                sa = A.sa || '.1, .5';
                bl = '20, 60';
                
                c.clearRect(0, 0, cw, ch);
                c.globalCompositeOperation = 'lighter';
                while (sc--) {
                    r = Math.floor(is * RV.rr(sr)),
                    x = RV.rr(0 + ', ' + cw),
                    y = RV.rr(0 + ', ' + ch),
                    h = RV.hue(sh, hr),
                    s = RV.rr(ss),
                    b = RV.rr(sb),
                    a = RV.rr(sa),
                    l = RV.rr(bl),
                    rgb = RV.hsb2rgb(h, s, b);
                    c.shadowColor = 'rgb('+rgb.r+', '+rgb.g+', '+rgb.b+', '+a+')';
                    c.shadowBlur = l;
                    c.beginPath();
                    c.arc(x, y, r, 0, RV.pi2);
                    c.closePath();
                    c.fill();
                }
                RV.bgInit = 1;
                return;
            }
            
            RV.CTX.drawImage(RV.CVH, 0, 0);
        },
        
        mot_dpopo: (A) => { // motion sprite: dreamlike popo
            // A.sc: sprite count for min size(%)
            // A.sr: sprite radius
            // A.sp: sprite speed
            // A.sh: sprite hue
            // A.ss: sprite saturation
            // A.sb: sprite brightness
            // A.sa: sprite alpha
            var c,o,r,x,y,z,cw,ch,is,sc,sr,sp,sh,ss,sb,sb2,sa,rgb,rgb2,rg,lg;
            A = A || {};
            c = RV.CTX;
            cw = RV.cw;
            ch = RV.ch;
            
            if(!RV.motInit) { // init
                RV.motArr = [];
                is = Math.min(cw, ch);
                sc = Math.floor(is * RV.rr(A.sc || '.04, .05'));
                sr = A.sr || '.05, .15';
                sp = A.sp || '.5, .8';
                sh = A.sh || '0, 360';
                ss = A.ss || '25, 100';
                sb = A.sb || '55, 100';
                sa = A.sa || '.25, .35';
                for (z = 0; z < sc; z++) {
                    RV.motArr.push({
                        x: RV.rr(0+', '+cw),
                        y: RV.rr(0+', '+ch),
                        r: Math.floor(is * RV.rr(sr)),
                        a: RV.rr(0+', '+RV.pi2), // angle
                        s: RV.rr(sp),
                        sh: RV.rr(sh),
                        ss: RV.rr(ss),
                        sb: RV.rr(sb),
                        sa: RV.rr(sa),
                    });
                }
                RV.motInit = 1;
                return;
            }
            
            z = RV.motArr.length;
            while (z--) {
                o = RV.motArr[z];
                sb2 = o.sb+10;
                if(sb2 > 100) sb2 = 100;
                rgb = RV.hsb2rgb(o.sh, o.ss, o.sb);
                rgb2 = RV.hsb2rgb(o.sh, o.ss, sb2);
                o.x += Math.cos(o.a) * o.s;
                o.y += Math.sin(o.a) * o.s;
                o.a += RV.rr('-0.05, 0.05');
                
                rg = c.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
                rg.addColorStop(0, 'rgba('+rgb2.r+', '+rgb2.g+', '+rgb2.b+', 0.1)');
                rg.addColorStop(1, 'rgba('+rgb.r+', '+rgb.g+', '+rgb.b+', '+o.sa+')');
                c.fillStyle = rg;
                c.strokeStyle = rg;
                c.lineCap = 'round';
                c.lineJoin = 'round';
                c.lineWidth = 2;
                
                c.beginPath();
                c.arc(o.x, o.y, o.r, 0, RV.pi2);
                c.fill();
                //c.stroke();
                
                if (o.x - o.r > cw) o.x = -o.r;
                else if (o.x + o.r < 0) o.x = cw + o.r;
                if (o.y - o.r > ch) o.y = -o.r;
                else if (o.y + o.r < 0) o.y = ch + o.r;
                
                // 高光椭圆
                lg = RV.CTT.createLinearGradient(o.r, o.r*1.6, o.r, 0);
                lg.addColorStop(0, 'rgba(255, 255, 255, .01)');
                lg.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
                RV.CTT.clearRect(0, 0, RV.cw, RV.ch);
                RV.CTT.globalCompositeOperation = 'source-over';
                RV.CTT.save();
                RV.CTT.scale(.5, .35);
                RV.CTT.beginPath();
                RV.CTT.arc(o.r, o.r, o.r, 0, RV.pi2);
                RV.CTT.fillStyle = lg;
                RV.CTT.fill();
                c.drawImage(RV.CVT, o.x-o.r*2*.5/2, (o.y-o.r*2*.25/2) - o.r*.65);
                RV.CTT.restore();
            }
        },
        
        ado_eaper: (A) => { // audio sprite: explosion aperture
            // A.x: 圆心X
            // A.y: 圆心Y
            // A.r: 圆半径
            // A.b: 圆边框大小
            var a,i,j,o,v,x,y,r,b,p,x0,y0,x1,y1,cw,ch;
            c = RV.CTX;
            A = A || {};
            cw = RV.cw;
            ch = RV.ch;
            
            if(!RV.adoInit) {
                x = A.x || (cw/2);
                y = A.y || (ch/2);
                r = A.r || (Math.min(cw, ch) * .3);
                b = A.b || 1;
                RV.adoObj = {
                    x: x,
                    y: y,
                    r: r,
                    b: b,
                };
                RV.adoInit = 1;
                return;
            }
            
            o = RV.adoObj;
            RV.ana.getByteFrequencyData(RV.u8a);
            c.shadowBlur = 0;
            c.lineWidth = o.b || 1;
            c.lineCap = 'round';
            c.lineJoin = 'round';
            if (!RV.avisa) RV.avisa = 0;
            if (RV.avisa++ >= 360) RV.avisa = 0;
            a = RV.avisa;
            
            for (i = j = 0; i < 360; i++) {
                if (++a>=360) a = 0;
                c.beginPath();
                if (i > 0) c.moveTo(x1, y1);
                if (i < 180) {
                    j++;
                    v = (RV.u8a[Math.floor(i * 1.8)] || 0) / 2;
                } else {
                    j--;
                    v = (RV.u8a[Math.floor(j * 1.5)] || 0) / 2;
                }
                // X: R * cos(PI/180*旋转角度) + 圆心X
                // Y: R * sin(PI/180*旋转角度) + 圆心Y，R正数=顺时针，R负数=逆时针
                x1 = x = (o.r + v) * Math.cos(Math.PI / 180 * i) + o.x;
                y1 = y = -(o.r + v) * Math.sin(Math.PI / 180 * i) + o.y;
                if (!i) {
                    x0 = x;
                    y0 = y;
                }
                c.lineTo(x, y);
                c.strokeStyle = 'hsla('+a+', 100%, 50%, 1)';
                c.stroke();
            }
            c.lineTo(x0, y0);
            c.stroke();
            c.closePath();
            
            a = RV.adoL;
            for(z in a) {
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
        
        mat_rypeter: (A) => { // match sprite: rypeter
            // A.sh: sprite hue
            // A.ss: sprite saturation
            // A.sb: sprite brightness
            // A.sa: sprite alpha
            // A.tl: time list index
            // A.ar: action rate
            // A.fr: face rate
            var c,f,i,j,k,l,m,t,o,p,q,r,s,x,y,h,s,s2,b,b2,a,rgb,rgb2,rg,tl,al,ai,ar,fi,fr,cw,ch;
            c = RV.CTT;
            A = A || {};
            cw = RV.cw;
            ch = RV.ch;
            o = RV.adtL || {};
            tl = A.tl || 0;
            
            al = [
                {cx1:68, cy1:30, cx2:30, cy2:5, px:5, py:50},
                {cx1:55, cy1:40, cx2:45, cy2:0, px:5, py:35},
                {cx1:42, cy1:52, cx2:50, cy2:5, px:8, py:20},
                {cx1:65, cy1:55, cx2:15, cy2:30, px:15, py:5},
                {cx1:68, cy1:36, cx2:30, cy2:61, px:5, py:16},
                
                {cx1:55, cy1:26, cx2:45, cy2:66, px:5, py:31},
                {cx1:42, cy1:14, cx2:50, cy2:61, px:8, py:46},
                {cx1:65, cy1:11, cx2:15, cy2:36, px:15, py:61},
            ];
            
            if(!RV.matInit) {
                RV.matArr = [];
                p = {};
                h = A.sh || '0, 360';
                s = A.ss || '25, 100';
                b = A.sb || '55, 100';
                a = A.sa || '.55, .75';
                ai = '0, 7';
                fi = '0, 12';
                ar = A.ar || RV.ini2.sr.mat.ar || 2;
                if(ar < 1) ar = 1;
                if(ar > 5) ar = 5;
                fr = A.fr || RV.ini2.sr.mat.fr || 90;
                if(fr < 90) fr = 90;
                if(fr > 150) fr = 150;
                
                o.tl = o.tl || [];
                for(z=0; z<o.tl.length; z++) {
                    q = [];
                    RV.matArr[z] = {}
                    o.tl[z] = o.tl[z] || {};
                    if(o.tl[z].dl == false || (parseInt(o.tl[z].tp)||1) != 1) continue;
                    o.tl[z].dl = o.tl[z].dl || [];
                    
                    for(y=0; y<o.tl[z].dl.length; y++) {
                        t = o.tl[z].dl[y] || {};
                        n = t.nm || '';
                        v = RV.nf(t.vl||0, 2);
                        if(!n) continue;
                        if(!p[n]) {
                            p[n] = {
                                h: RV.rr(h),
                                s: RV.rr(s),
                                b: RV.rr(b),
                                a: RV.rr(a),
                            };
                        }
                        
                        q.push(v+'_'+n);
                        p[n] = p[n] || {};
                        RV.matArr[z][n] = {
                            h: p[n].h || RV.rr(h),
                            s: p[n].s || RV.rr(s),
                            b: p[n].b || RV.rr(b),
                            a: p[n].a || RV.rr(a),
                            n: n,
                            v: v,
                            x: 10,
                            y: RV.rr('50, '+(ch-50)),
                            ai: Math.floor(RV.rr(ai)),
                            fi: Math.floor(RV.rr(fi)),
                            ar: ar,
                            fr: fr,
                        };
                    }
                    
                    j = ch / q.length;
                    for(x=0; x<q.length; x++) {
                        s = q[x].split('_');
                        y = j*x+10;
                        RV.matArr[z][s[1]].y = y;
                    }
                    
                    m = 0;
                    q.sort();
                    x = q.length;
                    y = 0
                    while(x--) {
                        s = q[x].split('_');
                        if(s[0] > m) m = s[0];
                        RV.matArr[z][s[1]].top = ++y;
                    }
                    RV.matArr[z].max = m;
                    
                }
                
                RV.matInit = 1;
                return;
            }
            
            j = (RV.PG-o.pb) / o.pe;
            if(j >= 1) j = 1;
            for(z in RV.matArr[tl]) {
                if(z == 'max') continue;
                o = RV.matArr[tl][z];
                i = o.ai || 0;
                if(!(RV.FP%o.ar)) i++;
                if(i < 0 || i > 7) i = 0;
                f = o.fi || 0;
                if(!(RV.FP%o.fr) && j<1) f = Math.floor(RV.rr('0, 12')) || 0;
                if(f < 0 || f > 12) f = 0;
                
                s2 = o.s+20;
                if(s2 > 100) s2 = 100;
                b2 = o.b+20;
                if(b2 > 100) b2 = 100;
                rgb = RV.hsb2rgb(o.h, o.s, o.b);
                rgb2 = RV.hsb2rgb(o.h, s2, b2);
                
                c.clearRect(0, 0, cw, ch);
                c.globalCompositeOperation = 'source-over';
                rg = c.createRadialGradient(150, 38, 0, 150, 38, 38);
                rg.addColorStop(0, 'rgba('+rgb2.r+', '+rgb2.g+', '+rgb2.b+', '+o.a+')');
                rg.addColorStop(1, 'rgba('+rgb.r+', '+rgb.g+', '+rgb.b+', '+o.a+')');
                c.fillStyle = rg;
                c.strokeStyle = rg;
                c.lineCap = 'round';
                c.lineJoin = 'round';
                c.lineWidth = 2;
                
                c.beginPath();
                c.moveTo(100, 33);
                c.bezierCurveTo(al[i].cx1, al[i].cy1 - 3, al[i].cx2, al[i].cy2 - 2, al[i].px, al[i].py);
                c.bezierCurveTo(al[i].cx2, al[i].cy2 + 2, al[i].cx1, al[i].cy1 + 3, 100, 43);
                //c.lineTo(100, 43);
                c.bezierCurveTo(100, 98, 200, 73, 200, 38);
                c.bezierCurveTo(200, 3, 100, -22, 100, 33);
                c.stroke();
                c.fill();
                c.closePath();
                
                /*for (z = 0; z < al.length; z++) {
                    c.lineWidth = 1;
                    c.beginPath();
                    c.moveTo(100, 33);
                    c.bezierCurveTo(al[z].cx1, al[z].cy1, al[z].cx2, al[z].cy2, al[z].px, al[z].py);
                    c.stroke();
                    c.closePath();
                }*/
                
                x = (cw-250)*j * (o.v/RV.matArr[tl].max);
                y = o.y;
                RV.CTX.globalCompositeOperation = 'source-over';
                RV.CTX.drawImage(RV.CVT, x, y);
                RV.txt(o.n, 'rf', x+210, y+35, 20, rgb.rgb1);
                RV.txt(RV.nf(Math.floor(o.v*j),1,4), 'rf', x+210, y+60, 20, rgb.rgb1);
                if(j < 1) RV.face(f, x+120, y+10);
                RV.matArr[tl][z].x = x;
                RV.matArr[tl][z].y = y;
                RV.matArr[tl][z].ai = i;
                RV.matArr[tl][z].fi = f;
                
                if(j >= 1) {
                    if(!o.topf) {
                        if(o.top < 4) {
                            k = ['xi', 'le', 'gl', 'xy', 'bs', 'cx'];
                        } else {
                            k = ['nu', 'ai', 'ku', 'kj', 'je', 'wy'];
                        }
                        f = k[Math.floor(RV.rr('0, 5'))] || 'xi';
                        RV.matArr[tl][z].fi = f;
                        RV.matArr[tl][z].topf = 1;
                    }
                    RV.face((o.fi||0), x+120, y+10);
                    s = '#888';
                    if(o.top == 1) s = '#f22';
                    else if(o.top == 2) s = '#f90';
                    else if(o.top == 3) s = '#fc0';
                    RV.CTX.beginPath();
                    RV.CTX.arc(x+100, y+35, 10, 0, RV.pi2);
                    RV.CTX.fillStyle = s;
                    RV.CTX.fill();
                    RV.CTX.closePath();
                    RV.txt(o.top, 'rf', x+95, y+42, 20, '#fff');
                }
                else RV.matArr[tl][z].topf = 0;
            }
            return {w:200, h:76};
        },
        
        act_rypenn: (A) => { // actor sprite: rypenn
            // A.sh: sprite hue
            // A.ss: sprite saturation
            // A.sb: sprite brightness
            // A.sa: sprite alpha
            // A.tl: time list index
            var c,o,p,q,t,x,y,i,j,k,w,h,s,s2,b,b2,a,z,rgb,rgb2,tl,len,n,rg,cw,ch;
            c = RV.CTT;
            A = A || {};
            cw = RV.cw;
            ch = RV.ch;
            o = RV.adtL || {};
            
            if(!RV.actInit) {
                RV.actObj = {};
                p = {};
                h = A.sh || '0, 360';
                s = A.ss || '25, 100';
                b = A.sb || '55, 100';
                a = A.sa || '.55, .75';
                
                o.tl = o.tl || [];
                for(z=0; z<o.tl.length; z++) {
                    o.tl[z] = o.tl[z] || {};
                    if(o.tl[z].dl == false || (parseInt(o.tl[z].tp)||1) == 1) continue;
                    o.tl[z].dl = o.tl[z].dl || [];
                    for(y=0; y<o.tl[z].dl.length; y++) {
                        t = o.tl[z].dl[y] || {};
                        n = t.nm || '';
                        if(!n) continue;
                        if(!p[n]) {
                            p[n] = n;
                            RV.actObj[n] = {
                                h: RV.rr(h),
                                s: RV.rr(s),
                                b: RV.rr(b),
                                a: RV.rr(a),
                                x: 0,
                                y: 0,
                                n: n,
                            };
                        }
                    }
                }
                
                RV.actInit = 1;
                return;
            }
            
            tl = A.tl || 0;
            o.tl[tl] = o.tl[tl] || {};
            o.tl[tl].dl = o.tl[tl].dl || [];
            p = {};
            q = [];
            for(z=0; z<o.tl[tl].dl.length; z++) {
                t = o.tl[tl].dl[z] || {};
                n = t.nm || '';
                if(!n) continue;
                if(!p[n]) {
                    p[n] = n;
                    q.push(n);
                }
            }
            
            len = q.length;
            w = cw/len;
            if(w > cw*.1) w = cw*.1;
            j = (cw - w*1.5*len) / 2;
            i = w/60;
            k = 0;
            y = ch - i*80 - 20;
            for(z=0; z<len; z++) {
                o = RV.actObj[q[z]];
                s2 = o.s+20;
                if(s2 > 100) s2 = 100;
                b2 = o.b+20;
                if(b2 > 100) b2 = 100;
                rgb = RV.hsb2rgb(o.h, o.s, o.b);
                rgb2 = RV.hsb2rgb(o.h, s2, b2);
                
                c.clearRect(0, 0, cw, ch);
                c.globalCompositeOperation = 'source-over';
                rg = c.createRadialGradient(30, 50, 0, 30, 50, 30);
                rg.addColorStop(0, 'rgba('+rgb2.r+', '+rgb2.g+', '+rgb2.b+', '+o.a+')');
                rg.addColorStop(1, 'rgba('+rgb.r+', '+rgb.g+', '+rgb.b+', '+o.a+')');
                c.fillStyle = rg;
                c.strokeStyle = rg;
                c.lineCap = 'round';
                c.lineJoin = 'round';
                c.lineWidth = 2;
                
                c.save();
                c.scale(i, i);
                c.beginPath();
                c.moveTo(0, 0);
                c.lineTo(10, 20);
                c.lineTo(20, 10);
                c.lineTo(30, 30);
                c.lineTo(40, 20);
                c.lineTo(50, 40);
                c.lineTo(60, 30);
                c.lineTo(60, 80);
                c.lineTo(0, 80);
                c.lineTo(0, 0);
                //c.stroke();
                c.fill();
                c.closePath();
                x = j+w*1.5*k++;
                RV.CTX.globalCompositeOperation = 'source-over';
                RV.CTX.drawImage(RV.CVT, x, y);
                c.restore();
                RV.actObj[q[z]].x = x;
                RV.actObj[q[z]].y = y;
            }
            return {w:60, h:80};
        },
        
        ass_rypeso: (A) => { // assist sprite: rypeso
            // A.sh: sprite hue
            // A.ss: sprite saturation
            // A.sb: sprite brightness
            // A.sa: sprite alpha
            var c,h,s,s2,b,b2,a,rgb,rgb2,rg,cw,ch;
            c = RV.CTT;
            A = A || {};
            cw = RV.cw;
            ch = RV.ch;
            
            h = RV.rr(A.sh || '0, 360');
            s = RV.rr(A.ss || '25, 100');
            b = RV.rr(A.sb || '55, 100');
            a = RV.rr(A.sa || '.55, .75');
            s2 = o.s+20;
            if(s2 > 100) s2 = 100;
            b2 = b+20;
            if(b2 > 100) b2 = 100;
            rgb = RV.hsb2rgb(h, s, b);
            rgb2 = RV.hsb2rgb(h, s2, b2);
            
            c.clearRect(0, 0, cw, ch);
            c.globalCompositeOperation = 'source-over';
            rg = c.createRadialGradient(30, 15, 0, 30, 15, 15);
            rg.addColorStop(0, 'rgba('+rgb2.r+', '+rgb2.g+', '+rgb2.b+', '+a+')');
            rg.addColorStop(1, 'rgba('+rgb.r+', '+rgb.g+', '+rgb.b+', '+a+')');
            c.fillStyle = rg;
            c.strokeStyle = rg;
            c.lineCap = 'round';
            c.lineJoin = 'round';
            c.lineWidth = 2;
            
            c.beginPath();
            c.moveTo(0, 30);
            c.bezierCurveTo(0, -10, 60, -10, 60, 30);
            c.lineTo(55, 33);
            c.lineTo(50, 30);
            c.lineTo(45, 33);
            c.lineTo(40, 30);
            c.lineTo(35, 33);
            c.lineTo(30, 30);
            c.lineTo(25, 33);
            c.lineTo(20, 30);
            c.lineTo(15, 33);
            c.lineTo(10, 30);
            c.lineTo(5, 33);
            c.lineTo(0, 30);
            //c.stroke();
            c.fill();
            c.closePath();
            
            c.beginPath();
            c.moveTo(8, 38);
            c.lineTo(8, 48);
            c.moveTo(23, 38);
            c.lineTo(23, 48);
            c.moveTo(38, 38);
            c.lineTo(38, 48);
            c.moveTo(53, 38);
            c.lineTo(53, 48);
            c.stroke();
            c.closePath();
            return {w:60, h:48};
        },
    },
    
    test: (A) => { // test
        var a,b,c,d;
        
    },
    
};