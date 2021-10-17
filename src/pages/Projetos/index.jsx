import React, { useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import hljs from 'highlight.js/lib/core.js';
import SocialMedia from '../../components/Social-media';
import TextEditor from '../../components/Text-editor';
import { useProjects } from '../../hooks/useProjects';

const Projetos = ({ like }) => {

  const { projects, setProjects } = useProjects()

  useEffect(() => {
    hljs.highlightAll()
  }, []);

  function handleDeleteProject (event) {
    setProjects(
      projects.filter((_item, index) => parseInt(event.target.id) !== index)
    )
  }

  return (
    projects.length === 0 ?
      <h1 className='projetos__length-zero'>Parece que você ainda não adicionou nenhum projeto</h1>
      :
      <div className='projetos__container'>{
        projects.map((item, index) => {
          return (
            <div
              className='projetos__item'
              key={index}
            >
              <Link to={`/editor/${index}`} style={{ textDecoration: 'none' }}>
                <TextEditor
                  bgColor={item.bgColor}
                  className='projetos__textarea'
                  textValue={item.textValue ?? ''}
                />
              </Link>

              <div className='projetos__info'>
                <div className="projetos__container-titulo-delete">
                  <h5 className='projetos__titulo'>{item.titulo ?? ''}</h5>
                  <span id={index} className="projetos__delete" onClick={e => handleDeleteProject(e)}></span>
                </div>
                <p className='projetos__descricao'>{item.descricao ?? ''}</p>
                <SocialMedia
                  id={index}
                  like={id => like(id)}
                />
              </div>
            </div>
          );

        })
      }</div>
  )
};

export default Projetos;
