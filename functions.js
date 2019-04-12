function check_class_name(className) {
    var regexp = /^[C,A,P][0-9]{4}[G,H,I,K,L,M]{1}/;
    return regexp.test(className)? true : false;
}