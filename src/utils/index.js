export function removeSpecialCharacters(value) {
    return value.replace(/[^\d]+/g, "");
}

export function getWhatsappUrl(phone,text) {
    let url = `https://wa.me/send?`;
    if(phone){
        url += `phone=${phone}`
    }
    if(text.length){
        url += `&text=${text}`
    }
    return url;
}