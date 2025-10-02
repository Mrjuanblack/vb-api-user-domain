Todas las exportaciones tienen que ir a index.ts

Después de hacer un cambio al proyecto, se tiene que ejecutar:

npm run clean
npm run build
Recordar actualizar la versión del paquete

Una vez hecho eso, subir al repositorio los cambios



Una vez actualizado, para poder actualizar este paquete en los proyectos que lo consumen se corre este comando:
npm update api-user-domain