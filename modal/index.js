/**
 * Created by Luo Chen on 2017/1/28.
 */
var btn = document.querySelector("#btn-modal"),
    modal = document.querySelector("#modal-1"),
    modalCt = document.querySelector("#modal-1 .modal-ct");
function showModal(modal){
    modal.style.display = "block";
}
function hideModal(modal){
    modal.style.display = "none";
}
function hasClass(ele, cls){
    // 单词边界
    return !!ele.className.match(new RegExp('\\b' + cls + '\\b'));
}
btn.addEventListener("click", function(e){
    showModal(modal);
    e.stopPropagation();
});
modalCt.addEventListener("click", function(e){
    e.stopPropagation();
    if(hasClass(e.target, "close") || hasClass(e.target, "btn-confirm")){
        hideModal(modal);
    }
});
document.body.addEventListener("click", function(){
    hideModal(modal);
});