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
                  <a
                    className="nav-link ms-5 mt-1 fs-5 text-white"
                    href="#item-2-3"
                  >
                    3. Galaxias
                  </a>
                </nav>
                <a className="nav-link text-white " href="#item-3">
                  Accesorios
                </a>
                <nav className="nav nav-pills flex-column">
                  <a
                    className="nav-link ms-5 mt-1 fs-5  text-white"
                    href="#item-3-1"
                  >
                    1. Filtro
                  </a>
                  <a
                    className="nav-link ms-5 mt-1 fs-5 text-white"
                    href="#item-3-2"
                  >
                    2. Reductor Focal
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
                    <strong> Conocer la ubicación del cometa:</strong> Lo
                    primero que debes hacer es conocer la ubicación del cometa
                    en el cielo nocturno. Esto lo puedes hacer consultando una
                    guía astronómica o utilizando alguna aplicación en línea que
                    te permita saber en qué posición se encuentra el cometa en
                    el cielo.
                  </li>
                  <li>
                    <strong>Configurar el telescopio:</strong> Una vez que
                    tengas la ubicación del cometa, debes configurar tu
                    telescopio de acuerdo a las especificaciones de la guía del
                    usuario. Es importante que el telescopio esté correctamente
                    enfocado y que esté colocado en una posición estable.
                  </li>
                  <li>
                    <strong>Utilizar una lente de baja magnificación:</strong>
                    Para observar un cometa, es recomendable utilizar una lente
                    de baja magnificación. Esto te permitirá ver una amplia área
                    del cielo, lo que te facilitará la tarea de encontrar el
                    cometa.
                  </li>
                  <li>
                    <strong>Localizar el cometa:</strong> Una vez que hayas
                    configurado el telescopio, utiliza los ajustes para
                    localizar el cometa en el cielo. A medida que vayas
                    acercándote, puedes cambiar a lentes de mayor magnificación
                    para ver más detalles del cometa.
                  </li>
                  <li>
                    <strong>Observar el cometa:</strong> Finalmente, cuando
                    hayas localizado el cometa, tómate tu tiempo para
                    observarlo. Puedes apreciar su forma y tamaño, así como la
                    cola de gas y polvo que lo rodea. También puedes tomar notas
                    o fotografías de tu observación para futuras referencias.
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
            <div id="item-2-3">
              <h5 className="pt-5 px-3 pb-3 fs-2">Galaxias</h5>
              <p className="px-5">
                {" "}
                Para ver galaxias con un telescopio, necesitas seguir los
                siguientes pasos:
              </p>
              <ol className="px-5">
                <div className="px-5">
                  <li>
                    <strong>Elige un lugar oscuro:</strong> Para obtener las
                    mejores vistas de las galaxias, necesitas alejarte de las
                    luces de la ciudad y encontrar un lugar oscuro para colocar
                    tu telescopio.
                  </li>
                  <li>
                    <strong>Configura tu telescopio:</strong> Monta tu
                    telescopio según las instrucciones del fabricante y
                    asegúrate de que esté bien equilibrado para evitar
                    vibraciones innecesarias.
                  </li>
                  <li>
                    <strong>Apunta el telescopio:</strong> Consulta una carta
                    del cielo o una aplicación de astronomía para encontrar la
                    ubicación de la galaxia que deseas ver. Una vez que la hayas
                    localizado en el cielo, apunta el telescopio en esa
                    dirección.
                  </li>
                  <li>
                    <strong> Ajusta la configuración:</strong> Utiliza los
                    ajustes del telescopio para lograr una imagen nítida de la
                    galaxia. Puedes ajustar la posición de los espejos o lentes,
                    la distancia focal y la abertura del telescopio para mejorar
                    la imagen.
                  </li>
                  <li>
                    <strong> Usa un ocular:</strong> Coloca un ocular en el
                    telescopio para aumentar la imagen y obtener más detalles de
                    la galaxia. Los oculares vienen en diferentes tamaños y
                    aumentos, así que experimenta con diferentes opciones para
                    encontrar la que mejor se adapte a tu vista.
                  </li>
                  <li>
                    <strong>Observa la galaxia:</strong> Una vez que hayas
                    ajustado la configuración del telescopio y estés usando el
                    ocular adecuado, podrás observar la galaxia. Asegúrate de
                    tomar tu tiempo para mirar con detenimiento y disfrutar de
                    las vistas.
                  </li>
                </div>
              </ol>
              <p className="px-5">
                Es importante tener en cuenta que ver una galaxia con un
                telescopio no siempre es fácil y puede requerir paciencia y
                práctica. Pero con la técnica correcta y un poco de
                perseverancia, podrás disfrutar de algunas de las vistas más
                impresionantes del universo.
              </p>
            </div>
            <div id="item-3">
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
            <div id="item-3-1">
              <h5 className="px-3 pb-3 fs-2">Filtros</h5>
              <p className="px-5">
                Un filtro para telescopios es una pieza óptica que se coloca en
                la parte frontal del telescopio o en el ocular, y que se utiliza
                para modificar la luz que llega al ojo del observador. Estos
                filtros son útiles para mejorar la observación de objetos
                celestes específicos, como planetas, nebulosas, cúmulos
                estelares, entre otros, al mejorar el contraste y la definición
                de la imagen.
              </p>
              <p className="px-5">
                Existen varios tipos de filtros para telescopios, cada uno
                diseñado para bloquear o transmitir diferentes longitudes de
                onda de la luz, lo que resulta en diferentes efectos en la
                imagen observada. Algunos de los tipos de filtros más comunes
                son los siguientes:
              </p>
              <ol className="px-5">
                <div className="px-5">
                  <li>
                    Filtros de color: Estos filtros suelen ser de colores (rojo,
                    azul, verde, amarillo, etc.) y se utilizan para resaltar
                    determinadas características de la imagen observada, como la
                    polarización o la absorción de la luz. Por ejemplo, un
                    filtro azul puede ser útil para observar detalles en la
                    atmósfera de Júpiter, mientras que un filtro rojo puede ser
                    utilizado para mejorar la visualización de detalles en
                    Marte.
                  </li>
                  <li>
                    Filtros de polarización: Estos filtros se utilizan para
                    reducir el brillo y mejorar el contraste en la imagen
                    observada, al reducir los reflejos de la luz solar y mejorar
                    la visualización de los detalles en la superficie de los
                    planetas.
                  </li>
                  <li>
                    Filtros de nebulosa: Estos filtros son utilizados para
                    aumentar el contraste de las nebulosas y otros objetos
                    celestes débiles, mejorando la visualización de las
                    características de la estructura de la nebulosa y resaltando
                    su color.
                  </li>
                  <li>
                    Filtros solares: Estos filtros se utilizan para observar el
                    Sol de manera segura, bloqueando la mayoría de la luz
                    visible y el espectro ultravioleta, reduciendo así el brillo
                    y la intensidad del Sol.
                  </li>
                  <li>
                    Filtros de banda estrecha: Estos filtros se utilizan para
                    observar objetos celestes específicos, como nebulosas de
                    emisión de hidrógeno, bloqueando todo el espectro de luz
                    excepto una banda estrecha de luz específica que emiten
                    estos objetos celestes.
                  </li>
                </div>
              </ol>
              <p className="px-5">
                Es importante tener en cuenta que algunos filtros pueden ser
                peligrosos si se utilizan de manera incorrecta, por lo que
                siempre se deben seguir las instrucciones del fabricante y tomar
                las precauciones necesarias para evitar daños o lesiones.
              </p>
            </div>
            <div id="item-3-2">
              <h5 className="px-3 pb-3 fs-2">Reductor Focal</h5>
              <p className="px-5">En progreso...</p>
              <p className="px-5">En progreso...</p>
              <p className="px-5">En progreso...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Informacion;
