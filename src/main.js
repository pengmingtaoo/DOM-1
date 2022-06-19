//创建节点
const div = dom.create('<div id="d1">createDiv</div>');
console.log(div);
//新增弟弟
console.log(dom.after(test2,div));
console.log(dom.before(test2, div));
console.log(dom.append(test2, div));
//新增父亲
const div2 = dom.create('<div id="parent"></div');
dom.wrap(test, div2);


const div3 = dom.empty(window.empty);
console.log(div3);

dom.attr(test, 'title', 'hello,world!');
const title = dom.attr(test, 'title');
console.log(`title: ${title}`);


dom.text(test, '你好，这是新的内容');
//获取
dom.text(test);

dom.style(test, { border: '1px solid red', color: 'blue' });
dom.style(test, 'border');
dom.style(test, 'border', '1px solid black');


dom.class.add(test, 'red');
dom.class.add(test2, 'blue');
dom.class.remove(test2, 'blue');
console.log(dom.class.has(test2,'blue'));
console.log(dom.class.has(test, 'red'));

const fn = () => { 
    console.log('点击了');
}
dom.on(test, 'click', fn);
dom.off(test, 'click', fn);

console.log(dom.find('#test')[0]);
console.log(dom.find('.red',test2)[0]);

console.log(dom.parent(test));
console.log(dom.children(test2));

const s2 = dom.find('#test2')[0];
console.log(dom.siblings(s2));
console.log(dom.next(s2));
console.log(dom.previous(s2));

const t = dom.find('#test2')[0];
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'));

console.log(dom.index(s2));