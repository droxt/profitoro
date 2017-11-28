Examen Primera Evaluación
=========================

# Día 04/12/2017 Tiempo: 5 horas

* Nota: Cada pregunta se valorará como bien o como mal (valoraciones intermedias serán excepcionales).
* Nota2: En cada pregunta se especifica si se valora en el examen de diseño o en el de desarrollo.
* Nota3: Para aprobar cada examen hay que obtener una puntuación mínima de 5 puntos en ese examen.
* Nota4: Organice su tiempo. Si no consigue resolver un apartado pase al siguiente. El examen consta de ejercicios que se pueden resolver de forma independiente. Los apartados de diseño y de desarrollo también se pueden resolver por separado. Si un apartado depende de otro que no sabe resolver, siempre puede dar una solución que aunque no sea correcta, le permita seguir avanzando.
* Nota5: Para que una solución sea correcta, no sólo hay que conseguir que haga lo que se pide, sino que además todo lo que funcionaba lo tiene que seguir haciendo.
* Nota6: Lea completamente el examen antes de empezar y comience por lo que le parezca más fácil.

Pasos previos antes de empezar

* Clone el repositorio del enunciado

```bash
    git clone https://user-daw-zayas@bitbucket.org/surtich/profitoro-enunciado-primera.git
```

* Vaya al directorio del repositorio

```bash
    cd profitoro-enunciado-primera
```

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

El único ejercicio pretende que se puedan añadir tareas y marcarlas como realizadas durante el tiempo de trabajo ("working").

Una tarea podrá estar pendiente, en proceso y realizada.

Por otro lado, las tareas pueden tener prioridad.

Nota: Para realizar el ejercicio es obligatorio crear los componentes indicados y utilizar Vuex cuando sea necesario.

#### 1.- Cree un componente que muestre las tareas a realizar.

#### 1.1- (1 punto diseño) Dependiendo del estado de la tarea ésta se mostrará en una sección diferente del componente.
#### 1.2- (1 punto diseño) Dependiendo de la prioridad de la tarea ésta se mostrará con un color diferente.

![image1.1](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image1.1.png)

#### 1.3- (0,5 puntos diseño) Al situarse  encima de una tarea se resaltará variando su color.

#### 1.4- (1 punto diseño) Dependiendo del tamaño de la pantalla, el componente variará su ubicación

![image1.4](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image1.4.png)

![image1.4bis](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image1.4bis.png)

#### 1.5- (1 punto diseño) La lista de tareas sólo se mostrará durante el tiempo de trabajo (WORNKG, state == 0) y se ocultará en las pausas.

#### 1.6- (1 punto desarrollo) Habrá un botón que permitirá mostrar u ocultar la lista de tareas durante el tiempo de trabajo.

![image1.6](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image1.6.png)

#### 2.- Cree un componente que permita añadir nuevas tareas.

Nota: También puede reutilizar el componente anterior.

#### 2.1- (1 punto diseño) La apariencia será la que se muestra en la imagen.

![image2.1](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image2.1.png)

#### 2.2- (2 puntos desarrollo) Al pulsar "intro" sobre la caja de texto se añadirá a la lista de tareas.

* Nota: También se podrá añadir al pulsar sobre un botón (no mostrado en la imagen).
* Nota 2: Las tareas se mostrarán con la prioridad seleccionada y en el apartado ToDo (pendiente).
* Nota 3: Observe el estilo en la imagen.

#### 3.- La tarea puede variar su estado.

#### 3.1- (1 punto desarrollo) Al pulsar sobre el botón ">" la tarea pasará del estado pendiente a "en progreso".
#### 3.1bis- (1 punto diseño) El estilo será el que se muestra en la imagen.

![image3.1](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image3.1.png)

#### 3.2- (1 punto desarrollo) Al pulsar sobre la casilla de verificación la tarea pasará de "en progreso" a completada.
#### 3.2bis- (1 punto diseño) El estilo será el que se muestra en la imagen.

![image3.2](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image3.2.png)

#### 3.3- (2 puntos desarrollo) En cualquiera de las secciones (ToDo, InProgress, Done) las tareas se mostrarán ordenadas desde la más prioritaria a la menos prioritaria.

![image3.3](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image3.3.png)

* Nota: Para ordenar, puede utilizar el método sort de loas arrays o la función _.sortBy de Lodash. Esta librería la tiene que importar con 'import'

#### 3.4- (1 punto diseño) Cuando todas las tareas estén en estado 'done', se mostrará un texto como el de la imagen.

![image3.4](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image3.4.png)

#### 3.5- (1 punto desarrollo) Al pulsar sobre el botón "clear done", se eliminarán las tareas completadas.
#### 3.5Bis- (1 punto diseño) Este botón sólo se mostrará cuando haya tareas completadas.

![image3.5](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image3.5.png)

#### 4- (2 puntos desarrollo) En las tareas completadas se mostrará un "badge" indicando cuántos pomodoros ha llevado su realización.
#### 4Bis- (0,5 puntos puntos diseño) El estilo será el de la imagen.

Pista: Para calcular cuántos pomodoros ha llevado una tarea puede hacer lo siguiente:

* Añadir al store una variable que indique cuántos pomodoros se han completado. Supongamos que se llama "pomodoros"
* Cada vez que entre en estado de "working" incrementar la variable "pomodoros".
* Cuando una tarea pase del estado de "pendiente" a "en proceso" almacenar en la tarea el valor de la variable "pomodoros". Esto indicará el pomodoro de inicio. Supongamos que le asigna el nombre "pomodorosWhenStarted".
* Finalmente, cuando marque una tarea como completada, almacenará en la tarea el valor de la variable "pomodoros" anterior con el nombre "pomodorosWhenFinished".
* Mostrará la diferencia entre "pomodorosWhenFinished" y "pomodorosWhenStarted".

![image4](https://bitbucket.org/surtich/profitoro-enunciado-primera/downloads/image4.png)


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
