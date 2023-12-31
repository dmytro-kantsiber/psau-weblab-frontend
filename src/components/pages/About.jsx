import React from 'react'
import ScrollToTop from '../common/ScrollToTop'

const About = () => {
  return (
    <div className="container">
      <div className="about-info">
        <p className="about-article">Навчально-дослідна лабораторія вебтехнологій і хмарних обчислень</p>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum aut et odit eligendi in ab a facere? Earum corporis quo nam tempora et aliquid soluta facilis nemo illo in quis deleniti maxime sed iure hic aspernatur sunt eius veritatis, voluptate iusto dolor vero deserunt! Facilis dolores reprehenderit ducimus voluptates?</p>
      </div>

      <div className="goals">
        <a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam rerum dolorem error nesciunt at tempora quas deleniti aperiam quibusdam dolor quia minima rem officia quae, soluta, sed provident accusantium veritatis ex voluptatibus quidem illum iusto ipsam vitae? Ullam saepe iusto dolorem accusantium doloribus similique repudiandae distinctio aut optio quibusdam laudantium commodi dignissimos nulla sint neque obcaecati, aspernatur enim nam numquam.</a>
      </div>


      <div className="leaders-article">КЕРIВНИКИ НАВЧАЛЬНО-ДОСЛIДНОЇ ЛАБОРАТОРIЇ</div>
      <div className="leaders">
        <div className="leader-child">
          <img src="https://www.pdau.edu.ua/sites/default/files/styles/large/public/academicstaff/kopishynska-olena-petrivna_0.jpg?itok=GTRSyBT3" className="leader-image" width="270px" />
          <div className="leader-child__text">
            <a href="https://www.pdau.edu.ua/people/kopishynska-olena-petrivna" rel="noreferrer" target="_blank"><p className="leader-child__article">Копішинська Олена Петрівна</p></a>
            <p className="leader-child__description">кандидат фізико-математичних наук, доцент, професор кафедри </p>
          </div>

        </div>
        <div className="leader-child">
          <img src="https://www.pdau.edu.ua/sites/default/files/styles/large/public/academicstaff/utkin-yuriy-viktorovych_0.jpg?itok=_nN9LO-S" className="leader-image" width="270px" />
          <div className="leader-child__text">
            <a href="https://www.pdau.edu.ua/people/utkin-yuriy-viktorovych" rel="noreferrer" target="_blank"><p className="leader-child__article">Уткін Юрій Вікторович</p></a>
            <p className="leader-child__description">Завідувач кафедри інформаційних систем та технологій <br />кандидат технічних наук, доцент</p>
          </div>
        </div>
        <div className="leader-child">
          <img src="https://www.pdau.edu.ua/sites/default/files/styles/large/public/academicstaff/slyusar-igor-ivanovych_1.jpg?itok=oc8EU97D" className="leader-image" width="270px" />
          <div className="leader-child__text">
            <a href="https://www.pdau.edu.ua/people/slyusar-igor-ivanovych" rel="noreferrer" target="_blank"><p className="leader-child__article">Слюсарь Iгор Iванович</p></a>
            <p className="leader-child__description">кандидат технічних наук, доцент,доцент кафедри </p>
          </div>
        </div>
      </div>
    <ScrollToTop />
    </div>

  )
}

export default About