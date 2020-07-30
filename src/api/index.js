import axios from 'axios';

const endPoint = 'http://localhost:8080';
// axios.defaults.baseURL = 'http://';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
/*
export function listStories(callback) {

}

export function getStoryNodes(callback) {

}
*/
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

export function getStory(id, callback) {
    axios
        .get(endPoint + '/story/' + id)
        .then(response => (
            callback(response.data)
        ))
        .catch(function (error) {
            console.log(error);
        });
}

export function getAllStories(callback) {
    axios
        .get(endPoint + '/stories')
        .then(response => (
            callback(response.data)
        ))
        .catch(function (error) {
            console.log(error);
        });
}

/*
 * Story is basically one node with 'is_initial' flag set to true
export function addStory({title, description}, callback) {

}



export function addOptionToNode({optionDescription, nodeId}, callback) {

}

export function setTargetNode({nodeId, $optionId}, callback) {

}

 */