(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(t,e,n){"use strict";var r=n(145),o=n.n(r);e.a=o.a.create({baseURL:"http://localhost:3001"})},175:function(t,e,n){"use strict";n.r(e);n(45);var r=n(5),o=n(144),l={methods:{edit:function(){o.a.put("/cars/".concat(this.currentCar.id),{brand:this.brand,model:this.model,detail:this.detail,imgLink:this.imgLink}).then(function(){location.reload()})},deleteCar:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("/cars/".concat(this.currentCar.id));case 2:this.$router.push({name:"cars"});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,o.a.get("/cars/".concat(n.id));case 3:return r=t.sent,data=r.data,t.abrupt("return",{brand:data.brand,model:data.model,detail:data.detail,imgLink:data.imgLink,currentCar:data});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{currentCar:null}},head:function(){return{title:"".concat(this.currentCar.brand," | Cars"),meta:[{}]}}},c=n(13),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("img",{staticClass:"card-img-top",attrs:{src:t.currentCar.imgLink,alt:"Card image cap"}}),t._v(" "),n("h1",[t._v(t._s(t.currentCar.brand)+", "+t._s(t.currentCar.model))]),t._v(" "),n("p",[t._v("\n    "+t._s(t.currentCar.detail)+"\n  ")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModalCenter"}},[t._v("\n    Options\n  ")]),t._v(" "),n("nuxt-link",{attrs:{to:{name:"cars"}}},[n("button",{staticClass:"btn btn-success"},[t._v("Back")])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.brand,expression:"brand"}],staticClass:"form-control",attrs:{type:"text",placeholder:"brand"},domProps:{value:t.brand},on:{input:function(e){e.target.composing||(t.brand=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"model"},domProps:{value:t.model},on:{input:function(e){e.target.composing||(t.model=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.imgLink,expression:"imgLink"}],staticClass:"form-control",attrs:{type:"text",placeholder:"img link"},domProps:{value:t.imgLink},on:{input:function(e){e.target.composing||(t.imgLink=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.detail,expression:"detail"}],staticClass:"form-control",attrs:{placeholder:"detail"},domProps:{value:t.detail},on:{input:function(e){e.target.composing||(t.detail=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-warning",on:{click:t.edit}},[t._v("Edit car infos")]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{"data-dismiss":"modal"},on:{click:t.deleteCar}},[t._v("Delete car")])])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);