export default function authHeader(freshToken = false) {
    let token = localStorage.getItem('token');
    if (token !== null) {
        return 'Bearer ' + token;
    } else if (freshToken) {
        return 'Bearer ' + freshToken;
    }else {
        return '';
    }
}
