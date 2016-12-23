webpackJsonp([66,206],{

/***/ 1769:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "静态邀请"], ["p", "指通过可视化技术在页面上提供引导交互的邀请。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "文本邀请示例",
	    "src": "https://os.alipayobjects.com/rmsportal/pWnlJpbkCPIaKdP.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "白板式邀请示例",
	    "src": "https://os.alipayobjects.com/rmsportal/DkOYgfJHDuzhyBg.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "未完成邀请示例",
	    "src": "https://os.alipayobjects.com/rmsportal/cojQlWfINmsVDGd.png"
	  }]], ["p", "引导操作邀请：一般以静态说明形式出现在页面上，不过它们在视觉上也可以表现出多种不同样式。\n常见类型：『文本邀请』、『白板式邀请』、『未完成邀请』。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "漫游探索邀请示例 1",
	    "description": "在用户首次登陆时出现少量『探索点』，当用户点击『我知道了』，能快速切换到下一个探索点。",
	    "src": "https://os.alipayobjects.com/rmsportal/TGnzYViseCoFBYL.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "漫游探索邀请示例 2",
	    "src": "https://os.alipayobjects.com/rmsportal/KQabdaTbolVuMld.png"
	  }]], ["p", "漫游探索邀请：是向用户介绍新功能的好方法，尤其是对于那些设计优良的界面。但是它不是『创口贴』，仅通过它不能解决界面交互的真正问题。"], ["blockquote", ["p", "注：保持漫游过程简单，让用户容易退出和重新启动；保持内容简明扼要，与功能密切相关。"]], ["p", ["br"]], ["hr"], ["h2", "动态邀请"], ["p", "指以响应用户在特定位置执行特定操作的方式，提供特定的邀请。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "悬停邀请示例 1",
	    "description": "鼠标『悬停』整个卡片时，可被点击部分变为蓝色的『文字链』。",
	    "src": "https://os.alipayobjects.com/rmsportal/gzfDJLcETyTOfFg.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "悬停邀请示例 2",
	    "description": "鼠标『悬停』时，出现『选择此模板』的按钮。",
	    "src": "https://os.alipayobjects.com/rmsportal/tdJWZFIDWYuMVIe.png"
	  }]], ["p", "悬停邀请：在鼠标悬停期间提供邀请。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "推论邀请示例",
	    "description": "用户点击『赞』后，同时系统分析（既然用户喜欢这篇文章，那么可能对这一类文章都有兴趣）并提供开启『精打细算』的邀请。",
	    "src": "https://os.alipayobjects.com/rmsportal/SyurwytfcvpbNLG.png"
	  }]], ["p", "推论邀请：用于交互期间，合理推断用户可能产生的需求。"], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "更多内容邀请示例",
	    "description": "在 Modal 中会出现前后切换的箭头。",
	    "src": "https://os.alipayobjects.com/rmsportal/sOqYOydwQjLHqph.png"
	  }]], ["p", "更多内容邀请：用于邀请用户查看更多内容。"], ["p", ["br"]], ["p", ["br"]], ["p", ["span", {
	    "class": "waiting"
	  }, "预期功能邀请 (敬请期待)"]], ["p", ["br"]], ["p", ["span", {
	    "class": "waiting"
	  }, "拖放邀请 (敬请期待)"]]],
	  "meta": {
	    "category": "十大原则",
	    "order": 8,
	    "title": "提供邀请",
	    "filename": "docs/spec/invitation.zh-CN.md"
	  },
	  "description": ["section", ["p", "很多富交互模式（eg：『拖放』、『行内编辑』、『上下文工具』）都有一个共同问题，就是缺少易发现性。所以『提供邀请』是成功完成人机交互的关键所在。"], ["p", "邀请就是引导用户进入下一个交互层次的提醒和暗示，通常包括意符（eg：实时的提示信息）和可供性，以表明在下一个界面可以做什么。当可供性中可感知的部分（Perceived Affordance）表现为意符时，人机交互的过程往往更加自然、顺畅。"], ["blockquote", ["p", ["strong", " 意符（Signifiers）"], " ：一种额外的提示，告诉用户可以采取什么行为，以及应该怎么操作；必须是可感知（eg：视觉、听觉、触觉等）。——摘自《设计心理学 1 》"], ["p", ["strong", " 可供性（Affordance）"], " ：也被翻译成『示能』，由 James J. Gibson 提出，定义为物品的特性与决定物品用途的主体能力之间的关系；其中部分可感知（此部分定义为 Perceived Affordance），部分不可感知。——摘自《设计心理学 1 》"]]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#静态邀请"
	  }, "静态邀请"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#动态邀请"
	  }, "动态邀请"]]]
	};

/***/ }

});