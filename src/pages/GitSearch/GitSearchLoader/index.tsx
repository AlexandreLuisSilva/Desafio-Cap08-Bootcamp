import React from 'react';
import ContentLoader from 'react-content-loader';
import './styles.css';

const GitSearchLoader = () => (
  <div className="base-card">
    <div>
      <ContentLoader
        viewBox="0 0 200 200"
        width={200}
        height={200}
        title="Loading Git Info..."
      >
        <rect x="30" y="10" rx="5" ry="5" width="200" height="200" />
      </ContentLoader>
    </div>
    <div>
      <ContentLoader viewBox="0 0 300 200" width={300} height={200} title="">
        <rect x="30" y="10" rx="0" ry="0" width="140" height="15" />
        <rect x="30" y="50" rx="0" ry="0" width="130" height="15" />
        <rect x="30" y="90" rx="0" ry="0" width="140" height="15" />
        <rect x="30" y="130" rx="0" ry="0" width="125" height="15" />
      </ContentLoader>
    </div>
  </div>
);

GitSearchLoader.metadata = {
  name: 'Arthur Falcão',
  github: 'arthurfalcao',
  description: 'News List',
  filename: 'News',
};

export default GitSearchLoader;
