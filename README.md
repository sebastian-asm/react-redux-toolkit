# Demo de Redux Toolkit y Testing

- **Pruebas unitarias**: son las que estan efocadas en pequeñas funcionalidades.
- **Pruebas de integración**: enfocadas en cómo reaccionan varias piezas (funciones) en conjunto.

Todas las pruebas deberían ser escritas teniendo en mente que:

- sean fáciles de escribir
- fáciles de leer
- confiables
- rápidas
- principalmente unitarias

Se puede tener como punto de inicio antes de escribir pruebas, determinar cual es la ruta crítica de nuestra app para luego comenzar por los componentes que menos dependecias tienen.

Los archivos de test constan de 3 pasos:

1. Inicialización
2. Estímulo
3. Comportamiento (observar el resultado esperado)

Testing Library esta orientanda principalmente para la manipulación del DOM.

Para tener presente, no se puede hacer pruebas de algo que no está exportado.

Un _Snapshot_ es una fotografía de un componente cuando se ejecuta por primera vez, y es almacenado en un archivo .snap lo que permite que si alguien elimina alguna característica del componente, no hará _match_ con el Snapshot y la prueba dará error. Esto podría generar inconvenientes en caso que el componente este cambiando constantemente.

Un _mock_ es una simulación de algo, no es la implamentación real, por ejemplo, de una función.
