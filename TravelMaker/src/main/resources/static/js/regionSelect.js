$('.regionSelectAll').on('click',function(){
    $('#content').load('/plan/itemList/부산');
})

$('.regionSelectGang').on('click',function(){
    $('#content').load('/order/purchaseCheck');
})

$('.regionSelectGyeong').on('click',function(){
    $('#content').load('/plan/itemDetail/129156');
})

$('.regionSelectJeolla').on('click',function(){
    $('#modalSubi').load('/plan/itemDetailModal/129156');
    $('#modalSubi').css('display', 'flex');
})

$('.regionSelectChung').on('click',function(){
    $('#content').load('/plan/itemList/부산');
})

const modalSubi = document.getElementById("modalSubi");

modalSubi.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        modalOff()
    }
})
window.addEventListener("keyup", e => {
    if(isModalOn() && e.key === "Escape") {
        modalOff()
    }
})

function modalOff() {
    modalSubi.style.display = "none"
}

function isModalOn() {
    return modalSubi.style.display === "flex"
}