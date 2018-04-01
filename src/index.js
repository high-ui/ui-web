// es6 polyfill
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';

import AweIcon from './components/aweicon'
import Button from './components/button';
import Checkbox from './components/checkbox';
import ColorPicker from './components/color-picker';
import DatePicker from './components/date-picker';
import Dropdown from './components/dropdown';
import Form from './components/form';
import Icon from './components/icon';
import Input from './components/input';
import Layout from './components/layout';
import LoadingBar from './components/loading-bar';
import Message from './components/message';
import Modal from './components/modal';
import Notice from './components/notice';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Radio from './components/radio';
import Spin from './components/spin';
import Switch from './components/switch';
import Table from './components/table';
import Tabs from './components/tabs';
import Timeline from './components/timeline';
import Tree from './components/tree';
import Upload from './components/upload';
import {
	Row,
	Col
} from './components/grid';
import {
	Select,
	Option,
	OptionGroup
} from './components/select';

const components = {
	AweIcon,
	Button,
	ButtonGroup: Button.Group,
	Checkbox,
	CheckboxGroup: Checkbox.Group,
	Col,
	ColorPicker,
	Content: Layout.Content,
	DatePicker,
	Dropdown,
	DropdownItem: Dropdown.Item,
	DropdownMenu: Dropdown.Menu,
	Form,
	FormItem: Form.Item,
	Icon,
	Input,
	Layout,
	LoadingBar,
	Message,
	Modal,
	Notice,
	Option: Option,
	OptionGroup,
	Poptip,
	Progress,
	Radio,
	RadioGroup: Radio.Group,
	Row,
	Select,
	Sider: Layout.Sider,
	Spin,
	Switch,
	Table,
	Tabs: Tabs,
	TabPane: Tabs.Pane,
	Timeline,
	TimelineItem: Timeline.Item,
	Tree,
	Upload
};

const install = function(Vue, opts = {}) {
	if (install.installed) return;
	//locale.use(opts.locale);
	//locale.i18n(opts.i18n);
	Object.keys(components).forEach(key => {
		Vue.component("i-" + key.toLowerCase(), components[key]);
	});

	Vue.prototype.$Loading = LoadingBar;
	Vue.prototype.$Message = Message;
	Vue.prototype.$Modal = Modal;
	Vue.prototype.$Notice = Notice;
	Vue.prototype.$Spin = Spin;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

const API = {
	version: process.env.VERSION, // eslint-disable-line no-undef
	// locale: locale.use,
	// i18n: locale.i18n,
	install,
	//...components
};

// API.lang = (code) => {
//     const langObject = window['iview/locale'].default;
//     if (code === langObject.i.locale) locale.use(langObject);
//     else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
// };

export default API;
// module.exports.default = module.exports = API; // eslint-disable-line no-undef