(function(){
    var Tip = {
        init: function(){
            var _self = this;
            document.documentElement.addEventListener("mouseover",function(event){
                if (event.target.hasAttribute("tip")) {
                   _self.addTip(document.body,event.target,event.target.getAttribute("aria-label"));
                }
            },false);
            document.documentElement.addEventListener("mouseout",function(event){
                if (event.target.hasAttribute("tip")) {
                   _self.removeTip(document.body);
                }
            },false);
        },
        addTip: function(obj,target,tipValue){
            var tarWin = target.getBoundingClientRect();
            var tip = document.createElement("div");
            tip.setAttribute("aria-label",tipValue);
            tip.className = "tip";
            obj.appendChild(tip);
            var tipWin = tip.getBoundingClientRect();
            tip.style.left = tarWin.left+(tarWin.right-tarWin.left)/2-(tipWin.right-tipWin.left)/2+"px";
            tip.style.top = tarWin.bottom+7+"px";
        },
        removeTip: function(obj){
            obj.removeChild(document.querySelector(".tip"));
        },
        hasClass: function(cName,obj){
            var arr = obj.className.split(/\s+/g);
            return arr.indexOf(cName);   
        },
        addClass: function(cName,obj){
            var arr = obj.className.split(/\s+/g);
            arr.push(cName);
            obj.className = arr.join(" ");
            return this;   
        },
        removeClass: function(cName,obj) {
            var _self =this;
            var arr = obj.className.split(/\s+/g);
            var i;
            if ((i =_self.hasClass(cName,obj)) != -1) {
                delete arr[i];
                arr = arr.filter(function(x){
                    return x != undefined;
                });
            }
            obj.className = arr.join(" ");
            return this;
        }
    };
    Tip.init();
}())