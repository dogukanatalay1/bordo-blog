import Vue from 'vue';
import VSanitize from 'v-sanitize';

const pluginOptions = {"allowedTags":["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","main","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rb","rp","rt","rtc","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr"],"disallowedTagsMode":"discard","allowedAttributes":{"a":["href","name","target"],"img":["src","srcset","alt","title","width","height","loading"]},"selfClosing":["img","br","hr","area","base","basefont","input","link","meta"],"allowedSchemes":["http","https","ftp","mailto","tel"],"allowedSchemesByTag":{},"allowedSchemesAppliedToAttributes":["href","src","cite"],"allowProtocolRelative":true,"enforceHtmlBoundary":false}
Vue.use(VSanitize, {...pluginOptions});

export default ({app}, inject) => {
  inject('sanitize', VSanitize);
}
