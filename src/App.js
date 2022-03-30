import { createRef, useRef } from 'react';
import { actions, customHooks } from './store';
import Video from './Video';

function App() {
  const inputRef = useRef();
  const videoRef = useRef([]);

  const [state, dispatch] = customHooks.useContextCustom();
  const { video, videos } = state;

  videoRef.current = videos.map(
    (_, index) => videoRef.current[index] ?? createRef()
  );

  function handleVideo(event) {
    const videoFile = event.target.files[0];
    const videoPath = URL.createObjectURL(videoFile);
    dispatch(actions.setVideo(videoPath));
  }

  function handleVideos() {
    if (video) {
      dispatch(actions.setVideos(video));
      dispatch(actions.setVideo(''));

      inputRef.current.value = '';
    }
  }

  function handleCancel() {
    dispatch(actions.setVideo(''));

    inputRef.current.value = '';
  }

  function handlePlay(index) {
    videoRef.current[index].current.play();
  }

  function handlePause(index) {
    videoRef.current[index].current.pause();
  }

  function handleDelete(index) {
    dispatch(actions.deleteVideo(index));
  }

  function handleEdit(index) {
    dispatch(actions.editVideo(index));
  }

  function handleConfirmEdit(index) {
    dispatch(actions.confirmEditVideo(index));
  }

  function handleWidth(data) {
    dispatch(actions.setWidth(data));
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Videos</h1>

      <hr />

      <input
        ref={inputRef}
        type="file"
        accept="video/mp4,video/x-m4v,video/*"
        onChange={handleVideo}
      />
      {video && <button onClick={handleVideos}>Add</button>}
      {video && <button onClick={handleCancel}>Cancel</button>}

      <hr />

      <ul style={{ listStyle: 'none' }}>
        {videos.map((item, index) => {
          return (
            <li key={index}>
              <h3>{`Video ${index + 1}`}</h3>
              <Video
                ref={videoRef.current[index]}
                videoPath={item.video}
                videoWidth={item.width}
              />
              <div>
                <button onClick={handlePlay.bind(null, index)}>Play</button>
                <button onClick={handlePause.bind(null, index)}>Pause</button>
                <button onClick={handleDelete.bind(null, index)}>Delete</button>
                <button
                  onClick={
                    (!item.edit && handleEdit.bind(null, index)) ||
                    handleConfirmEdit.bind(null, index)
                  }
                >
                  {(!item.edit && 'Edit') || 'Confirm edit'}
                </button>
                {item.edit && (
                  <div>
                    <span>1</span>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      step="1"
                      value={item.width.slice(0, item.width.length - 1)}
                      onChange={event => {
                        handleWidth({
                          id: index,
                          value: event.target.value,
                        });
                      }}
                    />
                    <span>100</span>
                    <span style={{ marginLeft: '20px' }}>{item.width}</span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
