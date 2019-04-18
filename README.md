# 基于react的h5富文本输入框
+ 实现原理：
    - 利用H5提供的元素可编辑属性 contentEditable 使普通的html元素具有和输入框一样的编辑功能
+ 其他实现方式：
    - 使用textarea作为输入框
    - 准备一个与textarea等宽的pre元素，用于计算内容高度，需要设置css {word-break:break-all} 否则可能不会自动换行
    - 输入的同时将value写入pre，然后获取pre的scrollHeight，将其赋给textare的height，以此实现textarea随内容自动调整大小
    - emoji输入：由于无法在textarea内直接渲染图片，普遍的做法是使用[^-^]这种格式的字符代替emoji，在使用富文本时通过正则匹配[^-^]，替换成对应的emoji图片进行渲染
+ 缺陷
    - 需要直接操作dom
    - 依赖h5新属性
+ 使用场景
    - 即时通讯
    - 留言、评论

# 打开方式
+ $ npm i  安装运行所需依赖 
+ $ npm start  运行项目 默认在3000端口

# 截图
<img src='./gif.gif' />