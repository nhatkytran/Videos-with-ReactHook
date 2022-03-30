import {
  CONFIRM_EDIT_VIDEO,
  DELETE_VIDEO,
  EDIT_VIDEO,
  SET_VIDEO,
  SET_VIDEOS,
  SET_WIDTH,
} from './constants';

const setVideo = function (payload) {
  return {
    payload,
    type: SET_VIDEO,
  };
};

const setVideos = function (payload) {
  return {
    payload,
    type: SET_VIDEOS,
  };
};

const deleteVideo = function (payload) {
  return {
    payload,
    type: DELETE_VIDEO,
  };
};

const editVideo = function (payload) {
  return {
    payload,
    type: EDIT_VIDEO,
  };
};

const confirmEditVideo = function (payload) {
  return {
    payload,
    type: CONFIRM_EDIT_VIDEO,
  };
};

const setWidth = function (payload) {
  return {
    payload,
    type: SET_WIDTH,
  };
};

export {
  setVideo,
  setVideos,
  deleteVideo,
  editVideo,
  setWidth,
  confirmEditVideo,
};
