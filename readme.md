- Todas las exportaciones tienen que ir a index.ts
- Después de hacer un cambio al proyecto, se tiene que ejecutar:

Comando para actualizar el proyecto:
```bash
npm run clean
npm run build
```

- Recordar actualizar la versión del paquete, una vez hecho eso, subir al repositorio los cambios

Para actualizar la version de api-user-domain
```bash
npm version minor
```
Para Instalar la version actualizada de api-user-domain
```bash
npm install api-user-domain@latest 
```

Una vez actualizado, para poder actualizar este paquete en los proyectos que lo consumen se corre este comando:
```bash
npm update api-user-domain
npm install api-user-domain --force
npm install api-user-domain@latest
```