import './../styles/__WordList.scss';

const WordList = (): JSX.Element => {
  return (
    <div className="word-list">
      <h3 className="word-list__title">Get Started</h3>
      <p className="word-list__subtitle">Enter some letters...</p>
      <div className="word-list__arrow">
        <svg
          className="arrow-down"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="20"
          height="20"
          viewBox="0 0 256 256"
          xmlSpace="preserve"
        >
          <g
            style={{
              stroke: 'none',
              strokeWidth: 0,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              opacity: 1,
            }}
            transform="translate(1.4066 1.4066) scale(2.81 2.81)"
          >
            <polygon
              points="0,38.92 2.83,36.08 45,78.25 87.17,36.08 90,38.92 45,83.92"
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                opacity: 1,
              }}
              transform="matrix(1 0 0 1 0 0)"
            />
            <polygon
              points="0,8.92 2.83,6.08 45,48.25 87.17,6.08 90,8.92 45,53.92"
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                opacity: 1,
              }}
              transform="matrix(1 0 0 1 0 0)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WordList;
