// Run this script once to initialize Firebase with demo products
// Usage: node src/initFirebase.js

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'
import { DEMO_PRODUCTS } from './data.js'

// Your Firebase configuration - REPLACE WITH YOUR ACTUAL CONFIG
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

async function initializeDatabase() {
  try {
    console.log('Initializing Firebase...')
    const app = initializeApp(firebaseConfig)
    const database = getDatabase(app)
    const productsRef = ref(database, 'products')

    console.log('Saving demo products to Firebase...')
    await set(productsRef, DEMO_PRODUCTS)
    console.log('✅ Demo products successfully saved to Firebase!')
    console.log(`Total products: ${DEMO_PRODUCTS.length}`)
  } catch (error) {
    console.error('❌ Error initializing Firebase:', error)
  }
}

initializeDatabase()
