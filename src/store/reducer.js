import {
  CONFIRM_EDIT_VIDEO,
  DELETE_VIDEO,
  EDIT_VIDEO,
  SET_VIDEO,
  SET_VIDEOS,
  SET_WIDTH,
} from './constants';

const initState = {
  video: '',
  videos: [],
};

// const initState =

function reducer(state, action) {
  try {
    switch (action.type) {
      case SET_VIDEO:
        return {
          ...state,
          video: action.payload,
        };
      case SET_VIDEOS:
        return {
          ...state,
          videos: [
            {
              video: action.payload,
              edit: false,
              width: '25%',
            },
            ...state.videos,
          ],
        };
      case DELETE_VIDEO:
        return {
          ...state,
          videos: state.videos.filter((video, index) => {
            if (index === action.payload) {
              URL.revokeObjectURL(video.video);
            }

            return index !== action.payload;
          }),
        };
      case EDIT_VIDEO:
        return {
          ...state,
          videos: [...state.videos].map((item, index) => {
            if (index !== action.payload) {
              return item;
            }

            return {
              ...item,
              edit: true,
            };
          }),
        };
      case CONFIRM_EDIT_VIDEO:
        return {
          ...state,
          videos: [...state.videos].map((item, index) => {
            if (index !== action.payload) {
              return item;
            }

            return {
              ...item,
              edit: false,
            };
          }),
        };
      case SET_WIDTH:
        return {
          ...state,
          videos: state.videos.map((item, index) => {
            if (index !== action.payload.id) {
              return item;
            }

            return {
              ...item,
              width: `${action.payload.value}%`,
            };
          }),
        };
      default:
        throw new Error('Invalid syntax!');
    }
  } catch (error) {
    console.error(error);
  }
}

export { initState };
export default reducer;
