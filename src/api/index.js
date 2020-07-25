import axios from 'axios';

const endPoint = 'http://localhost:8080';
/*
export function listStories(callback) {

}

export function getStoryNodes(callback) {

}
*/
export function getSingleNode(callback) {
    axios
        .get(endPoint + '/node/1')
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

export function addNode({title, description}, callback) {

}

export function addOptionToNode({optionDescription, nodeId}, callback) {

}

export function setTargetNode({nodeId, $optionId}, callback) {

}

 */