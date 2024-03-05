
# Explicación de los Endpoints de la API

## 1. Obtener Todos Los Datos de una Colección

Este endpoint permite obtener datos de una colección específica en Firestore.

- **Ruta:** GET /api/fetchData/:collectionName



- **Descripción:**
- `:collectionName`: Parámetro en la URL que indica el nombre de la colección de la cual se quieren obtener datos.

- **Uso:**
- Realiza una solicitud GET a la ruta especificando el nombre de la colección (`:collectionName`) en la URL.
- Ejemplo: `/api/fetchData/prueba`

- **Respuesta:**
- Retorna un JSON con los datos de todos los documentos de la colección especificada.

## 2. Obtener Documento de una Colección  & ID

Este endpoint permite obtener datos de un documento específico en Firestore según su ID.

- **Ruta:** GET /api/getDocument/:collectionName/:documentId
- 
- **Descripción:**
- `:collectionName`: Parámetro en la URL que indica el nombre de la colección.
- `:documentId`: Parámetro en la URL que indica el ID del documento que se desea obtener.

- **Uso:**
- Realiza una solicitud GET a la ruta especificando el nombre de la colección (`:collectionName`) y el ID del documento (`:documentId`) en la URL.
- Ejemplo: `/api/getDocument/prueba/abc123`

- **Respuesta:**
- Retorna un JSON con los datos del documento específico si existe; de lo contrario, devuelve un código de estado 404 si el documento no se encuentra.

## 3. Añadir Documento a una Colección

Este endpoint permite añadir un nuevo documento a una colección específica en Firestore.

- **Ruta:** POST /api/addDoc/:collectionName
- 
- **Descripción:**
- `:collectionName`: Parámetro en la URL que indica el nombre de la colección a la cual se añadirá el documento.

- **JSON Enviado:** 
Se aplicará un JSON respectivo para cada colecicón. Cada una tiene sus campos
```json
{
  "nombre": "string",
  "numero": integer
}
```
-   **Uso:**
    
    -   Realiza una solicitud POST a la ruta especificando el nombre de la colección (`:collectionName`) en la URL.
    -   Adjunta un JSON con los datos del nuevo documento en el cuerpo de la solicitud.
    -   Ejemplo: `/api/addDoc/prueba`
-   **Respuesta:**
    
    -   Retorna un JSON con el ID del nuevo documento creado. En caso de error, devuelve un código de estado 400 si la solicitud es inválida o 500 si hay un error interno del servidor.


