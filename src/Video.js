import { forwardRef, useImperativeHandle, useRef } from 'react';

function Video({ videoPath, videoWidth }, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      play() {
        videoRef.current.play();
      },
      pause() {
        videoRef.current.pause();
      },
    };
  });

  return <video ref={videoRef} src={videoPath} width={videoWidth} muted />;
}

export default forwardRef(Video);
