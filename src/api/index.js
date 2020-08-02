import axios from 'axios';

const endPoint = 'http://localhost:8080';
// axios.defaults.baseURL = 'http://';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export function getNode(id) {
    return axios.get(endPoint + '/node/' + id);
}
export function updateNode(data) {
    return axios.patch(endPoint + '/node/' + data.id, data);
}
export function createNode(data) {
    return axios.put(endPoint + '/node', data);
}
export function createOption(data) {
    return axios.put(endPoint + '/option', data);
}
export function unlinkNode(data) {
    return axios.patch(endPoint + '/unlink_node', data);
}
export function deleteNode(id) {
    return axios.delete(endPoint + '/node/' + id);
}
export function deleteStory(id) {
    return axios.delete(endPoint + '/story/' + id);
}
export function getAllStories() {
    return axios.get(endPoint + '/stories');
}
export function login(payload) {
    return axios.put(endPoint + '/login', payload);
}