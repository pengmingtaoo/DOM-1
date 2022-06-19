window.dom = {
    find(selector) { 
        return document.querySelectorAll(selector);
    },
    style(node, object) { 
        for (let key in object) { 
            node.style[key] = object[key];
        }
    },
    each(nodeList,fn) { 
        for (let i=0;i<nodeList.length;i++) { 
            fn.call(null, nodeList[i]);
        }
    },
    on(node, eventName,fn) { 
        node.addEventListener(eventName,fn);
    }

};

const div = dom.find('#test>.red')[0];// 获取对应的元素
dom.style(div, { color: 'red' }) // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素
const fn = () => { 
    console.log("点击了");
}
dom.on(test,'click',fn); //添加监听事件