import axios from 'axios';

const endPoint = 'http://localhost:8080';
/*
export function listStories(callback) {

}

export function getStoryNodes(callback) {

}
*/
export function getNode(id, callback) {
    axios
        .get(endPoint + '/node/' + id)
        .then(response => (
            callback(response.data)
        ))
        .catch(function (error) {
            console.log(error);
        });
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