var callback = function (res) {
    if (res.success === true) {
        document.getElementById("uploadedImg").src =  res.data.link;
        // document.getElementById("outputImg").value = res.data.link;
}
};

new Imgur({
    clientid: '99e37feb94575c7',
    callback: callback
});