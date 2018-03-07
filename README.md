Examen Final
============

# Día 12/03/2018 Tiempo: 5 horas

* Nota: Cada pregunta se valorará como bien o como mal (valoraciones intermedias serán excepcionales).
* Nota2: En cada pregunta se especifica si se valora en el examen de diseño o en el de desarrollo.
* Nota3: Para aprobar cada examen hay que obtener una puntuación mínima de 5 puntos en ese examen.
* Nota4: Organice su tiempo. Si no consigue resolver un apartado pase al siguiente. El examen consta de ejercicios que se pueden resolver de forma independiente. Los apartados de diseño y de desarrollo también se pueden resolver por separado. Si un apartado depende de otro que no sabe resolver, siempre puede dar una solución que aunque no sea correcta, le permita seguir avanzando.
* Nota5: Para que una solución sea correcta, no sólo hay que conseguir que haga lo que se pide, sino que además todo lo que funcionaba lo tiene que seguir haciendo.
* Nota6: Lea completamente el examen antes de empezar y comience por lo que le parezca más fácil.

Pasos previos antes de empezar

* Clone el repositorio del enunciado

```bash
    git clone https://user-daw-zayas@bitbucket.org/surtich/profitoro-enunciado-final.git
```

* Vaya al directorio del repositorio

```bash
    cd profitoro-enunciado-final
```

* En la consola de Firebase cree una aplicación.

* Configure el fichero `index.js` que está en el directorio `firebaseapp` para que apunte a su base de datos.

* Configure su usuario de Git (es único para todos)

```bash
    git config user.name "user-daw-zayas"
    git config user.email "javier.perezarteaga@educa.madrid.org"
```

* Cree un *branch* con su nombre y apellidos separados con guiones (no incluya mayúsculas, acentos o caracteres no alfabéticos, excepción hecha de los guiones). Ejemplo:

```bash
    git checkout -b <fulanito-perez-gomez>
```

* Compruebe que está en la rama correcta:

```bash
    git status
```

* Suba la rama al repositorio remoto:

```bash
    git push origin <nombre-de-la-rama-dado-anteriormente>
```

* Instale las dependencias arranque la aplicación:

```bash
    npm install
    npm run dev
```

Navegue a [http://localhost:3000](http://localhost:3000)

* Dígale al profesor que ya ha terminado para que compruebe que todo es correcto y desconecte la red.

## EXAMEN

El único apartado pretende que se puedan modificar los ejercicios físicos (workouts).

![image0](./img/image0.gif)

#### 1.- Modificación de workouts.

#### 1.1- (1 punto diseño) En la ruta `/workouts`, al pulsar sobre un workout, se cambiará la parte derecha de la pantalla para permitir la modificación del workout.

Nota: Ya no se mostrará el modal.

![image1.1](./img/image1.1.png)

#### 1.2- (1 punto desarrollo) La información del workout sobre el que se ha pulsado se cargará con: nombre, descripción e imagen.

Nota: Al pulsar sobre otro workout se reemplazará la información mostrada por la correspondiente a este workout.

![image1.2](./img/image1.2.png)

#### 1.3- (2 puntos desarrollo) Al pulsar sobre `apply`, almacenará en Firebase el nombre y la descripción modificada del workout. El nuevo nombre se mostrará en la parte izquierda.

Nota: El resto de la información del workout se mantendrá como estaba excepto la fecha del workout que se actualizará a la del momento de modificación.
Nota: Tenga en cuenta que cada workout se almacena en más de un sitio y que puede que tenga que actualizar en todos ellos.
Nota: La modificación de los workouts se debe reflejar en `/statistics` y en la pantalla principal de realización de pomodoros.

![image1.3](./img/image1.3.png)

#### 1.3.1- (1 punto desarrollo, 1 punto diseño) Al pulsar sobre `apply`, antes de guardar los cambios, se mostrará un modal que pedirá confirmación de los cambios y permitirá cancelar o aceptar la modificación. Si se cancela se volverá al modo edición.

#### 1.4- (1 punto desarrollo) Al pulsar sobre `apply`, se almacenará en Firebase la nueva imagen y el workout modificado quedará asociado a esa imagen.

Nota: La imagen sólo se modificará si se ha elegido una, en caso contrario, se mantendrá la anterior.
Nota: No es necesario que borre la imagen anterior. Se puede quedar almacenada en Firebase.

![image1.4](./img/image1.4.png)

#### 1.5- (1 punto diseño) El botón `apply` estará desactivado cuando el campo nombre o descripción estén vacíos.

Nota: Al pulsarlo no ocurrirá nada.

![image1.5](./img/image1.5.png)

#### 1.6- (1 punto desarrollo) Al pulsar sobre `cancel` o `apply` se saldrá del modo edición.

![image1.6](./img/image1.6.png)

#### 1.7- (1 punto desarrollo) Estando en modo edición, se descartarán los cambios pendientes si se pulsa sobre un workout y se cargará la información de ese workout en el modo de edición.

Nota: La modificación del workout no será inmediata. Esto quiere decir que hasta que no se pulse sobre `apply` no se hará ningún cambio ni en Firebase ni en la colección de workouts de Vuex. Con esto último quiero decir que en la parte izquierda (Manage your workouts) no se reflejarán los cambios hasta pulsar sobre `apply`.

#### 1.8- (1 punto diseño) El `input` de búsqueda de `Manage your workouts` estará desactivado durante el modo edición y estará activo cuando se salga de él.

#### 1.9- (1 punto desarrollo) Al cambiar de ruta, se cancelarán los cambios pendientes y se saldrá del modo edición.

#### 1.10- (1 punto diseño) Mientras se guardan los cambios, se oscurecerá la pantalla, se desactivará cualquier acción y se mostrará un `spinner`.

![image1.10](./img/image1.10.png)

#### 1.11- Al pulsar sobre un workout se resaltará haciéndolo más grande (texto e imagen), el resto de workouts disminuirán de tamaño y se harán semitransparentes.

Nota: Esta pregunta se valorará tanto en diseño como en desarrollo. Para obtener los puntos de desarrollo hay que solucionar como mínimo lo que se pide en los subapartados y lo mismo en diseño.

![image1.11](./img/image1.11.png)

#### 1.11.1- (1 punto desarrollo) Por escribir en la consola el tamaño que debería tener el workout pulsado y el tamaño del resto de workouts cuando se entre en modo edición.
#### 1.11.2- (1 punto desarrollo) Por escribir en la consola los tamaños de los workouts cuando se salga del modo edición.

Nota: Para valorar este apartado hay que haber resuelto el anterior.

#### 1.11.3- (1 punto diseño) Por hacer más grande el  workout pulsado.
#### 1.11.4- (1 punto diseño) Por hacer más pequeños el resto de workouts.

Nota: Evite los molestos bordes que se ven en la imagen

![image1.11.4](./img/image1.11.4.png)

#### 1.11.5- (1 punto diseño) Por hacer semitransparentes el resto de workouts.
#### 1.11.6- (1 punto diseño) Al salir del modo edición, el estilo será el inicial.
#### 1.11.7- (1 punto diseño) La transición entre tamaños será animada.


Para entregar
-------------

* Ejecute el siguiente comando para comprobar que está en la rama correcta y ver los ficheros que ha cambiado:


```bash
    git status
```

* Prepare los cambios para que se añadan al repositorio local:

```bash
    git add --all
    git commit -m "completed exam"
```

* Compruebe que no tiene más cambios que incluir:

```bash
    git status
```

* Dígale al profesor que va a entregar el examen.

* Conecte la red y ejecute el siguiente comando:

```bash
    git push origin <nombre-de-la-rama>
```

* Abandone el aula en silencio.

