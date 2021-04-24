import axios from '../utils/http'


//轮播图请求
export  function getBanner(){
    let res=axios.get('/getbanner');
    return res;
}

//商品信息的请求
export  function getGoods(){
    let res=axios.get('/getindexgoods');
    return res;
}

//商品分类请求
export  function getCate(){
    let res=axios.get('/getcate');
    return res;
}

//登录请求
export  function login(data){
    let res=axios.post('/login',data);
    return res;
}

//购物车请求
export  function getCart(uid){
    let res=axios.get('/cartlist',{
        params:{
            uid:uid,
        }
    });
    return res;
}

//添加购物车的请求
export  function addCart(uid,goodsid){
    let res=axios.post('/cartadd',{uid,goodsid,num:1});
    return res;
}

//删除购物车里的商品的请求
export  function delCart(id){
    let res=axios.post('/cartdelete',{id});
    return res;
}
//编辑购物车里的商品的数量的请求
export  function editCart(id,type){
    let res=axios.post('/cartedit',{id,type});
    return res;
}

//注册会员的请求
export  function register(data){
    let res=axios.post('/register',data);
    return res;
}

//商品列表的请求
export  function goodsList(){
    let res=axios.get('/goodslist',{page:1,size:2});
    return res;
}
