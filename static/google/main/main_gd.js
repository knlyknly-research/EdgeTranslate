(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d="An t-eadar-theangadair",e="Eadar-theangaich",f=this||self;function g(a,x){a=a.split(".");var b=f;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===x?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=x};var h={0:e,1:"Sguir dheth",2:"D\u00f9in",3:function(a){return"Chuir Google "+(a+" air an duilleag seo gu f\u00e8in-obrachail")},4:function(a){return"Chaidh "+(a+" a chur air")},5:"Mearachd: Cha b\u2019 urrainn dhan fhrithealaiche d\u00e8iligeadh ri d\u2019 iarrtas. Feuch ris a-rithist an ceann greis.",6:"Barrachd fiosrachaidh",7:function(a){return"Le cumhachd "+a},8:d,9:"Ga eadar-theangachadh",10:function(a){return"A bheil thu airson "+(a+" a chur air slighe Google Translate?")},11:function(a){return"Seall an duilleag seo ann an: "+
a},12:"Seall an teacsa t\u00f9sail",13:"Th\u00e8id susbaint an fhaidhle ionadail seo a chur gu Google airson eadar-theangachadh slighe ceangal t\u00e8arainte.",14:"Th\u00e8id susbaint na duilleige th\u00e8arainte seo a chur gu Google airson eadar-theangachadh slighe ceangal t\u00e8arainte.",15:"Th\u00e8id susbaint na duilleige eadra-l\u00ecn seo a chur gu Google airson eadar-theangachadh slighe ceangal t\u00e8arainte.",16:"Tagh c\u00e0nan",17:function(a){return"Cuir dheth eadar-theangachadh a\u2019 ch\u00e0nain a leanas: "+
a},18:function(a){return"Cuir dheth mu choinneamh: "+a},19:"Falaich an-c\u00f2mhnaidh",20:"An teacsa t\u00f9sail:",21:"Mol eadar-theangachadh nas fhe\u00e0rr",22:"Gabh p\u00e0irt",23:"Eadar-theangaich na h-uile",24:"Aisig na h-uile",25:"Sguir dhen a h-uile",26:"Cuir mo ch\u00e0nan air na h-earrannan",27:function(a){return"Cuir "+(a+" air a h-uile rud")},28:"Seall an c\u00e0nain th\u00f9sail",29:"Roghainnean",30:"Cuir dheth an t-eadar-theangachadh air an l\u00e0rach seo",31:null,32:"Seall d\u00f2ighean eile air a r\u00e0dh",
33:"Briog air faclan gu h-\u00e0rd is ch\u00ec thu d\u00f2ighean eile air a r\u00e0dh",34:"Cleachd seo",35:"C\u00f9m s\u00ecos an iuchair Shift is slaod e gus an t-\u00f2rdugh atharrachadh",36:"Briog airson d\u00f2ighean eile air a r\u00e0dh",37:"C\u00f9m s\u00ecos iuchair Shift, d\u00e8an briogadh is slaod na faclan gu h-\u00e0rd gus an t-\u00f2rdugh atharrachadh.",38:"M\u00f2ran taing airson eadar-theangachadh nas fhe\u00e0rr a mholadh dha Google Translate.",39:"Sti\u00f9irich eadar-theangachadh na l\u00e0raich seo",
40:"Briog air facal airson d\u00f2ighean eile air a r\u00e0gh no briogadh d\u00f9bailte airson a dheasachadh ann",41:"An teacsa t\u00f9sail",42:d,43:e,44:"Chaidh na cheartaich thu a chur.",45:"Mearachd: Chan eil taic ris a\u2019 ch\u00e0nan sa bheil an duilleag-l\u00ecn.",46:"A\u2019 widget eadar-theangachaidh"};var k=window.google&&google.translate&&google.translate._const;
if(k){var l;a:{for(var m=[],n=[""],p=0;p<n.length;++p){var q=n[p].split(","),r=q[0];if(r){var t=Number(q[1]);if(!(!t||.1<t||0>t)){var u=Number(q[2]),v=new Date,w=1E4*v.getFullYear()+100*(v.getMonth()+1)+v.getDate();!u||u<w||m.push({version:r,ratio:t,a:u})}}}var y=0,z=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),A=Number(z&&z[1])||Math.random();for(p=0;p<m.length;++p){var B=m[p];y+=B.ratio;if(1<=y)break;if(A<y){l=B.version;break a}}l="TE_20200210_00"}var C="/element/%s/e/js/element/element_main.js".replace("%s",
l);if("0"==l){var D=" element %s e js element element_main.js".split(" ");D[D.length-1]="main_gd.js";C=D.join("/").replace("%s",l)}if(k._cjlc)k._cjlc(this.EDGE_TRANSLATE_URL + "google/element_main.js");else{var E=this.EDGE_TRANSLATE_URL + "google/element_main.js",F=document.createElement("script");F.type="text/javascript";F.charset="UTF-8";F.src=E;var G=document.getElementsByTagName("head")[0];G||(G=document.body.parentNode.appendChild(document.createElement("head")));G.appendChild(F)}g("google.translate.m",h);g("google.translate.v",l)};}).call(window)