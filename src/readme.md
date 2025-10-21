# Ejercicio HTML y CSS

- Crear un componente que se llame practicando.
- Quiero que solo se vea el contenido de este componente en el navegador.

Luego, vamos a crear una pequeña interfaz que tenga:
- Título: "Equipo de trabajo", con un tamaño más pequeño del habitual. Tipografía: Open Sans.
- Luego tendremos un contenedor que ocupe el 90% de tamaño y esté centrado en la página (No uséis text-align: center).
- Este contenedor tendrá 5 hijos div desplegados de 2 en 2 (2 columnas).
- Cada hijo tendrá la siguiente estructura:
- subtitulo (larger de tamaño).
- descripción: lorem ipsum.
- un botón diseñado con un color #FF008A, redondeado como pildora (border-radius pero sin porcentaje, es decir, con pixeles).
- Todo este contenido (botones, subtitulo, descripción) tiene que estar centrado y en la mitad.
- Cada contenedor hijo tendrá un redondeado de 5px (El contenedor de fuera). Y el contenido debe de estar separado de los bordes.

Continuemos en el componente practicando
Debemos de crear un botón que reste el valor del contador. Solo se podrá restar hasta 0. El valor de la variable tiene que ser un valor positivo > 0.
Vamos a crear otro botón que resetee el valor del contador.
Vamos a crear una variable llamada mensaje. Esta variable tendrá un mensaje que cambiará dependiendo del valor del contador. si es mayor a 10, el mensaje es: "Hemos superado los 10 clics", si el contador es 0 el mensaje será "no has hecho clics todavía". Para cualquier valor fuera de esos rangos será "Sigue contando..." 

## Ejercicio de entrega
- Para realizar la entrega se deberá de enviar SOLAMENTE las carpetas/directorios src y public, además de los demás archivos de configuración. La carpeta node_modules NO se envía.

Lo que debemos de hacer:
- Vamos a crear un componente llamado tareas. Cuando arranquemos el servicio del serve solo se verá este componente.
- Vamos a crear con html y css una interfaz de tareas que se puedan ver en un dispositivo móvil. El diseño de la tarjeta está almacenada en la carpeta public de este proyecto.
- Las tarjetas impares deben de tener un diferente color de fondo en su diseño.
- Tendremos un botón que al presionar añadirá una clase llamada "disable" cuando esa variable sea true. En caso de que sea false no se añadirá. Esta clase ocultará los items.
  - Esto afectará a algunos items (Los que queráis). Usad: {{ val ? ... : ... }}. No vayáis a usar directivas ni nada de ngClass, etc. 
