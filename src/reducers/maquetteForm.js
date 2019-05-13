import { GET_MAQUETTE, CHANGE_MAQUETTE, CREATE_MAKETS, SET_MAKETS, SELECT_SAW } from "../constants/actions";

const createSaws = () => {
    let saws = [];

    for (let i = 1; i <= 100; i++) {
        saws.push(
            {
                id: i,
                M: [],
                children: [],
                on: i === 1
            }
        )
    }

    return saws;
};

const initialState = {
    name: "M01",
    load: true,
    saws: createSaws(),
    selectedSaw: 1,
};

const setMakets = (id, arr, value) => {
    return arr.map((item) => {
        return (item.id === id)
            ? {...item, on: value}
            : item
    })
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'REHYDRATE':
            return state;
        case GET_MAQUETTE:
            return {...payload};
        case CHANGE_MAQUETTE:
            state.name = payload;
            return Object.assign({}, state);
        case SELECT_SAW:
            state.selectedSaw = payload;
            return Object.assign({}, state);
        case CREATE_MAKETS:
            state.saws[state.selectedSaw] = payload;
            return Object.assign({}, state);
        case SET_MAKETS:
            state.saws[state.selectedSaw][payload.flag] = setMakets(payload.id, state.makets[payload.flag], payload.value);
            return Object.assign({}, state);
        default:
            break;
    }
    return state;
}
