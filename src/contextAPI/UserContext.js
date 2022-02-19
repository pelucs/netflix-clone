import React, { useState, useEffect } from 'react';
import { auth, db } from '../Firebase';

export const UserContext = React.createContext();

export const UserContextProvider = props => {

  const [users, setUsers] = useState();
  const [espec, setEspec] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        db.collection("user").get().then(snap => {
          let idAccount = auth.currentUser.uid.substring(0, 17),
              filtered = snap.docs.filter(filter => filter.id.substring(0, 17) === idAccount),
              user = filtered.map(doc => doc.data());
          
          setUsers(user);
        })
      }
    })
  }, []);

  return(
    <UserContext.Provider value={{ users, setUsers, espec, setEspec }}>
      {props.children}
    </UserContext.Provider>
  );
}