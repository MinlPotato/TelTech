import { React, useRef } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/sidebar';
import "./Informacion.css";
 
function Informacion() {

  const info1 = useRef(null)
  const info2 = useRef(null)
  const info3 = useRef(null)

  const Infos = [info1, info2, info3]
 
  
  return (
    <>
      <div className="row">
        <div style={{ fontSize: "1.5rem" }} className="col-3 px-5 card">
          <nav
            id="navbar-example3"
            className="h-100 flex-column align-items-stretch pe-4 border-end border-dark"
          >
            <nav className="nav nav-pills flex-column">
              <a className="nav-link text-white mt-4" href="#item-1">
                Telescopios
              </a>
              <nav className="nav nav-pills flex-column text-white">
                <a
                  className="nav-link ms-3 my-1 text-white text-white"
                  href="#item-1-1"
                >
                  Para que se usa?
                </a>
                <a className="nav-link ms-3 my-1 text-white" href="#item-1-2">
                  Accesorios
                </a>
              </nav>
              <a className="nav-link text-white" href="#item-2">
                Planetas
              </a>
              <a className="nav-link text-white" href="#item-3">
                Item 3
              </a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ms-3 my-1 text-white" href="#item-3-1">
                  Item 3-1
                </a>
                <a className="nav-link ms-3 my-1 text-white" href="#item-3-2">
                  Item 3-2
                </a>
              </nav>
            </nav>
          </nav>
        </div>

        <div style={{ fontSize: "20px" }} className="col-8 mx-4 card">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            className="scrollspy-example-2"
            tabindex="0"
          >
            <div id="item-1">
              <h4 className="mt-5">Telescopios</h4>
              <p className="px-5">
                Si has decidido adquirir un telescopio estas en el lugar
                adecuado. Aquí te explicaremos los distintos tipos de
                telescopios que existen. Qué telescopios son mejores para
                iniciarse en esta afición y que tipos de monturas son las más
                adecuadas para que puedas elegir que telescopio comprar con
                criterio.{" "}
              </p>
            </div>
            <div id="item-1-1">
              <h5 className="pt-3 px-3">Para que se usa?</h5>
              <p className="px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tellus integer feugiat scelerisque varius. Sed adipiscing diam
                donec adipiscing. Donec et odio pellentesque diam. Praesent
                elementum facilisis leo vel fringilla. Scelerisque fermentum dui
                faucibus in ornare quam. Sit amet purus gravida quis blandit
                turpis cursus in. Tellus at urna condimentum mattis pellentesque
                id nibh tortor id. Neque volutpat ac tincidunt vitae semper.
                Enim eu turpis egestas pretium aenean pharetra magna. Nulla
                malesuada pellentesque elit eget gravida cum sociis natoque.
                Diam quis enim lobortis scelerisque fermentum dui faucibus. Odio
                eu feugiat pretium nibh ipsum consequat. Varius sit amet mattis
                vulputate enim nulla aliquet. Sit amet purus gravida quis
                blandit turpis cursus in hac. Vitae purus faucibus ornare
                suspendisse. Faucibus in ornare quam viverra orci sagittis eu.
                Viverra justo nec ultrices dui sapien eget mi proin. Aliquam
                malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                Cursus vitae congue mauris rhoncus aenean vel. Adipiscing vitae
                proin sagittis nisl rhoncus mattis rhoncus urna. Nunc consequat
                interdum varius sit amet mattis vulputate. Nisl rhoncus mattis
                rhoncus urna. Suspendisse sed nisi lacus sed viverra tellus in
                hac. Ut diam quam nulla porttitor massa id. A lacus vestibulum
                sed arcu non odio euismod lacinia. Consectetur lorem donec massa
                sapien. Nulla facilisi etiam dignissim diam.
              </p>
            </div>
            <div id="item-1-2">
              <h5 className="pt-3 px-3">Accesorios</h5>
              <p className="px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tellus integer feugiat scelerisque varius. Sed adipiscing diam
                donec adipiscing. Donec et odio pellentesque diam. Praesent
                elementum facilisis leo vel fringilla. Scelerisque fermentum dui
                faucibus in ornare quam. Sit amet purus gravida quis blandit
                turpis cursus in. Tellus at urna condimentum mattis pellentesque
                id nibh tortor id. Neque volutpat ac tincidunt vitae semper.
                Enim eu turpis egestas pretium aenean pharetra magna. Nulla
                malesuada pellentesque elit eget gravida cum sociis natoque.
                Diam quis enim lobortis scelerisque fermentum dui faucibus. Odio
                eu feugiat pretium nibh ipsum consequat. Varius sit amet mattis
                vulputate enim nulla aliquet. Sit amet purus gravida quis
                blandit turpis cursus in hac. Vitae purus faucibus ornare
                suspendisse. Faucibus in ornare quam viverra orci sagittis eu.
                Viverra justo nec ultrices dui sapien eget mi proin. Aliquam
                malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                Cursus vitae congue mauris rhoncus aenean vel. Adipiscing vitae
                proin sagittis nisl rhoncus mattis rhoncus urna. Nunc consequat
                interdum varius sit amet mattis vulputate. Nisl rhoncus mattis
                rhoncus urna. Suspendisse sed nisi lacus sed viverra tellus in
                hac. Ut diam quam nulla porttitor massa id. A lacus vestibulum
                sed arcu non odio euismod lacinia. Consectetur lorem donec massa
                sapien. Nulla facilisi etiam dignissim diam.
              </p>
            </div>
            <div id="item-2">
              <h4 className="pt-5">Planetas</h4>
              <p className="px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tellus integer feugiat scelerisque varius. Sed adipiscing diam
                donec adipiscing. Donec et odio pellentesque diam. Praesent
                elementum facilisis leo vel fringilla. Scelerisque fermentum dui
                faucibus in ornare quam. Sit amet purus gravida quis blandit
                turpis cursus in. Tellus at urna condimentum mattis pellentesque
                id nibh tortor id. Neque volutpat ac tincidunt vitae semper.
                Enim eu turpis egestas pretium aenean pharetra magna. Nulla
                malesuada pellentesque elit eget gravida cum sociis natoque.
                Diam quis enim lobortis scelerisque fermentum dui faucibus. Odio
                eu feugiat pretium nibh ipsum consequat. Varius sit amet mattis
                vulputate enim nulla aliquet. Sit amet purus gravida quis
                blandit turpis cursus in hac. Vitae purus faucibus ornare
                suspendisse. Faucibus in ornare quam viverra orci sagittis eu.
                Viverra justo nec ultrices dui sapien eget mi proin. Aliquam
                malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                Cursus vitae congue mauris rhoncus aenean vel. Adipiscing vitae
                proin sagittis nisl rhoncus mattis rhoncus urna. Nunc consequat
                interdum varius sit amet mattis vulputate. Nisl rhoncus mattis
                rhoncus urna. Suspendisse sed nisi lacus sed viverra tellus in
                hac. Ut diam quam nulla porttitor massa id. A lacus vestibulum
                sed arcu non odio euismod lacinia. Consectetur lorem donec massa
                sapien. Nulla facilisi etiam dignissim diam.
              </p>
            </div>
            <div id="item-3">
              <h4>Item 3</h4>
              <p className="px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tellus integer feugiat scelerisque varius. Sed adipiscing diam
                donec adipiscing. Donec et odio pellentesque diam. Praesent
                elementum facilisis leo vel fringilla. Scelerisque fermentum dui
                faucibus in ornare quam. Sit amet purus gravida quis blandit
                turpis cursus in. Tellus at urna condimentum mattis pellentesque
                id nibh tortor id. Neque volutpat ac tincidunt vitae semper.
                Enim eu turpis egestas pretium aenean pharetra magna. Nulla
                malesuada pellentesque elit eget gravida cum sociis natoque.
                Diam quis enim lobortis scelerisque fermentum dui faucibus. Odio
                eu feugiat pretium nibh ipsum consequat. Varius sit amet mattis
                vulputate enim nulla aliquet. Sit amet purus gravida quis
                blandit turpis cursus in hac. Vitae purus faucibus ornare
                suspendisse. Faucibus in ornare quam viverra orci sagittis eu.
                Viverra justo nec ultrices dui sapien eget mi proin. Aliquam
                malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                Cursus vitae congue mauris rhoncus aenean vel. Adipiscing vitae
                proin sagittis nisl rhoncus mattis rhoncus urna. Nunc consequat
                interdum varius sit amet mattis vulputate. Nisl rhoncus mattis
                rhoncus urna. Suspendisse sed nisi lacus sed viverra tellus in
                hac. Ut diam quam nulla porttitor massa id. A lacus vestibulum
                sed arcu non odio euismod lacinia. Consectetur lorem donec massa
                sapien. Nulla facilisi etiam dignissim diam.
              </p>
            </div>
            <div id="item-3-1">
              <h5 className="px-5">Item 3-1</h5>
              <p className="px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tellus integer feugiat scelerisque varius. Sed adipiscing diam
                donec adipiscing. Donec et odio pellentesque diam. Praesent
                elementum facilisis leo vel fringilla. Scelerisque fermentum dui
                faucibus in ornare quam. Sit amet purus gravida quis blandit
                turpis cursus in. Tellus at urna condimentum mattis pellentesque
                id nibh tortor id. Neque volutpat ac tincidunt vitae semper.
                Enim eu turpis egestas pretium aenean pharetra magna. Nulla
                malesuada pellentesque elit eget gravida cum sociis natoque.
                Diam quis enim lobortis scelerisque fermentum dui faucibus. Odio
                eu feugiat pretium nibh ipsum consequat. Varius sit amet mattis
                vulputate enim nulla aliquet. Sit amet purus gravida quis
                blandit turpis cursus in hac. Vitae purus faucibus ornare
                suspendisse. Faucibus in ornare quam viverra orci sagittis eu.
                Viverra justo nec ultrices dui sapien eget mi proin. Aliquam
                malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                Cursus vitae congue mauris rhoncus aenean vel. Adipiscing vitae
                proin sagittis nisl rhoncus mattis rhoncus urna. Nunc consequat
                interdum varius sit amet mattis vulputate. Nisl rhoncus mattis
                rhoncus urna. Suspendisse sed nisi lacus sed viverra tellus in
                hac. Ut diam quam nulla porttitor massa id. A lacus vestibulum
                sed arcu non odio euismod lacinia. Consectetur lorem donec massa
                sapien. Nulla facilisi etiam dignissim diam.
              </p>
            </div>
            <div id="item-3-2">
              <h5>Item 3-2</h5>
              <p className="px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tellus integer feugiat scelerisque varius. Sed adipiscing diam
                donec adipiscing. Donec et odio pellentesque diam. Praesent
                elementum facilisis leo vel fringilla. Scelerisque fermentum dui
                faucibus in ornare quam. Sit amet purus gravida quis blandit
                turpis cursus in. Tellus at urna condimentum mattis pellentesque
                id nibh tortor id. Neque volutpat ac tincidunt vitae semper.
                Enim eu turpis egestas pretium aenean pharetra magna. Nulla
                malesuada pellentesque elit eget gravida cum sociis natoque.
                Diam quis enim lobortis scelerisque fermentum dui faucibus. Odio
                eu feugiat pretium nibh ipsum consequat. Varius sit amet mattis
                vulputate enim nulla aliquet. Sit amet purus gravida quis
                blandit turpis cursus in hac. Vitae purus faucibus ornare
                suspendisse. Faucibus in ornare quam viverra orci sagittis eu.
                Viverra justo nec ultrices dui sapien eget mi proin. Aliquam
                malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                Cursus vitae congue mauris rhoncus aenean vel. Adipiscing vitae
                proin sagittis nisl rhoncus mattis rhoncus urna. Nunc consequat
                interdum varius sit amet mattis vulputate. Nisl rhoncus mattis
                rhoncus urna. Suspendisse sed nisi lacus sed viverra tellus in
                hac. Ut diam quam nulla porttitor massa id. A lacus vestibulum
                sed arcu non odio euismod lacinia. Consectetur lorem donec massa
                sapien. Nulla facilisi etiam dignissim diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Informacion