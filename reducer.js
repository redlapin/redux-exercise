//数据
const MENU = ['西安凉皮', '麻辣烫', '红油抄手', '流沙包', '奶油蘑菇汤', '布朗尼'];

export const changeDish = (state = '', action) => {
	if(action.type == 'change-dish'){
		let dishCount = MENU.length;
		let randomIndex = Math.floor(Math.random() * dishCount);
		let newDish = MENU[randomIndex];
		return newDish;
	}
	return state;
}