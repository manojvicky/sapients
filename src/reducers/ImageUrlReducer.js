const initalState = {};

const initalStateOfIndividualChracter = {
    imageURL: "",
    loading: false,
    error: ""
};

function commonImageURLS(state = initalStateOfIndividualChracter, action) {
    switch (action.type) {
        case "imageURLApiHit":
            return {
                ...state,
                imageURL: action.URL
            };
        case "loadingImages":
            return {
                ...state,
                loading: action.loading
            };
        case "imageError":
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}
export default function ImageUrlReducer(commonName) {
    return function (state = initalState, action) {
        const name = commonName;
        const { id = "" } = action;
        if (id.includes(name)) {
            const nameOfCharacter = id.split(name)[1];
            return {
                ...state,
                [nameOfCharacter]: commonImageURLS(state[nameOfCharacter], action)
            };
        }
        return state;
    };
}