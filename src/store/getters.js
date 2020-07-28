export const stories_list = state => state.stories_list;
export const stories = state => state.stories;
export const node = (state) => (id) => {
    return state.node[id];
};
export const node_prepared_to_delete = (state) => state.node_prepared_to_delete;
export const story_prepared_to_delete = (state) => state.story_prepared_to_delete;
export const fetch_stories_from_api = state => state.fetch_stories_from_api;

