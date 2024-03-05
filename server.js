//Para arrancar la API usar -----> npm start

const express = require('express');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, getDoc, addDoc, doc } = require('firebase/firestore');

const app = express();
const port = 3000;

// Initialize Firebase app
const firebaseConfig = {
    //........... INSERTAR CONFIGURACIÓN AQUÍ
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Define an API endpoint to fetch data from the "prueba" collection
app.get('/api/fetchData/:collectionName', async (req, res) => {
    try {
      const { collectionName } = req.params;
      const dynamicCollection = collection(db, collectionName);
      const querySnapshot = await getDocs(dynamicCollection);
  
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
  
      res.json(data);
    } catch (error) {
      console.error('Error reading data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Define an API endpoint to fetch data from a specific collection and document
  app.get('/api/getDocument/:collectionName/:documentId', async (req, res) => {
    try {
      const { collectionName, documentId } = req.params;
  
      const specificCollection = collection(db, collectionName);
      const specificDocument = doc(specificCollection, documentId);
      const documentSnapshot = await getDoc(specificDocument);
  
      if (!documentSnapshot.exists()) {
        res.status(404).json({ error: 'Document not found' });
        return;
      }
  
      const data = {
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      };
  
      res.json(data);
    } catch (error) {
      console.error('Error fetching document:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


// Define an API endpoint to create a document in the "prueba" collection
app.post('/api/addDoc/:collectionName', express.json(), async (req, res) => {
    try {
      const { nombre, numero } = req.body;
      const { collectionName } = req.params;

  
      if (!nombre || typeof numero !== 'number') {
        res.status(400).json({ error: 'Invalid request payload' });
        return;
      }
  
      const pruebaCollection = collection(db, collectionName);
      const newDocRef = await addDoc(pruebaCollection, {
        nombre: nombre,
        numero: numero,
      });
  
      res.status(201).json({ id: newDocRef.id });
    } catch (error) {
      console.error('Error adding document:', error);
      res.status(500).json({ error:  'Internal Server Error'});
    }
  });
  







app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
