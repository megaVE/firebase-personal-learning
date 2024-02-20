import { db } from "../firebase/config";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

// Basic CRUD Operations

export async function createOperation(table, newElement) {
  try {
    console.log("table: ", table, ", element: ", newElement)
    await addDoc(collection(db, table), newElement)
  } catch(error) {
    alert("Error adding new user to database.")
    console.log(error)
  }
}

export async function readOperation(table) {
  try {
    const data = await getDocs(collection(db, table))
    const refinedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    
    return refinedData
  } catch (error) {
    alert("Error reading the database.")
    console.log(error)
  }
}

export async function updateOperation(table, elementId, elementUpdate) {
  try {
    const toUpdateElement = doc(db, table, elementId)
    await updateDoc(toUpdateElement, elementUpdate)
  } catch (error) {
    alert("Error updating user to database")
    console.log(error)
  }
}

export async function deleteOperation(table, elementId) {
  try {
    const toDeleteElement = doc(db, table, elementId)
    await deleteDoc(toDeleteElement)
  } catch (error) {
    alert("Reror deleting user from database")
    console.log(error)
  }  
}
