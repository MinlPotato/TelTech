import { React, useRef, useEffect } from "react";
import "./Informacion.css";


function Informacion() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="row me-5">
        <div
          style={{ fontSize: "1.5rem" }}
          className="col-3 pl-5 ps-5 me-5 card"
        >
          <div className="position-fixed">
            <nav
              id="navbar-example3"
              className="h-100 flex-column align-items-stretch pe-4"
            >
              <nav className="nav nav-pills flex-column ">
                <a className="nav-link text-white mt-4 " href="#item-1">
                  Telescopios
                </a>
                <nav className="nav nav-pills flex-column text-white">
                  <a
                    className="nav-link ms-5 mt-1 fs-5 text-white text-white "
                    Href="#item-1-1"
                  >
                    1. Para que se usa?
                  </a>
                  <a
                    className="nav-link ms-5 my-1 fs-5 text-white "
                    href="#item-1-2"
                  >
                    2. Accesorios
                  </a>
                </nav>
                <a className="nav-link text-white" Href="#item-2">
                  Como ver:
                </a>
                <nav className="nav nav-pills flex-column">
                  <a
                    className="nav-link ms-5 mt-1 fs-5  text-white"
                    href="#item-2-1"
                  >
                    1. Planetas
                  </a>
                  <a
                    className="nav-link ms-5 mt-1 fs-5 text-white"
                    href="#item-2-2"
                  >
                    2. Cometas
                  </a>
                </nav>
                <a className="nav-link text-white " href="#item-3">
                  Item 3
                </a>
                <nav className="nav nav-pills flex-column">
                  <a
                    className="nav-link ms-5 mt-1 fs-5  text-white"
                    href="#item-3-1"
                  >
                    1. Item 3-1
                  </a>
                  <a
                    className="nav-link ms-5 mt-1 fs-5 text-white"
                    href="#item-3-2"
                  >
                    2. Item 3-2
                  </a>
                </nav>
              </nav>
            </nav>
          </div>
        </div>

        <div style={{ fontSize: "20px" }} className="col-7 ms-5">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            className="scrollspy-example-2"
            tabindex="0"
          >
            <div id="item-1">
              <h4 className="pt-5 pb-3 fs-1">Telescopios</h4>
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
              <h5 className="pt-5 ps-3 pb-3 fs-2">Para que se usa?</h5>
              <p className="px-5">
                Un telescopio es un instrumento óptico utilizado para observar
                objetos distantes en el cielo. Hay diferentes tipos de
                telescopios, pero todos tienen algunas partes en común.{" "}
              </p>
              <p className="px-5">
                El cuerpo principal del telescopio es el tubo, que es el
                contenedor de todas las partes internas. El tubo puede ser de
                diferentes materiales, como aluminio, fibra de carbono o
                plástico, y su longitud determina el poder de aumento del
                telescopio.
              </p>
              <p className="px-5">
                En la parte delantera del tubo se encuentra el objetivo, que es
                la lente más grande del telescopio. El objetivo recoge la luz y
                la enfoca en el ocular, que es la lente más pequeña del
                telescopio y se encuentra en la parte trasera del tubo. El
                ocular es el lugar donde el observador coloca su ojo para ver la
                imagen del objeto observado.
              </p>
              <p className="px-5">
                En algunos telescopios, hay un espejo en lugar de una lente en
                la parte delantera del tubo. Este espejo se llama espejo
                primario y es el elemento principal de un telescopio reflector.
                La luz reflejada por el espejo se enfoca en un espejo secundario
                que se encuentra en la parte superior del tubo y se desvía hacia
                el ocular.
              </p>
              <p className="px-5">
                Para enfocar la imagen del objeto observado, el telescopio tiene
                un sistema de enfoque que consiste en un mecanismo de ajuste que
                mueve el ocular hacia adentro o hacia afuera. El enfoque se
                ajusta para obtener la imagen más clara y nítida posible.{" "}
              </p>
              <p className="px-5">
                Algunos telescopios también tienen un prisma diagonal, que se
                coloca entre el ocular y el tubo. El prisma diagonal desvía la
                luz en un ángulo de 90 grados, lo que facilita la observación de
                objetos que están en una posición incómoda para el observador.{" "}
              </p>
              <p className="px-5">
                El telescopio también puede tener un buscador, que es un pequeño
                telescopio montado en la parte superior del tubo principal. El
                buscador ayuda a localizar objetos en el cielo y se alinea con
                el tubo principal para que el objeto se vea en el ocular del
                telescopio.
              </p>
              <p className="px-5">
                Para utilizar un telescopio, primero es necesario montarlo en un
                trípode o base estable. Luego, se debe ajustar el enfoque para
                obtener una imagen clara del objeto que se desea observar. El
                buscador también debe ser ajustado para apuntar el telescopio en
                la dirección correcta.
              </p>
              <p className="px-5">
                Para observar objetos en el cielo, es importante elegir una
                ubicación oscura y sin contaminación lumínica. La luna llena y
                las luces artificiales pueden interferir con la observación de
                objetos débiles en el cielo.
              </p>
              <p className="px-5">
                En resumen, el telescopio es un instrumento óptico utilizado
                para observar objetos distantes en el cielo. Se compone de
                varias partes, como el tubo, el objetivo, el ocular, el enfoque,
                el prisma diagonal y el buscador. Para utilizar un telescopio,
                se debe montar en una base estable, ajustar el enfoque y el
                buscador, y elegir una ubicación oscura para observar objetos en
                el cielo.
              </p>
            </div>
            <div id="item-1-2">
              <h5 className="pt-5 px-3 pb-3 fs-2">Accesorios</h5>
              <p className="px-5">
                Los telescopios pueden tener diferentes accesorios que ayudan a
                mejorar la observación y la funcionalidad del instrumento. A
                continuación, explicamos algunos de los accesorios más comunes
                que se pueden encontrar en un telescopio:
              </p>
              <ol className="px-5">
                <div className="px-5">
                  <li>
                    <strong>Filtros:</strong> Los filtros son accesorios que se
                    colocan en el objetivo o en el ocular del telescopio y
                    permiten bloquear ciertos tipos de luz para mejorar la
                    observación. Por ejemplo, los filtros solares bloquean la
                    luz intensa del sol y permiten observar manchas solares con
                    seguridad.
                  </li>
                  <li>
                    <strong>Reductores de focal:</strong> Un reductor de focal
                    es un accesorio que se coloca en el foco del telescopio para
                    reducir su distancia focal, lo que resulta en un campo de
                    visión más amplio. Esto puede ser útil para observar objetos
                    más grandes en el cielo, como galaxias o nebulosas.
                  </li>
                  <li>
                    <strong>Barlow:</strong> Un barlow es un accesorio que se
                    coloca entre el ocular y el foco del telescopio para
                    aumentar el poder de aumento del telescopio. Esto puede ser
                    útil para observar objetos muy pequeños en el cielo, como
                    planetas o estrellas dobles.
                  </li>
                  <li>
                    <strong>Adaptador de cámara:</strong> Un adaptador de cámara
                    se utiliza para conectar una cámara réflex digital al
                    telescopio y permitir la fotografía del cielo. Estos
                    adaptadores pueden ser específicos para la marca y modelo de
                    la cámara y el telescopio.{" "}
                  </li>
                  <li>
                    <strong>Filtros de color:</strong> Los filtros de color se
                    colocan en el ocular del telescopio y cambian el color de la
                    luz que entra en el telescopio. Estos filtros pueden ser
                    útiles para resaltar ciertas características de los objetos
                    observados, como detalles en la atmósfera de un planeta.
                  </li>
                  <li>
                    <strong>Monturas motorizadas:</strong> Las monturas
                    motorizadas son accesorios que permiten mover
                    automáticamente el telescopio para seguir la rotación de la
                    Tierra. Esto puede ser útil para la observación de objetos
                    que se mueven rápidamente en el cielo, como satélites
                    artificiales o cometas.{" "}
                  </li>
                </div>
              </ol>
              <p className="px-5">
                En resumen, los accesorios para telescopios pueden mejorar la
                observación y la funcionalidad del instrumento. Los filtros,
                reductores de focal, barlows, adaptadores de cámara, filtros de
                color y monturas motorizadas son algunos de los accesorios más
                comunes que se pueden encontrar en un telescopio. Cada accesorio
                tiene su propia función y puede ser útil para diferentes tipos
                de observación astronómica.
              </p>
            </div>

            <div id="item-2">
              <h4 className="pt-5 pb-3 fs-1">Como ver:</h4>
              <div id="item-2-1">
                <h5 className="pt-5 px-3 pb-3 fs-2">Planetas</h5>

                <p className="px-5">
                  Cada planeta del sistema solar se puede observar con un
                  telescopio, pero se necesitan diferentes técnicas y ajustes
                  para lograr la mejor imagen. A continuación, se presenta una
                  breve explicación de cómo ver cada planeta del sistema solar
                  con un telescopio:
                </p>
                <ol className="px-5">
                  <div className="px-5">
                    <li>
                      <strong>Mercurio:</strong> Mercurio es un planeta difícil
                      de observar debido a su cercanía al sol. Para observarlo,
                      es necesario esperar a que esté lo más alejado posible del
                      sol y observarlo justo antes del amanecer o justo después
                      del atardecer. El uso de un filtro solar es necesario para
                      evitar dañar los ojos y el telescopio.
                    </li>
                    <li>
                      <strong>Venus:</strong> Venus es uno de los planetas más
                      brillantes y fáciles de observar. Se puede ver a simple
                      vista y con un telescopio se pueden apreciar sus fases, al
                      igual que la luna. Se recomienda observarlo justo antes
                      del amanecer o justo después del atardecer.
                    </li>
                    <li>
                      <strong>Marte:</strong> Marte es un planeta rocoso y se
                      puede ver mejor durante su oposición (cuando se encuentra
                      más cerca de la Tierra). En este momento, se pueden
                      observar los detalles de su superficie, como los casquetes
                      polares y las regiones más oscuras. Se recomienda utilizar
                      un filtro de color rojo para mejorar la visibilidad.
                    </li>
                    <li>
                      <strong>Júpiter:</strong> Júpiter es el planeta más grande
                      del sistema solar y se puede ver fácilmente con un
                      telescopio. Se pueden observar las bandas de nubes, la
                      Gran Mancha Roja y sus cuatro lunas más grandes (Io,
                      Europa, Ganímedes y Calisto).
                    </li>
                    <li>
                      <strong>Saturno:</strong> Saturno es famoso por sus
                      anillos y se pueden observar con un telescopio. Se
                      recomienda utilizar un ocular de mayor magnificación para
                      ver los detalles en los anillos y la atmósfera del
                      planeta.
                    </li>
                    <li>
                      <strong>Urano:</strong> Urano es un planeta que se puede
                      observar con un telescopio, pero es difícil de detectar a
                      simple vista. Se recomienda utilizar un ocular de mayor
                      magnificación y buscarlo en una zona del cielo sin mucha
                      contaminación lumínica.
                    </li>
                    <li>
                      <strong>Neptuno:</strong> Neptuno es un planeta que solo
                      se puede ver con un telescopio potente, ya que es muy
                      débil y pequeño. Se recomienda utilizar un ocular de alta
                      magnificación y buscarlo en una zona del cielo sin mucha
                      contaminación lumínica.
                    </li>
                  </div>
                </ol>
                <p className="px-5">
                  En resumen, para ver cada planeta del sistema solar con un
                  telescopio se necesitan diferentes técnicas y ajustes. Se
                  recomienda esperar el momento adecuado para observarlos y
                  utilizar accesorios como filtros de color para mejorar la
                  visibilidad.
                </p>
              </div>
            </div>

            <div id="item-2-2">
              <h5 className="pt-5 px-3 pb-3 fs-2">Cometas</h5>
              <p className="px-5">
                Ver cometas con un telescopio puede ser una experiencia
                emocionante y fascinante para cualquier astrónomo aficionado o
                profesional. Para poder observar un cometa con un telescopio, se
                deben seguir los siguientes pasos:
              </p>
              <ol className="px-5">
                <div className="px-5">
                  <li>
                    Conocer la ubicación del cometa: Lo primero que debes hacer
                    es conocer la ubicación del cometa en el cielo nocturno.
                    Esto lo puedes hacer consultando una guía astronómica o
                    utilizando alguna aplicación en línea que te permita saber
                    en qué posición se encuentra el cometa en el cielo.
                  </li>
                  <li>
                    Configurar el telescopio: Una vez que tengas la ubicación
                    del cometa, debes configurar tu telescopio de acuerdo a las
                    especificaciones de la guía del usuario. Es importante que
                    el telescopio esté correctamente enfocado y que esté
                    colocado en una posición estable.
                  </li>
                  <li>
                    Utilizar una lente de baja magnificación: Para observar un
                    cometa, es recomendable utilizar una lente de baja
                    magnificación. Esto te permitirá ver una amplia área del
                    cielo, lo que te facilitará la tarea de encontrar el cometa.
                  </li>
                  <li>
                    Localizar el cometa: Una vez que hayas configurado el
                    telescopio, utiliza los ajustes para localizar el cometa en
                    el cielo. A medida que vayas acercándote, puedes cambiar a
                    lentes de mayor magnificación para ver más detalles del
                    cometa.
                  </li>
                  <li>
                    Observar el cometa: Finalmente, cuando hayas localizado el
                    cometa, tómate tu tiempo para observarlo. Puedes apreciar su
                    forma y tamaño, así como la cola de gas y polvo que lo
                    rodea. También puedes tomar notas o fotografías de tu
                    observación para futuras referencias.
                  </li>
                </div>
              </ol>
              <p className="px-5">
                Es importante tener en cuenta que la observación de cometas
                puede ser influenciada por factores externos como la
                contaminación lumínica o las condiciones climáticas. Por lo
                tanto, es recomendable elegir una noche clara y oscura para
                realizar la observación. Además, ten en cuenta que algunos
                cometas pueden ser más brillantes y fáciles de observar que
                otros, por lo que es posible que debas tener paciencia y ser
                perseverante en tu búsqueda.
              </p>
            </div>
            <div id="item-3">
              <h4 className="pt-5 pb-3 fs-1">Item 3</h4>
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
              <h5 className="px-3 pb-3 fs-2">Item 3-1</h5>
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
              <h5 className="px-3 pb-3 fs-2">Item 3-2</h5>
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

export default Informacion;
