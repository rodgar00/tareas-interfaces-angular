## Ejercicio de entrega
- Para realizar la entrega se deberá de enviar SOLAMENTE las carpetas/directorios src y public, además de los demás archivos de configuración. La carpeta node_modules NO se envía.

Lo que debemos de hacer:
- Vamos a crear un componente llamado tareas. Cuando arranquemos el servicio del serve solo se verá este componente.
- Vamos a crear con html y css una interfaz de tareas que se puedan ver en un dispositivo móvil. El diseño de la tarjeta está almacenada en la carpeta public de este proyecto.
- Las tarjetas impares deben de tener un diferente color de fondo en su diseño.
- Tendremos un botón que al presionar añadirá una clase llamada "disable" cuando esa variable sea true. En caso de que sea false no se añadirá. Esta clase ocultará los items.
  - Esto afectará a algunos items (Los que queráis). Usad: {{ val ? ... : ... }}. No vayáis a usar directivas ni nada de ngClass, etc. 
