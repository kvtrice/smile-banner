import { useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseApp from '../firebase';

const PrivateKeyFetcher = ({ documentID, onDataFetched }) => {
    useEffect(() => {
        const fetchData = async () => {
            // Initialise Firebase Firestore
            const firestore = getFirestore(firebaseApp)
            // Fetch the document from Firestore
            const privateKey = await getDoc(doc(firestore, 'private', documentID))
            // Fetch the API Key
            const openaiApiKey = privateKey.data().openaiApiKey;
            onDataFetched(openaiApiKey)
        }

        // Trigger the data fetch on mount or when dependencies change
        fetchData()
    }, [documentID, onDataFetched])  

    // return null as nothing to render
    return null
}

export default PrivateKeyFetcher