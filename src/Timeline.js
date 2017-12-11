import React from 'react';

const Timeline = () => (
  <section>
    <h2>Timeline</h2>
    <div>
      <h3>Living the dream (<a href="http://vesperandlaura.com/">Traveling</a>)</h3>
      <span className="date-range">Jun 2015 - Jul 2017</span>
      <p>
        After getting married and road-tripping around the US, my wife and I sold most of our
        stuff, put the rest in storage, and left for a trip around the world. We started in Mexico
        and went south, exploring South America, Europe, India, South East Asia, Australia, and New
        Zealand.
      </p>
    </div>
    <div>
      <h3>Fullstack developer @ <a href="https://www.redoxengine.com/">Redox Engine</a></h3>
      <span className="date-range">Jan 2015 - May 2015</span>
      <p>
        I helped keep our AngularJS and Express/NodeJS stack up to date with fast changing
        requirements while designing a new fully integrated end-to-end testing framework with
        Protractor.
      </p>
    </div>
    <div>
      <h3>Technical Services @ <a href="http://www.epic.com/">Epic</a></h3>
      <span className="date-range">Jul 2010 - Jan 2015</span>
      <p>
        I provided technical support to hospitals nationwide including troubleshooting issues,
        developing custom features, and optimizing end user workflows. Internally, I developed a C#
        utility for managing credentials and an intra-office help-wanted website.
      </p>
    </div>
  </section>
);

export default Timeline;
