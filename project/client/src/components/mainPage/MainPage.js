import React from "react";

import Slider from "./slider/Slider";
import "./MainPage.css";
import MainNav from "./nav/MainNav";

class MainPage extends React.Component {
  render() {
    return (
      <main className="main-page-body">
        <section className="main-page-header">
          <MainNav />
          <Slider />
        </section>

        <section className="main-page-info">
          <div className="main-page-article-image">
            <img src="https://html5css.ru/w3css/img_avatar3.png"></img>
          </div>
          <article>
            <h4>Lorem!</h4>
            <p>
              Lorem ipsum dolor sit amet, ultrices augue libero per egestas
              faucibus, metus pede pellentesque. Bibendum nonummy, at amet ut.
              Maecenas eaque metus viverra. Vulputate eleifend massa purus
              hendrerit tincidunt, lacinia pulvinar dignissim sed egestas massa,
              sed facilisi sociis, quis vestibulum nec. Suscipit ipsum lacinia
              neque fringilla pellentesque. Eros gravida ac, nam volutpat fusce
              posuere habitasse, amet vivamus interdum elit morbi sollicitudin,
              tincidunt porttitor dui pellentesque at cillum curabitur, risus
              debitis. Nulla aliquam interdum dictumst bibendum, sem
              pellentesque maecenas amet rutrum, dolor quam venenatis in aenean,
              justo quam magna congue. Malesuada vel molestie quia wisi
              pharetra, placerat conubia wisi bibendum, nonummy sollicitudin
              lectus mollis. Quis duis wisi nunc auctor sit commodo, aliquam
              vivamus tellus facilisis, consequat nulla eu dui torquent pede
              maecenas, fringilla tristique aenean orci ante justo, non urna leo
              dis vehicula libero. Ut id donec quis curabitur, luctus pede
              tortor amet vitae felis, risus mollis in quisque, lobortis nunc
              augue massa nec aptent nunc. Pellentesque sit tortor commodo est
              mauris libero, fringilla ligula amet turpis suscipit proin vitae,
              mauris mi id lacus nibh et.
            </p>
          </article>
        </section>
        
        <section className="main-page-info">
          <article>
            <h4>Lorem!</h4>
            <p>
              Lorem ipsum dolor sit amet, ultrices augue libero per egestas
              faucibus, metus pede pellentesque. Bibendum nonummy, at amet ut.
              Maecenas eaque metus viverra. Vulputate eleifend massa purus
              hendrerit tincidunt, lacinia pulvinar dignissim sed egestas massa,
              sed facilisi sociis, quis vestibulum nec. Suscipit ipsum lacinia
              neque fringilla pellentesque. Eros gravida ac, nam volutpat fusce
              posuere habitasse, amet vivamus interdum elit morbi sollicitudin,
              tincidunt porttitor dui pellentesque at cillum curabitur, risus
              debitis. Nulla aliquam interdum dictumst bibendum, sem
              pellentesque maecenas amet rutrum, dolor quam venenatis in aenean,
              justo quam magna congue. Malesuada vel molestie quia wisi
              pharetra, placerat conubia wisi bibendum, nonummy sollicitudin
              lectus mollis. Quis duis wisi nunc auctor sit commodo, aliquam
              vivamus tellus facilisis, consequat nulla eu dui torquent pede
              maecenas, fringilla tristique aenean orci ante justo, non urna leo
              dis vehicula libero. Ut id donec quis curabitur, luctus pede
              tortor amet vitae felis, risus mollis in quisque, lobortis nunc
              augue massa nec aptent nunc. Pellentesque sit tortor commodo est
              mauris libero, fringilla ligula amet turpis suscipit proin vitae,
              mauris mi id lacus nibh et.
            </p>
          </article>
          <div className="main-page-article-image">
            <img src="https://html5css.ru/w3css/img_avatar3.png"></img>
          </div>
        </section>
      </main>
    );
  }
}

export default MainPage;
