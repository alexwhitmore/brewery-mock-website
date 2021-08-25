import React from 'react';
import { featuredSection } from '../config';
import Featured from './Featured';

const FeaturedList = () => {
  const featuredNames = featuredSection.map((beer) => beer.name);
  const featuredTitle = featuredSection.map((beer) => beer.title);
  const featuredDesc = featuredSection.map((beer) => beer.description);
  const featuredMalt = featuredSection.map((beer) => beer.malt);
  const featuredHops = featuredSection.map((beer) => beer.hops);
  const featuredNotes = featuredSection.map((beer) => beer.notes);

  return (
    <>
      <Featured
        names={featuredNames}
        featuredSection={featuredSection}
        title={featuredTitle}
        description={featuredDesc}
        malt={featuredMalt}
        hops={featuredHops}
        notes={featuredNotes}
      />
    </>
  );
};

export default FeaturedList;
