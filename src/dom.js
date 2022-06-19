window.dom = {
    //创建节点
    //trim()把字符串两处的空格去掉，template容纳任意元素，不会显示在页面
    //container.content.firstChild 拿到元素
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    //新增弟弟 在下一个节点前面插入
    after(node, node2) {
        return node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2) {
        return node.parentNode.insertBefore(node2, node);
    },
    //新增儿子
    append(parent, node) {
        return parent.appendChild(node);
    },
    //新增爸爸
    wrap(node, parent) {
        dom.before(node, parent);
        dom.after(parent, node);
    },
    remove(node) {
        return node.parentNode.removeChild(node);
    },
    empty(node) {
        const array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    //读写属性
    attr(node, name, value) {   //重载
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            //读属性名
            return node.getAttribute(name);
        }
    },
    //读文本
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string;//ie
            } else {
                node.textContent = string;//firfox
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    //读写HTML内容
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    //用于修改style
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value;
        } else if (arguments.length === 2) {

            if (typeof name === 'string') {
                return node.style[name];
            } else if (name instanceof Object) {

                const object = name;
                for (let key in object) {
                    node.style[key] = object[key];
                }
            }
        }
    },
    
    class: {
        //添加class
        add(node, className) {
            node.classList.add(className);
        },
        //删除
        remove(node, className) {
            node.classList.remove(className);
        },
        //查找有没有元素
        has(node, className) {
            //contains 包含
            return node.classList.contains(className);
        }
    },
    //监听事件
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    //解除监听
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    //获取标签或者（标签S）
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },
    //获取父元素
    parent(node) {
        return node.parentNode;
    },
    //获取子元素
    children(node) {
        return node.children;
    },
    //获取同级兄弟姐妹
    siblings(node) { //filter过滤器
        return Array.from(node.parentNode.children).filter(n => n !== node);
    },
    //获取哥哥
    previous(node) {
        let x = node.previousSibling;
        while (x && x.nodeType === 3) {
            x = x.previousSibling;
        }
        return x;
    },
    //获取弟弟
    next(node) {
        let x = node.nextSibling;
        while (x && x.nodeType === 3) {
            x = x.nextSibling;
        }
        return x;
    },
    //遍历所有节点
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    },
    //获取排行第几
    index(node) {
        const list = dom.children(node.parentNode);
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break;
            }
            
        }
        return i;
    }
};