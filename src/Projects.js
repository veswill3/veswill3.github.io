import React, { Component } from 'react';
import ProjectData from './ProjectData';

const tagList = Object.keys(ProjectData
  .reduce((acc, prj) => {
    prj.tags.forEach((tag) => { acc[tag] = true; });
    return acc;
  }, {}));

class Projects extends Component {
  state = { filter: false }

  setFilter = (e, filter) => {
    this.setState({ filter });
    e.preventDefault();
  };

  mapTagToLI = tag => (
    <li key={tag} className={this.state.filter === tag ? 'active' : ''}>
      <a href="" onClick={e => this.setFilter(e, tag)}>
        {tag}
      </a>
    </li>
  );

  render() {
    const { filter } = this.state;
    return (
      <section>
        <h2>Projects</h2>
        <ul className="tags">
          <li className={filter ? '' : 'active'}>
            <a href="" onClick={e => this.setFilter(e, null)}>All</a>
          </li>
          {tagList.map(this.mapTagToLI)}
        </ul>
        {ProjectData.map(({
            title,
            description,
            tags,
            link,
            src,
          }) => (
            <div
              key={title}
              className={`project ${(filter && !tags.includes(filter)) ? 'collapse' : ''}`}
            >
              <h3>
                {title} <a href={src}>source</a>
                {link && <span> / <a href={link}>link</a></span>}
              </h3>
              <ul className="tags">
                {tags.map(this.mapTagToLI)}
              </ul>
              <p>{description}</p>
            </div>
          ))
        }
      </section>
    );
  }
}

export default Projects;
