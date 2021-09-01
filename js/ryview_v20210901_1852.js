/**
轻松制作短视频！- 锐视(RyView) - 音频可视化加数据可视化网页工具
清轻的，5来啦

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
    DM: '2d', // design mode
    UT: 'm', // unit
    DPI: 72, // dot per inch
    TL: 'e', // select tool
    FC: 2, // float count
    CBF: 10, // canvas buffer
    CR: '', // color receive
    DC: '#888:1', // default color
    RC: '#789:.85', // relative color
    FM: 'CF', // fill mode
    FT: 'fs', // fill type
    LRP: {}, // linear radial pattern
    E2d: {}, // html 5 element 2d
    S2d: {}, // html 5 sprite 2d
    A2d: {}, // html 5 action 2d
    V2d: {}, // html 5 video 2d
    E3d: {}, // html 5 element 3d
    S3d: {}, // html 5 sprite 3d
    A3d: {}, // html 5 action 3d
    V3d: {}, // html 5 video 3d
    SELE: {}, // select element
    SELA: {}, // select ancker point
    
    exp1: 't1 网络视频平台用户月活量\n\nt2 2021-01\ntp 1\n\nnm 腾讯视频\nvl 50000w\n\nnm 西瓜视频\nvl 45000w\n\nnm 搜狐视频\nvl 28000w\n\nnm 优酷视频\nvl 35000w\n\nnm 百度视频\nvl 32000w\n\n\nt2 2021-02\ntp 1\n\nnm 腾讯视频\nvl 56000w\n\nnm 西瓜视频\nvl 48000w\n\nnm 搜狐视频\nvl 32000w\n\nnm 优酷视频\nvl 38000w\n\nnm 百度视频\nvl 35000w\n\n\nt2 2021-03\ntp 1\n\nnm 腾讯视频\nvl 52000w\n\nnm 西瓜视频\nvl 43000w\n\nnm 搜狐视频\nvl 26000w\n\nnm 优酷视频\nvl 31000w\n\nnm 百度视频\nvl 35000w\n',
    
    exp2: 't1 我就是过来炫个富的，你满意个der啊\n\nt2 凭实力相亲，有钱就是任性\ntp 2\n\nnm 张三\nwd 你好，你是王阿姨介绍的相亲对象吗？\nnm 李四\nwd 对，我就是，不好意思，我迟到了！\n\nnm 张三\nwd 那我们进入主题吧！\nnm 李四\nwd 好鸭！\n\nnm 张三\nwd 你有房吗？\nnm 李四\nwd 北京二环有3套住宅！京西有5栋酒店！\n\nnm 张三\nwd 那你有车吗？\nnm 李四\nwd 2辆奔驰，3辆宝马，10台挖掘机，30辆泥头车！\n\nnm 张三\nwd 那你有存款吗？\nnm 李四\nwd 没有，但我有10位数余额！\n\nnm 张三\nwd 嗯，我对你很满意！\nnm 李四\nwd 你满意什么？\n\nnm 张三\nwd 和你在一起鸭，我同意做你女朋友！\nnm 李四\nwd 你满意有个卵用！我就是过来炫个富的，还你满意，你满意个der啊！\n\nnm 张三\nwd 你...神经病！\nnm 李四\nwd 不好意思，我还有其它地方要赶去炫富呢！告辞！\n',
    
    css: '!z!8!hmargin!n0!m!wpadding!n0!m!wborder!n0!m!wbackground!ccolor!ntransparent!m!wfont!cstyle!nnormal!m!wtext!cdecoration!nnone!m!woverflow!nhidden!m!j!zhtml!qbody!h!j!zbody!hposition!nrelative!m!wheight!n100!5!m!wcolor!n!3333!m!wfont!cfamily!n宋体!m!wfont!csize!n16px!m!wline!cheight!n150!5!m!wtext!calign!ncenter!m!woverflow!nhidden!m!j!z!3RyView!wb!hdisplay!ninline!m!wfont!cweight!nnormal!m!j!z!3RyView!wa!hcolor!n!3158!m!wtext!cdecoration!nnone!m!wdisplay!ninline!m!wcursor!npointer!m!j!z!3RyView!wa!nhover!hcolor!n!3F22!m!j!z!3RyView!wi!hdisplay!nblock!m!wfont!cstyle!nnormal!m!j!z!3RyView!w!scl!hdisplay!nblock!m!wheight!n0!m!wclear!nboth!m!j!z!z!2font!cface!hfont!cfamily!n!okuaile!o!m!wsrc!nurl!9font!ukuaile!sttf!a!m!j!z!2font!cface!hfont!cfamily!n!okuhei!o!m!wsrc!nurl!9font!ukuhei!sttf!a!m!j!z!2font!cface!hfont!cfamily!n!opangmen!o!m!wsrc!nurl!9font!upangmen!sttf!a!m!j!z!2font!cface!hfont!cfamily!n!oxiaobai!o!m!wsrc!nurl!9font!uxiaobai!sttf!a!m!j!z!2font!cface!hfont!cfamily!n!ozhenyan!o!m!wsrc!nurl!9font!uzhenyan!sttf!a!m!j!z!z!3RyView!hposition!nrelative!m!wwidth!n100!5!m!wheight!n100!5!m!wtext!calign!ncenter!m!j!z!3rvLB!hposition!nabsolute!m!wleft!n0!m!wtop!n0!m!wwidth!nauto!m!wheight!n100!5!m!j!z!3rvRB!hposition!nabsolute!m!wright!n0!m!wtop!n0!m!wwidth!n300px!m!wheight!n100!5!m!wborder!n1px!wsolid!w!3dde!m!wtext!calign!nleft!m!j!z!z!3rvCvsBox!hposition!nrelative!m!wwidth!n854px!m!wheight!n480px!m!wmargin!n10px!wauto!m!wbackground!n!3c3c6c9!m!j!zcanvas!hposition!nabsolute!m!wleft!n0!m!wtop!n0!m!j!z!3rvCvs3d!hz!cindex!n10000!m!j!z!3rvCvs3dTmp!hz!cindex!n10005!m!j!z!3rvCvs2d!hz!cindex!n10010!m!j!z!3rvCvsHide!hz!cindex!n10020!m!j!z!3rvCvsTmp!hz!cindex!n10030!m!j!z!3rvVdo!hposition!nabsolute!m!wleft!n0!m!wtop!n0!m!wdisplay!nnone!m!j!z!z!3rvTL!hposition!nrelative!m!wheight!n30!5!m!wborder!n1px!wsolid!w!3dcd!m!wbackground!n!3cbc!m!j!z!3rvTLt!hposition!nrelative!m!wheight!n24px!m!wborder!cbottom!n1px!wsolid!w!3dcd!m!wbackground!n!3bab!m!wcursor!ns!cresize!m!j!z!3rvTLtl!q!3rvTLtr!q!srvTLbtn!q!3rvTLbtnB!q!3rvTLpgB!hwidth!n24px!m!wheight!n24px!m!wline!cheight!n24px!m!wdisplay!ninline!m!wfloat!nleft!m!j!z!srvTLbtn!hcursor!npointer!m!wbackground!nno!crepeat!m!j!z!3rvTLtl!hposition!nrelative!m!wwidth!n144px!m!wbackground!n!3cad!m!j!z!3rvTLtr!q!3rvTLpgB!hposition!nrelative!m!wwidth!nauto!m!j!z!3rvTLtr!hwidth!n100px!m!j!z!3rvTLbtnB!hwidth!n130px!m!j!z!3rvTLTxt!hwidth!n82px!m!wtext!calign!ncenter!m!j!z!3rvTLpgB!hwidth!n100px!m!j!z!3rvTLpg1!q!3rvTLpg2!q!3rvTLpg3!hposition!nrelative!m!wheight!n4px!m!wleft!n0!m!wtop!n10px!m!wbackground!n!3989!m!j!z!3rvTLpg2!hwidth!n0!5!m!wmargin!ctop!n!c4px!m!wbackground!n!3ede!m!j!z!3rvTLpg3!hleft!n0px!m!wwidth!n20px!m!wheight!n6px!m!wmargin!ctop!n!c5px!m!wbackground!n!3656!m!j!z!z!srvTL!dsce!d1!hbackground!nurl!9!nE2d!n!4Isce1!a!m!j!z!srvTL!dsce!d1!nhover!hbackground!nurl!9!nE2d!n!4Isce2!a!m!j!z!srvTL!dsce!d1!nactive!hbackground!nurl!9!nE2d!n!4Isce3!a!m!j!z!srvTL!dsce!d4!hbackground!nurl!9!nE2d!n!4Isce4!a!m!j!z!z!srvTL!dspr!d1!hbackground!nurl!9!nE2d!n!4Ispr1!a!m!j!z!srvTL!dspr!d1!nhover!hbackground!nurl!9!nE2d!n!4Ispr2!a!m!j!z!srvTL!dspr!d1!nactive!hbackground!nurl!9!nE2d!n!4Ispr3!a!m!j!z!srvTL!dspr!d4!hbackground!nurl!9!nE2d!n!4Ispr4!a!m!j!z!z!srvTL!dado!d1!hbackground!nurl!9!nE2d!n!4Iado1!a!m!j!z!srvTL!dado!d1!nhover!hbackground!nurl!9!nE2d!n!4Iado2!a!m!j!z!srvTL!dado!d1!nactive!hbackground!nurl!9!nE2d!n!4Iado3!a!m!j!z!srvTL!dado!d4!hbackground!nurl!9!nE2d!n!4Iado4!a!m!j!z!z!srvTL!ddt!d1!hbackground!nurl!9!nE2d!n!4Idt1!a!m!j!z!srvTL!ddt!d1!nhover!hbackground!nurl!9!nE2d!n!4Idt2!a!m!j!z!srvTL!ddt!d1!nactive!hbackground!nurl!9!nE2d!n!4Idt3!a!m!j!z!srvTL!ddt!d4!hbackground!nurl!9!nE2d!n!4Idt4!a!m!j!z!z!srvTL!ddia!d1!hbackground!nurl!9!nE2d!n!4Idia1!a!m!j!z!srvTL!ddia!d1!nhover!hbackground!nurl!9!nE2d!n!4Idia2!a!m!j!z!srvTL!ddia!d1!nactive!hbackground!nurl!9!nE2d!n!4Idia3!a!m!j!z!srvTL!ddia!d4!hbackground!nurl!9!nE2d!n!4Idia4!a!m!j!z!z!srvTL!dst!d1!hbackground!nurl!9!nE2d!n!4Ist1!a!m!j!z!srvTL!dst!d1!nhover!hbackground!nurl!9!nE2d!n!4Ist2!a!m!j!z!srvTL!dst!d1!nactive!hbackground!nurl!9!nE2d!n!4Ist3!a!m!j!z!z!srvTL!dres!d1!hbackground!nurl!9!nE2d!n!4Ires1!a!m!j!z!srvTL!dres!d1!nhover!hbackground!nurl!9!nE2d!n!4Ires2!a!m!j!z!srvTL!dres!d1!nactive!hbackground!nurl!9!nE2d!n!4Ires3!a!m!j!z!z!srvTL!dsp!d1!hbackground!nurl!9!nE2d!n!4Isp1!a!m!j!z!srvTL!dsp!d1!nhover!hbackground!nurl!9!nE2d!n!4Isp2!a!m!j!z!srvTL!dsp!d1!nactive!hbackground!nurl!9!nE2d!n!4Isp3!a!m!j!z!z!3rvTLb!hposition!nrelative!m!woverflow!cy!nauto!m!j!z!z!3rvStt!hposition!nabsolute!m!wleft!n0!m!wbottom!n0!m!wz!cindex!n100010!m!wwidth!n100!5!m!wheight!n24px!m!wline!cheight!n22px!m!wpadding!cleft!n30px!m!wborder!ctop!n1px!wsolid!w!3dde!m!wbackground!n!3e3e6e9!m!wtext!calign!nleft!m!j!z!3rvTB!hposition!nabsolute!m!wleft!n0!m!wbottom!n0!m!wz!cindex!n100020!m!wwidth!n23px!m!wheight!n23px!m!wborder!n1px!wsolid!w!3dde!m!wbackground!n!3dd2!m!j!z!srvTbT!hwidth!n23px!m!wheight!n23px!m!wline!cheight!n22px!m!wborder!cbottom!n1px!wsolid!w!3dde!m!wcursor!npointer!m!wfont!cfamily!nverdana!m!j!z!srvTbT!nhover!hbackground!n!3ee2!m!j!z!srvTbT!nactive!hbackground!n!3cc2!m!j!z!3rvTB!sD2!hheight!n312px!m!j!z!3rvTB!sD3!hheight!n360px!m!j!z!3rvTB!si!d!hheight!n23px!m!j!z!z!3rvRB0!hbackground!n!3dcd!m!wcursor!ns!cresize!m!j!z!srvBtn!q!srvBtn0!hheight!n24px!m!wline!cheight!n24px!m!wmargin!cleft!n!c1px!m!wpadding!n0!w5px!m!wfloat!nleft!m!wdisplay!ninline!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3ccd!m!wcursor!npointer!m!j!z!srvBtn!nhover!q!srvBtn0!nhover!q!srvFont!nhover!hbackground!n!3aab!m!j!z!srvBtn!nactive!q!srvBtn0!nactive!q!srvFont!nactive!hbackground!n!399a!m!j!z!srvBtn!hmargin!n5px!w0!w0!w5px!m!j!z!srvFont!hline!cheight!n36px!m!wmargin!n5px!w5px!w0!w5px!m!wpadding!n0!w5px!m!wdisplay!nblock!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3ccd!m!wcursor!npointer!m!wfont!csize!n36px!m!wword!cwrap!nbreak!cword!m!wword!cbreak!nbreak!call!m!j!z!srvFile!hwidth!n35px!m!wheight!n24px!m!wmargin!ctop!n!c24px!m!wdisplay!nblock!m!wbackground!n!3f22!m!wopacity!n!s01!m!wcursor!npointer!m!j!z!z!3rvRB1!hpadding!cbottom!n5px!m!wbackground!n!3ede!m!j!z!srvBtn1!hheight!n24px!m!wline!cheight!n24px!m!wmargin!n5px!w0!w0!w5px!m!wpadding!n0!w5px!m!wfloat!nleft!m!wdisplay!ninline!m!wborder!n1px!wsolid!w!3ccd!m!wcursor!npointer!m!wbackground!n!3dde!m!j!z!srvBtn1!nhover!hbackground!n!3aab!m!j!z!srvBtn1!nactive!hbackground!n!399a!m!j!z!srvDsVal2!hwidth!n80px!m!wpadding!n0!w3px!m!j!z!srvDsVal3!hwidth!n86px!m!wpadding!n0!w3px!m!j!z!srvDsC!hwidth!n9px!m!wheight!n56px!m!wmargin!n!c26px!w5px!w0!w0!m!wdisplay!ninline!m!wfloat!nright!m!j!z!srvDsColor!hwidth!n9px!m!wheight!n28px!m!wdisplay!nblock!m!wcursor!npointer!m!j!z!z!3rvRB2!hpadding!cbottom!n5px!m!wbackground!n!3fef!m!wheight!n100!5!m!j!z!srvBtn2!hheight!n24px!m!wline!cheight!n24px!m!wmargin!n5px!w5px!w0!w5px!m!wpadding!n0!w5px!m!wborder!n1px!wsolid!w!3dde!m!wcursor!npointer!m!wbackground!n!3eef!m!wwhite!cspace!nnowrap!m!j!z!srvBtn2!nhover!hbackground!n!3aab!m!j!z!srvBtn2!nactive!hbackground!n!399a!m!j!zb!srvVal!qinput!srvVal!hpadding!n0!w3px!m!wcolor!n!3f22!m!woutline!nnone!m!j!z!srvDsVal2!winput!srvVal!hwidth!n60px!m!wpadding!n0!m!j!z!srvDsVal3!winput!srvVal!hwidth!n62px!m!wpadding!n0!m!j!z!z!srvRB3!hmargin!n5px!w5px!w0!w5px!m!wpadding!cbottom!n5px!m!wclear!nboth!m!wbackground!n!3eff!m!j!z!srvBtn3!hheight!n24px!m!wline!cheight!n24px!m!wmargin!n5px!w0!w0!w5px!m!wpadding!n0!w5px!m!wdisplay!ninline!m!wfloat!nleft!m!wborder!n1px!wsolid!w!3cdd!m!wcursor!npointer!m!wbackground!n!3dee!m!wwhite!cspace!nnowrap!m!j!z!srvBtn3!nhover!hbackground!n!3cdd!m!j!z!srvBtn3!nactive!hbackground!n!3bcc!m!j!z!z!srvLabB!hmargin!n5px!w5px!w0!w5px!m!wborder!n1px!wsolid!w!3ddc!m!wbackground!n!3ffe!m!j!z!srvLabT!hheight!n24px!m!wborder!cbottom!n1px!wsolid!w!3ddc!m!wbackground!n!3ffd!m!j!z!srvLab!hheight!n24px!m!wline!cheight!n24px!m!wpadding!n0!w10px!m!wbackground!n!3dd2!m!wcolor!n!3fff!m!wdisplay!ninline!m!wfloat!nleft!m!j!z!srvLabDN!hbackground!n!3ee5!m!j!z!srvLabX!q!srvLabAdd!hwidth!n24px!m!wheight!n24px!m!wline!cheight!n24px!m!wbackground!n!3f22!m!wcolor!n!3fff!m!wtext!calign!ncenter!m!wdisplay!ninline!m!wfloat!nright!m!wcursor!npointer!m!wfont!cfamily!nverdana!m!j!z!srvLabAdd!hbackground!n!3f90!m!j!z!srvLayBtn!hwidth!n24px!m!wheight!n24px!m!wdisplay!ninline!m!wfloat!nleft!m!wcursor!npointer!m!wbackground!nno!crepeat!m!j!z!z!srvLabC!hpadding!cbottom!n5px!m!wtext!calign!nleft!m!woverflow!cy!nauto!m!j!z!srvLayL!hword!cwrap!nbreak!cword!m!wword!cbreak!nbreak!call!m!j!z!srvLayN!hwidth!n190px!m!wfloat!nleft!m!woutline!nnone!m!j!z!srvLayIcoB!hwidth!n72px!m!wfloat!nright!m!j!z!z!srvLay!dori!d1!hbackground!nurl!9!nE2d!n!4Iori1!a!m!j!z!srvLay!dori!d2!hbackground!nurl!9!nE2d!n!4Iori2!a!m!j!z!srvLay!dori!d3!hbackground!nurl!9!nE2d!n!4Iori3!a!m!j!z!srvLay!dori!d4!hbackground!nurl!9!nE2d!n!4Iori4!a!m!j!z!srvLay!dori!d5!hbackground!nurl!9!nE2d!n!4Iori5!a!m!j!z!srvLay!dori!d6!hbackground!nurl!9!nE2d!n!4Iori6!a!m!j!z!srvLay!dori!d7!hbackground!nurl!9!nE2d!n!4Iori7!a!m!j!z!srvLay!dori!d8!hbackground!nurl!9!nE2d!n!4Iori8!a!m!j!z!srvLay!dori!d9!hbackground!nurl!9!nE2d!n!4Iori9!a!m!j!z!z!srvLay!dali!d1!hbackground!nurl!9!nE2d!n!4Iali1!a!m!j!z!srvLay!dali!d2!hbackground!nurl!9!nE2d!n!4Iali2!a!m!j!z!srvLay!dali!d3!hbackground!nurl!9!nE2d!n!4Iali3!a!m!j!z!srvLay!dali!d4!hbackground!nurl!9!nE2d!n!4Iali4!a!m!j!z!srvLay!dali!d5!hbackground!nurl!9!nE2d!n!4Iali5!a!m!j!z!srvLay!dali!d6!hbackground!nurl!9!nE2d!n!4Iali6!a!m!j!z!srvLay!dali!d7!hbackground!nurl!9!nE2d!n!4Iali7!a!m!j!z!srvLay!dali!d8!hbackground!nurl!9!nE2d!n!4Iali8!a!m!j!z!srvLay!dali!d9!hbackground!nurl!9!nE2d!n!4Iali9!a!m!j!z!srvLay!dali!d10!hbackground!nurl!9!nE2d!n!4Iali10!a!m!j!z!srvLay!dali!d11!hbackground!nurl!9!nE2d!n!4Iali11!a!m!j!z!srvLay!dali!d12!hbackground!nurl!9!nE2d!n!4Iali12!a!m!j!z!z!srvLay!disf!d1!hbackground!nurl!9!nE2d!n!4Iisf1!a!m!j!z!srvLay!disf!d1!nhover!hbackground!nurl!9!nE2d!n!4Iisf2!a!m!j!z!srvLay!disf!d1!nactive!hbackground!nurl!9!nE2d!n!4Iisf3!a!m!j!z!srvLay!disf!d4!hbackground!nurl!9!nE2d!n!4Iisf4!a!m!j!z!z!srvLay!diss!d1!hbackground!nurl!9!nE2d!n!4Iiss1!a!m!j!z!srvLay!diss!d1!nhover!hbackground!nurl!9!nE2d!n!4Iiss2!a!m!j!z!srvLay!diss!d1!nactive!hbackground!nurl!9!nE2d!n!4Iiss3!a!m!j!z!srvLay!diss!d4!hbackground!nurl!9!nE2d!n!4Iiss4!a!m!j!z!z!srvLay!disp!d1!hbackground!nurl!9!nE2d!n!4Iisp1!a!m!j!z!srvLay!disp!d1!nhover!hbackground!nurl!9!nE2d!n!4Iisp2!a!m!j!z!srvLay!disp!d1!nactive!hbackground!nurl!9!nE2d!n!4Iisp3!a!m!j!z!srvLay!disp!d4!hbackground!nurl!9!nE2d!n!4Iisp4!a!m!j!z!z!srvLay!disc!d1!hbackground!nurl!9!nE2d!n!4Iisc1!a!m!j!z!srvLay!disc!d1!nhover!hbackground!nurl!9!nE2d!n!4Iisc2!a!m!j!z!srvLay!disc!d1!nactive!hbackground!nurl!9!nE2d!n!4Iisc3!a!m!j!z!srvLay!disc!d4!hbackground!nurl!9!nE2d!n!4Iisc4!a!m!j!z!z!srvLay!dup!d1!hbackground!nurl!9!nE2d!n!4Iup1!a!m!j!z!srvLay!dup!d1!nhover!hbackground!nurl!9!nE2d!n!4Iup2!a!m!j!z!srvLay!dup!d1!nactive!hbackground!nurl!9!nE2d!n!4Iup3!a!m!j!z!z!srvLay!ddn!d1!hbackground!nurl!9!nE2d!n!4Idn1!a!m!j!z!srvLay!ddn!d1!nhover!hbackground!nurl!9!nE2d!n!4Idn2!a!m!j!z!srvLay!ddn!d1!nactive!hbackground!nurl!9!nE2d!n!4Idn3!a!m!j!z!z!srvLay!dtop!d1!hbackground!nurl!9!nE2d!n!4Itop1!a!m!j!z!srvLay!dtop!d1!nhover!hbackground!nurl!9!nE2d!n!4Itop2!a!m!j!z!srvLay!dtop!d1!nactive!hbackground!nurl!9!nE2d!n!4Itop3!a!m!j!z!z!srvLay!dbot!d1!hbackground!nurl!9!nE2d!n!4Ibot1!a!m!j!z!srvLay!dbot!d1!nhover!hbackground!nurl!9!nE2d!n!4Ibot2!a!m!j!z!srvLay!dbot!d1!nactive!hbackground!nurl!9!nE2d!n!4Ibot3!a!m!j!z!z!srvLay!dhide!d1!hbackground!nurl!9!nE2d!n!4Ihide1!a!m!j!z!srvLay!dhide!d1!nhover!hbackground!nurl!9!nE2d!n!4Ihide2!a!m!j!z!srvLay!dhide!d1!nactive!hbackground!nurl!9!nE2d!n!4Ihide3!a!m!j!z!srvLay!dhide!d4!hbackground!nurl!9!nE2d!n!4Ihide4!a!m!j!z!z!srvLay!ddel!d1!hbackground!nurl!9!nE2d!n!4Idel1!a!m!j!z!srvLay!ddel!d1!nhover!hbackground!nurl!9!nE2d!n!4Idel2!a!m!j!z!srvLay!ddel!d1!nactive!hbackground!nurl!9!nE2d!n!4Idel3!a!m!j!z!z!srvLay!dadd!d1!hbackground!nurl!9!nE2d!n!4Iadd1!a!m!j!z!srvLay!dadd!d1!nhover!hbackground!nurl!9!nE2d!n!4Iadd2!a!m!j!z!srvLay!dadd!d1!nactive!hbackground!nurl!9!nE2d!n!4Iadd3!a!m!j!z!z!srvLay!datt!d1!hbackground!nurl!9!nE2d!n!4Iatt1!a!m!j!z!srvLay!datt!d1!nhover!hbackground!nurl!9!nE2d!n!4Iatt2!a!m!j!z!srvLay!datt!d1!nactive!hbackground!nurl!9!nE2d!n!4Iatt3!a!m!j!z!srvLay!datt!d4!hbackground!nurl!9!nE2d!n!4Iatt4!a!m!j!z!z!srvLay!dsave!d1!hbackground!nurl!9!nE2d!n!4Isave1!a!m!j!z!srvLay!dsave!d1!nhover!hbackground!nurl!9!nE2d!n!4Isave2!a!m!j!z!srvLay!dsave!d1!nactive!hbackground!nurl!9!nE2d!n!4Isave3!a!m!j!z!z!3rvEB!hposition!nabsolute!m!wleft!n150px!m!wtop!n150px!m!wz!cindex!n100030!m!wwidth!n320px!m!wheight!n180px!m!wborder!n1px!wsolid!w!3ddc!m!wbackground!n!3ffe!m!j!z!srvEbT!hheight!n24px!m!wborder!cbottom!n1px!wsolid!w!3ddc!m!wbackground!n!3ffd!m!wcursor!nmove!m!j!z!srvEbLab!hheight!n24px!m!wline!cheight!n24px!m!wpadding!n0!w10px!m!wbackground!n!3dd2!m!wcolor!n!3fff!m!wdisplay!ninline!m!wfloat!nleft!m!j!z!srvEbX!q!srvEbOk!hwidth!n24px!m!wheight!n24px!m!wline!cheight!n24px!m!wbackground!n!3f22!m!wcolor!n!3fff!m!wtext!calign!ncenter!m!wdisplay!ninline!m!wfloat!nright!m!wcursor!npointer!m!wfont!cfamily!nverdana!m!j!z!srvEbOk!hbackground!n!3f90!m!j!z!3rvED!hwidth!n310px!m!wheight!n145px!m!wline!cheight!n120!5!m!wpadding!n5px!m!woverflow!cy!nauto!m!woutline!nnone!m!wfont!csize!n16px!m!j!z!z!3rvHsb!hposition!nabsolute!m!wleft!n50px!m!wtop!n50px!m!wz!cindex!n100040!m!wwidth!n375px!m!wheight!n160px!m!wmargin!n0!m!wpadding!n0!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3ccd!m!wcursor!nmove!m!j!z!3rvHsbCb!hposition!nabsolute!m!wwidth!n150px!m!wheight!n150px!m!wleft!n5px!m!wtop!n5px!m!wcursor!ncrosshair!m!j!z!3rvHsbH!q!3rvHsbS!q!3rvHsbB!hposition!nabsolute!m!wleft!n0px!m!wtop!n0px!m!wwidth!n150px!m!wheight!n150px!m!j!z!3rvHsbH!hbackground!n!3f00!m!j!z!3rvHsbS!hbackground!n!3fff!m!wbackground!nlinear!cgradient!9to!wright!q!wrgba!9255!q255!q255!q1!a!q!wrgba!9255!q255!q255!q0!a!a!m!j!z!3rvHsbB!hbackground!n!3000!m!wbackground!nlinear!cgradient!9to!wtop!q!wrgba!90!q0!q0!q1!a!q!wrgba!90!q0!q0!q0!a!a!m!j!z!3rvHsbCS!q!srvHsbCS1!q!srvHsbCS2!hposition!nabsolute!m!wwidth!n20px!m!wheight!n20px!m!wleft!n139px!m!wtop!n!c9px!m!j!z!srvHsbCS1!hleft!n9px!m!wtop!n0px!m!wwidth!n2px!m!wheight!n20px!m!j!z!srvHsbCS2!hleft!n0px!m!wtop!n9px!m!wwidth!n20px!m!wheight!n2px!m!j!z!sCS1!w!srvHsbCS1!q!sCS1!w!srvHsbCS2!hbackground!n!3fff!m!j!z!sCS2!w!srvHsbCS1!q!sCS2!w!srvHsbCS2!hbackground!n!3000!m!j!z!3rvHsbHue!hposition!nabsolute!m!wleft!n160px!m!wtop!n5px!m!wwidth!n20px!m!wheight!n150px!m!wcursor!ncrosshair!m!wbackground!n!3f00!m!wbackground!nlinear!cgradient!9to!wbottom!q!w!3f00!q!w!3ff0!q!w!30f0!q!w!30ff!q!w!300f!q!w!3f0f!q!w!3f00!a!m!j!z!z!3rvHsbLRP!hposition!nabsolute!m!wleft!n185px!m!wtop!n5px!m!wz!cindex!n100045!m!wwidth!n30px!m!wheight!n150px!m!j!z!3rvHsbCf!q!3rvHsbCfbg!q!3rvHsbLf!q!3rvHsbLfC!q!3rvHsbRf!q!3rvHsbRfC!q!3rvHsbPf!hposition!nabsolute!m!wleft!n0!m!wtop!n0!m!wwidth!n30px!m!wheight!n130px!m!j!z!3rvHsbLfC!q!3rvHsbRfC!hheight!n90px!m!wbackground!nurl!9data!nimage!upng!mbase64!qiVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAANUlEQVQ4T2NkYGBoYCAM7BkYGBQZGBgeEFLKSEgBVL6egYEBpJag5aMG4gzR0TDEndionmwAFHcKy43QJwEAAAAASUVORK5CYII!e!a!w0px!w0px!wrepeat!cy!m!j!z!3rvHsbRfC!hheight!n70px!m!j!z!3rvHsbLfbg!q!3rvHsbRfbg!q!3rvHsbPfbg!hposition!nabsolute!m!wleft!n0!m!wtop!n0!m!wwidth!n20px!m!wheight!n90px!m!wbackground!n!3f00!m!wbackground!nlinear!cgradient!9to!wbottom!q!w!3f00!q!w!3ff0!a!m!wcursor!npointer!m!j!z!3rvHsbRfbg!hheight!n70px!m!wbackground!nradial!cgradient!9!3f00!w0!5!q!w!3ff0!w100!5!a!m!j!z!3rvHsbCfbg!q!3rvHsbPfbg!hwidth!n30px!m!wbackground!n!3f00!m!wcursor!npointer!m!j!z!srvHsbLRc!hposition!nabsolute!m!wleft!n20px!m!wtop!n0!m!wwidth!n10px!m!wheight!n10px!m!wcursor!npointer!m!j!z!3rvHsbLf!d0!q!3rvHsbRf!d0!hbackground!ccolor!n!3f00!m!j!z!3rvHsbLf!d1!q!3rvHsbRf!d1!htop!n80px!m!wbackground!ccolor!n!3ff0!m!j!z!3rvHsbRf!d1!htop!n60px!m!j!z!srvHsbLRPv!q!3rvHsbBtn!q!srvHsbRfVl!q!3rvHsbPfRpIl!q!3rvHsbPfRpRl!hposition!nabsolute!m!wleft!n0!m!wtop!n0!m!wwidth!n28px!m!wheight!n18px!m!wline!cheight!n18px!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3eef!m!wtext!calign!ncenter!m!woutline!nnone!m!wcursor!npointer!m!j!z!3rvHsbRfP!htop!n70px!m!j!z!3rvHsbLfP!q!3rvHsbRfBeg!q!3rvHsbPfImg!htop!n90px!m!j!z!3rvHsbLfA!q!3rvHsbRfEnd!q!3rvHsbPfRp!htop!n110px!m!j!z!3rvHsbPfRpIl!q!3rvHsbPfRpRl!hleft!n185px!m!wtop!n115px!m!wz!cindex!n100048!m!wwidth!n30px!m!wheight!n20px!m!wline!cheight!n20px!m!wpadding!n0!w2px!m!wcolor!n!3555!m!wopacity!n0!j!z!3rvHsbPfRpIl!htop!n91px!m!j!z!3rvHsbPfRpRl!htop!n111px!m!j!z!3rvHsbBtn!htop!n130px!m!wcursor!npointer!m!j!z!3rvHsbRfBegB!q!3rvHsbRfEndB!hposition!nabsolute!m!wleft!n215px!m!wtop!n5px!m!wwidth!n90px!m!wheight!n20px!m!j!z!3rvHsbRfBegB!htop!n95px!m!wz!cindex!n100046!m!j!z!3rvHsbRfEndB!htop!n115px!m!wz!cindex!n100047!m!j!z!3rvHsbRfBegB!dy1!q!3rvHsbRfEndB!dy2!hleft!n30px!m!j!z!3rvHsbRfBegB!dr1!q!3rvHsbRfEndB!dr2!hleft!n60px!m!j!z!z!3rvHsbV!hposition!nabsolute!m!wleft!n220px!m!wtop!n5px!m!wwidth!n150px!m!wheight!n150px!m!wtext!calign!nleft!m!j!z!srvHsbVl!hwidth!n148px!m!wheight!n24px!m!wline!cheight!n24px!m!wmargin!cbottom!n5px!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!ccolor!n!3dde!m!j!z!3rvHsbC1!q!3rvHsbC2!q!3rvHsbOk!hwidth!n50px!m!wheight!n26px!m!wdisplay!ninline!cblock!m!wcursor!npointer!m!j!z!3rvHsbC1!hbackground!ccolor!n!3f00!m!j!z!3rvHsbC2!hbackground!ccolor!n!3f00!m!j!z!3rvHsbOk!hwidth!n47px!m!wborder!cleft!n1px!wsolid!w!3bbc!m!wbackground!ccolor!n!3dd2!m!wcursor!npointer!m!wtext!calign!ncenter!m!j!z!srvHsbN!q!srvHsbT!hheight!n24px!m!wline!cheight!n24px!m!wdisplay!ninline!cblock!m!j!z!srvHsbN!hwidth!n15px!m!wmargin!cleft!n3px!m!wtext!calign!ncenter!m!j!z!srvHsbT!hwidth!n30px!m!j!z!srvHsbT!winput!hwidth!n28px!m!wheight!n18px!m!wline!cheight!n18px!m!wmargin!ctop!n3px!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!ccolor!n!3eef!m!wtext!calign!ncenter!m!woutline!nnone!m!j!z!3rvHexCt!hwidth!n31px!m!wfont!csize!n14px!m!wcursor!npointer!m!j!z!srvHsbCv!hwidth!n60px!m!j!z!srvHsbCv!winput!hwidth!n60px!m!wpadding!n0!w2px!m!wtext!calign!nleft!m!wfont!csize!n13px!m!j!z!z!3rvFwin!hposition!nabsolute!m!wleft!n250px!m!wtop!n250px!m!wz!cindex!n100050!m!wwidth!n320px!m!wheight!n180px!m!wmargin!n!c90px!w0!w0!w!c160px!m!j!z!3rvFwin!w!srvLabT!hcursor!nmove!m!j!z!3rvFwin!w!srvLabC!hheight!n150px!m!woverflow!cy!nauto!m!j!z!3rvFwin!w!srvMsg!hpadding!n5px!w5px!w0!w5px!m!j!z!srvLabC!w!srvBtn!hword!cwrap!nbreak!cword!m!wword!cbreak!nbreak!call!m!j!z!z!3rvSaveW!hposition!nabsolute!m!wright!n0!m!wbottom!n0!m!wz!cindex!n100060!m!wwidth!n300px!m!wheight!n360px!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3ccd!m!j!z!3rvSaveB!hposition!nrelative!m!j!z!3rvSaveB!q!3rvSavePV!hwidth!n290px!m!wheight!n290px!m!wmargin!n5px!w0!w0!w5px!m!wbackground!n!3dde!m!j!z!3rvSavePV!hmargin!n0!m!wbackground!n!3eef!m!j!z!srvSaveL!hheight!n25px!m!wmargin!ctop!n5px!m!j!z!srvSaveAtt!q!srvSaveBtn!hwidth!n80px!m!wheight!n23px!m!wmargin!n0!w0!w0!w5px!m!wdisplay!ninline!m!wfloat!nleft!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3eef!m!j!z!srvSaveAttN!q!srvSaveAttV!hwidth!n20px!m!wheight!n23px!m!wline!cheight!n23px!m!wdisplay!ninline!m!wfloat!nleft!m!j!z!srvSaveAttN!hpadding!n0!w2px!m!j!z!srvSaveAttV!hwidth!n50px!m!woutline!nnone!m!wcolor!n!3f22!m!j!z!srvSaveAttQ!hwidth!n60px!m!j!z!srvSaveAttQ!w!srvSaveAttV!hwidth!n32px!m!j!z!srvSaveAttT!hwidth!n52px!m!wmargin!n0!m!wcursor!npointer!m!j!z!3rvSaveAttT!hheight!n23px!m!wline!cheight!n23px!m!woutline!nnone!m!wcursor!npointer!m!wfont!csize!n16px!m!wcolor!n!3666!m!j!z!srvSaveAttF!hwidth!n238px!m!j!z!3rvSaveAttF!hwidth!n208px!m!wpadding!n0!w3px!m!j!z!srvSaveBtn!hwidth!n23px!m!wheight!n23px!m!wline!cheight!n23px!m!wmargin!n0!m!wcursor!npointer!m!j!z!z!3rvAttW!hposition!nabsolute!m!wright!n0!m!wbottom!n0!m!wz!cindex!n100070!m!wwidth!n300px!m!wheight!n334px!m!wborder!n1px!wsolid!w!3bbc!m!wbackground!n!3ccd!m!j!z!srvAttT!hheight!n24px!m!wcursor!nmove!m!j!z!srvAttL!hmax!cwidth!n260px!m!wheight!n24px!m!wline!cheight!n28px!m!wpadding!n0!w5px!m!wdisplay!ninline!m!wfloat!nleft!m!j!z!srvAttC!hheight!n295px!m!wmargin!n5px!m!wpadding!cbottom!n5px!m!woverflow!cy!nauto!m!wbackground!n!3dde!m!j!z!srvAttNV!hheight!n24px!m!wmargin!n5px!w0!w0!w5px!m!wdisplay!ninline!m!wfloat!nleft!m!wwhite!cspace!nnowrap!m!j!z!srvAttN!q!srvAttV!hmax!cwidth!n140px!m!wheight!n24px!m!wline!cheight!n24px!m!wpadding!n0!w5px!m!wdisplay!ninline!cblock!m!wbackground!n!3cbc!m!j!z!srvAttV!hmin!cwidth!n10px!m!wbackground!n!3dcd!m!wword!cwrap!nbreak!cword!m!wword!cbreak!nbreak!call!m!wcursor!npointer!m!woutline!nnone!m!j!z!srvAttSel!q!srvAttOpt!hheight!n24px!m!wline!cheight!n24px!m!wpadding!n0!w5px!m!wcolor!n!3666!m!woutline!nnone!m!j!z!z!3rvMSG!hposition!nabsolute!m!wright!n0!m!wbottom!n0!m!w!2bottom!n!c1px!m!wz!cindex!n100080!m!wwidth!n320px!m!wheight!n72px!m!wborder!n1px!wsolid!w!3CECEE5!m!wbackground!ccolor!n!3F8F8FA!m!wfilter!nalpha!9opacity!e85!a!m!wopacity!n!s85!m!j!z!3rvMSG!si!d!hheight!n2px!m!j!z!3rvMSG!w!stxt!hheight!n24px!m!wline!cheight!n24px!m!wpadding!n0!w3px!m!wtext!calign!nleft!m!wcursor!npointer!m!wword!cwrap!nbreak!cword!m!wword!cbreak!nbreak!call!m!j!z!3rvMSG!w!stxt!nhover!hbackground!ccolor!n!3AF86EF!m!wcolor!n!3FFF!m!j!z!3rvMSG!w!stxt!nactive!hbackground!ccolor!n!37840CF!m!wcolor!n!3FFF!m!j!z!z!ss!d!hbackground!n!3f22!m!wcolor!n!3fff!m!j!z!sh!d!hdisplay!nnone!m!j!z',
    
    ini2: null,
    ini: {
        ds: {
            des: '设计',
            x: '0',
            y: '0',
            w: '0',
            h: '0',
            r: '0',
            a: '4',
            lw: '1',
            ls: '#000',
            fs: '#888',
            xp: '0',
            yp: '0',
            zp: '0',
            xs: '1',
            ys: '1',
            zs: '1',
            xr: '0',
            yr: '0',
            zr: '0',
        },
        
        src: {
            des: '资源',
            elm: '元件',
            spr: '精灵',
            mat: '材质',
            act: '动作',
            fac: '表情',
            dat: '数据',
            ado: '音频',
            vdo: '视频',
        },
        
        set: {
            des: '设置',
            sys: {
                des: '系统',
                rs: '0',
                lg: 'cn',
                cbf: '10',
                dm: '2d',
                ut: 'm',
                dpi: '72',
                sid: '1',
                snm: '1',
                xy0: '1',
                dc: '#888:1',
                rc: '#789:.85',
                bg: '#ccc',
                al: '#ddd',
                dl: '100',
                pl: '100',
                sl: '100',
                ttsl: '',
                ttsp: '0',
                ttsr: '1.2',
                ttsv: '1',
            },
            
            vdo: {
                des: '视频',
                vc: 'vp8',
                vf: 'mp4',
                vp: '16:9',
                vs: '720P',
                va: '未知作者',
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
                dn: 'xiaobai',
                ds: '24px',
                dc: '#000',
                dw: '0',
                dbs: '0px',
                dbc: '#f00',
                rn: 'Simsun',
                rs: '20px',
                rc: '#000',
                rw: '0',
                rbs: '0px',
                rbc: '#000',
            },
            
            key: {
                des: '快捷键',
                a2: {
                    des: '二维工具',
                    K: 'A+2',
                    l: 'L',
                    p: 'P',
                    a: 'A',
                    g: 'G',
                    t: 'T',
                    e: 'E',
                    m: 'M',
                    s: 'S',
                    r: 'R',
                    i: 'I',
                    n: 'N',
                },
                
                q2: {
                    des: '二维变换',
                    K: 'Q+2',
                    xp1: 'X+D',
                    xl1: 'X+C',
                    xp5: 'X+F',
                    xl5: 'X+V',
                    xp10: 'X+G',
                    xl10: 'X+B',
                    
                    yp1: 'Y+U',
                    yl1: 'Y+J',
                    yp5: 'Y+I',
                    yl5: 'Y+K',
                    yp10: 'Y+O',
                    yl10: 'Y+L',
                    
                    wp1: 'W+E',
                    wl1: 'W+D',
                    wp5: 'W+R',
                    wl5: 'W+F',
                    wp10: 'W+T',
                    wl10: 'W+G',
                    
                    hp1: 'H+U',
                    hl1: 'H+J',
                    hp5: 'H+I',
                    hl5: 'H+K',
                    hp10: 'H+O',
                    hl10: 'H+L',
                    
                    rp1: 'R+T',
                    rl1: 'R+G',
                    rp5: 'R+Y',
                    rl5: 'R+H',
                    rp10: 'R+U',
                    rl10: 'R+J',
                    rp45: 'R+I',
                    rl45: 'R+K',
                    rp90: 'R+O',
                    rl90: 'R+L',
                    
                    ap1: 'A+W',
                    al1: 'A+S',
                    ap5: 'A+E',
                    al5: 'A+D',
                    ap10: 'A+R',
                    al10: 'A+F',
                },
                
                a3: {
                    des: '三维工具',
                    K: 'A+3',
                    c: 'C',
                    b: 'B',
                    o: 'O',
                    l: 'L',
                    p: 'P',
                    a: 'A',
                    t: 'T',
                    e: 'E',
                    m: 'M',
                    s: 'S',
                    r: 'R',
                    i: 'I',
                    n: 'N',
                },
                
                m3: {
                    des: '三维移动',
                    K: 'M+3',
                    xmp1: 'X+D',
                    xml1: 'X+C',
                    xmp5: 'X+F',
                    xml5: 'X+V',
                    xmp10: 'X+G',
                    xml10: 'X+B',
                    
                    ymp1: 'Y+U',
                    yml1: 'Y+J',
                    ymp5: 'Y+I',
                    yml5: 'Y+K',
                    ymp10: 'Y+O',
                    yml10: 'Y+L',
                    
                    zmp1: 'Z+S',
                    zml1: 'Z+X',
                    zmp5: 'Z+D',
                    zml5: 'Z+C',
                    zmp10: 'Z+F',
                    zml10: 'Z+V',
                },
                
                s3: {
                    des: '三维缩放',
                    K: 'S+3',
                    xsp1: 'X+D',
                    xsl1: 'X+C',
                    xsp5: 'X+F',
                    xsl5: 'X+V',
                    xsp10: 'X+G',
                    xsl10: 'X+B',
                    
                    ysp1: 'Y+U',
                    ysl1: 'Y+J',
                    ysp5: 'Y+I',
                    ysl5: 'Y+K',
                    ysp10: 'Y+O',
                    ysl10: 'Y+L',
                    
                    zsp1: 'Z+S',
                    zsl1: 'Z+X',
                    zsp5: 'Z+D',
                    zsl5: 'Z+C',
                    zsp10: 'Z+F',
                    zsl10: 'Z+V',
                },
                
                r3: {
                    des: '三维旋转',
                    K: 'R+3',
                    xrp1: 'X+D',
                    xrl1: 'X+C',
                    xrp5: 'X+F',
                    xrl5: 'X+V',
                    xrp10: 'X+G',
                    xrl10: 'X+B',
                    
                    yrp1: 'Y+U',
                    yrl1: 'Y+J',
                    yrp5: 'Y+I',
                    yrl5: 'Y+K',
                    yrp10: 'Y+O',
                    yrl10: 'Y+L',
                    
                    zrp1: 'Z+S',
                    zrl1: 'Z+X',
                    zrp5: 'Z+D',
                    zrl5: 'Z+C',
                    zrp10: 'Z+F',
                    zrl10: 'Z+V',
                },
                
                v3: {
                    des: '视图旋转',
                    K: 'V+3',
                    xrp0: 'X+A',
                    xrp1: 'X+D',
                    xrl1: 'X+C',
                    xrp5: 'X+F',
                    xrl5: 'X+V',
                    xrp10: 'X+G',
                    xrl10: 'X+B',
                    xrp45: 'X+H',
                    xrl45: 'X+N',
                    
                    zrp0: 'Z+A',
                    zrp1: 'Z+S',
                    zrl1: 'Z+X',
                    zrp5: 'Z+D',
                    zrl5: 'Z+C',
                    zrp10: 'Z+F',
                    zrl10: 'Z+V',
                    zrp45: 'Z+G',
                    zrl45: 'Z+B',
                },
                
                view: {
                    des: '视图',
                    K: 'A+V',
                    u: 'U',
                    d: 'D',
                    l: 'L',
                    r: 'R',
                    f: 'F',
                    b: 'B',
                    e: 'E',
                    c: 'C',
                },
                
                hsb: {
                    des: 'HSB拾色器',
                    K: 'A+H',
                    hp1: 'H+U',
                    hl1: 'H+J',
                    hp5: 'H+I',
                    hl5: 'H+K',
                    hp10: 'H+O',
                    hl10: 'H+L',
                    
                    sp1: 'S+E',
                    sl1: 'S+D',
                    sp5: 'S+R',
                    sl5: 'S+F',
                    sp10: 'S+T',
                    sl10: 'S+G',
                    
                    vp1: 'V+G',
                    vl1: 'V+B',
                    vp5: 'V+H',
                    vl5: 'V+N',
                    vp10: 'V+J',
                    vl10: 'V+M',
                    
                    lp1: 'T+Y',
                    ll1: 'T+H',
                    lp5: 'T+U',
                    ll5: 'T+J',
                    lp10: 'T+I',
                    ll10: 'T+K',
                    
                    rp1: 'R+T',
                    rl1: 'R+G',
                    rp5: 'R+Y',
                    rl5: 'R+H',
                    rp10: 'R+U',
                    rl10: 'R+J',
                    
                    gp1: 'G+Y',
                    gl1: 'G+H',
                    gp5: 'G+U',
                    gl5: 'G+J',
                    gp10: 'G+I',
                    gl10: 'G+K',
                    
                    bp1: 'B+H',
                    bl1: 'B+N',
                    bp5: 'B+J',
                    bl5: 'B+M',
                    bp10: 'B+K',
                    bl10: 'B+,',
                },
                
                lay: {
                    des: '图层',
                    K: 'A+R',
                    ad: 'Q',
                    del: 'S',
                    hd: 'H',
                    up: 'E',
                    dn: 'D',
                    tp: 'R',
                    bt: 'F',
                },
            },
            
        },
        
        sr: {
            des: '精灵',
            bg: {
                des: '背景精灵',
                id: 'bg_lspot',
                sn: '梦幻光斑',
                sc: '100-150',
                sr: '.02-.15',
                sh: '0-360',
                ss: '25-100',
                sb: '55-100',
                sa: '.1-.5',
                hr: '75-95',
            },
            mot: {
                des: '运动精灵',
                id: 'mot_dpopo',
                sn: '梦幻泡泡',
                sc: '10-15',
                sr: '.08-.15',
                sp: '.8-1',
                sh: '0-360',
                ss: '25-100',
                sb: '55-100',
                sa: '.25-.35',
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
                sh: '0-360',
                ss: '25-100',
                sb: '55-100',
                sa: '.55-.75',
                ar: '2',
                fr: '90',
            },
            act: {
                des: '角色精灵',
                id: 'act_rypenn',
                sn: '锐比安',
                sh: '0-360',
                ss: '25-100',
                sb: '55-100',
                sa: '.55-.75',
            },
            ass: {
                des: '辅助精灵',
                id: 'ass_rypeso',
                sn: '锐比兽',
                sh: '0-360',
                ss: '25-100',
                sb: '55-100',
                sa: '.55-.75',
            },
        },
    },
    
    lg: {
        cn: {
            des: '中文',
            ds: '设计',
            src: '资源',
            set: '设置',
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
            sce: '场景',
            spr: '精灵',
            ado: '音频',
            dt: '数据',
            dia: '台词',
            att: '属性',
            tp: '类型',
            cat: '类目',
            tit: '标题',
            tag: '标签',
            aut: '作者',
            du: '时长',//duration
            stt: '开始时间',
            spt: '结束时间',
            ct: '数量',
            sz: '大小',
            sd: '速度',
            cr: '颜色',
            el: '元件列表',
            al: '动作列表',
            ori: '原点',
            ali: '对齐',
            isf: '填充',
            iss: '描边',
            isp: '路径',
            isc: '封闭',
            up: '上移',
            dn: '下移',
            top: '置顶',
            bot: '置底',
            hide: '隐藏',
            del: '删除',
            add: '添加',
            
            ds: {
                des: '设计',
                x: 'X X坐标',
                y: 'Y Y坐标',
                w: 'W 宽度',
                h: 'H 高度',
                r: 'R 旋转',
                a: 'A 顶角数量',
                lw: 'LW 边线宽度',
                ls: 'LS 边线样式',
                fs: 'FS 填充样式',
                xp: 'XP X位置',
                yp: 'YP Y位置',
                zp: 'ZP Z位置',
                xs: 'XS X缩放',
                ys: 'YS Y缩放',
                zs: 'ZS Z缩放',
                xr: 'XR X旋转',
                yr: 'YR Y旋转',
                zr: 'ZR Z旋转',
            },
            
            src: {
                des: '资源',
                elm: '元件',
                spr: '精灵',
                mat: '材质',
                act: '动作',
                fac: '表情',
                dat: '数据',
                ado: '音频',
                vdo: '视频',
            },
            
            att: {
                des: '属性',
                id: 'ID',
                nm: '名称',
                f: '填充',
                s: '描边',
                p: '路径',
                c: '封闭',
                hd: '隐藏',
                sl: '选择',
                x: 'X坐标',
                y: 'Y坐标',
                w: '宽度',
                h: '高度',
                r: '旋转',
                i: {des:'对齐', lt:'左上', ct:'中上', rt:'右上', lc:'左中', cc:'中中', rc:'右中', lb:'左下', cb:'中下', rb:'右下'},
                n: {des:'布尔', p:'相加', s1:'内减', s2:'外减', m:'相乘', d:'相除'},
                m: {des:'镜像', l:'水平', v:'垂直'},
                cl: {des:'克隆', c:'数量', m:'位移', s:'缩放', r:'旋转', m:'镜像', o:'可见度'},
                a: '角数量',
                at: {des:'角类型', m:'尖角', r:'圆角', b:'折角'},
                bt: {des:'边类型', ia:'内弧', oa:'外弧', ib:'内尖', ob:'外尖'},
                bm: '边位移',
                fs: {des:'填充样式', cf:'纯色填充', lf:'线性填充', rf:'径向填充', pf:'图案填充'},
                ls: {des:'边线样式', cf:'纯色填充', lf:'线性填充', rf:'径向填充', pf:'图案填充'},
                lw: '边线宽度',
                lc: {des:'边线头尾', b:'平直', r:'圆形', s:'方形'},
                lj: {des:'边线接点', m:'尖角', r:'圆角', b:'折角'},
                sc: '阴影颜色',
                sb: '阴影模糊',
                sx: '阴影X位移',
                sy: '阴影Y位移',
                ga: '全局可见度',
                eb: '编辑框',
                tc: '文本内容',
                ts: '字体大小',
                tn: {des:'字体名称', simsun:'宋体(SimSun)', yahei:'雅黑(YaHei)', kuaile:'快乐(KuaiLe)', kuhei:'酷黑(KuHei)', pangmen:'庞门(PangMen)', xiaobai:'小白(XiaoBai)', zhenyan:'真言(ZhenYan)', arial:'Arial', verdana:'Verdana', tahoma:'Tahoma'},
                ta: {des:'文本对齐', l:'左', c:'中', r:'右'},
                tb: {des:'文本基线', t:'上', m:'中', b:'下'},
            },
            
            set: {
                des: '设置',
                sys: {
                    des: '系统',
                    rs: '重设配置',
                    lg: '语言',
                    cbf: '缓冲池',
                    dm: '设计模式',
                    ut: '单位',
                    dpi: 'DPI',
                    sid: '保存图层ID',
                    snm: '保存图层名称',
                    xy0: '坐标归零',
                    dc: '默认颜色',
                    rc: '相对颜色',
                    bg: '画布底色',
                    al: '环境光',
                    dl: '日光',
                    pl: '点光',
                    sl: '聚光',
                    ttsl: 'TTS语言',
                    ttsp: 'TTS音调',
                    ttsr: 'TTS语速',
                    ttsv: 'TTS音量',
                },
                
                vdo: {
                    des: '视频',
                    vc: '视频编码',
                    vf: '视频格式',
                    vp: '视频比例',
                    vs: '视频尺寸',
                    va: '视频作者',
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
                    dn: '台词字体名称',
                    ds: '台词字体大小',
                    dc: '台词字体颜色',
                    dw: '台词字体粗重',
                    dbs: '台词字体边框大小',
                    dbc: '台词字体边框颜色',
                    rn: '常规字体名称',
                    rs: '常规字体大小',
                    rc: '常规字体颜色',
                    rw: '常规字体粗重',
                    rbs: '常规字体边框大小',
                    rbc: '常规字体边框颜色',
                },
                
                key: {
                    des: '快捷键',
                    a2: {
                        des: '二维工具',
                        K: 'A+2',
                        l: '直线',
                        p: '路径',
                        a: '锚点',
                        g: '多边形',
                        t: '文本',
                        e: '选择',
                        m: '移动',
                        s: '缩放',
                        r: '旋转',
                        i: '对齐',
                        n: '布尔',
                    },
                    
                    q2: {
                        des: '二维变换',
                        K: 'Q+2',
                        xp1: 'X+1',
                        xl1: 'X-1',
                        xp5: 'X+5',
                        xl5: 'X-5',
                        xp10: 'X+10',
                        xl10: 'X-10',
                        
                        yp1: 'Y+1',
                        yl1: 'Y-1',
                        yp5: 'Y+5',
                        yl5: 'Y-5',
                        yp10: 'Y+10',
                        yl10: 'Y-10',
                        
                        wp1: 'W+1',
                        wl1: 'W-1',
                        wp5: 'W+5',
                        wl5: 'W-5',
                        wp10: 'W+10',
                        wl10: 'W-10',
                        
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        rp45: 'R+45',
                        rl45: 'R-45',
                        rp90: 'R+90',
                        rl90: 'R-90',
                        
                        ap1: 'A+1',
                        al1: 'A-1',
                        ap5: 'A+5',
                        al5: 'A-5',
                        ap10: 'A+10',
                        al10: 'A-10',
                    },
                    
                    a3: {
                        des: '三维工具',
                        K: 'A+3',
                        c: '方体',
                        b: '球体',
                        o: '柱体',
                        l: '直线',
                        p: '路径',
                        a: '锚点',
                        t: '文本',
                        e: '选择',
                        m: '移动',
                        s: '缩放',
                        r: '旋转',
                        i: '对齐',
                        n: '布尔',
                    },
                    
                    m3: {
                        des: '三维移动',
                        K: 'M+3',
                        xmp1: 'X+1',
                        xml1: 'X-1',
                        xmp5: 'X+5',
                        xml5: 'X-5',
                        xmp10: 'X+10',
                        xml10: 'X-10',
                        
                        ymp1: 'Y+1',
                        yml1: 'Y-1',
                        ymp5: 'Y+5',
                        yml5: 'Y-5',
                        ymp10: 'Y+10',
                        yml10: 'Y-10',
                        
                        zmp1: 'Z+1',
                        zml1: 'Z-1',
                        zmp5: 'Z+5',
                        zml5: 'Z-5',
                        zmp10: 'Z+10',
                        zml10: 'Z-10',
                    },
                    
                    s3: {
                        des: '三维缩放',
                        K: 'S+3',
                        xsp1: 'X+1',
                        xsl1: 'X-1',
                        xsp5: 'X+5',
                        xsl5: 'X-5',
                        xsp10: 'X+10',
                        xsl10: 'X-10',
                        
                        ysp1: 'Y+1',
                        ysl1: 'Y-1',
                        ysp5: 'Y+5',
                        ysl5: 'Y-5',
                        ysp10: 'Y+10',
                        ysl10: 'Y-10',
                        
                        zsp1: 'Z+1',
                        zsl1: 'Z-1',
                        zsp5: 'Z+5',
                        zsl5: 'Z-5',
                        zsp10: 'Z+10',
                        zsl10: 'Z-10',
                    },
                    
                    r3: {
                        des: '三维旋转',
                        K: 'R+3',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        
                        yrp1: 'Y+1',
                        yrl1: 'Y-1',
                        yrp5: 'Y+5',
                        yrl5: 'Y-5',
                        yrp10: 'Y+10',
                        yrl10: 'Y-10',
                        
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                    },
                    
                    v3: {
                        des: '视图旋转',
                        K: 'V+3',
                        xrp0: 'X=0',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        xrp45: 'X+45',
                        xrl45: 'X-45',
                        
                        zrp0: 'Z=0',
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                        zrp45: 'Z+45',
                        zrl45: 'Z-45',
                    },
                    
                    view: {
                        des: '视图',
                        K: 'A+V',
                        u: '上视图',
                        d: '下视图',
                        l: '左视图',
                        r: '右视图',
                        f: '前视图',
                        b: '后视图',
                        e: '自由视图',
                        c: '相机视图',
                    },
                    
                    hsb: {
                        des: 'HSB拾色器',
                        K: 'A+H',
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        sp1: 'S+1',
                        sl1: 'S-1',
                        sp5: 'S+5',
                        sl5: 'S-5',
                        sp10: 'S+10',
                        sl10: 'S-10',
                        
                        vp1: 'V+1',
                        vl1: 'V-1',
                        vp5: 'V+5',
                        vl5: 'V-5',
                        vp10: 'V+10',
                        vl10: 'V-10',
                    
                        lp1: 'L+1',
                        ll1: 'L+1',
                        lp5: 'L+5',
                        ll5: 'L+5',
                        lp10: 'L+10',
                        ll10: 'L+10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        
                        gp1: 'G+1',
                        gl1: 'G-1',
                        gp5: 'G+5',
                        gl5: 'G-5',
                        gp10: 'G+10',
                        gl10: 'G-10',
                        
                        bp1: 'B+1',
                        bl1: 'B-1',
                        bp5: 'B+5',
                        bl5: 'B-5',
                        bp10: 'B+10',
                        bl10: 'B-10',
                    },
                    
                    lay: {
                        des: '图层',
                        K: 'A+R',
                        ad: '添加目录',
                        del: '删除',
                        hd: '隐藏',
                        up: '上移',
                        dn: '下移',
                        tp: '置顶',
                        bt: '置底',
                    },
                },
                
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
            sce: 'Scenes',
            spr: 'Sprite',
            ado: 'Audio',
            dt: 'Data',
            dia: 'Dialog',
            att: 'Attribute',
            tp: 'Type',
            cat: 'Category',
            tit: 'Title',
            tag: 'Tag',
            aut: 'Author',
            du: 'Duration',
            stt: 'Start Time',
            spt: 'Stop Time',
            ct: 'Count',
            sz: 'Size',
            sd: 'Speed',
            cr: 'Color',
            el: 'Element List',
            al: 'Action List',
            ori: 'Origin',
            ali: 'Align',
            isf: 'Fill',
            iss: 'Stroke',
            isp: 'Path',
            isc: 'Close',
            up: 'Up',
            dn: 'Down',
            top: 'Top',
            bot: 'Bottom',
            hide: 'Hide',
            del: 'Delete',
            add: 'Add',
            
            ds: {
                des: 'Design',
                x: 'X X Coordinate',
                y: 'Y Y Coordinate',
                w: 'W Width',
                h: 'H Height',
                r: 'R Rotation',
                a: 'A Aangle Count',
                lw: 'LW Line Width',
                ls: 'LS Line Style',
                fs: 'FS Fill Style',
                xp: 'XP X Position',
                yp: 'YP Y Position',
                zp: 'ZP Z Position',
                xs: 'XS X Scale',
                ys: 'YS Y Scale',
                zs: 'ZS Z Scale',
                xr: 'XR X Rotation',
                yr: 'YR Y Rotation',
                zr: 'ZR Z Rotation',
            },
            
            src: {
                des: 'Resources',
                elm: 'Element',
                spr: 'Sprite',
                mat: 'Material',
                act: 'Action',
                fac: 'Face',
                dat: 'Data',
                ado: 'Audio',
                vdo: 'Video',
            },
            
            att: {
                des: 'Attribute',
                id: 'ID',
                nm: 'Name',
                f: 'Fill',
                s: 'Stroke',
                p: 'Path',
                c: 'Close',
                hd: 'Hide',
                sl: 'Select',
                x: 'X Coordinate',
                y: 'Y Coordinate',
                w: 'Width',
                h: 'Height',
                r: 'Rotation',
                i: {des:'Align', lt:'Left Up', ct:'Center Up', rt:'Right Up', lc:'Left Center', cc:'Center Center', rc:'Right Center', lb:'Left Bottom', cb:'Center Bottom', rb:'Right Bottom'},
                n: {des:'Boolean', p:'Plus', s1:'Inner Subtract', s2:'outer Subtract', m:'Multiply', d:'Divide'},
                m: {des:'Mirror Image', l:'Level', v:'Vertical'},
                cl: {des:'Clone', c:'Count', m:'Move', s:'Scale', r:'Rotation', m:'Mirror Image', o:'Opacity'},
                a: 'Angle Count',
                at: {des:'Angle Type', m:'Miter', r:'Round', b:'Bevel'},
                bt: {des:'Border Type', ia:'Inner Arc', oa:'Outer Arc', ib:'Inner Sharp', ob:'Outer Sharp'},
                bm: 'Border Displacement',
                fs: {des:'Fill Style', cf:'Color Fill', lf:'Linear Fill', rf:'Radial Fill'},
                ls: {des:'Line Style', cf:'Color Fill', lf:'Linear Fill', rf:'Radial Fill'},
                lw: 'Line Width',
                lc: {des:'Line Cap', b:'Butt', r:'Round', s:'Square'},
                lj: {des:'Line Join', m:'Miter', r:'Round', b:'Bevel'},
                sc: 'Shadow Color',
                sb: 'Shadow Blur',
                sx: 'Shadow OffsetX',
                sy: 'Shadow OffsetY',
                ga: 'Global Alpha',
                eb: 'Edit Box',
                tc: 'Font Content',
                ts: 'Font Size',
                tn: {des:'Font Name', simsun:'宋体(SimSun)', yahei:'雅黑(YaHei)', kuaile:'快乐(KuaiLe)', kuhei:'酷黑(KuHei)', pangmen:'庞门(PangMen)', xiaobai:'小白(XiaoBai)', zhenyan:'真言(ZhenYan)', arial:'Arial', verdana:'Verdana', tahoma:'Tahoma'},
                ta: {des:'Text Align', l:'Left', c:'Center', r:'Right'},
                tb: {des:'Text Baseline', t:'Top', m:'Middle', b:'Bottom'},
            },
            
            set: {
                des: 'Setting',
                sys: {
                    des: 'System',
                    rs: 'Reset Config',
                    lg: 'Language',
                    cbf: 'Buffer Pool',
                    dm: 'Design Mode',
                    ut: 'Unit',
                    dpi: 'DPI',
                    sid: 'Save Layer ID',
                    snm: 'Save Layer Name',
                    xy0: 'XY To 0',
                    dc: 'Default Color',
                    rc: 'Relative Color',
                    bg: 'Canvas BG',
                    al: 'Ambient Light',
                    dl: 'Directional Light',
                    pl: 'Point Light',
                    sl: 'Spot Light',
                    ttsl: 'TTS Lang',
                    ttsp: 'TTS Pitch',
                    ttsr: 'TTS Rate',
                    ttsv: 'TTS Volume',
                },
                
                vdo: {
                    des: 'Video',
                    vc: 'Video Coding',
                    vf: 'Video Format',
                    vp: 'Video Proportion',
                    vs: 'Video Size',
                    va: 'Video Author',
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
                    dn: 'Dialog Font Name',
                    ds: 'Dialog Font Size',
                    dc: 'Dialog Font Color',
                    dw: 'Dialog Font Weight',
                    dbs: 'Dialog Font Border Size',
                    dbc: 'Dialog Font Border Color',
                    rn: 'Routine Font Name',
                    rs: 'Routine Font Size',
                    rc: 'Routine Font Color',
                    rw: 'Routine Font Weight',
                    rbs: 'Routine Font Border Size',
                    rbc: 'Routine Font Border Color',
                },
                
                key: {
                    des: 'Hot Key',
                    a2: {
                        des: '2d Tools',
                        K: 'A+2',
                        l: 'Line',
                        p: 'Path',
                        a: 'Anchor Point',
                        g: 'Polygon',
                        t: 'Text',
                        e: 'Select',
                        m: 'Move',
                        s: 'Scale',
                        r: 'Rotation',
                        i: 'Align',
                        n: 'Boolean',
                    },
                    
                    q2: {
                        des: '2d Transformation ',
                        K: 'Q+2',
                        xp1: 'X+1',
                        xl1: 'X-1',
                        xp5: 'X+5',
                        xl5: 'X-5',
                        xp10: 'X+10',
                        xl10: 'X-10',
                        
                        yp1: 'Y+1',
                        yl1: 'Y-1',
                        yp5: 'Y+5',
                        yl5: 'Y-5',
                        yp10: 'Y+10',
                        yl10: 'Y-10',
                        
                        wp1: 'W+1',
                        wl1: 'W-1',
                        wp5: 'W+5',
                        wl5: 'W-5',
                        wp10: 'W+10',
                        wl10: 'W-10',
                        
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        rp45: 'R+45',
                        rl45: 'R-45',
                        rp90: 'R+90',
                        rl90: 'R-90',
                        
                        ap1: 'A+1',
                        al1: 'A-1',
                        ap5: 'A+5',
                        al5: 'A-5',
                        ap10: 'A+10',
                        al10: 'A-10',
                    },
                    
                    a3: {
                        des: '3d Tools',
                        K: 'A+3',
                        c: 'Cube',
                        b: 'Ball',
                        o: 'Column',
                        l: 'Line',
                        p: 'Path',
                        a: 'Anchor Point',
                        t: 'Text',
                        e: 'Select',
                        m: 'Move',
                        s: 'Scale',
                        r: 'Rotation',
                        i: 'Align',
                        n: 'Boolean',
                    },
                    
                    m3: {
                        des: '3d Move',
                        K: 'M+3',
                        xmp1: 'X+1',
                        xml1: 'X-1',
                        xmp5: 'X+5',
                        xml5: 'X-5',
                        xmp10: 'X+10',
                        xml10: 'X-10',
                        
                        ymp1: 'Y+1',
                        yml1: 'Y-1',
                        ymp5: 'Y+5',
                        yml5: 'Y-5',
                        ymp10: 'Y+10',
                        yml10: 'Y-10',
                        
                        zmp1: 'Z+1',
                        zml1: 'Z-1',
                        zmp5: 'Z+5',
                        zml5: 'Z-5',
                        zmp10: 'Z+10',
                        zml10: 'Z-10',
                    },
                    
                    s3: {
                        des: '3d Scale',
                        K: 'S+3',
                        xsp1: 'X+1',
                        xsl1: 'X-1',
                        xsp5: 'X+5',
                        xsl5: 'X-5',
                        xsp10: 'X+10',
                        xsl10: 'X-10',
                        
                        ysp1: 'Y+1',
                        ysl1: 'Y-1',
                        ysp5: 'Y+5',
                        ysl5: 'Y-5',
                        ysp10: 'Y+10',
                        ysl10: 'Y-10',
                        
                        zsp1: 'Z+1',
                        zsl1: 'Z-1',
                        zsp5: 'Z+5',
                        zsl5: 'Z-5',
                        zsp10: 'Z+10',
                        zsl10: 'Z-10',
                    },
                    
                    r3: {
                        des: '3d Rotation',
                        K: 'R+3',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        
                        yrp1: 'Y+1',
                        yrl1: 'Y-1',
                        yrp5: 'Y+5',
                        yrl5: 'Y-5',
                        yrp10: 'Y+10',
                        yrl10: 'Y-10',
                        
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                    },
                    
                    v3: {
                        des: 'View Rotation',
                        K: 'V+3',
                        xrp0: 'X=0',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        xrp45: 'X+45',
                        xrl45: 'X-45',
                        
                        zrp0: 'Z=0',
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                        zrp45: 'Z+45',
                        zrl45: 'Z-45',
                    },
                    
                    view: {
                        des: 'View',
                        K: 'A+V',
                        u: 'Up View',
                        d: 'Down View',
                        l: 'Left View',
                        r: 'Right View',
                        f: 'Front View',
                        b: 'Back View',
                        e: 'Free View',
                        c: 'Camara View',
                    },
                    
                    hsb: {
                        des: 'HSB Picker',
                        K: 'A+H',
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        sp1: 'S+1',
                        sl1: 'S-1',
                        sp5: 'S+5',
                        sl5: 'S-5',
                        sp10: 'S+10',
                        sl10: 'S-10',
                        
                        vp1: 'V+1',
                        vl1: 'V-1',
                        vp5: 'V+5',
                        vl5: 'V-5',
                        vp10: 'V+10',
                        vl10: 'V-10',
                    
                        lp1: 'L+1',
                        ll1: 'L+1',
                        lp5: 'L+5',
                        ll5: 'L+5',
                        lp10: 'L+10',
                        ll10: 'L+10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        
                        gp1: 'G+1',
                        gl1: 'G-1',
                        gp5: 'G+5',
                        gl5: 'G-5',
                        gp10: 'G+10',
                        gl10: 'G-10',
                        
                        bp1: 'B+1',
                        bl1: 'B-1',
                        bp5: 'B+5',
                        bl5: 'B-5',
                        bp10: 'B+10',
                        bl10: 'B-10',
                    },
                    
                    lay: {
                        des: 'Layer',
                        K: 'A+R',
                        ad: 'Add Directory',
                        del: 'Delete',
                        hd: 'Hide',
                        up: 'Up',
                        dn: 'Down',
                        tp: 'Top',
                        bt: 'Bottom',
                    },
                },
                
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
            sce: 'シーン',
            spr: 'スプライト',
            ado: 'オーディオ',
            dt: 'データ',
            dia: 'ダイアログ',
            att: '属性',
            tp: 'タイプ',
            cat: 'カテゴリー',
            tit: 'タイトル',
            tag: 'タグ',
            aut: '著者',
            du: '間隔',
            stt: '始まる時間',
            spt: '停止時間',
            ct: 'カウント',
            sz: 'サイズ',
            sd: 'スピード',
            cr: '色',
            el: '要素リスト',
            al: 'アクションリスト',
            ori: '原点',
            ali: '整列',
            isf: '塗りつぶし',
            iss: 'ストローク',
            isp: 'パス',
            isc: '近いです',
            up: 'アップ',
            dn: 'ダウン',
            top: 'トップ',
            bot: 'ボトム',
            hide: '隠れる',
            del: '削除',
            add: '追加',
            
            ds: {
                des: '設計',
                x: 'X X 座標',
                y: 'Y Y 座標',
                w: 'W 幅',
                h: 'H 高さ',
                r: 'R 回転',
                a: 'A 角度カウント',
                lw: 'LW 線幅',
                ls: 'LS 線のスタイル',
                fs: 'FS 塗りつぶしスタイル',
                xp: 'XP X ポジション',
                yp: 'YP Y ポジション',
                zp: 'ZP Z ポジション',
                xs: 'XS X 規模',
                ys: 'YS Y 規模',
                zs: 'ZS Z 規模',
                xr: 'XR X 回転',
                yr: 'YR Y 回転',
                zr: 'ZR Z 回転',
            },
            
            src: {
                des: 'リソース',
                elm: '素子',
                spr: 'スプライト',
                mat: '材料',
                act: 'アクション',
                fac: '面',
                dat: 'データ',
                ado: 'オーディオ',
                vdo: 'ビデオ',
            },
            
            att: {
                des: '属性',
                id: 'ID',
                nm: '名前',
                f: '塗りつぶし',
                s: 'ストローク',
                p: 'パス',
                c: '近いです',
                hd: '隠れる',
                sl: '選択する',
                x: 'X 座標',
                y: 'Y 座標',
                w: '幅',
                h: '高さ',
                r: '回転',
                i: {des:'整列', lt:'左上げ', ct:'センターアップ', rt:'すぐに', lc:'左中央', cc:'センターセンター', rc:'右中央', lb:'左下', cb:'センターボトム', rb:'右下'},
                n: {des:'ブーリアン', p:'もっと', s1:'内側の減算', s2:'外側の減算', m:'乗算', d:'分ける'},
                m: {des:'鏡像', l:'レベル', v:'垂直'},
                cl: {des:'クローン', c:'カウント', m:'移動', s:'規模', r:'回転', m:'鏡像', o:'不透明度'},
                a: 'Angle Count',
                at: {des:'角度タイプ', m:'マイター', r:'ラウンド', b:'ベベル'},
                bt: {des:'ボーダータイプ', ia:'インナーアーク', oa:'アウターアーク', ib:'インナーシャープ', ob:'アウターシャープ'},
                bm: '境界変位',
                fs: {des:'塗りつぶしスタイル', cf:'カラー塗りつぶし', lf:'線形塗りつぶし', rf:'ラジアル塗りつぶし'},
                ls: {des:'ストロークスタイル', cf:'カラーフィル', lf:'線形塗りつぶし', rf:'ラジアル塗りつぶし'},
                lw: '線幅',
                lc: {des:'ラインキャップ', b:'お尻', r:'ラウンド', s:'四角'},
                lj: {des:'ライン結合', m:'マイター', r:'ラウンド', b:'ベベル'},
                sc: 'シャドウカラー',
                sb: 'シャドウブラー',
                sx: 'シャドウオフセットX',
                sy: 'シャドウオフセットY',
                ga: 'グローバルアルファ',
                eb: '편집 상자',
                tc: '글꼴 내용',
                ts: '글꼴 크기',
                tn: {des:'글꼴 이름', simsun:'宋体(SimSun)', yahei:'雅黑(YaHei)', kuaile:'快乐(KuaiLe)', kuhei:'酷黑(KuHei)', pangmen:'庞门(PangMen)', xiaobai:'小白(XiaoBai)', zhenyan:'真言(ZhenYan)', arial:'Arial', verdana:'Verdana', tahoma:'Tahoma'},
                ta: {des:'テキスト 整列', l:'左', c:'中心', r:'右'},
                tb: {des:'テキスト ベースライン', t:'トップ', m:'真ん中', b:'ボトム'},
            },
            
            set: {
                des: '設定',
                sys: {
                    des: 'システム',
                    rs: '構成のリセット',
                    lg: '言語',
                    cbf: 'バッファプール',
                    dm: '設計 モード',
                    ut: '単位',
                    dpi: 'DPI',
                    sid: 'レイヤーを保存 ID',
                    snm: 'レイヤーを保存 名',
                    xy0: 'XY To 0',
                    dc: 'デフォルトの色',
                    rc: '相対色',
                    bg: 'キャンバスの背景色',
                    al: 'アンビエントライト',
                    dl: '指向性ライト',
                    pl: 'ポイントライト',
                    sl: 'スポットライト',
                    ttsl: 'TTS 言語',
                    ttsp: 'TTS ピッチ',
                    ttsr: 'TTS レート',
                    ttsv: 'TTS ボリューム',
                },
                
                vdo: {
                    des: 'ビデオ',
                    vc: 'ビデオコーディング',
                    vf: 'ビデオフォーマット',
                    vp: 'ビデオの割合',
                    vs: 'ビデオサイズ',
                    va: 'ビデオ作者',
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
                    dn: 'ダイアログ名',
                    ds: 'ダイアログサイズ',
                    dc: 'ダイアログ色',
                    dw: 'ダイアログ太い',
                    dbs: 'ダイアログボーダー大きさ',
                    dbc: 'ダイアログボーダー色',
                    rn: '常規フォント名',
                    rs: '常規フォントサイズ',
                    rc: '常規フォント色',
                    rw: '常規フォント太い',
                    rbs: '常規フォントボーダー大きさ',
                    rbc: '常規フォントボーダー色',
                },
                
                key: {
                    des: 'ホットキー',
                    a2: {
                        des: '2d ツール',
                        K: 'A+2',
                        l: 'ライン',
                        p: 'パス',
                        a: 'アンカーポイント',
                        g: 'ポリゴン',
                        t: 'テキスト',
                        e: '選択',
                        m: '移動',
                        s: '規模',
                        r: '回転',
                        i: '整列',
                        n: 'ブール値',
                    },
                    
                    q2: {
                        des: '2d 変換 ',
                        K: 'Q+2',
                        xp1: 'X+1',
                        xl1: 'X-1',
                        xp5: 'X+5',
                        xl5: 'X-5',
                        xp10: 'X+10',
                        xl10: 'X-10',
                        
                        yp1: 'Y+1',
                        yl1: 'Y-1',
                        yp5: 'Y+5',
                        yl5: 'Y-5',
                        yp10: 'Y+10',
                        yl10: 'Y-10',
                        
                        wp1: 'W+1',
                        wl1: 'W-1',
                        wp5: 'W+5',
                        wl5: 'W-5',
                        wp10: 'W+10',
                        wl10: 'W-10',
                        
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        rp45: 'R+45',
                        rl45: 'R-45',
                        rp90: 'R+90',
                        rl90: 'R-90',
                        
                        ap1: 'A+1',
                        al1: 'A-1',
                        ap5: 'A+5',
                        al5: 'A-5',
                        ap10: 'A+10',
                        al10: 'A-10',
                    },
                    
                    a3: {
                        des: '3d ツール',
                        K: 'A+3',
                        c: 'キューブ',
                        b: '玉',
                        o: 'カラム',
                        l: 'ライン',
                        p: 'パス',
                        a: 'アンカーポイント',
                        t: 'テキスト',
                        e: '選択する',
                        m: '移動',
                        s: '規模',
                        r: '回転',
                        n: 'ブール値',
                        i: '整列',
                    },
                    
                    m3: {
                        des: '3d 移動',
                        K: 'M+3',
                        xmp1: 'X+1',
                        xml1: 'X-1',
                        xmp5: 'X+5',
                        xml5: 'X-5',
                        xmp10: 'X+10',
                        xml10: 'X-10',
                        
                        ymp1: 'Y+1',
                        yml1: 'Y-1',
                        ymp5: 'Y+5',
                        yml5: 'Y-5',
                        ymp10: 'Y+10',
                        yml10: 'Y-10',
                        
                        zmp1: 'Z+1',
                        zml1: 'Z-1',
                        zmp5: 'Z+5',
                        zml5: 'Z-5',
                        zmp10: 'Z+10',
                        zml10: 'Z-10',
                    },
                    
                    s3: {
                        des: '3d 規模',
                        K: 'S+3',
                        xsp1: 'X+1',
                        xsl1: 'X-1',
                        xsp5: 'X+5',
                        xsl5: 'X-5',
                        xsp10: 'X+10',
                        xsl10: 'X-10',
                        
                        ysp1: 'Y+1',
                        ysl1: 'Y-1',
                        ysp5: 'Y+5',
                        ysl5: 'Y-5',
                        ysp10: 'Y+10',
                        ysl10: 'Y-10',
                        
                        zsp1: 'Z+1',
                        zsl1: 'Z-1',
                        zsp5: 'Z+5',
                        zsl5: 'Z-5',
                        zsp10: 'Z+10',
                        zsl10: 'Z-10',
                    },
                    
                    r3: {
                        des: '3d 回転',
                        K: 'R+3',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        
                        yrp1: 'Y+1',
                        yrl1: 'Y-1',
                        yrp5: 'Y+5',
                        yrl5: 'Y-5',
                        yrp10: 'Y+10',
                        yrl10: 'Y-10',
                        
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                    },
                    
                    v3: {
                        des: '見る 回転',
                        K: 'V+3',
                        xrp0: 'X=0',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        xrp45: 'X+45',
                        xrl45: 'X-45',
                        
                        zrp0: 'Z=0',
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                        zrp45: 'Z+45',
                        zrl45: 'Z-45',
                    },
                    
                    view: {
                        des: '見る',
                        K: 'A+V',
                        u: 'アップ 見る',
                        d: 'ダウン 見る',
                        l: '左 見る',
                        r: '正しい 見る',
                        f: '前面 見る',
                        b: 'バック 見る',
                        e: '自由 見る',
                        c: 'カメラ 見る',
                    },
                    
                    hsb: {
                        des: 'HSB ピッカー',
                        K: 'A+H',
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        sp1: 'S+1',
                        sl1: 'S-1',
                        sp5: 'S+5',
                        sl5: 'S-5',
                        sp10: 'S+10',
                        sl10: 'S-10',
                        
                        vp1: 'V+1',
                        vl1: 'V-1',
                        vp5: 'V+5',
                        vl5: 'V-5',
                        vp10: 'V+10',
                        vl10: 'V-10',
                    
                        lp1: 'L+1',
                        ll1: 'L+1',
                        lp5: 'L+5',
                        ll5: 'L+5',
                        lp10: 'L+10',
                        ll10: 'L+10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        
                        gp1: 'G+1',
                        gl1: 'G-1',
                        gp5: 'G+5',
                        gl5: 'G-5',
                        gp10: 'G+10',
                        gl10: 'G-10',
                        
                        bp1: 'B+1',
                        bl1: 'B-1',
                        bp5: 'B+5',
                        bl5: 'B-5',
                        bp10: 'B+10',
                        bl10: 'B-10',
                    },
                    
                    lay: {
                        des: '層',
                        K: 'A+R',
                        ad: '追加 ディレクトリ',
                        del: '削除',
                        hd: '隠す',
                        up: 'アップ',
                        dn: 'ダウン',
                        tp: '上',
                        bt: '下',
                    },
                },
                
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
            sce: '장면',
            spr: '스프라이트',
            ado: '오디오',
            dt: '데이터',
            dia: '의견 교환',
            att: '기인하다',
            tp: '유형',
            cat: '범주',
            tit: '제목',
            tag: '꼬리표',
            aut: '작가',
            du: '지속',
            stt: '시작 시간',
            spt: '정지 시간',
            ct: '세다',
            sz: '크기',
            sd: '속도',
            cr: '색상',
            el: '요소 목록',
            al: '작업 목록',
            ori: '기원',
            ali: '맞추다',
            isf: '채우다',
            iss: '뇌졸중',
            isp: '오솔길',
            isc: '닫다',
            up: '올라',
            dn: '하위',
            top: '맨 위',
            bot: '맨 아래',
            hide: '숨다',
            del: '삭제',
            add: '추가하다',
            
            ds: {
                des: '디자인',
                x: 'X X 동등 어구',
                y: 'Y Y 동등 어구',
                w: 'W 너비',
                h: 'H 고도',
                r: 'R 회전',
                a: 'A 각도 수',
                lw: 'LW 선폭',
                ls: 'LS 선 스타일',
                fs: 'FS 채우기 스타일',
                xp: 'XP X 위치',
                yp: 'YP Y 위치',
                zp: 'ZP Z 위치',
                xs: 'XS X 규모',
                ys: 'YS Y 규모',
                zs: 'ZS Z 규모',
                xr: 'XR X 회전',
                yr: 'YR Y 회전',
                zr: 'ZR Z 회전',
            },
            
            src: {
                des: '자원',
                elm: '요소',
                spr: '스프라이트',
                mat: '재료',
                act: '동작',
                fac: '얼굴',
                dat: '데이터',
                ado: '오디오',
                vdo: '동영상',
            },
            
            att: {
                des: '기인하다',
                id: 'ID',
                nm: '이름',
                f: '채우다',
                s: '뇌졸중',
                p: '오솔길',
                c: '닫다',
                hd: '숨다',
                sl: '선택',
                x: 'X 동등 어구',
                y: 'Y 동등 어구',
                w: '너비',
                h: '높은 곳',
                r: '회전',
                i: {des:'정렬', lt:'왼쪽 위로', ct:'중앙 위로', rt:'오른쪽 위로', lc:'왼쪽 중앙', cc:'센터 센터', rc:'오른쪽 중앙', lb:'왼쪽 하단', cb:'중앙 하단', rb:'오른쪽 하단'},
                n: {des:'부울', p:'덧셈', s1:'내부 빼기', s2:'외부 빼기', m:'곱하다', d:'나누다'},
                m: {des:'미러 이미지', l:'수준', v:'수직의'},
                cl: {des:'클론', c:'세다', m:'이동하다', s:'규모', r:'회전', m:'미러 이미지', o:'불투명'},
                a: '각도 세다',
                at: {des:'각도 전형', m:'연귀', r:'둥근', b:'베벨'},
                bt: {des:'국경 전형', ia:'내부 호', oa:'외부 호', ib:'이너 샤프', ob:'아우터 샤프'},
                bm: '국경 배수량',
                fs: {des:'채우기 스타일', cf:'색상 채우기', lf:'선형 채우기', rf:'방사형 채우기'},
                ls: {des:'라인 스타일', cf:'색상 채우기', lf:'선형 채우기', rf:'방사형 채우기'},
                lw: '선폭',
                lc: {des:'라인 캡', b:'박치기', r:'둥근', s:'정사각형'},
                lj: {des:'라인 조인', m:'연귀', r:'둥근', b:'베벨'},
                sc: '그림자 색상',
                sb: '그림자 흐림',
                sx: '그림자 오프셋X',
                sy: '그림자 오프셋Y',
                ga: '글로벌 알파',
                eb: '편집 상자',
                tc: '글꼴 내용',
                ts: '글꼴 크기',
                tn: {des:'글꼴 이름', simsun:'宋体(SimSun)', yahei:'雅黑(YaHei)', kuaile:'快乐(KuaiLe)', kuhei:'酷黑(KuHei)', pangmen:'庞门(PangMen)', xiaobai:'小白(XiaoBai)', zhenyan:'真言(ZhenYan)', arial:'Arial', verdana:'Verdana', tahoma:'Tahoma'},
                ta: {des:'텍스트 정렬', l:'왼쪽', c:'센터', r:'오른쪽'},
                tb: {des:'텍스트 기준선', t:'맨 위', m:'가운데', b:'맨 아래'},
            },
            
            set: {
                des: '환경',
                sys: {
                    des: '체계',
                    rs: '구성 재설정',
                    lg: '언어',
                    cbf: '버퍼 풀',
                    dm: '디자인 모드',
                    ut: '단위',
                    dpi: 'DPI',
                    sid: '레이어 저장 ID',
                    snm: '레이어 저장 명의',
                    xy0: 'XY To 0',
                    dc: '컬러를 기본',
                    rc: '상대적 색상',
                    bg: '캔버스 배경색',
                    al: '앰비언트 라이트',
                    dl: '디렉셔널 라이트',
                    pl: '포인트 라이트',
                    sl: '스포트 라이트',
                    ttsl: 'TTS 언어',
                    ttsp: 'TTS 피치',
                    ttsr: 'TTS 율',
                    ttsv: 'TTS 음량',
                },
                
                vdo: {
                    des: '비디오',
                    vc: '비디오 코딩',
                    vf: '비디오 형식',
                    vp: '비디오 비율',
                    vs: '비디오 크기',
                    va: '비디오 작성자',
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
                    dn: '의견 교환명칭',
                    ds: '의견 교환크기',
                    dc: '의견 교환색깔',
                    dw: '의견 교환굵직하다',
                    dbs: '의견 교환두리크기',
                    dbc: '의견 교환두리색깔',
                    rn: '상규글자체명칭',
                    rs: '상규글자체크기',
                    rc: '상규글자체색깔',
                    rw: '상규글자체굵직하다',
                    rbs: '상규글자체테두리크기',
                    rbc: '상규글자체테두리색깔',
                },
                
                key: {
                    des: '단축키',
                    a2: {
                        des: '2d 도구',
                        K: 'A+2',
                        l: '선',
                        p: '통로',
                        a: '앵커 포인트',
                        g: '다각형',
                        t: '정본',
                        e: '고르다',
                        m: '움직임',
                        s: '규모',
                        r: '회전',
                        i: '정렬',
                        n: '부울',
                    },
                    
                    q2: {
                        des: '2d 변환 ',
                        K: 'Q+2',
                        xp1: 'X+1',
                        xl1: 'X-1',
                        xp5: 'X+5',
                        xl5: 'X-5',
                        xp10: 'X+10',
                        xl10: 'X-10',
                        
                        yp1: 'Y+1',
                        yl1: 'Y-1',
                        yp5: 'Y+5',
                        yl5: 'Y-5',
                        yp10: 'Y+10',
                        yl10: 'Y-10',
                        
                        wp1: 'W+1',
                        wl1: 'W-1',
                        wp5: 'W+5',
                        wl5: 'W-5',
                        wp10: 'W+10',
                        wl10: 'W-10',
                        
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        rp45: 'R+45',
                        rl45: 'R-45',
                        rp90: 'R+90',
                        rl90: 'R-90',
                        
                        ap1: 'A+1',
                        al1: 'A-1',
                        ap5: 'A+5',
                        al5: 'A-5',
                        ap10: 'A+10',
                        al10: 'A-10',
                    },
                    
                    a3: {
                        des: '3d 도구',
                        K: 'A+3',
                        c: '입방체',
                        b: '천체',
                        o: '기둥',
                        l: '선',
                        p: '통로',
                        a: '앵커 포인트',
                        t: '정본',
                        e: '고르다',
                        m: '움직임',
                        s: '규모',
                        r: '회전',
                        i: '정렬',
                        n: '부울',
                    },
                    
                    m3: {
                        des: '3d 움직임',
                        K: 'M+3',
                        xmp1: 'X+1',
                        xml1: 'X-1',
                        xmp5: 'X+5',
                        xml5: 'X-5',
                        xmp10: 'X+10',
                        xml10: 'X-10',
                        
                        ymp1: 'Y+1',
                        yml1: 'Y-1',
                        ymp5: 'Y+5',
                        yml5: 'Y-5',
                        ymp10: 'Y+10',
                        yml10: 'Y-10',
                        
                        zmp1: 'Z+1',
                        zml1: 'Z-1',
                        zmp5: 'Z+5',
                        zml5: 'Z-5',
                        zmp10: 'Z+10',
                        zml10: 'Z-10',
                    },
                    
                    s3: {
                        des: '3d 규모',
                        K: 'S+3',
                        xsp1: 'X+1',
                        xsl1: 'X-1',
                        xsp5: 'X+5',
                        xsl5: 'X-5',
                        xsp10: 'X+10',
                        xsl10: 'X-10',
                        
                        ysp1: 'Y+1',
                        ysl1: 'Y-1',
                        ysp5: 'Y+5',
                        ysl5: 'Y-5',
                        ysp10: 'Y+10',
                        ysl10: 'Y-10',
                        
                        zsp1: 'Z+1',
                        zsl1: 'Z-1',
                        zsp5: 'Z+5',
                        zsl5: 'Z-5',
                        zsp10: 'Z+10',
                        zsl10: 'Z-10',
                    },
                    
                    r3: {
                        des: '3d 회전',
                        K: 'R+3',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        
                        yrp1: 'Y+1',
                        yrl1: 'Y-1',
                        yrp5: 'Y+5',
                        yrl5: 'Y-5',
                        yrp10: 'Y+10',
                        yrl10: 'Y-10',
                        
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                    },
                    
                    v3: {
                        des: '전망 회전',
                        K: 'V+3',
                        xrp0: 'X=0',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        xrp45: 'X+45',
                        xrl45: 'X-45',
                        
                        zrp0: 'Z=0',
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                        zrp45: 'Z+45',
                        zrl45: 'Z-45',
                    },
                    
                    view: {
                        des: '전망',
                        K: 'A+V',
                        u: '올라 전망',
                        d: '하위 전망',
                        l: '왼쪽 전망',
                        r: '오른쪽 전망',
                        f: '전면 전망',
                        b: '뒤 전망',
                        e: '무료 전망',
                        c: '카메라 전망',
                    },
                    
                    hsb: {
                        des: 'HSB 쪼는 사람',
                        K: 'A+H',
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        sp1: 'S+1',
                        sl1: 'S-1',
                        sp5: 'S+5',
                        sl5: 'S-5',
                        sp10: 'S+10',
                        sl10: 'S-10',
                        
                        vp1: 'V+1',
                        vl1: 'V-1',
                        vp5: 'V+5',
                        vl5: 'V-5',
                        vp10: 'V+10',
                        vl10: 'V-10',
                    
                        lp1: 'L+1',
                        ll1: 'L+1',
                        lp5: 'L+5',
                        ll5: 'L+5',
                        lp10: 'L+10',
                        ll10: 'L+10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        
                        gp1: 'G+1',
                        gl1: 'G-1',
                        gp5: 'G+5',
                        gl5: 'G-5',
                        gp10: 'G+10',
                        gl10: 'G-10',
                        
                        bp1: 'B+1',
                        bl1: 'B-1',
                        bp5: 'B+5',
                        bl5: 'B-5',
                        bp10: 'B+10',
                        bl10: 'B-10',
                    },
                    
                    lay: {
                        des: '층',
                        K: 'A+R',
                        ad: '더하다 예배 규칙서',
                        del: '삭제',
                        hd: '숨는 장소',
                        up: '올라',
                        dn: '하위',
                        tp: '상단',
                        bt: '밑바닥',
                    },
                },
                
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
            sce: 'पर्दे',
            spr: 'स्प्राइट',
            ado: 'ऑडियो',
            dt: 'डेटा',
            dia: 'संवाद',
            att: 'गुण',
            tp: 'प्रकार',
            cat: 'श्रेणी',
            tit: 'शीर्षक',
            tag: 'टैग',
            aut: 'लेखक',
            du: 'अवधि',
            stt: 'समय शुरू',
            spt: 'बंद करो समय',
            ct: 'काउंट',
            sz: 'आकार',
            sd: 'स्पीड',
            cr: 'रंग',
            el: 'तत्व सूची',
            al: 'कार्रवाई की सूची',
            ori: 'मूल',
            ali: 'संरेखित करें',
            isf: 'भरना',
            iss: 'स्ट्रोक',
            isp: 'पथ',
            isc: 'बंद करे',
            up: 'यूपी',
            dn: 'नीचे',
            top: 'शीर्ष',
            bot: 'तल',
            hide: 'छुपाएं',
            del: 'हटाएं',
            add: 'जोड़ें',
            
            ds: {
                des: 'डिज़ाइन',
                x: 'X X निर्देशांक',
                y: 'Y Y निर्देशांक',
                w: 'W चौड़ाई',
                h: 'H ऊंचाई',
                r: 'R रोटेशन',
                a: 'A कोण गणना',
                lw: 'LW रेखा की चौडाई',
                ls: 'LS रेखा शैली',
                fs: 'FS शैली भरें',
                xp: 'XP X स्थान',
                yp: 'YP Y स्थान',
                zp: 'ZP Z स्थान',
                xs: 'XS X स्केल',
                ys: 'YS Y स्केल',
                zs: 'ZS Z स्केल',
                xr: 'XR X रोटेशन',
                yr: 'YR Y रोटेशन',
                zr: 'ZR Z रोटेशन',
            },
            
            src: {
                des: 'साधन',
                elm: 'तत्त्व',
                spr: 'स्प्राइट',
                mat: 'सामग्री',
                act: 'कार्रवाई',
                fac: 'चेहरा',
                dat: 'डेटा',
                ado: 'ऑडियो',
                vdo: 'वीडियो',
            },
            
            att: {
                des: 'विशेषता',
                id: 'ID',
                nm: 'नाम',
                f: 'भरना',
                s: 'स्ट्रोक',
                p: 'पथ',
                c: 'बंद करे',
                hd: 'छुपाएं',
                sl: 'चुनते हैं',
                x: 'X कोआर्डिनेट',
                y: 'Y कोआर्डिनेट',
                w: 'चौड़ाई',
                h: 'कद',
                r: 'रोटेशन',
                i: {des:'संरेखित करें', lt:'छोड़ दिया', ct:'केंद्र ऊपर', rt:'सीधा ऊपर', lc:'बायां केंद्र', cc:'केंद्र केंद्र', rc:'दायां केंद्र', lb:'बायां नीचे', cb:'केंद्र नीचे', rb:'दायां तल'},
                n: {des:'बूलियन', p:'अधिक', s1:'इनर घटाना', s2:'बाहरी घटाना', m:'गुणा', d:'विभाजित'},
                m: {des:'दर्पण छवि', l:'स्तर', v:'लंबवत'},
                cl: {des:'क्लोन', c:'काउंट', m:'हटो', s:'स्केल', r:'रोटेशन', m:'दर्पण छवि', o:'पारदर्शिता'},
                a: 'कोण काउंट',
                at: {des:'कोण प्रकार', m:'मिटर', r:'गोल', b:'बेवल'},
                bt: {des:'बॉर्डर प्रकार', ia:'आंतरिक चाप', oa:'बाहरी चाप', ib:'आंतरिक तेज', ob:'बाहरी तेज'},
                bm: 'बॉर्डर विस्थापन',
                fs: {des:'शैली भरें', cf:'रंग भरें', lf:'रैखिक भरण', rf:'रैखिक भरण'},
                ls: {des:'रेखा शैली', cf:'रंग भरें', lf:'रैखिक भरण', rf:'रेडियल फिल'},
                lw: 'रेखा चौड़ाई',
                lc: {des:'रेखा टोपी', b:'बट', r:'गोल', s:'चौक'},
                lj: {des:'रेखा शामिल हों', m:'मिटर', r:'गोल', b:'बेवल'},
                sc: 'छाया रंग',
                sb: 'छाया धुंधला',
                sx: 'छाया ऑफसेटX',
                sy: 'शैडो ऑफ़सेटY',
                ga: 'वैश्विक अल्फा',
                eb: 'बॉक्स संपादित करें',
                tc: 'फ़ॉन्ट सामग्री',
                ts: 'फ़ॉन्ट आकार',
                tn: {des:'फ़ॉन्ट का नाम', simsun:'宋体(SimSun)', yahei:'雅黑(YaHei)', kuaile:'快乐(KuaiLe)', kuhei:'酷黑(KuHei)', pangmen:'庞门(PangMen)', xiaobai:'小白(XiaoBai)', zhenyan:'真言(ZhenYan)', arial:'Arial', verdana:'Verdana', tahoma:'Tahoma'},
                ta: {des:'पाठ संरेखित', l:'छोडा', c:'केंद्र', r:'दायां'},
                tb: {des:'टेक्स्ट बेसलाइन', t:'शीर्ष', m:'मध्य', b:'तल'},
            },
            
            set: {
                des: 'सेटिंग',
                sys: {
                    des: 'प्रणाली',
                    rs: 'कॉन्फ़िगरेशन रीसेट करें',
                    lg: 'भाषा',
                    cbf: 'बफर पूल',
                    dm: 'डिजाइन मोड',
                    ut: 'इकाई',
                    dpi: 'DPI',
                    sid: 'परत बचाओ ID',
                    snm: 'परत बचाओ नाम',
                    xy0: 'XY To 0',
                    dc: 'डिफ़ॉल्ट रंग',
                    rc: 'सापेक्ष रंग',
                    bg: 'कैनवास पृष्ठभूमि रंग',
                    al: 'परिवेश प्रकाश',
                    dl: 'दिशात्मक प्रकाश',
                    pl: 'प्वाइंट लाइट',
                    sl: 'स्पॉट लाइट',
                    ttsl: 'TTS भाषा',
                    ttsp: 'TTS पिच',
                    ttsr: 'TTS दर',
                    ttsv: 'TTS आयतन',
                },
                
                vdo: {
                    des: 'वीडियो',
                    vc: 'वीडियो कोडिंग',
                    vf: 'वीडियो फार्मेट',
                    vp: 'वीडियो अनुपात',
                    vs: 'वीडियो का आकार',
                    va: 'वीडियो लेखक',
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
                    dn: 'संवाद नाम',
                    ds: 'संवाद आकार',
                    dc: 'संवाद रंग',
                    dw: 'संवाद वजन',
                    dbs: 'संवाद सीमा आकार',
                    dbc: 'संवाद सीमा रंग',
                    rn: 'नियमित फ़ॉन्ट नाम',
                    rs: 'नियमित फ़ॉन्ट आकार',
                    rc: 'नियमित फ़ॉन्ट रंग',
                    rw: 'नियमित फ़ॉन्ट वजन',
                    rbs: 'नियमित फ़ॉन्ट सीमा आकार',
                    rbc: 'नियमित फ़ॉन्ट सीमा रंग',
                },
                
                key: {
                    des: 'गर्म कुंजी',
                    a2: {
                        des: '2d उपकरण',
                        K: 'A+2',
                        l: 'रेखा',
                        p: 'पथ',
                        a: 'एंकर बिंदु',
                        g: 'बहुभुज',
                        t: 'टेक्स्ट',
                        e: 'चुनते हैं',
                        m: 'हटो',
                        s: 'स्केल',
                        r: 'रोटेशन',
                        i: 'संरेखित',
                        n: 'बूलियन',
                    },
                    
                    q2: {
                        des: '2d परिवर्तन ',
                        K: 'Q+2',
                        xp1: 'X+1',
                        xl1: 'X-1',
                        xp5: 'X+5',
                        xl5: 'X-5',
                        xp10: 'X+10',
                        xl10: 'X-10',
                        
                        yp1: 'Y+1',
                        yl1: 'Y-1',
                        yp5: 'Y+5',
                        yl5: 'Y-5',
                        yp10: 'Y+10',
                        yl10: 'Y-10',
                        
                        wp1: 'W+1',
                        wl1: 'W-1',
                        wp5: 'W+5',
                        wl5: 'W-5',
                        wp10: 'W+10',
                        wl10: 'W-10',
                        
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        rp45: 'R+45',
                        rl45: 'R-45',
                        rp90: 'R+90',
                        rl90: 'R-90',
                        
                        ap1: 'A+1',
                        al1: 'A-1',
                        ap5: 'A+5',
                        al5: 'A-5',
                        ap10: 'A+10',
                        al10: 'A-10',
                    },
                    
                    a3: {
                        des: '3d उपकरण',
                        K: 'A+3',
                        c: 'घन',
                        b: 'गेंद',
                        o: 'स्तंभ',
                        l: 'रेखा',
                        p: 'पथ',
                        a: 'एंकर बिंदु',
                        t: 'टेक्स्ट',
                        e: 'चुनते हैं',
                        m: 'हटो',
                        s: 'स्केल',
                        r: 'रोटेशन',
                        i: 'संरेखित',
                        n: 'बूलियन',
                    },
                    
                    m3: {
                        des: '3d हटो',
                        K: 'M+3',
                        xmp1: 'X+1',
                        xml1: 'X-1',
                        xmp5: 'X+5',
                        xml5: 'X-5',
                        xmp10: 'X+10',
                        xml10: 'X-10',
                        
                        ymp1: 'Y+1',
                        yml1: 'Y-1',
                        ymp5: 'Y+5',
                        yml5: 'Y-5',
                        ymp10: 'Y+10',
                        yml10: 'Y-10',
                        
                        zmp1: 'Z+1',
                        zml1: 'Z-1',
                        zmp5: 'Z+5',
                        zml5: 'Z-5',
                        zmp10: 'Z+10',
                        zml10: 'Z-10',
                    },
                    
                    s3: {
                        des: '3d स्केल',
                        K: 'S+3',
                        xsp1: 'X+1',
                        xsl1: 'X-1',
                        xsp5: 'X+5',
                        xsl5: 'X-5',
                        xsp10: 'X+10',
                        xsl10: 'X-10',
                        
                        ysp1: 'Y+1',
                        ysl1: 'Y-1',
                        ysp5: 'Y+5',
                        ysl5: 'Y-5',
                        ysp10: 'Y+10',
                        ysl10: 'Y-10',
                        
                        zsp1: 'Z+1',
                        zsl1: 'Z-1',
                        zsp5: 'Z+5',
                        zsl5: 'Z-5',
                        zsp10: 'Z+10',
                        zsl10: 'Z-10',
                    },
                    
                    r3: {
                        des: '3d रोटेशन',
                        K: 'R+3',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        
                        yrp1: 'Y+1',
                        yrl1: 'Y-1',
                        yrp5: 'Y+5',
                        yrl5: 'Y-5',
                        yrp10: 'Y+10',
                        yrl10: 'Y-10',
                        
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                    },
                    
                    v3: {
                        des: 'राय रोटेशन',
                        K: 'V+3',
                        xrp0: 'X=0',
                        xrp1: 'X+1',
                        xrl1: 'X-1',
                        xrp5: 'X+5',
                        xrl5: 'X-5',
                        xrp10: 'X+10',
                        xrl10: 'X-10',
                        xrp45: 'X+45',
                        xrl45: 'X-45',
                        
                        zrp0: 'Z=0',
                        zrp1: 'Z+1',
                        zrl1: 'Z-1',
                        zrp5: 'Z+5',
                        zrl5: 'Z-5',
                        zrp10: 'Z+10',
                        zrl10: 'Z-10',
                        zrp45: 'Z+45',
                        zrl45: 'Z-45',
                    },
                    
                    view: {
                        des: 'राय',
                        K: 'A+V',
                        u: 'यूपी राय',
                        d: 'नीचे राय',
                        l: 'बाएं राय',
                        r: 'सही राय',
                        f: 'मोर्चा राय',
                        b: 'वापस राय',
                        e: 'मुक्त राय',
                        c: 'कैमरा राय',
                    },
                    
                    hsb: {
                        des: 'HSB बीनने',
                        K: 'A+H',
                        hp1: 'H+1',
                        hl1: 'H-1',
                        hp5: 'H+5',
                        hl5: 'H-5',
                        hp10: 'H+10',
                        hl10: 'H-10',
                        
                        sp1: 'S+1',
                        sl1: 'S-1',
                        sp5: 'S+5',
                        sl5: 'S-5',
                        sp10: 'S+10',
                        sl10: 'S-10',
                        
                        vp1: 'V+1',
                        vl1: 'V-1',
                        vp5: 'V+5',
                        vl5: 'V-5',
                        vp10: 'V+10',
                        vl10: 'V-10',
                    
                        lp1: 'L+1',
                        ll1: 'L+1',
                        lp5: 'L+5',
                        ll5: 'L+5',
                        lp10: 'L+10',
                        ll10: 'L+10',
                        
                        rp1: 'R+1',
                        rl1: 'R-1',
                        rp5: 'R+5',
                        rl5: 'R-5',
                        rp10: 'R+10',
                        rl10: 'R-10',
                        
                        gp1: 'G+1',
                        gl1: 'G-1',
                        gp5: 'G+5',
                        gl5: 'G-5',
                        gp10: 'G+10',
                        gl10: 'G-10',
                        
                        bp1: 'B+1',
                        bl1: 'B-1',
                        bp5: 'B+5',
                        bl5: 'B-5',
                        bp10: 'B+10',
                        bl10: 'B-10',
                    },
                    
                    lay: {
                        des: 'परत',
                        K: 'A+R',
                        ad: 'जोड़ें निर्देशिका',
                        del: 'हटाएं',
                        hd: 'छुपाएं',
                        up: 'यूपी',
                        dn: 'नीचे',
                        tp: 'ऊपर',
                        bt: 'तल',
                    },
                },
                
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
        'set.sys.dc': 'HSB',
        'set.sys.rc': 'HSB',
        'set.sys.bg': 'HSB',
        'set.sys.al': 'HSB',
        'set.vdo.vc': 'vp8,h264,webm,mpeg,daala',
        'set.vdo.vf': 'mp4,webm',
        'set.vdo.vp': '4:3,16:9,9:16',
        'set.vdo.vs': '480P,720P,1080P',
        'set.ft.otn': 'FONT',
        'set.ft.ots': '12px,14px,16px,18px,20px,24px,28px,32px,36px,42px,48px,56px,72px',
        'set.ft.otc': 'HSB',
        'set.ft.otw': '0,1',
        'set.ft.otbs': '1px,2px,3px,4px,5px,6px',
        'set.ft.otbc': 'HSB',
        'set.ft.stn': 'FONT',
        'set.ft.sts': '12px,14px,16px,18px,20px,24px,28px,32px,36px,42px,48px,56px,72px',
        'set.ft.stc': 'HSB',
        'set.ft.stw': '0,1',
        'set.ft.stbs': '1px,2px,3px,4px,5px,6px',
        'set.ft.stbc': 'HSB',
        'set.ft.dn': 'FONT',
        'set.ft.ds': '12px,14px,16px,18px,20px,24px,28px,32px,36px,42px,48px,56px,72px',
        'set.ft.dc': 'HSB',
        'set.ft.dw': '0,1',
        'set.ft.dbs': '1px,2px,3px,4px,5px,6px',
        'set.ft.dbc': 'HSB',
        'set.ft.rn': 'FONT',
        'set.ft.rs': '12px,14px,16px,18px,20px,24px,28px,32px,36px,42px,48px,56px,72px',
        'set.ft.rc': 'HSB',
        'set.ft.rw': '0,1',
        'set.ft.rbs': '1px,2px,3px,4px,5px,6px',
        'set.ft.rbc': 'HSB',
        'bm': 'bgm/[CC0]MixKit - First Time-459.mp3,bgm/[CCB]Alexiaction - Cinematic Dubstep.mp3,bgm/[CCB]Aliaksei Yukhnevich - Epic Inspiration.mp3,bgm/[CCB]ANtarcticbreeze - Epic Inspiring Cinematic Piano.mp3,bgm/[CCB]BenSound - A New Beginning.mp3,bgm/[CCB]BenSound - Creative Minds.mp3,bgm/[CCB]BenSound - Little Idea.mp3,bgm/[CCB]Makesound - Epic Adventure.mp3,bgm/[CCB]Sarah De Carlo - Ghost World.mp3,bgm/[CCB]SoundRiver - The Epic Inspiration.mp3,bgm/[CCB]SoundRiver - The Epic Inspire.mp3,bgm/[CCB]Steve Raphael - Epic Emotional.mp3,bgm/[CCB]Timofiy Starenkov - The Epicness.mp3,bgm/[CCB]Timofiy Starenkov - The Journey.mp3,bgm/[CCB]VIVAproduction - Inspiring Epic Fly.mp3',
    },
    
    init: (A) => {
        var a,b,c,d,e,f,l,n,s,y,z;
        RV.ii();
        A = A || '';
        s = '<div id="rvTMP" style="display:none;"></div><div id="rvIB" style="display:none"></div>';
        
        // workspace
        s += '<div id="rvLB"><div id="rvCvsBox"><canvas id="rvCvs3d" class="h_"></canvas><canvas id="rvCvs3dTmp" class="h_"></canvas><canvas id="rvCvs2d"></canvas><canvas id="rvCvsHide" class="h_"></canvas><canvas id="rvCvsTmp" class="h_"></canvas><canvas id="rvCvsIco" class="h_"></canvas></div><div id="rvTL" rs="1"></div></div><div id="rvRB"><div id="rvRB0"></div><div id="rvRB1"></div><div id="rvRB2"></div></div><video id="rvVdo" onclick="this.play()"></video><div id="rvStt"></div><div id="rvTB" class="i_" onclick="if(this.className.indexOf(\'i_\')!=-1){RV.sn(this,\'n_\');RV.cdm();}else{RV.hn(this,\'i_\');this.innerHTML=RV.e36(\'!rdiv!wclass!e!prvTbT!p!tT!r!udiv!t\',2);}"><div class="rvTbT">T</div></div>';
        
        // editor window
        s += '<div id="rvEB" class="h_" mn="1"><div class="rvEbT"><div class="rvEbLab" ondblclick="RV.ED.value=RV.e36(\'t1!w正标题!zt2!w副标题!zd1!w时长!ztp!w类型!znm!w名称!zvl!w数值!zpi!w图片!zfa!w表情!zac!w动作!zwd!w台词!zd2!w时长\',2)">编辑器(Editor)</div><div class="rvEbX" onclick="RV.hn(this.parentNode.parentNode)">X</div><div class="rvEbOk" onclick="var a=RV.ED.value;if(a==\'exp1\') RV.ED.value=RV.exp1;else if(a==\'exp2\') RV.ED.value=RV.exp2; else RV.adt(a)">OK</div></div><textarea id="rvED" onmouseover="this.focus()" onfocus="RV.KO.kl=1" onblur="RV.KO.kl=0" placeholder="输入 exp1 或 exp2 提交可使用范例数据预览"></textarea></div>';
        
        // hsb window
        s += '<div id="rvHsb" class="h_" mn="1"><div id="rvHsbCb" onclick="RV.hsb()"><div id="rvHsbH"></div><div id="rvHsbS"></div><div id="rvHsbB"></div><div id="rvHsbCS" class="CS1"><div class="rvHsbCS1"></div><div class="rvHsbCS2"></div></div></div><div id="rvHsbHue" onclick="RV.shue()"></div><div id="rvHsbLRP"><div id="rvHsbCf"><div id="rvHsbCfbg" onclick="RV.FM=\'CF\';RV.SGN=this"></div></div><div id="rvHsbLf" class="h_"><div id="rvHsbLfC"><div id="rvHsbLfbg" onclick="RV.FM=\'LF\';RV.slf()" ondblclick="RV.alf(this)"></div><div id="rvHsbLf_0" class="rvHsbLRc" style="background-color:#f00;" onmousedown="RV.slr(this)" onclick="RV.slr(this)" ondblclick="RV.dlf(this)" mn="1"></div><div id="rvHsbLf_1" class="rvHsbLRc" style="background-color:#ff0;" onmousedown="RV.slr(this)" onclick="RV.slr(this)" ondblclick="RV.dlf(this)" mn="1"></div></div><div id="rvHsbLfP" class="rvHsbLRPv" ondblclick="RV.eds(this)" onblur="RV.slf();RV.eds2(this)" title="位置(Position)">0</div><div id="rvHsbLfA" class="rvHsbLRPv" ondblclick="RV.eds(this)" onblur="RV.slf();RV.eds2(this)" title="角度(Angle)">0</div></div><div id="rvHsbRf" class="h_"><div id="rvHsbRfC"><div id="rvHsbRfbg" onclick="RV.FM=\'RF\';RV.srf()" ondblclick="RV.arf(this)"></div><div id="rvHsbRf_0" class="rvHsbLRc" style="background-color:#f00;" onmousedown="RV.slr(this)" onclick="RV.slr(this)" ondblclick="RV.drf(this)" mn="1"></div><div id="rvHsbRf_1" class="rvHsbLRc" style="background-color:#ff0;" onmousedown="RV.slr(this)" onclick="RV.slr(this)" ondblclick="RV.drf(this)" mn="1"></div></div><div id="rvHsbRfP" class="rvHsbLRPv" ondblclick="RV.eds(this)" onblur="RV.srf();RV.eds2(this)" title="位置(Position)">0</div><div id="rvHsbRfBeg" class="rvHsbLRPv" onclick="RV.sh(\'rvHsbRfBegB\')" title="起点(Begin)">BG</div><div id="rvHsbRfEnd" class="rvHsbLRPv" onclick="RV.sh(\'rvHsbRfEndB\')" title="终点(End)">ED</div></div><div id="rvHsbPf" class="h_"><div id="rvHsbPfbg" onclick="RV.FM=\'PF\';RV.spf()"></div><div id="rvHsbPfImg" class="rvHsbLRPv" title="图案(Image)">IMG</div><div id="rvHsbPfRp" class="rvHsbLRPv" title="重复(Repeat)">RP</div></div><div id="rvHsbBtn" onclick="RV.cfm(this)" title="填充模式(Fill Mode)">CF</div></div><div id="rvHsbRfBegB" class="h_"><div id="rvHsbRfBegB_x1" class="rvHsbRfVl" ondblclick="RV.eds(this)" onblur="RV.srf();RV.eds2(this)" title="x1">50</div><div id="rvHsbRfBegB_y1" class="rvHsbRfVl" ondblclick="RV.eds(this)" onblur="RV.srf();RV.eds2(this)" title="y1">50</div><div id="rvHsbRfBegB_r1" class="rvHsbRfVl" ondblclick="RV.eds(this)" onblur="RV.srf();RV.eds2(this)" title="r1">0</div></div><div id="rvHsbRfEndB" class="h_"><div id="rvHsbRfEndB_x2" class="rvHsbRfVl" ondblclick="RV.eds(this)" onblur="RV.srf();RV.eds2(this)" title="x2">50</div><div id="rvHsbRfEndB_y2" class="rvHsbRfVl" ondblclick="RV.eds(this)" onblur="RV.srf();RV.eds2(this)" title="y2">50</div><div id="rvHsbRfEndB_r2" class="rvHsbRfVl" ondblclick="RV.eds(this)" onblur="RV.srf();RV.eds2(this)" title="r2">100</div></div><select id="rvHsbPfRpIl" onclick="RV.spf()" onchange="RV.spf()" class="h_" title="图案(Image)"><option value="$Pcb">Checkerboard</option><option value="$Psl_x1">Scan Line x1</option><option value="$Psl_y1">Scan Line y1</option><option value="$Psl_x2">Scan Line x2</option><option value="$Psl_y2">Scan Line y2</option><option value="$Psl_xy">Scan Line xy</option><option value="$Psl_yx">Scan Line yx</option></select><select id="rvHsbPfRpRl" onclick="RV.spf()" onchange="RV.spf()" class="h_" title="重复(Repeat)"><option value="r">Repeat</option><option value="x">Repeat-x</option><option value="y">Repeat-y</option><option value="n">No-Repeat</option></select><div id="rvHsbV"><div class="rvHsbVl"><div id="rvHsbC1"></div><div id="rvHsbC2" style="background-color:#f00;" onclick="this.previousSibling.style.backgroundColor=this.style.backgroundColor"></div><div id="rvHsbOk" onclick="RV.hn(RV.HSB);RV.IKEY=null">OK</div></div><div class="rvHsbVl"><div class="rvHsbN">H</div><div class="rvHsbT"><input id="rvHsbHv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div><div class="rvHsbN">S</div><div class="rvHsbT"><input id="rvHsbSv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div><div class="rvHsbN">B</div><div class="rvHsbT"><input id="rvHsbBv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div></div><div class="rvHsbVl"><div class="rvHsbN">H</div><div class="rvHsbT"><input id="rvHslHv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div><div class="rvHsbN">S</div><div class="rvHsbT"><input id="rvHslSv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div><div class="rvHsbN">L</div><div class="rvHsbT"><input id="rvHslLv" type="text" value="50" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div></div><div class="rvHsbVl"><div class="rvHsbN">R</div><div class="rvHsbT"><input id="rvRgbRv" type="text" value="255" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div><div class="rvHsbN">G</div><div class="rvHsbT"><input id="rvRgbGv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div><div class="rvHsbN">B</div><div class="rvHsbT"><input id="rvRgbBv" type="text" value="0" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div></div><div class="rvHsbVl"><div class="rvHsbN">A</div><div class="rvHsbT"><input id="rvHsbAv" type="text" value="100" onmouseover="this.focus()" onchange="RV.hsbcv(this);if(RV.SGN){RV.SGN.setAttribute(\'a\',this.value)}"/></div><div id="rvHexCt" class="rvHsbN" onclick="RV.mi(this)" key="HEX,HEX2,RGB,RGB2,RGBA,HSB,HSB2,HSBA,HSL,HSL2,HSLA,RC,LF,RF,PF">HEX</div><div class="rvHsbT rvHsbCv"><input id="rvHexCv" type="text" value="#FF0000" onmouseover="this.focus()" onchange="RV.hsbcv(this)"/></div></div></div></div>';
        
        // float window
        s += '<div id="rvFwin" class="rvLabB h_" mn="1"><div class="rvLabT"><div class="rvLab">浮窗</div><div class="rvLabX" onclick="RV.hn(this.parentNode.parentNode)">X</div></div><div class="rvLabC"></div></div>';
        
        // save window
        s += '<div id="rvSaveW" class="h_" mn="1"><div id="rvSaveB" title="预览(Preview)"><canvas id="rvSavePV"></canvas></div><div class="rvSaveL"><div class="rvSaveAtt" title="宽度(Width)"><div class="rvSaveAttN">W:</div><input type="text" id="rvSaveAttW" class="rvSaveAttV" value="0" onchange="RV.CVP.width=this.value"/></div><div class="rvSaveAtt" title="高度(Height)"><div class="rvSaveAttN">H:</div><input type="text" id="rvSaveAttH" class="rvSaveAttV" value="0" onchange="RV.CVP.height=this.value"/></div><div class="rvSaveAtt rvSaveAttQ" title="质量(Quality)"><div class="rvSaveAttN">Q:</div><input type="text" id="rvSaveAttQ" class="rvSaveAttV" value="80"/></div><div class="rvSaveAtt rvSaveAttT" title="类型(Type)"><select id="rvSaveAttT"><option value="h5e">h5e</option><option value="h5s">h5s</option><option value="h5v">h5v</option><option value="jpg">jpg</option><option value="png">png</option><option value="gif">gif</option><option value="bmp">bmp</option></select></div></div><div class="rvSaveL"><div class="rvSaveAtt rvSaveAttF" title="文件名(File Name)"><div class="rvSaveAttN">FN:</div><input type="text" id="rvSaveAttF" class="rvSaveAttV" value="new_file"/></div><div class="rvSaveBtn" onclick="RV.save()">OK</div><div class="rvSaveBtn" onclick="RV.hn(\'rvSaveW\')">NO</div></div></div>';
        
        // attribute window
        s += '<div id="rvAttW" class="h_" mn="1"></div>';
        
        // msg window
        s += '<div id="rvMSG" class="i_" onmouseover="RV.sn(this,\'n_\')" onmouseout="RV.hn(this,\'i_\')"></div>';
        
        n = RV.an(A, 'RyView'); // ryview root node
        n.innerHTML = s;
        
        RV.CV3 = RV.gn('rvCvs3d');
        RV.CT3 = RV.CV3.getContext('webgl');
        RV.CV3T = RV.gn('rvCvs3dTmp');
        RV.CT3T = RV.CV3T.getContext('webgl');
        RV.CVX = RV.gn('rvCvs2d');
        RV.CTX = RV.CVX.getContext('2d');
        RV.CVH = RV.gn('rvCvsHide');
        RV.CTH = RV.CVH.getContext('2d');
        RV.CVT = RV.gn('rvCvsTmp');
        RV.CTT = RV.CVT.getContext('2d');
        RV.CVP = RV.gn('rvSavePV');
        RV.CTP = RV.CVP.getContext('2d');
        RV.CVI = RV.gn('rvCvsIco');
        RV.CTI = RV.CVI.getContext('2d');
        RV.EB = RV.gn('rvEB');
        RV.ED = RV.gn('rvED');
        RV.HSB = RV.gn('rvHsb');
        RV.FW = RV.gn('rvFwin');
        
        RV.CVI.width = 100;
        RV.CVI.height = 100;
        RV.CVI.style.width = '100px';
        RV.CVI.style.height = '100px';
        
        document.body.onmouseover = RV.mo;
        document.body.onmousedown = RV.md;
        document.body.onmousemove = RV.mm;
        document.body.onmouseup = RV.mu;
        document.body.onmouseout = RV.mt;
        document.body.oncontextmenu = RV.rk;
        document.body.onkeydown = RV.kd;
        document.body.onkeyup = RV.ku;
        document.body.onresize = RV.rw;
        
        RV.CVS = {};
        l = RV.CBF = parseInt(RV.CBF || RV.ini2.set.sys.cbf) || 10; // canvas buffer
        if(l > 100) l = 100;
        for(z=0; z<l; z++) {
            a = document.createElement('canvas');
            b = a.getContext('2d');
            a.className = 'h_';
            a.width = RV.cw;
            a.height = RV.ch*50;
            a.style.width = RV.cw2+'px';
            a.style.height = RV.ch2+'px';
            RV.gn('rvCvsBox').appendChild(a);
            RV.CVS['cv'+z] = a;
            RV.CVS['ctx'+z] = b;
        }
        
        requestAnimationFrame = requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame || msRequestAnimationFrame;
        cancelAnimationFrame = cancelAnimationFrame || webkitCancelAnimationFrame || mozCancelAnimationFrame || msCancelAnimationFrame;
        
        if(RV.css) RV.ac('RyView', RV.e36(RV.css, 2));
        if(RV.ini2.set.sys.bg) RV.gn('rvCvsBox').style.backgroundColor = RV.ini2.set.sys.bg;
        RV.DM = (RV.ini2.set.sys.dm || '2d').toLowerCase();
        if(RV.DM == '2d') RV.UT = parseInt(RV.ini2.set.sys.dpi) || 72;
        else RV.UT = (RV.ini2.set.sys.ut || 'm').toLowerCase();
        RV.LG = RV.ini2.set.sys.lg || 'cn';
        RV.DC = RV.ini2.set.sys.dc || RV.DC;
        RV.RC = RV.ini2.set.sys.rc || RV.RC;
        RV.DC = RV.cgc(RV.DC);
        RV.RC = RV.cgc(RV.RC);
        RV.TL = 'e';
        RV.ORI = 1;
        RV.ALI = 1;
        RV.DSX = parseInt(RV.ini2.ds.x) || 0;
        RV.DSY = parseInt(RV.ini2.ds.y) || 0;
        RV.DSW = parseInt(RV.ini2.ds.w) || 0;
        RV.DSH = parseInt(RV.ini2.ds.h) || 0;
        RV.DSR = parseInt(RV.ini2.ds.r) || 0;
        RV.DSA = parseInt(RV.ini2.ds.a) || 4;
        RV.DSLW = parseInt(RV.ini2.ds.lw) || 0;
        RV.DSLS = RV.ini2.ds.ls || '#000';
        RV.DSFS = RV.ini2.ds.fs || '#888';
        RV.DSXP = parseInt(RV.ini2.ds.xp) || 0;
        RV.DSYP = parseInt(RV.ini2.ds.yp) || 0;
        RV.DSZP = parseInt(RV.ini2.ds.zp) || 0;
        RV.DSXS = parseInt(RV.ini2.ds.xs) || 1;
        RV.DSYS = parseInt(RV.ini2.ds.ys) || 1;
        RV.DSZS = parseInt(RV.ini2.ds.zs) || 1;
        RV.DSXR = parseInt(RV.ini2.ds.xr) || 0;
        RV.DSYR = parseInt(RV.ini2.ds.yr) || 0;
        RV.DSZR = parseInt(RV.ini2.ds.zr) || 0;
        
        RV.ntl();
        RV.nm();
        RV.ado();
        RV.adt();
        RV.log('init');
        RV.mc('RyView');
        
    },
    
    src: { // resources
        ico: {
            des: 'icon',
            '$Isce1': 'E2d t:g; a:4; f:1; x:2; y:4; w:20; h:4; r:15; fs:hsba(.:.:-25:.).. t:g; a:4; f:1; x:2; y:10; w:20; h:12; fs:hsba(.:.:-25:.)',
            '$Isce2': 'E2d t:g; a:4; f:1; x:2; y:4; w:20; h:4; r:15; fs:hsba(.:.:-5:.).. t:g; a:4; f:1; x:2; y:10; w:20; h:12; fs:hsba(.:.:-5:.)',
            '$Isce3': 'E2d t:g; a:4; f:1; x:2; y:4; w:20; h:4; r:15; fs:hsba(.:.:-15:.).. t:g; a:4; f:1; x:2; y:10; w:20; h:12; fs:hsba(.:.:-15:.)',
            '$Isce4': 'E2d t:g; a:4; f:1; x:2; y:4; w:20; h:4; r:15; fs:hsba(+60:.:.:.).. t:g; a:4; f:1; x:2; y:10; w:20; h:12; fs:hsba(+60:.:.:.)',
            
            '$Ispr1': 'E2d t:l; f:1; x:2; y:2; w:20; h:20; fs:#fff; pl:12,12, 22,5, 22,19, 12,12.. t:g; a:0; f:1; x:2; y:2; w:20; h:20; fs:hsba(.:.:-25:.); n:s1.. t:g; a:0; f:1; x:8; y:4; w:5; h:5; fs:#fff; n:d',
            '$Ispr2': 'E2d t:l; f:1; x:2; y:2; w:20; h:20; fs:#fff; pl:12,12, 22,5, 22,19, 12,12.. t:g; a:0; f:1; x:2; y:2; w:20; h:20; fs:hsba(.:.:-5:.); n:s1.. t:g; a:0; f:1; x:8; y:4; w:5; h:5; fs:#fff; n:d',
            '$Ispr3': 'E2d t:l; f:1; x:2; y:2; w:20; h:20; fs:#fff; pl:12,12, 22,5, 22,19, 12,12.. t:g; a:0; f:1; x:2; y:2; w:20; h:20; fs:hsba(.:.:-15:.); n:s1.. t:g; a:0; f:1; x:8; y:4; w:5; h:5; fs:#fff; n:d',
            '$Ispr4': 'E2d t:l; f:1; x:2; y:2; w:20; h:20; fs:#fff; pl:12,12, 22,5, 22,19, 12,12.. t:g; a:0; f:1; x:2; y:2; w:20; h:20; fs:hsba(+60:.:.:.); n:s1.. t:g; a:0; f:1; x:8; y:4; w:5; h:5; fs:#fff; n:d',
            
            '$Iado1': 'E2d t:g; a:4; f:1; x:2; y:9; w:8; h:6; fs:hsba(.:.:-25:.).. t:g; a:3; f:1; x:2; y:3; w:14; h:18; r:180; fs:hsba(.:.:-25:.).. t:l; x:2; y:3; w:24; h:24; s:1; lw:2; lc:r; ls:hsba(.:.:-25:.); pl:18,9, 21,5, =,=, 18,12, 21,12, =,=, 18,15, 21,19',
            '$Iado2': 'E2d t:g; a:4; f:1; x:2; y:9; w:8; h:6; fs:hsba(.:.:-5:.).. t:g; a:3; f:1; x:2; y:3; w:14; h:18; r:180; fs:hsba(.:.:-5:.).. t:l; x:2; y:3; w:24; h:24; s:1; lw:2; lc:r; ls:hsba(.:.:-5:.); pl:18,9, 21,5, =,=, 18,12, 21,12, =,=, 18,15, 21,19',
            '$Iado3': 'E2d t:g; a:4; f:1; x:2; y:9; w:8; h:6; fs:hsba(.:.:-15:.).. t:g; a:3; f:1; x:2; y:3; w:14; h:18; r:180; fs:hsba(.:.:-15:.).. t:l; x:2; y:3; w:24; h:24; s:1; lw:2; lc:r; ls:hsba(.:.:-15:.); pl:18,9, 21,5, =,=, 18,12, 21,12, =,=, 18,15, 21,19',
            '$Iado4': 'E2d t:g; a:4; f:1; x:2; y:9; w:8; h:6; fs:hsba(+60:.:.:.).. t:g; a:3; f:1; x:2; y:3; w:14; h:18; r:180; fs:hsba(+60:.:.:.).. t:l; x:2; y:3; w:24; h:24; s:1; lw:2; lc:r; ls:hsba(+60:.:.:.); pl:18,9, 21,5, =,=, 18,12, 21,12, =,=, 18,15, 21,19',
            
            '$Idt1': 'E2d t:l; s:1; lw:3; lc:r; x:2; y:2; w:24; h:24; ls:hsba(.:.:-25:.); pl:4,15, 4,20, =,=, 9,10, 9,20, =,=, 14,12, 14,20, =,=, 19,8, 19,20, =,=, 4,11, 9,6, 14,8, 19,4',
            '$Idt2': 'E2d t:l; s:1; lw:3; lc:r; x:2; y:2; w:24; h:24; ls:hsba(.:.:-5:.); pl:4,15, 4,20, =,=, 9,10, 9,20, =,=, 14,12, 14,20, =,=, 19,8, 19,20, =,=, 4,11, 9,6, 14,8, 19,4',
            '$Idt3': 'E2d t:l; s:1; lw:3; lc:r; x:2; y:2; w:24; h:24; ls:hsba(.:.:-15:.); pl:4,15, 4,20, =,=, 9,10, 9,20, =,=, 14,12, 14,20, =,=, 19,8, 19,20, =,=, 4,11, 9,6, 14,8, 19,4',
            '$Idt4': 'E2d t:l; s:1; lw:3; lc:r; x:2; y:2; w:24; h:24; ls:hsba(+60:.:.:.); pl:4,15, 4,20, =,=, 9,10, 9,20, =,=, 14,12, 14,20, =,=, 19,8, 19,20, =,=, 4,11, 9,6, 14,8, 19,4',
            
            '$Idia1': 'E2d t:g; a:4; f:1; x:2; y:2; w:20; h:16; fs:hsba(.:.:-25:.).. t:l; f:1; x:2; y:2; w:24; h:24; fs:hsba(.:.:-25:.); pl:8,16, 16,16, 20,22, 8,16;.. t:l; s:1; lw:2; lc:r; x:2; y:2; w:24; h:24; ls:#fff; n:d; pl:4,5, 10,5, =,=, 9,10, 15,10, =,=, 14,15, 20,15',
            '$Idia2': 'E2d t:g; a:4; f:1; x:2; y:2; w:20; h:16; fs:hsba(.:.:-5:.).. t:l; f:1; x:2; y:2; w:24; h:24; fs:hsba(.:.:-5:.); pl:8,16, 16,16, 20,22, 8,16;.. t:l; s:1; lw:2; lc:r; x:2; y:2; w:24; h:24; ls:#fff; n:d; pl:4,5, 10,5, =,=, 9,10, 15,10, =,=, 14,15, 20,15',
            '$Idia3': 'E2d t:g; a:4; f:1; x:2; y:2; w:20; h:16; fs:hsba(.:.:-15:.).. t:l; f:1; x:2; y:2; w:24; h:24; fs:hsba(.:.:-15:.); pl:8,16, 16,16, 20,22, 8,16;.. t:l; s:1; lw:2; lc:r; x:2; y:2; w:24; h:24; ls:#fff; n:d; pl:4,5, 10,5, =,=, 9,10, 15,10, =,=, 14,15, 20,15',
            '$Idia4': 'E2d t:g; a:4; f:1; x:2; y:2; w:20; h:16; fs:hsba(+60:.:.:.).. t:l; f:1; x:2; y:2; w:24; h:24; fs:hsba(+60:.:.:.); pl:8,16, 16,16, 20,22, 8,16;.. t:l; s:1; lw:2; lc:r; x:2; y:2; w:24; h:24; ls:#fff; n:d; pl:4,5, 10,5, =,=, 9,10, 15,10, =,=, 14,15, 20,15',
            
            '$Ist1': 'E2d t:g; a:3; f:1; x:2; y:2; w:20; h:20; fs:hsba(.:.:-25:.)',
            '$Ist2': 'E2d t:g; a:3; f:1; x:2; y:2; w:20; h:20; fs:hsba(.:.:-5:.)',
            '$Ist3': 'E2d t:g; a:3; f:1; x:2; y:2; w:20; h:20; fs:hsba(.:.:-15:.)',
            
            '$Ires1': 'E2d t:g; a:4; f:1; x:4; y:4; w:6; h:16; fs:hsba(.:.:-25:.).. t:g; a:4; f:1; x:14; y:4; w:6; h:16; fs:hsba(.:.:-25:.)',
            '$Ires2': 'E2d t:g; a:4; f:1; x:4; y:4; w:6; h:16; fs:hsba(.:.:-5:.).. t:g; a:4; f:1; x:14; y:4; w:6; h:16; fs:hsba(.:.:-5:.)',
            '$Ires3': 'E2d t:g; a:4; f:1; x:4; y:4; w:6; h:16; fs:hsba(.:.:-15:.).. t:g; a:4; f:1; x:14; y:4; w:6; h:16; fs:hsba(.:.:-15:.)',
            
            '$Isp1': 'E2d t:g; a:4; f:1; x:4; y:4; w:16; h:16; fs:hsba(.:.:-25:.)',
            '$Isp2': 'E2d t:g; a:4; f:1; x:4; y:4; w:16; h:16; fs:hsba(.:.:-5:.)',
            '$Isp3': 'E2d t:g; a:4; f:1; x:4; y:4; w:16; h:16; fs:hsba(.:.:-15:.)',
            
            '$Iori1': 'E2d t:g; f:1; s:0; x:2; y:2; w:5; h:5; a:4; fs:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);',
            
            '$Iori2': 'E2d t:g; f:0; s:1; x:2; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:1; s:0; x:9.5; y:2; w:4; h:4; a:4; fs:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);',
            
            '$Iori3': 'E2d t:g; f:0; s:1; x:2; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:1; s:0; x:17; y:2; w:5; h:5; a:4; fs:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);',
            
            '$Iori4': 'E2d t:g; f:0; s:1; x:2; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:1; s:0; x:2; y:9.5; w:5; h:5; a:4; fs:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);',
            
            '$Iori5': 'E2d t:g; f:0; s:1; x:2; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:1; s:0; x:9.5; y:9.5; w:5; h:5; a:4; fs:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);',
            
            '$Iori6': 'E2d t:g; f:0; s:1; x:2; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:1; s:0; x:17; y:9.5; w:5; h:5; a:4; fs:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);',
            
            '$Iori7': 'E2d t:g; f:0; s:1; x:2; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:1; s:0; x:2; y:17; w:5; h:5; a:4; fs:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);',
            
            '$Iori8': 'E2d t:g; f:0; s:1; x:2; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:1; s:0; x:9.5; y:17; w:5; h:5; a:4; fs:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);',
            
            '$Iori9': 'E2d t:g; f:0; s:1; x:2; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:2; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:17; y:9.5; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:2; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:0; s:1; x:9.5; y:17; w:4; h:4; a:4; ls:hsba(.:.:-25:.);.. t:g; f:1; s:0; x:17; y:17; w:5; h:5; a:4; fs:hsba(.:.:-25:.);',
            
            '$Iali1': 'E2d t:g; f:1; x:2; y:2; w:2; h:20; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:6; y:4; w:10; h:7; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:6; y:13; w:14; h:7; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali2': 'E2d t:g; f:1; x:11; y:2; w:2; h:20; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:7; y:4; w:10; h:7; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:5; y:13; w:14; h:7; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali3': 'E2d t:g; f:1; x:20; y:2; w:2; h:20; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:8; y:4; w:10; h:7; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:4; y:13; w:14; h:7; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali4': 'E2d t:g; f:1; x:2; y:2; w:20; h:2; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:4; y:6; w:7; h:10; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:13; y:6; w:7; h:14; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali5': 'E2d t:g; f:1; x:2; y:11; w:20; h:2; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:4; y:7; w:7; h:10; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:13; y:5; w:7; h:14; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali6': 'E2d t:g; f:1; x:2; y:20; w:20; h:2; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:4; y:8; w:7; h:10; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:13; y:4; w:7; h:14; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali7': 'E2d t:g; f:1; x:2; y:2; w:2; h:20; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:4; y:5; w:6; h:14; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:14; y:2; w:2; h:20; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:16; y:7; w:6; h:10; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali8': 'E2d t:g; f:1; x:5; y:2; w:2; h:20; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:3; y:5; w:6; h:14; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:17; y:2; w:2; h:20; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:15; y:7; w:6; h:10; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali9': 'E2d t:g; f:1; x:8; y:2; w:2; h:20; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:2; y:7; w:6; h:10; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:20; y:2; w:2; h:20; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:14; y:5; w:6; h:14; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali10': 'E2d t:g; f:1; x:2; y:2; w:20; h:2; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:5; y:4; w:14; h:6; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:2; y:14; w:20; h:2; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:7; y:16; w:10; h:6; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali11': 'E2d t:g; f:1; x:2; y:4; w:20; h:2; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:7; y:2; w:10; h:6; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:2; y:18; w:20; h:2; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:5; y:16; w:14; h:6; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iali12': 'E2d t:g; f:1; x:2; y:8; w:20; h:2; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:7; y:2; w:10; h:6; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:2; y:20; w:20; h:2; a:4; fs:hsba(.:.:-25:.).. t:g; f:1; x:5; y:14; w:14; h:6; a:4; fs:hsba(.:.:-25:.)',
            
            '$Iisf1': 'E2d t:g; a:4; s:1; x:3; y:2; w:18; h:20; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.);.. t:g; a:4; f:1; x:4; y:6; w:16; h:5; fs:hsba(+10:+10:+25:.);.. t:g; a:4; f:1; x:4; y:11; w:16; h:5; fs:hsba(+20:+20:.:.);.. t:g; a:4; f:1; x:4; y:16; w:16; h:5; fs:hsba(+30:+30:-25:.)',
            '$Iisf2': 'E2d t:g; a:4; s:1; x:3; y:2; w:18; h:20; lw:2; lc:r; lj:r; ls:hsba(.:.:-5:.);.. t:g; a:4; f:1; x:4; y:6; w:16; h:5; fs:hsba(+10:+10:+25:.);.. t:g; a:4; f:1; x:4; y:11; w:16; h:5; fs:hsba(+20:+20:.:.);.. t:g; a:4; f:1; x:4; y:16; w:16; h:5; fs:hsba(+30:+30:-25:.)',
            '$Iisf3': 'E2d t:g; a:4; s:1; x:3; y:2; w:18; h:20; lw:2; lc:r; lj:r; ls:hsba(.:.:-15:.);.. t:g; a:4; f:1; x:4; y:6; w:16; h:5; fs:hsba(+10:+10:+25:.);.. t:g; a:4; f:1; x:4; y:11; w:16; h:5; fs:hsba(+20:+20:.:.);.. t:g; a:4; f:1; x:4; y:16; w:16; h:5; fs:hsba(+30:+30:-25:.)',
            '$Iisf4': 'E2d t:g; a:4; s:1; x:3; y:2; w:18; h:20; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.);.. t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-45:.); pl:5,20, 20,3.. t:g; a:4; f:1; x:4; y:6; w:16; h:5; fs:hsba(+10:+10:+25:.);.. t:g; a:4; f:1; x:4; y:11; w:16; h:5; fs:hsba(+20:+20:.:.);.. t:g; a:4; f:1; x:4; y:16; w:16; h:5; fs:hsba(+30:+30:-25:.)',
            
            '$Iiss1': 'E2d t:g; a:4; s:1; x:3; y:2; w:18; h:20; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.)',
            '$Iiss2': 'E2d t:g; a:4; s:1; x:3; y:2; w:18; h:20; lw:2; lc:r; lj:r; ls:hsba(.:.:-5:.)',
            '$Iiss3': 'E2d t:g; a:4; s:1; x:3; y:2; w:18; h:20; lw:2; lc:r; lj:r; ls:hsba(.:.:-15:.)',
            '$Iiss4': 'E2d t:g; a:4; s:1; x:3; y:2; w:18; h:20; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.).. t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:5,20, 20,3',
            
            '$Iisp1': 'E2d t:p; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:4,4, 20,7, 4,17, 20,20.. t:g; a:4; x:2; y:2; w:4; h:4; f:1; fs:hsba(.:.:-25:.).. t:g; a:4; x:18; y:18; w:4; h:4; f:1; fs:hsba(.:.:-25:.)',
            '$Iisp2': 'E2d t:p; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-5:.); pl:4,4, 20,7, 4,17, 20,20.. t:g; a:4; x:2; y:2; w:4; h:4; f:1; fs:hsba(.:.:-5:.).. t:g; a:4; x:18; y:18; w:4; h:4; f:1; fs:hsba(.:.:-5:.)',
            '$Iisp3': 'E2d t:p; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-15:.); pl:4,4, 20,7, 4,17, 20,20.. t:g; a:4; x:2; y:2; w:4; h:4; f:1; fs:hsba(.:.:-15:.).. t:g; a:4; x:18; y:18; w:4; h:4; f:1; fs:hsba(.:.:-15:.)',
            '$Iisp4': 'E2d t:p; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:4,4, 20,7, 4,17, 20,20.. t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:5,20, 20,3.. t:g; a:4; x:2; y:2; w:4; h:4; f:1; fs:hsba(.:.:-25:.).. t:g; a:4; x:18; y:18; w:4; h:4; f:1; fs:hsba(.:.:-25:.)',
            
            '$Iisc1': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:4,4, 20,4, 20,20, 4,20, 12,8.. t:g; a:4; x:2; y:2; w:4; h:4; f:1; fs:hsba(.:.:-25:.).. t:g; a:4; x:18; y:2; w:4; h:4; f:1; fs:hsba(.:.:-25:.).. t:g; a:4; x:18; y:18; w:4; h:4; f:1; fs:hsba(.:.:-25:.).. t:g; a:4; x:2; y:18; w:4; h:4; f:1; fs:hsba(.:.:-25:.)',
            '$Iisc2': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-5:.); pl:4,4, 20,4, 20,20, 4,20, 12,8.. t:g; a:4; x:2; y:2; w:4; h:4; f:1; fs:hsba(.:.:-5:.).. t:g; a:4; x:18; y:2; w:4; h:4; f:1; fs:hsba(.:.:-5:.).. t:g; a:4; x:18; y:18; w:4; h:4; f:1; fs:hsba(.:.:-5:.).. t:g; a:4; x:2; y:18; w:4; h:4; f:1; fs:hsba(.:.:-5:.)',
            '$Iisc3': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-15:.); pl:4,4, 20,4, 20,20, 4,20, 12,8.. t:g; a:4; x:2; y:2; w:4; h:4; f:1; fs:hsba(.:.:-15:.).. t:g; a:4; x:18; y:2; w:4; h:4; f:1; fs:hsba(.:.:-15:.).. t:g; a:4; x:18; y:18; w:4; h:4; f:1; fs:hsba(.:.:-15:.).. t:g; a:4; x:2; y:18; w:4; h:4; f:1; fs:hsba(.:.:-15:.)',
            '$Iisc4': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:4,4, 20,4, 20,20, 4,20, 4,4.. t:g; a:4; x:2; y:2; w:4; h:4; f:1; fs:hsba(.:.:-25:.).. t:g; a:4; x:18; y:2; w:4; h:4; f:1; fs:hsba(.:.:-25:.).. t:g; a:4; x:18; y:18; w:4; h:4; f:1; fs:hsba(.:.:-25:.).. t:g; a:4; x:2; y:18; w:4; h:4; f:1; fs:hsba(.:.:-25:.)',
            
            '$Iup1': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:3,12, 11.5,6, 21,12, 11.5,6, 11.5,18',
            '$Iup2': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsbahsba(.:.:-5:.); pl:3,12, 11.5,6, 21,12, 11.5,6, 11.5,18',
            '$Iup3': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-15:.); pl:3,12, 11.5,6, 21,12, 11.5,6, 11.5,18',
            
            '$Idn1': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:3,12, 11.5,18, 21,12, 11.5,18, 11.5,6',
            '$Idn2': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-5:.); pl:3,12, 11.5,18, 21,12, 11.5,18, 11.5,6',
            '$Idn3': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-15:.); pl:3,12, 11.5,18, 21,12, 11.5,18, 11.5,6',
            
            '$Itop1': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:3,12, 11.5,6, 21,12, 11.5,6, 11.5,18, =,=, 3,4, 21,4',
            '$Itop2': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-5:.); pl:3,12, 11.5,6, 21,12, 11.5,6, 11.5,18, =,=, 3,4, 21,4',
            '$Itop3': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-15:.); pl:3,12, 11.5,6, 21,12, 11.5,6, 11.5,18, =,=, 3,4, 21,4',
            
            '$Ibot1': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:3,12, 11.5,18, 21,12, 11.5,18, 11.5,6, =,=, 3,20, 21,20',
            '$Ibot2': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-5:.); pl:3,12, 11.5,18, 21,12, 11.5,18, 11.5,6, =,=, 3,20, 21,20',
            '$Ibot3': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-15:.); pl:3,12, 11.5,18, 21,12, 11.5,18, 11.5,6, =,=, 3,20, 21,20',
            
            '$Ihide1': 'E2d id:$Ihide1; nm:隐藏; t:g; x:3; y:5.5; w:18; h:12; f:0; s:1; ls:hsba(.:.:-25:.); lw:2; lc:r; a:2.. t:g; a:0; x:9; y:8.5; w:6; h:6; f:1; fs:hsba(.:.:-25:.); s:0',
            '$Ihide2': 'E2d id:$Ihide2; nm:隐藏; t:g; x:3; y:5.5; w:18; h:12; f:0; s:1; ls:hsba(.:.:-5:.); lw:2; lc:r; a:2.. t:g; a:0; x:9; y:8.5; w:6; h:6; f:1; fs:hsba(.:.:-5:.); s:0',
            '$Ihide3': 'E2d id:$Ihide3; nm:隐藏; t:g; x:3; y:5.5; w:18; h:12; f:0; s:1; ls:hsba(.:.:-15:.); lw:2; lc:r; a:2.. t:g; a:0; x:9; y:8.5; w:6; h:6; f:1; fs:hsba(.:.:-15:.); s:0',
            '$Ihide4': 'E2d id:$Ihide4; nm:隐藏; t:g; x:3; y:5.5; w:18; h:12; f:0; s:1; ls:hsba(.:.:-25:.); lw:2; lc:r; a:2.. t:g; a:0; x:9; y:8.5; w:6; h:6; f:1; fs:hsba(.:.:-25:.); s:0;.. t:l; w:24; h:24; s:1; ls:hsba(.:.:-25:.); lw:2; lc:r; pl:4,20, 20,4',
            
            '$Idel1': 'E2d id:$Idel1; nm:属性; t:l; w:24; h:24; s:1; ls:hsba(.:.:-25:.); lw:2; lc:r; pl:11.8,3, 11.8,5, =,=, 4,5, 20,5, =,=, 7,18, 7,8, 17,8, 17,18, =,=, 4,20, 20,20, =,=, 11.8,11, 11.8,17',
            '$Idel2': 'E2d id:$Idel2; nm:属性; t:l; w:24; h:24; s:1; ls:hsba(.:.:-5:.); lw:2; lc:r; pl:11.8,3, 11.8,5, =,=, 4,5, 20,5, =,=, 7,18, 7,8, 17,8, 17,18, =,=, 4,20, 20,20, =,=, 11.8,11, 11.8,17',
            '$Idel3': 'E2d id:$Idel3; nm:属性; t:l; w:24; h:24; s:1; ls:hsba(.:.:-15:.); lw:2; lc:r; pl:11.8,3, 11.8,5, =,=, 4,5, 20,5, =,=, 7,18, 7,8, 17,8, 17,18, =,=, 4,20, 20,20, =,=, 11.8,11, 11.8,17',
            
            '$Iadd1': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:3; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:4,11.5, 19,11.5, =,=, 11.5,4, 11.5,19',
            '$Iadd2': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:3; lc:r; lj:r; ls:hsba(.:.:-5:.); pl:4,11.5, 19,11.5, =,=, 11.5,4, 11.5,19',
            '$Iadd3': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:3; lc:r; lj:r; ls:hsba(.:.:-15:.); pl:4,11.5, 19,11.5, =,=, 11.5,4, 11.5,19',
            
            '$Iatt1': 'E2d id:$Iatt1; nm:属性; t:l; w:24; h:24; s:1; ls:hsba(.:.:-25:.); lw:3; lc:r; pl:3,5, 21,5, =,=, 3,11.5, 21,11.5, =,=, 3,18, 21,18',
            '$Iatt2': 'E2d id:$Iatt2; nm:属性; t:l; w:24; h:24; s:1; ls:hsba(.:.:-5:.); lw:3; lc:r; pl:3,5, 21,5, =,=, 3,11.5, 21,11.5, =,=, 3,18, 21,18',
            '$Iatt3': 'E2d id:$Iatt3; nm:属性; t:l; w:24; h:24; s:1; ls:hsba(.:.:-15:.); lw:3; lc:r; pl:3,5, 21,5, =,=, 3,11.5, 21,11.5, =,=, 3,18, 21,18',
            '$Iatt4': 'E2d id:$Iatt3; nm:属性; t:l; w:24; h:24; s:1; ls:hsba(+60:.:.:.); lw:3; lc:r; pl:3,5, 21,5, =,=, 3,11.5, 21,11.5, =,=, 3,18, 21,18',
            
            '$Isave1': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-25:.); pl:3,3, 14,3, 21,10, 21,21, 3,21, 3,3.. t:g; a:4; f:1; x:7; y:14; w:10; h:6; fs:hsba(.:.:-25:.)',
            '$Isave2': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-5:.); pl:3,3, 14,3, 21,10, 21,21, 3,21, 3,3.. t:g; a:4; f:1; x:7; y:14; w:10; h:6; fs:hsba(.:.:-5:.)',
            '$Isave3': 'E2d t:l; s:1; x:2; y:2; w:24; h:24; lw:2; lc:r; lj:r; ls:hsba(.:.:-15:.); pl:3,3, 14,3, 21,10, 21,21, 3,21, 3,3.. t:g; a:4; f:1; x:7; y:14; w:10; h:6; fs:hsba(.:.:-15:.)',
            
        },
        
        pat: {
            des: 'pattern',
            '$Psl_x1': 'E2d id:$Psl_x1; nm:Scan Line X 1px; t:l; s:1; lw:1; w:10; h:2; pl:0,0, 10,0',
            '$Psl_y1': 'E2d id:$Psl_y1; nm:Scan Line Y 1px; t:l; s:1; lw:1; w:2; h:10; pl:0,0, 0,10',
            '$Psl_x2': 'E2d id:$Psl_x2; nm:Scan Line X 2px; t:l; s:1; lw:2; w:10; h:4; pl:0,0, 10,0',
            '$Psl_y2': 'E2d id:$Psl_y2; nm:Scan Line Y 2px; t:l; s:1; lw:2; w:4; h:10; pl:0,0, 0,10',
            '$Psl_xy': 'E2d id:$Psl_xy; nm:Scan Line XY; t:l; s:1; lw:1; w:5; h:5; pl:0,0, 5,5',
            '$Psl_yx': 'E2d id:$Psl_yx; nm:Scan Line YX; t:l; s:1; lw:1;  w:5; h:5; pl:5,0, 0,5',
            '$Pcb': 'E2d id:$Pcb; nm:Checkerboard; t:l; f:1; s:0; fs:#000; w:10; h:10; pl:0,0, 5,0, 5,5, 10,5, 10,10, 5,10, 5,5, 0,5, 0,0',
        },
    },
    
    ico: (A) => { // draw ico
        var a,b,c,d,o,r;
        A = A || '';
        if(!A) return;
        a = A.substr(0, 2);
        if(a == '$I') b = RV.src.ico[A];
        else if(a == '$P') b = RV.src.pat[A];
        else b = A;
        if(!b) return;
        o = RV.t2v(b, 1);
        if(!o) return;
        if(a == '$P') {
            c = RV.gwh(o, 'ico');
            if(c.w==null || c.h==null) return;
            RV.CVI.width = c.w;
            RV.CVI.height = c.h;
            RV.CTI.clearRect(0, 0, c.w, c.h);
        }
        RV.d2d(o, 3);
        r = RV.CVI.toDataURL('image/png', 1);
        return r;
    },
    
    ii: (A) => { // init ini
        var a,b,c,d,y,z;
        if(RV.ini.set.sys.rs == 1) RV.ls('RVINI', 0, -1);
        a = RV.e36(RV.ls('RVINI'), 2);
        // a = JSON.parse(a);
        if(!a) {
            RV.ini2 = RV.ini;
            return;
        }
        a = a || '{}';
        a = eval('('+a+')');
        if(a.set.sys && a.set.sys.rs == 1) {
            RV.ls('RVINI', 0, -1);
            RV.ini2 = RV.ini;
            return;
        }
        
        b = RV.ini.set.vdo;
        if(!a.set.vdo) a.set.vdo = {};
        for(z in b) {
            if(!a.set.vdo[z]) a.set.vdo[z] = b[z];
        }
        
        b = RV.ini.ft;
        if(!a.set.ft) a.ft = {};
        for(z in b) {
            if(!a.set.ft[z]) a.set.ft[z] = b[z];
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
    
    ntl: (A) => { // new time line
        var l,s;
        l = RV.lg[RV.LG];
        s = '<div id="rvTLt"><div id="rvTLtl"><div class="rvTLbtn rvLay_att_1" title="'+(l.att.des||'属性(Attribute)')+'" onclick="RV.stl(\'att\')"></div><div class="rvTLbtn rvTL_sce_1" title="'+(l.sce||'场景(Scenes)')+'" onclick="RV.stl(\'sce\')"></div><div class="rvTLbtn rvTL_spr_1" title="'+(l.spr||'精灵(Sprite)')+'" onclick="RV.stl(\'spr\')"></div><div class="rvTLbtn rvTL_ado_1" title="'+(l.ado||'音频(Audio)')+'" onclick="RV.stl(\'ado\')"></div><div class="rvTLbtn rvTL_dt_1" title="'+(l.dt||'数据(Data)')+'" onclick="RV.stl(\'dt\')"></div><div class="rvTLbtn rvTL_dia_1" title="'+(l.dia||'台词(Dialog)')+'" onclick="RV.stl(\'dia\')"></div></div><div id="rvTLtr"><div id="rvTLbtnB"><div id="rvTLbtnSt" class="rvTLbtn rvTL_st_1" title="'+(l.st||'播放(Start)')+'"></div><div id="rvTLbtnSp" class="rvTLbtn rvTL_sp_1" title="'+(l.sp||'停止(Stop)')+'"></div><div id="rvTLTxt" class="rvTLbtn">00:00:00</div></div><div id="rvTLpgB"><div id="rvTLpg1"></div><div id="rvTLpg2"></div><div id="rvTLpg3"></div></div></div></div><div id="rvTLb"></div>';
        RV.gn('rvTL').innerHTML = s;
    },
    
    stl: (A) => { // select time line
        var a,b,c,d,e,f,i,l,n,s,z;
        i = ['rvLay_att_', 'rvTL_sce_', 'rvTL_spr_', 'rvTL_ado_', 'rvTL_dt_', 'rvTL_dia_'];
        n = RV.gn('rvTLtl');
        if(!n) return;
        a = n.childNodes;
        for(z=0; z<a.length; z++) {
            if(a[z].nodeType != 1) continue;
            a[z].className = 'rvTLbtn '+i[z]+'1';
            if(A=='att' && z==0) a[z].className = 'rvTLbtn '+i[z]+'4';
            else if(A=='sce' && z==1) a[z].className = 'rvTLbtn '+i[z]+'4';
            else if(A=='spr' && z==2) a[z].className = 'rvTLbtn '+i[z]+'4';
            else if(A=='ado' && z==3) a[z].className = 'rvTLbtn '+i[z]+'4';
            else if(A=='dt' && z==4) a[z].className = 'rvTLbtn '+i[z]+'4';
            else if(A=='dia' && z==5) a[z].className = 'rvTLbtn '+i[z]+'4';
        }
        n = RV.gn('rvTLb');
        if(!n) return;
        n.innerHTML = '此功能正在开发中，创作数据可视化视频请使用旧版：<a href="index2.html" target="_blank">点击转到旧版</a>';
    },
    
    nm: (A) => { // new menu
        var a,b,c,d,e,f,l,s,z;
        a = RV.lg[RV.LG];
        b = [];
        s = ['ds', 'src', 'set', 'ot', 'hp', 'lg'];
        for(z=0; z<s.length; z++) {
            if(s[z] == 'ds' || s[z] == 'src' || s[z] == 'set') f = 'RV.sel(this);RV.smn(\''+s[z]+'\');RV.SMN=\''+s[z]+'\'';
            else if(s[z] == 'ot') f = 'RV.swin()';
            else if(s[z] == 'hp') f = 'RV.fw(\'帮助(Help)\', RVHELP)';
            else if(s[z] == 'lg') f = 'RV.slg()';
            else f = '';
            if(s[z] == 'ds') e = ' s_';
            else e = '';
            c = '<div class="rvBtn0'+e+'" onclick="'+f+'">'+(a[s[z]].des||a[s[z]]||'')+'</div>';
            b.push(c);
        }
        b = b.join('')+'<b class="cl"></b>';
        RV.gn('rvRB0').innerHTML = b;
        RV.smn('ds');
        RV.rw();
    },
    
    smn: (A) => { // sel menu
        var a,b,c,d,e,f,g,h,i,j,l,m,n,o,o2,s,t,y,z;
        l = RV.lg[RV.LG];
        a = RV.ini2;
        b = [];
        if(A == 'ds') {
            s = '';
            RV.SMN = 'ds';
            for(z in l[A]) {
                if(z == 'des') continue;
                c = l[A][z].indexOf(' ');
                d = l[A][z].substr(0, c) || '';
                e = l[A][z].substr(c+1) || '';
                f = RV.UT;
                if(f && (z=='xp' || z=='yp' || z=='zp')) e += '('+f+')';
                if(z=='xr' || z=='yr' || z=='zr') e += '(℃)';
                n = 'DS' + z.toUpperCase();
                
                if(RV.DM == '2d' && (d.length<2 || z=='ls' || z=='fs')) {
                    if(z=='ls' || z=='fs') s += '<div class="rvDsColor" onclick="RV.CR=\''+n+'\';RV.FT=\''+z+'\';RV.mi(this)" key="HSB" style="background-color:'+(RV[n]||a[A][z]||'#000')+';" title="'+e+'"></div>';
                    else b.push('<div class="rvBtn1 rvDsVal2" title="'+e+'">'+d+':<input id="rv'+n+'" class="rvVal" type="text" value="'+(RV[n]?RV[n]:RV[n]==0?RV[n]:a[A][z])+'" onchange="var a=parseFloat(this.value)||0;if(this.id==\'rvDSA\'){if(a<0||a>12) a=0}this.value=a;RV.'+n+'=a;RV.sea(\''+z+'\',a)" onmouseover="this.focus();"/></div>');
                    
                } else if(RV.DM == '3d' && d.length==2 && z!='lw' && z!='ls' && z!='fs') {
                    b.push('<div class="rvBtn1 rvDsVal3" title="'+e+'">'+d+':<input class="rvVal" type="text" value="'+a[A][z]+'" onchange="RV.'+n+'=parseFloat(this.value)||0" onmouseover="this.focus();"/></div>');
                }
            }
            
            if(s) s = '<div class="rvDsC">'+s+'</div>';
            b = b.join('') +s+ '<b class="cl"></b>';
            RV.gn('rvRB1').innerHTML = b;
            
            s = [];
            o = RV['E'+RV.DM];
            for(z in o) {
                j = '';
                if(o[z].sl == 1) j = ' s_';
                s.push('<div id="'+z+'" class="rvBtn2 rvLayL'+j+'" onclick="if(RV.KO.Shi) {RV.SELE[\''+z+'\']={id:\''+z+'\'};RV.csel()} else {RV.SELE={\''+z+'\':{id:\''+z+'\'}};RV.csel()}RV.SES=1;"><div class="rvLayN" ondblclick="RV.eds(this)" onblur="RV.sea(\'nm\', this.innerHTML);RV.eds2(this)">'+(o[z].nm?o[z].nm:z)+'</div><div class="rvLayIcoB"><div class="rvLayBtn rvLay_del_1" title="'+(l.del||'删除(Delete)')+'" onclick="RV.dlay(\''+z+'\')"></div><div id="rvLay_hide_'+z+'" class="rvLayBtn rvLay_hide_'+(o[z].hd==1?4:1)+'" title="'+(l.hide||'隐藏(Hide)')+'" onclick="RV.sea(\'hd\',0,\''+z+'\')"></div><div class="rvLayBtn rvLay_att_1" title="'+(l.att.des||'属性(Attribute)')+'" onclick="RV.att(\''+z+'\')"></div></div></div>');
            }
            s = s.join('') + '<b class="cl"></b>';
            
            t = {ori:'RV.ori()', ali:'if(RV.KO.Ctr) RV.ali();else RV.doali();RV.msg(\'此功能正在开发中...\')', isf:'if(RV.KO.Ctr) RV.sea(\'f\',1);else RV.sea(\'f\')', iss:'if(RV.KO.Ctr) RV.sea(\'s\',1);else RV.sea(\'s\')', isp:'if(RV.KO.Ctr) RV.sea(\'p\',1);else RV.sea(\'p\')', isc:'if(RV.KO.Ctr) RV.sea(\'c\',1);else RV.sea(\'c\')', up:'RV.mlay(1)', dn:'RV.mlay(2)', top:'RV.mlay(0)', bot:'RV.mlay(-1)', hide:'RV.sea(\'hd\')', del:'RV.dlay()'};
            // , add:'RV.adir()'
            b = [];
            for(z in t) {
                j = '';
                if(z == 'ali') j = ' (变更状态请按Ctrl+左击 / Change Status: Ctrl+left)';
                b.push('<div id="rvLay_'+z+'" class="rvLayBtn rvLay_'+z+'_1" onclick="'+t[z]+'" title="'+(l[z]||z)+j+'"></div>');
            }
            b = b.join('') + '<b class="cl"></b>';
            s = '<div class="rvLabB"><div class="rvLabT">'+b+'</div><div id="rvLayer" class="rvLabC">'+s+'</div></div>';
            RV.gn('rvRB2').innerHTML = s;
            
        } else if(A == 'src') {
            RV.SMN = 'src';
            for(z in l[A]) {
                if(z == 'des') continue;
                e = '';
                if(z == 'elm') e = ' s_';
                b.push('<div class="rvBtn1'+e+'" onclick="RV.sel(this);RV.src(\''+z+'\')">'+l[A][z]+'</div>');
            }
            b = b.join('') + '<b class="cl"></b>';
            RV.gn('rvRB1').innerHTML = b;
            RV.si('elm');
            //s = '<div class="rvLabB"><div class="rvLabT"><div class="rvLab">资源(Resources)</div><div class="rvLabX" onclick="RV.ol(\'http://rv.eefaa.cn/?fav\')" title="'+(l.fav||'收藏夹(Favorites)')+'">F</div><div class="rvLabX" onclick="RV.ol(\'http://rv.eefaa.cn/?net\')" title="'+(l.net||'网络(Net)')+'">N</div><div class="rvLabX" onclick="RV.src(\'sys\')" title="'+(l.sys||'系统(System)')+'">S</div></div><div class="rvLabC"><div class="rvBtn2" onclick="RV.sel(this)">sfdsfsfsdfd</div></div></div>';
            //RV.gn('rvRB2').innerHTML = s;
            
        } else if(A == 'set') {
            RV.SMN = 'set';
            for(z in l[A]) {
                if(z == 'des') continue;
                f = 'RV.si(\''+z+'\')';
                if(z == 'key') f = 'RV.sh(this.nextSibling.nextSibling)';
                e = '';
                if(z == 'sys') e = ' s_';
                b.push('<div class="rvBtn1'+e+'" onclick="RV.sel(this);'+f+'">'+l[A][z].des+'</div>');
                if(z == 'key') {
                    s = [];
                    for(y in l[A][z]) {
                        if(y == 'des') continue;
                        s.push('<div class="rvBtn3" onclick="RV.sel(this);RV.si(\''+y+'\')">'+l[A][z][y].des+'</div>');
                    }
                    s = '<b class="cl"></b><div class="rvRB3 h_">' +s.join('')+ '<b class="cl"></b></div>';
                    b.push(s);
                }
            }
            b = b.join('') + '<b class="cl"></b>';
            RV.gn('rvRB1').innerHTML = b;
            RV.si('sys');
        }
        
        RV.rw();
        if(RV.gn('rvLayer') && RV.SCR != null) RV.gn('rvLayer').scrollTop = RV.SCR;
        RV.SCR = null;
    },
    
    si: (A) => { // set ini
        var a,b,c,d,e,f,k,l,s,t,v,w,x,y,z;
        l = RV.lg[RV.LG];
        a = RV.ini2;
        if(A=='sys' || A=='vdo' || A=='ft') {
            b = l.set[A];
            c = a.set[A];
            k = 'set.'+A;
        } else {
            b = l.set.key[A];
            c = a.set.key[A];
            k = 'set.key.'+A;
        }
        if(!b || !c) return;
        
        s = [];
        for(z in b) {
            if(A == 'sr') {
                if(z == 'des') continue;
                s.push('<div class="rvLabB"><div class="rvLabT"><div class="rvLab">'+b[z].des+'</div><div class="rvLabX" onclick="RV.dn(this.parentNode.parentNode)">X</div></div><div class="rvLabC">');
                for(y in b[z]) {
                    if(y == 'des') continue;
                    e = k+'.'+z+'.'+y;
                    d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+b[z][y]+':<input class="rvVal" type="text" value="'+a[A][z][y]+'" key="'+e+'" onmouseover="this.focus()"/></div>';
                    s.push(d);
                }
                s.push('</div></div>');
                
            } else if(A == 'bm') {
                RV.abm();
                RV.rw();
                return;
                
            } else {
                if(z == 'des') continue;
                e = k+'.'+z;
                if(z == 'K') f = b.des||A;
                else f = b[z];
                if(',t2,q2,t3,m3,s3,r3,v3,view,hsb,lay,'.indexOf(','+A+',') != -1) {
                    g = '';
                    h = ' readonly="1"';
                } else {
                    g = ' ondblclick="RV.mi(this.lastChild)"';
                    h = '';
                }
                d = '<div class="rvBtn2"'+g+'>'+f+':<input class="rvVal" type="text" value="'+c[z]+'" key="'+e+'" onmouseover="this.focus()"'+h+'/></div>';
                s.push(d);
            }
        }
        
        s = '<div class="rvLabB"><div class="rvLabT"><div class="rvLab">'+(b.des||A)+'</div><div class="rvLabX rvLay_save_1" onclick="RV.svi()" title="'+(l.se||'保存(Save)')+'"></div></div><div class="rvLabC">' +s.join('')+ '<b class="cl"></b></div></div>';
        RV.gn('rvRB2').innerHTML = s;
        RV.rw();
    },
    
    mi: (A) => { // modify ini
        var a,b,c,d,e,f,o,z;
        if(!A) return;
        RV.IKEY = null;
        RV.MDF = A;
        a = A.getAttribute('key');
        b = RV.vl[a] || '';
        
        if(b == 'FONT') {
            RV.font(A);
            return;
        } else if(a == 'HSB' || b == 'HSB') {
            if(RV.MDF.value) RV.hsb('', RV.MDF.value);
            else RV.sn(RV.HSB);
            RV.IKEY = a;
            return;
        } else if(a.indexOf('HEX,') != -1) {
            c = a.split(',');
            d = [];
            for(z=0; z<c.length; z++) {
                d.push('<div class="rvBtn" onclick="RV.sel(this);if(RV.MDF) RV.MDF.innerHTML=\''+c[z]+'\';">'+c[z]+'</div>');
            }
            d = d.join('');
            RV.fw('颜色类型(Color Type)', d, 1);
            return;
        }
        
        if(!b) {
            RV.fw(a, '无数据');
            return;
        }
        c = b.split(','); // value list
        d = [];
        for(z=0; z<c.length; z++) {
            d.push('<div class="rvBtn" onclick="RV.sel(this);RV.MDF.value=\''+c[z]+'\';">'+c[z]+'</div>');
        }
        d = d.join('');
        RV.fw(a, d, 1);
    },
    
    svi: (A) => { // save ini
        var a,b,c,d,e,z;
        a = RV.gn('rvRB2');
        b = a.getElementsByTagName('INPUT');
        for(z=0; z<b.length; z++) {
            c = b[z].getAttribute('key');
            if(!c) continue;
            d = RV.sc(b[z].value);
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
        a = RV.adoL;
        b = RV.lg[RV.LG].bm;
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
        
        f = '<div class="rvBtn" onclick="RV.sys(\'ado\')">'+(RV.lg[RV.LG].sys||'系统(System)')+'</div><div class="rvBtn">'+(RV.lg[RV.LG].loc||'本地(Local)')+'<input type="file" class="rvFile" onclick="RV.up(this)" multiple="1"/></div><div class="rvBtn" onclick="RV.ol(\'http://rv.eefaa.cn/?anet\')">'+(RV.lg[RV.LG].net||'网络(Net)')+'</div>';
        
        c = c.join('')+f+'<b class="cl"></b>';
        RV.gn('rvRB2').innerHTML = c;
    },
    
    aad: (A) => { // add animation data
        var a,b,c,d,e,f,l,i,y,z;
        a = RV.adtL;
        b = RV.lg[RV.LG].ad;
        if(!a) {
            c = '<div class="rvBtn" onclick="RV.sn(RV.EB)">'+(RV.lg[RV.LG].inp||'输入(Input)')+'</div><div class="rvBtn">'+(RV.lg[RV.LG].loc||'本地(Local)')+'<input type="file" class="rvFile" onclick="RV.up(this)" multiple="1"/></div><div class="rvBtn" onclick="RV.ol(\'http://rv.eefaa.cn/?dnet\')">'+(RV.lg[RV.LG].net||'网络(Net)')+'</div><b class="cl"></b>';
            RV.gn('rvRB2').innerHTML = c;
            return CL('no data');
        }
        
        c = [];
        d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+(b.t1||'正标题')+':<input class="rvVal" type="text" value="'+(a.t1||'')+'" onchange="RV.adtL.t1=this.value"/></div>';
        c.push(d);
        
        for(z=0; z<a.tl.length; z++) {
            if(a.tl == false) continue;
            a.tl[z] = a.tl[z] || {};
            c.push('<div class="rvLabB"><div class="rvLabT"><div class="rvLab">#t'+z+'</div><div class="rvLabX" onclick="RV.dn(this.parentNode.parentNode);RV.adtL.tl.splice('+z+',1);RV.aad()" title="删除时间节点(Delete time node)">X</div><div class="rvLabAdd" onclick="RV.adt(1)" title="添加时间节点(Add time node)">+</div></div><div class="rvLabC">');
            
            f = ['t2', 'd1', 'tp'];
            for(i=0; i<f.length; i++) {
                e = 'RV.adtL.tl['+z+'].'+f[i]+'=this.value';
                d = '<div class="rvBtn2" ondblclick="RV.mi(this.lastChild)">'+(b[f[i]]||'')+':<input class="rvVal" type="text" value="'+(a.tl[z][f[i]]||'')+'" onchange="'+e+'"/></div>';
                c.push(d);
            }
            
            a.tl[z].dl = a.tl[z].dl || {};
            for(y=0; y<a.tl[z].dl.length; y++) {
                if(a.tl[z].dl == false) continue;
                c.push('<div class="rvLabB"><div class="rvLabT"><div class="rvLab rvLabDN">#d'+y+'</div><div class="rvLabX" onclick="RV.dn(this.parentNode.parentNode);RV.adtL.tl['+z+'].dl.splice('+y+',1);RV.aad()" title="删除数据节点(Delete data node)">X</div><div class="rvLabAdd" onclick="RV.selAD=RV.adtL.tl['+z+'].dl;RV.adt(2)" title="添加数据节点(Add data node)">+</div></div><div class="rvLabC">');
                
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
        
        f = '<div class="rvBtn" onclick="RV.sn(RV.EB)">'+(RV.lg[RV.LG].inp||'输入(Input)')+'</div><div class="rvBtn">'+(RV.lg[RV.LG].loc||'本地(Local)')+'<input type="file" class="rvFile" onclick="RV.up(this)" multiple="1"/></div><div class="rvBtn" onclick="RV.ol(\'http://rv.eefaa.cn/?dnet\')">'+(RV.lg[RV.LG].net||'网络(Net)')+'</div>';
        
        c = c.join('')+f+'<b class="cl"></b>';
        RV.gn('rvRB2').innerHTML = c;
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
        RV.fw(b, d, 1);
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
        RV.fw('字体(Font)', b, 1);
    },
    
    hsb: (A, B) => { // hsb
        var a,b,c,d,e,f,n,o,p,q,h,s,l,x,y,z;
        A = A || window.event;
        B = B || '';
        a = RV.HSB;
        b = RV.gn('rvHsbCb');
        c = a.offsetLeft;
        d = a.offsetTop;
        e = b.offsetLeft;
        f = b.offsetTop;
        p = RV.gn('rvHsbAv').value||100;
        
        if(B) {
            o = RV.cgc({ct:'hex', x:B}, p);
            RV.hsbcv(o);
            RV.sn(a);
            return;
        }
        
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
        
        if(s < 0) s = 0;
        if(s > 100) s = 100;
        if(l < 0) l = 0;
        if(l > 100) l = 100;
        RV.hsbS = s;
        RV.hsbB = l;
        
        RV.rvHSB = o = RV.cgc({ct:'hsb', h:h, s:s, b:l}, p);
        n = RV.gn('rvHsbC1');
        n.style.backgroundColor = o.x || '#000';
        RV.hsbcv(o);
        RV.sn(a);
    },
    
    rc: (A, B) => { // relative color
        var a,r,g,b,s,t;
        A = '' + (A!=null || A!=undefined? A : '0');
        B = (B || 'r').toLowerCase();
        s = ',x,r,g,b,h,s,v,l,a,';
        t = {n:null, o:null};
        if(!A || s.indexOf(','+B+',') < 0) return t;
        
        a = A.substr(0, 1);
        if(A == '.') { // relative color
            t.o = A;
            t.n = RV.RC[B];
            
        } else if(A == '=') { // default color
            t.o = A;
            t.n = RV.DC[B];
            
        } else if(A == '-') { // default range color
            t.o = A;
            if(B=='x') {
                r = '0' + (parseInt(RV.rr('0-255'))||0).toString(16);
                g = '0' + (parseInt(RV.rr('0-255'))||0).toString(16);
                b = '0' + (parseInt(RV.rr('0-255'))||0).toString(16);
                t.n = r.slice(-2)+g.slice(-2)+b.slice(-2);
            }
            else if(B=='r' || B=='g' || B=='b') t.n = parseInt(RV.rr('0-255')) || 0;
            else if(B=='h') t.n = parseInt(RV.rr('0-359')) || 0;
            else if(B=='s' || B=='v' || B=='l') t.n = parseInt(RV.rr('0-100')) || 0;
            else if(B=='a') t.n = RV.fn(RV.rr('0-1')||1, 2);
            
        } else if(a == '+' || a == '-') { // relative add or subtract
            t.o = A;
            t.n = RV.RC[B] + (parseInt(A) || 0);
            if(t.n < 0) t.n = 0;
            if(B=='x') { // -rr-gg-bb
                r = parseInt((A.substr(1,2)||'00'), 16);
                if(A.substr(0,1) == '-') r = -(r);
                g = parseInt((A.substr(4,2)||'00'), 16);
                if(A.substr(3,1) == '-') g = -(g);
                b = parseInt((A.substr(7,2)||'00'), 16);
                if(A.substr(6,1) == '-') b = -(b);
                r = '0' + (parseInt(RV.RC.r+r)||0).toString(16);
                g = '0' + (parseInt(RV.RC.g+g)||0).toString(16);
                b = '0' + (parseInt(RV.RC.b+b)||0).toString(16);
                t.n = r.slice(-2)+g.slice(-2)+b.slice(-2);
            } else if(B=='r' || B=='g' || B=='b') {
                if(t.n > 255) t.n = 255;
            } else if(B=='h') {
                if(t.n > 359) t.n = 359;
            } else if(B=='s' || B=='v' || B=='l') {
                if(t.n > 100) t.n = 100;
            } else if(B=='a') {
                t.n = RV.RC[B] + parseFloat(A)/100;
                t.n = RV.fn(parseFloat(t.n)||1, 2);
                if(t.n < 0) t.n = 0;
                else if(t.n > 1) t.n = 1;
            }
            
        } else if(A.indexOf('-') != -1) { // custom range color
            t.o = A;
            t.n = RV.rr(A);
            t.n = parseInt(t.n) || 0;
            if(t.n < 0) t.n = 0;
            if(B=='x') { // 00-ff
                a = A.split(/ *\- */);
                a[0] = parseInt((a[0]||'00').substr(0, 2), 16);
                a[1] = parseInt((a[1]||'ff').substr(0, 2), 16);
                r = '0' + (parseInt(RV.rr(a[0]+'-'+a[1]))||0).toString(16);
                g = '0' + (parseInt(RV.rr(a[0]+'-'+a[1]))||0).toString(16);
                b = '0' + (parseInt(RV.rr(a[0]+'-'+a[1]))||0).toString(16);
                t.n = r.slice(-2)+g.slice(-2)+b.slice(-2);
            } else if(B=='r' || B=='g' || B=='b') {
                if(t.n > 255) t.n = 255;
            } else if(B=='h') {
                if(t.n > 359) t.n = 359;
            } else if(B=='s' || B=='v' || B=='l') {
                if(t.n > 100) t.n = 100;
            } else if(B=='a') {
                t.n = RV.rr(A) / 100;
                t.n = RV.fn(parseFloat(t.n)||1, 2);
                if(t.n < 0) t.n = 0;
                else if(t.n > 1) t.n = 1;
            }
            
        } else {
            t.n = parseInt(A) || 0;
            if(t.n < 0) t.n = 0;
            if(B=='x') { // rgb or rrggbb
                if(A.length == 3) t.n = A.substr(0, 3);
                else if(A.length == 6) t.n = A.substr(0, 6);
                else t.n = '#000';
            } else if(B=='r' || B=='g' || B=='b') {
                if(t.n > 255) t.n = 255;
            } else if(B=='h') {
                if(t.n > 359) t.n = 359;
            } else if(B=='s' || B=='v' || B=='l') {
                if(t.n > 100) t.n = 100;
            } else if(B=='a') {
                if(A > 1) t.n = RV.fn((parseFloat(A) || 100) / 100, 2);
                else t.n = RV.fn(parseFloat(A)||1, 2);
                if(t.n < 0) t.n = 0;
                else if(t.n > 1) t.n = 1;
            }
        }
        return t;
    },
    
    ckc: (A) => { // check color
        var a,b,c,d,s,r;
        A = (A || '').trim().toLowerCase();
        r = {ct:null, x:null};
        a = A.substr(0, 1);
        b = A.substr(0, 2);
        c = A.substr(0, 4);
        d = A.substr(0, 5);
        
        if(b=='lf' || b=='rf' || b=='pf') {
            r = {ct:'old', c:A};
            
        } else if(A=='.' || A=='-' || A=='=' || a=='#') {
            r = {ct:'hex', x:A};
            
        } else if((c=='rgb(' || d=='rgba(') || (b=='r:' && A.indexOf('g:')!=-1 && A.indexOf('b:')!=-1)) {
            s = A.replace('rgb(', '');
            s = s.replace('rgba(', '');
            s = s.replace(')', '');
            s = s.replace('r:', '');
            s = s.replace('g:', '');
            s = s.replace('b:', '');
            s = s.split(/ *[\,\:\_\/] */);
            r = {ct:'rgb', r:s[0], g:s[1], b:s[2], a:s[3]};
            
        } else if((c=='hsb(' || d=='hsba(') || (b=='h:' && A.indexOf('s:')!=-1 && A.indexOf('b:')!=-1)) {
            s = A.replace('hsb(', '');
            s = s.replace('hsba(', '');
            s = s.replace(')', '');
            s = s.replace('h:', '');
            s = s.replace('s:', '');
            s = s.replace('b:', '');
            s = s.split(/ *[\,\:\_\/] */);
            r = {ct:'hsb', h:s[0], s:s[1], b:s[2], a:s[3]};
            
        } else if((c=='hsl(' || d=='hsla(') || (b=='h:' && A.indexOf('s:')!=-1 && A.indexOf('l:')!=-1)) {
            s = A.replace('hsl(', '');
            s = s.replace('hsla(', '');
            s = s.replace(')', '');
            s = s.replace('h:', '');
            s = s.replace('s:', '');
            s = s.replace('l:', '');
            s = s.split(/ *[\,\:\_\/] */);
            r = {ct:'hsl', h:s[0], s:s[1], l:s[2], a:s[3]};
        }
        return r;
    },
    
    cgc: (A, B) => { // change color
        var a,b,c,d,o,p,q,s,t,x,r,g,b,h,s,v,l;
        p = {x:null, x2:null, r:null, g:null, b:null, rgb:null, rgb2:null, rgba:null, h:null, s:null, v:null, l:null, hsb:null, hsb2:null, hsba:null, hsl:null, hsl2:null, hsla:null, a:null, c:null, rc:null, ox:null, or:null, og:null, ob:null, oh:null, os:null, ov:null, ol:null, oa:null};
        
        if(typeof A == 'string') o = RV.ckc(A);
        else o = A;
        if(!o) return p;
        if(Object.keys(o).length<1) return p;
        B = B || 1;
        t = RV.rc(B, 'a');
        if(!t) {
            p.a = parseFloat(B) || 1;
            if(p.a < 0) p.a = 0;
            if(p.a > 1) p.a = 1;
        } else {
            p.a = t.n;
            if(t.o != null) p.oa = t.o;
        }
        
        if(o.ct == 'old') {
            p.c = o.c || '';
            
        } else if(o.ct == 'hex') {
            s = (o.x||'.').replace('#', '') || '.';
            t = s.split(/ *[\:\_] */);
            if(t.length > 1) {
                if(t[1] || t[1]==0) p.a = parseFloat(t[1]);
                s = t[0] || '.';
            }
            t = RV.rc(s, 'x');
            t.n = t.n.replace(/\#/g, '');
            p.x = '#' + t.n;
            p.x2 = t.n;
            if(t.o != null) p.ox = t.o;
            if(p.ox||p.oa) p.rc = (p.ox || p.x) + (':'+p.oa||p.a||1);
            
            q = RV.hex2rgb(p.x, p.a);
            p.r = q.r;
            p.g = q.g;
            p.b = q.b;
            p.rgb = q.rgb;
            p.rgb2 = q.rgb2;
            p.rgba = q.rgba;
            
            q = RV.rgb2hsb(p.r, p.g, p.b, p.a);
            p.h = q.h;
            p.s = q.s;
            p.v = q.b;
            p.hsb = q.hsb;
            p.hsb2 = q.hsb2;
            p.hsba = q.hsba;
            
            q = RV.rgb2hsl(p.r, p.g, p.b, p.a);
            p.l = q.l;
            p.hsl = q.hsl;
            p.hsl2 = q.hsl2;
            p.hsla = q.hsla;
            
        } else if(o.ct == 'rgb') {
            t = RV.rc(o.r, 'r');
            p.r = t.n;
            if(t.o != null) p.or = t.o;
            
            t = RV.rc(o.g, 'g');
            p.g = t.n;
            if(t.o != null) p.og = t.o;
            
            t = RV.rc(o.b, 'b');
            p.b = t.n;
            if(t.o != null) p.ob = t.o;
            if(o.a || o.a==0) p.a = o.a;
            
            p.rgb = 'rgb('+p.r+', '+p.g+', '+p.b+')';
            p.rgb2 = 'R:'+p.r+', G:'+p.g+', B:'+p.b;
            p.rgba = 'rgba('+p.r+', '+p.g+', '+p.b+', '+p.a+')';
            if(p.or||p.og||p.ob||p.oa) p.rc = 'rgba('+(p.or||p.r)+':'+(p.og||p.g)+':'+(p.ob||p.b)+':'+(p.oa||p.a||1)+')';
            
            q = RV.rgb2hex(p.r, p.g, p.b, p.a);
            p.x = q.x;
            p.x2 = q.x2;
            
            q = RV.rgb2hsb(p.r, p.g, p.b, p.a);
            p.h = q.h;
            p.s = q.s;
            p.v = q.b;
            p.hsb = q.hsb;
            p.hsb2 = q.hsb2;
            p.hsba = q.hsba;
            
            q = RV.rgb2hsl(p.r, p.g, p.b, p.a);
            p.l = q.l;
            p.hsl = q.hsl;
            p.hsl2 = q.hsl2;
            p.hsla = q.hsla;
            
        } else if(o.ct == 'hsb') {
            t = RV.rc(o.h, 'h');
            p.h = t.n;
            if(t.o != null) p.oh = t.o;
            
            t = RV.rc(o.s, 's');
            p.s = t.n;
            if(t.o != null) p.os = t.o;
            
            t = RV.rc(o.b, 'v');
            p.v = t.n;
            if(t.o != null) p.ov = t.o;
            if(o.a || o.a==0) p.a = o.a;
            
            p.hsb = 'hsb('+p.h+', '+p.s+', '+p.v+')';
            p.hsb2 = 'H:'+p.h+', S:'+p.s+', B:'+p.v;
            p.hsba = 'hsba('+p.h+', '+p.s+', '+p.v+', '+p.a+')';
            if(p.oh||p.os||p.ov||p.oa) p.rc = 'hsba('+(p.oh||p.h)+':'+(p.os||p.s)+':'+(p.ov||p.v)+':'+(p.oa||p.a||1)+')';
            
            q = RV.hsb2rgb(p.h, p.s, p.v, p.a);
            p.r = q.r;
            p.g = q.g;
            p.b = q.b;
            p.rgb = q.rgb;
            p.rgb2 = q.rgb2;
            p.rgba = q.rgba;
            
            q = RV.rgb2hex(p.r, p.g, p.b, p.a);
            p.x = q.x;
            p.x2 = q.x2;
            
            q = RV.rgb2hsl(p.r, p.g, p.b, p.a);
            p.l = q.l;
            p.hsl = q.hsl;
            p.hsl2 = q.hsl2;
            p.hsla = q.hsla;
            
        } else if(o.ct == 'hsl') {
            t = RV.rc(o.h, 'h');
            p.h = t.n;
            if(t.o != null) p.oh = t.o;
            
            t = RV.rc(o.s, 's');
            p.s = t.n;
            if(t.o != null) p.os = t.o;
            
            t = RV.rc(o.l, 'l');
            p.l = t.n;
            if(t.o != null) p.ol = t.o;
            if(o.a || o.a==0) p.a = o.a;
            
            p.hsl = 'hsl('+p.h+', '+p.s+', '+p.l+')';
            p.hsl2 = 'H:'+p.h+', S:'+p.s+', L:'+p.l;
            p.hsla = 'hsla('+p.h+', '+p.s+', '+p.l+', '+p.a+')';
            if(p.oh||p.os||p.ol||p.oa) p.rc = 'hsla('+(p.oh||p.h)+':'+(p.os||p.s)+':'+(p.ol||p.l)+':'+(p.oa||p.a||1)+')';
            
            q = RV.hsl2rgb(p.h, p.s, p.l, p.a);
            p.r = q.r;
            p.g = q.g;
            p.b = q.b;
            p.rgb = q.rgb;
            p.rgb2 = q.rgb2;
            p.rgba = q.rgba;
            
            q = RV.rgb2hex(p.r, p.g, p.b, p.a);
            p.x = q.x;
            p.x2 = q.x2;
            
            q = RV.rgb2hsb(p.r, p.g, p.b, p.a);
            p.v = q.b;
            p.hsb = q.hsb;
            p.hsb2 = q.hsb2;
            p.hsba = q.hsba;
        }
        //CL(p);
        return p;
    },
    
    hsbcv: (A) => { // change value
        var a,c,d,r,g,b,h,s,t,i,o,p,q,h1,h2,s1,s2,b1,b2;
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
        a = RV.gn('rvHsbAv');
        p = a.value || 100;
        
        if(typeof A == 'object' && !A.id) {
            o = A;
        } else if(typeof A == 'string') {
            o = RV.cgc(A, p);
        } else if(A.id == 'rvHexCv' || A.id == 'rvHsbAv') {
            o = RV.cgc(h.value||'#000', p);
        } else if(A.id.indexOf('rvRgb') != -1) {
            o = RV.cgc({ct:'rgb', r:r.value, g:g.value, b:b.value}, p);
        } else if(A.id.indexOf('rvHsb') != -1) {
            o = RV.cgc({ct:'hsb', h:h1.value, s:s1.value, b:b1.value}, p);
        } else if(A.id.indexOf('rvHsl') != -1) {
            o = RV.cgc({ct:'hsl', h:h2.value, s:s2.value, l:b2.value}, p);
        }
        if(!o) return;
        //CL(o);
        
        RV.gn('rvHsbC1').style.backgroundColor = o.rgb;
        h1.value = o.oh || o.h;
        s1.value = o.os || o.s;
        b1.value = o.ov || o.v;
        
        h2.value = o.oh || o.h;
        s2.value = o.os || o.s;
        b2.value = o.ol || o.l;
        
        r.value = o.or || o.r;
        g.value = o.og || o.g;
        b.value = o.ob || o.b;
        
        if(o.a || o.a==0) {
            p = parseInt(o.a*100);
            if(p < 0) p = 0;
            if(p > 100) p = 100;
            a.value = o.oa || p;
        }
        
        c = t.innerHTML;
        if(c == 'HEX') {h.value = i = o.x.toUpperCase(); h.setAttribute('title', i);}
        else if(c == 'HEX2') {h.value = i = o.x2.toUpperCase(); h.setAttribute('title', i);}
        else if(c == 'RGB') {h.value = i = o.rgb.toLowerCase(); h.setAttribute('title', i);}
        else if(c == 'RGB2') {h.value = i = o.rgb2.toUpperCase(); h.setAttribute('title', i);}
        else if(c == 'RGBA') {h.value = i = o.rgba.toLowerCase(); h.setAttribute('title', i);}
        else if(c == 'HSB') {h.value = i = o.hsb.toLowerCase(); h.setAttribute('title', i);}
        else if(c == 'HSB2') {h.value = i = o.hsb2.toUpperCase(); h.setAttribute('title', i);}
        else if(c == 'HSBA') {h.value = i = o.hsba.toLowerCase(); h.setAttribute('title', i);}
        else if(c == 'HSL') {h.value = i = o.hsl.toLowerCase(); h.setAttribute('title', i);}
        else if(c == 'HSL2') {h.value = i = o.hsl2.toUpperCase(); h.setAttribute('title', i);}
        else if(c == 'HSLA') {h.value = i = o.hsla.toLowerCase(); h.setAttribute('title', i);}
        else if(c == 'RC') {
            h.value = i = o.rc? o.rc.toLowerCase() : 'none';
            h.setAttribute('title', i);
        } else if(c == 'LF') {
            h.value = i = RV.FM=='LF' && RV.LRP.lf? RV.LRP.lf.toLowerCase() : 'none';
            h.setAttribute('title', i);
        } else if(c == 'RF') {
            h.value = i = RV.FM=='RF' && RV.LRP.rf? RV.LRP.rf.toLowerCase() : 'none';
            h.setAttribute('title', i);
        } else if(c == 'PF') {
            h.value = i = RV.FM=='PF' && RV.LRP.pf? RV.LRP.pf.toLowerCase() : 'none';
            h.setAttribute('title', i);
        }
        
        if(RV.SGN) {
            RV.SGN.style.backgroundColor = o.x;
            if(RV.SGN.id.indexOf('rvHsbLf_') != -1) {RV.SGN.setAttribute('a',p); RV.slf();}
            if(RV.SGN.id.indexOf('rvHsbRf_') != -1) {RV.SGN.setAttribute('a',p); RV.srf();}
            if(RV.SGN.id.indexOf('rvHsbPf') != -1) {RV.spf();}
        }
        
        if(Object.keys(RV.SELE).length > 0) {
            if(RV.FM=='CF') RV.sea(RV.FT, o.rc||o.rgba);
        }
        
        d = o.x.toUpperCase();
        if(RV.CR) RV[RV.CR] = o.rc||d;
        if(RV.MDF && RV.MDF.id != 'rvHexCt') {
            if(RV.MDF.tagName == 'INPUT') RV.MDF.value = o.rc||d;
            else if(RV.MDF.tagName == 'DIV') RV.MDF.style.backgroundColor = d;
        }
        
        if(RV.IKEY == 'set.sys.rc') {
            RV.RC = o;
            RV.mc('RyView');
        }
    },
    
    mcv: (A, B) => { // modify color value
        var a,a2,b,c,d;
        A = (A || '').toLowerCase();
        B = parseFloat(B) || 1;
        if(!A) return;
        else if(A == 'h') {a = RV.gn('rvHsbHv'); a2 = RV.gn('rvHslHv');}
        else if(A == 's') {a = RV.gn('rvHsbSv'); a2 = RV.gn('rvHslSv');}
        else if(A == 'v') a = RV.gn('rvHsbBv');
        else if(A == 'l') a = RV.gn('rvHslLv');
        else if(A == 'r') a = RV.gn('rvRgbRv');
        else if(A == 'g') a = RV.gn('rvRgbGv');
        else if(A == 'b') a = RV.gn('rvRgbBv');
        else if(A == 'a') a = RV.gn('rvRgbAv');
        if(!a) return;
        b = parseFloat(a.value) || 0;
        c = b + B;
        
        if(A == 'h' && (c<0 || c>=360)) c = 0;
        else if(A == 's' && (c<0 || c>100)) c = 0;
        else if(A == 'v' && (c<0 || c>100)) c = 0;
        else if(A == 'l' && (c<0 || c>100)) c = 0;
        else if(A == 'r' && (c<0 || c>255)) c = 0;
        else if(A == 'g' && (c<0 || c>255)) c = 0;
        else if(A == 'b' && (c<0 || c>255)) c = 0;
        else if(A == 'a' && (c<0 || c>100)) c = 0;
        a.value = c;
        if(a2) a2.value = c;
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
        h = Math.round((y-c-d) * (360/b.offsetHeight));
        if(h >= 360) h = 0;
        RV.hsbH = h;
        e = RV.hsb2rgb(h, 100, 100);
        f = RV.gn('rvHsbH');
        f.style.backgroundColor = e.rgb;
        RV.hsb();
    },
    
    cfm: (A, B) => { // change fill mode
        var a,b;
        RV.FT = B || 'fs'; // fill type: fs or ls
        a = A || 'CF';
        b = {CF:'LF', LF:'RF', RF:'PF', PF:'CF'};
        if(typeof A == 'object') a = b[A.innerHTML];
        RV.sn('rvHsb');
        if(a == 'CF') {
            RV.gn('rvHsbBtn').innerHTML = 'CF';
            RV.sn('rvHsbCf');
            RV.hn('rvHsbLf');
            RV.hn('rvHsbRf');
            RV.hn('rvHsbPf');
            RV.hn('rvHsbRfBegB');
            RV.hn('rvHsbRfEndB');
            RV.hn('rvHsbPfRpIl');
            RV.hn('rvHsbPfRpRl');
            RV.FM = 'CF';
            RV.SGN = RV.gn('rvHsbCfbg');
            RV.LRP.cf = '#f00';
            RV.LRP.lf = '';
            RV.LRP.rf = '';
            RV.LRP.pf = '';
            
        } else if(a == 'LF') {
            RV.gn('rvHsbBtn').innerHTML = 'LF';
            RV.sn('rvHsbLf');
            RV.hn('rvHsbCf');
            RV.hn('rvHsbRf');
            RV.hn('rvHsbPf');
            RV.hn('rvHsbRfBegB');
            RV.hn('rvHsbRfEndB');
            RV.hn('rvHsbPfRpIl');
            RV.hn('rvHsbPfRpRl');
            RV.FM = 'LF';
            RV.SGN = RV.gn('rvHsbLf_0');
            RV.LRP.cf = '';
            RV.LRP.lf = '#f00';
            RV.LRP.rf = '';
            RV.LRP.pf = '';
            
        } else if(a == 'RF') {
            RV.gn('rvHsbBtn').innerHTML = 'RF';
            RV.sn('rvHsbRf');
            RV.hn('rvHsbCf');
            RV.hn('rvHsbLf');
            RV.hn('rvHsbPf');
            RV.hn('rvHsbPfRpIl');
            RV.hn('rvHsbPfRpRl');
            RV.FM = 'RF';
            RV.SGN = RV.gn('rvHsbRf_0');
            RV.LRP.cf = '';
            RV.LRP.lf = '';
            RV.LRP.rf = '#f00';
            RV.LRP.pf = '';
            
        } else if(a == 'PF') {
            RV.gn('rvHsbBtn').innerHTML = 'PF';
            RV.sn('rvHsbPf');
            RV.sn('rvHsbPfRpIl');
            RV.sn('rvHsbPfRpRl');
            RV.hn('rvHsbCf');
            RV.hn('rvHsbLf');
            RV.hn('rvHsbRf');
            RV.hn('rvHsbRfBegB');
            RV.hn('rvHsbRfEndB');
            RV.FM = 'PF';
            RV.SGN = RV.gn('rvHsbPfbg');
            RV.LRP.cf = '';
            RV.LRP.lf = '';
            RV.LRP.rf = '';
            RV.LRP.pf = '#f00';
        }
    },
    
    slr: (A) => { // select linear or radial
        var a,b,c,d;
        RV.SGN = A;
        a = parseInt(A.getAttribute('a')) || 100;
        b = RV.gn('rvHsbAv');
        if(b) b.value = a;
        b = A.style.backgroundColor || 'rgba(0, 0, 0, 1)';
        if(RV.FM == 'LF') {
            c = RV.fn((A.offsetTop || 0) / 90, 2) * 100;
            d = RV.gn('rvHsbLfP');
            if(d) d.innerHTML = c;
        } else if(RV.FM == 'RF') {
            c = RV.fn((A.offsetTop || 0) / 70, 2) * 100;
            d = RV.gn('rvHsbRfP');
            if(d) d.innerHTML = c;
        }
        RV.hsbcv(b);
    },
    
    alf: (A) => { // add linear fill
        var a,b,c,d;
        a = RV.gn('rvHsbLfC');
        b = RV.gn('rvTMP');
        b.innerHTML = '<div id="rvHsbLf_'+RV.rs(4)+'" class="rvHsbLRc" onmousedown="RV.slr(this)" onclick="RV.slr(this)" ondblclick="RV.dlf(this)" mn="1"></div>';
        c = a.appendChild(b.firstChild);
        d = RV.Y1 - RV.gn('rvHsb').offsetTop - 5;
        if(d > 80) d = 80;
        c.style.top = d + 'px';
        c.style.backgroundColor = '#fff';
        RV.slr(c);
    },
    
    dlf: (A) => { // del linear fill
        var a,b;
        a = A.parentNode
        b = a.childNodes;
        if(b.length > 3) {
            a.removeChild(A);
            RV.slf();
        }
    },
    
    slf: (A) => { // set linear fill
        var a,b,c,d,e,f,m,n,p,z;
        n = RV.gn('rvHsbLfP');
        m = parseInt(RV.gn('rvHsbLfA').innerHTML) || 0;
        a = RV.gn('rvHsbLfC');
        b = a.childNodes;
        c = {};
        for(z=1; z<b.length; z++) {
            d = b[z].offsetTop / a.offsetHeight;
            e = b[z].style.backgroundColor || 'rgba(0, 0, 0, 1)';
            p = RV.fn((parseInt(b[z].getAttribute('a')) || 100) / 100, 2);
            f = RV.cgc(e, p);
            if(!f) continue;
            else e = f.rgba;
            if(d > .5) d += 10/90;
            if(d > 1) d = 1;
            d = RV.fn(d, 2);
            if(n && RV.SGN == b[z]) n.innerHTML = d * 100;
            c[z] = {p:d, c:e};
        }
        d = Object.keys(c).sort(function(A, B) {
            return c[A].p - c[B].p;
        });
        
        e = [];
        f = ['lf '+m];
        for(z=0; z<d.length; z++) {
            e.push(c[d[z]].c +' '+ c[d[z]].p*100 + '%');
            f.push(c[d[z]].p +', '+ (c[d[z]].c||'').replace(/ *\, */g, ':'));
        }
        e = e.join(', ');
        f = f.join(', ');
        e = 'linear-gradient(to bottom, '+e+')';
        RV.gn('rvHsbLfbg').style.background = e;
        RV.LRP.cf = null;
        RV.LRP.lf = f;
        RV.LRP.rf = null;
        RV.LRP.pf = null;
        RV.sea(RV.FT, f);
        return f;
    },
    
    arf: (A) => { // add radial fill
        var a,b,c,d;
        a = RV.gn('rvHsbRfC');
        b = RV.gn('rvTMP');
        b.innerHTML = '<div id="rvHsbRf_'+RV.rs(4)+'" class="rvHsbLRc" onmousedown="RV.slr(this)" onclick="RV.slr(this)" ondblclick="RV.drf(this)" mn="1"></div>';
        c = a.appendChild(b.firstChild);
        d = RV.Y1 - RV.gn('rvHsb').offsetTop - 5;
        if(d > 60) d = 60;
        c.style.top = d + 'px';
        c.style.backgroundColor = '#fff';
        RV.slr(c);
    },
    
    drf: (A) => { // del radial fill
        var a,b;
        a = A.parentNode
        b = a.childNodes;
        if(b.length > 3) {
            a.removeChild(A);
            RV.srf();
        }
    },
    
    srf: (A) => { // set radial fill
        var a,b,c,d,e,f,m,n,p,z,x1,y1,r1,x2,y2,r2;
        x1 = parseInt(RV.gn('rvHsbRfBegB_x1').innerHTML) || 0;
        y1 = parseInt(RV.gn('rvHsbRfBegB_y1').innerHTML) || 0;
        r1 = parseInt(RV.gn('rvHsbRfBegB_r1').innerHTML) || 0;
        x2 = parseInt(RV.gn('rvHsbRfEndB_x2').innerHTML) || 0;
        y2 = parseInt(RV.gn('rvHsbRfEndB_y2').innerHTML) || 0;
        r2 = parseInt(RV.gn('rvHsbRfEndB_r2').innerHTML) || 0;
        if(x1 < 0) x1 = 0;
        if(x1 > 100) x1 = 100;
        if(y1 < 0) y1 = 0;
        if(y1 > 100) y1 = 100;
        if(r1 < 0) r1 = 0;
        if(r1 > 100) r1 = 100;
        if(x2 < 0) x2 = 0;
        if(x2 > 100) x2 = 100;
        if(y2 < 0) y2 = 0;
        if(y2 > 100) y2 = 100;
        if(r2 < 0) r2 = 0;
        if(r2 > 100) r2 = 100;
        
        m = x1+', '+y1+', '+r1+', '+x2+', '+y2+', '+r2;
        n = RV.gn('rvHsbRfP');
        a = RV.gn('rvHsbRfC');
        b = a.childNodes;
        c = {};
        for(z=1; z<b.length; z++) {
            d = b[z].offsetTop / a.offsetHeight;
            e = b[z].style.backgroundColor || 'rgba(0, 0, 0, 1)';
            p = RV.fn((parseInt(b[z].getAttribute('a')) || 100) / 100, 2);
            f = RV.cgc(e, p);
            if(!f) continue;
            else e = f.rgba;
            if(d > .5) d += 10/70;
            if(d > 1) d = 1;
            d = RV.fn(d, 2);
            if(n && RV.SGN == b[z]) n.innerHTML = d * 100;
            c[z] = {p:d, c:e};
        }
        d = Object.keys(c).sort(function(A, B) {
            return c[A].p - c[B].p;
        });
        
        e = [];
        f = ['rf '+m];
        for(z=0; z<d.length; z++) {
            e.push(c[d[z]].c +' '+ c[d[z]].p*100 + '%');
            f.push(c[d[z]].p +', '+ (c[d[z]].c||'').replace(/ *\, */g, ':'));
        }
        e = e.join(', ');
        f = f.join(', ');
        e = 'radial-gradient('+e+')';
        RV.gn('rvHsbRfbg').style.background = e;
        RV.LRP.cf = null;
        RV.LRP.lf = null;
        RV.LRP.rf = f;
        RV.LRP.pf = null;
        RV.sea(RV.FT, f);
        return f;
    },
    
    spf: (A) => { // set pattern fill
        var a,b,c,d,e,f,r;
        r = {r:'repeat', x:'repeat-x', y:'repeat-y', n:'no-repeat'};
        a = RV.gn('rvHsbPfRpIl').value || '$Pcb';
        b = RV.gn('rvHsbPfRpRl').value || 'r';
        c = RV.gn('rvHsbPfbg');
        d = RV.ico(a);
        e = 'url('+d+')';
        f = 'pf '+a+', ' + b;
        c.style.backgroundImage = e;
        c.style.backgroundRepeat = r[b] || 'repeat';
        RV.LRP.cf = null;
        RV.LRP.lf = null;
        RV.LRP.rf = null;
        RV.LRP.pf = f;
        RV.sea(RV.FT, f);
        return f;
    },
    
    hex2rgb: (H, A) => { // hex to rgb
        var r,g,b,s;
        A = parseFloat(A) || 1;
        if(A < 0) A = 0;
        if(A > 1) A = 1;
        s = (H+'').replace('#', '');
        if(s.length == 3) {
            r = parseInt(s.substr(0, 1), 16);
            r = r * 16 + r;
            g = parseInt(s.substr(1, 1), 16);
            g = g * 16 + g;
            b = parseInt(s.substr(2, 1), 16);
            b = b * 16 + b;
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
        return {r:r, g:g, b:b, a:A, rgb:'rgb('+r+', '+g+', '+b+')', rgb2:'R:'+r+', G:'+g+', B:'+b, rgba:'rgba('+r+', '+g+', '+b+', '+A+')'};
    },
    
    rgb2hex: (R, G, B, A) => { // rgb to hex
        var r,g,b,h,s;
        A = parseFloat(A) || 1;
        if(A < 0) A = 0;
        if(A > 1) A = 1;
        if(typeof R == 'string' && (R+'').substr(0,4)=='rgb(') {
            s = (R+'').replace('rgb(', '');
            s = s.replace(')', '');
            s = s.split(/ *\, */);
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
        return {x:'#'+h, x2:h, a:A};
    },
    
    rgb2hsb: (R, G, B, A) => { // rgb to hsb
        var r,g,b,h,s,v,f,l,m,n;
        A = parseFloat(A) || 1;
        if(A < 0) A = 0;
        if(A > 1) A = 1;
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
        return {h:h, s:s, b:v, a:A, hsb:'hsb('+h+', '+s+', '+v+')', hsb2:'H:'+h+', S:'+s+', B:'+v, hsba:'hsba('+h+', '+s+', '+v+', '+A+')'};
    },
    
    hsb2rgb: (H, S, B, A) => { // hsb to rgb
        var r,g,b,h,s,v,f,p,q,t;
        A = parseFloat(A) || 1;
        if(A < 0) A = 0;
        if(A > 1) A = 1;
        H = parseInt(H) || 0;
        S = parseInt(S) || 0;
        B = parseInt(B) || 0;
        if(H < 0) H = 0;
        if(H >= 360) H = 0;
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
        return {r:r, g:g, b:b, a:A, rgb:'rgb('+r+', '+g+', '+b+')', rgb2:'R:'+r+', G:'+g+', B:'+b, rgba:'rgba('+r+', '+g+', '+b+', '+A+')'};
    },
    
    rgb2hsl: (R, G, B, A) => { // rgb to hsl
        var r,g,b,h,s,l,f,m,n;
        A = parseFloat(A) || 1;
        if(A < 0) A = 0;
        if(A > 1) A = 1;
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
        return {h:h, s:s, l:l, a:A, hsl:'hsl('+h+', '+s+'%, '+l+'%)', hsl2:'H:'+h+', S:'+s+', L:'+l, hsla:'hsla('+h+', '+s+'%, '+l+'%, '+A+')'};
    },
    
    hsl2rgb: (H, S, L, A) => { // hsl to rgb
        var h,s,l,p,q,c,i,r,g,b,rgb;
        A = parseFloat(A) || 1;
        if(A < 0) A = 0;
        if(A > 1) A = 1;
        H = parseInt(H) || 0;
        S = parseInt(S) || 0;
        L = parseInt(L) || 0;
        if(H < 0) H = 0;
        if(H >= 360) H = 0;
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
        return {r:r, g:g, b:b, a:A, rgb:'rgb('+r+', '+g+', '+b+')', rgb2:'R:'+r+', G:'+g+', B:'+b, rgba:'rgba('+r+', '+g+', '+b+', '+A+')'};
    },
    
    hue: (A, B) => { // hue
        B = B || 50;
        A += Math.round(RV.rr(-(B)+'-'+B));
        if(A < 0) A += 360;
        else if(A >= 360) A -= 360;
        return A;
    },
    
    hsla: (H, S, L, A) => { // return hsla color
        return 'hsla(' +H+ ',' +S+ '%,' +L+ '%,' +A+ ')';
    },
    
    tts: (A, B) => { // text to speec
        var ssu = new SpeechSynthesisUtterance();
        B = B || {};
        ssu.text = A || '';
        ssu.lang = B.l || RV.ini2.set.sys.ttsl || '';
        ssu.pitch = B.p || RV.ini2.set.sys.ttsp || 0;
        ssu.rate = B.r || RV.ini2.set.sys.ttsr || 1;
        ssu.volume = B.v || RV.ini2.set.sys.ttsv || 1;
        speechSynthesis.speak(ssu);
        //CL([speechSynthesis, ssu]);
    },
    
    msg: (A, B, C) => { // show msg
        // A: msg content
        // B: auto hide msgBox time
        // C: node obj
        var a,b,c,d;
        B = B || 5;
        C = RV.gn(C);
        if(C) {
            A = '<div class="msg">'+A+'</div>';
            C.innerHTML = A;
            return;
        }
        a = RV.gn('rvTMP');
        a.innerHTML = '<div class="txt" title="'+A+'">'+RV.ts(0, 'h:i:s')+' '+A+'</div>';
        b = RV.gn('rvMSG');
        b.appendChild(a.firstChild);
        if(b.childNodes.length > 3) b.removeChild(b.firstChild);
        RV.sn(b, 'n_', B, 'i_');
    },
    
    ts: (A, B, C) => {
        var a,b,c,d,t,y,m,d,h,i,s,y2,m2,d2,h2,i2,s2;
        s2 = 1000;
        i2 = s2 * 60;
        h2 = i2 * 60;
        d2 = h2 * 24;
        m2 = d2 * 30;
        y2 = m2 * 365;
        a = new Date();
        b = a.getTime();
        if(!A) A = b;
        if(((b+'').length-(A+'').length)==3) A = A+'000';
        A = parseInt(A) || 0;
        B = B || 'y-m-d h:i:s';
        c = b - A;
        if(C) { // 在指定时段内输出时间差
            if(c >= y2) t = Math.floor(c/y2)+'年前';
            else if(c >= m2) t = Math.floor(c/m2)+'个月前';
            else if(c >= d2) t = Math.floor(c/d2)+'天前';
            else if(c >= h2) t = Math.floor(c/h2)+'小时前';
            else if(c >= i2) t = Math.floor(c/i2)+'分钟前';
            else t = Math.floor(c/s2)+'秒钟前';
        } else {
            a.setTime(A);
            y = a.getFullYear();
            m = ('0'+(a.getMonth()+1)).slice(-2);
            d = ('0'+a.getDate()).slice(-2);
            h = ('0'+a.getHours()).slice(-2);
            i = ('0'+a.getMinutes()).slice(-2);
            s = ('0'+a.getSeconds()).slice(-2);
            
            t = B;
            t = t.replace('y', y);
            t = t.replace('m', m);
            t = t.replace('d', d);
            t = t.replace('h', h);
            t = t.replace('i', i);
            t = t.replace('s', s);
        }
        return t;
    },
    
    fw: (A, B, C) => { // float window
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
        var a,b,c,d,e,f,g,i,j,k,l,m,n,o,p,q,r,s,t,w,h,w2,h2,z;
        a = RV.gn('rvLB');
        b = RV.gn('rvRB');
        c = RV.gn('rvRB0');
        d = RV.gn('rvRB1');
        e = RV.gn('rvRB2');
        o = RV.gn('rvTL');
        p = RV.gn('rvTLtr');
        q = RV.gn('rvTLpgB');
        r = RV.gn('rvTLb');
        w = document.body.offsetWidth;
        h = document.body.offsetHeight;
        
        f = RV.ini2.set.vdo.vp || '16:9';
        g = parseInt(RV.ini2.set.vdo.vs) || 720;
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
        n = RV.gn('RyView');
        if(w/h >= 0.75) {
            b.style.width = '300px';
            b.style.left = 'auto';
            b.style.right = '0';
            b.style.top = '0';
            c.setAttribute('rs', '0');
            j = w - b.offsetWidth;
            a.style.width = j + 'px';
            
            k = Math.round((h-25)*.3);
            if(A) l = RV.H1 - (RV.Y - RV.Y1);
            else l = k;
            if(l < k) l = k;
            h2 = h - l - 20;
            w2 = h2 * i;
            if(w2 > (j-20)) {
                w2 = j - 20;
                h2 = w2 / i;
                l = h - (h2+20);
            }
            e.style.height = h - c.offsetHeight - d.offsetHeight - 32 + 'px';
            s = e.firstChild || '';
            s = s.firstChild || '';
            s = s.nextSibling || '';
            if(s && s.className == 'rvLabC') s.style.height = e.offsetHeight - 35 + 'px';
            o.style.height = l + 'px';
            p.style.width = o.offsetWidth - 148 + 'px';
            q.style.width = p.offsetWidth - 130 - 10 + 'px';
            r.style.height = l - 27 + 'px';
            
        } else {
            a.style.width = 'auto';
            b.style.width = 'auto';
            b.style.left = '0';
            b.style.right = 'auto';
            c.setAttribute('rs', '1');
            
            if(A) {
                j = Math.round((h-25)*.15);
                k = RV.H1 - (RV.Y - RV.Y1);
                if(k < j) k = j;
                if(A.id == 'rvTL') {
                    l = b.offsetHeight;
                    m = k;
                } else {
                    l = k;
                    m = o.offsetHeight;
                }
            } else {
                j = Math.round((h-25)*.3);
                l = j;
                m = j;
            }
            
            h2 = h - l - m - 20;
            w2 = h2 * i;
            if(w2 > (w-20)) {
                w2 = w - 20;
                h2 = w2 / i;
                if(A) {
                    if(A.id == 'rvTL') {
                        l = h - (h2+20) - m;
                    } else {
                        m = h - (h2+20) - l;
                    }
                }
                else m = h - (h2+20) - l;
            }
            
            a.style.height = (h2+20) + l + 'px';
            o.style.height = l + 'px';
            b.style.height = m + 'px';
            b.style.top = (h2+20) - 25 + l + 'px';
            e.style.height = m - c.offsetHeight - d.offsetHeight - 32 + 'px';
            s = e.firstChild || '';
            s = s.firstChild || '';
            s = s.nextSibling || '';
            if(s && s.className == 'rvLabC') s.style.height = e.offsetHeight - 35 + 'px';
            
            p.style.width = w - 146 + 'px';
            q.style.width = p.offsetWidth - 130 - 10 + 'px';
            r.style.height = l - 27 + 'px';
        }
        
        RV.cw2 = w2;
        RV.ch2 = h2;
        n = RV.gn('rvCvsBox');
        n.style.width = w2 + 'px';
        n.style.height = h2 + 'px';
        n = RV.gn('rvVdo');
        n.style.width = w2 + 'px';
        n.style.height = h2 + 'px';
        
        RV.CV3.width = RV.CV3T.width = RV.CVX.width = RV.CVH.width = RV.CVT.width = RV.cw;
        RV.CV3.height = RV.CV3T.height = RV.CVX.height = RV.CVH.height = RV.CVT.height = RV.ch;
        RV.CV3.style.width = RV.CV3T.style.width = RV.CVX.style.width = RV.CVH.style.width = RV.CVT.style.width = w2 + 'px';
        RV.CV3.style.height = RV.CV3T.style.height = RV.CVX.style.height = RV.CVH.style.height = RV.CVT.style.height = h2 + 'px';
        
        l = RV.CBF;
        if(l > 100) l = 100;
        for(z=0; z<l; z++) {
            RV.CVS['cv'+z].width = RV.cw;
            RV.CVS['cv'+z].height = RV.ch*50;
            RV.CVS['cv'+z].style.width = RV.cw2 + 'px';
            RV.CVS['cv'+z].style.height = RV.ch2 + 'px';
        }
        
        RV.ren();
    },
    
    cstt: (A) => { // change state bar
        var a,b,c,d,e,f,g,h,k,l,m,o,s,u,y,z;
        l = RV.lg[RV.LG];
        k = RV.KO.kfo || '';
        a = RV.DM;
        if(a == '2d') {
            b = l.set.key.a2 = l.set.key.a2 || {};
            u = RV.UT + '(dpi)';
        } else {
            b = l.set.key.a3 = l.set.key.a3 || {};
            u = RV.UT;
        }
        b = b[RV.TL] || '';
        c = Math.round(RV.X) || 0;
        d = Math.round(RV.Y) || 0;
        e = RV.DCT || '';
        f = RV.LCT || '';
        g = RV.PCT || '';
        h = [];
        if(RV.TL == 'e') o = RV.SELE = RV.SELE || {};
        else o = RV.SELA = RV.SELA || {};
        for(z in o) {
            if(RV.TL == 'e') {
                h.push(z);
            } else {
                for(y in o[z]) {
                    h.push(y);
                }
            }
        }
        h = h.join(', ');
        m = '';
        if(a == '3d') m = ' | Dot: '+e+' | Line: '+f+' | Plane: '+g;
        s = 'Key: '+k+' | DM: '+a+' | UT: '+u+' | Tool: '+b+' | X: '+c+' | Y: '+d+m+' | Sel: '+h;
        RV.gn('rvStt').innerHTML = s;
    },
    
    cdm: (A) => { // change design mode
        var a,b,c,d,l,n,s,z;
        l = RV.lg[RV.LG];
        if(A=='2d' || A=='3d') RV.DM = a = A;
        else a = RV.DM;
        if(a == '2d') {
            RV.KO.kfo = 'A2';
            b = RV.ini2.set.key.a2 = RV.ini2.set.key.a2 || {};
            c = l.set.key.a2 || {};
            RV.UT = parseInt(RV.ini2.set.sys.dpi) || 72;
            RV.sn(RV.CVX);
            RV.hn(RV.CV3);
        } else {
            RV.KO.kfo = 'A3';
            b = RV.ini2.set.key.a3 = RV.ini2.set.key.a3 || {};
            c = l.set.key.a3 || {};
            RV.UT = (RV.ini2.set.sys.ut||'m').toLowerCase();
            RV.sn(RV.CV3);
            RV.hn(RV.CVX);
        }
        if(RV.SMN == 'ds') RV.smn('ds');
        else if(RV.SMN == 'src') RV.smn('src');
        
        s = [];
        for(z in b) {
            if(z=='des' || z=='K') continue;
            s.push('<div class="rvTbT" onclick="RV.selt(\''+z+'\');RV.se()" title="'+(c[z]||z)+'">'+z.toUpperCase()+'</div>');
        }
        s = '<div class="rvTbT" onclick="if(RV.DM.toUpperCase()==\'3d\') RV.cdm(\'2d\');else RV.cdm(\'3d\');RV.se()">'+a+'</div>'+s.join('')+'<div class="rvTbT">T</div>';
        
        n = RV.gn('rvTB');
        if(a == '2d') a = 'D2';
        else a = 'D3';
        if(n.className.indexOf('n_') != -1) {
            n.className = a+' n_';
            n.innerHTML = s;
        } else {
            n.className = a+' i_';
            n.innerHTML = '<div class="rvTbT">T</div>';
        }
        RV.cstt();
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
        if(!A) return;
        var p = A.parentNode;
        p.removeChild(A);
    },
    
    sn: (A, B, C, D) => { // show node
        // A: node obj
        // B: show style type(i_, a_, n_, h_, o_, d_, u_, s_, f_; min, max, normal, hidden, over, down, up, select, fixed)
        // C: auto action time
        // D: auto action type, default hide
        var a,b,c,d;
        A = RV.gn(A);
        if(!A) return;
        B = B || '';
        C = C || 0;
        D = D || 'h_';
        clearTimeout(A.getAttribute('tid'));
        a = A.className;
        if(!B) {
            if(a.indexOf('i_')>-1) B = 'i_';
            else if(a.indexOf('n_')>-1) B = 'n_';
            else if(a.indexOf('a_')>-1) B = 'a_';
        }
        a = a.replace(/ *[ianhodusf]{1}_{1}/g, '');
        A.className = a + ' ' + B;
        
        if(C > 0) {
            t = setTimeout(function() {
                RV.hn(A, D);
            }, C*1000);
            A.setAttribute('tid', t);
        }
    },
    
    hn: (A, B) => { // hide node
        var a;
        A = RV.gn(A);
        if(!A) return;
        a = A.className;
        if(!B) {
            if(a.indexOf('i_')>-1) B = 'i_ h_';
            else if(a.indexOf('n_')>-1) B = 'n_ h_';
            else if(a.indexOf('a_')>-1) B = 'a_ h_';
            else B = 'h_';
        }
        a = a.replace(/ *[ianhodusf]{1}_{1}/g, '');
        A.className = a+ ' ' +B;
    },
    
    sh: (A) => { // show hide
        A = RV.gn(A);
        var a = A.className;
        if (a.indexOf('h_') > -1) RV.sn(A);
        else RV.hn(A);
    },
    
    sel: (A, B, C) => { // select node
        var a,b,c,d,e,f,i,l,p,z;
        A = RV.gn(A);
        if(!A) return;
        B = B || 0; // is multiple select
        C = C || 0; // is select
        
        p = A.parentNode;
		a = p.childNodes;
        b = A.getAttribute('ss'); // select state
        c = p.getAttribute('sm'); // select mode
        
        if(B == 1) { // multiple select
            if(C == 1) {
                A.className = A.className.replace(/ *s_/g, '') + ' s_';
                A.setAttribute('ss', '1');
            } else {
                A.className = A.className.replace(/ *s_/g, '');
                A.setAttribute('ss', '0');
            }
            return;
            
        } else if(B == 2) {
            i = [];
            for(z=0; z<a.length; z++) {
                if(a[z].nodeType!=1) continue;
                d = a[z].getAttribute('dir');
                e = a[z].className;
                if(e == 'cl') continue;
                if(C == 1) { // all select
                    a[z].className = e.replace(/ *s_/g, '') + ' s_';
                    a[z].setAttribute('ss', '1');
                    if(d == 1) i.push(RV.sel(a[z].firstChild, 2, 1));
                    else i.push(a[z].id);
                    
                } else if(C == 2) { // reverse all select
                    if(a[z].className.indexOf('s_') != -1) {
                        a[z].className = e.replace(/ *s_/g, '');
                        a[z].setAttribute('ss', '0');
                        if(d == 1) RV.sel(a[z].firstChild, 2, 0);
                    } else {
                        a[z].className = e.replace(/ *s_/g, '') + ' s_';
                        a[z].setAttribute('ss', '1');
                        if(d == 1) i.push(RV.sel(a[z].firstChild, 2, 1));
                        else i.push(a[z].id);
                    }
                    
                } else { // cancel all select
                    a[z].className = e.replace(/ *s_/g, '');
                    a[z].setAttribute('ss', '0');
                    if(d == 1) RV.sel(a[z].firstChild, 2, 0);
                }
            }
            i = i.join(',');
            return i;
        }
        
        if(c == 2) { // reverse select
            if(b == 1) {
                A.className = A.className.replace(/ *s_/g, '');
                A.setAttribute('ss', '0');
            } else {
                A.className = A.className + ' s_';
                A.setAttribute('ss', '1');
            }
            
        } else { // single select
            for(z = 0; z < a.length; z++) {
                if(a[z].nodeType!=1) continue;
                if(A == a[z]) d = z;
                e = a[z].className;
                a[z].className = e.replace(/ *s_/g, '');
                a[z].setAttribute('ss', '0');
            }
            A.className = A.className + ' s_';
            A.setAttribute('ss', '1');
            return d;
        }
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
            a.id = 'CSS_' + A;
            a.setAttribute('type', 'text/css');
        }
        b = RV.isie();
        if (b[0]=='IE' && b[1]<11) a.styleSheet.cssText = B;
        else a.innerHTML = B;
        return a;
    },
    
    mc: (A) => { // modify css
        var a,b,c,d,e,f,g,h,m,n,s,z;
        A = 'CSS_' + A;
        a = RV.gn(A);
        if (!a) {
            h = document.getElementsByTagName('head')[0];
            a = h.appendChild(document.createElement('style'));
            a.id = 'CSS_' + A;
            a.setAttribute('type', 'text/css');
        }
        b = RV.isie();
        if (b[0]=='IE' && b[1]<11) c = a.styleSheet.cssText;
        else c = a.innerHTML;
        c = RV.e36(RV.css, 2) || c;
        
        c = c.split(':E2d:');
        s = [c[0]||''];
        for(z=1; z<c.length; z++) {
            d = c[z] || '';
            e = d.indexOf(')');
            if(!d || e<0) {
                s.push(d);
                continue;
            }
            f = d.substr(0, e);
            g = d.substr(e);
            
            h = RV.src.ico[f];
            if(h) {
                h = RV.ico(h);
                s.push(h+g);
            } else {
                s.push(g);
            }
        }
        
        s = s.join('');
        if (b[0]=='IE' && b[1]<11) a.styleSheet.cssText = s;
        else a.innerHTML = s;
    },
    
    ge: (A) => { // get event obj
        var a, b;
        b = window.event;
        if (b) return b;
        a = RV.ge.caller;
        while (a != null) {
            b = a.arguments[0];
            if (b) {
                if ((b.constructor == Event || b.constructor == MouseEvent) || (typeof b == 'object' && b.preventDefault && b.stopPropagation)) return b;
            }
            a = a.caller;
        }
        return null;
    },
    
    ae: (A, B, C, D) => { // add event obj
        A = RV.gn(A);
        if (!A) return;
        D = D || true;
        if (A.attachEvent) A.attachEvent('on' + B, C);
        else A.addEventListener(B, C, D);
    },
    
    se: (A) => { // stop event
        var e = RV.ge();
        if (e.cancelBubble) e.cancelBubble = true;
        else e.stopPropagation();
    },
    
    mo: (A) => { // mouse over
        var a, b, c, d, o, t;
        A = A || window.event;
        o = A.srcElement || A.target;
        RV.MS = 'mo';
    },
    
    md: (A) => { // mouse down
        var a, b, c, d, i, j, m, n, o, l, t, x, y, z;
        A = A || window.event;
        o = A.srcElement || A.target;
        RV.MS = 'md';
        RV.FMV = 0; // first move
        RV.MN = null; // move node
        RV.RS = null; // resize node
        
        if (A.pageX || A.pageY) {
            if(RV.LKX) RV.Y1 = y = RV.Y1 || 0;
            else RV.Y1 = y = A.pageY;
            if(RV.LKY) RV.X1 = x = RV.X1 || 0;
            else RV.X1 = x = A.pageX;
        } else {
            if(RV.LKX) RV.Y1 = y = RV.Y1 || 0;
            else RV.Y1 = y = A.clientY;
            if(RV.LKY) RV.X1 = x = RV.X1 || 0;
            else RV.X1 = x = A.clientX;
        }
        
        a = o.tagName;
        if (a == 'TEXTAREA' || a == 'INPUT' || o.getAttribute('contentEditable') == 'true') {
            RV.KO.kl = 1;
        }
        if(o.id=='rvHsbB' || o.id=='rvHsbHue' || o.id=='rvHsbLfbg') m = 1;
        
        a = o;
        z = 0;
        while (z++<5) {
            if (!a || a.tagName == 'BODY') break;
            b = a.getAttribute('mn');
            c = a.getAttribute('rs');
            if (!RV.MN && b == 1) RV.MN = a;
            if (!RV.RS && c == 1) RV.RS = a;
            if (RV.RS && RV.RS) break;
            a = a.parentNode;
        }
        
        if (RV.MN && !m && !RV.KO.kl) {
            a = RV.MN;
            RV.L1 = a.offsetLeft || 0;
            RV.T1 = a.offsetTop || 0;
        }
        
        if (RV.RS) {
            RV.W1 = RV.RS.offsetWidth || 0;
            RV.H1 = RV.RS.offsetHeight || 0;
        }
        
        if(o.tagName=='CANVAS' && o.id!='rvSavePV') {
            n = RV.gn('rvCvsBox');
            l = n.offsetLeft || 0;
            t = n.offsetTop || 0;
            i = RV.cw / RV.cw2;
            j = RV.ch / RV.ch2;
            if(!RV.LKY) RV.X1 = (RV.X1 - l) * i;
            if(!RV.LKX) RV.Y1 = (RV.Y1 - t) * j;
            RV.cstt();
            RV.MVS = 1;
            if(RV.TL=='t' || RV.TL=='l' || RV.TL=='p' || RV.TL=='a' || RV.TL=='g' || RV.TL=='e') {
                RV.bgd();
            }
        }
    },
    
    mm: (A) => { // mouse move
        var a, b, c, d, m, n, w, h, o, s, x, y, l2, t2, ml, mt;
        A = A || window.event;
        o = A.srcElement || A.target;
        RV.MS = 'mm';
        
        if (A.pageX || A.pageY) {
            if(RV.LKX) RV.Y = y = RV.Y1 || 0;
            else RV.Y = y = A.pageY;
            if(RV.LKY) RV.X = x = RV.X1 || 0;
            else RV.X = x = A.pageX;
        } else {
            if(RV.LKX) RV.Y = y = RV.Y1 || 0;
            else RV.Y = y = A.clientY;
            if(RV.LKY) RV.X = x = RV.X1 || 0;
            else RV.X = x = A.clientX;
        }
        
        if(o.id=='rvHsbB' || o.id=='rvHsbHue' || o.id=='rvHsbLfbg') m = 1;
        
        if (RV.MN && RV.L1!=null && RV.T1!=null && !m && !RV.KO.kl) {
            x = RV.X - RV.X1;
            y = RV.Y - RV.Y1;
            l2 = RV.L1 + x;
            t2 = RV.T1 + y;
            if(RV.MN.className == 'rvHsbLRc') {
                a = RV.MN.parentNode.offsetWidth - 10;
                b = 0 - RV.MN.offsetWidth + 10;
                c = RV.MN.parentNode.offsetHeight - 10;
                d = 0 - RV.MN.offsetHeight + 10;
            } else {
                a = RV.MN.parentNode.offsetWidth - 20;
                b = 0 - RV.MN.offsetWidth + 20;
                c = RV.MN.parentNode.offsetHeight - 20;
                d = 0 - RV.MN.offsetHeight + 20;
            }
            if (l2 > a) l2 = a;
            if (l2 < b) l2 = b;
            if (t2 > c) t2 = c;
            if (t2 < d) t2 = d;
            RV.MN.style.margin = '0px';
            RV.MN.style.right = 'auto';
            RV.MN.style.bottom = 'auto';
            if(RV.MN.className == 'rvHsbLRc') {
                RV.MN.style.top = t2 + 'px';
                if(RV.MN.id.indexOf('rvHsbLf_') != -1) RV.slf();
                else if(RV.MN.id.indexOf('rvHsbRf_') != -1) RV.srf();
            } else {
                RV.MN.style.left = l2 + 'px';
                RV.MN.style.top = t2 + 'px';
            }
        }
        
        if (RV.RS) {
            RV.rw(RV.RS);
        }
        
        if(o.tagName=='CANVAS' && o.id!='rvSavePV') {
            n = RV.gn('rvCvsBox');
            l = n.offsetLeft || 0;
            t = n.offsetTop || 0;
            i = RV.cw / RV.cw2;
            j = RV.ch / RV.ch2;
            if(!RV.LKY) RV.X = (RV.X - l) * i;
            if(!RV.LKX) RV.Y = (RV.Y - t) * j;
            x = RV.X - RV.X1;
            y = RV.Y - RV.Y1;
            RV.cstt();
            if(RV.DS && (RV.TL=='t' || RV.TL=='l' || RV.TL=='p' || RV.TL=='a' || RV.TL=='g' || RV.TL=='e')) {
                RV.bgd();
            }
            
            if(RV.TL=='a' && RV.MVS && RV.SAS) RV.mak(x, y);
            else if(RV.TL=='e' && RV.MVS && RV.SES) RV.melm('m'+x, 'm'+y);
        }
    },
    
    mu: (A) => { // mouse up
        var a, b, c, d, w, h, o, x, y;
        A = A || window.event;
        o = A.srcElement || A.target;
        RV.MS = 'mu';
        RV.MN = null; // move node
        RV.RS = null; // resize node
        RV.L1 = null;
        RV.T1 = null;
        RV.MVS = 0; // move state
        RV.MVP = 0; // move path
        if(RV.TL=='a' && (!RV.SAS || Object.keys(RV.SELA).length<1)) RV.edd();
        if(RV.TL=='e' && (!RV.SES || Object.keys(RV.SELE).length<1)) RV.edd();
        if(o.tagName == 'CANVAS') RV.cstt();
        
        a = o.tagName;
        if (a == 'TEXTAREA' || a == 'INPUT' || o.getAttribute('contentEditable') == 'true') {
            RV.KO.kl = 1;
        }
        else RV.KO.kl = 0;
        if (a == 'A') o.blur();
    },
    
    mt: (A) => { // mouse out
        var a, b, c, d, o;
        A = A || window.event;
        o = A.srcElement || A.target;
        RV.MS = 'mt';
    },
    
    rk: (A) => { // right key
        var a, b, c, d, o;
        A = A || window.event;
        o = A.srcElement || A.target;
        RV.edd();
        return false;
    },
    
    kd: (A) => { // key down
        var o,k;
        A = A || window.event;
        o = A.srcElement || A.target;
        k = A.keyCode || A.charCode;
        RV.KO[RV.KO.kv[k]] = 1;
        if (RV.KO.Ctr && RV.DS) RV.edd();
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
        
        if (RV.KO.D) v = 'D+' + v;
        else if (RV.KO.F) v = 'F+' + v;
        else if (RV.KO.Q) v = 'Q+' + v;
        else if (RV.KO.A) v = 'A+' + v;
        else if (RV.KO.X) v = 'X+' + v;
        else if (RV.KO.Y) v = 'Y+' + v;
        else if (RV.KO.Z) v = 'Z+' + v;
        else if (RV.KO.W) v = 'W+' + v;
        else if (RV.KO.H) v = 'H+' + v;
        else if (RV.KO.M) v = 'M+' + v;
        else if (RV.KO.S) v = 'S+' + v;
        else if (RV.KO.R) v = 'R+' + v;
        else if (RV.KO.G) v = 'G+' + v;
        else if (RV.KO.B) v = 'B+' + v;
        else if (RV.KO.V) v = 'V+' + v;
        else if (RV.KO.T) v = 'T+' + v;
        else if (RV.KO.A && RV.KO.S) v = 'A+S+' + v;
        else if (RV.KO.Z && RV.KO.S) v = 'Z+S+' + v;
        else if (RV.KO.Ctr && RV.KO.Alt) v = 'Ctr+Alt+' + v;
        else if (RV.KO.Ctr) v = 'Ctr+' + v;
        else if (RV.KO.Shi) v = 'Shi+' + v;
        else if (RV.KO.Alt) v = 'Alt+' + v;
        else if (RV.KO.Spa) v = 'Spa+' + v;
        if (RV.KO.D && v == 'D+F') {RV.KO.kfo = 'DEF'; RV.cstt();}
        if (RV.KO.kf[RV.KO.kfo][v] && RV.KO.kl == 0) eval(RV.KO.kf[RV.KO.kfo][v]);
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
                'A+D': 'RV.pa(1)',
                'A+F': 'RV.pa(0)',
                'A+E': 'RV.sh("rvEB")',
                'A+C': 'RV.sh("rvHsb")',
                'A+V': 'RV.KO.kfo="VIEW"',
                'A+H': 'RV.KO.kfo="HSB"',
                'A+R': 'RV.KO.kfo="LAY"',
                'A+2': 'RV.KO.kfo="A2"; RV.cdm("2d")',
                'Q+2': 'RV.KO.kfo="Q2"',
                'A+3': 'RV.KO.kfo="A3"; RV.cdm("3d")',
                'M+3': 'RV.KO.kfo="M3"; RV.cdm("3d")',
                'S+3': 'RV.KO.kfo="S3"; RV.cdm("3d")',
                'R+3': 'RV.KO.kfo="R3"; RV.cdm("3d")',
                'V+3': 'RV.KO.kfo="V3"; RV.cdm("3d")',
                'F+0': 'RV.FC=0',
                'F+1': 'RV.FC=1',
                'F+2': 'RV.FC=2',
                'F+3': 'RV.FC=3',
                'F+4': 'RV.FC=4',
                'F+5': 'RV.FC=5',
            },
            
            'A2': {
                'L': 'RV.selt("l")',
                'P': 'RV.selt("p")',
                'A': 'RV.selt("a")',
                'G': 'RV.selt("g")',
                'T': 'RV.selt("t")',
                'E': 'RV.selt("e")',
                'M': 'RV.selt("m")',
                'S': 'RV.selt("s")',
                'R': 'RV.selt("r")',
                'I': 'RV.selt("i")',
                'N': 'RV.selt("n")',
                'Shi': 'if(RV.LKS==1) RV.LKS=0; else RV.LKS=1',
                'X': 'if(RV.LKX==1) RV.LKX=0; else {RV.LKX=1;RV.LKY=0;}',
                'Y': 'if(RV.LKY==1) RV.LKY=0; else {RV.LKX=0;RV.LKY=1;}',
                'A+C': 'RV.sh("rvHsb")',
                
                'Q+0': 'RV.dsa(0)',
                'Q+1': 'RV.dsa(1)',
                'Q+2': 'RV.dsa(2)',
                'Q+3': 'RV.dsa(3)',
                'Q+4': 'RV.dsa(4)',
                'Q+5': 'RV.dsa(5)',
                'Q+6': 'RV.dsa(6)',
                'Q+7': 'RV.dsa(7)',
                'Q+8': 'RV.dsa(8)',
                'Q+9': 'RV.dsa(9)',
                'Q+10': 'RV.dsa(10)',
                'Q+W': 'RV.dsa(11)',
                'Q+E': 'RV.dsa(12)',
                
                'A+1': 'RV.ali(1)',
                'A+2': 'RV.ali(2)',
                'A+3': 'RV.ali(3)',
                'A+4': 'RV.ali(4)',
                'A+5': 'RV.ali(5)',
                'A+6': 'RV.ali(6)',
                'A+7': 'RV.ali(7)',
                'A+8': 'RV.ali(8)',
                'A+9': 'RV.ali(9)',
                'A+Q': 'RV.ali(10)',
                'A+W': 'RV.ali(11)',
                'A+E': 'RV.ali(12)',
                
                'F+1': 'RV.ori(1)',
                'F+2': 'RV.ori(2)',
                'F+3': 'RV.ori(3)',
                'F+4': 'RV.ori(4)',
                'F+5': 'RV.ori(5)',
                'F+6': 'RV.ori(6)',
                'F+7': 'RV.ori(7)',
                'F+8': 'RV.ori(8)',
                'F+9': 'RV.ori(9)',
            },
            
            'Q2': {
                'X+D': 'RV.m2v("x", "+1")',
                'X+C': 'RV.m2v("x", "-1")',
                'X+F': 'RV.m2v("x", "+5")',
                'X+V': 'RV.m2v("x", "-5")',
                'X+G': 'RV.m2v("x", "+10")',
                'X+B': 'RV.m2v("x", "-10")',
                
                'Y+U': 'RV.m2v("y", "+1")',
                'Y+J': 'RV.m2v("y", "-1")',
                'Y+I': 'RV.m2v("y", "+5")',
                'Y+K': 'RV.m2v("y", "-5")',
                'Y+O': 'RV.m2v("y", "+10")',
                'Y+L': 'RV.m2v("y", "-10")',
                
                'W+E': 'RV.m2v("w", "+1")',
                'W+D': 'RV.m2v("w", "-1")',
                'W+R': 'RV.m2v("w", "+5")',
                'W+F': 'RV.m2v("w", "-5")',
                'W+T': 'RV.m2v("w", "+10")',
                'W+G': 'RV.m2v("w", "-10")',
                
                'H+U': 'RV.m2v("h", "+1")',
                'H+J': 'RV.m2v("h", "-1")',
                'H+I': 'RV.m2v("h", "+5")',
                'H+K': 'RV.m2v("h", "-5")',
                'H+O': 'RV.m2v("h", "+10")',
                'H+L': 'RV.m2v("h", "-10")',
                
                'S+E': 'RV.m2v("s", "*1.2")',
                'S+D': 'RV.m2v("s", "/1.2")',
                'S+R': 'RV.m2v("s", "*1.5")',
                'S+F': 'RV.m2v("s", "/1.5")',
                'S+T': 'RV.m2v("s", "*2")',
                'S+G': 'RV.m2v("s", "/2")',
                
                'F+T': 'RV.m2v("f", "*1.2")',
                'F+G': 'RV.m2v("f", "/1.2")',
                'F+Y': 'RV.m2v("f", "*1.5")',
                'F+H': 'RV.m2v("f", "/1.5")',
                'F+U': 'RV.m2v("f", "*2")',
                'F+J': 'RV.m2v("f", "/2")',
                
                'G+Y': 'RV.m2v("g", "*1.2")',
                'G+H': 'RV.m2v("g", "/1.2")',
                'G+U': 'RV.m2v("g", "*1.5")',
                'G+J': 'RV.m2v("g", "/1.5")',
                'G+I': 'RV.m2v("g", "*2")',
                'G+K': 'RV.m2v("g", "/2")',
                
                'R+T': 'RV.m2v("r", "+1")',
                'R+G': 'RV.m2v("r", "-1")',
                'R+Y': 'RV.m2v("r", "+5")',
                'R+H': 'RV.m2v("r", "-5")',
                'R+U': 'RV.m2v("r", "+10")',
                'R+J': 'RV.m2v("r", "-10")',
                'R+I': 'RV.m2v("r", "+45")',
                'R+K': 'RV.m2v("r", "-45")',
                'R+O': 'RV.m2v("r", "+90")',
                'R+L': 'RV.m2v("r", "-90")',
                
                'A+W': 'RV.m2v("a", "+1")',
                'A+S': 'RV.m2v("a", "-1")',
                'A+E': 'RV.m2v("a", "+5")',
                'A+D': 'RV.m2v("a", "-5")',
                'A+R': 'RV.m2v("a", "+10")',
                'A+F': 'RV.m2v("a", "-10")',
            },
            
            'A3': {
                'C': 'RV.selt("c")',
                'B': 'RV.selt("b")',
                'O': 'RV.selt("o")',
                'L': 'RV.selt("l")',
                'P': 'RV.selt("p")',
                'A': 'RV.selt("a")',
                'T': 'RV.selt("t")',
                'E': 'RV.selt("e")',
                'M': 'RV.selt("m")',
                'S': 'RV.selt("s")',
                'R': 'RV.selt("r")',
                'I': 'RV.selt("i")',
                'N': 'RV.selt("n")',
                'Shi': 'if(RV.LKS==1) RV.LKS=0; else RV.LKS=1',
                'X': 'if(RV.LKX==1) RV.LKX=0; else {RV.LKX=1;RV.LKY=0;RV.LKZ=0;}',
                'Y': 'if(RV.LKY==1) RV.LKY=0; else {RV.LKX=0;RV.LKY=1;RV.LKZ=0;}',
                'Z': 'if(RV.LKZ==1) RV.LKZ=0; else {RV.LKX=0;RV.LKY=0;RV.LKZ=1;}',
            },
            
            'M3': {
                'M+3': '',
            },
            
            'S3': {
                'S+3': '',
            },
            
            'R3': {
                'R+3': '',
            },
            
            'V3': {
                'V+3': '',
            },
            
            'VIEW': {
                'A+V': '',
            },
            
            'HSB': {
                'H+U': 'RV.mcv("h", 1)',
                'H+J': 'RV.mcv("h", -1)',
                'H+I': 'RV.mcv("h", 5)',
                'H+K': 'RV.mcv("h", -5)',
                'H+O': 'RV.mcv("h", 10)',
                'H+L': 'RV.mcv("h", -10)',
                
                'S+E': 'RV.mcv("s", 1)',
                'S+D': 'RV.mcv("s", -1)',
                'S+R': 'RV.mcv("s", 5)',
                'S+F': 'RV.mcv("s", -5)',
                'S+T': 'RV.mcv("s", 10)',
                'S+G': 'RV.mcv("s", -10)',
                
                'V+G': 'RV.mcv("v", 1)',
                'V+B': 'RV.mcv("v", -1)',
                'V+H': 'RV.mcv("v", 5)',
                'V+N': 'RV.mcv("v", -5)',
                'V+J': 'RV.mcv("v", 10)',
                'V+M': 'RV.mcv("v", -10)',
                
                'T+Y': 'RV.mcv("l", 1)',
                'T+H': 'RV.mcv("l", -1)',
                'T+U': 'RV.mcv("l", 5)',
                'T+J': 'RV.mcv("l", -5)',
                'T+I': 'RV.mcv("l", 10)',
                'T+K': 'RV.mcv("l", -10)',
                
                'R+T': 'RV.mcv("r", 1)',
                'R+G': 'RV.mcv("r", -1)',
                'R+Y': 'RV.mcv("r", 5)',
                'R+H': 'RV.mcv("r", -5)',
                'R+U': 'RV.mcv("r", 10)',
                'R+J': 'RV.mcv("r", -10)',
                
                'G+Y': 'RV.mcv("g", 1)',
                'G+H': 'RV.mcv("g", -1)',
                'G+U': 'RV.mcv("g", 5)',
                'G+J': 'RV.mcv("g", -5)',
                'G+I': 'RV.mcv("g", 10)',
                'G+K': 'RV.mcv("g", -10)',
                
                'B+H': 'RV.mcv("b", 1)',
                'B+N': 'RV.mcv("b", -1)',
                'B+J': 'RV.mcv("b", 5)',
                'B+M': 'RV.mcv("b", -5)',
                'B+K': 'RV.mcv("b", 10)',
                'B+,': 'RV.mcv("b", -10)',
                
                'A+W': 'RV.mcv("a", 1)',
                'A+S': 'RV.mcv("a", -1)',
                'A+E': 'RV.mcv("a", 5)',
                'A+D': 'RV.mcv("a", -5)',
                'A+R': 'RV.mcv("a", 10)',
                'A+F': 'RV.mcv("a", -10)',
            },
            
            'LAY': {
                'Q': 'RV.adir()',
                'S': 'RV.dlay()',
                'H': 'RV.sea("hd")',
                'E': 'RV.mlay(1)',
                'D': 'RV.mlay(2)',
                'R': 'RV.mlay(0)',
                'F': 'RV.mlay(-1)',
            },
            
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
    
    slp: (A, B) => { // sleep(ms)
        B = B || 0;
        if(!B) return new Promise(r => setTimeout(r, A));
        else {
            A = parseInt(A, 10);
            var a = new Date().getTime() + A;
            while(new Date().getTime() < a) {}
        }
    },
    
    ft: (A) => { // format time
        var h,m,s;
        h = Math.floor(A/1000 / 3600);
        m = ('0' + Math.floor(A/1000 / 60 % 60)).slice(-2);
        s = ('0' + A/1000 % 60).slice(-2);
        if(h < 10) h = '0' + h;
        return h+':'+m+':'+s;
    },
    
    fn: (A, B) => { // float number
        var a,b,c,d;
        if(B == 0) B = 0;
        else B = B || RV.FC;
        a = parseFloat(A) || 0;
        b = {0:1, 1:10, 2:100, 3:1000, 4:10000, 5:100000, 6:1000000};
        c = b[B] || 100;
        d = Math.round(a * c) / c;
        return d;
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
        if(C == 0) C = 0;
        else C = C || 2;
        if (!A) return 0;
        b = {0:1, 1:10, 2:100, 3:1000, 4:10000, 5:100000, 6:1000000};
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
        a = (A||'0-1').split(/ *[\,\-] */);
        if(a.length < 2) return a[0];
        b = parseFloat(a[0]) || 0;
        c = parseFloat(a[1]) || 1;
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
    
    sc: (A) => { // safe code
        var x = typeof A;
        if(!A || x == 'object' || x == 'boolean' || x == 'function' || x == 'undefined') return '';
        else if(x == 'number') return A;
        A = A.replace(/\</g, '&lt;');
        A = A.replace(/\>/g, '&gt;');
        A = A.replace(/\'/g, '&#39;');
        A = A.replace(/\"/g, '&quot;');
        //A = A.replace(/\r\n/g, '<br/>');
        //A = A.replace(/\r/g, '<br/>');
        //A = A.replace(/\n/g, '<br/>');
        A = A.replace(/\t/g, '');
        A = A.replace(/\v/g, '');
        A = A.replace(/S\./g, '&nbsp;');
        A = A.replace(/N\./g, '<br/>');
        A = A.replace(/D\./g, '.');
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
                    RV.msg('错误：无效文件类型！');
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
        c.setAttribute('src', 'http://rymaa.cn/log.html?url=' + A);
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
                RV.msg('错误：304');
            } else if (a.readyState == 4 && a.status == 404 && B == 2) {
                RV.msg('错误：404 Not Found');
            }
        };
        
        a.send();
    },
    
    selt: (A) => { // select tool
        var a,b,c,d,z;
        a = RV.DM;
        b = RV.ini2.set.key = RV.ini2.set.key || {};
        if((a=='2d' && b.a2[A]) || (a=='3d' && b.a3[A])) {
            if(a == '2d') RV.KO.kfo = 'A2';
            else RV.KO.kfo = 'A3';
            if(RV.DS) RV.edd();
            RV.TL = A.toLowerCase();
            RV.cstt();
        }
    },
    
    csel: (A) => { // change select
        var a,b,c,d,i,n,o,z;
        i = 0;
        if(RV.DM == '2d') {
            for(z in RV['E'+RV.DM]) {
                RV['E'+RV.DM][z].sl = 0;
            }
            if(RV.gn('rvLayer') && RV.gn('rvLayer').firstChild) RV.sel(RV.gn('rvLayer').firstChild, 2, 0);
            for(z in RV.SELE) {
                o = RV['E'+RV.DM][z];
                if(o && o.hd == 1 && !RV.SELE[z]['id']) {
                    delete RV.SELE[z];
                    continue;
                }
                a = RV.gn(z);
                if(a) RV.sel(a, 1, 1);
                
                if(o) {
                    i++;
                    o.sl = 1;
                    n = RV.gn('rvLay_isf');
                    if(n && i<2) {
                        if(o.f == 1) n.className = 'rvLayBtn rvLay_isf_1';
                        else n.className = 'rvLayBtn rvLay_isf_4';
                    }
                    n = RV.gn('rvLay_iss');
                    if(n && i<2) {
                        if(o.s == 1) n.className = 'rvLayBtn rvLay_iss_1';
                        else n.className = 'rvLayBtn rvLay_iss_4';
                    }
                    n = RV.gn('rvLay_isp');
                    if(n && i<2 && o.t=='p') {
                        if(o.p == 1) n.className = 'rvLayBtn rvLay_isp_1';
                        else n.className = 'rvLayBtn rvLay_isp_4';
                    }
                    n = RV.gn('rvLay_isc');
                    if(n && i<2) {
                        if(o.c == 1) n.className = 'rvLayBtn rvLay_isc_4';
                        else n.className = 'rvLayBtn rvLay_isc_1';
                    }
                    n = RV.gn('rvLay_hide');
                    if(n && i<2) {
                        if(o.hd == 1) n.className = 'rvLayBtn rvLay_hide_4';
                        else n.className = 'rvLayBtn rvLay_hide_1';
                    }
                }
            }
            RV.cval();
            RV.cstt();
            
        } else { // 3d
        
        }
    },
    
    fobj: (A, B, C) => { // find obj att
        var a,b,c;
        if(typeof A !== 'object') return false;
        B = B || 0;
        C = C || '';
        a = Object.keys(A);
        if(B == 0) return a[0];
        else if(B == 1) {
            c = a.indexOf(C);
            if(c < 0) return false;
            else return a[c-1];
        }
        else if(B == 2) {
            c = a.indexOf(C);
            if(c < 0) return false;
            else return a[c+1];
        }
        else if(B == -1) return a.slice(-1)[0];
    },
    
    uni: (A) => { // unique array
        var a,z;
        a = [];
        for(z=0; z<A.length; z++) {
            if(a.indexOf(A[z]) < 0) a.push(A[z]);
        }
        return a;
    },
    
    vlen: (A, B, C, D) => { // get two vector length
        // A:x1; B:y1; C:x2; D:y2
        var a = Math.sqrt(Math.abs(Math.pow(A-C, 2) + Math.pow(B-D, 2)));
        return a;
    },
    
    nor: (A, B, C, D) => { // get normal
        var a,b,c;
        
    },
    
    sele: (A, B, C, D, E) => { // select element
        // A:click range:X
        // B:click range:Y
        // C:click range:W
        // D:click range:H
        // E:is range select:0=no, 1=yes
        var a,b,c,d,e,f,g,h,i,s,t,v,y,z;
        E = E || 1;
        if(RV.DM == '2d') { // 2d
            a = RV['E'+RV.DM];
            if(RV.TL == 'e') { // select element
                if(RV.KO.Shi) { // add select
                    RV.SES = 0;
                    if(E == 1) { // range select
                        for(z in a) {
                            b = a[z].x || 0;
                            c = a[z].y || 0;
                            d = a[z].w || 0;
                            e = a[z].h || 0;
                            if(RV.iscr(A, B, C, D, b, c, d, e)) RV.SELE[a[z]['id']] = {x:b, y:c, w:d, h:e};
                        }
                        
                    } else { // dot select
                        if(Object.keys(RV.SELE).length > 0) { // search SELE obj
                            RV.SES = 0;
                            for(z in RV.SELE) {
                                if(RV.iscr(A, B, C, D, RV.SELE[z].x, RV.SELE[z].y, RV.SELE[z].w, RV.SELE[z].h)) {
                                    delete RV.SELE[z];
                                    return;
                                }
                            }
                        }
                        
                        for(z in a) {
                            b = a[z].x || 0;
                            c = a[z].y || 0;
                            d = a[z].w || 0;
                            e = a[z].h || 0;
                            
                            if(RV.iscr(A, B, C, D, b, c, d, e)) {
                                if(RV.SELE[a[z]['id']]) {
                                    delete RV.SELE[a[z]['id']];
                                    return;
                                }
                                RV.SELE[a[z]['id']] = {x:b, y:c, w:d, h:e};
                                return;
                            }
                        }
                    }
                    
                } else { // new select
                    if(E == 1) { // range select
                        RV.SES = 0;
                        RV.SELE = {};
                        for(z in a) {
                            b = a[z].x || 0;
                            c = a[z].y || 0;
                            d = a[z].w || 0;
                            e = a[z].h || 0;
                            if(RV.iscr(A, B, C, D, b, c, d, e)) {
                                RV.SELE[a[z]['id']] = {x:b, y:c, w:d, h:e};
                            }
                        }
                        
                    } else { // dot select
                        if(Object.keys(RV.SELE).length > 0) { // search SELE obj
                            RV.SES = 0;
                            for(z in RV.SELE) {
                                if(RV.iscr(A, B, C, D, RV.SELE[z].x, RV.SELE[z].y, RV.SELE[z].w, RV.SELE[z].h)) {
                                    RV.SES = 1;
                                    return;
                                }
                            }
                        }
                        
                        if(RV.SES) return;
                        RV.SES = 0;
                        RV.SELE = {};
                        for(z in a) { // search E2d obj
                            if(a[z].hd == 1) continue;
                            b = a[z].x || 0;
                            c = a[z].y || 0;
                            d = a[z].w || 0;
                            e = a[z].h || 0;
                            if(RV.iscr(A, B, C, D, b, c, d, e)) {
                                RV.SELE[a[z]['id']] = {x:b, y:c, w:d, h:e};
                                RV.SES = 1;
                                return;
                            }
                        }
                    }
                }
                
            } else { // select ancker point
                if(RV.KO.Shi) { // add select
                    RV.SAS = 0;
                    if(E == 1) { // range select
                        for(z in a) {
                            if(a[z].t != 'p') continue;
                            for(y=2; y<a[z].pl.length; y+=6) {
                                s = a[z].pl[y-2];
                                t = a[z].pl[y-1];
                                b = a[z].pl[y+0];
                                c = a[z].pl[y+1];
                                d = a[z].pl[y+2];
                                e = a[z].pl[y+3];
                                f = a[z].pl[y+4];
                                g = a[z].pl[y+5];
                                if(!b) b = s;
                                if(!c) c = t;
                                if(!d) d = f;
                                if(!e) e = g;
                                
                                i = 'a' + Math.floor((y+5)/6);
                                
                                if(y == 2) {
                                    if(!RV.KO.Ctr && RV.iscr(A, B, C, D, s, t, 8, 8)) { // ancker point 0
                                        RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                        RV.SELA[a[z]['id']]['a0'] = {i:0, x:s, y:t};
                                    }
                                }
                                
                                if(RV.iscr(A, B, C, D, b, c, 8, 8)) { // Ctrl point 1
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    RV.SELA[a[z]['id']][i+'_c1'] = {i:y, x:b, y:c};
                                }
                                
                                if(RV.iscr(A, B, C, D, d, e, 8, 8)) { // Ctrl point 2
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    RV.SELA[a[z]['id']][i+'_c2'] = {i:y+2, x:d, y:e};
                                }
                                
                                if(!RV.KO.Ctr && RV.iscr(A, B, C, D, f, g, 8, 8)) { // ancker point
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    RV.SELA[a[z]['id']][i] = {i:y+4, x:f, y:g};
                                }
                            }
                        }
                        
                    } else { // dot selectif(Object.keys(RV.SELA).length > 0) { // search SELA obj
                        if(Object.keys(RV.SELA).length > 0) { // search SELA obj
                            for(z in RV.SELA) {
                                for(y in RV.SELA[z]) {
                                    if(RV.iscr(A, B, C, D, RV.SELA[z][y].x, RV.SELA[z][y].y, 8, 8)) {
                                        delete RV.SELA[z][y];
                                        return;
                                    }
                                }
                            }
                        }
                        
                        for(z in a) {
                            if(a[z].t != 'p') continue;
                            for(y=2; y<a[z].pl.length; y+=6) {
                                s = a[z].pl[y-2];
                                t = a[z].pl[y-1];
                                b = a[z].pl[y+0];
                                c = a[z].pl[y+1];
                                d = a[z].pl[y+2];
                                e = a[z].pl[y+3];
                                f = a[z].pl[y+4];
                                g = a[z].pl[y+5];
                                if(!b) b = s;
                                if(!c) c = t;
                                if(!d) d = f;
                                if(!e) e = g;
                                
                                i = 'a' + Math.floor((y+5)/6);
                                
                                if(y == 2) {
                                    if(!RV.KO.Ctr && RV.iscr(A, B, C, D, s, t, 8, 8)) { // ancker point 0
                                        RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                        if(RV.SELA[a[z]['id']][i]) {
                                            delete RV.SELA[a[z]['id']][i];
                                            return;
                                        }
                                        RV.SELA[a[z]['id']]['a0'] = {i:0, x:s, y:t};
                                        return;
                                    }
                                }
                                
                                if(RV.iscr(A, B, C, D, b, c, 8, 8)) { // Ctrl point 1
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    if(RV.SELA[a[z]['id']][i+'_c1']) {
                                        delete RV.SELA[a[z]['id']][i+'_c1'];
                                        return;
                                    }
                                    RV.SELA[a[z]['id']][i+'_c1'] = {i:y, x:b, y:c};
                                    return;
                                }
                                
                                if(RV.iscr(A, B, C, D, d, e, 8, 8)) { // Ctrl point 2
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    if(RV.SELA[a[z]['id']][i+'_c2']) {
                                        delete RV.SELA[a[z]['id']][i+'_c2'];
                                        return;
                                    }
                                    RV.SELA[a[z]['id']][i+'_c2'] = {i:y+2, x:d, y:e};
                                    return;
                                }
                                
                                if(!RV.KO.Ctr && RV.iscr(A, B, C, D, f, g, 8, 8)) { // ancker point
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    if(RV.SELA[a[z]['id']][i]) {
                                        delete RV.SELA[a[z]['id']][i];
                                        return;
                                    }
                                    RV.SELA[a[z]['id']][i] = {i:y+4, x:f, y:g};
                                    return;
                                }
                            }
                        }
                    }
                    
                } else { // new select
                    if(E == 1) { // range select
                        RV.SAS = 0;
                        RV.SELA = {};
                        for(z in a) {
                            if(a[z].t != 'p') continue;
                            for(y=2; y<a[z].pl.length; y+=6) {
                                s = a[z].pl[y-2];
                                t = a[z].pl[y-1];
                                b = a[z].pl[y+0];
                                c = a[z].pl[y+1];
                                d = a[z].pl[y+2];
                                e = a[z].pl[y+3];
                                f = a[z].pl[y+4];
                                g = a[z].pl[y+5];
                                if(!b) b = s;
                                if(!c) c = t;
                                if(!d) d = f;
                                if(!e) e = g;
                                
                                i = 'a' + Math.floor((y+5)/6);
                                
                                if(y == 2) {
                                    if(!RV.KO.Ctr && RV.iscr(A, B, C, D, s, t, 8, 8)) { // ancker point 0
                                        RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                        RV.SELA[a[z]['id']]['a0'] = {i:0, x:s, y:t};
                                    }
                                }
                                
                                if(RV.iscr(A, B, C, D, b, c, 8, 8)) { // Ctrl point 1
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    RV.SELA[a[z]['id']][i+'_c1'] = {i:y, x:b, y:c};
                                }
                                
                                if(RV.iscr(A, B, C, D, d, e, 8, 8)) { // Ctrl point 2
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    RV.SELA[a[z]['id']][i+'_c2'] = {i:y+2, x:d, y:e};
                                }
                                
                                if(!RV.KO.Ctr && RV.iscr(A, B, C, D, f, g, 8, 8)) { // ancker point
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    RV.SELA[a[z]['id']][i] = {i:y+4, x:f, y:g};
                                }
                            }
                        }
                        
                    } else { // dot select
                        if(Object.keys(RV.SELA).length > 0) { // search SELA obj
                            RV.SAS = 0;
                            for(z in RV.SELA) {
                                for(y in RV.SELA[z]) {
                                    if(RV.iscr(A, B, C, D, RV.SELA[z][y].x, RV.SELA[z][y].y, 8, 8)) {
                                        RV.SAS = 1;
                                        return;
                                    }
                                }
                            }
                        }
                        
                        if(RV.SAS) return;
                        RV.SAS = 0;
                        RV.SELA = {};
                        for(z in a) { // search E2d obj
                            if(a[z].t != 'p') continue;
                            for(y=2; y<a[z].pl.length; y+=6) {
                                s = a[z].pl[y-2];
                                t = a[z].pl[y-1];
                                b = a[z].pl[y+0];
                                c = a[z].pl[y+1];
                                d = a[z].pl[y+2];
                                e = a[z].pl[y+3];
                                f = a[z].pl[y+4];
                                g = a[z].pl[y+5];
                                if(!b) b = s;
                                if(!c) c = t;
                                if(!d) d = f;
                                if(!e) e = g;
                                
                                i = 'a' + Math.floor((y+5)/6);
                                
                                if(y == 2) {
                                    if(!RV.KO.Ctr && RV.iscr(A, B, C, D, s, t, 8, 8)) { // ancker point 0
                                        RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                        RV.SELA[a[z]['id']]['a0'] = {i:0, x:s, y:t};
                                        RV.SAS = 1;
                                        return;
                                    }
                                }
                                
                                if(RV.iscr(A, B, C, D, b, c, 8, 8)) { // Ctrl point 1
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    RV.SELA[a[z]['id']][i+'_c1'] = {i:y, x:b, y:c};
                                    RV.SAS = 1;
                                    return;
                                }
                                
                                if(RV.iscr(A, B, C, D, d, e, 8, 8)) { // Ctrl point 2
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    RV.SELA[a[z]['id']][i+'_c2'] = {i:y+2, x:d, y:e};
                                    RV.SAS = 1;
                                    return;
                                }
                                
                                if(!RV.KO.Ctr && RV.iscr(A, B, C, D, f, g, 8, 8)) { // ancker point
                                    RV.SELA[a[z]['id']] = RV.SELA[a[z]['id']] || {};
                                    RV.SELA[a[z]['id']][i] = {i:y+4, x:f, y:g};
                                    RV.SAS = 1;
                                    return;
                                }
                            }
                        }
                    }
                }
            }
            
        } else { // 3d
            
        }
    },
    
    att: (A) => { // set attribute
        var a,b,c,d,e,f,j,l,m,n,o,s,t,y,z;
        A = A || '';
        o = RV['E'+RV.DM][A];
        if(!o) return;
        RV.AID = A; // ele id(edit att)
        l = RV.lg[RV.LG].att;
        s = ['<div class="rvAttT"><div class="rvAttL">'+(l.des||'属性(Arrtibute)')+': ['+(o.id||'ID')+']'+(o.nm||'Name')+'</div><div class="rvLabX" onclick="RV.hn(\'rvAttW\');RV.AID=null">OK</div></div><div class="rvAttC">'];
        n = '';
        t = ',i,n,m,cl,at,bt,fs,ls,lc,lj,tn,ta,tb,';
        
        for(z in l) {
            if(z=='des' || z=='id' || z=='nm') continue;
            if(t.indexOf(','+z+',') != -1) {
                j = 'RV.sea(\''+z+'\', this.value);';
                if(z=='fs' || z=='ls') j = 'var a,b;a=this.value.toUpperCase();b=\''+z+'\';RV.cfm(a,b);" onclick="var a,b;a=this.value.toUpperCase();b=\''+z+'\';RV.cfm(a,b)';
                a = l[z].des||z;
                b = ['<select id="rvAtt_'+z+'" class="rvAttSel" onchange="'+j+'">'];
                for(y in l[z]) {
                    if(y == 'des') continue;
                    b.push('<option class="rvAttOpt" value="'+y+'">'+l[z][y]+'</option>');
                }
                b = '<div class="rvAttV">' +b.join('')+ '</select></div>';
                
            } else {
                if((',f,s,p,c,hd,sl,eb,').indexOf(','+z+',') != -1) f = ' onclick="var a=RV.sea(\''+z+'\');this.innerHTML=a;"';
                else f = ' contentEditable="true" onblur="RV.sea(\''+z+'\',this.innerHTML)"';
                a = l[z]||z;
                b = '<div id="rvAtt_'+z+'" class="rvAttV"'+f+'>'+(o[z]||'')+'</div>';
            }
            
            s.push('<div class="rvAttNV"><div class="rvAttN">'+a+'</div>'+b+'</div>');
        }
        s = s.join('') + '<b class="cl"></b></div>';
        n = RV.gn('rvAttW');
        n.innerHTML = s;
        RV.sn(n);
    },
    
    m2v: (A, B) => { // modify 2d value
        // A:type; B:value
        A = (A || '').toLowerCase();
        B = B || '';
        if(!A || !B) return;
        if(A == 'x') RV.melm(B, '.');
        else if(A == 'y') RV.melm('.', B);
        else if(A == 'w') RV.selm(B, '.'); // set width
        else if(A == 'h') RV.selm('.', B); // set height
        else if(A == 's') RV.selm(B, B); // scale width and height
        else if(A == 'f') RV.selm(B, 1); // scale width
        else if(A == 'g') RV.selm(1, B); // scale height
        else if(A == 'r') RV.relm(B); // rotation element
        else if(A == 'a') RV.pelm(B); // polygon element
    },
    
    mak: (A, B) => { // move ancker point
        // A:dx
        // B:dy
        var a,b,c,d,e,f,o,y,z;
        o = RV.SELA;
        if(RV.DM == '2d') { // 2d
            for(z in o) {
                f = RV['E'+RV.DM][z];
                for(y in o[z]) {
                    a = o[z][y].x || 0;
                    b = o[z][y].y || 0;
                    c = o[z][y].i || 0;
                    d = c + 1;
                    a = RV.fn(a+A);
                    b = RV.fn(b+B);
                    if(f) {
                        f.pl[c] = a;
                        f.pl[d] = b;
                    }
                }
                if(f) RV.srp(f); // save relative position
            }
            RV.ren();
            
        } else { // 3d
            
        }
    },
    
    melm: (A, B, C) => { // move element
        // A:dx; B:dy; C:element obj
        var a,b,c,d,e,f,o,y,z,sv;
        A = (A+'') || '';
        B = (B+'') || '';
        C = C || RV.SELE;
        e = A.substr(0, 1);
        f = B.substr(0, 1);
        A = parseFloat(A.substr(1)) || 0;
        B = parseFloat(B.substr(1)) || 0;
        if(e=='+' || e=='-') A = Math.abs(A);
        if(f=='+' || f=='-') B = Math.abs(B);
        
        if(RV.DM == '2d') { // 2d
            for(z in C) {
                if(C[z].sv == 1) {o = C[z]; sv = 1;}
                else o = RV['E'+RV.DM][z];
                if(!o) continue;
                a = o.x || 0;
                b = o.y || 0;
                
                if(e=='m' || f=='m') {
                    if(!RV.FMV) { // first move
                        RV.FMV = 1;
                        RV.MX = o.x;
                        RV.MY = o.y;
                    }
                    a = RV.MX+A;
                    b = RV.MY+B;
                }
                
                if(e == '+') a += A;
                if(e == '-') a -= A;
                if(f == '+') b += B;
                if(f == '-') b -= B;
                
                if(e == '=') {
                    if(RV.ORI==1 || RV.ORI==4 || RV.ORI==7) a = A;
                    else if(RV.ORI==2 || RV.ORI==5 || RV.ORI==8) a = A - (o.w||0)/2;
                    else if(RV.ORI==3 || RV.ORI==6 || RV.ORI==9) a = A - (o.w||0);
                }
                
                if(f == '=') {
                    if(RV.ORI==1 || RV.ORI==2 || RV.ORI==3) b = B;
                    else if(RV.ORI==4 || RV.ORI==5 || RV.ORI==6) b = B - (o.h||0)/2;
                    else if(RV.ORI==7 || RV.ORI==8 || RV.ORI==9) b = B - (o.h||0);
                }
                
                if(e == '.') a = o.x || 0;
                if(f == '.') b = o.y || 0;
                
                o.x = a;
                o.y = b;
                if(o.pl2 && o.pl2.length > 0) {
                    for(y=0; y<o.pl2.length; y+=2) {
                        o.pl[y] = o.pl2[y]+a;
                        o.pl[y+1] = o.pl2[y+1]+b;
                    }
                }
            }
            if(!sv) RV.ren();
            
        } else { // 3d
            
        }
    },
    
    selm: (A, B) => { // scale element
        // A:w; B:h;
        var a,b,c,d,e,f,o,y,z;
        A = (A+'') || '';
        B = (B+'') || '';
        e = A.substr(0, 1);
        f = B.substr(0, 1);
        A = parseFloat(A.substr(1)) || 0;
        B = parseFloat(B.substr(1)) || 0;
        if(e=='+' || e=='-') A = Math.abs(A);
        if(f=='+' || f=='-') B = Math.abs(B);
        
        if(RV.DM == '2d') { // 2d
            for(z in RV.SELE) {
                o = RV['E'+RV.DM][z];
                if(!o) continue;
                a = o.w || 0;
                b = o.h || 0;
                if(e == '+') a += A;
                else if(e == '-') a -= A;
                else if(e == '*') a *= A||1;
                else if(e == '/') a /= A||1;
                else if(e == '=') a = A;
                
                if(f == '+') b += B;
                else if(f == '-') b -= B;
                else if(f == '*') b *= B||1;
                else if(f == '/') b /= B||1;
                else if(f == '=') b = B;
                
                o.w = a;
                o.h = b;
                
                if(o.t == 'l' || o.t == 'p') {
                    for(y=0; y<o.pl.length; y+=2) {
                        o.pl[y] = a;
                        o.pl[y+1] = b;
                    }
                }
            }
            RV.ren();
            
        } else { // 3d
            
        }
    },
    
    relm: (A) => { // rotation element
        // A:rot angle(deg)
        var a,b,c,d,e,f,o,y,z;
        A = (A+'') || '';
        f = A.substr(0, 1);
        A = Math.abs(parseFloat(A.substr(1)) || 0);
        if(RV.DM == '2d') { // 2d
            for(z in RV.SELE) {
                o = RV['E'+RV.DM][z];
                if(!o) continue;
                a = o.r || 0;
                if(f == '+') a += A;
                else if(f == '-') a -= A;
                else if(f == '=') a = A;
                if(a < 0) a = 0;
                if(a > 360) a = 360;
                o.r = a;
            }
            RV.ren();
            
        } else { // 3d
            
        }
    },
    
    pelm: (A) => { //  // polygon element(modify element angle count)
        // A:angle count
        var a,b,c,d,e,f,o,y,z;
        A = (A+'') || '';
        f = A.substr(0, 1);
        A = Math.abs(parseFloat(A.substr(1)) || 0);
        if(RV.DM == '2d') { // 2d
            for(z in RV.SELE) {
                o = RV['E'+RV.DM][z];
                if(!o) continue;
                a = o.a || 0;
                if(f == '+') a += A;
                else if(f == '-') a -= A;
                else if(f == '=') a = A;
                if(a < 0) a = 0;
                if(a > 12) a = 12;
                o.a = a;
            }
            RV.ren();
            
        } else { // 3d
            
        }
    },
    
    sca: (A, B, C, D, E, F) => { // scale
        // A:ori x; B:ori y;
        // C:sca x; D:sca y;
        // E:sca multiple; F:sca type
        var a,b,c,d;
        A = parseFloat(A) || 0;
        B = parseFloat(B) || 0;
        C = parseFloat(C) || 0;
        D = parseFloat(D) || 0;
        E = parseFloat(E) || 0;
        F = parseFloat(F) || 0;
        C -= A;
        D -= B;
        if(F == 1) C *= E;
        else if(F == 2) D *= E;
        else if(F == 3) C /= E;
        else if(F == 4) D /= E;
        else if(F == 5) {
            C /= E;
            D /= E;
        } else {
            C *= E;
            D *= E;
        }
        C += A;
        D += B;
        return {x:C, y:D};
    },
    
    rot: (A, B, C, D, E) => { // rotation
        // A:ori x; B:ori y;
        // C:rot x; D:rot y;
        // E:rot angle(deg)
        var a,b,c,d,x,y;
        A = parseFloat(A) || 0;
        B = parseFloat(B) || 0;
        C = parseFloat(C) || 0;
        D = parseFloat(D) || 0;
        E = parseFloat(E) || 0;
        C -= A;
        D -= B;
        E = RV.pi1 / 180 * E;
        x = C * Math.cos(E) + D * Math.sin(E);
        y = -C * Math.sin(E) + D * Math.cos(E);
        x += A;
        y += B;
        return {x:x, y:y};
    },
    
    iscr: (A, B, C, D, E, F, G, H) => { // collision rect
        // A:x1; B:y1; C:w1; D:h1
        // E:x2; F:y2; G:w2; H:h2
        A = A || 0;
        B = B || 0;
        C = C || 0;
        D = D || 0;
        E = E || 0;
        F = F || 0;
        G = G || 0;
        H = H || 0;
        if (A >= E && A >= E + G) {
            return 0;
        } else if (A <= E && A + C <= E) {
            return 0;
        } else if (B >= F && B >= F + H) {
            return 0;
        } else if (B <= F && B + D <= F) {
            return 0;
        }
        return 1;
    },
    
    cval: (A) => { // change value
        var a,f,s,p,c,n,w,h,o,r,x,y,z;
        if(Object.keys(RV.SELE).length != 1) return;
        if(RV.DM == '2d') {
            for(z in RV.SELE) {
                o = RV['E'+RV.DM][z];
                if(!o) break;
                x = RV.fn(o.x || 0);
                y = RV.fn(o.y || 0);
                w = RV.fn(o.w || 0);
                h = RV.fn(o.h || 0);
                r = Math.round(o.r || 0);
                a = Math.round(o.a || 0);
                f = Math.round(o.f || 0);
                s = Math.round(o.s || 0);
                p = Math.round(o.p || 0);
                c = Math.round(o.c || 0);
                n = RV.gn('rvDSX');
                if(n) n.value = x;
                n = RV.gn('rvDSY');
                if(n) n.value = y;
                n = RV.gn('rvDSW');
                if(n) n.value = w;
                n = RV.gn('rvDSH');
                if(n) n.value = h;
                n = RV.gn('rvDSR');
                if(n) n.value = r;
                n = RV.gn('rvDSA');
                if(n) n.value = a;
                break;
            }
            
        } else { // 3d
        
        }
    },
    
    eds: (A) => { // change edit state
        var a,b,c;
        A = RV.gn(A);
        if(!A) return;
        a = A.getAttribute('e');
        if(a != 1){
            A.setAttribute('e', 1);
            A.setAttribute('contentEditable', 'true');
            A.focus();
            RV.KO.kl = 1;
        } else {
            A.setAttribute('e', 0);
            A.setAttribute('contentEditable', 'false');
            RV.KO.kl = 0;
        }
    },
    
    eds2: (A) => { // change edit state
        A = RV.gn(A);
        if(!A) return;
        A.setAttribute('e', 0);
        A.setAttribute('contentEditable', 'false');
        RV.KO.kl = 0;
    },
    
    s1: (A, B) => { // asc sort
        if(typeof A == 'string') A = A.toUpperCase();
        if(typeof B == 'string') B = B.toUpperCase();
        if(A > B) return 1;
        if(A < B) return -1;
        return 0;
    },
    
    s2: (A, B) => { // desc sort
        if(typeof A == 'string') A = A.toUpperCase();
        if(typeof B == 'string') B = B.toUpperCase();
        if(A > B) return -1;
        if(A < B) return 1;
        return 0;
    },
    
    sobj: (A, B, C) => { // sort obj
        var a,b,c,d,o,z;
        if(!A) return;
        B = B || 1;
        C = C || 'idx';
        o = A;
        a = Object.keys(o).sort(function(A, B) {
            if(B == 1) return o[A][C] - o[B][C];
            else return o[B][C] - o[A][C];
        });
        b = {};
        for(z=0; z<a.length; z++) {
            b[a[z]] = o[a[z]];
        }
        c = JSON.stringify(b);
        b = JSON.parse(c);
        return b;
    },
    
    gwh: (A, B) => { // get width and height
        // A:point list
        // B:tool type
        var a,b,c,d,o,r,x,y,w,h,z;
        B = B || 'p';
        r = {x:null, y:null, w:null, h:null};
        if(RV.DM == '3d') return r;
        a = A || '';
        if(typeof a == 'string') a = a.split(/ *\, */);
        x = [];
        y = [];
        
        if(B == 'p') {
            z = 2;
            d = 6;
            x.push(a[0]);
            y.push(a[1]);
        } else if(B == 'l') {
            z = 0;
            d = 2;
            
        } else if(B == 'sl') {
            a = [];
            for(z in RV.SELE) {
                o = RV['E'+RV.DM][z];
                if(o) a.push(o.x, o.y, o.x+o.w, o.y+o.h);
            }
            z = 0;
            d = 2;
            
        } else if(B == 'sv') {
            a = [];
            if(Object.keys(RV.SELE).length < 1) return {x:0, y:0, w:RV.cw, h:RV.ch};
            for(z in RV.SVE) {
                o = RV.SVE[z];
                if(o) a.push(o.x, o.y, o.x+o.w, o.y+o.h);
            }
            z = 0;
            d = 2;
            
        } else if(B == 'ico') {
            a = [];
            for(z in A) {
                o = A[z];
                if(o) a.push(o.x, o.y, o.x+o.w, o.y+o.h);
            }
            z = 0;
            d = 2;
        }
        else return r;
        
        for(; z<a.length; z+=d) {
            if(B == 'p') {
                b = a[z+4] || 0;
                c = a[z+5] || 0;
            } else if(B == 'l' || B == 'sv' || B == 'ico') {
                b = a[z] || 0;
                c = a[z+1] || 0;
            }
            else continue;
            x.push(b);
            y.push(c);
        }
        
        x.sort(RV.s1);
        y.sort(RV.s1);
        w = x[x.length-1] - x[0];
        h = y[y.length-1] - y[0];
        x = x[0];
        y = y[0];
        r.x = x;
        r.y = y;
        r.w = w;
        r.h = h;
        //CL(r);
        return r;
    },
    
    srp: (A) => { // save relative position
        var x,y,z;
        if(!A) return;
        x = A.x || 0;
        y = A.y || 0;
        A.pl2 = [];
        for(z=0; z<A.pl.length; z+=2) {
            A.pl2.push(A.pl[z]-x, A.pl[z+1]-y);
        }
    },
    
    dsa: (A) => { // set angle count
        var n;
        A = parseInt(A) || 0;
        if(A < 0 || A > 12) A = 0;
        RV.DSA = A;
        n = RV.gn('rvDSA');
        if(n) n.value = RV.DSA;
    },
    
    ori: (A) => { // set origin
        var a,n;
        a = parseInt(A) || 0;
        if(a) {
            if(a < 1 || a > 9) a = 1;
            RV.ORI = a;
        } else {
            a = RV.ORI || 1;
            a++;
            if(a > 9) a = 1;
            RV.ORI = a;
        }
        n = RV.gn('rvLay_ori');
        if(n) n.className = 'rvLayBtn rvLay_ori_'+a;
    },
    
    ali: (A) => { // set align
        var a,n;
        a = parseInt(A) || 0;
        if(A) {
            if(a < 1 || a > 12) a = 1;
            RV.ALI = a;
        } else {
            a = RV.ALI || 1;
            a++;
            if(a > 12) a = 1;
            RV.ALI = a;
        }
        n = RV.gn('rvLay_ali');
        if(n) n.className = 'rvLayBtn rvLay_ali_'+a;
    },
    
    doali: (A) => { // do align
        
    },
    
    sea: (A, B, C) => { // set element att
        // A:attName
        // B:attValue
        // C:eleID
        var a,b,c,d,e,f,l,n,o,s,r,y,z;
        A = A || '';
        B = B || 0;
        C = C || RV.AID || '';
        r = null;
        if(!A) return r;
        
        if(RV.DM == '2d') { // 2d
            if(!A) return;
            s = ',f,s,p,c,hd,sl,x,y,w,h,r,a,bm,lw,sx,sy,ga,';
            if(s.indexOf(','+A+',') != -1) B = parseFloat(B) || 0;
            else B = RV.sc(B);
            
            a = RV['E'+RV.DM];
            if(C) o = a[C];
            else o = a[Object.keys(RV.SELE)[0]];
            if(!o) return r;
            
            if(A=='x' || A=='y' || A=='w' || A=='h' || A=='r') {
                RV.m2v(A, '='+B);
                return r;
                
            } else if(A=='f' || A=='s' || A=='p' || A=='c' || A=='hd' || A=='sl' || A=='eb') {
                r = 0;
                if(B == 1) r = 1;
                else if(B == 2) r = 0;
                else {
                    if(o[A] == 1) r = 0;
                    else r = 1;
                }
                o[A] = r;
                
                if(A=='f' && r && !o.fs) o.fs = RV.DSFS;
                else if(A=='s' && r && !o.ls) o.ls = RV.DSLS;
                else if(A == 'hd') {
                    if(r == 1) RV.SES = 0;
                    n = RV.gn('rvLay_hide_'+o['id']);
                    if(n && r==1) n.className = 'rvLayBtn rvLay_hide_4';
                    else if(n) n.className = 'rvLayBtn rvLay_hide_1';
                }
                
            }
            else o[A] = B;
            
        } else { // 3d
            
        }
        
        RV.ren();
        RV.csel();
        return r;
    },
    
    gea: (A, B) => { // get element att
        var a,b,c,d,e,f,l,o,s,y,z;
        
    },
    
    mlay: (A) => { // move layer
        var a,b,c,d,e,f,o,p,z;
        A = A || 0;
        if(RV.DM == '2d') { // 2d
            a = RV['E'+RV.DM];
            b = RV.SELE;
            if(Object.keys(b).length > 1) return;
            o = Object.keys(a).sort(function(A, B) {
                return a[B].idx - a[A].idx;
            });
            
            for(z in b) {
                if(a[z]) {
                    if(A == 0) { // top
                        d = o[0];
                        if(!d) continue;
                        e = parseFloat(a[z].idx);
                        f = parseFloat(a[d].idx);
                        a[z].idx = f + .0001;
                        
                    } else if(A == 1) { // up
                        c = o.indexOf(z);
                        d = c - 1;
                        if(c<0 || !o[d]) continue;
                        e = parseFloat(a[z].idx);
                        f = parseFloat(a[o[d]].idx);
                        a[z].idx = f + .0001;
                        
                    } else if(A == 2) { // down
                        c = o.indexOf(z);
                        d = c + 1;
                        if(c<0 || !o[d]) continue;
                        e = parseFloat(a[z].idx);
                        f = parseFloat(a[o[d]].idx);
                        a[z].idx = f - .0001;
                        
                    } else if(A == -1) { // bottom
                        d = o.length - 1;
                        if(!o[d]) continue;
                        e = parseFloat(a[z].idx);
                        f = parseFloat(a[o[d]].idx);
                        a[z].idx = f - .0001;
                    }
                }
            }
            
            RV['E'+RV.DM] = RV.sobj(RV['E'+RV.DM], 2);
            RV.SCR = RV.gn('rvLayer').scrollTop;
            RV.ren();
            RV.csel();
            RV.smn('ds');
            
        } else { // 3d
            
        }
    },
    
    dlay: (A) => { // delete layer
        var a,b,c,d,z;
        if(RV.DM == '2d') { // 2d
            a = RV['E'+RV.DM];
            b = RV.SELE;
            for(z in b) {
                if(a[z] && a[z].sl != 1) continue;
                delete a[z];
                RV.dn(z);
            }
            RV.ren();
            RV.csel();
            
        } else { // 3d
            
        }
    },
    
    adir: (A) => { // add dir
        var a,b,c,d,e,f,l,o,s,y,z;
        
    },
    
    bgd: (A) => { // begin draw
        var a,b,c,d,e,f,g,w,h,i,j,k,l,m,n,o,p,q,r,s,t,v,v2,x,y,z,mx,my,p0,p1,p2;
        l = RV.lg[RV.LG];
        a = RV.DM;
        b = RV.TL.toLowerCase();
        if(a == '2d') {
            v = RV.CTT;
            v2 = RV.CVT;
            RV.sn(v2);
            v.clearRect(0, 0, RV.cw, RV.ch);
        } else {
            v = RV.CT3T;
            v2 = RV.CV3T;
            RV.sn(v2);
            v.clear(v.COLOR_BUFFER_BIT);
        }
        
        x = RV.fn(RV.X);
        y = RV.fn(RV.Y);
        mx = RV.fn(RV.X1);
        my = RV.fn(RV.Y1);
        
        if(!RV.DS) {
            RV.KO.kl = 1;
            RV.DS = 1;
            RV.TO = {pl:[]}; // temp obj
            RV.DX = mx;
            RV.DY = my;
        }
        
        if(a == '2d') { // 2d tool
            c = RV.DSLW || 1;
            d = RV.DSLS || '#2ff';
            e = RV.DSFS || '#cee';
            v.lineWidth = c;
            v.strokeStyle = d;
            v.fillStyle = e;
            RV.TO.lw = c;
            RV.TO.ls = d;
            RV.TO.fs = e;
            
            if(b == 't') {
                RV.TO.nm = l.set.key.a2.t || '文本(Text)';
                RV.TO.t = b;
                RV.TO.f = 1;
                RV.TO.s = 0;
                RV.TO.tc = t = '文本内容(Text Content)';
                RV.TO.tn = n = 'Microsoft YaHei';
                RV.TO.ts = s = 20;
                RV.TO.ta = i = 'left';
                RV.TO.tb = j = 'top';
                
                w = RV.fn(x - RV.DX);
                h = RV.fn(y - RV.DY);
                if(w < 0) {
                    w = Math.abs(w);
                    x = RV.fn(RV.DX - w);
                }
                else x = RV.DX;
                if(h < 0) {
                    h = Math.abs(h);
                    y = RV.fn(RV.DY - h);
                }
                else y = RV.DY;
                
                if(RV.LKS) {
                    RV.TO.w = w = Math.min(w, h);
                    RV.TO.h = h = Math.min(w, h);
                }
                
                RV.TO.x = x;
                RV.TO.y = y;
                RV.TO.w = w;
                RV.TO.h = h;
                RV.TO.tw = w;
                RV.gn('rvDSX').value = RV.TO.x;
                RV.gn('rvDSY').value = RV.TO.y;
                RV.gn('rvDSW').value = RV.TO.w;
                RV.gn('rvDSH').value = RV.TO.h;
                
                v.beginPath();
                v.rect(x, y, w, h);
                v.fillStyle = '#ede';
                v.fill();
                
                v.beginPath();
                v.font = s + 'px ' + n;
                v.textAlign = i;
                v.textBaseline = j;
                v.fillStyle = e;
                v.fillText(t, x, y, w);
                
            } else if(b == 'l') {
                RV.TO.nm = l.set.key.a2.l || '直线(Line)';
                RV.TO.t = b;
                RV.TO.f = 0;
                RV.TO.s = 1;
                v.beginPath();
                if(RV.MS == 'md') RV.TO.pl.push(mx, my);
                o = RV.gwh(RV.TO.pl, 'l');
                RV.TO.pl2 = []; // ancker point relative position
                for(z=0; z<RV.TO.pl.length; z+=2) {
                    m = RV.TO.pl[z];
                    n = RV.TO.pl[z+1];
                    v.lineTo(m, n);
                    RV.TO.pl2.push(m-o.x, n-o.y);
                }
                v.lineTo(x, y);
                v.stroke();
                
                RV.TO.x = o.x;
                RV.TO.y = o.y;
                RV.TO.w = o.w;
                RV.TO.h = o.h;
                RV.gn('rvDSX').value = RV.TO.x;
                RV.gn('rvDSY').value = RV.TO.y;
                RV.gn('rvDSW').value = RV.TO.w;
                RV.gn('rvDSH').value = RV.TO.h;
                
            } else if(b == 'p') {
                RV.TO.nm = l.set.key.a2.p || '路径(Path)';
                RV.TO.t = b;
                RV.TO.f = 0;
                RV.TO.s = 0;
                RV.TO.p = 1;
                if(RV.MS == 'md') {
                    if(RV.TO.pl.length < 1) RV.TO.pl.push(mx,my);
                    else RV.TO.pl.push(0,0, 0,0, mx,my);
                }
                o = RV.gwh(RV.TO.pl, 'p');
                RV.TO.pl2 = []; // ancker point relative position
                v.beginPath();
                v.moveTo(RV.TO.pl[0], RV.TO.pl[1]);
                RV.TO.pl2.push(RV.TO.pl[0]-o.x, RV.TO.pl[1]-o.y);
                for(z=2; z<RV.TO.pl.length; z+=6) {
                    s = RV.TO.pl[z-2] || 0;
                    t = RV.TO.pl[z-1] || 0;
                    f = RV.TO.pl[z+0] || 0;
                    g = RV.TO.pl[z+1] || 0;
                    h = RV.TO.pl[z+2] || 0;
                    i = RV.TO.pl[z+3] || 0;
                    j = RV.TO.pl[z+4] || 0;
                    k = RV.TO.pl[z+5] || 0;
                    if(!f) f = s;
                    if(!g) g = t;
                    if(!h) h = j;
                    if(!i) i = k;
                    
                    v.beginPath();
                    v.lineWidth = 1;
                    v.strokeStyle = '#2ff';
                    v.bezierCurveTo(f,g, h,i, j,k);
                    v.stroke();
                    
                    v.beginPath();
                    v.lineWidth = 0;
                    v.strokeStyle = '';
                    v.fillStyle = '#aff';
                    v.rect(f-3, g-3, 6, 6);
                    v.rect(h-3, i-3, 6, 6);
                    v.fill();
                    
                    RV.TO.pl2.push(f-o.x, g-o.y, h-o.x, i-o.y, j-o.x, k-o.y);
                }
                
                RV.TO.x = o.x;
                RV.TO.y = o.y;
                RV.TO.w = o.w;
                RV.TO.h = o.h;
                RV.gn('rvDSX').value = RV.TO.x;
                RV.gn('rvDSY').value = RV.TO.y;
                RV.gn('rvDSW').value = RV.TO.w;
                RV.gn('rvDSH').value = RV.TO.h;
                
                v.lineTo(x, y);
                v.lineWidth = 1;
                v.strokeStyle = '#2ff';
                v.stroke();
                
            } else if(b == 'g') {
                RV.TO.t = b;
                RV.TO.f = 1;
                RV.TO.s = 0;
                RV.TO.c = 1;
                w = RV.fn(x - RV.DX);
                h = RV.fn(y - RV.DY);
                if(w < 0) {
                    w = Math.abs(w);
                    x = RV.fn(RV.DX - w);
                }
                else x = RV.DX;
                if(h < 0) {
                    h = Math.abs(h);
                    y = RV.fn(RV.DY - h);
                }
                else y = RV.DY;
                
                if(RV.LKS) {
                    RV.TO.w = w = Math.min(w, h);
                    RV.TO.h = h = Math.min(w, h);
                }
                
                RV.TO.x = x;
                RV.TO.y = y;
                RV.TO.w = w;
                RV.TO.h = h;
                RV.gn('rvDSX').value = RV.TO.x;
                RV.gn('rvDSY').value = RV.TO.y;
                RV.gn('rvDSW').value = RV.TO.w;
                RV.gn('rvDSH').value = RV.TO.h;
                
                if(RV.DSA == 0) {
                    RV.TO.nm = (l.set.key.a2.g || '多边形') + '(0)';
                    RV.TO.a = RV.DSA;
                    v.beginPath();
                    v.moveTo(x+w/2,y);
                    v.bezierCurveTo((x+w/2)+w/2*.58,y, x+w,(y+h/2)-h/2*.58, x+w,y+h/2);
                    v.bezierCurveTo(x+w,(y+h/2)+h/2*.58, (x+w/2)+w/2*.58,y+h, x+w/2,y+h);
                    v.bezierCurveTo((x+w/2)-w/2*.58,y+h, x,(y+h/2)+h/2*.58, x,y+h/2);
                    v.bezierCurveTo(x,(y+h/2)-h/2*.58, (x+w/2)-w/2*.58,y, x+w/2,y);
                    v.fill();
                    
                } else if(RV.DSA == 1) {
                    RV.TO.nm = (l.set.key.a2.g || '多边形') + '(1)';
                    RV.TO.a = RV.DSA;
                    v.beginPath();
                    v.moveTo(x+w/2,y);
                    v.bezierCurveTo((x+w/2)+w/2*.75,y, x+w,(y+h/2), x+w,y+h/2);
                    v.bezierCurveTo(x+w,(y+h/2), (x+w/2)+w/2*.75,y+h, x+w/2,y+h);
                    v.bezierCurveTo((x+w/2)-w/2*.58,y+h, x,(y+h/2)+h/2*.58, x,y+h/2);
                    v.bezierCurveTo(x,(y+h/2)-h/2*.58, (x+w/2)-w/2*.58,y, x+w/2,y);
                    v.fill();
                    
                } else if(RV.DSA == 2) {
                    RV.TO.nm = (l.set.key.a2.g || '多边形') + '(2)';
                    RV.TO.a = RV.DSA;
                    v.beginPath();
                    v.moveTo(x+w/2,y);
                    v.bezierCurveTo((x+w/2)+w/2*.75,y, x+w,(y+h/2), x+w,y+h/2);
                    v.bezierCurveTo(x+w,(y+h/2), (x+w/2)+w/2*.75,y+h, x+w/2,y+h);
                    v.bezierCurveTo((x+w/2)-w/2*.75,y+h, x,(y+h/2), x,y+h/2);
                    v.bezierCurveTo(x,(y+h/2), (x+w/2)-w/2*.75,y, x+w/2,y);
                    v.fill();
                    
                } else if(RV.DSA == 3) {
                    RV.TO.nm = (l.set.key.a2.g || '多边形') + '(3)';
                    RV.TO.a = RV.DSA;
                    v.beginPath();
                    v.moveTo(x, y);
                    v.lineTo(x+w, y+h/2);
                    v.lineTo(x, y+h);
                    v.lineTo(x, y);
                    v.fill();
                    
                } else if(RV.DSA == 4) {
                    RV.TO.nm = (l.set.key.a2.g || '多边形') + '(4)';
                    RV.TO.a = RV.DSA;
                    v.beginPath();
                    v.rect(x, y, w, h);
                    v.fill();
                    
                } else if(RV.DSA>4 && RV.DSA<13) {
                    RV.TO.nm = (l.set.key.a2.g || '多边形') + '('+RV.DSA+')';
                    RV.TO.a = RV.DSA;
                    q = w / h;
                    m = Math.max(w, h);
                    f = 360 / RV.DSA;
                    p0 = [x+m/2, y+m/2];
                    
                    if(RV.DSA == 4) {
                        s = x+m;
                        t = y;
                    } else if(RV.DSA == 5) {
                        s = x+m/2;
                        t = y;
                    } else {
                        s = x+m;
                        t = y+m/2;
                    }
                    p2 = p1 = [s, t];
                    
                    v.beginPath();
                    for(z=0; z<RV.DSA; z++) {
                        r = RV.rot(p0[0], p0[1], p1[0], p1[1], -(f*z));
                        if(q < 1) r.x = RV.sca(x, y, r.x, r.y, q, 1).x;
                        else if(q > 1) r.y = RV.sca(x, y, r.x, r.y, q, 4).y;
                        if(!z) p2 = [r.x, r.y];
                        v.lineTo(r.x, r.y);
                    }
                    v.lineTo(p2[0], p2[1]);
                    v.closePath();
                    v.fill();
                }
                
            } else if(b == 'a' || b == 'e') {
                RV.TO.t = b;
                RV.TO.f = 0;
                RV.TO.s = 0;
                w = RV.fn(x - RV.DX);
                h = RV.fn(y - RV.DY);
                if(w < 0) {
                    w = Math.abs(w);
                    x = RV.fn(RV.DX - w);
                }
                else x = RV.DX;
                if(h < 0) {
                    h = Math.abs(h);
                    y = RV.fn(RV.DY - h);
                }
                else y = RV.DY;
                
                if(RV.LKS) {
                    RV.TO.w = w = Math.min(w, h);
                    RV.TO.h = h = Math.min(w, h);
                }
                
                RV.TO.x = x;
                RV.TO.y = y;
                RV.TO.w = w;
                RV.TO.h = h;
                
                if((b=='a' && RV.SAS && Object.keys(RV.SELA).length>0) || (b=='e' && RV.SES && Object.keys(RV.SELE).length>0)) {
                    RV.edd();
                    return;
                }
                
                v.beginPath();
                v.fillStyle = 'rgba(0, 255, 255, .25)';
                v.rect(x, y, w, h);
                v.fill();
            }
            
        } else { // 3d tool
            
        }
    },
    
    edd: (A) => { // end draw
        var a,b,c,d,i,w,h,x,y,z;
        RV.LKX = RV.LKY = RV.LKZ = RV.LKS = 0;
        RV.KO.kl = 0;
        RV.DS = 0;
        if(!RV.TO) return;
        if(RV.DM == '2d') { // 2d tool
            RV.hn(RV.CVT);
            if(RV.TL == 'a' || RV.TL == 'e') {
                x = RV.TO.x;
                y = RV.TO.y;
                w = RV.TO.w;
                h = RV.TO.h;
                if(w < 10) {
                    x -= 5;
                    w = 10;
                    i = 1;
                }
                if(h < 10) {
                    y -= 5;
                    h = 10;
                    i = 1;
                }
                if(i == 1) RV.sele(x, y, w, h, 2); // dot select
                else RV.sele(x, y, w, h); // range select
                RV.csel();
                return;
            }
            
            while(1) {
                i = '#E'+RV.rs(4);
                if(!RV['E'+RV.DM][i]) break;
            }
            if(RV.TO.nm == undefined) return;
            RV.TO.id = i;
            RV.TO.idx = Object.keys(RV['E'+RV.DM]).length + 1;
            RV.TO.nm += '_' + RV.TO.idx;
            RV['E'+RV.DM][i] = RV.TO;
            RV['E'+RV.DM] = RV.sobj(RV['E'+RV.DM], 2);
            RV.TO = null;
            RV.smn('ds');
            
        } else { // 3d tool
            RV.hn(RV.CV3T);
            while(1) {
                i = '#E'+RV.rs(4);
                if(!RV['E'+RV.DM][i]) break;
            }
            if(RV.TO.nm == undefined) return;
            RV.TO.id = i;
            RV['E'+RV.DM][i] = RV.TO;
            RV.TO = null;
            RV.smn('ds');
        }
    },
    
    ren: (A, B) => { // render
        // A:rend type:0=rend to workspace, 1=rend to buffer canvas, 2=rend to save canvas, 3=rend to ico
        // B:is out jpg:0=no, 1=yes
        var a,b,c,d,m,o,p,v,v2,z;
        A = A || 0;
        B = B || 0;
        if(RV.DM == '2d') {
            v = RV.CTX;
            v2 = RV.CVX;
            RV.sn(RV.CVX);
            RV.hn(RV.CV3);
            if(!A) v.clearRect(0, 0, RV.cw, RV.ch);
            v.globalCompositeOperation = 'source-over';
            
        } else {
            v = RV.CT3;
            v2 = RV.CV3;
            RV.sn(RV.CV3);
            RV.hn(RV.CVX);
            if(!A) v.clear(v.COLOR_BUFFER_BIT);
        }
        
        o = RV['E'+RV.DM];
        p = {};
        if(RV.DM == '2d') {
            if(A == 1) RV.d2d(o, 1);
            else if(A == 2) RV.d2d(RV.SVE, 2, B);
            else RV.d2d(o);
            
        } else {
            RV.d3d(o);
        }
        RV.cval();
        //CL(b);
    },
    
    d2d: (A, B, C) => { // draw 2d shape
        // A:element obj
        // B:rend type:0=rend to workspace, 1=rend to buffer canvas, 2=rend to save canvas, 3=rend to ico
        // C:is out jpg:0=no, 1=yes
        var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,v,v2,w,y,z,p0,p1,p2;
        p = {lc:{b:'butt', r:'round', s:'square', def:'butt'}, lj:{b:'bevel', r:'round', m:'miter', def:'miter'}, ta:{s:'start', e:'end', c:'center', l:'left', r:'right', def:'left'}, tb:{a:'alphabetic', t:'top', h:'hanging', m:'middle', i:'ideographic', b:'bottom', def:'top'}, pf:{r:'repeat', x:'repeat-x', y:'repeat-y', n:'no-repeat', def:'repeat'}, co:{sv:'source-over', sa:'source-atop', si:'source-in', st:'source-out', dv:'destination-over', da:'destination-atop', di:'destination-in', dt:'destination-out', l:'lighter', c:'copy', x:'xor', def:'source-over'}};
        
        B = B || 0;
        C = C || 0;
        if(B == 3) {
            v = RV.CTI;
            v2 = RV.CVI;
        } else {
            v = RV.CTT;
            v2 = RV.CVT;
        }
        v.clearRect(0, 0, RV.cw, RV.ch);
        v.globalCompositeOperation = 'source-over';
        
        o = A || RV['E'+RV.DM];
        for(z in o) {
            if(o[z].hd == 1) continue;
            q = o[z];
            v.save();
            v.beginPath();
            
            if(q.t == 't') { // Text
                q.tc = q.tc || '文本内容(Text Content)';
                q.ts = q.ts || 20;
                q.tn = q.tn || 'Microsoft YaHei';
                q.ta = q.ta || 'l';
                q.tb = q.tb || 't';
                
                if(q.eb == 1) { // edit box
                    v.beginPath();
                    v.rect(q.x, q.y, q.w, q.h);
                    v.fillStyle = '#ede';
                    v.fill();
                }
                
            } else if(q.t == 'l') { // line
                t = 0;
                for(y=0; y<q.pl.length; y+=2) {
                    a = q.pl[y] || 0;
                    b = q.pl[y+1] || 0;
                    if(a=='=' || b=='=') {
                        t = 1;
                        continue;
                    }
                    
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, a, b, q.r);
                        a = r.x;
                        b = r.y;
                    }
                    
                    if(t == 1) {
                        v.moveTo(a, b);
                        t = 0;
                    }
                    else v.lineTo(a, b);
                }
                
            } else if(q.t == 'p') { // path
                v.beginPath();
                a = q.pl[0];
                b = q.pl[1];
                if(q.r) {
                    r = RV.rot(q.x+q.w/2, q.y+q.h/2, a, b, q.r);
                    a = r.x;
                    b = r.y;
                }
                v.moveTo(a, b);
                t = 0;
                for(y=2; y<q.pl.length;) {
                    a = q.pl[y-2] || 0;
                    b = q.pl[y-1] || 0;
                    c = q.pl[y+0] || 0;
                    d = q.pl[y+1] || 0;
                    e = q.pl[y+2] || 0;
                    f = q.pl[y+3] || 0;
                    g = q.pl[y+4] || 0;
                    h = q.pl[y+5] || 0;
                    if(!c) c = a;
                    if(!d) d = b;
                    if(!e) e = g;
                    if(!f) f = h;
                    
                    if(c=='=' || d=='=') {
                        y += 2;
                        t = 1;
                        continue;
                    }
                    
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    if(t == 1) {
                        v.moveTo(c, d);
                        t = 0;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    y += 6;
                }
                
                //if(q.c && (g!=q.pl[0] || h!=q.pl[1])) {
                //    q.pl.push(g,h, q.pl[0],q.pl[1], q.pl[0],q.pl[1]);
                //    v.bezierCurveTo(g,h, q.pl[0],q.pl[1], q.pl[0],q.pl[1]);
                //}
                
            } else if(q.t == 'g') { // polygon
                if(q.a == 0) {
                    v.beginPath();
                    a = q.x+q.w/2;
                    b = q.y;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, a, b, q.r);
                        a = r.x;
                        b = r.y;
                    }
                    v.moveTo(a, b);
                    
                    c = (q.x+q.w/2)+q.w/2*.58;
                    d = q.y;
                    e = q.x+q.w;
                    f = (q.y+q.h/2)-q.h/2*.58;
                    g = q.x+q.w;
                    h = q.y+q.h/2;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    c = q.x+q.w;
                    d = (q.y+q.h/2)+q.h/2*.58;
                    e = (q.x+q.w/2)+q.w/2*.58;
                    f = q.y+q.h;
                    g = q.x+q.w/2;
                    h = q.y+q.h;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    c = (q.x+q.w/2)-q.w/2*.58;
                    d = q.y+q.h;
                    e = q.x;
                    f = (q.y+q.h/2)+q.h/2*.58;
                    g = q.x;
                    h = q.y+q.h/2;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    c = q.x;
                    d = (q.y+q.h/2)-q.h/2*.58;
                    e = (q.x+q.w/2)-q.w/2*.58;
                    f = q.y;
                    g = q.x+q.w/2;
                    h = q.y;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                } else if(q.a == 1) {
                    v.beginPath();
                    a = q.x+q.w/2;
                    b = q.y;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, a, b, q.r);
                        a = r.x;
                        b = r.y;
                    }
                    v.moveTo(a, b);
                    
                    c = (q.x+q.w/2)+q.w/2*.75;
                    d = q.y;
                    e = q.x+q.w;
                    f = (q.y+q.h/2);
                    g = q.x+q.w;
                    h = q.y+q.h/2;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    c = q.x+q.w;
                    d = (q.y+q.h/2);
                    e = (q.x+q.w/2)+q.w/2*.75;
                    f = q.y+q.h;
                    g = q.x+q.w/2;
                    h = q.y+q.h;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    c = (q.x+q.w/2)-q.w/2*.58;
                    d = q.y+q.h;
                    e = q.x;
                    f = (q.y+q.h/2)+q.h/2*.58;
                    g = q.x;
                    h = q.y+q.h/2;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    c = q.x;
                    d = (q.y+q.h/2)-q.h/2*.58;
                    e = (q.x+q.w/2)-q.w/2*.58;
                    f = q.y;
                    g = q.x+q.w/2;
                    h = q.y;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                } else if(q.a == 2) {
                    v.beginPath();
                    a = q.x+q.w/2;
                    b = q.y;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, a, b, q.r);
                        a = r.x;
                        b = r.y;
                    }
                    v.moveTo(a, b);
                    
                    c = (q.x+q.w/2)+q.w/2*.75;
                    d = q.y;
                    e = q.x+q.w;
                    f = (q.y+q.h/2);
                    g = q.x+q.w;
                    h = q.y+q.h/2;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    c = q.x+q.w;
                    d = (q.y+q.h/2);
                    e = (q.x+q.w/2)+q.w/2*.75;
                    f = q.y+q.h;
                    g = q.x+q.w/2;
                    h = q.y+q.h;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    c = (q.x+q.w/2)-q.w/2*.75;
                    d = q.y+q.h;
                    e = q.x;
                    f = (q.y+q.h/2);
                    g = q.x;
                    h = q.y+q.h/2;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                    c = q.x;
                    d = (q.y+q.h/2);
                    e = (q.x+q.w/2)-q.w/2*.75;
                    f = q.y;
                    g = q.x+q.w/2;
                    h = q.y;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.bezierCurveTo(c,d, e,f, g,h);
                    
                } else if(q.a == 3) {
                    v.beginPath();
                    a = q.x;
                    b = q.y;
                    c = q.x+q.w;
                    d = q.y+q.h/2;
                    e = q.x;
                    f = q.y+q.h;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, a, b, q.r);
                        a = r.x;
                        b = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                    }
                    v.moveTo(a, b);
                    v.lineTo(c, d);
                    v.lineTo(e, f);
                    v.lineTo(a, b);
                    
                } else if(q.a == 4) {
                    v.beginPath();
                    a = q.x;
                    b = q.y;
                    c = q.x+q.w;
                    d = q.y;
                    e = q.x+q.w;
                    f = q.y+q.h;
                    g = q.x;
                    h = q.y+q.h;
                    if(q.r) {
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, a, b, q.r);
                        a = r.x;
                        b = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, c, d, q.r);
                        c = r.x;
                        d = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, e, f, q.r);
                        e = r.x;
                        f = r.y;
                        r = RV.rot(q.x+q.w/2, q.y+q.h/2, g, h, q.r);
                        g = r.x;
                        h = r.y;
                    }
                    v.moveTo(a, b);
                    v.lineTo(c, d);
                    v.lineTo(e, f);
                    v.lineTo(g, h);
                    v.lineTo(a, b);
                    
                } else if(q.a>4 && q.a<13) {
                    s = 360 / q.a;
                    v.beginPath();
                    n = q.w / q.h;
                    m = Math.max(q.w, q.h);
                    p0 = [q.x+m/2, q.y+m/2];
                    
                    if(q.a == 5) {
                        a = q.x+m/2;
                        b = q.y;
                    } else {
                        a = q.x+m;
                        b = q.y+m/2;
                    }
                    p2 = p1 = [a, b];
                    
                    for(y=0; y<q.a; y++) {
                        r = RV.rot(p0[0], p0[1], p1[0], p1[1], -(s*y));
                        a = r.x;
                        b = r.y;
                        if(q.r) {
                            r = RV.rot(p0[0], p0[1], a, b, q.r);
                            a = r.x;
                            b = r.y;
                        }
                        if(n < 1) a = RV.sca(p0[0], p0[1], a, b, n, 1).x - (q.h-q.w)/2;
                        else if(n > 1) b = RV.sca(p0[0], p0[1], a, b, n, 4).y - (q.w-q.h)/2;
                        if(!y) p2 = [a, b];
                        v.lineTo(a, b);
                    }
                    v.lineTo(p2[0], p2[1]);
                }
                
            } else if(q.t == 'e') { // select
                
                
            } else if(q.t == 'm') { // move
                
                
            } else if(q.t == 's') { // scale
                
                
            } else if(q.t == 'r') { // rotation
                
                
            } else if(q.t == 'i') { // align
                
                
            } else if(q.t == 'n') { // boolen
                
                
            } else if(q.t == 'mi') { // mirror image
                
                
            } else if(q.t == 'cl') { // clone
                
                
            }
            
            v.lineWidth = q.lw = q.lw || RV.DSLW || 1;
            v.strokeStyle = q.ls = q.ls || RV.DSLS || '#000';
            v.fillStyle = q.fs = q.fs || RV.DSFS || '#888';
            if(q.lc) v.lineCap = p.lc[q.lc] || p.lc.def;
            if(q.lj) v.lineJoin = p.lj[q.lj] || p.lj.def;
            if(q.sc) v.shadowColor = q.sc;
            if(q.sb) v.shadowBlur = q.sb;
            if(q.sx) v.shadowOffsetX = q.sx;
            if(q.sy) v.shadowOffsetY = q.sy;
            if(q.ga || q.ga==0) v.globalAlpha = q.ga;
            if(q.n) {
                if(q.n == 'p') f = 'dv';
                else if(q.n == 's1') f = 'st';
                else if(q.n == 's2') f = 'sa';
                else if(q.n == 'm') f = 'si';
                else if(q.n == 'd') f = 'x';
                v.globalCompositeOperation = p.co[f] || p.co.def;
            }
            else v.globalCompositeOperation = p.co['dv'] || p.co.def;
            
            q.fs += '';
            f = q.fs.substr(0, 2);
            g = q.fs.substr(2).trim();
            if(f == 'lf') {
                g = RV.plf(g, v, q);
                v.fillStyle = g;
            } else if(f == 'rf') {
                g = RV.prf(g, v, q);
                v.fillStyle = g;
            } else if(f == 'pf') {
                g = g.split(/ *\, */);
                h = RV.ico(g[0]);
                g = v.createPattern(RV.CVI, p.pf[g[1]]||p.pf.def);
                //i = new Image();
                //i.src = h;
                //g = v.createPattern(i, p.pf[g[1]]||p.pf.def);
                v.fillStyle = g;
            }
            
            q.ls += '';
            f = q.ls.substr(0, 2);
            g = q.ls.substr(2).trim();
            if(f == 'lf') {
                g = RV.plf(g, v, q);
                v.strokeStyle = g;
            } else if(f == 'rf') {
                g = RV.prf(g, v, q);
                v.strokeStyle = g;
            } else if(f == 'pf') {
                g = g.split(/ *\, */);
                h = RV.ico(g[0]);
                g = v.createPattern(RV.CVI, p.pf[g[1]]||p.pf.def);
                v.strokeStyle = g;
            }
            
            if(q.t=='t') v.beginPath();
            if(q.c) v.closePath();
            if(q.s) v.stroke();
            if(q.f) v.fill();
            
            if(q.t=='t' && q.tc) {
                v.beginPath();
                v.font = q.ts + 'px ' + q.tn;
                w = v.measureText(q.tc).width;
                a = q.x;
                b = q.y;
                if(q.ta == 'c') a = q.x + (q.w-w)/2;
                else if(q.ta == 'r') a = q.x + (q.w-w);
                if(q.tb == 'm') b = q.y + (q.h-q.ts)/2;
                else if(q.tb == 'b') b = q.y + (q.h-q.ts);
                if(q.ta) v.textAlign = 'left';
                if(q.tb) v.textBaseline = 'top';
                //v.fillText(q.tc, a, b, q.w);
                v.fillText(q.tc, a, b);
            }
            
            if(q.t=='p' && q.p==1) { // 显示路径
                v.lineWidth = 1;
                v.strokeStyle = '#2ff';
                v.beginPath();
                v.moveTo(q.pl[0], q.pl[1]);
                for(y=2; y<q.pl.length; y+=6) {
                    a = parseInt(q.pl[y-2])||0;
                    b = parseInt(q.pl[y-1])||0;
                    c = parseInt(q.pl[y+0])||0;
                    d = parseInt(q.pl[y+1])||0;
                    e = parseInt(q.pl[y+2])||0;
                    f = parseInt(q.pl[y+3])||0;
                    g = parseInt(q.pl[y+4])||0;
                    h = parseInt(q.pl[y+5])||0;
                    if(!c) c = a;
                    if(!d) d = b;
                    if(!e) e = g;
                    if(!f) f = h;
                    v.bezierCurveTo(c,d, e,f, g,h);
                }
                if(q.c) v.closePath();
                v.stroke();
                
                v.lineWidth = 1;
                v.strokeStyle = '#caf';
                for(y=2; y<q.pl.length; y+=6) { // draw ancker point and control point
                    a = parseInt(q.pl[y-2])||0;
                    b = parseInt(q.pl[y-1])||0;
                    c = parseInt(q.pl[y+0])||0;
                    d = parseInt(q.pl[y+1])||0;
                    e = parseInt(q.pl[y+2])||0;
                    f = parseInt(q.pl[y+3])||0;
                    g = parseInt(q.pl[y+4])||0;
                    h = parseInt(q.pl[y+5])||0;
                    if(!c) c = a;
                    if(!d) d = b;
                    if(!e) e = g;
                    if(!f) f = h;
                    
                    if(y == 2) {
                        v.beginPath();
                        v.moveTo(a, b);
                        v.rect(a-3, b-3, 6, 6);
                        v.fillStyle = '#aff';
                        v.fill();
                    }
                    
                    v.beginPath();
                    v.moveTo(g, h);
                    v.rect(g-3, h-3, 6, 6);
                    v.fillStyle = '#aff';
                    v.fill();
                    
                    v.beginPath();
                    v.moveTo(a, b);
                    v.lineTo(c, d);
                    v.moveTo(g, h);
                    v.lineTo(e, f);
                    v.stroke();
                    
                    v.beginPath();
                    v.arc(c, d, 4, 0, RV.pi2);
                    v.arc(e, f, 4, 0, RV.pi2);
                    v.fillStyle = '#c2f';
                    v.fill();
                }
            }
            
            v.restore();
        }
        
        a = RV.CTT.getImageData(0, 0, RV.cw, RV.ch);
        if(B == 1) RV.CVS.ctx0.putImageData(a, 0, RV.ch);
        //else if(B == 2) RV.CTP.putImageData(a, 0, 0);
        else if(B == 2) { // rend to save
            if(C == 1) { // out jpg
                RV.CTP.fillStyle = '#fff';
                RV.CTP.fillRect(0, 0, RV.cw, RV.ch);
            }
            RV.CTP.drawImage(RV.CVT, 0, 0);
        }
        else if(B == 3) {} // rend to ico
        else RV.CTX.putImageData(a, 0, 0);
        //RV.CTT.clearRect(0, 0, RV.cw, RV.ch);
    },
    
    d3d: (A, B) => { // draw 3d graphics
        var a,b,c,d,z;
        
    },
    
    sa: (A, B) => { // shape attribute
        var a,b,c,d,e,f,i,l,o,s,t,x,z;
        A = A || '';
        B = B || null;
        if(!A) return;
        l = RV.lg[RV.LG];
        o = {};
        a = A.split(/ *\; */);
        if(A.indexOf(':') < 0) return;
        
        for(z=0; z<a.length; z++) {
            b = (a[z]||'').trim();
            if(!b) continue;
            c = b.indexOf(':');
            if(c < 0) {
                d = b;
                e = '.';
            } else {
                d = b.substr(0, c).trim();
                e = b.substr(c+1).trim();
            }
            if(!d) continue;
            
            s = ',x,y,w,h,r,o,lw,sx,xy,ga,';
            t = ',f,s,p,c,a,hd,sl,eb,';
            if(s.indexOf(','+d+',') != -1) e = parseFloat(e) || 0;
            else if(t.indexOf(','+d+',') != -1) e = parseInt(e) || 0;
            else if(d=='fs' || d=='ls' || d=='sc') e = RV.cgc(e).rgba || RV.cgc(e).c || '#000';
            else if((d=='i' || d=='n' || d=='cl') && e.indexOf(',') != -1) e = e.split(/ *\, */);
            else if(d=='pl' && e.indexOf(',') != -1) {
                e = e.split(/ *\, */);
                for(x=0; x<e.length; x++) {
                    if(e[x] == '=') e[x] = '=';
                    else e[x] = parseFloat(e[x]) || 0;
                }
            }
            o[d] = e;
        }
        
        o.x = o.x || 0;
        o.y = o.y || 0;
        o.w = o.w || 0;
        o.h = o.h || 0;
        o.r = o.r || 0;
        o.a = o.a || 0;
        o.f = o.f || 0;
        o.s = o.s || 0;
        o.p = o.p || 0;
        o.c = o.c || 0;
        o.hd = o.hd || 0;
        o.sl = o.sl || 0;
        o.eb = o.eb || 0;
        
        if(!o['id']) {
            while(1) {
                i = '#E'+RV.rs(4);
                if(B && !o[i]) break;
                else if(!o[i]) break;
            }
            o['id'] = i;
        }
        
        if(B) i = Object.keys(B).length || 0;
        else i = 0;
        i++;
        o.idx = i;
        
        if(!o.nm) {
            if(o.t == 't') o.nm = (l.set.key.a2.t || '文本') + '_' + i;
            else if(o.t == 'l') o.nm = (l.set.key.a2.l || '直线') + '_' + i;
            else if(o.t == 'p') o.nm = (l.set.key.a2.p || '路径') + '_' + i;
            else if(o.t == 'g') o.nm = (l.set.key.a2.g || '多边形') + '('+o.a+')_' + i;
        }
        o = RV.sobj(o, 2);
        //CL(o);
        return o;
    },
    
    plf: (A, B, C) => { // parse linear fill
        var a,b,c,d,e,f,z,x1,y1,x2,y2;
        a = (A||'').split(/ *\, */);
        b = a[0] || 0;
        if(b >= 360) b = 0;
        c = RV.pi1/180 * b;
        if(b < 90) {
            d = C.w/2 / Math.cos(c);
            x2 = C.x+C.w/2 + d * Math.cos(c);
            y2 = C.y+C.h/2 - d * Math.sin(c);
            if(y2 < C.y) {
                x2 = C.x+C.w - Math.abs(y2-C.y) * Math.tan(RV.pi1/180*(90-b));
                y2 = C.y;
            }
            x1 = C.x+Math.abs(C.x+C.w-x2);
            y1 = C.y+Math.abs(C.y+C.h-y2);
            
        } else if(b == 90) {
            x1 = 0;
            y1 = C.y+C.h;
            x2 = 0;
            y2 = C.y;
            
        } else if(b < 180) {
            b = b-90;
            c = RV.pi1/180 * b;
            d = C.h/2 * Math.tan(c);
            x2 = C.x+C.w/2 - d;
            y2 = C.y;
            if(x2 < C.x) {
                y2 = C.y+Math.abs(x2-C.x) * Math.tan(RV.pi1/180*(90-b));
                x2 = C.x;
            }
            x1 = C.x+C.x+C.w-x2;
            y1 = C.y+C.y+C.h-y2;
            
        } else if(b == 180) {
            x1 = C.x+C.w;
            y1 = 0;
            x2 = C.x;
            y2 = 0;
            
        } else if(b < 270) {
            b = b-180;
            c = RV.pi1/180 * b;
            d = C.w/2 * Math.tan(c);
            y2 = C.y+C.h/2 + d;
            x2 = C.x;
            if(y2 > (C.y+C.h)) {
                x2 = C.x+Math.abs(y2-(C.y+C.h)) * Math.tan(RV.pi1/180*(90-b));
                y2 = C.y+C.h;
            }
            x1 = C.x+C.x+C.w-x2;
            y1 = C.y+C.y+C.h-y2;
            
        } else if(b == 270) {
            x1 = 0;
            y1 = C.y;
            x2 = 0;
            y2 = C.y+C.h;
            
        } else {
            b = b-270;
            c = RV.pi1/180 * b;
            d = C.h/2 * Math.tan(c);
            x2 = C.x+C.w/2 + d;
            y2 = C.y+C.h;
            if(x2 > (C.x+C.w)) {
                y2 = C.y+C.h - Math.abs(x2-(C.x+C.w)) * Math.tan(RV.pi1/180*(90-b));
                x2 = C.x+C.w;
            }
            x1 = C.x+C.x+C.w-x2;
            y1 = C.y+C.y+C.h-y2;
        }
        
        //CL([x1, y1, x2, y2]);
        e = B.createLinearGradient(x1, y1, x2, y2);
        for(z=1; z<a.length; z+=2) {
            c = (a[z]||'').trim();
            d = (a[z+1]||'').trim();
            c = parseFloat(c) || 0;
            d = RV.cgc(d).rgba || '#000';
            e.addColorStop(c, d);
        }
        return e;
    },
    
    prf: (A, B, C) => { // parse radial fill
        var a,b,c,d,e,f,m,n,z,x1,y1,x2,y2,r1,r2;
        m = Math.max(C.w, C.h);
        n = Math.min(C.w, C.h);
        a = (A||'').split(/ *\, */);
        a[0] = a[0] || 0;
        a[1] = a[1] || 0;
        a[2] = a[2] || 0;
        a[3] = a[3] || 0;
        a[4] = a[4] || 0;
        a[5] = a[5] || 0;
        x1 = C.x + parseInt(a[0])/100*C.w;
        y1 = C.y + parseInt(a[1])/100*C.h;
        r1 = parseFloat(a[2])/100*m;
        x2 = C.x + parseInt(a[3])/100*C.w;
        y2 = C.y + parseInt(a[4])/100*C.h;
        r2 = parseFloat(a[5])/100*m;
        e = B.createRadialGradient(x1, y1, r1, x2, y2, r2);
        for(z=6; z<a.length; z+=2) {
            c = (a[z]||'').trim();
            d = (a[z+1]||'').trim();
            c = parseFloat(c) || 0;
            d = RV.cgc(d).rgba || '#000';
            e.addColorStop(c, d);
        }
        return e;
    },
    
    t2v: (A, B) => { // text data to canvas data
        // A:text data
        // B:is return obj:0=no, 1=yes
        var a,b,c,d,e,f,g,h,i,j,o,p,q,x,y,z;
        A = A || '';
        B = B || 0;
        if(!A) return;
        i = A.indexOf(':CTD:'); // canvas text data
        if(i != -1) A = A.substr(i+6);
        a = A.split(/ *\@\#\@ */);
        
        for(z=0; z<a.length; z++) {
            b = (a[z]||'').trim();
            if(!b) continue;
            i = b.indexOf(' ');
            if(i < 0) continue;
            c = b.substr(i+1).trim();
            b = b.substr(0, i).trim();
            
            if(b=='V2d' || b=='S2d' || b=='A2d' || b=='V3d' || b=='S3d' || b=='A3d') {
                o = RV[b];
                d = c.split(/ *\.\. */);
                
                for(y=0; y<d.length; y++) {
                    e = (d[y]||'').trim();
                    if(!e) continue;
                    i = e.indexOf(' ');
                    if(i < 0) continue;
                    f = e.substr(i+1).trim();
                    e = e.substr(0, i).trim();
                    g = f.split(/ *\; */);
                    
                    p = {};
                    for(x=0; x<g.length; x++) {
                        h = (g[x]||'').trim();
                        if(!h) continue;
                        i = h.indexOf(':');
                        if(i < 0) continue;
                        j = h.substr(i+1).trim();
                        h = h.substr(0, i).trim();
                        if(j.indexOf(',') != -1) j = j.split(/ *\, */);
                        p[h] = j;
                    }
                    o[e] = p;
                }
                
            } else if(b=='E2d' || b=='E3d') {
                if(B == 1) o = {};
                else o = RV[b];
                d = c.split(/ *\.\. */);
                
                for(y=0; y<d.length; y++) {
                    e = (d[y]||'').trim();
                    if(!e) continue;
                    p = RV.sa(e, o);
                    if(!p) continue;
                    o[p['id']] = p;
                }
            }
        }
        if(B == 1) return o;
    },
    
    v2t: (A, B) => { // canvas data to text data
        var f,o,s,t,y,z;
        if(typeof A == 'object') {
            o = A;
            f = 'E';
        } else {
            A = (A||'').toUpperCase();
            if(!A || (A!='V' && A!='S' && A!='A' && A!='E')) return '';
            o = RV[A+RV.DM];
            f = A;
        }
        t = [];
        for(z in o) {
            s = [];
            if(A=='V' || A=='S' || A=='A') {
                for(y in o[z]) {
                    if(typeof o[z][y] == 'array') s.push(y+':'+o[z][y].join(','));
                    else s.push(y+':'+o[z][y]);
                }
                if(s.length > 0) {
                    s = z +' '+ s.join('; ');
                    t.push(s);
                }
                
            } else {
                if(RV.DM == '2d') { // 2d element
                    if(o[z]['id'] && RV.ini2.set.sys.sid==1) s.push('id:'+o[z]['id']); // id
                    if(o[z].nm && RV.ini2.set.sys.snm==1) s.push('nm:'+o[z].nm); // name
                    if(o[z].t) s.push('t:'+o[z].t); // tool
                    if(o[z].f==1) s.push('f:'+o[z].f); // is fill:0||1
                    if(o[z].s==1) s.push('s:'+o[z].s); // is stroke:0||1
                    if(o[z].p==1 && o[z].t=='p') s.push('p:'+o[z].p); // is show path:0||1
                    if(o[z].c==1 && o[z].t!='g') s.push('c:'+o[z].c); // is closePath:0||1
                    if(o[z].x) s.push('x:'+RV.fn(o[z].x,2)); // X
                    if(o[z].y) s.push('y:'+RV.fn(o[z].y,2)); // Y
                    if(o[z].w) s.push('w:'+RV.fn(o[z].w,2)); // width
                    if(o[z].h) s.push('h:'+RV.fn(o[z].h,2)); // height
                    if(o[z].r) s.push('r:'+o[z].r); // rotation
                    if(o[z].o) s.push('o:'+o[z].o); // origin:1(lt),2(ct),3(rt), 4(lc),5(cc),6(rc), 7(lb),8(cb),9(rb)
                    if(o[z].i && o[z].i.length > 0) s.push('i:'+o[z].i.join(',')); // align:l,c,r, t,m,b, l2,c2,r2, t2,m2,b2
                    if(o[z].n && o[z].n.length > 0) s.push('n:'+o[z].n.join(',')); // boolen:p(plus), s1[s2](subtract), m(multiply), d(divide)
                    if(o[z].m) s.push('m:'+o[z].m); // mirrorImage:l(level), v(vertical)
                    if(o[z].cl && o[z].cl.length > 0) s.push('cl:'+o[z].cl.join(',')); // clone:count, moveX, moveY, scale, rotation, mirrorImage, opacity
                    if(o[z].a || o[z].a==0) s.push('a:'+o[z].a); // angle count:0-12
                    if(o[z].at) s.push('at:'+o[z].at); // angleType:m(miter), r(round), b(bevel)
                    if(o[z].bt) s.push('bt:'+o[z].bt); // borderType:ia(innerArc), oa(outerArc), is(innerSharp), os(outerSharp)
                    if(o[z].bm) s.push('bm:'+o[z].bm); // borderMove:number(px) || float(0-1)
                    if(o[z].fs && o[z].f==1 && o[z].fs!='#888' && o[z].fs!='#888888') s.push('fs:'+o[z].fs); // fillStyle
                    if(o[z].ls && o[z].s==1 && o[z].ls!='#000' && o[z].ls!='#000000') s.push('ls:'+o[z].ls); // lineStyle
                    if(o[z].lw && o[z].lw!='1') s.push('lw:'+o[z].lw); // lineWidth
                    if(o[z].lc && o[z].lc!='b') s.push('lc:'+o[z].lc); // lineCap:b(butt), r(round), s(square)
                    if(o[z].lj && o[z].lj!='m') s.push('lj:'+o[z].lj); // lineJoin:m(miter), r(round), b(bevel)
                    if(o[z].sc) s.push('sc:'+o[z].sc); // shadowColor
                    if(o[z].sb) s.push('sb:'+o[z].sb); // shadowBlur
                    if(o[z].sx) s.push('sx:'+RV.fn(o[z].sx,2)); // shadowOffsetX
                    if(o[z].sy) s.push('sy:'+RV.fn(o[z].sy,2)); // shadowOffsetY
                    if(o[z].ta && o[z].ta!='l') s.push('ta:'+o[z].ta); // textAlign:l(left), c(center), r(right)
                    if(o[z].tb && o[z].tb!='t') s.push('tb:'+o[z].tb); // textBaseline:t(top), m(middle), b(bottom)
                    if(o[z].ga) s.push('ga:'+o[z].ga); // globalAlpha
                    if(o[z].pl && o[z].pl.length > 0) {
                        for(y=0; y<o[z].pl.length; y++) {
                            o[z].pl[y] = RV.fn(o[z].pl[y], 2);
                        }
                        s.push('pl:'+o[z].pl.join(','));
                    }
                    
                } else { // 3d element
                
                }
                
                if(s.length > 0) {
                    s = s.join('; ');
                    t.push(s);
                }
            }
        }
        
        if(t.length > 0) {
            t = t.join('.. ');
            return f+RV.DM +' '+ t;
        }
        else return '';
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
            
        } else if(B == 'di') {
            
            
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
            //RV.slib[a.sr.bg.id](o);
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
            if(a.tl[a.pp].tp == 1) {
                if((a.pb+a.pe) > RV.PG) {
                    if(RV.slib[o.sr.mat.id]) RV.slib[o.sr.mat.id]({tl: a.pp});
                } else {
                    a.petop = 1000*3;
                    a.ps = 2;
                }
                
            } else {
                if(RV.slib[o.sr.act.id]) RV.slib[o.sr.act.id]({tl: a.pp});
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
            //RV.rec();
            RV.loop();
            //RV.MR.start();
            
        } else if(A == 2) { // pause
            
        } else if(A == 3) { // resume
            
        } else {
            cancelAnimationFrame(RV.rafid);
            RV.PS = 0;
            if(RV.slib[a.sr.ado.id]) RV.slib[a.sr.ado.id]();
            //RV.MR.stop();
        }
    },
    
    //loop: async (A) => { // loop play animation
    loop: (A) => { // loop play animation
        var a,b,c,d,o,z;
        if(!RV.PS) {
            RV.pa(0);
            return;
        }
        
        a = RV.LT || new Date().getTime();
        
        // 动画耗时
        //await RV.slp(30);
        //RV.ps();
        RV.CTX.clearRect(0, 0, RV.cw, RV.ch);
        b = RV.CVS.ctx0.getImageData(0, RV.ch*RV.FP, RV.cw, RV.ch);
        RV.CTX.putImageData(b, 0, 0);
        
        //b = RV.CVX.toDataURL('image/jpeg', .4);
        //RV.simg(b, RV.FP);
        
        RV.LT = new Date().getTime();
        b = RV.LT - a;
        if(b < 1000/RV.FPS) {
            c = 1000/RV.FPS - b;
            //await RV.slp(c);
            RV.slp(c, 1);
            RV.LT = new Date().getTime();
            b = RV.LT - a;
        }
        RV.PG += b;
        RV.FP++;
        
        //CL(RV.PG);
        CL('FPS: '+Math.round(RV.FP/(RV.PG/1000)));
        
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
            //RV.gn('rvVdo').src = b;
            a = document.createElement('a');
            a.href = b;
            a.download = d+'.'+c;
            a.click();
        }
        else return CL('no data!');
    },
    
    swin: (A) => { // save win
        var a,w,w2,h,h2,i,m,n,o,p,s,z;
        a = Object.keys(RV.SELE);
        o = RV['E'+RV.DM];
        p = {};
        if(a.length > 0) {
            for(z=0; z<a.length; z++) {
                if(o[a[z]].sl != 1 || o[a[z]].hd == 1) continue;
                p[a[z]] = o[a[z]];
            }
            s = JSON.stringify(p);
            p = JSON.parse(s);
            for(z in p) p[z].sv = 1;
            RV.SVE = p; // save element
            m = RV.gwh('', 'sv');
            if(RV.ini2.set.sys.xy0 == 1) RV.melm('-'+m.x, '-'+m.y, p);
        } else {
            RV.SVE = o;
            m = {x:0, y:0, w:RV.cw, h:RV.ch};
        }
        
        w = RV.fn(m.w,2) || 0;
        h = RV.fn(m.h,2) || 0;
        n = RV.gn('rvSaveB');
        w2 = h2 = n.offsetWidth || 290;
        i = w / h;
        if(i > 1) {
            h2 = h2 / i;
        } else if(i < 1) {
            w2 = w2 * i;
        }
        
        RV.gn('rvSaveAttW').value = w;
        RV.gn('rvSaveAttH').value = h;
        RV.CVP.width = w;
        RV.CVP.height = h;
        RV.CVP.style.width = w2 + 'px';
        RV.CVP.style.height = h2 + 'px';
        RV.ren(2); // rend save canvas
        RV.sn(RV.gn('rvSaveW'));
    },
    
    save: (A) => { // save file
        var a,b,c,d,y,m,d,w,h,q,t,f,z;
        a = new Date();
        y = a.getFullYear();
        m = ('00'+(a.getMonth()+1)).slice(-2);
        d = ('00'+a.getDate()).slice(-2);
        w = parseFloat(RV.gn('rvSaveAttW').value) || 0;
        h = parseFloat(RV.gn('rvSaveAttH').value) || 0;
        q = parseFloat(RV.gn('rvSaveAttQ').value) || 80;
        t = RV.gn('rvSaveAttT').value || 'h5e';
        if(q<0 || q>100) q = 80;
        f = RV.sc(RV.gn('rvSaveAttF').value) || 'new_file_' + y +'_'+ m +'_'+ d +'_'+ RV.rs(4);
        f = f +'.'+ t;
        
        if(t == 'jpg') t = 'jpeg';
        if(t=='jpeg' || t=='png' || t=='gif' || t=='bmp') {
            RV.CTP.clearRect(0, 0, RV.cw, RV.ch);
            if(t == 'jpeg') RV.ren(2, 1); // out jpg
            else RV.ren(2);
            b = RV.CVP.toDataURL('image/'+t, q/100);
            
        } else if(t=='h5e' || t=='h5s' || t=='h5v') {
            a = '轻松制作短视频 - 锐视(RyView)\r\n作者主页：ry.eefaa.cn, rybby.cn\r\n锐视官方主页：rymaa.cn\r\n锐视官方博客：rv.eefaa.cn\r\n\r\n:CTD:\r\n\r\n';
            a += RV.v2t(RV.SVE);
            b = new Blob([a], {type: 'text/'+t});
            b = URL.createObjectURL(b);
        }
        else b = '';
        CL(b);
        
        a = document.createElement('a');
        a.href = b;
        a.download = f;
        a.click();
    },
    
    simg: (A, B) => { // save img
        B = B || 0;
        B = ('000000'+B).slice(-6);
        var a = document.createElement('a');
        a.href = A;
        a.download = 'il_'+B+'.jpg';
        a.click();
    },
    
    slg: (A) => { // select language
        var a,b,c,d,z;
        a = RV.lg;
        b = [];
        d = '语言(Language)';
        for(z in a) {
            c = a[z].des;
            if(!c) continue;
            b.push('<div class="rvBtn" onclick="RV.sel(this);RV.LG=RV.ini2.set.sys.lg=\''+z+'\';RV.ntl();RV.nm()">'+c+'</div>');
            if(RV.ini2.set.sys.lg == z) d = c;
        }
        b = b.join('')+'<b class="cl"></b><div class="rvBtn" onclick="RV.svi()">'+(a[RV.LG].se||'保存(Save)')+'</div>';
        RV.fw(d, b, 1);
    },
    
    rec: (A) => { // media record
        var a,b,c,d,e,f;
        RV.MR = null;
        RV.MRDT = null;
        a = {'480P':1500000, '720P':3500000, '1080P':7500000};
        b = a[RV.ini2.vdo.vs || '720P'] || 3500000;
        c = RV.ini2.vdo.vc || 'vp8';
        d = RV.CVX.captureStream(RV.FPS);
        if(RV.msd) d.addTrack(RV.msd.stream.getAudioTracks()[0]);
        if(c=='webm' || c=='mpeg') c = 'video/' + c;
        else c = 'video/webm;codecs=' + c;
        //e = new MediaStream([d.getVideoTracks()[0], RV.msd.stream.getAudioTracks()[0]]);
        //e = new MediaStream();
        //e.addTrack(d.getVideoTracks()[0]);
        //e.addTrack(RV.msd.stream.getAudioTracks()[0]);
        //f = navigator.mediaDevices.getUserMedia({video:false, audio:true});
        //d.getVideoTracks().forEach(v => f.addTrack(v));
        //RV.MR = new MediaRecorder(e, {
        RV.MR = new MediaRecorder(d, {
            mimeType: c,
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: b,
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
        e = a.createGain();
        f = a.createOscillator();
        b.connect(c);
        b.connect(d);
        b.connect(e);
        c.connect(a.destination);
        e.connect(a.destination);
        //CL([a, b, c, d]);
        
        while (1) {
            i = RV.rs(6);
            if (!RV.adoL[i]) break;
        }
        RV.adoL[i] = o;
        o.ct = a; // AudioContext
        o.bs = b; // BufferSource
        o.ana = c; // Analyser
        o.msd = d; // MediaStreamDestination
        o.gai = e; // Gain
        o.ps = 0; // play state
        o.id = i;
        o.pb = RV.ini2.sr.ado.pb || 0; // play begin
        o.pe = RV.ini2.sr.ado.pe || 0; // play end
        o.cb = RV.ini2.sr.ado.cb || 0; // cut begin
        o.ce = RV.ini2.sr.ado.ce || 0; // cut end
        o.fi = RV.ini2.sr.ado.fi || 0; // fade in
        o.fo = RV.ini2.sr.ado.fo || 0; // fade out
        
        o.st = (A) => { // start
            b = a.createBufferSource();
            b.connect(c);
            b.buffer = o.bf;
            b.start();
            b.loop = true;
            o.ps = 1;
            if(o.fi) {
                e.gain.setValueAtTime(0, a.currentTime);
                // linearRampToValueAtTime
                e.gain.exponentialRampToValueAtTime(1, a.currentTime + o.fi);
            }
        };
        
        o.sp = (A) => { // stop
            b.stop();
            b.loop = false;
            o.ps = 0;
            if(o.fo) {
                e.gain.setValueAtTime(1, a.currentTime);
                e.gain.exponentialRampToValueAtTime(0, a.currentTime + o.fo);
            }
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
            RV.pdt(RV.sc(A));
            if(RV.SMN == 'ad') RV.aad();
            
        } else if(typeof A == 'object') {
            var f = new FileReader();
            f.onload = () => {
                RV.pdt(RV.sc(f.result));
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
        bg_lspot: (A) => { // background sprite:light spot
            // A.sc:sprite count
            // A.sr:sprite radius
            // A.sh:sprite hue
            // A.ss:sprite saturation
            // A.sb:sprite brightness
            // A.sa:sprite alpha
            // A.hr:hue range
            var c,o,r,x,y,z,h,s,b,a,l,is,sc,sr,sh,ss,sb,sa,hr,bl,rgb;
            A = A || {};
            c = RV.CTH;
            cw = RV.cw;
            ch = RV.ch;
            
            if(!RV.bgInit) {
                is = Math.min(cw, ch);
                sc = Math.floor(RV.rr(A.sc || '200-250'));
                sr = A.sr || '.05-.15';
                sh = RV.rr(A.sh || '0-360');
                hr = RV.rr(A.hr || '.75-.95');
                ss = A.ss || '25-100';
                sb = A.sb || '55-100';
                sa = A.sa || '.1-.5';
                bl = '20-60';
                
                //c.clearRect(0, 0, cw, ch);
                c.globalCompositeOperation = 'lighter';
                while (sc--) {
                    r = Math.floor(is * RV.rr(sr)),
                    x = RV.rr(0 + '-' + cw),
                    y = RV.rr(0 + '-' + ch),
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
            
            //RV.CTX.drawImage(RV.CVH, 0, 0);
        },
        
        mot_dpopo: (A) => { // motion sprite:dreamlike popo
            // A.sc:sprite count
            // A.sr:sprite radius
            // A.sp::sprite speed
            // A.sh:sprite hue
            // A.ss:sprite saturation
            // A.sb:sprite brightness
            // A.sa:sprite alpha
            var c,o,r,x,y,z,cw,ch,is,sc,sr,sp,sh,ss,sb,sb2,sa,rgb,rgb2,rg,lg;
            A = A || {};
            c = RV.CTX;
            cw = RV.cw;
            ch = RV.ch;
            
            if(!RV.motInit) { // init
                RV.motArr = [];
                is = Math.min(cw, ch);
                sc = Math.floor(RV.rr(A.sc || '25-35'));
                sr = A.sr || '.05-.15';
                sp = A.sp || '.5-.8';
                sh = A.sh || '0-360';
                ss = A.ss || '25-100';
                sb = A.sb || '55-100';
                sa = A.sa || '.25-.35';
                for (z = 0; z < sc; z++) {
                    RV.motArr.push({
                        x: RV.rr(0+'-'+cw),
                        y: RV.rr(0+'-'+ch),
                        r: Math.floor(is * RV.rr(sr)),
                        a: RV.rr(0+'-'+RV.pi2), // angle
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
                o.a += RV.rr('-0.05-0.05');
                
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
        
        ado_eaper: (A) => { // audio sprite:explosion aperture
            // A.x:圆心X
            // A.y:圆心Y
            // A.r:圆半径
            // A.b:圆边框大小
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
                // X:R * cos(PI/180*旋转角度) + 圆心X
                // Y:R * sin(PI/180*旋转角度) + 圆心Y，R正数=顺时针，R负数=逆时针
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
        
        mat_rypeter: (A) => { // match sprite:rypeter
            // A.sh:sprite hue
            // A.ss:sprite saturation
            // A.sb:sprite brightness
            // A.sa:sprite alpha
            // A.tl:time list index
            // A.ar:action rate
            // A.fr:face rate
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
                h = A.sh || '0-360';
                s = A.ss || '25-100';
                b = A.sb || '55-100';
                a = A.sa || '.55-.75';
                ai = '0-7';
                fi = '0-12';
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
                            y: RV.rr('50-'+(ch-50)),
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
                    q.sort(RV.s1);
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
                if(!(RV.FP%o.fr) && j<1) f = Math.floor(RV.rr('0-12')) || 0;
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
                RV.txt(o.n, 'rf', x+210, y+35, 20, rgb.rgb);
                RV.txt(RV.nf(Math.floor(o.v*j),1,4), 'rf', x+210, y+60, 20, rgb.rgb);
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
                        f = k[Math.floor(RV.rr('0-5'))] || 'xi';
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
        
        act_rypenn: (A) => { // actor sprite:rypenn
            // A.sh:sprite hue
            // A.ss:sprite saturation
            // A.sb:sprite brightness
            // A.sa:sprite alpha
            // A.tl:time list index
            var c,o,p,q,t,x,y,i,j,k,w,h,s,s2,b,b2,a,z,rgb,rgb2,tl,len,n,rg,cw,ch;
            c = RV.CTT;
            A = A || {};
            cw = RV.cw;
            ch = RV.ch;
            o = RV.adtL || {};
            
            if(!RV.actInit) {
                RV.actObj = {};
                p = {};
                h = A.sh || '0-360';
                s = A.ss || '25-100';
                b = A.sb || '55-100';
                a = A.sa || '.55-.75';
                
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
        
        ass_rypeso: (A) => { // assist sprite:rypeso
            // A.sh:sprite hue
            // A.ss:sprite saturation
            // A.sb:sprite brightness
            // A.sa:sprite alpha
            var c,h,s,s2,b,b2,a,rgb,rgb2,rg,cw,ch;
            c = RV.CTT;
            A = A || {};
            cw = RV.cw;
            ch = RV.ch;
            
            h = RV.rr(A.sh || '0-360');
            s = RV.rr(A.ss || '25-100');
            b = RV.rr(A.sb || '55-100');
            a = RV.rr(A.sa || '.55-.75');
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