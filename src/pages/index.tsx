import React, { useCallback, useEffect } from 'react';
import { NextPage } from 'next';
import ReactPlayer from 'react-player';

const Index: NextPage = () => {
  const [currentKey, setCurrentKey] = React.useState('');
  const [selected_num, setSelected_num] = React.useState(-1);
  // force update
  const [_, forceUpdate] = React.useReducer(e => e + 1, 0);
  // texts
  const [texts, setTexts] = React.useState([
    'Ok', // 0
    'bruh', // 1
    'i though that was a lie', // 2
    'wait a minute', // 3
    'roblox', // 4
    'shut up', // 5
    'W comment', // 6
    'no please', // 7
    'we will', // 8
    'ok very kawaii', // 9
  ]);
  // ref
  const playerRef = React.useRef<ReactPlayer>(null);
  //state
  const isPlaying = selected_num !== -1;

  useEffect(() => {
    // preventDefault
    console.log('addEventListener of keydown');
    document.addEventListener(
      'keydown',
      event => {
        // if space key, event.preventDefault();
        if (event.key === ' ') {
          event.preventDefault();
        }

        setCurrentKey(event.key);
        forceUpdate();
      },
      false
    );
  }, []);

  useEffect(() => {
    if (
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(currentKey)
    ) {
      setSelected_num(Number(currentKey));
    } else {
      setSelected_num(-1);
    }
  }, [currentKey]);

  return (
    <div
      style={{
        // center
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          margin: '64px',
          fontSize: '48px',
        }}
      >
        instant skeletons roasting jellybean💀💀
      </div>
      <div
        style={{
          background: '#222',
          position: 'relative',
        }}
      >
        {isPlaying && (
          <ReactPlayer
            ref={playerRef}
            url="/vid.mp4"
            loop={true}
            playing={isPlaying}
            width={'100vw'}
            height={'50vh'}
            onPause={() => {
              // seek to 0
              playerRef.current!.seekTo(0);
            }}
          />
        )}

        <div
          style={{
            // center
            position: 'absolute',
            left: isPlaying
              ? `calc(50% - ${texts[selected_num].length * 10}px)`
              : '',
            top: '64px',
            color: '#fff',
            fontSize: '42px',
            fontWeight: 'bold',
          }}
        >
          {texts[selected_num]}
        </div>
      </div>
      {!isPlaying && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              background: '#0a0',
              margin: '8px',
              padding: '8px',
            }}
          >
            0~9 key to start skeletons roasting, else key to turn off
          </div>

          <div
            style={{
              fontSize: '24px',
              background: '#a00',
              color: '#fff',
              margin: '8px',
              padding: '8px',
            }}
          >
            !! make sure vimyium is turned off
          </div>

          {texts.map((text, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '8px',
                fontSize: '48px',
                color: selected_num === index ? '#fff' : '#444',
                cursor: 'pointer',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                }}
              >
                {"'"}
                {index}
                {"'"}
                key:
              </div>
              <input
                key={index}
                value={text}
                style={{
                  margin: '8px',
                  fontSize: '24px',
                }}
                onChange={event => {
                  const newArr = Object.assign([], texts);
                  newArr[index] = event.target.value;
                  setTexts(newArr);
                }}
              />
            </div>
          ))}
        </div>
      )}
      <div
        style={{
          marginTop: '64px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: '36px',
        }}
      >
        <div>developed by jumango </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          listen to my music:
          <a href="https://soundcloud.com/jumang4423">here</a>
        </div>
      </div>
    </div>
  );
};

export default Index;
