/* global React, ReactDOM */
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('project-root');
  if (!root || !window.React || !window.ReactDOM) return;

  function ProjectCard({ p }) {
    return React.createElement('article', { className: 'card', role: 'article' },
      React.createElement('div', { className: 'thumb', role: 'img', 'aria-label': p.title + ' preview' },
        React.createElement('span', null, 'screenshot')
      ),
      React.createElement('h3', null, p.title),
      React.createElement('p', null, p.description),
      React.createElement('p', { className: 'tech' }, 'Tech: ' + p.tech.join(', ')),
      React.createElement('div', { className: 'links' },
        React.createElement('a', { href: p.github, target: '_blank', rel: 'noopener' }, 'GitHub'),
        p.demo ? React.createElement('a', { href: p.demo, target: '_blank', rel: 'noopener' }, 'Live Demo') : null
      )
    );
  }

  function ProjectsGrid() {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
      fetch('data/projects.json').then(r => r.json()).then(setItems);
    }, []);
    return React.createElement(React.Fragment, null, items.map((p, i) =>
      React.createElement(ProjectCard, { p, key: i })
    ));
  }

  ReactDOM.createRoot(root).render(React.createElement(ProjectsGrid));
});
